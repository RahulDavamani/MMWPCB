import type { Lang } from './en';

export const zh: Lang = {
	common: {
		login: '登录',
		or: '或者',
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
			pink: '粉色',
			orange: '橙色',
			grey: '灰色',
			matteBlack: '哑黑',
			matteGreen: '哑绿色',
			matteBlue: '哑蓝色',
			matteRed: '哑红色',
			silver: '银色',
			silverWhite: '银白色',
			silverGray: '银灰色',
			metallic: '金属色',
			copper: '铜色',
			darkBlack: '深黑色',
			transparent: '透明'
		},
		typeHere: '在这里输入...',
		select: '选择',
		warning: '警告',
		error: '错误',
		retry: '重试',
		moreDetails: '更多细节',
		home: '主页',
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
		firstName: '名',
		lastName: '姓',
		email: '电子邮件',
		phone: '电话号码',
		password: '密码',
		profilePicture: '个人资料图片'
	},

	navbar: {
		instantQuote: '即时报价',
		products: '产品与能力',
		whyUs: '为什么选择我们？',
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
			loginViewCart: '请登录以查看您的购物车',
			cartEmpty: '您的购物车为空',
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
		forgotPassword: '忘记密码？',
		dontHaveAccount: '没有账户？',
		signInGoogle: '使用 Google 登录'
	},

	register: {
		pageTitle: '注册',
		signUp: '注册',
		confirmPassword: '确认密码',
		iAgree: '我同意注册',
		alreadyHaveAccount: '已经有账户了？',
		signInGoogle: '使用 Google 登录'
	},

	profile: {
		pageTitle: '个人资料',
		myProfile: '我的个人资料',
		personalInformation: {
			title: '个人信息',
			editProfile: '编辑个人资料',
			savingProfile: '正在保存个人资料',
			saveProfileSuccess: '个人资料保存成功',
			saveProfileError: '保存个人资料失败'
		},
		addresses: {
			title: '收货地址',
			newAddress: '新地址',
			noAddressFound: '未找到地址',
			removingAddress: '正在移除地址',
			removeAddressSuccess: '地址移除成功',
			removeAddressError: '移除地址失败'
		},
		upsertAddress: {
			addAddress: '添加收货地址',
			updateAddress: '更新收货地址',
			nameError: '请输入您的姓名',
			phoneError: '请输入您的电话号码',
			addressLine1: '地址行 1',
			addressLine1Error: '请输入您的地址',
			addressLine2: '地址行 2',
			city: '城市',
			cityError: '请输入您的城市',
			state: '省/州',
			stateError: '请输入您的省/州',
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
		pageTitle: '主页',
		instantQuote: '即时报价',
		quoteNow: '立即报价'
	},

	products: {
		standardPcb: '标准 PCB',
		advancedPcb: '高级 PCB',
		flexiblePcb: '柔性 PCB',
		rigidFlex: '刚柔结合',
		assembly: '组装',
		stencil: 'SMD 刮模',
		cnc: 'CNC 加工',
		sheetMetal: '钣金',
		threePrinting: '3D 打印',
		injectionMolding: '注塑',
		vacuumCasting: '真空铸造'
	},

	instantQuote: {
		pageTitle: '即时报价',
		specification: '规格',

		upsertProduct: {
			uploadingFiles: '上传文件',
			savingCart: '保存到购物车',
			addingOrder: '添加到订单',
			updatingProduct: '更新产品规格',
			uploadFileError: '文件上传失败',
			saveCartError: '保存到购物车失败',
			addOrderError: '添加到订单失败',
			updateProductError: '更新产品失败',
			saveCartSuccess: '产品已保存到购物车',
			addOrderSuccess: '产品已添加到订单',
			updateProductSuccess: '产品更新成功'
		},

		pricing: {
			title: '价格和生产时间',
			weight: '重量',
			buildTime: '生产时间',
			chargeDetails: '收费细节',
			total: '总计',
			saveProduct: '保存产品',
			saveToCart: '保存到购物车',
			addToOrder: '添加到订单'
		},

		fileDrop: {
			dragDrop: '将文件拖放到此处或单击上传',
			onlyAccepts20: '仅接受 zip 或 rar | 最大文件“大小”：20 MB',
			onlyAccepts200: '仅接受 zip 或 rar | 最大文件“大小”：200 MB',
			fileUploaded: '文件上传成功',
			downloadFile: '下载文件'
		},

		gerberFile: {
			title: 'Gerber 文件',
			description: '请上传您产品的 Gerber 文件（仅接受 .zip, .rar）'
		},

		designFile: {
			title: '设计文件',
			description: '请上传您产品的设计文件（仅接受 .zip, .rar）'
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
			boardType: {
				title: '板类型',
				description:
					'PCB将以单片或面板形式发货。对于批量组装订单（数量大于30），我们建议以面板形式发货，这将提高组装效率并降低成本。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户提供面板',
					panelByVelenova: 'Velenova提供面板'
				}
			},
			xoutAllowance: {
				title: '面板中的缺陷允许量',
				description: '面板中可能存在不良PCB，如果不接受缺陷允许量，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '路由过程',
				description: '在面板中，PCB连接如以下图所示：',
				values: {
					velenovaPrefer: '按照Velenova的偏好面板',
					vScoring: 'V形切割面板',
					tabRoute: '标签路由面板',
					vScoringTabRoute: '同时使用V形切割和标签路由'
				}
			},
			breakAwayRail: {
				title: '断开式导轨',
				description:
					'断开式导轨是长条空白板边缘，在组装过程中留下轨道传输空间并在面板中放置标记点。PCB在组装生产线上通过导轨传输，因此，必须保留一对禁止放置组件的边缘作为传输边缘。断裂导轨的宽度通常约为5-8mm。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断开式导轨的大小，总共5个面板=总共30个单独的PCB)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中存在不同设计，通过V型切割、冲压孔、铣槽等分开。如果在一个Gerber文件中有不同类型的PCB设计，我们将收取额外的面板费用。',
				error: '不同设计应大于0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'板的尺寸是指客户订购的板的长度和宽度。如果是圆形板，长度和宽度就是圆的直径；如果是形状不规则的板，长度和宽度按照最大的形状范围进行测量。',
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
				description: '请选择您需要的单片数量。对于标准PCB，起始数量为5片。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '板中的铜层数。MMWPCB目前最多可以生产60层，如果您需要超过14层，请选择高级PCB页面进行估值。',
				layer: '层',
				layers: '层'
			},
			copperLayer: {
				title: '铜层',
				description:
					'在订购1层PCB时，请指定电路层是在顶部、底部还是不存在。请确保选择正确的参数，否则我们需要与您联系以重新确认。',
				values: {
					topLayer: '顶层',
					bottomLayer: '底层'
				}
			},
			solderMask: {
				title: '焊膏',
				description:
					'是一种涂覆材料，用于遮盖或保护选定区域。在订购1层PCB时，请指定焊膏是在顶部、底部还是两侧。当仅选择一侧作为焊膏时，另一侧将完全暴露焊膏开口。请确保选择正确的参数，否则我们需要与您联系以重新确认。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			silkscreen: {
				title: '丝印',
				description: '丝印是用于标识PCB组件、标记、徽标、符号等的墨水印层。在订购1层PCB时，请指定丝印所在的层。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			material: {
				title: '材料',
				description:
					'FR4是制造电路板中使用的最常见的电介质材料。铝板的散热性能优于标准FR-4结构。铜基板的热导率优于铝PCB。由于其低介电损耗的特性，Rogers通常用于高频PCB。如果您需要其他材料，请联系您的销售代表。',
				disclaimer: '*材料型号可以在下面注明。HDI适用于4层或以上。',
				values: {
					fr4: 'FR-4',
					aluminum: '铝',
					rogers: 'Rogers',
					hdi: 'HDI（埋盲孔）',
					copperBase: '铜基'
				}
			},
			fr4TG: {
				title: 'FR4-TG',
				description:
					'TG表示玻璃转变温度。普通TG为130℃以上，中等TG约为150℃以上，先进TG通常大于170℃。TG越高，材料的耐温性能越好。MMWPCB的默认材料TG为150-160℃，高于大多数公司。',
				disclaimer: '*高TG基材具有良好的CAF耐受性、高耐热性、尺寸稳定性，适合无铅焊接工艺。'
			},
			rogers: {
				title: 'Rogers',
				description:
					'Rogers RO4000系列在行业中处于领先地位。这种低损耗材料广泛应用于微波和毫米波频率设计。与传统PTFE材料相比，电路制造更易于使用，性能稳定一致。目前，4003C和4350B可供MMWPCB使用。如果您需要其他型号，请联系您的销售代表。'
			},
			thermalConductivity: {
				title: '热导率',
				description:
					'铝PCB / 铜基PCB的热导率是衡量材料从源头导走热量能力的指标。通常以米开尔文每瓦（W/mK）作为单位，通常用k、λ 或 K表示。'
			},
			thermoElectricSeparation: {
				title: '热电隔离',
				description: '热电隔离指的是铜基材上的导热垫与电导垫分开，这可以帮助实现最佳的热传导和散热效果。如下所示：'
			},
			structureOfMCPCB: {
				title: 'MCPCB结构',
				description: '这适用于双面/多层金属基板（铝或铜基）。根据金属基材在中间还是底部，有两种结构可供选择。',
				values: {
					metalCoreMiddle: '金属核心在中间',
					metalBaseBottom: '金属基材在底面'
				}
			},
			thickness: {
				title: '厚度',
				description:
					'对于普通材料，板厚度是指PCB生产完成后的厚度，误差约为10%（(+/-10% (T>=1mm) 或 +/- 0.1mm (T<1mm)。误差主要是由于焊膏和铜沉积引起。如果对厚度误差有其他要求，请在其他特别要求中备注。注意：对于单面/双面Rogers板，厚度是指基材的厚度。'
			},
			minTrack: {
				title: '最小线宽/间距',
				description: '铜线的最小宽度和两条线之间的最小距离。MMWPCB工程师将再次检查最小线宽/间距。'
			},
			minHoleSize: {
				title: '最小孔尺寸',
				description: '孔的最小直径。MMWPCB工程师将再次检查最小孔尺寸。',
				noDrill: '不打孔'
			},
			solderMaskColor: {
				title: '焊膏颜色',
				description:
					'焊膏颜色指PCB表面的颜色。目前，MMWPCB提供9种常规焊膏颜色。如果需要粉色、灰色、橙色或透明，请前往高级PCB页面选择。'
			},
			silkscreenColor: {
				title: '丝印颜色',
				description:
					'丝印是用于标识PCB组件、标记、徽标、符号等的墨层。颜色通常为白色。然而，当焊膏墨水是白色时，丝印将是黑色。'
			},
			uvPrinting: {
				title: 'UV印刷 彩色',
				description: '',
				descriptionDetail: {
					title1: '订购前提条件',
					body1: '单片最大尺寸：270*470MM',
					body2: '选择焊膏颜色。',
					title2: '设计规格',
					body3: '避免在焊膏开口处放置彩色字符，例如，表面贴装垫或通孔垫。',
					body4:
						'彩色字符可以通过参考图像和参考对齐图提供（便于与PCB对齐），而无需设计到Gerber文件中。但是，如果您选择将彩色字符包括在Gerber文件中，请确保它们位于丝印层中，并标注颜色。',
					disclaimer:
						'*请发送您希望在PCB上印刷的图像，支持以下格式：AI、PDF、JPEG、PNG、TIFF等，并指明您希望在板上印刷的位置。'
				},
				disclaimer: '*上传的PCB文件应包含彩色渲染',
				values: {
					singleSidedTop: '单面：顶部',
					singleSidedBottom: '单面：底部',
					doubleSided: '双面'
				}
			},
			edgeConnector: {
				title: '边缘连接器',
				description:
					'边缘连接器通过接触PCB上的金手指来实现电气连接。如果您的设计包含金手指，请检查“是”，并选择表面处理方法和倒角角度。如果不是，请检查“否”。'
			},
			surfaceFinish: {
				title: '表面处理',
				description:
					'表面处理是PCB生产的重要部分。它可以保护铜免于氧化，这将使PCB无法使用。此外，它为组件焊接提供光滑的表面。',
				values: {
					haslWithLead: '含铅HASL',
					haslLeadFree: '无铅HASL',
					immersionGold: '浸金（ENIG）',
					osp: 'OSP',
					hardGold: '硬金',
					immersionSilver: '浸银（Ag）',
					immersionTin: '浸锡',
					haslLeadFreeImmersionGold: '无铅HASL + 选择性浸金',
					haslLeadFreeHardGold: '无铅HASL + 选择性硬金',
					immersionGoldHardGold: '浸金 + 选择性硬金',
					enepig: 'ENEPIG',
					plainCopper: '裸铜 / 无'
				},
				acceptHASLChange: '勾选表示您接受我们可能会在不额外收费的情况下自行将“HASL”更改为“ENIG”。'
			},
			viaProcess: {
				title: '孔处理',
				description:
					'对于Gerber文件，我们将根据文件进行处理，此选项无效。对.PCB或.PCB文件，我们会根据您选择的参数进行处理。',
				disclaimer: '*对于Gerber文件，此选择不会影响任何事项，PCB将根据文件参数制作。',
				values: {
					tentingVias: '封闭孔',
					pluggedVias: '带焊膏的填充孔',
					viasNotCovered: '不封闭的孔'
				}
			},
			finishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的数量，以盎司为单位，此选项将决定外层上铜的厚度。MMWPCB提供外层铜厚度为1-13盎司。 PTH孔或通过孔用于创建部分或半孔，以形成孔筒的侧面开口。通常用于将PCB固定到另一个PCB上。',
				disclaimer: '*最小线宽/间距要求：对样品订单≥3/3mil，或对大宗订单≥3.5/3.5mil。',
				bareBoard: '裸板'
			},
			innerCopper: {
				title: '内层铜',
				description: '多层PCB的内层铜重量。默认内层铜重量为1盎司。',
				disclaimer: '*最小线宽/间距要求：对样品订单≥3/3mil，或对大宗订单≥3.5/3.5mil。'
			},
			removeProductNo: {
				title: '移除产品编号',
				description:
					'MMWPCB将在PCB上添加我们的产品编号，以区分您的PCB与其它。 如果要移除，将额外收取1.5美元的费用。如果要放置在特定位置，请通过在丝印层中添加“MMWPCB”文本指明位置，此选项不收取额外费用。',
				values: {
					no: '否',
					yes: '是（额外 +1.5美元）',
					specifyLocation: '指定位置'
				}
			},
			peelableSolderMask: {
				title: '可剥离焊膏',
				description:
					'也称为蓝色可剥离焊膏，通常用于保护组装过程中所需焊接垫，通常在设计中称为GTPM和GBPM。与绿色焊膏不同，绿色焊膏是负图像，并且在PCB设计中永久存在；而可剥离焊膏是正图像（您在设计中看到的即为该图像），在PCB制造和组装中暂时使用。涂层材料在经过波焊后可剥离。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			holeCopperThickness: {
				title: '孔铜厚度',
				description: '请选择所需的孔铜厚度'
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已获得UL认证，请选择要在所需层上添加相应的标志。如果是双层板，我们将添加标志JDB-D，如果是多层板，我们将添加JDB-M。对于单层金属基PCB，我们将根据需要添加相应的UL（JDB-A1，JDB-A2，JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶丝印',
					bottomSilkscreen: '是 - 添加到底丝印',
					topSolderMask: '是 - 添加到顶焊膏',
					bottomSolderMask: '是 - 添加到底焊膏',
					topCopper: '是 - 添加到顶铜',
					bottomCopper: '是 - 添加到底铜',
					default: '是 - 按照MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：在顶丝印层中以WWYY格式添加日期代码',
				values: {
					velenovaPrefer: '按照Velenova的偏好添加',
					customerRequired: '按照客户要求添加',
					updateDesignedDateCode: '更新设计的日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '我们可能会对此类特别选项增加额外费用，费用将在审核后确认。',
				values: {
					halfCut: {
						title: '半切 / 折叠孔',
						description:
							'经切割的PTH孔或通过孔，创建一个部分或半个孔形成孔筒的侧面开口。通常用于将一个PCB安装到另一个PCB上。'
					},
					edgePlating: {
						title: '边缘电镀',
						description:
							'PCB边缘电镀是指在印刷电路板的高度上对侧面进行金属化。您可以在一个或所有边缘进行电镀。通过边缘电镀，您使PCB具备可靠连接和刚性。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description:
							'PCB中的导体承载各种信号，为提高信号传输速率，必须提高频率。然而，蚀刻、层厚和线宽等因素会导致PCB中的阻抗变化，导致信号失真。因此，对于高速PCB导体，阻抗值应控制在一定范围内，称为“阻抗控制”。阻抗公差通常为±10%。如在文档中指定了阻抗要求但在订单中未选择，将视为忽视阻抗要求。'
					},
					halogenFree: {
						title: '无卤素',
						description:
							'根据JPCA-ES-01-2003标准，氯（Cl）和溴（Br）含量均低于0.09% Wt（按重量计算），CI+Br总量≤0.15% [1500PPM]的铜覆层材料定义为无卤素铜覆层材料。'
					},
					customStackup: {
						title: '自定义叠层',
						description: '仅适用于多层PCB。如需定制特定叠层，请将叠层文件一起上传或联系您的销售代表。'
					},
					carbonInk: {
						title: '导电碳墨',
						description:
							'也称为碳油PCB。碳墨PCB是在PCB基材上涂覆以碳基导电墨水（称为碳墨），固化后形成一带有碳膜导电图案的PCB。碳墨PCB具有低成本、强阻抗控制能力、高可靠性和良好的耐腐蚀性等优点。'
					},
					allViasFilled: {
						title: '所有孔填充树脂并封盖',
						description: '如果您勾选此选项，所有孔将填充树脂，然后封盖并电镀覆层。'
					},
					viaInPad: {
						title: '通孔位于焊盘中',
						description: '如果您的设计中有通孔位于SMD焊盘中，请勾选此选项，我们将进行树脂填充，然后封盖并电镀覆层。'
					},
					pressFitHoles: {
						title: '压接孔',
						description:
							'压接孔是设计用来接受带压接引脚的组件。引脚插入孔中，然后按压到位以创建可靠连接。公差：+/-0.05mm。'
					},
					countersink: {
						title: '沉头孔 / 盘形孔',
						description:
							'沉头孔和盘形孔之间最显著的区别是螺钉或工具的大小和形状，沉头孔较浅且形状方，例如螺钉头部的肩可以放置在该孔中，它也允许使用垫圈。'
					},
					zAxisMilling: {
						title: 'Z轴铣削',
						description: '也称为深度控制路由（铣削）或水平铣削，指在具有变化级别升降的PCB边缘或PCB内进行部分铣削。'
					},
					blackFr4: {
						title: '黑色FR4（黑色核心）',
						description:
							'属于普通FR-4基材，其加工技术与FR-4相同。它是黑色、不透明、遮光，适合制作LED显示PCB和仪器及光学仪器中的绝缘结构件。'
					},
					embeddedCopperPcb: {
						title: '嵌入式铜PCB',
						description:
							'嵌入式铜PCB是指铜电路在基材内部嵌入的印刷电路板。埋入铜块的设计可主要分为两类：埋入铜块和嵌入铜块。埋入铜块是指埋入厚度小于板总厚度的铜块，其中一侧与底层平齐，另一侧与某个内层平齐，如图1所示（半埋入铜块）。嵌入铜块是指嵌入厚度接近或等于板总厚度的铜块，其中铜块通过顶层，如图2所示（通孔铜块）。具有埋入或嵌入铜块的印刷电路板具有良好的导热性、高散热性和节省板块空间的特点，有效解决高功率电子元件的散热问题。'
					},
					cavityPcb: {
						title: '腔体PCB',
						description:
							'腔体PCB是一种带有一个或多个凹槽或腔体的PCB。这些槽是通过去除部分板材而形成的，留下一个凹陷区域，在该区域可以放置更深的元件，并最终降低设备的整体高度。腔体PCB和盲孔PCB是两种不同的技术，盲孔钻孔是指为通过孔钻孔，钻到一定深度而不穿透板，而腔体PCB则是指PCB上的特定区域。'
					},
					semiFlexPcb: {
						title: '半柔性PCB',
						description:
							'半柔性PCB是一种可以在刚性PCB的基础上进行局部弯曲的PCB，它不仅能提供刚性PCB的支撑，而且还可以根据产品需求实现局部弯曲，包括45°、90°、180°的弯曲，以满足各种类型3D装配的安装性能要求。'
					},
					hybridPcb: {
						title: '整体/部分混合PCB',
						description:
							'混合PCB利用不同材料制造基材核心层和介电层。与单一材料相对，混合PCB的制造涉及使用不同的材料。不同的材料用于将所有优点结合到PCB生产过程中，并减少特定材料可能存在的缺点。'
					},
					backDrillPcb: {
						title: '反钻PCB',
						description:
							'反钻（有时称为受控深度钻孔或CDD）涉及使用直径略大于PTH的钻头从孔中去除导电涂层或突起。反钻孔应将突起长度降低到10mil。如果突起大于10mil，则将产生信号反射。'
					},
					leadlessPartialHardGold: {
						title: '无铅部分金电镀',
						description: '这是一种电子元件表面处理技术，无铅并局部电镀以提供高水平的导电性和耐用性。'
					}
				}
			},
			specialRequests: {
				title: '其他特殊要求',
				placeholder: '填写任何PCB详情，以使我们尽可能清楚地了解您的要求。'
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
			pcbType: {
				title: 'PCB类型',
				description:
					'高密度互连（HDI）板包含盲孔和/或埋孔，且通常包含直径为0.006或更小的微小孔。它们的电路密度高于传统电路板。',
				values: {
					throughHoleBoard: '插孔板',
					hdi: 'HDI（埋盲孔）'
				}
			},
			boardSpec: {
				title: '板规格',
				description: '生产PCB所需的标准',
				values: {
					ipc6012Class2: 'IPC 6012 类别2',
					ipc6012Class3: 'IPC 6012 类别3',
					iatf16949: 'IATF 16949',
					iso13485: 'ISO 13485',
					customerStandard: '客户标准'
				}
			},
			boardType: {
				title: '板类型',
				description:
					'PCB将以单片或面板形式发货。对于批量组装订单（数量大于30），我们建议以面板形式发货，这将提高组装效率。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户提供面板',
					panelByVelenova: 'Velenova提供面板'
				}
			},
			xoutAllowance: {
				title: '面板中的缺陷允许量',
				description: '面板中可能存在不良PCB，如果不接受缺陷允许量，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '路由过程',
				description: '在面板中，PCB连接如以下图所示：',
				values: {
					velenovaPrefer: '按照Velenova的偏好面板',
					vScoring: 'V形切割面板',
					tabRoute: '标签路由面板',
					vScoringTabRoute: '同时使用V形切割和标签路由'
				}
			},
			breakAwayRail: {
				title: '断开式导轨',
				description:
					'断开式导轨是长条空白板边缘，在组装过程中留下轨道传输空间并在面板中放置标记点。PCB在组装生产线上通过导轨传输，因此，必须保留一对禁止放置组件的边缘作为传输边缘。断裂导轨的宽度通常约为5-8mm。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断开式导轨的大小，总共5个面板=总共30个单独的PCB)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中存在不同设计，通过V型切割、冲压孔、铣槽等分开。如果在一个Gerber文件中有不同类型的PCB设计，我们将收取额外的面板费用。',
				error: '不同设计应大于0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'板的尺寸是指客户订购的板的长度和宽度。如果是圆形板，长度和宽度就是圆的直径；如果是形状不规则的板，长度和宽度按照最大的形状范围进行测量。',
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
				description: '请选择您需要的单片数量。对于标准PCB，起始数量为5片。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '板中的铜层数。MMWPCB目前最多可以生产60层，如果您需要超过14层，请选择高级PCB页面进行估值。',
				layer: '层',
				layers: '层'
			},
			copperLayer: {
				title: '铜层',
				description:
					'在订购1层PCB时，请指定电路层是在顶部、底部还是不存在。请确保选择正确的参数，否则我们需要与您联系以重新确认。',
				values: {
					topLayer: '顶层',
					bottomLayer: '底层'
				}
			},
			solderMask: {
				title: '焊膏',
				description:
					'是一种涂覆材料，用于遮盖或保护选定区域。在订购1层PCB时，请指定焊膏是在顶部、底部还是两侧。当仅选择一侧作为焊膏时，另一侧将完全暴露焊膏开口。请确保选择正确的参数，否则我们需要与您联系以重新确认。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			silkscreen: {
				title: '丝印',
				description: '丝印是用于标识PCB组件、标记、徽标、符号等的墨水印层。在订购1层PCB时，请指定丝印所在的层。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			material: {
				title: '材料',
				description:
					'FR4是制造电路板中使用的最常见的电介质材料。铝板的散热性能优于标准FR-4结构。铜基板的热导率优于铝PCB。由于其低介电损耗的特性，Rogers通常用于高频PCB。如果您需要其他材料，请联系您的销售代表。',
				values: {
					tg140Fr4: {
						title: 'TG140 FR-4',
						disclaimer: '*TG140 FR-4材料：Shengyi S1141'
					},
					tg150Fr4: {
						title: 'TG150 FR-4',
						disclaimer: '*TG150 FR-4材料：Shengyi S1000-H'
					},
					tg170Fr4: {
						title: 'TG170 FR-4',
						disclaimer: '*TG170 FR-4材料：S1000-2，S1000-2M'
					},
					tg150Fr4HalogenFree: {
						title: 'TG150 FR-4（无卤素）',
						disclaimer:
							'*TG150 FR-4（无卤素）材料：Shengyi S1150G。为确保质量，我们一般不备货这些材料，采购周期为7-20天。'
					},
					tg170Fr4HalogenFree: {
						title: 'TG170 FR-4（无卤素）',
						disclaimer:
							'*TG170 FR-4（无卤素）材料：Shengyi S1170G。为确保质量，我们一般不备货这些材料，采购周期为7-20天。'
					},
					highCTI: {
						title: '高CTI（≥600V）',
						disclaimer: '*高CTI（≥600V）材料：Shengyi S1600 （CTI≥600V）'
					},
					highCTIHalogenFree: {
						title: '高CTI（≥600V，无卤素）',
						disclaimer: '高CTI（无卤素，≥600V）材料：Shengyi S1151G（CTI≥600V）'
					},
					highSpeed: {
						title: '高速（GHz）',
						disclaimer:
							'高速（GHz）与高频PCB（DK）：这些材料的供应链或采购选项有限。为确保质量，我们一般不备货这些材料，您下单后将回复您。'
					},
					highFrequency: {
						title: '高频PCB（DK）',
						disclaimer:
							'高速（GHz）与高频PCB（DK）：这些材料的供应链或采购选项有限。为确保质量，我们一般不备货这些材料，您下单后将回复您。'
					},
					specialMaterial: {
						title: '特殊材料（高低温）',
						disclaimer: '特殊材料（高低温）：Shengyi SH260'
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
					'对于普通材料，板厚度是指PCB生产完成后的厚度，误差约为10%（(+/-10% (T>=1mm) 或 +/- 0.1mm (T<1mm)。误差主要是由于焊膏和铜沉积引起。如果对厚度误差有其他要求，请在其他特别要求中备注。注意：对于单面/双面Rogers板，厚度是指基材的厚度。'
			},
			minTrack: {
				title: '最小线宽/间距',
				description: '铜线的最小宽度和两条线之间的最小距离。MMWPCB工程师将再次检查最小线宽/间距。'
			},
			minHoleSize: {
				title: '最小孔尺寸',
				description: '孔的最小直径。MMWPCB工程师将再次检查最小孔尺寸。',
				noDrill: '不打孔'
			},
			solderMaskColor: {
				title: '焊膏颜色',
				description:
					'焊膏颜色指PCB表面的颜色。目前，PCBWay提供9种常规焊膏颜色。如果需要粉色、灰色、橙色或透明，请前往高级PCB页面选择。'
			},
			silkscreenColor: {
				title: '丝印颜色',
				description:
					'丝印是用于标识PCB组件、标记、徽标、符号等的墨层。颜色通常为白色。然而，当焊膏墨水是白色时，丝印将是黑色。'
			},
			edgeConnector: {
				title: '边缘连接器',
				description:
					'边缘连接器通过接触PCB上的金手指来实现电气连接。如果您的设计包含金手指，请检查“是”，并选择表面处理方法和倒角角度。如果不是，请检查“否”。'
			},
			surfaceFinish: {
				title: '表面处理',
				description:
					'表面处理是PCB生产的重要部分。它可以保护铜免于氧化，这将使PCB无法使用。此外，它为组件焊接提供光滑的表面。',
				values: {
					haslLeadFree: '无铅HASL',
					immersionGold: '浸金（ENIG）',
					osp: 'OSP',
					hardGold: '硬金',
					immersionSilver: '浸银（Ag）',
					immersionTin: '浸锡',
					haslLeadFreeImmersionGold: '无铅HASL + 选择性浸金',
					haslLeadFreeHardGold: '无铅HASL + 选择性硬金',
					immersionGoldHardGold: '浸金 + 选择性硬金',
					enepig: 'ENEPIG',
					plainCopper: '裸铜 / 无'
				}
			},
			surfaceThickness: {
				title: '表面厚度',
				immersionGold: {
					title: '浸金的厚度'
				},
				hardGold: {
					title: '金/镍厚度'
				},
				haslLeadFreeImmersionGold: {
					title: '浸金的厚度'
				},
				haslLeadFreeHardGold: {
					title: '硬金的厚度'
				},
				immersionGoldHardGold: {
					title: '浸金 / 硬金厚度'
				},
				enepig: {
					title: 'ENEPIG的厚度'
				}
			},
			finishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的重量，以盎司为单位，此选项将决定外层上铜的厚度。MMWPCB提供外层铜厚度为1-13盎司。',
				bareBoard: '裸板'
			},
			innerCopper: {
				title: '内层铜',
				description: '多层PCB的内层铜重量。默认内层铜重量为1盎司。'
			},
			peelableSolderMask: {
				title: '可剥离焊膏',
				description:
					'也称为蓝色可剥离焊膏，通常用于保护组装过程中所需焊接垫，通常在设计中称为GTPM和GBPM。与绿色焊膏不同，绿色焊膏是负图像，并且在PCB设计中永久存在；而可剥离焊膏是正图像（您在设计中看到的即为该图像），在PCB制造和组装中暂时使用。涂层材料在经过波焊后可剥离。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			holeCopperThickness: {
				title: '孔铜厚度',
				description: '请选择所需的孔铜厚度'
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已获得UL认证，请选择要在所需层上添加相应的标志。如果是双层板，我们将添加标志JDB-D，如果是多层板，我们将添加JDB-M。对于单层金属基PCB，我们将根据需要添加相应的UL（JDB-A1，JDB-A2，JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶丝印',
					bottomSilkscreen: '是 - 添加到底丝印',
					topSolderMask: '是 - 添加到顶焊膏',
					bottomSolderMask: '是 - 添加到底焊膏',
					topCopper: '是 - 添加到顶铜',
					bottomCopper: '是 - 添加到底铜',
					default: '是 - 按照MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：在顶丝印层中以WWYY格式添加日期代码',
				values: {
					velenovaPrefer: '按照Velenova的偏好添加',
					customerRequired: '按照客户要求添加',
					updateDesignedDateCode: '更新设计的日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '我们可能会对此类特别选项增加额外费用，费用将在审核后确认。',
				values: {
					halfCut: {
						title: '半切 / 折叠孔',
						description:
							'经切割的PTH孔或通过孔，创建一个部分或半个孔形成孔筒的侧面开口。通常用于将一个PCB安装到另一个PCB上。'
					},
					edgePlating: {
						title: '边缘电镀',
						description:
							'PCB边缘电镀是指在印刷电路板的高度上对侧面进行金属化。您可以在一个或所有边缘进行电镀。通过边缘电镀，您使PCB具备可靠连接和刚性。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description:
							'PCB中的导体承载各种信号，为提高信号传输速率，必须提高频率。然而，蚀刻、层厚和线宽等因素会导致阻抗变化，阻抗公差一般为±10%。如在文档中指定了阻抗要求但在订单中未选择，将视为忽视阻抗要求。'
					},
					halogenFree: {
						title: '无卤素',
						description:
							'根据JPCA-ES-01-2003标准，氯（Cl）和溴（Br）含量均低于0.09% Wt（按重量计算），CI+Br总量≤0.15% [1500PPM]的铜覆层材料定义为无卤素铜覆层材料。'
					},
					customStackup: {
						title: '自定义叠层',
						description: '仅适用于多层PCB。如需定制特定叠层，请将叠层文件一起上传或联系您的销售代表。'
					},
					carbonInk: {
						title: '导电碳墨',
						description:
							'也称为碳油PCB。碳墨PCB是在PCB基材上涂覆以碳基导电墨水（称为碳墨），固化后形成一带有碳膜导电图案的PCB。碳墨PCB具有低成本、强阻抗控制能力、高可靠性和良好的耐腐蚀性等优点。'
					},
					allViasFilled: {
						title: '所有孔填充树脂并封盖',
						description: '如果您勾选此选项，所有孔将填充树脂，然后封盖并电镀覆层。'
					},
					viaInPad: {
						title: '通孔位于焊盘中',
						description: '如果您的设计中有通孔位于SMD焊盘中，请勾选此选项，我们将进行树脂填充，然后封盖并电镀覆层。'
					},
					pressFitHoles: {
						title: '压接孔',
						description:
							'压接孔是设计用来接受带压接引脚的组件。引脚插入孔中，然后按压到位以创建可靠连接。公差：+/-0.05mm。'
					},
					countersink: {
						title: '沉头孔 / 盘形孔',
						description:
							'沉头孔和盘形孔之间最显著的区别是螺钉或工具的大小和形状，沉头孔较浅且形状方，例如螺钉头部的肩可以放置在该孔中，它也允许使用垫圈。'
					},
					zAxisMilling: {
						title: 'Z轴铣削',
						description: '也称为深度控制路由（铣削）或水平铣削，指在具有变化级别升降的PCB边缘或PCB内进行部分铣削。'
					},
					blackFr4: {
						title: '黑色FR4（黑色核心）',
						description:
							'属于普通FR-4基材，其加工技术与FR-4相同。它是黑色、不透明、遮光，适合制作LED显示PCB和仪器及光学仪器中的绝缘结构件。'
					},
					embeddedCopperPcb: {
						title: '嵌入式铜PCB',
						description:
							'嵌入式铜PCB是指铜电路在基材内部嵌入的印刷电路板。埋入铜块的设计可主要分为两类：埋入铜块和嵌入铜块。埋入铜块是指埋入厚度小于板总厚度的铜块，其中一侧与底层平齐，另一侧与某个内层平齐，如图1所示（半埋入铜块）。嵌入铜块是指嵌入厚度接近或等于板总厚度的铜块，其中铜块通过顶层，如图2所示（通孔铜块）。具有埋入或嵌入铜块的印刷电路板具有良好的导热性、高散热性和节省板块空间的特点，有效解决高功率电子元件的散热问题。'
					},
					cavityPcb: {
						title: '腔体PCB',
						description:
							'腔体PCB是一种带有一个或多个凹槽或腔体的PCB。这些槽是通过去除部分板材而形成的，留下一个凹陷区域，在该区域可以放置更深的元件，并最终降低设备的整体高度。腔体PCB和盲孔PCB是两种不同的技术，盲孔钻孔是指为通过孔钻孔，钻到一定深度而不穿透板，而腔体PCB则是指PCB上的特定区域。'
					},
					semiFlexPcb: {
						title: '半柔性PCB',
						description:
							'半柔性PCB是一种可以在刚性PCB的基础上进行局部弯曲的PCB，它不仅能提供刚性PCB的支撑，而且还可以根据产品需求实现局部弯曲，包括45°、90°、180°的弯曲，以满足各种类型3D装配的安装性能要求。'
					},
					hybridPcb: {
						title: '整体/部分混合PCB',
						description:
							'混合PCB利用不同材料制造基材核心层和介电层。与单一材料相对，混合PCB的制造涉及使用不同的材料。不同的材料用于将所有优点结合到PCB生产过程中，并减少特定材料可能存在的缺点。'
					},
					backDrillPcb: {
						title: '反钻PCB',
						description:
							'反钻（有时称为受控深度钻孔或CDD）涉及使用直径略大于PTH的钻头去除孔中的导电涂层或突起。反钻孔应将突起长度降低到10mil。如果突起大于10mil，则将产生信号反射。'
					},
					leadlessPartialHardGold: {
						title: '无铅部分电镀硬金',
						description: '这是一种电子元件表面处理技术，无铅并局部电镀以提供高水平的导电性和耐用性。'
					}
				}
			},
			finalInspectionReport: {
				title: '最终检查报告（免费）',
				description: '常规发货报告另附测试报告、尺寸检查报告',
				values: {
					defaultInspectionReport: '默认检查报告',
					microsectionInspectionReport: '微观截面检查报告',
					solderabilityInspectionReport: '可焊性检查报告',
					thermalStressInspectionReport: '热应力检查报告',
					impedanceTestReport: '阻抗测试报告',
					humidityIndicatorCards: '湿度指示卡'
				}
			},
			specialRequests: {
				title: '其他特殊要求',
				placeholder: '填写任何PCB详情，以使我们尽可能清楚地了解您的要求。'
			}
		},

		flexiblePcb: {
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
			boardType: {
				title: '板类型',
				description:
					'PCB将以单片或面板形式发货。对于批量组装订单（数量大于30），我们建议以面板形式发货，这将提高组装效率并降低成本。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户提供面板',
					panelByVelenova: 'Velenova提供面板'
				}
			},
			xoutAllowance: {
				title: '面板中的缺陷允许量',
				description: '面板中可能存在不良PCB，如果不接受缺陷允许量，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '路由过程',
				description: '在面板中，PCB连接如以下图所示：',
				values: {
					velenovaPrefer: '按照Velenova的偏好面板',
					vScoring: 'V形切割面板',
					tabRoute: '标签路由面板',
					vScoringTabRoute: '同时使用V形切割和标签路由'
				}
			},
			breakAwayRail: {
				title: '断开式导轨',
				description:
					'断开式导轨是长条空白板边缘，在组装过程中留下轨道传输空间并在面板中放置标记点。PCB在组装生产线上通过导轨传输，因此，必须保留一对禁止放置组件的边缘作为传输边缘。断裂导轨的宽度通常约为5-8mm。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断开式导轨的大小，总共5个面板=总共30个单独的PCB)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中存在不同设计，通过V型切割、冲压孔、铣槽等分开。如果在一个Gerber文件中有不同类型的PCB设计，我们将收取额外的面板费用。',
				error: '不同设计应大于0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'板的尺寸是指客户订购的板的长度和宽度。如果是圆形板，长度和宽度就是圆的直径；如果是形状不规则的板，长度和宽度按照最大的形状范围进行测量。',
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
				description: '请选择您需要的单片数量。对于标准PCB，起始数量为5片。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '板中的铜层数。MMWPCB目前最多可以生产60层，如果您需要超过14层，请选择高级PCB页面进行估值。',
				layer: '层',
				layers: '层'
			},
			material: {
				title: '聚酰亚胺基材料',
				description: '常用的一种电介质基材料',
				values: {
					polyimideFlex: '聚酰亚胺柔性',
					pet: 'PET',
					highFrequency: '高频（DK<=3.6）'
				}
			},
			petType: {
				title: '材料（PET）',
				disclaimer: '*承担温度在110°以内',
				values: {
					transparent: '透明',
					translucent: '半透明'
				}
			},
			thickness: {
				title: 'FPC厚度',
				description: 'FPC厚度不包括加固材料和3M胶带的厚度。',
				disclaimer: '*FPC厚度不包括加固材料和3M胶带的厚度。'
			},
			minTrack: {
				title: '最小线宽/间距',
				description: '铜线的最小宽度和两条线之间的最小距离。MMWPCB工程师将再次检查最小线宽/间距。'
			},
			minHoleSize: {
				title: '最小孔大小/焊盘大小（直径）',
				description: '孔和焊盘的最小直径',
				noDrill: '不打孔'
			},
			solderMaskColor: {
				title: '焊膏（覆盖层）',
				description: '用于覆盖PCB的掩膜颜色',
				coverlay: '覆盖层'
			},
			silkscreenColor: {
				title: '丝印颜色',
				description:
					'丝印是用于标识PCB组件、标记、徽标、符号等的墨层。颜色通常为白色。然而，当焊膏墨水是白色时，丝印将是黑色。'
			},
			edgeConnector: {
				title: '边缘连接器',
				description: '也称为金手指。这是一种用于PCB的边缘连接器。它是一个金属涂层边缘，旨在与配对连接器进行电气接触。'
			},
			stiffener: {
				title: '加固材料',
				description:
					'添加到柔性电路板上的材料，以增强特定区域的刚性或执行其他特殊功能，例如增加整体厚度；保护焊接点；散热等。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			surfaceFinish: {
				title: '表面处理',
				description: '帮助焊接的工艺',
				values: {
					immersionGold: '浸金（ENIG）',
					osp: 'OSP',
					hardGold: '硬金',
					immersionSilver: '浸银（Ag）',
					immersionTin: '浸锡',
					immersionGoldHardGold: '浸金 + 选择性硬金',
					enepig: 'ENEPIG'
				}
			},
			surfaceThickness: {
				title: '表面厚度',
				immersionGold: {
					title: '浸金的厚度'
				},
				hardGold: {
					title: '金/镍厚度'
				},
				immersionGoldHardGold: {
					title: '浸金 / 硬金厚度'
				},
				enepig: {
					title: 'ENEPIG的厚度'
				}
			},
			finishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的重量，以盎司为单位，此选项将决定外层上铜的厚度。PCBWay提供外层铜厚度为1-13盎司。',
				bareBoard: '裸板'
			},
			etest: {
				title: '电测试',
				description: '通过飞行探针进行的小批量电测，或使用电测试夹具进行大批量电测。'
			},
			tape: {
				title: '3M/Tesa胶带',
				description: '将整个或部分FPC板粘贴在其他物体上。',
				values: {
					threeM467: '3M467',
					tesa8853: 'Tesa8853',
					tesa8854: 'Tesa8854',
					threeM9495LE: '3M9495LE'
				}
			},
			doubleSidedTape: {
				title: '导电双面胶带',
				description: '导电双面胶带：一类用于整个或部分FPC板的胶带，可以将其粘贴于其他物体，并且该胶带具有导电性。',
				values: {
					htA1134: 'HT-A1134'
				}
			},
			emiShieldingFilm: {
				title: 'EMI屏蔽膜',
				description: '是一种具有高性能屏蔽效果的电气功能膜。',
				values: {
					hcf6000g: 'HCF-6000G',
					pc800: 'PC800'
				}
			},
			peelableSolderMask: {
				title: '可剥离焊膏',
				description:
					'也称为蓝色可剥离焊膏，通常用于保护组装过程中所需焊接垫，通常在设计中称为GTPM和GBPM。与绿色焊膏不同，绿色焊膏是负图像，并且在PCB设计中永久存在；而可剥离焊膏是正图像（您在设计中看到的即为该图像），在PCB制造和组装中暂时使用。涂层材料在经过波焊后可剥离。',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
				}
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已获得UL认证，请选择要在所需层上添加相应的标志。如果是双层板，我们将添加标志JDB-D，如果是多层板，我们将添加JDB-M。对于单层金属基PCB，我们将根据需要添加相应的UL（JDB-A1，JDB-A2，JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶丝印',
					bottomSilkscreen: '是 - 添加到底丝印',
					topSolderMask: '是 - 添加到顶焊膏',
					bottomSolderMask: '是 - 添加到底焊膏',
					topCopper: '是 - 添加到顶铜',
					bottomCopper: '是 - 添加到底铜',
					default: '是 - 按照MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：在顶丝印层中以WWYY格式添加日期代码',
				values: {
					velenovaPrefer: '按照Velenova的偏好添加',
					customerRequired: '按照客户要求添加',
					updateDesignedDateCode: '更新设计的日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '我们可能会对此类特别选项增加额外费用，费用将在审核后确认。',
				values: {
					halfCut: {
						title: '半切 / 折叠孔',
						description:
							'经切割的PTH孔或通过孔，创建一个部分或半个孔形成孔筒的侧面开口。通常用于将一个PCB安装到另一个PCB上。'
					},
					edgePlating: {
						title: '边缘电镀',
						description:
							'PCB边缘电镀是指在印刷电路板的高度上对侧面进行金属化。您可以在一个或所有边缘进行电镀。通过边缘电镀，您使PCB具备可靠连接和刚性。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description: ''
					},
					viasFilledWithCopper: {
						title: '孔内填充铜',
						description: ''
					},
					fpcWithAirgap: {
						title: 'FPC带空气间隙',
						description: ''
					},
					singleSideDoubleAccess: {
						title: '单面双重接入',
						description: ''
					},
					stiffenerTopBottom: {
						title: '上下均加固'
					}
				}
			},
			specialRequests: {
				title: '其他特殊要求',
				placeholder: '填写任何PCB详情，以使我们尽可能清楚地了解您的要求。'
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
			boardType: {
				title: '板类型',
				description:
					'PCB将以单片或面板形式发货。对于批量组装订单（数量大于30），我们建议以面板形式发货，这将提高组装效率并降低成本。',
				values: {
					singlePieces: '单片',
					panelByCustomer: '客户提供面板',
					panelByVelenova: 'Velenova提供面板'
				}
			},
			xoutAllowance: {
				title: '面板中的缺陷允许量',
				description: '面板中可能存在不良PCB，如果不接受缺陷允许量，报价将增加约30%。',
				values: {
					accept: '接受',
					decline: '拒绝'
				}
			},
			routeProcess: {
				title: '路由过程',
				description: '在面板中，PCB连接如以下图所示：',
				values: {
					velenovaPrefer: '按照Velenova的偏好面板',
					vScoring: 'V形切割面板',
					tabRoute: '标签路由面板',
					vScoringTabRoute: '同时使用V形切割和标签路由'
				}
			},
			breakAwayRail: {
				title: '断开式导轨',
				description:
					'断开式导轨是长条空白板边缘，在组装过程中留下轨道传输空间并在面板中放置标记点。PCB在组装生产线上通过导轨传输，因此，必须保留一对禁止放置组件的边缘作为传输边缘。断裂导轨的宽度通常约为5-8mm。'
			},
			panelRequirements: {
				title: '面板要求',
				disclaimer: '(例如：面板为2*3，断开式导轨的大小，总共5个面板=总共30个单独的PCB)'
			},
			differentDesign: {
				title: '面板中的不同设计',
				description:
					'这意味着您的文件中存在不同设计，通过V型切割、冲压孔、铣槽等分开。如果在一个Gerber文件中有不同类型的PCB设计，我们将收取额外的面板费用。',
				error: '不同设计应大于0'
			},
			size: {
				title: '尺寸（单片）',
				description:
					'板的尺寸是指客户订购的板的长度和宽度。如果是圆形板，长度和宽度就是圆的直径；如果是形状不规则的板，长度和宽度按照最大的形状范围进行测量。',
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
				description: '请选择您需要的单片数量。对于标准PCB，起始数量为5片。',
				error: '数量应大于0',
				placeholder: '数量',
				pieces: '片'
			},
			layers: {
				title: '层数',
				description: '板中的铜层数。MMWPCB目前最多可以生产60层，如果您需要超过14层，请选择高级PCB页面进行估值。',
				layer: '层',
				layers: '层'
			},
			material: {
				title: '材料',
				description:
					'FR4是制造电路板中使用的最常见的电介质材料。铝板的散热性能优于标准FR-4结构。铜基板的热导率优于铝PCB。由于其低介电损耗的特性，Rogers通常用于高频PCB。如果您需要其他材料，请联系您的销售代表。',
				values: {
					polyimideFlex: '聚酰亚胺柔性 + FR4'
				}
			},
			thickness: {
				title: '刚柔结合厚度',
				description: '刚性和柔性层的总厚度'
			},
			minTrack: {
				title: '最小线宽/间距',
				description: '铜线的最小宽度和两条线之间的最小距离。MMWPCB工程师将再次检查最小线宽/间距。'
			},
			minHoleSize: {
				title: '最小孔尺寸',
				description: '孔的最小直径。MMWPCB工程师将再次检查最小孔尺寸。',
				noDrill: '不打孔'
			},
			surfaceFinish: {
				title: '表面处理',
				description: '暴露铜的额外工艺以帮助焊接性',
				values: {
					immersionGold: '浸金（ENIG）',
					osp: 'OSP',
					immersionSilver: '浸银（Ag）'
				}
			},
			surfaceThickness: {
				title: '表面厚度',
				immersionGold: {
					title: '浸金的厚度'
				}
			},
			edgeConnector: {
				title: '边缘连接器',
				description:
					'边缘连接器通过接触PCB上的金手指来实现电气连接。如果您的设计包括金手指，请检查“是”并选择表面处理方法和倒角角度；否则请检查“否”。'
			},
			viaProcess: {
				title: '孔处理',
				description:
					'边缘连接器通过接触PCB上的金手指来实现电气连接。如果您的设计包括金手指，请检查“是”并选择表面处理方法和倒角角度；否则请检查“否”。',
				disclaimer: '*对于Gerber文件，此选择不会影响任何事项，PCB将根据文件参数制作。',
				values: {
					tentingVias: '封闭孔',
					pluggedViasSolderMask: '带焊膏的填充孔',
					viasNotCovered: '不封闭的孔'
				}
			},
			flexPart: '柔性部分',
			fpcLayers: {
				title: 'FPC层数',
				description: '柔性部分的导电层数。'
			},
			fpcThickness: {
				title: 'FPC厚度',
				description: '柔性部分的板厚度。'
			},
			fpcCoverlay: {
				title: 'FPC覆盖层',
				description: '用于覆盖PCB的掩膜颜色',
				coverlay: '覆盖层'
			},
			fpcSilkscreenColor: {
				title: '丝印',
				description:
					'丝印是用于标识PCB组件、标记、徽标、符号等的墨层。颜色通常为白色。然而，当焊膏墨水是白色时，丝印将是黑色。'
			},
			fpcFinishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的重量，以盎司为单位，此选项将决定外层上铜的厚度。PCBWay提供外层铜厚度为1-13盎司。'
			},
			rigidPart: '刚性部分',
			rpcSolderMaskColor: {
				title: '焊膏',
				description:
					'焊膏颜色指PCB表面的颜色。当前，PCBWay提供9种常规焊膏颜色。如果需要粉色、灰色、橙色或透明，请前往高级PCB页面选择。'
			},
			rpcSilkscreenColor: {
				title: '丝印',
				description:
					'丝印是用于标识PCB组件、标记、徽标、符号等的墨层。颜色通常为白色。然而，当焊膏墨水是白色时，丝印将是黑色。'
			},
			rpcFinishedCopper: {
				title: '成品铜',
				description:
					'每平方英尺PCB中铜的重量，以盎司为单位，此选项将决定外层上铜的厚度。PCBWay提供外层铜厚度为1-13盎司。'
			},
			ulMarking: {
				title: 'UL标记',
				description:
					'MMWPCB已获得UL认证，请选择要在所需层上添加相应的标志。如果是双层板，我们将添加标志JDB-D，如果是多层板，我们将添加JDB-M。对于单层金属基PCB，我们将根据需要添加相应的UL（JDB-A1，JDB-A2，JDB-A3）。',
				values: {
					topSilkscreen: '是 - 添加到顶丝印',
					bottomSilkscreen: '是 - 添加到底丝印',
					topSolderMask: '是 - 添加到顶焊膏',
					bottomSolderMask: '是 - 添加到底焊膏',
					topCopper: '是 - 添加到顶铜',
					bottomCopper: '是 - 添加到底铜',
					default: '是 - 按照MMWPCB默认'
				}
			},
			dateCode: {
				title: '日期代码',
				description: '在PCB上添加生产时间',
				placeholder: '例如：在顶丝印层中以WWYY格式添加日期代码',
				values: {
					velenovaPrefer: '按照Velenova的偏好添加',
					customerRequired: '按照客户要求添加',
					updateDesignedDateCode: '更新设计的日期代码'
				}
			},
			dateCodeDescription: {
				title: '日期代码描述'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '我们可能会对此类特别选项增加额外费用，费用将在审核后确认。',
				values: {
					halfCut: {
						title: '半切 / 折叠孔',
						description:
							'经切割的PTH孔或通过孔，创建一个部分或半个孔形成孔筒的侧面开口。通常用于将一个PCB安装到另一个PCB上。'
					},
					impedanceControl: {
						title: '阻抗控制',
						description:
							'PCB中的导体承载各种信号，为提高信号传输速率，必须提高频率。然而，蚀刻、层厚和线宽等因素会导致阻抗变化，阻抗公差一般为±10%。如在文档中指定了阻抗要求但在订单中未选择，将视为忽视阻抗要求。'
					},
					allViasFilled: {
						title: '所有孔填充树脂并封盖',
						description: '如果您勾选此选项，所有孔将填充树脂，然后封盖并电镀覆层。'
					},
					viaInPad: {
						title: '通孔位于焊盘中',
						description: '如果您的设计中有通孔位于SMD焊盘中，请勾选此选项，我们将进行树脂填充，然后封盖并电镀覆层。'
					},
					hdi: {
						title: 'HDI（埋盲孔）',
						description: '盲孔连接外层与一个或多个内层，但未穿透整个板。埋孔连接两个或多个内层，但未连接到外层。'
					}
				}
			},
			finalInspectionReport: {
				title: '最终检查报告（免费）',
				description: '常规发货报告另附测试报告、尺寸检查报告',
				values: {
					defaultInspectionReport: '默认检查报告',
					microsectionInspectionReport: '微观截面检查报告',
					solderabilityInspectionReport: '可焊性检查报告',
					thermalStressInspectionReport: '热应力检查报告',
					impedanceTestReport: '阻抗测试报告',
					humidityIndicatorCards: '湿度指示卡'
				}
			},
			specialRequests: {
				title: '其他特殊要求',
				placeholder: '填写任何PCB详情，以使我们尽可能清楚地了解您的要求。'
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
						title: '整体交付',
						description: 'MMWPCB提供组件'
					},
					kitted: {
						title: '配件或委托',
						description: '客户提供组件'
					},
					combo: {
						title: '组合',
						description: '您提供部分组件，其余由我们处理'
					}
				}
			},
			boardType: {
				title: '板类型',
				description: '如果单个PCB数量超过20片或单个板的任一边小于50mm，建议选择面板。',
				disclaimer: '如果单个PCB数量超过20片或单个板的任一边小于50mm，建议选择面板。',
				values: {
					singlePieces: '单片',
					panelizedPcbs: '面板化PCB'
				}
			},
			side: {
				title: '组装面',
				description: '组件是仅在一侧安装还是两侧都安装？',
				values: {
					topSide: '顶面',
					bottomSide: '底面',
					bothSides: '双面'
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
					'由于组件的多样性，组装时通常需要关注许多事项，例如焊接前是否需要烘烤，焊接温度是否有特殊要求，耐腐蚀性、湿度等。我们的工程师会检查所有信息，但仍可能会有遗漏。因此，提前突出特殊要求会更好。'
			},
			sensitiveParts: {
				title: '敏感组件',
				description: '包含敏感组件/部件'
			},
			alternatesChina: {
				title: '中国制造替代品',
				description: '您接受中国制造的替代品/替代品吗？'
			},
			otherParameters: {
				title: '其他参数',
				description: '填写以获得准确的价格，或留空等待最终报价。'
			},
			uniqueParts: {
				title: '独特部件数量',
				description: 'BOM中组件的种类。',
				error: '独特部件不能少于0'
			},
			smdParts: {
				title: 'SMD部件数量',
				description: '每块板上的SMD总数（包括细间距和无引脚）',
				error: 'SMD部件不能少于0'
			},
			bgaParts: {
				title: 'BGA/QFP部件数量',
				description: '每块板上引脚数超过16的IC和引脚数超过10的SMD不规则部件数量。（SOP,QFP,QFN,BGA）',
				error: 'BGA部件不能少于0'
			},
			throughHoleParts: {
				title: '通孔部件数量',
				description: '每块板上的THT部件总数（DIP NO.）',
				error: '通孔部件不能少于0'
			},
			customizedServices: {
				title: '定制服务和高级选项',
				description: '以下选项，其成本不包括在网上报价中',
				values: {
					depanelBoards: {
						title: '分拆板以交付',
						description: '也称为子板发货，面板化的PCB在组装后分割为单片并单独包装发货。'
					},
					functionTest: {
						title: '功能测试',
						description:
							'功能测试，也称为FCT测试，是PCB制造的最后一步。基本上，功能测试确保PCB正常工作。主要是为了避免包括短路、开路、缺失组件或安装不当的部件等组装问题。如果需要，请说明您的功能测试方法和详细要求。'
					},
					conformalCoating: {
						title: '符合涂层',
						description:
							'符合涂层是应用于印刷电路板（PCB）的一种保护涂层，涂层因其符合PCB的轮廓而得名。符合涂层通常在电子电路上施加25-250μm，以保护免受湿气、灰尘、化学物质和温度极端的影响。'
					},
					firmwareLoading: {
						title: '固件加载',
						description:
							'在PCB行业中，固件加载通常指将先前编写的程序或固件加载到PCB上的芯片的过程。在PCB制造过程中，通常将不同类型的芯片组合在一起以实现特定功能。为了确保芯片正常工作，需要将相应的固件加载到它们上。'
					},
					pressFit: {
						title: '压接组装',
						description:
							'压接组装是一种电子制造技术，用来在电路板和组件之间建立机械和电气连接，而无需焊接。它涉及将连接器引脚插入电路板上镀金的通孔中，并施加一定的力以建立连接。此技术消除了传统焊接过程中发生的一些问题，如断裂或冷焊引脚，从而提高了连接组件的可靠性和耐用性。'
					},
					boxBuild: {
						title: '整体装配',
						description:
							'也称为系统集成，是从设计和制造外壳，安装PCBA，安装电缆和电缆束装配，甚至安装电气和/或气动系统的全过程服务。'
					},
					cableWireHarness: {
						title: '电缆束装配',
						description:
							'电缆组件是一组由多种材料覆盖的电缆或电线。电缆束是单根电缆。我们可以提供标准和简单的电缆束装配，或者在最短的交货时间内提供定制电缆束和电缆装配。'
					},
					packageBox: {
						title: '包装箱',
						description: '为您的产品定制专用包装。'
					}
				}
			},
			xrayTest: {
				title: 'X射线测试数量',
				description:
					'在PCB制造中，X射线测试通常是指X射线检查或X射线探测。这是一种用于检查电子产品中焊接点连接和元件放置质量的无损检测技术。',
				error: 'X射线测试数量应大于0'
			},
			detailedInformation: {
				title: '装配的详细信息',
				placeholder: '请填写有关PCB装配、其他外壳装配、电缆焊接、熔丝线、铆钉等的详细技术信息。'
			}
		},

		stencil: {
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
			type: {
				title: '模板类型',
				disclaimer: '允许将多个PCB组合在一个SMD模板上。',
				values: {
					framework: '框架',
					nonFramework: '非框架'
				}
			},
			multiLevel: {
				title: '多级/步骤模板',
				description: '部分STEP-UP模板和部分STEP-DOWN模板。'
			},
			side: {
				title: '模板面',
				description: '对于顶部+底部（在单个模板上），模板尺寸应至少是PCB尺寸的两倍。',
				values: {
					top: '顶部',
					bottom: '底部',
					topBottomSingle: '顶部+底部（在单个模板上）',
					topBottomSeparate: '顶部和底部（在单独模板上）'
				}
			},
			size: {
				title: '尺寸（mm）',
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
				pieces: '片',
				error: '数量应大于0'
			},
			thickness: {
				title: '厚度',
				description: '模板厚度根据组件尺寸选择。'
			},
			existingFiducials: {
				title: '现有基准点',
				description: '基准点“半激光”，始终位于PCB侧（底部）。',
				values: {
					halfLasered: '半激光',
					laseredThrough: '贯穿激光'
				}
			},
			electroPolishing: {
				title: '电抛光',
				description: '电抛光，也称为电化学表面处理或电化学去毛刺，能获得优化的表面质量，适用于中型系列产品。'
			},
			specialRequests: {
				title: '其他特殊要求',
				description: '我们通常会降低IC的开孔，所以如果不想更改开孔，请在下单时注明。',
				placeholder:
					'填写任何模板详情，以使我们尽可能清楚地了解您的要求。例如多级/步骤模板，请在Gerber中指定步骤上/下的区域和厚度。'
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
					mildSteel: '普通钢',
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
					mildSteel1018: '普通钢 1018',
					mildSteel1045: '普通钢 1045',
					mildSteelA36: '普通钢 A36',
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
					standard: '标准（铣削后）',
					brushed: '刷光',
					beadBlast: '珠光喷砂',
					sprayPainting: '喷漆',
					powderCoat: '粉末喷涂',
					detailSanding: '细部打磨',
					others: '其他'
				},
				values: {
					standard: '标准（铣削后）',
					brushed: '刷光',
					beadBlast: '珠光喷砂',
					sprayPaintingMatt: '哑光喷漆',
					sprayPaintingHighGloss: '高光喷漆',
					powderCoatMatt: '哑光粉末喷涂',
					powderCoatHighGloss: '高光粉末喷涂',
					sanding1000: '打磨1000',
					others: '其他'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细小的磨料砂粒摩擦产品表面，以产生扩散的、非线性的纹理效果。将不同磨料的粒度粘附到背纸或板的背面，磨料粒度可以根据大小区分：颗粒越大，磨料越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意您在该屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的部件是否有任何内外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有部件在此处生产和组装。 ',
				question: '您的部件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您零件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将根据ISO 2768-1进行控制。对于其他更严格的公差，需要提供技术图纸以指明关键尺寸。',
				noTolerance: '不需要更严格的公差'
			},
			surfaceRoughness: {
				title: '表面粗糙度',
				description: '表面粗糙度将控制在250微英寸/6.3微米 Ra，除非您有其他表面粗糙度要求。'
			},
			partMarking: {
				title: '零件标记',
				description: '请在CAD文件(DWG或DXF)中清晰标记丝印或激光雕刻内容，同时需要图形文件(Ai或SVG)。'
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
					shipAssembly: '发货组装'
				}
			},
			finishedAppearance: {
				title: '成品外观',
				values: {
					standard: {
						title: '标准',
						description: '正常加工痕迹或生产过程中造成的划痕，或表面处理后留下的微妙痕迹。'
					},
					premium: {
						title: '高档',
						description: '外观要求更高，表面干净光滑，无明显缺陷。（不包括固有阳极氧化架印痕）。发货前将发送照片确认。'
					}
				}
			},
			inspection: {
				title: '检查',
				description: '除非您需要，否则检查报告将不会与您的零件一同发送。',
				values: {
					standardInspection: {
						title: '标准检查（无报告）',
						description: ['无需额外费用', 'PCBWay将依据客户提供的图纸进行尺寸和表面特征检查。']
					},
					standardInspectionFormalReport: {
						title: '标准检查附正式报告',
						description: ['需支付额外费用', '需要2D技术图纸。']
					},
					cmmInspectionFormalReport: {
						title: 'CMM检查附正式报告',
						description: ['需支付额外费用', '需要2D技术图纸。']
					},
					sourceMaterialCertification: {
						title: '源材料认证',
						description: ['需支付额外费用', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关必需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供海关清关的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如没有匹配项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税收，适用的关税和税率会根据货物描述和不同国家的进口规定而有所不同。',
					body4: '2. 商品的产品描述不正确或不清晰可能会被海关扣押。客户将对因提供不正确信息而导致的海关罚款负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
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
				title: '其他特别要求',
				placeholder: '在此填入任何关于生产、包装或运输的要求。'
			}
		},

		sheetMetal: {
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
					aluminum: '铝',
					stainlessSteel: '不锈钢',
					mildSteel: '普通钢',
					copper: '铜',
					carbonFiber: '碳纤维'
				}
			},
			materialType: {
				title: '材料类型',
				values: {
					aluminum5052: '铝 5052',
					aluminum6061: '铝 6061',
					stainlessSteel201: '不锈钢 201',
					stainlessSteel303: '不锈钢 303',
					stainlessSteel304: '不锈钢 304',
					stainlessSteel316: '不锈钢 316',
					mildSteel1018: '普通钢 1018',
					copper101: '铜 101',
					copperC110: '铜 C110',
					copper260: '铜 260',
					carbonFiberPlate: '碳纤维板'
				}
			},
			color: {
				title: '颜色'
			},
			surfaceFinish: {
				title: '表面处理',
				sections: {
					standard: '标准（铣削后）',
					brushed: '刷光',
					beadBlast: '珠光喷砂',
					sprayPainting: '喷漆',
					powderCoat: '粉末喷涂',
					detailSanding: '细部打磨',
					others: '其他'
				},
				values: {
					standard: '标准（铣削后）',
					brushed: '刷光',
					beadBlast: '珠光喷砂',
					sprayPaintingMatt: '哑光喷漆',
					sprayPaintingHighGloss: '高光喷漆',
					powderCoatMatt: '哑光粉末喷涂',
					powderCoatHighGloss: '高光粉末喷涂',
					sanding1000: '打磨1000',
					others: '其他'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细小的磨料砂粒摩擦产品表面，以产生扩散的、非线性的纹理效果。将不同磨料的粒度粘附到背纸或板的背面，磨料粒度可以根据大小区分：颗粒越大，磨料越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意您在该屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的部件是否有任何内外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有部件在此处生产和组装。',
				question: '您的部件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您零件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将根据ISO 2768-1进行控制。对于其他更严格的公差，需要提供技术图纸以指明关键尺寸。',
				noTolerance: '不需要更严格的公差'
			},
			wielding: {
				title: '焊接'
			},
			partMarking: {
				title: '零件标记',
				description: '请在CAD文件(DWG或DXF)中清晰标记丝印或激光雕刻内容，同时需要图形文件(Ai或SVG)。'
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
					shipAssembly: '发货组装'
				}
			},
			finishedAppearance: {
				title: '成品外观',
				values: {
					standard: {
						title: '标准',
						description: '正常加工痕迹或生产过程中造成的划痕，或表面处理后留下的微妙痕迹。'
					},
					premium: {
						title: '高档',
						description: '外观要求更高，表面干净光滑，无明显缺陷。（不包括固有阳极氧化架印痕）。发货前将发送照片确认。'
					}
				}
			},
			inspection: {
				title: '检查',
				description: '除非您需要，否则检查报告将不会与您的零件一同发送。',
				values: {
					standardInspection: {
						title: '标准检查（无报告）',
						description: ['无需额外费用', 'PCBWay将依据客户提供的图纸进行尺寸和表面特征检查。']
					},
					standardInspectionFormalReport: {
						title: '标准检查附正式报告',
						description: ['需支付额外费用', '需要2D技术图纸。']
					},
					cmmInspectionFormalReport: {
						title: 'CMM检查附正式报告',
						description: ['需支付额外费用', '需要2D技术图纸。']
					},
					sourceMaterialCertification: {
						title: '源材料认证',
						description: ['需支付额外费用', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关必需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供海关清关的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如没有匹配项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税收，适用的关税和税率会根据货物描述和不同国家的进口规定而有所不同。',
					body4: '2. 商品的产品描述不正确或不清晰可能会被海关扣押。客户将对因提供不正确信息而导致的海关罚款负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
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
				title: '其他特别要求',
				placeholder: '在此填入任何关于生产、包装或运输的要求。'
			}
		},

		threePrinting: {
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
					powderCoat: '粉末喷涂',
					detailSanding: '细部打磨',
					dying: '染色'
				},
				values: {
					sprayPaintingMatt: '哑光喷漆',
					sprayPaintingHighGloss: '高光喷漆',
					sanding1000: '打磨1000',
					dying: '染色'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细小的磨料砂粒摩擦产品表面，以产生扩散的、非线性的纹理效果。将不同磨料的粒度粘附到背纸或板的背面，磨料粒度可以根据大小区分：颗粒越大，磨料越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意您在该屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请说明您的部件是否有任何内外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有部件在此处生产和组装。',
				question: '您的部件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您零件中的标准嵌件'
			},
			partMarking: {
				title: '零件标记',
				description: '请在CAD文件(DWG或DXF)中清晰标记丝印或激光雕刻内容，同时需要图形文件(Ai或SVG)。'
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
					shipAssembly: '发货组装'
				}
			},
			printingRisk: {
				title: '打印风险',
				description: '该参数默认勾选。您可以取消勾选，当零件有特定打印风险时我们将通过电子邮件联系您。'
			},
			wallThicknessRisk: {
				title: '壁厚风险承受',
				description: '客户知晓设计的薄壁不符合壁厚标准，但需要按原样打印并承担所有风险。'
			},
			printedThreadsRisk: {
				title: '非标准打印螺纹风险承受',
				description: '客户知晓设计的螺纹不符合螺纹打印标准，但需要按原样打印并承担所有风险。'
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关必需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供海关清关的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如没有匹配项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税收，适用的关税和税率会根据货物描述和不同国家的进口规定而有所不同。',
					body4: '2. 商品的产品描述不正确或不清晰可能会被海关扣押。客户将对因提供不正确信息而导致的海关罚款负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
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
				title: '其他特别要求',
				placeholder: '在此填入任何关于生产、包装或运输的要求。'
			}
		},
		injectionMolding: {
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
				title: '首批数量',
				error: '数量应大于0'
			},
			minExpectedVolume: {
				title: '最低预期年产量'
			},
			maxExpectedVolume: {
				title: '最高预期年产量'
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
				title: 'SPI处理'
			},
			toolRequirements: {
				title: '模具要求',
				description: '请提供模具要求，例如表面要求、模具强度、机器尺寸、腔体数量和模具设计要求等。'
			},
			molds: {
				title: '模具',
				description:
					'我们将保留模具2年。您可以在模具使用期限内继续订购零件。模具失效后将默认回收。如果您需要将模具寄给您，请联系营业代表处理运输事宜。',
				values: {
					keepMoldsFactory: '在工厂保留模具',
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
						'打磨是使用细小的磨料砂粒摩擦产品表面，以产生扩散的、非线性的纹理效果。将不同磨料粒度粘附到背纸上或板的背面，并根据大小区分磨料粒度：颗粒越大，磨料越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意您在该屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请指定您的部件是否有任何内外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有部件在此处生产和组装。',
				question: '您的部件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您零件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将根据ISO 2768-1进行控制。对于其他更严格的公差，需要提供技术图纸以指明关键尺寸。',
				noTolerance: '不需要更严格的公差'
			},
			partMarking: {
				title: '零件标记',
				description: '请在CAD文件（DWG或DXF）中清晰标记丝印或激光雕刻内容，同时需要图形文件（Ai或SVG）。'
			},
			silkScreen: {
				title: '丝印'
			},
			laserEngraving: {
				title: '激光雕刻'
			},
			partsAssembly: {
				title: '零件组装',
				description: '请指定组装要求。如果您选择不需要组装，PCBWay将不承担任何组装风险。',
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
						description: '正常加工痕迹或生产过程中造成的划痕，或表面处理后留下的微妙痕迹。'
					},
					premium: {
						title: '高档',
						description: '外观要求更高，表面干净光滑，无明显缺陷。（不包括固有阳极氧化架印痕）。发货前将发送照片确认。'
					}
				}
			},
			inspection: {
				title: '检查',
				description: '除非您需要，否则检查报告将不会与您的零件一同发送。',
				values: {
					standardInspection: {
						title: '标准检查（无报告）',
						description: ['无需额外费用', 'PCBWay将依据客户提供的图纸进行尺寸和表面特征检查。']
					},
					sourceMaterialCertification: {
						title: '源材料认证',
						description: ['需支付额外费用', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关必需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供海关清关的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如没有匹配项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税收，适用的关税和税率会根据货物描述和不同国家的进口规定而有所不同。',
					body4: '2. 商品的产品描述不正确或不清晰可能会被海关扣押。客户将对因提供不正确信息而导致的海关罚款负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
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
				title: '其他特别要求',
				placeholder: '在此填入任何关于生产、包装或运输的要求。'
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
					beadBlast: '珠光喷砂',
					sprayPainting: '喷漆',
					detailSanding: '细部打磨'
				},
				values: {
					beadBlast: '珠光喷砂',
					sprayPaintingMatt: '哑光喷漆',
					sprayPaintingHighGloss: '高光喷漆',
					sanding1000: '打磨1000'
				},
				surfaceTreatment: {
					title: '表面处理介绍',
					description:
						'打磨是使用细小的磨料砂粒摩擦产品表面，以产生扩散的、非线性的纹理效果。将不同磨料粒度粘附到背纸上或板的背面，并根据大小区分磨料粒度：颗粒越大，磨料越细，因此表面效果越好。'
				}
			},
			surfaceFinishColor: {
				title: '表面处理颜色'
			},
			technicalDrawing: {
				title: '技术图纸',
				description:
					'请注意您在该屏幕上选择的3D文件和零件规格（例如，表面处理）将优先于您的技术图纸。请确保您的技术图纸是最新的。',
				uploadTechnicalDrawing: '上传技术图纸'
			},
			threadsTappedHoles: {
				title: '螺纹和攻丝孔',
				description:
					'请指定您的部件是否有任何内外螺纹。如果是非标准螺纹，PCBWay将不承担任何组装风险，除非所有部件在此处生产和组装。',
				question: '您的部件需要攻丝吗？'
			},
			inserts: {
				title: '嵌件',
				description: '请指定您零件中的标准嵌件'
			},
			tolerance: {
				title: '公差',
				description: '公差将根据ISO 2768-1进行控制。对于其他更严格的公差，需要提供技术图纸以指明关键尺寸。',
				noTolerance: '不需要更严格的公差'
			},
			partMarking: {
				title: '零件标记',
				description: '请在CAD文件（DWG或DXF）中清晰标记丝印或激光雕刻内容，同时需要图形文件（Ai或SVG）。'
			},
			silkScreen: {
				title: '丝印'
			},
			laserEngraving: {
				title: '激光雕刻'
			},
			partsAssembly: {
				title: '零件组装',
				description: '请指定组装要求。如果您选择不需要组装，PCBWay将不承担任何组装风险。',
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
						description: '正常加工痕迹或生产过程中造成的划痕，或表面处理后留下的微妙痕迹。'
					},
					premium: {
						title: '高档',
						description: '外观要求更高，表面干净光滑，无明显缺陷。（不包括固有阳极氧化架印痕）。发货前将发送照片确认。'
					}
				}
			},
			inspection: {
				title: '检查',
				description: '除非您需要，否则检查报告将不会与您的零件一同发送。',
				values: {
					standardInspection: {
						title: '标准检查（无报告）',
						description: ['无需额外费用', 'PCBWay将依据客户提供的图纸进行尺寸和表面特征检查。']
					},
					sourceMaterialCertification: {
						title: '源材料认证',
						description: ['需支付额外费用', '需要2D技术图纸。']
					}
				}
			},
			productDescription: {
				title: '产品描述',
				description: '',
				descriptionDetail: {
					title1: '海关清关必需的产品描述：',
					body1: '1. 遵守国际贸易原则，提供海关清关的产品描述。',
					body2: '2. 请根据产品的实际用途选择正确的产品描述。如没有匹配项，请选择其他。',
					title2: '请注意：',
					body3: '1. 可能会有进口关税和税收，适用的关税和税率会根据货物描述和不同国家的进口规定而有所不同。',
					body4: '2. 商品的产品描述不正确或不清晰可能会被海关扣押。客户将对因提供不正确信息而导致的海关罚款负责。',
					body5: '3. PCBWay不会更改客户提供的产品描述，请仔细选择。'
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
				title: '其他特别要求',
				placeholder: '在此填入任何关于生产、包装或运输的要求。'
			}
		}
	},

	shipping: {
		shippingEstimate: '运费估算',
		shippingInfo: '运输信息',
		selectShippingMethod: '选择运输方式',
		shippingTo: '运送到',
		selectCountry: '选择国家',
		shippingMethod: '运输方式',
		price: '价格',
		deliveryTime: '交付时间',
		restriction: '限制',
		country: '国家',
		method: '方式',
		weight: '重量',
		shippingCost: '运费',
		updatingShipping: '正在更新运输方式',
		updateShippingError: '更新运输信息失败',
		updateShippingSuccess: '运输信息更新成功'
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
			noProducts: '购物车中没有产品',
			shippingError: '未提供运输信息',
			deliveryError: '未提供送货地址',
			filesNotUploaded: '未上传产品文件',
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
				description: '查看审核消息以获取更多细节',
				button: '再次提交审核'
			},
			approved: {
				title: '您的订单审核已被批准',
				description: '查看更新价格并继续付款',
				button: '继续付款'
			},
			confirmed: {
				title: '付款成功！',
				description: '您的订单已确认并正在处理'
			},
			fabrication: {
				title: '生产进行中',
				description: '查看每个产品的进度状态'
			},
			delivery: {
				title: '配送进行中',
				description: '您的订单正在运输中',
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
			buildTime: '生产时间',
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
				title: '生产',
				fabricationProgress: '生产进度',
				notStarted: '生产尚未开始',
				completed: '生产已完成'
			}
		},

		reviewMessages: {
			title: '审核消息',
			failedToSend: '发送消息失败',
			noMessages: '暂无消息',
			conversationClosed: '此对话已关闭'
		},

		orderSummary: {
			title: '订单摘要',
			itemsCost: '商品费用',
			shippingCost: '运费',
			discount: '折扣',
			taxes: '税费',
			orderTotal: '订单总计',
			estDeliveryDate: '预计交货日期',
			estDeliveryDateDesc:
				'预计交货日期是根据您订单中生产时间最长的产品计算的。请注意，此日期仅供参考。如果您的订单需要确认，交货日期可能会延长。',
			weight: '重量',
			weightDesc:
				'此处重量是根据毛重和体积重量较大的值计算得出的，估算供参考。如果实际重量与估算差异较大，运费可能会相应调整。',
			submitOrderForReview: '提交订单审核',
			saveOrder: '保存订单'
		},

		payment: {
			title: '付款详情',
			transactionId: '交易编号',
			paymentTime: '付款时间',
			paymentMethod: '付款方式',
			totalAmount: '总金额',
			failedToGenerateToken: '生成付款令牌失败',
			failedToSubmit: '提交付款失败',
			checkout: '结账',
			amountToBePaid: '应支付金额',
			paymentSuccess: '付款成功',
			paymentTotal: '付款总额',
			print: '打印',
			payNow: '立即付款',
			cancelPayment: '取消付款'
		},

		removeProduct: {
			modalTitle: '您确定要移除此产品吗？',
			modalTitleAll: '您确定要移除所有产品吗？',
			modalBody: '此操作无法撤消',
			removingProduct: '正在移除产品',
			removingProductAll: '正在移除所有产品',
			removeProductError: '移除产品失败',
			removeProductAllError: '移除所有产品失败',
			removeProductSuccess: '产品移除成功',
			removeProductAllSuccess: '所有产品移除成功'
		},

		removeOrder: {
			title: '移除订单',
			description: '此操作将永久删除订单及其相关信息。无法撤消，请谨慎操作。',
			modalTitle: '您确定要移除此订单吗？',
			modalBody: '此操作无法撤消',
			removingOrder: '正在移除订单',
			removeOrderError: '移除订单失败',
			removeOrderSuccess: '订单移除成功'
		},

		trackDelivery: '跟踪配送'
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
		FABRICATION: '生产中',
		DELIVERY: '运输与交付',
		COMPLETED: '订单完成',
		CANCELLED: '订单已取消',
		REFUNDED: '已退款'
	},

	support: {
		title: '支持',
		sections: {
			myOrders: {
				title: '我的订单',
				subsections: {
					ordering: {
						title: '下订单',
						questions: [
							{
								title: '如何下 PCB 和 PCB 组装订单？',
								contents: [
									[
										'从',
										'MMWPCB.com',
										'购买 PCB 非常简单方便。只需几个步骤，您就可以享受实惠而高质量的 PCB 原型服务。'
									],
									['"视频":', '如何在 PCBWay 上下在线订单？一分钟的视频指南。'],
									['步骤 "1": 点击您想要的服务类型，例如 PCB。'],
									['选择并填写规格，然后单击"计算"按钮以继续。']
								]
							},
							{
								title: '如何下 PCB 组装订单（询盘）？',
								contents: [
									['另见更新文章（2022-02-25）：', '如何上传 PCB 组装（PCBA）询盘'],
									['有三种方式可以下 PCB 组装订单。'],
									['1. 与 PCB 订单一起下 PCB 组装订单。'],
									[
										'您可以点击 ',
										'PCB 即时报价',
										'导航栏以进入，下订单后，选择组装服务并填写您的组装服务参数。单击计算以选择价格，添加到购物车并上传文件。'
									]
								]
							},
							{
								title: '如何下 CNC 订单？',
								contents: [
									[
										'除了 PCB 制造服务，PCBWay 还提供 CNC 加工、3D 打印、钣金制造、注塑和真空铸造等服务。当您访问 PCBWay 网站并点击“CNC/3D 打印”部分时，您可以看到这里提供的五个报价页面。这五项服务的订购过程基本相同，除了某些选定参数。现在开始介绍 CNC 加工的订购过程！'
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
									['在"待付款"列表下，点击产品标题或"查看详情"以调出产品详情信息框。'],
									['在此框中，您将找到预计完成时间，如下图所示。']
								]
							},
							{
								title: '订单合并、运输和支付政策',
								contents: [
									['一个付款，一个发货！'],
									['1. 合并订单的目的在于节省运费。如果您的 PCB 日程不紧，建议合并订单一起发货。'],
									[
										'2. 通过将所有这些订单合并为一组并立即支付，您确认所有这些订单将于 [xx-xx-xx] 一起发货。这是我们可以在此订单组中完成最后一个 PCB 订单的日期，我们可能需要一些额外的时间让快递公司（周日不提供服务）来取走您的包裹。'
									]
								]
							},
							{
								title: '快递订单何时生产？',
								contents: [
									[
										'自从 MMWPCB 启动 24 小时快递服务以来，它为常有紧急 PCB 项目的客户带来了很多好处。但它也带来了一些投诉，因为客户的订单延迟。由于紧急订单的特殊性质，这些客户的投诉显得尤为严重。数据显示，大多数“延迟”都是由于对 24 小时快递的误解造成的。'
									],
									[
										'1. 首先定义 MMWPCB 的 24 小时快递服务。时间跨度是从生产开始到生产完成。值得注意的是，此时间不从您付款的时刻开始计算。'
									],
									['2. 付款应在 18:00（GMT+8）之前完成，否则生产安排将推迟一天。']
								]
							}
						]
					},
					salesService: {
						title: '销售服务',
						questions: [
							{
								title: '我可以更换销售代表吗？',
								contents: [
									['我们的每位销售代表都经过专业培训。如有不足之处，希望您能提供建议和修改。'],
									['如果您对销售代表不满意，请将您的问题发送至 service@mmwpcb.com 请求更换。']
								]
							},
							{
								title: '如何找到我的销售代表以解决 PCB 或 PCBA 问题？',
								contents: [
									['如果您有任何问题，请联系您的销售代表或使用在线聊天。您可以通过以下“方式”找到他们的联系信息：'],
									['1. 在您主页的右上角或订单编号后，如下图红框所示；'],
									['2. 在您的购物车或订单列表中；']
								]
							},
							{
								title: '如果销售代表或售后没人回应，我该怎么办？',
								contents: [
									['1. 可能是反垃圾邮件系统发挥作用，导致邮件被阻止或发送到垃圾邮件中。请主动发送跟进邮件。'],
									['2. 如果在合理的时间内未得到回应，且您对订单有疑问，您可以：'],
									['a. 联系 service@mmwpcb.com 或 feedback@mmwpcb.com 寻求帮助。'],
									['b. 发起争议']
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
								title: '我如何在 PCBWay 上注册？',
								contents: [
									['1. 点击主页或 PCBWay 页面右上角的加入按钮'],
									['2. 输入您的电子邮件地址并设置和确认您的登录密码，然后开始购物！'],
									['"注意": 请确保输入正确的电子邮件地址，我们的系统目前只识别英文字符。']
								]
							},
							{
								title: '我的账户无法使用，我该怎么办？',
								contents: [
									['您的账户无法使用有很多原因，例如：'],
									['1. 自行停用。在这种情况下，我们建议您注册一个新账户或联系服务/销售代表。'],
									['2. 因违反交易规则而停用']
								]
							},
							{
								title: '我可以成为 mmwpcb 的分销商吗？',
								contents: [['您可以访问您提交的联系信息，', '成为我们的分销商', '我们会与您联系进行合作。']]
							}
						]
					},
					accountSettings: {
						title: '账户设置',
						questions: [
							{
								title: '账户设置',
								contents: [['我如何更改我的电子邮件地址？'], ['"注意": 我们不建议您频繁更改电子邮件地址。']]
							},
							{
								title: '如何更改我的电子邮件地址',
								contents: [
									[
										'客户的旧电子邮件不正确，或未收到验证电子邮件。可以通过"申请更改电子邮件"表单提交更改请求。客户需要填写新电子邮件地址并提供更改原因。'
									],
									['以下是具体"步骤":"'],
									['步骤 "1": 账户设置->更改电子邮件']
								]
							},
							{
								title: '我如何将我的电子邮件地址用于新 PCBWay 账户？',
								contents: [
									['如果您有多个 PCBWay 账户并希望将现有电子邮件地址链接到新账户，则需要：'],
									['1. 首先更改您现有/旧账户的电子邮件地址。此时，每个 PCBWay 账户只能链接到一个唯一的电子邮件地址。'],
									['2. 成功更新现有账户的地址后，您可以将新账户链接到其他电子邮件地址。']
								]
							}
						]
					},
					mmwpcbRewards: {
						title: 'MMWPCB 奖励',
						questions: [
							{
								title: '我如何使用我的奖励积分？',
								contents: [
									[
										'MMWPCB 会员俱乐部有 6 个等级——V0、V1、V2、V3、V4、V5。您所处的等级决定了您可以享有的权益和特权。所有买家一旦符合最低要求，系统将自动分配一个会员等级（见下表）。'
									],
									['优惠细节'],
									['权益 "详情":', 'V0 会员 0% 折扣', 'V1 会员 1% 折扣', 'V2 会员 2% 折扣', 'V3 会员 3% 折扣']
								]
							},
							{
								title: 'MMWPCB 会员俱乐部的特权是什么？',
								contents: [
									[
										'MMWPCB 会员俱乐部有 6 个等级——V0、V1、V2、V3、V4、V5。您所处的等级决定了您可以享有的权益和特权。所有买家一旦符合最低要求，系统将自动分配一个会员等级（见下表）。'
									],
									['优惠细节'],
									['权益 "详情":', 'V0 会员 0% 折扣', 'V1 会员 1% 折扣', 'V2 会员 2% 折扣', 'V3 会员 3% 折扣']
								]
							},
							{
								title: '我的奖励积分未添加到我的账户。我该怎么办？',
								contents: [
									[
										'有关 PCBWay 积分和豆豆的详细介绍以及如何获得它们，请点击',
										'关于 PCBWay 积分和豆豆的详细介绍',
										'了解更多。'
									],
									['如果积分尚未添加到您的账户，可能是由于以下 "原因":'],
									['1. 订单尚未完成。请检查您的订单状态，因为下单的积分仅在订单完成后授予。']
								]
							}
						]
					}
				}
			}
		}
	}
};
