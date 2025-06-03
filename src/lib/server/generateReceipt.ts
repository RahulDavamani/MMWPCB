import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';

type Receipt = {
	type: 'ORDER' | 'SERVICE_REQUEST';
	id: string;
	user: {
		firstName: string;
		lastName: string;
		email: string;
		phone?: string;
	};
	deliveryAddress?: {
		addressLine1: string;
		addressLine2: string;
		city: string;
		state: string;
		country: string;
		postalCode: string;
	};
	paymentInfo: {
		id: string;
		createdAt: Date;
		amount: string;
		currency: string;
	};
	items: {
		name: string;
		quantity: number;
		unitPrice: number;
		amount: number;
	}[];
	shippingPrice?: number;
	discountPrice?: number;
};

export const generateReceipt = async ({
	type,
	id,
	user,
	deliveryAddress,
	paymentInfo,
	items,
	shippingPrice,
	discountPrice
}: Receipt) => {
	const doc = new PDFDocument({ margin: 50 });

	// Header
	doc.fontSize(20).text('Payment Receipt', 50, 50);

	// Receipt info
	doc.fontSize(10).text(`${type === 'ORDER' ? 'Order' : 'Service Request'} No: ${id}`, 50, 100);
	doc.text(`Transaction ID: ${paymentInfo.id}`);
	doc.text(`Payment Date: ${paymentInfo.createdAt.toDateString()}`);
	doc.text(`Amount: ${paymentInfo.amount}`);
	doc.text(`Currency: ${paymentInfo.currency}`);

	// Customer info
	doc.text('Bill to:', 350, 100);
	doc.text(`${user.firstName} ${user.lastName}`, 350, 115);
	doc.text(user.email);
	if (user.phone) doc.text(user.phone);
	if (deliveryAddress) {
		doc.text(deliveryAddress.addressLine1);
		doc.text(deliveryAddress.addressLine2);
		doc.text(deliveryAddress.city + ', ' + deliveryAddress.state);
		doc.text(deliveryAddress.country + '-' + deliveryAddress.postalCode);
	}

	const itemGap = 25;
	let y = 280;

	// Column X positions
	const xDescription = 50;
	const xQty = 300;
	const xUnitPrice = 370;
	const xAmount = 460;

	// Headers
	doc.font('Helvetica-Bold').fontSize(10);
	doc.text('Description', xDescription, y);
	doc.text('Qty', xQty, y, { width: 50, align: 'right' });
	doc.text('Unit Price', xUnitPrice, y, { width: 70, align: 'right' });
	doc.text('Amount', xAmount, y, { width: 70, align: 'right' });

	y += 20;

	// Rows
	doc.font('Helvetica').fontSize(10);
	items.forEach(({ name, quantity, unitPrice, amount }) => {
		doc.text(name, xDescription, y);
		doc.text(String(quantity), xQty, y, { width: 50, align: 'right' });
		doc.text(unitPrice.toFixed(2), xUnitPrice, y, { width: 70, align: 'right' });
		doc.text(amount.toFixed(2), xAmount, y, { width: 70, align: 'right' });
		y += itemGap;
	});
	y += 10;

	// Shipping Price
	if (shippingPrice) {
		doc.fontSize(10);
		doc.text('Shipping Price', xUnitPrice, y, { width: 80, align: 'right' });
		doc.text(shippingPrice.toFixed(2), xAmount, y, { width: 70, align: 'right' });
		y += 20;
	}

	// Discount
	if (discountPrice !== undefined) {
		doc.text('Discount', xUnitPrice, y, { width: 80, align: 'right' });
		doc.text(`- ${discountPrice.toFixed(2)}`, xAmount, y, { width: 70, align: 'right' });
		y += 20;
	}

	// Total
	doc.font('Helvetica-Bold').fontSize(10);
	doc.text('Total', xUnitPrice, y, { width: 80, align: 'right' });
	doc.text(`${paymentInfo.amount}`, xAmount, y, { width: 70, align: 'right' });

	// Footer
	doc.fontSize(8).text('Thank you for your business!', 50, y + 60, { width: 500 });

	doc.end();

	const stream = new PassThrough();
	const chunks: Buffer[] = [];
	doc.pipe(stream);

	stream.on('data', (chunk) => chunks.push(chunk));

	return await new Promise<Buffer>((resolve, reject) => {
		stream.on('end', () => resolve(Buffer.concat(chunks)));
		stream.on('error', reject);
	});
};
