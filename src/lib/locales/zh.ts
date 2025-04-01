import type { Lang } from './en';

export const zh: Lang = {
	common: {
		yes: '是',
		no: '否',
		or: '或',
		none: '无',
		other: '其他',

		search: '搜索',
		sortBy: '排序方式',
		typeHere: '在这里输入...',
		pleaseEnterValue: '请输入一个值',

		warning: '警告',
		error: '错误',

		add: '添加',
		edit: '编辑',
		save: '保存',
		continue: '继续',
		retry: '重试',
		cancel: '取消',
		close: '关闭',
		remove: '移除',
		reset: '重置',

		upload: '上传',
		select: '选择',
		home: '首页',
		moreDetails: '更多详情',

		noResultsFound: '未找到结果',
		notSelected: '未选择',

		page: '页面',
		results: '结果'
	},

	color: {
		white: '白色',
		black: '黑色',
		green: '绿色',
		red: '红色',
		blue: '蓝色',
		yellow: '黄色',
		purple: '紫色',
		pink: '粉色',
		orange: '橙色',
		grey: '灰色',
		matteBlack: '哑光黑',
		matteGreen: '哑光绿',
		matteBlue: '哑光蓝',
		matteRed: '哑光红',
		silver: '银色',
		silverWhite: '银白色',
		silverGray: '银灰色',
		metallic: '金属色',
		copper: '铜色',
		darkBlack: '深黑色',
		transparent: '透明'
	},

	user: {
		name: '姓名',
		firstName: '名',
		lastName: '姓',
		email: '邮箱',
		phone: '电话号码',
		password: '密码',
		profilePicture: '头像'
	},

	navbar: {
		instantQuote: '即时报价',
		services: '产品与服务',
		capabilities: '能力',
		whyUs: '为什么选择我们？',
		support: '支持',
		adminPortal: '管理员门户',
		backToApp: '返回应用',
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
			orderNow: '立即订购',
			subTotal: '小计'
		},
		user: {
			orders: '订单',
			serviceRequests: '服务请求',
			profile: '个人资料',
			settings: '设置',
			logout: '登出'
		}
	},

	login: {
		title: '登录',
		loggingIn: '正在登录',
		failedToLogin: '登录失败',
		loginSuccess: '您已成功登录',
		invalidEmail: '无效的邮箱',
		forgotPassword: '忘记密码？',
		dontHaveAccount: '没有账户？',
		signInGoogle: '使用Google登录'
	},

	signup: {
		title: '注册',
		signingup: '正在注册',
		failedToSignup: '注册失败',
		signupSuccess: '您已成功注册',

		verifyOtp: '验证OTP',
		otpSent: '验证码已通过电子邮件发送到',
		otpFailed: '发送验证码失败',
		incorrectOTP: '验证码不正确',
		enterOtp: '请输入发送到您邮箱的验证码',
		didNotGetOtp: '没有收到验证码？',
		resendOtp: '重新发送验证码',

		notYourEmail: '不是你的邮箱？',
		changeEmail: '更改邮箱',
		invalidEmail: '无效的邮箱',

		confirmPassword: '确认密码',
		passwordTooltip: '密码必须包含至少8个字符，包括大写字母、小写字母和数字',
		invalidPassword: '无效的密码',
		passwordsDoNotMatch: '密码不匹配',

		iAgree: '我同意注册',
		alreadyHaveAccount: '已经有账户？',
		signInGoogle: '使用Google登录'
	},

	forgotPassword: {
		forgotPassword: '忘记密码',
		enterEmail: '请输入您的邮箱，我们将发送验证码以重置密码',
		backToLogin: '返回登录',

		sendingOtp: '发送验证码',
		otpSent: '验证码已通过电子邮件发送到',
		otpFailed: '发送验证码失败',
		incorrectOTP: '验证码不正确',
		enterOtp: '请输入发送到您邮箱的验证码',
		didNotGetOtp: '没有收到验证码？',
		resendOtp: '重新发送验证码',

		notYourEmail: '不是你的邮箱？',
		changeEmail: '更改邮箱',
		invalidEmail: '无效的邮箱',
		enterValidEmail: '请输入有效的邮箱',

		enterPassword: '请输入您的新密码',
		confirmPassword: '确认密码',
		passwordTooltip: '密码必须包含至少8个字符，包括大写字母、小写字母和数字',
		invalidPassword: '无效的密码',
		passwordsDoNotMatch: '密码不匹配',
		enterSamePassword: '请输入相同的密码',
		resetPassword: '重置密码',
		resettingPassword: '正在重置密码',
		resetPasswordFailed: '重置密码失败',
		resetPasswordSuccess: '您的密码已成功重置'
	},

	profile: {
		pageTitle: '个人资料',
		myProfile: '我的个人资料',
		personalInformation: {
			title: '个人信息',
			editProfile: '编辑个人资料',
			savingProfile: '保存个人资料',
			saveProfileSuccess: '个人资料保存成功',
			saveProfileError: '保存个人资料失败'
		},
		addresses: {
			title: '送货地址',
			newAddress: '新地址',
			noAddressFound: '未找到地址',
			removingAddress: '正在移除地址',
			removeAddressSuccess: '地址移除成功',
			removeAddressError: '移除地址失败'
		},
		upsertAddress: {
			addAddress: '添加送货地址',
			updateAddress: '更新送货地址',
			nameError: '请输入您的姓名',
			phoneError: '请输入您的电话号码',
			addressLine1: '地址行1',
			addressLine1Error: '请输入您的地址',
			addressLine2: '地址行2',
			city: '城市',
			cityError: '请输入您的城市',
			state: '省',
			stateError: '请输入您的省',
			country: '国家',
			countryError: '请输入您的国家',
			postalCode: '邮政编码',
			postalCodeError: '请输入您的邮政编码',
			savingAddress: '保存地址',
			saveAddressSuccess: '地址保存成功',
			saveAddressError: '保存地址失败',
			addingAddress: '添加地址',
			addAddressSuccess: '地址添加成功',
			addAddressError: '添加地址失败'
		}
	},

	home: {
		pageTitle: '主页',
		instantQuote: '即时报价',
		quoteNow: '立即报价'
	},

	support: {
		title: '支持',
		subtitle: '你好，我们能帮您吗？',
		quickLinks: {
			howToOrder: '如何订购',
			generateGerberFile: '生成Gerber文件',
			accountSettings: '账户设置'
		},
		faqs: '常见问题',
		qa: '问答',
		moreTopics: '更多主题',
		sections: {
			myOrders: {
				title: '我的订单',
				subsections: {
					ordering: {
						title: '订购',
						questions: [
							{
								title: '如何下PCB和PCB组装订单？',
								contents: [
									[
										'从',
										'MMWPCB.com',
										'购买PCB既简单又方便。只需几个步骤，您就可以享受实惠且高质量的PCB原型制作服务。'
									],
									['视频：', '如何在PCBWay下在线订单？一分钟视频指南。'],
									['步骤1：点击您想要的服务类型。例如：PCB。'],
									['选择并填写规格，然后点击“计算”按钮继续。']
								]
							},
							{
								title: '如何下PCB组装订单（询价）？',
								contents: [
									['另一个更新文章（2022-02-25）：', '如何上传PCB组装（PCBA）询价'],
									['下 PCB 组装订单有三种方式。'],
									['1. 与 PCB 订单一起下 PCB 组装订单。'],
									[
										'您可以单击',
										'PCB即时报价',
										'导航栏进入，下单 PCB 订单后，选择装配以填写您的装配服务参数。点击计算以选择价格，添加到购物车并上传文件。'
									]
								]
							},
							{
								title: '如何下CNC订单？',
								contents: [
									[
										'除了PCB制造服务外，PCBWay还提供CNC加工、3D打印、钣金制造、注射成型和真空铸造服务。当您访问PCBWay网站并单击“CNC/3D打印”部分时，您可以在此看到五个可用的报价页面。五种服务的订购流程基本相同，除了某些选定参数。让我们介绍一下CNC加工的订购流程。现在开始吧！'
									]
								]
							}
						]
					},
					leadTime: {
						title: '交货时间',
						questions: [
							{
								title: '如何查看预计完成时间？',
								contents: [
									['在付款之前'],
									['在“待付款”列表下，单击产品标题或“查看详情”以调出产品详细信息框。'],
									['在此框中，您将找到预计的完成时间，如下图所示。']
								]
							},
							{
								title: '订单组合、运输和付款政策',
								contents: [
									['一次付款，一次发货！'],
									['1. 订单组合的目的是节省运费。如果 PCB 的时间安排不紧，对订单进行组合并一起发货。'],
									[
										'2. 将所有这些订单合并为一组并立即付款，您确认所有这些订单将在[xx-xx-xx]左右一起发货。这是我们可以完成该订单组中最后一个 PCB 订单的日期，我们可能需要一些额外的时间让快递公司（星期天无服务）来取走您的包裹。'
									]
								]
							},
							{
								title: '快递订单何时生产？',
								contents: [
									[
										'自从PCBWay推出24小时快递服务以来，它为那些急需PCB项目的客户带来了许多好处。然而，它也带来了来自订单延迟的客户的一些投诉。由于紧急订单的特殊性质，这些客户的投诉尤为严重。数据显示，大多数“延迟”是由于对24小时快递的误解造成的。'
									],
									[
										'1. 首先，定义PCBWay的24小时快递服务。时间跨度从开始生产到完成生产。值得注意的是，这个时间不计算在付款时间之后。'
									],
									['2. 付款应在18:00（GMT+8）之前完成，否则生产安排将推迟一天。']
								]
							}
						]
					},
					salesService: {
						title: '销售服务',
						questions: [
							{
								title: '我可以更换我的销售代表吗？',
								contents: [
									['我们每位销售代表都有专业培训。如果有任何不足之处，我们希望您能提供建议和纠正。'],
									['如果您对销售代表不满意，请将您的问题发送至service@mmwpcb.com请求更换。']
								]
							},
							{
								title: '如何找到我的销售人员以获取PCB或PCBA问题的帮助？',
								contents: [
									['如果您有任何问题，请联系您的销售代表或使用在线聊天。您可以通过以下方式找到他们的联系信息：'],
									['1. 在您的主页右上角或订单号码后，如以下图像的红框所示；'],
									['2. 在您的购物车或订单列表中；']
								]
							},
							{
								title: '如果销售代表或售后不回复怎么办？',
								contents: [
									['1. 可能是因为反垃圾邮件系统起了作用，导致电子邮件被阻止或发送到垃圾邮件中。请主动发送后续消息。'],
									['2. 如果他们在合理的时间内未能回复，并且您对订单有疑问，则可以：'],
									['a. 联系service@mmwpcb.com或feedback@mmwpcb.com以获取帮助。'],
									['b. 提起争议']
								]
							}
						]
					}
				}
			},
			myAccount: {
				title: '我的账户',
				subsections: {
					registeringSigningIn: {
						title: '注册与登录',
						questions: [
							{
								title: '我如何在PCBWay注册？',
								contents: [
									['1. 在主页或PCBWay页面的右上角点击加入'],
									['2. 输入您的电子邮件地址并设置并确认您的登录密码，然后开始购物！'],
									['注意：请确保输入正确的电子邮件地址，我们的系统目前仅识别英文字母。']
								]
							},
							{
								title: '我的账户不可用。我该怎么办？',
								contents: [
									['您的账户不可用可能有很多原因，例如：'],
									['1. 自我停用。在这种情况下，我们建议您注册一个新账户或联系服务/销售代表。'],
									['2. 因交易规则违规而被停用']
								]
							},
							{
								title: '我可以成为mmwpcb的分销商吗？',
								contents: [['您可以访问您提交的联系信息', '成为我们的分销商', '我们将与您联系以进行合作。']]
							}
						]
					},
					accountSettings: {
						title: '账户设置',
						questions: [
							{
								title: '账户设置',
								contents: [['我如何更改我的电子邮件地址？'], ['注意：我们不建议您频繁更改电子邮件地址。']]
							},
							{
								title: '我如何更改我的电子邮件地址',
								contents: [
									[
										'客户旧邮件不正确，或未收到验证邮件。可以通过“申请更改电子邮件”表单提交更改请求。客户需要填写新电子邮件地址并提供更改原因。'
									],
									['具体步骤如下：'],
									['步骤1：账户设置->更改电子邮件']
								]
							},
							{
								title: '我如何将我的电子邮件地址用于新的PCBWay账户？',
								contents: [
									['如果您有多个PCBWay账户并希望将现有的电子邮件地址链接到新账户，您需要：'],
									['1. 首先更改您现有/旧账户的电子邮件地址。此时，每个PCBWay账户只能链接到一个唯一的电子邮件地址。'],
									['2. 在成功更新您现有账户的地址后，您可以将新账户链接到另一个电子邮件地址。']
								]
							}
						]
					},
					mmwpcbRewards: {
						title: 'MMWPCB奖励',
						questions: [
							{
								title: '我如何使用我的奖励积分？',
								contents: [
									[
										'MMWPCB会员俱乐部有6个级别—V0、V1、V2、V3、V4、V5。您所处的级别决定了您享有的权益和特权。一旦满足最低要求，所有买家将自动分配一个会员级别（见下表）。'
									],
									['权益详细信息：'],
									['V0会员享受0%折扣', 'V1会员享受1%折扣', 'V2会员享受2%折扣', 'V3会员享受3%折扣']
								]
							},
							{
								title: 'MMWPCB会员俱乐部的特权是什么？',
								contents: [
									[
										'MMWPCB会员俱乐部有6个级别—V0、V1、V2、V3、V4、V5。您所处的级别决定了您享有的权益和特权。一旦满足最低要求，所有买家将自动分配一个会员级别（见下表）。'
									],
									['权益详细信息：'],
									['V0会员享受0%折扣', 'V1会员享受1%折扣', 'V2会员享受2%折扣', 'V3会员享受3%折扣']
								]
							},
							{
								title: '我的奖励积分尚未添加到我的账户。我该怎么办？',
								contents: [
									[
										'关于PCBWay积分和豆豆的详细介绍以及如何赚取它们，请点击',
										'关于PCBWay积分和豆豆的详细介绍',
										'了解更多。'
									],
									['如果积分尚未奖励到您的账户，可能是由于以下原因之一：'],
									['1. 订单不在完成状态。请检查您的订单状态，因为只有在订单完成后才能获得下单的积分。']
								]
							}
						]
					}
				}
			}
		}
	},

	products: {
		standardPcb: '标准PCB',
		advancedPcb: '高级PCB',
		flexiblePcb: '柔性PCB',
		rigidFlex: '刚柔结合',
		assembly: '组装',
		stencil: 'SMD模具',
		cnc: 'CNC加工',
		sheetMetal: '钣金',
		threePrinting: '3D打印',
		injectionMolding: '注射成型',
		vacuumCasting: '真空铸造'
	},

	shipping: {
		shippingEstimate: '运费估算',
		shippingInfo: '运输信息',
		selectShippingMethod: '选择运输方式',
		shippingTo: '运输到',
		selectCountry: '选择国家',
		shippingMethod: '运输方式',
		price: '价格',
		deliveryTime: '交货时间',
		restriction: '限制',
		country: '国家',
		method: '方式',
		weight: '重量',
		shippingCost: '运费',
		noShippingMethods: '没有可用的运输方式',
		updatingShipping: '正在更新运输方式',
		updateShippingError: '更新运输信息失败',
		updateShippingSuccess: '运输信息更新成功'
	},

	orders: {
		pageTitle: '我的订单',
		allOrders: '所有订单',
		viewCart: '查看购物车',
		fetchingOrders: '获取订单中',
		noOrders: '未找到订单',
		checkFilters: '检查您的筛选条件，或开始探索以找到您需要的内容！',
		getInstantQuote: '获取即时报价',
		orderNo: '订单号',
		createdBy: '创建者',
		deliveryAddress: '送货地址',
		products: '产品',
		orderDetails: '订单详情',
		finalPrice: '最终价格',
		quotePrice: '报价'
	},

	order: {
		pageTitle: '订单',
		allOrders: '所有订单',
		myCart: '我的购物车',
		orderId: '订单号',

		submitReview: {
			noProducts: '购物车中没有产品',
			shippingError: '未提供运输信息',
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

		approveReview: {
			noWeightError: '未提供产品重量',
			noEstDeliveryDateError: '未提供预计交货日期',
			noPriceError: '请更新产品价格',
			noCountryError: '未提供配送国家',
			approvingReview: '正在批准评论',
			approveReviewError: '批准评论失败',
			approveReviewSuccess: '评论已成功批准'
		},

		rejectReview: {
			rejectingReview: '正在拒绝审核',
			rejectReviewError: '拒绝审核失败',
			rejectReviewSuccess: '审核已被拒绝'
		},

		startFabrication: {
			startingFabrication: '开始制造',
			startFabricationError: '开始制造失败',
			startFabricationSuccess: '制造已成功开始'
		},

		updateFabrication: {
			completingFabrication: '正在更新制造进度',
			updateFabricationError: '更新制造进度失败',
			updateFabricationSuccess: '制造进度更新成功'
		},

		completeFabrication: {
			completingFabrication: '完成制造',
			completeFabricationError: '完成制造失败',
			completeFabricationSuccess: '制造已成功完成'
		},

		updateDelivery: {
			updatingDelivery: '正在更新交付进度',
			updateDeliveryError: '更新交付进度失败',
			updateDeliverySuccess: '交付进度更新成功'
		},

		completeOrder: {
			completingOrder: '完成订单',
			completeOrderError: '完成订单失败',
			completeOrderSuccess: '订单已成功完成'
		},

		orderMessage: {
			saved: {
				title: '此订单已保存为草稿',
				description: '尚未提交审核'
			},
			review: {
				title: '您的订单已提交审核',
				button: '取消审核'
			},
			rejected: {
				title: '您的订单审核已被拒绝',
				description: '检查审核消息以获取更多详细信息',
				button: '重新提交审核'
			},
			approved: {
				title: '您的订单审核已通过',
				description: '检查更新的价格并继续付款',
				button: '继续付款'
			},
			confirmed: {
				title: '支付成功！',
				description: '您的订单已确认并正在处理中'
			},
			fabrication: {
				title: '制造进行中',
				description: '检查每个产品的进度状态'
			},
			delivery: {
				title: '正在交付',
				description: '您的订单已在路上',
				button: '跟踪交付'
			},
			completed: {
				title: '订单已完成！',
				description: '感谢您与我们合作'
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
			buildTime: '制造时间',
			quantity: '数量',
			file: '文件',
			files: '文件',
			quotePrice: '报价',
			finalPrice: '最终价格',
			details: '详情',
			edit: '编辑',
			uploaded: '已上传',
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
				completed: '制造已完成'
			}
		},

		reviewMessages: {
			title: '审核消息',
			failedToSend: '发送消息失败',
			noMessages: '还没有消息',
			conversationClosed: '此对话已关闭'
		},

		orderSummary: {
			title: '订单摘要',
			itemsCost: '物品费用',
			shippingCost: '运费',
			discount: '折扣',
			taxes: '税费',
			orderTotal: '订单总额',
			estDeliveryDate: '预计交货日期',
			estDeliveryDateDesc:
				'预计发货日期是根据您订单中制造时间最长的物品计算得出。请注意，此日期仅供参考。如果您的订单需要确认，则发货日期可能会延长。',
			weight: '重量',
			weightDesc:
				'此处的重量是根据毛重和体积重量中较大的值计算得出的，供参考估算。如果实际重量与估算不同，运费可能会相应调整。',
			submitOrderForReview: '提交订单审核',
			saveOrder: '保存订单'
		},

		payment: {
			title: '付款详情',
			transactionId: '交易ID',
			paymentTime: '付款时间',
			paymentMethod: '付款方式',
			totalAmount: '总金额',
			failedToGenerateToken: '生成付款令牌失败',
			failedToSubmit: '提交付款失败',
			checkout: '结账',
			amountToBePaid: '待付款金额',
			paymentSuccess: '付款成功',
			paymentTotal: '付款总额',
			print: '打印',
			payNow: '立即付款',
			cancelPayment: '取消付款'
		},

		removeProduct: {
			modalTitle: '确定要移除此产品吗？',
			modalTitleAll: '确定要移除所有产品吗？',
			modalBody: '此操作无法撤销',
			removingProduct: '正在移除产品',
			removingProductAll: '正在移除所有产品',
			removeProductError: '移除产品失败',
			removeProductAllError: '移除所有产品失败',
			removeProductSuccess: '产品成功移除',
			removeProductAllSuccess: '所有产品成功移除'
		},

		removeOrder: {
			title: '移除订单',
			description: '此操作将永久删除订单及所有相关信息，无法撤销，请谨慎操作。',
			modalTitle: '您确定要移除此订单吗？',
			modalBody: '此操作无法撤销',
			removingOrder: '正在移除订单',
			removeOrderError: '移除订单失败',
			removeOrderSuccess: '订单成功移除'
		},

		trackDelivery: '跟踪交付'
	},

	orderStatus: {
		CREATED: '订单已创建',
		CART: '购物车',
		SAVED: '保存为草稿',
		REVIEW: '审核中',
		REJECTED: '审核被拒绝',
		APPROVED: '审核通过',
		PAYMENT: '付款',
		CONFIRMED: '订单确认',
		FABRICATION: '制造中',
		DELIVERY: '运输与交付',
		COMPLETED: '订单已完成',
		CANCELLED: '订单已取消',
		REFUNDED: '已退款'
	},

	instantQuote: {
		pageTitle: '即时报价',
		specification: '规格',

		upsertProduct: {
			uploadingFiles: '上传文件中',
			savingCart: '保存到购物车',
			addingOrder: '添加到订单中',
			updatingProduct: '更新产品规格',
			uploadFileError: '文件上传失败',
			saveCartError: '保存到购物车失败',
			addOrderError: '添加到订单失败',
			updateProductError: '更新产品失败',
			saveCartSuccess: '产品已保存到购物车',
			addOrderSuccess: '产品已添加到订单',
			updateProductSuccess: '产品更新成功',
			postOrderModal1: {
				title: '您的 PCB 订单可享受额外服务',
				body: '您是否需要组装或测试服务？'
			},
			postOrderModal2: {
				title: '完成您的订单并添加测试服务',
				body: '您是否要添加测试服务？'
			},
			goToOrder: '前往订单',
			addAssembly: '添加组装服务',
			addTestingServices: '添加测试服务'
		},

		pricing: {
			title: '价格和制造时间',
			weight: '重量',
			buildTime: '制造时间',
			chargeDetails: '费用详情',
			total: '总计',
			saveProduct: '保存产品',
			saveToCart: '保存到购物车',
			addToOrder: '添加到订单',
			loginToContinue: '登录以继续'
		},

		gerberFile: {
			title: 'Gerber 文件',
			description: '请上传您的产品的 Gerber 文件（仅接受 .zip, .rar 格式）'
		},

		designFile: {
			title: '设计文件',
			description: '请上传您的产品的设计文件（仅接受 .zip, .rar 格式）'
		},

		fileDrop: {
			dragDrop: '拖放您的文件到这里或点击上传',
			onlyAccepts20: '仅接受 ZIP 或 RAR | 最大文件大小：20MB',
			onlyAccepts200: '仅接受 ZIP 或 RAR | 最大文件大小：200MB',
			file: '文件',
			files: '文件',
			added: '已添加',
			belowFiles: '以下是您添加的文件'
		},

		standardPcb: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入您的产品名称',
				error: '产品名称是必填项'
			},
			fileName: {
				title: '文件名称'
			},
			buildTime: {
				title: '制造时间'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			boardType: {
				title: '板类型',
				description:
					'印刷电路板将以单片或面板形式发货。对于大批量组装订单（数量大于30），我们建议以面板形式发货，这将提高组装效率并降低成本。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户指定面板',
					panelByVelenova: 'Velenova指定面板'
				}
			},
			xoutAllowance: {
				title: '面板中的废板容许量',
				description: '面板中可能存在坏的印刷电路板，如果不接受废板容许量，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '路线工艺',
				description: '在面板中，印刷电路板连接如以下图所示：',
				values: {
					velenovaPrefer: '面板按Velenova偏好',
					vScoring: '面板按V-评分',
					tabRoute: '面板按Tabs路线',
					vScoringTabRoute: '同时使用V-评分和Tab路线'
				}
			},
			breakAwayRail: {
				title: '断开轨道',
				description:
					'断开轨道是为了在组装期间留出传输空间而设置的长条状空白板边缘，并在面板中放置标记点。印刷电路板通过导轨在组装生产线上传输，因此必须留下禁止放置组件的边缘作为传输边缘。断开轨道的宽度一般约为5-8mm。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断开轨道尺寸，总共5个面板=总共30个单板)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中存在通过V切口、冲压孔、铣槽或其他方式分隔的不同设计。如果在一个Gerber文件中有不同类型的印刷电路板设计，我们会收取额外的面板费用。',
				error: '不同设计应大于0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'板的尺寸指客户订购的板的长度和宽度。如果是圆形板，长度和宽度为圆的直径；如果是不规则形状的板，长度和宽度根据最大形状范围进行测量。',
				error: '长度和宽度应大于0'
			},
			length: {
				title: '长度'
			},
			width: {
				title: '宽度'
			},
			quantity: {
				title: '数量（单片）',
				description: '请选择您需要的单片数量。对于标准印刷电路板，起始数量为5片。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '板中的铜层数。MMWPCB目前可以生产最多60层，如果需要超过14层，请选择高级PCB页面进行评估。',
				layer: '层',
				layers: '层数'
			},
			copperLayer: {
				title: '铜层',
				description:
					'订购1层PCB时，请说明电路层是在上面、下面还是没有。请务必选择正确的参数，否则我们需要联系您进行确认。',
				values: {
					topLayer: '上层',
					bottomLayer: '下层'
				}
			},
			solderMask: {
				title: '焊膏',
				description:
					'焊膏是用于遮蔽或保护特定区域的涂层材料。订购1层PCB时，请说明焊膏是在上面、下面还是双面。当仅选择单面焊膏时，另一面将完全露出焊膏开口。请务必选择正确的参数，否则我们需要联系您进行确认。',
				values: {
					topSide: '上面',
					bottomSide: '下面',
					bothSides: '两面'
				}
			},
			silkscreen: {
				title: '丝印',
				description: '丝印是用于标识PCB组件、标志、标记、符号等的墨水层。在订购1层PCB时，请说明丝印在那一层。',
				values: {
					topSide: '上面',
					bottomSide: '下面',
					bothSides: '两面'
				}
			},
			material: {
				title: '材料',
				description:
					'FR4是用于制造电路板的最常见绝缘材料。铝板的散热和热传导性能优于标准FR-4结构。铜基板的热导率优于铝PCB。由于其低介电损耗的特性，Rogers常用于高频PCB。如果需要其他材料，请联系您的销售代表。',
				disclaimer: '*材料型号可以在下面备注。HDI适用于4层或更多。',
				values: {
					fr4: 'FR-4',
					aluminum: '铝',
					rogers: 'Rogers',
					hdi: 'HDI (埋孔/盲孔)',
					copperBase: '铜基板'
				}
			},
			fr4TG: {
				title: 'FR4-TG',
				description:
					'TG是玻璃转变温度的意思。普通TG是130°C或以上，中等TG约为大于150°C，先进TG一般大于170°C。TG越高，材料的耐温性能越好。MMWPCB的默认材料TG为150-160℃，比大多数公司都高。',
				disclaimer: '*高TG的基材具有良好的CAF耐受性、高耐热性、尺寸稳定性，适合无铅焊接工艺'
			},
			rogers: {
				title: 'Rogers',
				description:
					'Rogers RO4000系列在行业中处于领先地位。这种低损耗材料广泛用于微波和毫米波频率设计。与传统PTFE材料相比，它在电路制造中更易于使用，性能稳定且一致。目前，MMWPCB有4003C和4350B可供选择。如果您需要其他型号，请联系您的销售代表。'
			},
			thermalConductivity: {
				title: '热导率',
				description:
					'铝PCB/铜基PCB的热导率是衡量材料将热从源中导出的能力。通常以瓦特每米开尔文（W/mK）来测量，通常用k、λ或K表示。'
			},
			thermoElectricSeparation: {
				title: '热电分离',
				description: '热电分离是指铜基板上的导热垫与电导垫分开的技术，这可以帮助实现最佳热传导和散热效果。示例如下：'
			},
			structureOfMCPCB: {
				title: 'MCPCB的结构',
				description: '这适用于双面/多层金属基板（铝或铜基）。根据金属基材处于中间还是底部，有两种结构可供选择。',
				values: {
					metalCoreMiddle: '金属核心在中间',
					metalBaseBottom: '金属基材在底部'
				}
			},
			thickness: {
				title: '厚度',
				description:
					'对于普通材料，板的厚度指PCB生产完成后的厚度，误差约为10%（+/-10%（T>=1mm）或+/-0.1mm（T<1mm）。）。误差主要由焊膏和铜沉积造成。如果对厚度误差有其他要求，请在其他特殊要求中备注。注意：对于单面/双面Rogers板，厚度指的是基板的厚度。',
				error: '厚度应大于 0'
			},
			minTrack: {
				title: '最小轨道/间距',
				description: '铜迹的最小宽度和两条铜迹之间的最小距离。MMWPCB的工程师将会重新检查最小轨道/间距。'
			},
			minHoleSize: {
				title: '最小孔径',
				description: '孔的最小直径。MMWPCB的工程师将会重新检查最小孔径。',
				noDrill: '无钻孔'
			},
			solderMaskColor: {
				title: '焊膏颜色',
				description:
					'焊膏颜色指PCB表面的颜色。目前，MMWPCB提供9种常规焊膏颜色。如果您需要粉色、灰色、橙色或透明的颜色，请前往高级PCB页面选择。'
			},
			silkscreenColor: {
				title: '丝印颜色',
				description:
					'丝印是用于标识PCB组件、标志、标记、符号等的墨水层。颜色通常是白色。但当焊膏墨水为白色时，丝印将为黑色。'
			},
			uvPrinting: {
				title: 'UV印刷多色',
				description: '',
				descriptionDetail: {
					title1: '订购的前提条件',
					body1: '单片最大尺寸：270*470MM',
					body2: '焊膏颜色的选择。',
					title2: '设计规范',
					body3: '避免在焊膏开口区域放置彩色字符，例如表面贴装焊盘或通孔焊盘。',
					body4:
						'彩色字符可以通过参考图片和参考对齐图（方便与PCB对齐）提供，而无需在Gerber文件中设计它们。但是，如果您选择将彩色字符包含在Gerber文件中，请确保它们位于丝印层上并标注颜色。',
					disclaimer:
						'*请发送您希望在PCB上打印的图像，格式为：AI、PDF、JPEG、PNG、TIFF等，并指明您希望在板上的打印位置。'
				},
				disclaimer: '*上传的PCB文件应包含颜色效果图',
				values: {
					singleSidedTop: '单面：上面',
					singleSidedBottom: '单面：下面',
					doubleSided: '双面'
				}
			},
			edgeConnector: {
				title: '边缘连接器',
				description:
					'边缘连接器通过接触PCB上的金手指实现电连接。如果您的设计中包含金手指，请选择“是”并选择表面处理方法和倒角角度。否则，请选择“否”。'
			},
			surfaceFinish: {
				title: '表面处理',
				description:
					'表面处理是PCB生产的重要部分。它可以保护铜免受氧化，这会导致PCB无法使用。此外，它还为组件焊接提供光滑的表面。',
				values: {
					immersionGold: '沉金（ENIG）',
					osp: 'OSP',
					immersionTin: '沉锡',
					enepig: 'ENEPIG',
					plainCopper: '普通铜 / 无'
				},
				acceptHASLChange: '勾选表示您接受我们可能会在不收取额外费用的情况下将“HASL”更改为“ENIG”。'
			},
			surfaceFinishLayer: {
				title: '表面处理层',
				description: '请选择您需要的表面处理层',
				values: {
					singleSide: '单面',
					doubleSide: '双面'
				}
			},
			finishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的重量（盎司），此选项将决定外层的铜厚度。MMWPCB提供外层铜的厚度为1-13盎司。通孔或通道是切割穿过以创建部分或半孔的孔，以形成孔桶侧面的开口。通常用于将PCB安装到另一个上。',
				disclaimer: '*最小轨道/间距要求：样品订单≥ 3/3mil，批量订单≥ 3.5/3.5mil。',
				bareBoard: '裸板'
			},
			innerCopper: {
				title: '内层铜',
				description: '多层PCB内层的铜重。默认的内层铜重为1盎司。',
				disclaimer: '*最小轨道/间距要求：样品订单≥ 3/3mil，批量订单≥ 3.5/3.5mil。'
			},
			removeProductNo: {
				title: '移除产品编号',
				description:
					'MMWPCB会在PCB上添加我们的产品编号以区分您的PCB与其他PCB。如果您想移除它，将收取额外的1.5美元费用。如果您希望将其放置在特定位置，请在丝印层中添加文本“MMWPCB”以指明该位置，此选项将不收取额外费用。',
				values: {
					no: '否',
					yes: '是（额外 + 1.5美元）',
					specifyLocation: '指定位置'
				}
			},
			peelableSolderMask: {
				title: '可剥离焊膏',
				description:
					'也称为蓝色可剥离遮罩，用于在组装过程中保护所需的焊盘，通常在设计中称为GTPM和GBPM。与绿色焊膏不同，后者是一种负图像，并在PCB设计中持久存在，可剥离焊膏则是一种正图像（您在设计中看到的就是您得到的），并在PCB制造和组装中暂时使用。涂层材料可在波峰焊后去除。',
				values: {
					topSide: '上面',
					bottomSide: '下面',
					bothSides: '两面'
				}
			},
			holeCopperThickness: {
				title: '孔铜厚度',
				description: '请选择您需要的孔铜厚度'
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已获得UL认证，请选择在您需要的层上添加相应的标志。我们将为双层板添加JDB-D，为多层板添加JDB-M。对于单层金属基PCB，我们将按要求添加相应的UL（JDB-A1、JDB-A2、JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到上丝印',
					bottomSilkscreen: '是 - 添加到下丝印',
					topSolderMask: '是 - 添加到上焊膏',
					bottomSolderMask: '是 - 添加到下焊膏',
					topCopper: '是 - 添加到上铜',
					bottomCopper: '是 - 添加到下铜',
					default: '是 - 按MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：日期代码格式为WWYY，位于上丝印层',
				values: {
					velenovaPrefer: '按Velenova偏好添加',
					customerRequired: '按客户要求添加',
					updateDesignedDateCode: '更新设计日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务与高级选项',
				description: '我们可能会对此些特殊选项收取额外费用，具体费用将经过审核后确认。',
				values: {
					halfCut: {
						title: '半切/槽孔',
						description: 'PTH孔或通孔切割穿过以创建部分或半孔以在孔桶侧面形成开口。通常用于将PCB安装到另一个上。'
					},
					edgePlating: {
						title: '边缘镀层',
						description:
							'PCB边缘镀层是指在印刷电路板的高度上对侧面进行金属化处理。您可以在板的一个边缘或所有边缘进行边缘镀层。通过边缘镀层，您为板提供了可靠的连接和刚性。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description:
							'印刷电路板中的导体承载各种信号，为了提高其传输速度，必须提高其频率。然而，蚀刻、层厚和线宽等因素可能会导致PCB中的阻抗变化，从而导致信号失真。因此，对于高速PCB导体，其阻抗值应控制在一定范围内，称为“阻抗控制”。阻抗公差一般为±10%。如果文档中指定了阻抗要求但在订单中未选定，将视为忽略阻抗要求。'
					},
					halogenFree: {
						title: '无卤素',
						description:
							'根据JPCA-ES-01-2003标准，氯（Cl）含量和溴（Br）含量均低于0.09% Wt（按重量计），且CI+Br的总量≤0.15% [1500PPM]的铜覆层被定义为无卤素铜覆层。'
					},
					customStackup: {
						title: '自定义叠层',
						description: '仅适用于多层PCB。如果您需要定制特定的叠层，请一起上传叠层文件或联系您的销售代表。'
					},
					carbonInk: {
						title: '碳墨',
						description:
							'也称为碳油印刷电路板。碳墨印刷电路板是在PCB基材上涂覆基于碳的导电墨水（称为碳墨），经过固化形成具有碳膜导电图形的PCB。碳墨印刷电路板具有成本低、阻抗控制能力强、高可靠性和良好的耐腐蚀性等优点。'
					},
					allViasFilled: {
						title: '所有通孔填充树脂并盖住',
						description: '如果您选择此选项，所有通孔将填充树脂，然后覆盖并镀层。'
					},
					viaInPad: {
						title: '焊盘中的通孔',
						description:
							'如果设计中有焊盘中的通孔（即SMD焊盘中的通孔），请勾选此选项，我们将进行树脂填充，然后覆盖并镀层。'
					},
					pressFitHoles: {
						title: '压配孔',
						description:
							'压配孔是专为接受带压配引脚的组件而设计的孔。这些引脚插入孔中，然后被压入到位置上以创建一个安全的连接。公差：±0.05mm。'
					},
					countersink: {
						title: '沉头孔/反孔',
						description:
							'沉头孔和反孔之间最显著的区别是孔中螺丝或工具的大小和形状。反孔孔较深并且具有方形形状，在这里螺钉的头部可以安放。它还可以允许添加垫圈。'
					},
					zAxisMilling: {
						title: 'Z轴铣削',
						description: '它也被称为深度控制铣削，指在PCB边缘或PCB内部进行的部分铣削。'
					},
					blackFr4: {
						title: '黑色FR4（黑色核心）',
						description:
							'它属于普通FR-4基材，其加工技术与FR-4相同。呈黑色、不透明、遮挡，适用于制造LED显示PCB和仪器及光学仪器中的绝缘结构件。'
					},
					embeddedCopperPcb: {
						title: '嵌入式铜PCB',
						description:
							'嵌入式铜印刷电路板是将铜迹嵌入基材材料中的印刷电路板。埋铜块的设计主要分为两类：埋铜块和嵌入铜块。埋铜块指厚度小于板厚的铜块，其一侧与底层平齐，另一侧与某个内层平齐，如图1所示（半埋铜块）。嵌入铜块指厚度接近或等于板厚的铜块，铜块穿过顶层，如图2所示（通孔铜块）。带有埋入或嵌入铜块的印刷电路板具备良好的热导率和散热性能，并节省板空间，可以有效解决高功率电子元件的散热问题。'
					},
					cavityPcb: {
						title: '腔体PCB',
						description:
							'腔体PCB是一种在其表面上具有一个或多个凹槽或腔体的PCB。这些凹槽是通过去除一部分板材材料创建的，留下一个凹陷区域，以便组件可以放置得更深入，最终降低设备的整体高度。腔体PCB和反钻PCB是两种不同的技术，反钻是指为通孔钻孔，停止在一定深度且不穿透板，而腔体PCB则指的是PCB上的特定区域。'
					},
					semiFlexPcb: {
						title: '半柔性PCB',
						description:
							'半柔性PCB是一种基于刚性PCB的PCB，可以局部弯曲，不仅可以提供刚性PCB的支持，还可以根据产品要求实现局部弯曲，包括45°、90°、180°的弯曲，以满足各种类型3D组装的安装性能要求。'
					},
					hybridPcb: {
						title: '整体/部分混合PCB',
						description:
							'混合PCB利用不同的材料构建基板核心层，以及绝缘层。与使用一种材料不同，混合PCB的制造涉及使用不同材料。不同的材料被用来结合所有的优点进入PCB的制造过程，减少特定材料可能具有的缺点。'
					},
					backDrillPcb: {
						title: '反钻PCB',
						description:
							'反钻（有时称为控制深度钻孔或CDD）涉及使用直径略大于PTH的钻头去除孔中的导电镀层或短接。反钻孔应将短接长度降低至10毫微米。如果短接大于10毫微米，则会产生信号反射。'
					},
					leadlessPartialHardGold: {
						title: '无引脚部分镀硬金',
						description: '这是一种电子元件表面处理技术，无铅，在某些区域进行选择性电镀以提供高水平的导电性和耐用性。'
					}
				}
			},
			specialRequests: {
				title: '其他特殊要求',
				placeholder: '填写任何PCB细节，让我们尽可能清楚地了解您的要求。'
			}
		},

		advancedPcb: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入您的产品名称',
				error: '产品名称是必需的'
			},
			fileName: {
				title: '文件名称'
			},
			buildTime: {
				title: '制造时间'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			pcbType: {
				title: 'PCB类型',
				description:
					'高密度互连（HDI）电路板包含盲孔和/或埋孔，通常包含直径为0.006或更小的微孔。它们具有比传统电路板更高的电路密度。',
				values: {
					throughHoleBoard: '通孔板',
					hdi: 'HDI（埋孔/盲孔）'
				}
			},
			boardSpec: {
				title: '电路板规格',
				description: '制作PCB所需的标准',
				values: {
					ipc6012Class2: 'IPC 6012 Class 2',
					ipc6012Class3: 'IPC 6012 Class 3',
					iatf16949: 'IATF 16949',
					iso13485: 'ISO 13485',
					customerStandard: '客户标准'
				}
			},
			boardType: {
				title: '电路板类型',
				description: 'PCB将以单块或在面板中运输。对于批量装配订单（数量大于30），我们推荐面板运输，以提高装配效率。',
				values: {
					singlePieces: '单块',
					panelByCustomer: '客户提供面板',
					panelByVelenova: 'Velenova提供面板'
				}
			},
			xoutAllowance: {
				title: '面板中的X-out容许范围',
				description: '面板中可能存在不良PCB，如果不接受X-out容许范围，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '路线工艺',
				description: '在面板中，PCB的连接方式如下图所示：',
				values: {
					velenovaPrefer: '面板按照Velenova的偏好',
					vScoring: '面板为V-切割',
					tabRoute: '面板为标签走线',
					vScoringTabRoute: '同时为V-切割和标签走线'
				}
			},
			breakAwayRail: {
				title: '断开轨',
				description:
					'断开轨是设置在长条空白板边缘的，以在装配时留出传输空间，并在面板中放置标记点。PCB通过组装生产线上的导轨进行传输，因此，必须保留一对禁止放置元件的边缘作为传输边。断开轨的宽度一般约为5-8毫米。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断开轨的大小，总共5个面板=总共30个单板)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中存在通过V切口、冲压孔、铣槽或其他方式分开的不同设计。如果在一个Gerber文件中有不同种类的PCB设计，我们将收取额外的面板费用。',
				error: '不同设计的数量应大于0'
			},
			size: {
				title: '尺寸（单块）',
				description:
					'电路板的尺寸是指客户订购的电路板的长度和宽度。如果是圆形电路板，则长度和宽度为圆的直径；如果是不规则形的电路板，则长度和宽度根据最大形状范围进行测量。',
				error: '长度和宽度应大于0'
			},
			length: {
				title: '长度'
			},
			width: {
				title: '宽度'
			},
			quantity: {
				title: '数量（单块）',
				description: '请选择您需要的单块数量。对于标准PCB，起始数量为5块。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '块'
			},
			layers: {
				title: '层数',
				description: '电路板中的铜层数量。MMWPCB目前可以生产最多60层，如果需要超过14层，请选择高级PCB页面进行评估。',
				layer: '层',
				layers: '层'
			},
			copperLayer: {
				title: '铜层',
				description:
					'在订购1层PCB时，请指定电路层是在顶部、底部或无层。请确保选择正确的参数，否则我们需要与您联系以确认。',
				values: {
					topLayer: '顶层',
					bottomLayer: '底层'
				}
			},
			solderMask: {
				title: '焊膏',
				description:
					'焊膏是用于掩盖或保护选定区域的涂层材料。在订购1层PCB时，请指定焊膏是在顶部、底部或两侧。当只选择一侧的焊膏时，另一侧将完全暴露焊膏开口。请确保选择正确的参数，否则我们需要与您联系以确认。',
				values: {
					topSide: '顶侧',
					bottomSide: '底侧',
					bothSides: '两侧'
				}
			},
			silkscreen: {
				title: '丝印',
				description: '丝印是用于识别PCB组件、标记、标志、符号等的油墨痕迹层。在订购1层PCB时，请指定丝印所在的层。',
				values: {
					topSide: '顶侧',
					bottomSide: '底侧',
					bothSides: '两侧'
				}
			},
			material: {
				title: '材料',
				description:
					'FR4是使用于电路板制造最常见的电介质材料。铝基板的散热和热传导性能优于标准FR-4结构。铜基板具有优于铝PCB的良好热导性。由于其低介电损耗的特性，Rogers经常用于高频PCB。如果您需要其他材料，请联系您的销售代表。',
				values: {
					tg140Fr4: {
						title: 'TG140 FR-4',
						disclaimer: '*Tg140 FR-4材料：胜易 S1141'
					},
					tg150Fr4: {
						title: 'TG150 FR-4',
						disclaimer: '*Tg150 FR-4材料：胜易 S1000-H'
					},
					tg170Fr4: {
						title: 'TG170 FR-4',
						disclaimer: '*Tg170 FR-4材料：S1000-2, S1000-2M'
					},
					tg150Fr4HalogenFree: {
						title: 'TG150 FR-4（无卤素）',
						disclaimer: '*Tg150 FR-4（无卤素）材料：胜易 S1150G 为确保质量，我们通常不备货这些材料。采购周期为7-20天'
					},
					tg170Fr4HalogenFree: {
						title: 'TG170 FR-4（无卤素）',
						disclaimer: '*Tg170 FR-4（无卤素）材料：胜易 S1170G 为确保质量，我们通常不备货这些材料。采购周期为7-20天'
					},
					highCTI: {
						title: '高CTI（>=600V）',
						disclaimer: '*高CTI（≥600V）材料：胜易 S1600（CTI≥600V）'
					},
					highCTIHalogenFree: {
						title: '高CTI（>=600V，无卤素）',
						disclaimer: '*高CTI（无卤素，≥600V）材料：胜易 S1151G（CTI≥600V）'
					},
					highSpeed: {
						title: '高速（GHz）',
						disclaimer:
							'高速（GHz）和高频PCB（DK）：这些材料的供应链或采购选项有限。为确保质量，我们通常不备货这些材料。您下单后我们将回复您。'
					},
					highFrequency: {
						title: '高频PCB（DK）',
						disclaimer:
							'高速（GHz）和高频PCB（DK）：这些材料的供应链或采购选项有限。为确保质量，我们通常不备货这些材料。您下单后我们将回复您。'
					},
					specialMaterial: {
						title: '特殊材料（高低温）',
						disclaimer: '特殊材料（高低温）：胜易 SH260'
					}
				}
			},
			highSpeed: {
				title: '高速（GHz）',
				description: '高速（GHz）'
			},
			highFrequency: {
				title: '高频PCB（DK）',
				description: '高频PCB（DK）'
			},
			thickness: {
				title: '厚度',
				description:
					'对于普通材料，电路板的厚度是指生产完成后的PCB厚度，误差约为10%（+/-10%（T>=1mm）或+/-0.1mm（T<1mm）。误差主要由焊膏和铜下沉造成。如果对厚度误差有其他要求，请在其他特殊要求中注明。注意：对于单面/双面Rogers电路板，厚度指的是基材的厚度。',
				error: '厚度应大于 0'
			},
			minTrack: {
				title: '最小轨距/间距',
				description: '铜迹的最小宽度和两个迹之间的最小距离。PCBWay工程师将对最小轨距/间距进行复核。'
			},
			minHoleSize: {
				title: '最小孔径',
				description: '孔的最小直径。PCBWay工程师将对最小孔径进行复核。',
				noDrill: '不打孔'
			},
			solderMaskColor: {
				title: '焊膏颜色',
				description:
					'焊膏颜色是指PCB表面的颜色。目前，PCBWay提供9种常规焊膏颜色。如果您需要粉色、灰色、橙色或透明，请前往高级PCB页面选择。'
			},
			silkscreenColor: {
				title: '丝印颜色',
				description:
					'丝印是用于识别PCB组件、标记、标志、符号等的油墨痕迹层。颜色通常为白色。但当焊膏油墨为白色时，丝印将为黑色。'
			},
			edgeConnector: {
				title: '边缘连接器',
				description:
					'边缘连接器通过接触PCB上的金手指来实现电连接。如果您的设计中包含金手指，请为此项选择“是”，并选择表面处理方式和倒角角度。否则，请选择“否”。'
			},
			surfaceFinish: {
				title: '表面处理',
				description:
					'表面处理是PCB生产的重要部分。它可以保护铜免受氧化，这会使PCB无法使用。此外，它为组件焊接提供光滑表面。',
				values: {
					immersionGold: '浸金（ENIG）',
					osp: 'OSP',
					immersionTin: '浸锡',
					enepig: 'ENEPIG',
					plainCopper: '裸铜/无'
				}
			},
			surfaceThickness: {
				title: '表面厚度',
				immersionGold: {
					title: '浸金的厚度'
				},
				hardGold: {
					title: 'Au/Ni厚度'
				},
				haslLeadFreeImmersionGold: {
					title: '浸金的厚度'
				},
				haslLeadFreeHardGold: {
					title: '硬金的厚度'
				},
				immersionGoldHardGold: {
					title: '浸金/硬金厚度'
				},
				enepig: {
					title: 'ENEPIG的厚度'
				}
			},
			finishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的重量（盎司），此选项将确定外层铜的厚度。MMWPCB提供外层铜的厚度为1-13盎司。PTH孔或通过孔是切割的，以形成部分或半孔，形成孔井的侧面开口。通常用于将PCB安装到另一块上。',
				bareBoard: '裸板'
			},
			innerCopper: {
				title: '内铜',
				description: '多层PCB内层的铜重量。默认内铜重量为1盎司。'
			},
			peelableSolderMask: {
				title: '可撕焊膏',
				description:
					'也称为蓝色可撕膜，用于在装配过程中保护所需的焊盘，通常在设计中称为GTPM和GBPM。与绿色焊膏不同，绿色焊膏是负图像，并且在PCB设计中是永久存在的。可撕焊膏是正图像（您所看到的设计就是您所获得的），临时用于PCB制造和装配。涂层材料可以在电路板经过波焊后去除。',
				values: {
					topSide: '顶侧',
					bottomSide: '底侧',
					bothSides: '两侧'
				}
			},
			holeCopperThickness: {
				title: '孔铜厚度',
				description: '请选择所需的孔铜厚度'
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已获得UL认证，请选择在您需要的层上添加相应的标志。如果是双层板，我们将添加JDB-D，如果是多层板，则添加JDB-M。对于单层金属基PCB，我们将根据需要添加相应的UL（JDB-A1, JDB-A2, JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶丝印',
					bottomSilkscreen: '是 - 添加到底丝印',
					topSolderMask: '是 - 添加到顶焊膏',
					bottomSolderMask: '是 - 添加到底焊膏',
					topCopper: '是 - 添加到顶部铜层',
					bottomCopper: '是 - 添加到底部铜层',
					default: '是 - 作为MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：在顶丝印层中以WWYY格式的日期代码',
				values: {
					velenovaPrefer: '按照Velenova的偏好添加',
					customerRequired: '按照客户的要求添加',
					updateDesignedDateCode: '更新设计日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码说明'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '我们可能会对这些特殊选项加收额外费用，具体费用将在审核后确认。',
				values: {
					halfCut: {
						title: '半切/镶嵌孔',
						description: 'PTH孔或通过孔是切割的，以形成部分或半孔，形成孔井的侧面开口。通常用于将PCB安装到另一块上。'
					},
					edgePlating: {
						title: '边缘电镀',
						description:
							'PCB边缘电镀是指在印刷电路板的高度上对其侧面进行金属化。您可以对仅一个或四周的边缘进行边缘电镀。通过边缘电镀，您可以为电路板提供可靠的连接和刚性。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description:
							'PCB中的导体承载各种信号，为了提高传输速度，必须提高其频率。但是，蚀刻、层厚度和线路宽度等因素会导致PCB中的阻抗变化，从而导致信号失真。因此，对于高速PCB导体，其阻抗值应控制在一定范围内，称为“阻抗控制”。阻抗公差一般为±10%。如果文档中指定了阻抗要求但未在订单中选择，将视为放弃阻抗要求。'
					},
					halogenFree: {
						title: '无卤素',
						description:
							'根据JPCA-ES-01-2003标准，氯（Cl）含量和溴（Br）含量均低于0.09% Wt（按重量计算）且CI+Br的总量≤0.15% [1500PPM]的覆铜绝缘板定义为无卤素覆铜绝缘板。'
					},
					customStackup: {
						title: '自定义叠层',
						description: '仅适用于多层PCB。如果需要自定义特定的叠层，请将叠层文件一并上传或联系您的销售代表。'
					},
					carbonInk: {
						title: '碳墨',
						description:
							'也称为碳油PCB。碳墨PCB是在PCB基材上涂覆用于制造碳膜导电图案的碳基导电油墨，固化后形成的PCB。碳墨PCB具有成本低、强阻抗控制能力、高可靠性和良好的耐腐蚀性等优点。'
					},
					allViasFilled: {
						title: '所有孔用树脂填充并封盖',
						description: '如果选择此选项，所有通过孔将用树脂填充，然后封盖和镀层。'
					},
					viaInPad: {
						title: '孔在焊盘中',
						description:
							'如果设计中有焊盘内的孔，也即焊接表面焊盘内的孔，请勾选此选项，我们将进行树脂填充，然后封盖和镀层。'
					},
					pressFitHoles: {
						title: '压合孔',
						description:
							'压合孔是设计用于接受带有压合销的组件的孔。销插入孔中，然后被压入到位以形成安全连接。公差：+/-0.05mm。'
					},
					countersink: {
						title: '沉头/沉孔',
						description:
							'沉头和沉孔之间最显著的区别是创建材料孔的螺钉或工具的大小和形状。沉孔的孔较深，呈方形，螺钉头的肩部可以安放。它还允许添加垫圈。'
					},
					zAxisMilling: {
						title: 'Z轴铣削',
						description: '也称为深度控制铣削，指在PCB边缘或PCB内部进行的部分铣削。'
					},
					blackFr4: {
						title: '黑色FR4（黑色核心）',
						description:
							'它属于普通FR-4基材，其加工工艺也与FR-4相同。它是黑色、不透明的、遮光的，适合制作LED显示PCB和仪器及光学仪器中的绝缘结构件。'
					},
					embeddedCopperPcb: {
						title: '嵌入式铜PCB',
						description:
							'嵌入式铜PCB是电路板内嵌铜迹的印刷电路板。埋藏铜块的设计主要分为两类：埋藏铜块和嵌入铜块。埋藏铜块是指厚度小于板总厚度的铜块，一侧与底层平齐，另一侧与某些内层平齐，如图1（半埋铜块）所示。嵌入铜块是指厚度接近或等于电路板总厚度的铜块，铜块穿过顶层，如图2（通孔铜块）所示。具有埋藏或嵌入铜块的印刷电路板具有良好的热导性、高散热性，并且节省电路板空间，有效解决高功率电子元件的散热问题。'
					},
					cavityPcb: {
						title: '腔体PCB',
						description:
							'腔体PCB是一种电路板，其表面具有一个或多个凹槽或腔体。这些槽是通过去除部分板材而形成的，留下一个凹陷的区域，以便可以更深地放置组件，从而减少设备的总体高度。腔体PCB和背钻PCB是两种不同的技术，背钻是指为通过孔钻孔，在 определенной глубине停止而不穿透电路板，而腔体PCB指的是PCB上的特定区域。'
					},
					semiFlexPcb: {
						title: '半柔性PCB',
						description:
							'半柔性PCB是一种可以在刚性PCB基础上局部弯曲的PCB，不仅可以提供刚性PCB的支持，还可以根据产品要求实现局部弯曲，包括45°、90°、180°的弯曲，以满足各种类型3D组装的安装性能要求。'
					},
					hybridPcb: {
						title: '整体/部分混合PCB',
						description:
							'混合PCB使用不同的材料构建基板核心层和绝缘层。制造混合PCB涉及使用不同的材料，而不是使用单一材料。不同材料被用来结合所有优点到PCB的制造过程中，并减少某一特定材料可能具有的缺点。'
					},
					backDrillPcb: {
						title: '背钻PCB',
						description:
							'背钻（有时称为控制深度钻或CDD）涉及使用直径略大于PTH的钻头以去除孔中的导电镀层或插头。背钻孔应将插头长度减少到10mil。如果插头大于10mil，则会产生信号反射。'
					},
					leadlessPartialHardGold: {
						title: '无引脚部分镀硬金',
						description: '这是一种无铅的电子元件表面处理技术，选择性电镀特定区域以提供高导电性和耐久性。'
					}
				}
			},
			finalInspectionReport: {
				title: '最终检验报告（免费）',
				description: '常规发货报告额外包括测试报告、尺寸检验报告',
				values: {
					defaultInspectionReport: '默认检验报告',
					microsectionInspectionReport: '微观截面检验报告',
					solderabilityInspectionReport: '焊接性检验报告',
					thermalStressInspectionReport: '热应力检验报告',
					impedanceTestReport: '阻抗测试报告',
					humidityIndicatorCards: '湿度指示卡'
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '填写任何PCB细节，以使我们尽可能清楚地了解您的要求。'
			}
		},

		flexiblePcb: {
			id: {
				title: '产品 ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入您产品的名称',
				error: '产品名称为必填项'
			},
			fileName: {
				title: '文件名称'
			},
			buildTime: {
				title: '生产时间'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			boardType: {
				title: '板类型',
				description:
					'PCB将以单片或面板形式运输。对于批量组装订单（数量大于30），我们建议采用面板运输，这将提高组装效率，降低成本。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户提供面板',
					panelByVelenova: 'Velenova 提供面板'
				}
			},
			xoutAllowance: {
				title: '面板中的 X-out 容许量',
				description: '面板中可能存在缺陷PCB，如果不接受X-out容许量，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '线路工艺',
				description: '在面板中，PCB按照以下图示连接：',
				values: {
					velenovaPrefer: '按照 Velenova 的偏好面板',
					vScoring: 'V-评分面板',
					tabRoute: '标签线路面板',
					vScoringTabRoute: 'V-评分和标签线路'
				}
			},
			breakAwayRail: {
				title: '断开式导轨',
				description:
					'断开式导轨是长条形空白板边缘，用于在组装过程中留出轨道传输空间，并在面板中放置标记点。PCB在组装生产线上通过导轨进行传输，因此，必须留出一对禁止放置元件的边缘作为传输边缘。断开式导轨的宽度通常约为5-8mm。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为 2*3，断开式导轨的大小，总共 5 个面板=总共 30 块单独线路板)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中有通过 V 切割、冲压孔、铣槽或其他方式分开的不同设计。如果在一个 Gerber 文件中存在不同种类的 PCB 设计，我们将收取额外的面板费用。',
				error: '不同设计应大于 0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'板的尺寸指的是客户所订购的板的长度和宽度。如果是圆形板，则长度和宽度为圆的直径；如果是不规则形状的板，则根据最大形状范围进行测量。',
				error: '长度和宽度应大于 0'
			},
			length: {
				title: '长度'
			},
			width: {
				title: '宽度'
			},
			quantity: {
				title: '数量（单片）',
				description: '请选定您所需的单片数量。对于标准 PCB，起订量为 5 片。',
				error: '数量应大于 0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '板中的铜层数。MMWPCB 目前可以生产最多 60 层，如果需要超过 14 层，请选择高级 PCB 页面进行评估。',
				layer: '层',
				layers: '层数'
			},
			material: {
				title: '聚酰亚胺基材',
				description: '一种常用的介电基材',
				values: {
					polyimideFlex: '聚酰亚胺柔性材料',
					pet: 'PET',
					highFrequency: '高频（DK<=3.6）'
				}
			},
			petType: {
				title: '材料（PET）',
				disclaimer: '*承受温度在 110°以内',
				values: {
					transparent: '透明',
					translucent: '半透明'
				}
			},
			thickness: {
				title: 'FPC 厚度',
				description: 'FPC 的厚度不包括加固材料和 3M 胶带的厚度。',
				disclaimer: '*FPC 的厚度不包括加固材料和 3M 胶带的厚度。'
			},
			minTrack: {
				title: '最小线路宽度/间距',
				description: '铜线路的最小宽度和两条线路之间的最小距离。MMWPCB 工程师将会再次确认此项。'
			},
			minHoleSize: {
				title: '最小孔径/焊盘尺寸（直径）',
				description: '孔和焊盘的最小直径',
				noDrill: '无需钻孔'
			},
			solderMaskColor: {
				title: '焊接面膜（覆铜层）',
				description: '用于覆盖 PCB 的面膜颜色',
				coverlay: '覆铜层'
			},
			silkscreenColor: {
				title: '丝网印刷',
				description:
					'丝网印刷是用于识别 PCB 组件、标记、徽标、符号等的墨水图层。颜色通常为白色。但是，当焊接面膜墨水为白色时，丝网印刷将为黑色。'
			},
			edgeConnector: {
				title: '边缘连接器',
				description: '也称为金手指。这是一种用于 PCB 的边缘连接器，设计用于与配对连接器进行电气接触。'
			},
			stiffener: {
				title: '加固材料',
				description:
					'增加在柔性电路板上以增强特定区域的刚度或执行其他特殊功能的材料，例如提高整体厚度；保护焊点；散热等。',
				values: {
					topSide: '顶部',
					bottomSide: '底部',
					bothSides: '两侧'
				}
			},
			surfaceFinish: {
				title: '表面处理',
				description: '帮助提高可焊性的工艺',
				values: {
					immersionGold: '浸金 (ENIG)',
					osp: 'OSP',
					hardGold: '硬金',
					immersionSilver: '浸银 (Ag)',
					immersionTin: '浸锡',
					immersionGoldHardGold: '浸金 + 选择性硬金',
					enepig: 'ENEPIG'
				}
			},
			surfaceThickness: {
				title: '表面厚度',
				immersionGold: {
					title: '浸金厚度'
				},
				hardGold: {
					title: 'Au/Ni 厚度'
				},
				immersionGoldHardGold: {
					title: '浸金/硬金厚度'
				},
				enepig: {
					title: 'ENEPIG 厚度'
				}
			},
			finishedCopper: {
				title: '完工铜厚度',
				description:
					'每平方英尺 PCB 中的铜重量（以盎司为单位），该选项将决定外层的铜厚度。PCBWay 提供的外层铜厚度为 1-13 盎司。',
				bareBoard: '裸板'
			},
			etest: {
				title: '电测试',
				description: '电气测试，使用飞针测试较小数量的产品，对于较大数量的产品使用电气测试设备。'
			},
			tape: {
				title: '3M/Tesa 胶带',
				description: '将整个或部分 FPC 板粘附到其他物体上',
				values: {
					threeM467: '3M467',
					tesa8853: 'Tesa8853',
					tesa8854: 'Tesa8854',
					threeM9495LE: '3M9495LE'
				}
			},
			doubleSidedTape: {
				title: '导电双面胶带',
				description: '一种粘附在整个或部分 FPC 板上的胶带，可以将其粘附到其他物体上，并且该胶带是导电的。',
				values: {
					htA1134: 'HT-A1134'
				}
			},
			emiShieldingFilm: {
				title: 'EMI 屏蔽膜',
				description: '这是一种具有高性能屏蔽效果的电功能膜。',
				values: {
					hcf6000g: 'HCF-6000G',
					pc800: 'PC800'
				}
			},
			peelableSolderMask: {
				title: '可剥焊接面膜',
				description:
					'也称为蓝色可剥面膜，主要用于在组装过程中保护所需的焊盘，通常在设计中称为 GTPM 和 GBPM。与绿色焊接面膜不同，绿色焊接面膜是负像，并且在 PCB 设计中永久存在，而可剥焊接面膜是正像（设计中看到的就是在您的设计中得到的），并在 PCB 制造和组装过程中临时使用。涂层材料在通过波焊后可以移除。',
				values: {
					topSide: '顶部',
					bottomSide: '底部',
					bothSides: '两侧'
				}
			},
			ulMarking: {
				title: 'UL 标识',
				description:
					'MMWPCB 已获得 UL 认证，请选择在您所需的层上添加相应的标志。如果是双层板，我们将添加 JDB-D 标志；如果是多层板，我们将添加 JDB-M 标志。对于单层金属基 PCB，我们将根据需要添加相应的 UL（JDB-A1、JDB-A2、JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶部丝网印刷',
					bottomSilkscreen: '是 - 添加到底部丝网印刷',
					topSolderMask: '是 - 添加到顶部焊接面膜',
					bottomSolderMask: '是 - 添加到底部焊接面膜',
					topCopper: '是 - 添加到顶部铜层',
					bottomCopper: '是 - 添加到底部铜层',
					default: '是 - 作为 MMWPCB 默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在 PCB 上添加生产时间',
				placeholder: '例如：顶部丝网层中的 WWYY 格式的日期代码',
				values: {
					velenovaPrefer: '按照 Velenova 的偏好添加',
					customerRequired: '按照客户的要求添加',
					updateDesignedDateCode: '更新设计的日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '对于这些特殊选项，我们可能会增加额外费用，并在审核后确认。',
				values: {
					halfCut: {
						title: '半切/镶嵌孔',
						description:
							'穿透切割的 PTH 孔或通孔，创建部分或半孔，形成洞筒侧面的开口。通常用于将 PCB 安装到另一个上面。'
					},
					edgePlating: {
						title: '边缘电镀',
						description:
							'PCB 边缘电镀是指在整个高度对印刷电路板的侧面进行金属化。您可以在一个边缘或四周进行边缘电镀。通过边缘电镀，您可以为板提供可靠的连接和刚性。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description: ''
					},
					viasFilledWithCopper: {
						title: '填充铜的通孔',
						description: ''
					},
					fpcWithAirgap: {
						title: '带气隙的 FPC',
						description: ''
					},
					singleSideDoubleAccess: {
						title: '单面双接入',
						description: ''
					},
					stiffenerTopBottom: {
						title: '顶部和底部的加固材料'
					}
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '填写任何PCB细节，让我们尽可能清楚地了解您的需求。'
			}
		},

		rigidFlex: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入您的产品名称',
				error: '产品名称是必需的'
			},
			fileName: {
				title: '文件名称'
			},
			buildTime: {
				title: '建造时间'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			boardType: {
				title: '电路板类型',
				description:
					'电路板将以单片或面板形式发货。对于批量组装订单（数量大于30），我们建议采用面板发货，这将提高组装效率并降低成本。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户面板',
					panelByVelenova: 'Velenova面板'
				}
			},
			xoutAllowance: {
				title: '面板中的X出容许量',
				description: '面板中可能存在坏的电路板，如果不接受X出容许量，报价将增加大约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '电路路线过程',
				description: '在面板中，电路板的连接方式如下图所示：',
				values: {
					velenovaPrefer: '按照Velenova的首选面板',
					vScoring: 'V-得分面板',
					tabRoute: '标签路线面板',
					vScoringTabRoute: 'V-得分和标签路线'
				}
			},
			breakAwayRail: {
				title: '断裂边缘',
				description:
					'断裂边缘是设置的长条形空白板边缘，在组装过程中留出轨道传输空间，并在面板中放置标记点。电路板通过组装生产线上的导轨传输，因此，必须留出一对禁止放置组件的边缘作为传输边缘。断裂边缘的宽度通常约为5-8毫米。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断裂边缘的大小，总共5个面板=总共30个单独电路板)'
			},
			differentDesign: {
				title: '面板中不同设计',
				description:
					'这意味着您的文件中存在不同的设计，由V型切口、冲压孔、铣槽或其他方式分隔。如果在同一个Gerber文件中有不同种类的PCB设计，我们将收取额外的面板费用。',
				error: '不同设计必须大于0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'电路板尺寸指客户订购的电路板的长和宽。如果是圆形板，长和宽是圆的直径；如果是不规则形状的电路板，长和宽是根据最大形状范围测量的。',
				error: '长和宽必须大于0'
			},
			length: {
				title: '长度'
			},
			width: {
				title: '宽度'
			},
			quantity: {
				title: '数量（单片）',
				description: '请选择您需要的单片数量。对于标准PCB，起始数量为5片。',
				error: '数量必须大于0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '电路板中的铜层数。MMWPCB目前最多可以生产60层，如果您需要超过14层，请选择高级PCB页面进行估价。',
				layer: '层',
				layers: '层数'
			},
			material: {
				title: '材料',
				description:
					'FR4是用于制造电路板的最常见的绝缘材料。铝基板具有比标准FR-4结构更好的散热和热传导性能。铜基板具有优于铝PCB的良好热导率。由于其低介质损耗的特性，Rogers经常用于高频PCB。如果您需要其他材料，请联系您的销售代表。',
				values: {
					polyimideFlex: '聚酰亚胺柔性材料 + FR4'
				}
			},
			thickness: {
				title: '硬柔性厚度',
				description: '刚性和柔性层的总厚度'
			},
			minTrack: {
				title: '最小轨迹/间距',
				description: '铜迹线的最小宽度和两条迹线之间的最小距离。PCBWay工程师将再次确认最小轨迹/间距。'
			},
			minHoleSize: {
				title: '最小孔径',
				description: '孔的最小直径。PCBWay工程师将再次确认最小孔径。',
				noDrill: '无钻孔'
			},
			surfaceFinish: {
				title: '表面处理',
				description: '额外工艺，用于暴露的铜以帮助可焊性',
				values: {
					immersionGold: '沉金（ENIG）',
					osp: 'OSP',
					immersionSilver: '沉银（Ag）'
				}
			},
			surfaceThickness: {
				title: '表面厚度',
				immersionGold: {
					title: '沉金厚度'
				}
			},
			edgeConnector: {
				title: '边缘连接器',
				description:
					'边缘连接器通过接触PCB上的金手指实现电气连接。如果您的设计包含金手指，请对该项目选择“是”，并选择它的表面处理方法和倒角角度；否则，请选择“否”。'
			},
			flexPart: '柔性部分',
			fpcLayers: {
				title: 'FPC层',
				description: '柔性部分的导电层数量。'
			},
			fpcThickness: {
				title: 'FPC厚度',
				description: '柔性部分的板厚'
			},
			fpcCoverlay: {
				title: 'FPC覆盖层',
				description: '用于覆盖PCB的掩膜颜色',
				coverlay: '覆盖层'
			},
			fpcSilkscreenColor: {
				title: '丝印',
				description:
					'丝印是用于识别PCB组件、标记、徽标、符号等的墨水层。颜色通常为白色。但当焊接掩膜墨水为白色时，丝印将为黑色。'
			},
			fpcFinishedCopper: {
				title: '成品铜',
				description: '每平方英尺PCB的铜重量（盎司），此选项将决定外层上的铜厚度。PCBWay提供外层铜厚度为1-13盎司。'
			},
			rigidPart: '刚性部分',
			rpcSolderMaskColor: {
				title: '焊接掩膜',
				description:
					'焊接掩膜颜色指PCB表面的颜色。目前，PCBWay提供9种常规焊接掩膜颜色。如果您需要粉色、灰色、橙色或透明，请访问高级PCB页面进行选择。'
			},
			rpcSilkscreenColor: {
				title: '丝印',
				description:
					'丝印是用于识别PCB组件、标记、徽标、符号等的墨水层。颜色通常为白色。但当焊接掩膜墨水为白色时，丝印将为黑色。'
			},
			rpcFinishedCopper: {
				title: '成品铜',
				description: '每平方英尺PCB的铜重量（盎司），此选项将决定外层上的铜厚度。PCBWay提供外层铜厚度为1-13盎司。'
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已经获得UL认证，请选择在您需要的层上添加相应的标志。如果是双层板，我们将添加JDB-D标志；如果是多层板，我们将添加JDB-M标志。对于单层金属基PCB，我们将根据需要添加相应的UL（JDB-A1，JDB-A2，JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶部丝印',
					bottomSilkscreen: '是 - 添加到底部丝印',
					topSolderMask: '是 - 添加到顶部焊接掩膜',
					bottomSolderMask: '是 - 添加到底部焊接掩膜',
					topCopper: '是 - 添加到顶部铜层',
					bottomCopper: '是 - 添加到底部铜层',
					default: '是 - 作为MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：顶部丝印层中的WWYY格式日期代码',
				values: {
					velenovaPrefer: '按Velenova首选添加',
					customerRequired: '按客户要求添加',
					updateDesignedDateCode: '更新设计日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '对于这些特殊选项，我们可能会收取额外费用，确认后将进行审核。',
				values: {
					halfCut: {
						title: '半切/分段孔',
						description: 'PTH孔或通孔切割形成部分或半孔，以在孔桶侧面形成开口。通常用于将PCB安装到另一块电路板上。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description:
							'PCB中的导体携带各种信号，为了提高传输速度，必须提高其频率。然而，蚀刻、层厚和线路宽度等因素会导致PCB中的阻抗变化，导致信号失真。因此，对于高速PCB导体，必须将其阻抗值控制在某个范围内，称为“阻抗控制”。阻抗公差通常为±10%。如果文档中指定了阻抗要求但在订单中未选中，将视为忽略阻抗要求。'
					},
					allViasFilled: {
						title: '所有通孔填充树脂并封顶',
						description: '如果您勾选此选项，所有通孔将填充树脂，然后封顶涂层。'
					},
					viaInPad: {
						title: '贴片中的通孔',
						description:
							'如果您的设计中有贴片中的通孔，即贴片焊盘中的通孔，请勾选此选项，我们将执行树脂堵塞，然后进行封顶涂层。'
					},
					hdi: {
						title: 'HDI（埋孔/盲孔）',
						description: '盲孔将外层与一个或多个内层连接，但不经过整块板。埋孔连接两个或多个内层，但不连接到外层。'
					}
				}
			},
			finalInspectionReport: {
				title: '最终检验报告（免费）',
				description: '定期发货报告另外包含测试报告、尺寸检验报告',
				values: {
					defaultInspectionReport: '默认检验报告',
					microsectionInspectionReport: '微观剖面检查报告',
					solderabilityInspectionReport: '可焊性检查报告',
					thermalStressInspectionReport: '热应力检查报告',
					impedanceTestReport: '阻抗测试报告',
					humidityIndicatorCards: '湿度指示卡'
				}
			},
			specialRequests: {
				title: '其他特别请求',
				placeholder: '填写任何PCB细节，使我们尽可能清楚地理解您的要求。'
			}
		},

		assembly: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入产品名称',
				error: '产品名称是必填项'
			},
			fileName: {
				title: '文件名'
			},
			buildTime: {
				title: '生产时间'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			flexibleOptions: {
				title: '灵活选项',
				values: {
					turnkey: {
						title: '交钥匙',
						description: 'MMWPCB 提供零部件'
					},
					kitted: {
						title: '配件或委托',
						description: '客户提供零部件'
					},
					combo: {
						title: '组合',
						description: '您提供部分零件，我们提供其余部分'
					}
				}
			},
			boardType: {
				title: '电路板类型',
				description: '如果单个PCB数量超过20片或单个电路板的任意一侧小于50毫米，建议选择面板设计。',
				disclaimer: '如果单个PCB数量超过20片或单个电路板的任意一侧小于50毫米，建议选择面板设计。',
				values: {
					singlePieces: '单片',
					panelizedPcbs: '面板化PCB'
				}
			},
			side: {
				title: '组装面',
				description: '零件是仅在一面上安装还是两面上都安装？',
				values: {
					topSide: '上面',
					bottomSide: '下面',
					bothSides: '两面'
				}
			},
			quantity: {
				title: '数量',
				description: '请填写单个PCB的总数量。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '片'
			},
			payAttention: {
				title: '注意事项',
				description:
					'由于组件的多样性，组装过程中通常需要注意许多事项，例如是否需要在安装前烘烤，是否有焊接温度、耐腐蚀性、湿度等特殊要求。我们的工程师会检查所有信息，但仍然难免会有遗漏。因此，最好您能提前突出特别要求。'
			},
			sensitiveParts: {
				title: '敏感部件',
				description: '包含敏感组件/部件'
			},
			alternatesChina: {
				title: '中国制造的替代品',
				description: '您接受中国制造的替代品/替换品吗？'
			},
			otherParameters: {
				title: '其他参数',
				description: '填写以获取确切价格，或者留空以等待最终报价。'
			},
			solderPads: {
				title: 'PCBA焊盘数量',
				description: '每个电路板上的焊盘总数',
				error: '焊盘数量不能少于0'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '以下选项，其费用未包含在在线报价中',
				values: {
					depanelBoards: {
						title: '板分解交付',
						description: '也称为子板运输，面板化的PCB在组装服务后被分割成片并单独包装发货。'
					},
					functionTest: {
						title: '功能测试',
						description:
							'功能测试，也称为FCT测试，是PCB制造的最后一步。基本上，功能测试确保PCB工作正常。主要是为了避免组装问题，包括短路、开路、缺失组件或安装不正确的部件。如果需要，请注明您的功能测试方法和详细要求。'
					},
					conformalCoating: {
						title: '符合涂层',
						description:
							'符合涂层是在印刷电路板（PCB）上施加的一层薄聚合物膜保护涂层。该涂层因其符合PCB轮廓而得名。符合涂层通常在25-250微米的厚度下施加于电子电路上，为其提供潮湿、灰尘、化学物质和温度极限的保护。'
					},
					firmwareLoading: {
						title: '固件加载',
						description:
							'在PCB行业中，固件加载通常指将先前编写的程序或固件加载到PCB上的芯片的过程。在PCB制造过程中，通常将不同类型的芯片结合在一起以实现特定功能。为了使芯片正常工作，需将相应的固件加载到其上。'
					},
					pressFit: {
						title: '压合组件',
						description:
							'压合组装是一种电子制造技术，用于在电路板和组件之间建立机械和电气连接，而无需焊接。它涉及将连接器引脚插入金镀通孔，并施加一定的力量以建立连接。这项技术消除了传统焊接过程中出现的一些问题，如断引脚或冷焊接引脚，从而提高了连接器组件的可靠性和耐久性。'
					},
					boxBuild: {
						title: '盒装组装',
						description:
							'也称为系统集成，是从设计和制造外壳、安装PCBA、安装电缆和电缆束组装，甚至安装电气和/或气动系统的全过程服务。'
					},
					cableWireHarness: {
						title: '电缆线束组装',
						description:
							'电缆组件是一组被外部套筒包裹的电线或电缆。线束是单条电缆被外部套筒包裹。我们可以提供标准的简单线束组装，或在最短的周转时间内提供定制线束组装和电缆组装。'
					},
					packageBox: {
						title: '包装盒',
						description: '定制您产品的特殊包装。'
					}
				}
			},
			xrayTest: {
				title: 'X射线检测数量',
				description:
					'在PCB制造中，X射线测试通常指X射线检查或X射线探测。这是一种无损检测技术，用于检验电子产品中焊接连接和组件放置的质量。',
				error: 'X射线检测数量应大于0'
			},
			detailedInformation: {
				title: '组装的详细信息',
				placeholder: '请填写关于PCB组装、其他外壳组装、电缆焊接、保险丝线、铆钉等的详细技术信息。'
			}
		},

		stencil: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建于'
			},
			updatedAt: {
				title: '更新于'
			},
			name: {
				title: '产品名称',
				description: '请为您的产品输入一个名称',
				error: '产品名称是必需的'
			},
			fileName: {
				title: '文件名称'
			},
			buildTime: {
				title: '制造时间'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			type: {
				title: '模板类型',
				disclaimer: '允许将多个PCB合并在单个SMT模板上。',
				values: {
					framework: '框架',
					nonFramework: '非框架'
				}
			},
			multiLevel: {
				title: '多级/步骤模板',
				description: '部分向上步骤模板和部分向下步骤模板。'
			},
			side: {
				title: '模板侧面',
				description: '对于 Top+Bottom（在单个模板上），模板大小应至少是PCB大小的两倍。',
				values: {
					top: '顶部',
					bottom: '底部',
					topBottomSingle: '顶部+底部（在单个模板上）',
					topBottomSeparate: '顶部和底部（在单独模板上）'
				}
			},
			size: {
				title: '尺寸 (mm)',
				validArea: '有效区域'
			},
			length: {
				title: '长度'
			},
			width: {
				title: '宽度'
			},
			quantity: {
				title: '数量',
				pieces: '件',
				error: '数量应大于0'
			},
			thickness: {
				title: '厚度',
				description: '模板的厚度根据组件的大小选择。'
			},
			existingFiducials: {
				title: '现有基准点',
				description: '基准点是“半激光化”，始终位于PCB侧（底部）。',
				values: {
					halfLasered: '半激光化',
					laseredThrough: '激光穿透'
				}
			},
			electroPolishing: {
				title: '电抛光',
				description: '电抛光，也称为电化学表面处理或电化学去毛刺，能得到优化的表面质量。适用于中等系列。'
			},
			specialRequests: {
				title: '其他特殊要求',
				description: '我们通常会减少IC的开口以制作模板，因此如果不想更改开口，请在下订单时注明。',
				placeholder:
					'填写任何模板细节，以使我们尽可能清楚地理解您的要求。例如，多级/步骤模板，请在Gerber文件中指定步骤区域和厚度。'
			}
		},

		cnc: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入您产品的名称',
				error: '产品名称是必需的'
			},
			fileName: {
				title: '文件名称'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			quantity: {
				title: '数量',
				error: '数量应大于0'
			},
			designUnits: {
				title: '设计单位'
			},
			material: {
				title: '材料',
				values: {
					aluminum: '铝',
					stainlessSteel: '不锈钢',
					mildSteel: '碳钢',
					copper: '铜',
					carbonFiber: '碳纤维'
				}
			},
			materialType: {
				title: '材料类型',
				values: {
					aluminum5052: '铝 5052',
					aluminum6061: '铝 6061',
					aluminum7075: '铝 7075',
					aluminum2a12: '铝 2A12',
					stainlessSteel201: '不锈钢 201',
					stainlessSteel303: '不锈钢 303',
					stainlessSteel304: '不锈钢 304',
					stainlessSteel316: '不锈钢 316',
					stainlessSteel430: '不锈钢 430',
					mildSteel1018: '碳钢 1018',
					mildSteel1045: '碳钢 1045',
					mildSteelA36: '碳钢 A36',
					copper: '铜',
					carbonFiberPlate: '碳纤维板'
				}
			},
			color: {
				title: '颜色'
			},
			surfaceFinish: {
				title: '表面处理',
				sections: {
					standard: '标准（如铣加工）',
					brushed: '拉丝',
					beadBlast: '喷珠',
					sprayPainting: '喷漆',
					powderCoat: '粉末涂层',
					detailSanding: '精细打磨',
					others: '其他'
				},
				values: {
					standard: '标准（如铣加工）',
					brushed: '拉丝',
					beadBlast: '喷珠',
					sprayPaintingMatt: '喷漆哑光',
					sprayPaintingHighGloss: '喷漆高光',
					powderCoatMatt: '粉末涂层哑光',
					powderCoatHighGloss: '粉末涂层高光',
					sanding1000: '打磨 1000',
					others: '其他'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细磨料沙粒擦拭产品表面，产生扩散的、非线性的纹理效果。将不同的磨料颗粒附着到底纸或板材的背面，磨料颗粒可以根据粒度的大小进行区分：粒度越大，磨粒越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意，您在此屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的零件是否有任何内部或外部螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有组装零件都在这里生产和组装。',
				question: '您的零件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请说明您零件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将按照ISO 2768-1进行控制。对于其他更严格的公差，需要技术图纸来指明关键尺寸。',
				noTolerance: '不要求更严格的公差'
			},
			surfaceRoughness: {
				title: '表面粗糙度',
				description: '表面粗糙度将控制在250微英寸/6.3微米Ra，除非您有其他要求的表面粗糙度。'
			},
			partMarking: {
				title: '零件标记',
				description: '请在CAD文件（DWG或DXF）中清晰标记丝印或激光刻印的内容，并要求提供图形文件（Ai或SVG）。'
			},
			silkScreen: {
				title: '丝印'
			},
			laserEngraving: {
				title: '激光雕刻'
			},
			partsAssembly: {
				title: '零件组装',
				description: '请说明组装要求。如果您选择不需要组装，PCBWay将不承担任何组装风险。',
				values: {
					assemblyTest: '组装测试',
					shipAssembly: '运送组装'
				}
			},
			finishedAppearance: {
				title: '成品外观',
				values: {
					standard: {
						title: '标准',
						description: '生产过程中出现的正常加工痕迹或划痕，或表面处理后留下的细微痕迹。'
					},
					premium: {
						title: '优质',
						description:
							'更高的外观要求，表面干净光滑，没有明显缺陷（除固有的阳极氧化托架痕迹）。在发货前将发送照片以确认。'
					}
				}
			},
			inspection: {
				title: '检验',
				description: '检验报告不会随您的零件一起发送，除非您需要它。',
				values: {
					standardInspection: {
						title: '标准检验（无报告）',
						description: ['无额外费用', 'PCBWay将根据客户提供的图纸进行尺寸和表面特征的检验。']
					},
					standardInspectionFormalReport: {
						title: '标准检验带正式报告',
						description: ['支付额外费用', '需要2D技术图纸。']
					},
					cmmInspectionFormalReport: {
						title: 'CMM检验带正式报告',
						description: ['支付额外费用', '需要2D技术图纸。']
					},
					sourceMaterialCertification: {
						title: '源材料认证',
						description: ['支付额外费用', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '报关所需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供报关所需的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如果没有匹配的项目，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税费，适用的关税和税率根据货物的描述和不同国家的进口法规而异。',
					body4: '2. 产品描述不正确或不清晰的货物可能会被海关扣留。客户将负责因提供不正确信息而导致的海关处罚。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
				},
				values: {
					printerEnclosure: '打印机外壳',
					inkCartridge: '墨盒',
					motorcycleConnectorEnclosure: '摩托车连接器外壳',
					cncLatheReplacementArm: 'CNC车床替换臂',
					headband: '头带',
					wheelPlate: '轮盘',
					recorderEnclosure: '记录仪外壳',
					compoundOpticalMicroscope: '复合光学显微镜'
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '在此处填写有关生产、包装或运输的任何要求。'
			}
		},

		sheetMetal: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建于'
			},
			updatedAt: {
				title: '更新于'
			},
			name: {
				title: '产品名称',
				description: '请输入您的产品名称',
				error: '产品名称是必需的'
			},
			fileName: {
				title: '文件名称'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			quantity: {
				title: '数量'
			},
			designUnits: {
				title: '设计单位'
			},
			material: {
				title: '材料',
				values: {
					aluminum: '铝',
					stainlessSteel: '不锈钢',
					mildSteel: '碳钢',
					copper: '铜',
					carbonFiber: '碳纤维'
				}
			},
			materialType: {
				title: '材料类型',
				values: {
					aluminum5052: '铝5052',
					aluminum6061: '铝6061',
					stainlessSteel201: '不锈钢201',
					stainlessSteel303: '不锈钢303',
					stainlessSteel304: '不锈钢304',
					stainlessSteel316: '不锈钢316',
					mildSteel1018: '碳钢1018',
					copper101: '铜101',
					copperC110: '铜C110',
					copper260: '铜260',
					carbonFiberPlate: '碳纤维板'
				}
			},
			color: {
				title: '颜色'
			},
			surfaceFinish: {
				title: '表面处理',
				sections: {
					standard: '标准（加工后）',
					brushed: '刷纹',
					beadBlast: '珠喷',
					sprayPainting: '喷涂',
					powderCoat: '喷粉',
					detailSanding: '细致打磨',
					others: '其他'
				},
				values: {
					standard: '标准（加工后）',
					brushed: '刷纹',
					beadBlast: '珠喷',
					sprayPaintingMatt: '喷涂哑光',
					sprayPaintingHighGloss: '喷涂高光',
					powderCoatMatt: '喷粉哑光',
					powderCoatHighGloss: '喷粉高光',
					sanding1000: '打磨1000',
					others: '其他'
				},
				surfaceTreatment: {
					title: '表面处理简介',
					description:
						'打磨是使用细微的磨砂颗粒擦拭产品表面，以产生一种扩散的、非线性的纹理效果。将不同的磨料颗粒粘附到底纸或板材的背面，磨料颗粒可以根据粒度的不同进行区分：粒度越大，磨料颗粒越细，因此表面效果更佳。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意，您在此屏幕上选择的3D文件和部件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和丝攻孔',
				description:
					'请说明您的部件是否有任何内部或外部螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有的组装部件在此生产和组装。',
				question: '您的部件需要打螺纹吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您部件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将遵循ISO 2768-1控制。对于其他更严格的公差，需要技术图纸指定关键尺寸。',
				noTolerance: '不需要更严格的公差'
			},
			wielding: {
				title: '焊接'
			},
			partMarking: {
				title: '部件标记',
				description: '请在CAD文件（DWG或DXF）中清楚标明丝网印刷或激光雕刻的内容，同时也需要提供图形文件（Ai或SVG）。'
			},
			silkScreen: {
				title: '丝网印刷'
			},
			laserEngraving: {
				title: '激光雕刻'
			},
			partsAssembly: {
				title: '部件组装',
				description: '请指定组装要求。如果您选择不需要组装，PCBWay将不承担任何组装风险。',
				values: {
					assemblyTest: '组装测试',
					shipAssembly: '发货时组装'
				}
			},
			finishedAppearance: {
				title: '成品外观',
				values: {
					standard: {
						title: '标准',
						description: '生产过程中产生的正常加工痕迹或划痕，或表面处理后留下的细微痕迹'
					},
					premium: {
						title: '优质',
						description:
							'更高的外观要求，表面干净光滑，无明显缺陷。（除了固有的阳极氧化架痕迹外）。在发货前将发送照片以确认。'
					}
				}
			},
			inspection: {
				title: '检验',
				description: '检验报告将不会随您的部件一起发送，除非您需要它。',
				values: {
					standardInspection: {
						title: '标准检验（无报告）',
						description: ['无额外费用', 'PCBWay将根据客户提供的图纸进行尺寸和表面特征检验。']
					},
					standardInspectionFormalReport: {
						title: '标准检验附正式报告',
						description: ['额外付费', '需要2D技术图纸。']
					},
					cmmInspectionFormalReport: {
						title: 'CMM检验附正式报告',
						description: ['额外付费', '需要2D技术图纸。']
					},
					sourceMaterialCertification: {
						title: '原材料认证',
						description: ['额外付费', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关所需的产品描述：',
					body1: '1. 遵循国际贸易原则，并提供海关清关所需的产品描述。',
					body2: '2. 请根据产品的实际使用选择正确的产品描述。如果没有匹配的项目，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会产生进口关税和税费，适用的关税和税费率因商品描述和不同国家的进口规定而异。',
					body4: '2. 具有不正确或不清晰产品描述的商品可能会被海关扣留。客户将对提供不正确信息而导致的海关处罚负责。',
					body5: '3. PCBWay 不会更改客户提供的产品描述，请仔细选择。'
				},
				values: {
					printerEnclosure: '打印机外壳',
					inkCartridge: '墨盒',
					motorcycleConnectorEnclosure: '摩托车连接器外壳',
					cncLatheReplacementArm: 'CNC车床替换臂',
					headband: '头带',
					wheelPlate: '轮板',
					recorderEnclosure: '录音机外壳',
					compoundOpticalMicroscope: '复合光学显微镜'
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '在此填写关于生产、包装或发货的任何要求。'
			}
		},

		threePrinting: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建于'
			},
			updatedAt: {
				title: '更新于'
			},
			name: {
				title: '产品名称',
				description: '请输入产品名称',
				error: '产品名称是必填项'
			},
			fileName: {
				title: '文件名'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			quantity: {
				title: '数量'
			},
			designUnits: {
				title: '设计单位'
			},
			material: {
				title: '材料',
				values: {
					aluminum: '铝',
					stainlessSteel: '不锈钢',
					nylon: '尼龙',
					abs: 'ABS',
					petg: 'PETG'
				}
			},
			materialType: {
				title: '材料类型',
				values: {
					aluminum: '铝',
					stainlessSteel: '不锈钢',
					pa12: 'PA 12',
					hppa12: 'HP PA 12',
					glassFiberNylon: '玻璃纤维尼龙',
					petg: 'PETG'
				}
			},
			color: {
				title: '颜色'
			},
			process: {
				title: '工艺'
			},
			surfaceFinish: {
				title: '表面处理',
				sections: {
					sprayPainting: '喷漆',
					powderCoat: '粉末涂层',
					detailSanding: '细沙处理',
					dying: '染色'
				},
				values: {
					sprayPaintingMatt: '哑光喷漆',
					sprayPaintingHighGloss: '高光喷漆',
					sanding1000: '1000号砂',
					dying: '染色'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细砂粒擦拭产品表面以产生扩散的非线性纹理效果。在背面纸或板的背面贴上不同的砂粒，不同粒度的砂粒可以根据粒子的大小区分：粒子越大，砂粒越细，表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意，在此屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的部件是否有任何内螺纹或外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有组装部件都在这里生产和组装。',
				question: '您的部件需要攻丝吗？'
			},
			inserts: {
				title: '插入件',
				description: '请说明您的部件中的标准插入件'
			},
			partMarking: {
				title: '部件标记',
				description: '请在CAD文件（DWG或DXF）中清晰标记丝网印刷或激光刻蚀的内容，同时需要图形文件（Ai或SVG）。'
			},
			silkScreen: {
				title: '丝网印刷'
			},
			laserEngraving: {
				title: '激光刻蚀'
			},
			partsAssembly: {
				title: '部件组装',
				description: '请说明组装要求。如果您选择不需要组装，PCBWay将不承担任何组装风险。',
				values: {
					assemblyTest: '组装测试',
					shipAssembly: '送货组装'
				}
			},
			printingRisk: {
				title: '打印风险',
				description: '该参数默认选中。您可以取消选中，我们将在零件具有特定打印风险时通过电子邮件与您联系。'
			},
			wallThicknessRisk: {
				title: '已知墙厚风险',
				description: '客户知道设计的薄墙不符合墙厚标准，但需要按原样打印并承担所有风险。'
			},
			printedThreadsRisk: {
				title: '非标准打印螺纹风险',
				description: '客户知道设计的螺纹不符合螺纹打印标准，但需要按原样打印并承担所有风险。'
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关所需的产品描述：',
					body1: '1. 遵循国际贸易原则，为海关清关提供产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如果没有匹配的项目，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会产生进口关税和税费，适用的关税和税率根据货物描述和不同国家的进口规定而异。',
					body4: '2. 产品描述不正确或不清晰的货物可能会被海关扣留。客户将对因提供错误信息而导致的海关处罚负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
				},
				values: {
					printerEnclosure: '打印机外壳',
					inkCartridge: '墨盒',
					motorcycleConnectorEnclosure: '摩托车连接器外壳',
					cncLatheReplacementArm: 'CNC车床替换臂',
					headband: '头带',
					wheelPlate: '轮盘',
					recorderEnclosure: '录音机外壳',
					compoundOpticalMicroscope: '复合光学显微镜'
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '在此填写有关生产、包装或运输的任何要求。'
			}
		},

		injectionMolding: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建日期'
			},
			updatedAt: {
				title: '更新日期'
			},
			name: {
				title: '产品名称',
				description: '请输入产品名称',
				error: '产品名称是必需的'
			},
			fileName: {
				title: '文件名称'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			quantity: {
				title: '第一批数量',
				error: '数量应大于0'
			},
			minExpectedVolume: {
				title: '最低预计年产量'
			},
			maxExpectedVolume: {
				title: '最高预计年产量'
			},
			designUnits: {
				title: '设计单位'
			},
			material: {
				title: '材料',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: '尼龙',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			materialType: {
				title: '材料类型',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: '尼龙',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			color: {
				title: '颜色'
			},
			spiFinish: {
				title: 'SPI 表面处理'
			},
			toolRequirements: {
				title: '工具要求',
				description: '请提供模具要求，如表面要求、模具强度、机器尺寸、腔体数量和模具设计要求等。'
			},
			molds: {
				title: '模具',
				description:
					'我们将保留模具 2 年。您可以继续订购零件，直到模具的使用寿命结束。模具过期后，默认情况下将被回收。如果您需要将模具寄给您，请与销售代表联系有关运输的信息。',
				values: {
					keepMoldsFactory: '将模具保留在工厂',
					moldsShipped: '我需要将模具寄出'
				}
			},
			surfaceFinish: {
				title: '表面处理',
				sections: {},
				values: {},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细磨砂颗粒擦拭产品表面，以产生一种扩散的非线性纹理效果。在背衬纸或板背面粘贴不同的磨料颗粒，磨料颗粒可根据颗粒的大小区别：颗粒越大，磨料颗粒越细，因此表面效果更好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意，您在此屏幕上选择的 3D 文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的零件是否有任何内螺纹或外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有组装部件均在此生产和组装。',
				question: '您的零件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您零件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将按照 ISO 2768-1 控制。对于其他更严格的公差，将需要技术图纸以指示关键尺寸。',
				noTolerance: '无需更严格的公差'
			},
			partMarking: {
				title: '部件标记',
				description: '请在 CAD 文件（DWG 或 DXF）中清楚标记丝网印刷或激光雕刻的内容，并且还需要图形文件（Ai 或 SVG）。'
			},
			silkScreen: {
				title: '丝网印刷'
			},
			laserEngraving: {
				title: '激光雕刻'
			},
			partsAssembly: {
				title: '零件组装',
				description: '请明确组装要求。如果您选择不需要组装，PCBWay 将不承担任何组装风险。',
				values: {
					assemblyTest: '组装测试',
					shipAssembly: '发运组装'
				}
			},
			finishedAppearance: {
				title: '成品外观',
				values: {
					standard: {
						title: '标准',
						description: '在生产过程中产生的正常加工痕迹或划痕，或表面处理后留存的细微痕迹'
					},
					premium: {
						title: '优质',
						description:
							'更高的外观要求，表面干净光滑，没有明显的缺陷。（不包括固有的阳极氧化支架痕迹）。在发货前会发送照片以确认。'
					}
				}
			},
			inspection: {
				title: '检验',
				description: '检验报告不会随您的零件一起发送，除非您需要。',
				values: {
					standardInspection: {
						title: '标准检验（无报告）',
						description: ['无需额外费用', 'PCBWay将根据客户提供的图纸进行尺寸和表面特征检查。']
					},
					sourceMaterialCertification: {
						title: '源材料认证',
						description: ['支付额外费用', '需要 2D 技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关所需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供产品描述以便海关清关。',
					body2: '2. 请根据产品的实际使用选择正确的产品描述。如果没有相应的项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税费，适用的关税和税率因商品描述和不同国家的进口规定而异。',
					body4: '2. 产品描述错误或不清晰的货物可能会被海关扣留。客户将对因提供不准确信息而导致的海关处罚负责。',
					body5: '3. PCBWay 不会更改客户提供的产品描述，请仔细选择。'
				},
				values: {
					printerEnclosure: '打印机外壳',
					inkCartridge: '墨盒',
					motorcycleConnectorEnclosure: '摩托车连接器外壳',
					cncLatheReplacementArm: 'CNC车床替换臂',
					headband: '头带',
					wheelPlate: '轮子板',
					recorderEnclosure: '录音机外壳',
					compoundOpticalMicroscope: '复合光学显微镜'
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '在此填写有关生产、包装或运输的任何要求。'
			}
		},

		vacuumCasting: {
			id: {
				title: '产品ID'
			},
			createdAt: {
				title: '创建时间'
			},
			updatedAt: {
				title: '更新时间'
			},
			name: {
				title: '产品名称',
				description: '请输入产品名称',
				error: '产品名称是必填项'
			},
			fileName: {
				title: '文件名'
			},
			weight: {
				title: '重量'
			},
			initialPrice: {
				title: '初始价格'
			},
			finalPrice: {
				title: '最终价格'
			},
			quantity: {
				title: '数量'
			},
			designUnits: {
				title: '设计单位'
			},
			material: {
				title: '材料',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: '尼龙',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			materialType: {
				title: '材料类型',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: '尼龙',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			color: {
				title: '颜色'
			},
			surfaceFinish: {
				title: '表面处理',
				sections: {
					beadBlast: '珠砂喷射',
					sprayPainting: '喷漆',
					detailSanding: '精细打磨'
				},
				values: {
					beadBlast: '珠砂喷射',
					sprayPaintingMatt: '哑光喷漆',
					sprayPaintingHighGloss: '高光喷漆',
					sanding1000: '1000号砂纸打磨'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是通过使用细小的磨砂粒子擦拭产品表面，以产生扩散的、非线性的纹理效果。将不同的磨料颗粒粘附到背衬纸或板的背面，并且可以根据颗粒大小用不同的颗粒度来区分磨料：颗粒越大，磨料颗粒越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意，您在此屏幕上选择的3D文件和零件规格（例如表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的部件是否有内部或外部螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有组装部件均在此处生产和组装。',
				question: '您的部件需要攻螺纹吗？'
			},
			inserts: {
				title: '嵌入件',
				description: '请说明您部件的标准嵌入件'
			},
			tolerance: {
				title: '公差',
				description: '公差将按照ISO 2768-1进行控制。对于其他更严格的公差，需要技术图纸来指示关键尺寸。',
				noTolerance: '不需要更严格的公差'
			},
			partMarking: {
				title: '部件标记',
				description: '请在CAD文件（DWG或DXF）中清晰标记丝网印刷或激光雕刻的内容，同时需要提供图形文件（Ai或SVG）。'
			},
			silkScreen: {
				title: '丝网印刷'
			},
			laserEngraving: {
				title: '激光雕刻'
			},
			partsAssembly: {
				title: '部件组装',
				description: '请说明组装要求。如果您选择“无组装要求”，PCBWay将不承担任何组装风险。',
				values: {
					assemblyTest: '组装测试',
					shipAssembly: '发货组装'
				}
			},
			finishedAppearance: {
				title: '成品外观',
				values: {
					standard: {
						title: '标准',
						description: '生产过程中产生的正常加工痕迹或划痕，或表面处理后留下的细微痕迹'
					},
					premium: {
						title: '优质',
						description:
							'更高的外观要求，表面干净光滑无明显瑕疵。（不包括内在的阳极氧化架印记）。在发货前将发送照片确认。'
					}
				}
			},
			inspection: {
				title: '检验',
				description: '除非您需要，检验报告将不会随您的部件一起发送。',
				values: {
					standardInspection: {
						title: '标准检验（无报告）',
						description: ['无需额外费用', 'PCBWay将根据客户提供的图纸进行尺寸和表面特征检验。']
					},
					sourceMaterialCertification: {
						title: '原材料证明',
						description: ['支付额外费用', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关所需的产品描述：',
					body1: '1. 遵守国际贸易原则，并提供清关所需的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如果没有匹配的项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口税和关税，适用的关税和税率会根据货物描述和不同国家的进口规定有所不同。',
					body4: '2. 描述不正确或不清晰的商品可能会被海关扣留。客户将对因提供不正确信息而导致的海关处罚负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
				},
				values: {
					printerEnclosure: '打印机外壳',
					inkCartridge: '墨盒',
					motorcycleConnectorEnclosure: '摩托车连接器外壳',
					cncLatheReplacementArm: 'CNC车床替换臂',
					headband: '头带',
					wheelPlate: '轮子板',
					recorderEnclosure: '记录仪外壳',
					compoundOpticalMicroscope: '复合光学显微镜'
				}
			},
			specialRequests: {
				title: '其他特殊请求',
				placeholder: '在此填写有关生产、包装或运输的任何要求。'
			}
		}
	},

	services: {
		title: '产品与服务',
		subtitle: '面向先进工业应用的综合测量与测试技术。',
		description:
			'我们是先进测量与测试技术的领先供应商，专注于提供高精度解决方案，以应对各行业复杂的技术挑战。我们的全面产品组合包括尖端频谱分析仪、网络测试设备、校准工具和集成技术服务，旨在满足最严苛的性能和创新要求。通过结合精密硬件、智能软件和专业技术支持，我们帮助企业突破技术研发和质量保证的界限。',

		subHeading1: '创新测量技术',
		para1:
			'我们提供高性能测量解决方案，以推动技术进步。我们的先进频谱分析仪、网络测试设备和校准工具专为提供卓越的精度和可靠性而设计。通过结合最先进的硬件和智能软件，我们助力工程师和研究人员实现突破性的洞察和性能基准。',
		subHeading2: '综合技术服务',
		para2:
			'除了设备销售，我们还提供覆盖整个产品生命周期的综合技术服务。我们的专业团队提供专业校准、精密维修、技术咨询和定制解决方案。我们确保您的测量基础设施始终处于技术领先地位，并通过全球支持和NIST可追溯认证，确保最高的技术卓越标准。',

		explorePS: '探索我们的产品与服务',
		browseSolutions: '浏览我们的解决方案',
		browseCatalog: '浏览我们的目录',
		viewAllPS: '查看所有产品与服务',

		catalog: {
			title: '产品与服务目录',
			subtitle: '精选高质量产品和定制解决方案，以满足您的需求。'
		},

		startingFrom: '起价',
		getQuote: '获取报价',
		features: '特性',
		loginToGetQuote: '登录以获取报价',

		requestQuote: {
			title: '请求报价',
			company: '公司',
			testingRequirements: '测试要求',
			companyError: '请输入您的公司名称',
			firstNameError: '请输入您的名字',
			lastNameError: '请输入您的姓氏',
			emailError: '请输入有效的电子邮件地址',
			phoneError: '请输入有效的电话号码',
			autPort: 'AUT端口',
			connectorType: '连接器类型',
			impedance: '阻抗',
			gender: '性别',
			submittingRequest: '正在提交请求',
			requestError: '请求提交失败',
			requestSuccess: '您的请求已成功提交',
			serviceRequestNo: '服务请求编号',
			viewServiceRequests: '查看我的服务请求'
		},

		sections: {
			oscilloscopes: {
				title: '示波器',
				subtitle: '精准、轻松地可视化电信号波形。',

				specs: {
					title: '标题',
					category: '类别',
					categories: '类别',
					bandwidth: '带宽',
					maxMemoryDepth: '最大存储深度',
					maxSampleRate: '最大采样率',
					type: '类型',
					types: '类型'
				},

				categories: {
					infiniiVision: 'InfiniiVision 示波器',
					realTime: '实时示波器'
				},

				types: {
					realTime: '实时'
				},

				services: {
					HD304MSO: {
						title: 'HD304MSO InfiniiVision 示波器：4 通道模拟输入',
						subtitle: 'HD3 系列具有高分辨率、高精度、深存储、四个模拟通道，并且采用 200 MHz 至 1 GHz 的全新定制技术。'
					},
					DSOS804A: {
						title: 'DSOS804A 高清示波器：8 GHz，4 通道模拟输入',
						subtitle: 'DSOS804A S 系列示波器具有 8 GHz 带宽、15 英寸 XGA 电容触摸屏，以及 10 位模数转换器。'
					}
				}
			},

			networkAnalyzers: {
				title: '网络分析仪',
				subtitle: '通过可靠的数据分析和优化网络性能。',

				specs: {
					title: '标题',
					category: '类别',
					categories: '类别',
					builtInPorts: '内置端口',
					maxFrequency: '最大频率',
					internalSources: '内部信号源',
					vnaSeries: 'VNA 系列',
					vnaType: 'VNA 类型',
					vnaTypes: 'VNA 类型'
				},

				categories: {
					ena: 'ENA 矢量网络分析仪',
					pna: 'PNA 网络分析仪'
				},

				vnaTypes: {
					benchtop: '台式'
				},

				services: {
					E5080B: {
						title: 'E5080B ENA 矢量网络分析仪',
						subtitle: '最集成、最灵活的 ENA 网络分析仪'
					},
					N5291A: {
						title: 'N5291A PNA 毫米波系统，900 Hz 至 120 GHz',
						subtitle: '提供多功能性，可用于宽带双端口或四端口网络分析仪'
					}
				}
			},

			antennaTestSystems: {
				title: '天线测试系统',
				subtitle: '利用先进的测试和测量解决方案优化天线性能。',

				specs: {
					title: '标题',
					category: '类别',
					categories: '类别',
					frequency: '频率'
				},

				categories: {
					farField: '远场',
					nearField: '近场',
					onChip: '芯片级'
				},

				services: {
					AP1: { title: '产品 1' },
					AP2: { title: '产品 2' },
					AP3: { title: '产品 3' },
					AP4: { title: '产品 4' }
				}
			},

			circuitTestPlatforms: {
				title: '毫米波/太赫兹电路测试平台',
				subtitle: '利用先进的测量解决方案加速毫米波/太赫兹电路设计和测试。',

				specs: {
					title: '标题',
					category: '类别',
					categories: '类别',
					frequency: '频率'
				},

				categories: {
					circuitTestPlatform: '毫米波/太赫兹电路测试平台'
				},

				services: {
					CP1: { title: '产品 1' }
				}
			}
		}
	},

	serviceRequests: {
		title: '服务请求',
		allServiceRequests: '所有服务请求',
		fetchingServiceRequests: '正在获取服务请求',
		noServiceRequests: '未找到服务请求',
		checkFilters: '检查您的筛选条件或开始探索，找到您需要的内容！',
		browseSolutions: '浏览我们的解决方案',
		id: 'ID',
		createdBy: '创建者',
		createdAt: '创建时间',
		updatedAt: '更新时间',
		service: '服务',
		status: '状态',
		price: '价格',
		payNow: '立即支付',
		paymentSuccess: '支付成功',
		payment: {
			title: '支付详情',
			transactionId: '交易编号',
			paymentTime: '支付时间',
			paymentMethod: '支付方式',
			totalAmount: '总金额',
			failedToGenerateToken: '生成支付令牌失败',
			failedToSubmit: '支付提交失败',
			checkout: '结账',
			amountToBePaid: '应支付金额',
			paymentSuccess: '支付成功',
			paymentTotal: '支付总额',
			print: '打印',
			payNow: '立即支付',
			cancelPayment: '取消支付'
		}
	},

	serviceStatus: {
		APPLICATION_RECEIVED: '已收到申请',
		IN_REVIEW: '审核中',
		WAITING_FOR_PAYMENT: '等待支付',
		TESTING_IN_PROGRESS: '测试进行中',
		REPORT_RELEASED: '报告已发布',
		REJECTED: '已拒绝'
	}
};
