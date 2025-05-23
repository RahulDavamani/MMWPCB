import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';
import pe from '../../prisma/pe';
import { frequencyDomainRFTest } from '../../stores/utils/service/frequencyDomainRFTest';
import { en } from '$lib/locales/en';
import { timeDomainMeasurement } from '../../stores/utils/service/timeDomainMeasurement';
import { antennaTestSystems } from '../../stores/utils/service/antennaTestSystems';
import { circuitTestPlatforms } from '../../stores/utils/service/circuitTestPlatforms';

export const generateServiceQuotation = async (id: string) => {
	const { createdAt, serviceCode, company, firstName, lastName, email, phone, estDeliveryDate, price } =
		await prisma.service
			.findUniqueOrThrow({
				where: { id },
				select: {
					createdAt: true,
					serviceCode: true,
					company: true,
					firstName: true,
					lastName: true,
					email: true,
					phone: true,
					estDeliveryDate: true,
					price: true
				}
			})
			.catch(pe);

	const services = [
		...Object.values(frequencyDomainRFTest(en.services.sections.frequencyDomainRFTest).services),
		...Object.values(timeDomainMeasurement(en.services.sections.timeDomainMeasurement).services),
		...Object.values(antennaTestSystems(en.services.sections.antennaTestSystems).services),
		...Object.values(circuitTestPlatforms(en.services.sections.circuitTestPlatforms).services)
	];
	const serviceTitle = services.find((s) => s.code === serviceCode)?.l.title;

	const doc = new PDFDocument({ margin: 50 });
	const stream = new PassThrough();
	const chunks: Buffer[] = [];
	doc.pipe(stream);

	const divider = () =>
		doc.moveDown().strokeColor('#cccccc').lineWidth(1.5).moveTo(50, doc.y).lineTo(545, doc.y).stroke().moveDown(0.5);

	const gap = (value = 1) => doc.moveDown(value);

	const header = (text: string) =>
		doc.font('Helvetica-Bold').fontSize(18).text(text, { align: 'center' }).font('Helvetica').fontSize(11).moveDown();

	const title = (text: string) =>
		doc.moveDown().font('Helvetica-Bold').fontSize(16).text(text).font('Helvetica').fontSize(11).moveDown();

	const text = (text: string) => doc.text(text).moveDown(0.1);

	const field = (title: string, value: string) =>
		doc
			.font('Helvetica-Bold')
			.text(title + ': ', { continued: true })
			.font('Helvetica')
			.text(value)
			.moveDown(0.1);

	header('Testing Services Quotation');
	field('Quotation No.', `#${id}`);
	field('Date', createdAt.toLocaleDateString());
	divider();

	title('Customer Information');
	field('Company', `${company}`);
	field('Contact Person', `${firstName} ${lastName}`);
	field('Phone', `${phone}`);
	field('Email', `${email}`);
	divider();

	title('Quotation Details');
	field('Service', `${serviceTitle}`);
	field('Cost', `$${price?.toFixed(2)}`);
	gap(0.5);
	text('Taxes and related charges are not included.');
	divider();

	title('Payment Methods');
	text('We accept payment via credit card and PayPal.');
	divider();

	title('Lead Time');
	field('Lead Time', `${estDeliveryDate ? estDeliveryDate.toLocaleDateString() : 'N/A'}`);
	divider();

	title('Notes');
	text('1. This quotation is valid for 10 days.');
	text('2. Prices don’t include taxes and related charges.');
	divider();

	title('Supplier Information');
	field('Company Name', 'Velenova Limited');
	field('Email', 'info@velenova.com.hk');
	field('Address', 'Unit 518A, 5/F, InnoCentre, 72 Tat Chee Avenue, Kowloon Tong, Kowloon, Hong Kong');
	divider();

	title('Payment Term');
	text('1. Full Payment in Advance');
	text(
		'Customers must pay 100% of the total amount in advance after order confirmation. Production will only commence after we confirm that the payment has been received. Before full payment is confirmed, the order will remain in a "Review Approved - waiting for payment" status and will not be scheduled for production.  '
	);
	gap();

	text('2. Payment Methods');
	text('We accept payment via credit card and PayPal.');
	gap();

	text('3. Payment Risk Liability');
	text(
		'(1) If the customer encounters technical issues with the payment platform, delays in bank processing, or fund freezes, resulting in a situation where the customer has been charged but we have not received the funds, any related losses and processing fees will be borne by the customer.'
	);
	text(
		'(2) The customer must independently file a claim with the issuing bank or PayPal to recover the funds. We will only assist by providing necessary information such as the order number.'
	);
	text(
		'(3) The production process will only begin after our account confirms receipt of the full payment. Notifications of "Payment Successful" from the payment platform will not be accepted as proof of receipt. The customer cannot request early production based on the claim of "payment deducted."'
	);
	gap();

	text('4. Payment Deadline');
	text(
		'The customer must complete the payment within 10 business days after order confirmation. If payment is not made by the deadline, we reserve the right to cancel the order or adjust the price.'
	);
	gap();

	text('5. Production Notification');
	text(
		'Once payment is confirmed, we will notify the customer via email with the estimated delivery time. We reserve the right to interpret and revise this policy.'
	);
	divider();

	title('Return and Refund Policy');
	text('1. Customer Order Cancellation');
	text(
		'Before production: Customers may apply for a full refund but must bear any administrative fees, bank charges, third-party payment platform fees, and exchange rate differences (if applicable).'
	);
	text('After production: Due to the allocation of production resources, payments made will not be refunded.');
	gap();

	text('2. Delays/Cancellations Due to Our Responsibility');
	text(
		'If we are unable to fulfill the order due to our reasons (e.g., material shortages, equipment failure, etc.) Customers may apply for a full refund if production has not yet started. If production has already begun, relevant costs (administrative fees, bank charges, third-party payment platform fees, exchange rate differences (if applicable), engineering fees, material wastage, etc.) will be deducted based on the actual progress, and the remaining balance will be refunded.'
	);
	gap();

	text('3. Force Majeure');
	text(
		'In cases of natural disasters, wars, or other force majeure events that prevent order completion, both parties will negotiate a refund or postponement arrangement.'
	);
	gap();

	text('4. Returns Due to Quality Issues');
	text('If our inspection confirms that the product does not meet specifications, the customer may choose:');
	text('(1) Free reproduction and prioritized delivery; or');
	text('(2) A partial refund based on the defect ratio.');
	text(
		'Return requests must be submitted within 3 business days after receipt of the goods, and relevant evidence must be provided. The customer shall bear the shipping costs incurred due to the return. We reserve the right to interpret and revise this policy.'
	);
	gap();

	text('5. Quality Issues Due to Shipping');
	text(
		'Once the goods are signed for, we take no responsibility. If obvious damage to the package is found before signing, please return it to the courier service company immediately. For quality issues caused during shipping, we will only assist in filing a claim with the courier service company and will not accept any related liability.'
	);
	gap();

	text('6. Refund Process');
	text(
		'Refund requests must be submitted under the relevant order on the website. We will complete the review and refund the amount to the original payment account within 15 business days.'
	);
	gap();

	text('7. Refund-Related Cost Responsibilities');
	text(
		'(1) Handling Fees: If an order is canceled or returned due to the customer’s reasons, the customer will be responsible for all related transaction costs, including bank handling fees and third-party payment platform fees. We reserve the right to deduct these fees from the refund amount.'
	);
	text(
		'(2) Exchange Rate Difference: If the refund involves currency exchange (e.g., the payment currency differs from the refund currency), the customer will be responsible for the exchange rate difference (based on the actual rate of the receiving bank or third-party payment platform on the day of the refund), and we will not be liable for losses due to exchange rate fluctuations.'
	);
	text(
		'(3) Net Refund Amount Description: The final refund amount will be the net amount after deducting the following costs:'
	);
	text('A. Actual production costs incurred (e.g., material procurement, engineering costs, etc.);');
	text('B. Bank charges and third-party payment platform fees;');
	text('C. Exchange rate differences (if applicable).');
	text('We reserve the right to interpret and revise this policy.');

	doc.end();
	stream.on('data', (chunk) => chunks.push(chunk));

	return await new Promise<Buffer>((resolve, reject) => {
		stream.on('end', () => resolve(Buffer.concat(chunks)));
		stream.on('error', reject);
	});
};
