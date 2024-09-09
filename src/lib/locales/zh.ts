export const zh = {
	common: {
		login: '登录',
		or: '或',
		yes: '是',
		no: '否',
		none: '无',
		color: {
			white: '白色',
			black: '黑色',
			green: '绿色',
			red: '红色',
			blue: '蓝色',
			yellow: '黄色',
			purple: '紫色',
			matteBlack: '哑光黑',
			matteGreen: '哑光绿'
		},
		typeHere: '在此输入...',
		select: '选择',
		warning: '警告',
		error: '错误',
		retry: '重试',
		moreDetails: '更多详情',
		home: '首页',
		add: '添加',
		edit: '编辑',
		save: '保存',
		cancel: '取消',
		close: '关闭',
		remove: '移除',
		reset: '重置',
		upload: '上传'
	},

	user: {
		name: '姓名',
		firstName: '名字',
		lastName: '姓氏',
		email: '电子邮件',
		phone: '电话号码',
		password: '密码',
		profilePicture: '头像'
	},

	navbar: {
		instantQuote: '即时报价',
		products: '产品',
		whyUs: '为什么选择我们?',
		support: '支持',
		login: '登录',
		i18n: {
			language: '语言',
			currency: '货币'
		},
		cart: {
			myCart: '我的购物车',
			viewCart: '查看购物车',
			proceedToCheckout: '继续结账',
			loginViewCart: '登录以查看您的购物车',
			cartEmpty: '您的购物车是空的',
			orderNow: '立即下单',
			subTotal: '小计'
		},
		user: {
			orders: '订单',
			profile: '个人资料',
			settings: '设置',
			logout: '登出'
		}
	},

	login: {
		pageTitle: '登录',
		signIn: '登录',
		rememberMe: '记住我',
		forgotPassword: '忘记密码?',
		dontHaveAccount: '没有账号?',
		signInGoogle: '用谷歌登录'
	},

	register: {
		pageTitle: '注册',
		signUp: '注册',
		confirmPassword: '确认密码',
		iAgree: '我同意注册',
		alreadyHaveAccount: '已经有账号了?',
		signInGoogle: '用谷歌登录'
	},

	profile: {
		pageTitle: '个人资料',
		myProfile: '我的个人资料',
		personalInformation: {
			title: '个人信息',
			editProfile: '编辑资料',
			savingProfile: '正在保存资料',
			saveProfileSuccess: '资料保存成功',
			saveProfileError: '保存资料失败'
		},
		addresses: {
			title: '送货地址',
			newAddress: '新地址',
			noAddressFound: '未找到地址',
			removingAddress: '正在删除地址',
			removeAddressSuccess: '地址删除成功',
			removeAddressError: '删除地址失败'
		},
		upsertAddress: {
			addAddress: '添加送货地址',
			updateAddress: '更新送货地址',
			nameError: '请输入您的姓名',
			phoneError: '请输入您的电话号码',
			addressLine1: '地址行 1',
			addressLine1Error: '请输入您的地址',
			addressLine2: '地址行 2',
			city: '城市',
			cityError: '请输入您的城市',
			state: '州/省',
			stateError: '请输入您的州/省',
			country: '国家',
			countryError: '请输入您的国家',
			postalCode: '邮政编码',
			postalCodeError: '请输入您的邮政编码',
			savingAddress: '正在保存地址',
			saveAddressSuccess: '地址保存成功',
			saveAddressError: '保存地址失败',
			addingAddress: '正在添加地址',
			addAddressSuccess: '地址添加成功',
			addAddressError: '添加地址失败'
		}
	},

	home: {
		pageTitle: '首页'
	},

	products: {
		standardPcb: '标准PCB',
		advancedPcb: '高级PCB',
		flexiblePcb: 'FPC/刚挠结合板',
		assembly: '组装',
		stencil: 'SMD模板'
	},

	instantQuote: {
		pageTitle: 'Instant Quote',
		specification: 'Specifications',

		upsertProduct: {
			uploadingFiles: 'Uploading Files',
			savingCart: 'Saving to Cart',
			addingOrder: 'Adding to Order',
			updatingProduct: 'Updating Product Specifications',
			uploadFileError: 'Failed to upload file',
			saveCartError: 'Failed to save to cart',
			addOrderError: 'Failed to add to order',
			updateProductError: 'Failed to update product',
			saveCartSuccess: 'Product saved to cart',
			addOrderSuccess: 'Product added to order',
			updateProductSuccess: 'Product updated successfully'
		},

		pricing: {
			title: '价格和制作时间',
			weight: '重量',
			buildTime: '制作时间',
			chargeDetails: '费用详情',
			total: '总计',
			saveProduct: '保存产品',
			saveToCart: '保存到购物车',
			addToOrder: '添加到订单'
		},

		gerberFile: {
			title: 'Gerber 文件',
			description: '请上传您的 PCB Gerber 文件（仅接受 .zip 和 .rar 格式）'
		}
	},

	shipping: {
		shippingEstimate: '运费估算',
		shippingInfo: '运送信息',
		selectShippingMethod: '选择运送方式',
		shippingTo: '运送到',
		selectCountry: '选择国家',
		shippingMethod: '运送方式',
		price: '价格',
		deliveryTime: '交货时间',
		restriction: '限制',
		country: '国家',
		method: '方式',
		weight: '重量',
		shippingCost: '运费',
		updatingShipping: '正在更新运送方式',
		updateShippingError: '更新运送信息失败',
		updateShippingSuccess: '运送信息更新成功'
	},

	orders: {
		pageTitle: '我的订单',
		viewCart: '查看购物车',
		orderId: '订单编号',
		createdDate: '创建日期',
		status: '状态',
		itemsCount: '商品数量',
		viewDetails: '查看详情'
	},

	order: {
		pageTitle: '订单',
		allOrders: '所有订单',
		myCart: '我的购物车',
		orderId: '订单编号',

		submitReview: {
			noProducts: '购物车中没有商品',
			shippingError: '未提供运送信息',
			deliveryError: '未提供送货地址',
			filesNotUploaded: '产品文件未上传',
			submittingOrder: '正在提交订单',
			submitOrderError: '提交订单失败',
			submitOrderSuccess: '订单提交成功'
		},

		saveOrder: {
			savingOrder: '正在保存订单',
			saveOrderError: '保存订单失败',
			saveOrderSuccess: '订单保存成功'
		},

		cancelReview: {
			cancellingReview: '正在取消审核',
			cancelReviewError: '取消审核失败',
			cancelReviewSuccess: '审核取消成功'
		},

		orderMessage: {
			review: {
				title: '您的订单已提交审核',
				button: '取消审核'
			},
			rejected: {
				title: '您的订单审核已被拒绝',
				description: '查看审核消息以获取更多详细信息',
				button: '重新提交审核'
			},
			approved: {
				title: '您的订单审核已通过',
				description: '查看更新后的价格并继续付款',
				button: '继续付款'
			},
			confirmed: {
				title: '付款成功！',
				description: '您的订单已确认，正在处理中'
			},
			fabrication: {
				title: '制造中',
				description: '查看每个产品的进度状态'
			},
			delivery: {
				title: '配送中',
				description: '您的订单正在配送中',
				button: '跟踪配送'
			},
			completed: {
				title: '订单完成！',
				description: '感谢您的购物'
			}
		},

		deliveryAddress: {
			title: '送货地址',
			selectAddress: '选择送货地址',
			noAddressFound: '未找到地址',
			failedToGetAddress: '获取地址失败',
			updatingAddress: '正在更新地址',
			selectAddressError: '选择送货地址失败',
			selectAddressSuccess: '送货地址选择成功'
		},

		productsTable: {
			products: '产品',
			addProduct: '添加产品',
			noProductFound: '未找到产品',
			product: '产品',
			buildTime: '制作时间',
			quantity: '数量',
			gerberFile: 'Gerber 文件',
			quotePrice: '报价',
			finalPrice: '最终价格',
			details: '详情',
			edit: '编辑',
			notUploaded: '未上传',
			viewProgress: '查看进度',
			productDetails: {
				title: '产品详情',
				failedToFetch: '获取产品详情失败'
			},
			fabrication: {
				title: '制造',
				fabricationProgress: '制造进度',
				notStarted: '制造未开始',
				completed: '制造完成'
			}
		},

		reviewMessages: {
			title: '审核消息',
			failedToSend: '发送消息失败',
			noMessages: '尚无消息',
			conversationClosed: '对话已关闭'
		},

		orderSummary: {
			title: '订单总结',
			itemsCost: '商品费用',
			shippingCost: '运费',
			discount: '折扣',
			taxes: '税费',
			orderTotal: '订单总计',
			estDeliveryDate: '预计送达日期',
			estDeliveryDateDesc:
				'预计送达日期是根据订单中制作时间最长的商品计算得出的。请注意，该日期仅供参考。如果您的订单需要确认，送货日期可能会有所延迟。',
			weight: '重量',
			weightDesc:
				'这里的重量是根据毛重和体积重中的较大值计算的，仅供参考。如果实际重量与估算值不同，运费可能会相应调整。',
			submitOrderForReview: '提交订单审核',
			saveOrder: '保存订单'
		},

		payment: {
			title: '支付详情',
			transactionId: '交易编号',
			paymentTime: '支付时间',
			paymentMethod: '支付方式',
			totalAmount: '总金额',
			failedToGenerateToken: '生成支付令牌失败',
			failedToSubmit: '提交支付失败',
			checkout: '结账',
			amountToBePaid: '待支付金额',
			paymentSuccess: '支付成功',
			paymentTotal: '支付总额',
			print: '打印',
			payNow: '立即支付',
			cancelPayment: '取消支付'
		},

		removeProduct: {
			modalTitle: '确定要移除此产品吗？',
			modalTitleAll: '确定要移除所有产品吗？',
			modalBody: '此操作无法撤销',
			removingProduct: '正在移除产品',
			removingProductAll: '正在移除所有产品',
			removeProductError: '移除产品失败',
			removeProductAllError: '移除所有产品失败',
			removeProductSuccess: '产品移除成功',
			removeProductAllSuccess: '所有产品移除成功'
		},

		removeOrder: {
			title: '移除订单',
			description: '此操作将永久删除订单及其所有相关信息。此操作不可撤销，请谨慎操作。',
			modalTitle: '确定要移除此订单吗？',
			modalBody: '此操作无法撤销',
			removingOrder: '正在移除订单',
			removeOrderError: '移除订单失败',
			removeOrderSuccess: '订单移除成功'
		},

		trackDelivery: '跟踪配送'
	},

	orderStatus: {
		CREATED: '订单已创建',
		CART: '购物车',
		SAVED: '已保存为草稿',
		REVIEW: '审核中',
		REJECTED: '审核被拒绝',
		APPROVED: '审核通过',
		PAYMENT: '支付',
		CONFIRMED: '订单确认',
		FABRICATION: '制造中',
		DELIVERY: '配送中',
		COMPLETED: '订单完成',
		CANCELLED: '订单取消',
		REFUNDED: '已退款'
	}
};
