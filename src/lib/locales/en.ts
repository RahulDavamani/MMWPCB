export const en = {
	common: {
		login: 'Login',
		or: 'Or',
		yes: 'Yes',
		no: 'No',
		none: 'None',
		color: {
			white: 'White',
			black: 'Black',
			green: 'Green',
			red: 'Red',
			blue: 'Blue',
			yellow: 'Yellow',
			purple: 'Purple',
			matteBlack: 'Matte Black',
			matteGreen: 'Matte Green'
		},
		typeHere: 'Type here...',
		select: 'Select',
		warning: 'Warning',
		error: 'Error',
		retry: 'Retry',
		moreDetails: 'More Details',
		home: 'Home',
		add: 'Add',
		edit: 'Edit',
		save: 'Save',
		cancel: 'Cancel',
		close: 'Close',
		remove: 'Remove',
		reset: 'Reset',
		upload: 'Upload'
	},

	user: {
		name: 'Name',
		firstName: 'First Name',
		lastName: 'Last Name',
		email: 'Email',
		phone: 'Phone Number',
		password: 'Password',
		profilePicture: 'Profile Picture'
	},

	navbar: {
		instantQuote: 'Instant Quote',
		products: 'Products & Capabilities',
		whyUs: 'Why Us?',
		support: 'Support',
		login: 'Login',
		i18n: {
			language: 'Language',
			currency: 'Currency'
		},
		cart: {
			myCart: 'My Cart',
			viewCart: 'View Cart',
			proceedToCheckout: 'Proceed to Checkout',
			loginViewCart: 'Login to view your cart',
			cartEmpty: 'Your cart is empty',
			orderNow: 'Order Now',
			subTotal: 'Sub-Total'
		},
		user: {
			orders: 'Orders',
			profile: 'Profile',
			settings: 'Settings',
			logout: 'Logout'
		}
	},

	login: {
		pageTitle: 'Login',
		signIn: 'Sign In',
		rememberMe: 'Remember Me',
		forgotPassword: 'Forgot Password?',
		dontHaveAccount: "Don't have an account?",
		signInGoogle: 'Sign In with Google'
	},

	register: {
		pageTitle: 'Register',
		signUp: 'Sign Up',
		confirmPassword: 'Confirm Password',
		iAgree: 'I agree to sign up',
		alreadyHaveAccount: 'Already have an account?',
		signInGoogle: 'Sign In with Google'
	},

	profile: {
		pageTitle: 'Profile',
		myProfile: 'My Profile',
		personalInformation: {
			title: 'Personal Information',
			editProfile: 'Edit Profile',
			savingProfile: 'Saving Profile',
			saveProfileSuccess: 'Profile saved successfully',
			saveProfileError: 'Failed to save profile'
		},
		addresses: {
			title: 'Delivery Addresses',
			newAddress: 'New Address',
			noAddressFound: 'No address found',
			removingAddress: 'Removing Address',
			removeAddressSuccess: 'Address removed successfully',
			removeAddressError: 'Failed to remove address'
		},
		upsertAddress: {
			addAddress: 'Add Delivery Address',
			updateAddress: 'Update Delivery Address',
			nameError: 'Please enter your name',
			phoneError: 'Please enter your phone number',
			addressLine1: 'Address Line 1',
			addressLine1Error: 'Please enter your address',
			addressLine2: 'Address Line 2',
			city: 'City',
			cityError: 'Please enter your city',
			state: 'State',
			stateError: 'Please enter your state',
			country: 'Country',
			countryError: 'Please enter your country',
			postalCode: 'Postal Code',
			postalCodeError: 'Please enter your postal code',
			savingAddress: 'Saving Address',
			saveAddressSuccess: 'Address saved successfully',
			saveAddressError: 'Failed to save address',
			addingAddress: 'Adding Address',
			addAddressSuccess: 'Address added successfully',
			addAddressError: 'Failed to add address'
		}
	},

	home: {
		pageTitle: 'Home',
		instantQuote: 'Instant Quote',
		quoteNow: 'Quote Now'
	},

	products: {
		standardPcb: 'Standard PCB',
		advancedPcb: 'Advanced PCB',
		flexiblePcb: 'FPC/Rigid-Flex',
		assembly: 'Assembly',
		stencil: 'SMD-Stencil'
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
			title: 'Pricing and Build Time',
			weight: 'Weight',
			buildTime: 'Build Time',
			chargeDetails: 'Charge Details',
			total: 'Total',
			saveProduct: 'Save Product',
			saveToCart: 'Save to Cart',
			addToOrder: 'Add to Order'
		},

		standardPcb: {
			id: {
				title: 'Product ID'
			},
			createdAt: {
				title: 'Created At'
			},
			updatedAt: {
				title: 'Updated At'
			},
			name: {
				title: 'Product Name',
				description: 'Please enter a name for your product',
				error: 'Product name is required'
			},
			fileName: {
				title: 'File Name'
			},
			buildTime: {
				title: 'Build Time'
			},
			weight: {
				title: 'Weight'
			},
			initialPrice: {
				title: 'Initial Price'
			},
			finalPrice: {
				title: 'Final Price'
			},
			boardType: {
				title: 'Board Types',
				description:
					'PCBs will be shipped in single pieces or in panel. For bulk assembly orders (quantity greater than 30), we recommend shipping in panel, which will improve the assembly efficiency and reduce the cost.',
				url: '',
				imgSrc: '',
				values: {
					singlePieces: 'Single Pieces',
					panelByCustomer: 'Panel by Customer',
					panelByVelenova: 'Panel by Velenova'
				}
			},
			xoutAllowance: {
				title: 'X-out Allowance in Panel',
				description:
					'Bad PCBs may exist in the panel, the quotation will increase by about 30% if X-out Allowance is not accepted.',
				url: '',
				imgSrc: '',
				values: {
					accept: 'Accept',
					decline: 'Decline'
				}
			},
			routeProcess: {
				title: 'Route Process',
				description: 'In the panel, the PCBs are connected as shown in the following diagram:',
				imgSrc: '',
				values: {
					velenovaPrefer: 'Panel as Velenova prefer',
					vScoring: 'Panel as V-Scoring',
					tabRoute: 'Panel as Tab Route',
					vScoringTabRoute: 'Both V-Scoring and Tab Route'
				}
			},
			breakAwayRail: {
				title: 'Break-away rail',
				description:
					'Break-away rails are long strip blank plate edges set up to leave out the track transmission space during assembly and place the mark point in the panel. PCBs are transmitted through the guide rail on the assembly production line, therefore, a pair of edges that forbid placing components must be left as the transmission edge. The width of the breakaway rail is generally about 5-8mm.',
				imgSrc: ''
			},
			panelRequirements: {
				title: 'Panel Requirements',
				disclaimer: '(e.g. Panel in 2*3, size of the break-away rail, total 5 panels=total 30 individual boards)'
			},
			differentDesign: {
				title: 'Different Design in Panel',
				description:
					'It means there are different designs in your files separated by v-cuts, stamp holes, milling slots or others. We will charge additional panel cost if there are different kinds of PCB designs in one Gerber file.',
				error: 'Different design should be greater than 0',
				imgSrc: ''
			},
			size: {
				title: 'Size (single)',
				description:
					'The board size refers to the length and width of the board ordered by the customer. If it is a circular board, the length and width are the diameter of the circle; If it is a board with irregular shape, the length and width are measured according to the largest shape range.',
				error: 'Length and width should be greater than 0',
				url: ''
			},
			length: {
				title: 'Length'
			},
			width: {
				title: 'Width'
			},
			quantity: {
				title: 'Quantity (single)',
				description:
					'Please choose the number of single pieces you need. For standard PCB, the starting quantity is 5 pieces.',
				error: 'Quantity should be greater than 0',
				url: '',
				placeholder: 'Quantity',
				pieces: 'Pieces'
			},
			layers: {
				title: 'Layers',
				description:
					'The number of copper layers in the board. Velenova can currently produce up to 60 layers, if you need more than 14 layers, please select the advanced PCB page for valuation.',
				url: '',
				imgSrc: '',
				layer: 'Layer',
				layers: 'Layers'
			},
			copperLayer: {
				title: 'Copper Layer',
				description:
					'When ordering 1-layer PCB, please specify whether the circuit layer is on top, bottom, or none. Please be sure to select the correct parameters, otherwise, we need to contact you for reconfirmation.',
				values: {
					topLayer: 'Top Layer',
					bottomLayer: 'Bottom Layer'
				}
			},
			solderMask: {
				title: 'Solder Mask',
				description:
					'It is coating material used to mask or to protect selected area. When ordering 1-layer PCB, please specify whether the solder mask is on top, bottom, or both sides. When only one side is chosen for the solder mask, the other side will be exposed with the solder mask opening completely. Please be sure to select the correct parameters, otherwise, we need to contact you for reconfirmation.',
				values: {
					topSide: 'Top Side',
					bottomSide: 'Bottom Side',
					bothSides: 'Both Sides'
				}
			},
			silkscreen: {
				title: 'Silkscreen',
				description:
					'The silkscreen is a layer of ink trace used to identify the PCB components, marks, logos, symbols, and so on.When ordering 1-layer PCB, please specify which layer the silkscreen is on.',
				values: {
					topSide: 'Top Side',
					bottomSide: 'Bottom Side',
					bothSides: 'Both Sides'
				}
			},
			material: {
				title: 'Material',
				description:
					'FR4 is the most common arade dielectric material that is used in the fabrication of circu boards. Aluminum boards have better heat dissipation and thermal transfer than standard FR-4 constructions. The copper base boards have a great thermal conductivity better than aluminum PCB. Due to its characteristics of low dielectric loss, Rogers is often used in high-frequency PCB. If you need other materials, please contact your sales representative.',
				disclaimer: '*Material model can be remarked below. HDI is available for 4-layer or more.',
				values: {
					fr4: 'FR-4',
					aluminum: 'Aluminum',
					rogers: 'Rogers',
					hdi: 'HDI (Buried/Blind vias)',
					copperBase: 'Copper Base'
				}
			},
			fr4TG: {
				title: 'FR4-TG',
				description:
					'TG means Glass Transition Temperature. Ordinary TG is 130 ℃ or more, medium TG is about greater than 150 ℃, and advanced TG is generally greater than 170 ℃. The higher the TG, the better the temperature resistance of the material. The default material of Velenova has a TG of 150-160℃, which is higher that most companies.',
				disclaimer:
					'*Base material with high TG has good CAF resistance, high heat resistance, dimensional stability and is suitable forlead-free soldering process',
				url: ''
			},
			rogers: {
				title: 'Rogers',
				description:
					'Rogers RO4000 series has been in a leading position in the industry. This low-loss material is widely used in microwave and millimeter-wave frequency designs. Compared with traditional PTFE material, it is easier to be used in circuit manufacturing and has stable and consistent performance. At present, 4003C and 4350B are available for Velenova. If you need other models, please contact your sales representative.'
			},
			thermalConductivity: {
				title: 'Thermal Conductivity',
				description:
					'The thermal conductivity of aluminum PCB/copper base PCB is the measure of the ability of the material to conduct heat away from a source. It is typically measured in watts per meter Kelvin (W/mK) and commonly denoted by k,λ, or K.'
			},
			thermoElectricSeparation: {
				title: 'Thermo-Electric Separation',
				description:
					'Thermoelectric separation means that the thermally conductive pads on the copper substrate and the electrically conductive pads are separated, which can help to achieve the best heat conduction and heat dissipation effect. Shown as below:'
			},
			structureOfMCPCB: {
				title: 'Structure of MCPCB',
				description:
					'This is for Double-sided / Multilayer metal substrate boards (Aluminum or Copper Base). There are two structures to choose from according to whether the metal base is in the middle or the bottom.',
				values: {
					metalCoreMiddle: 'Metal Core in the middle',
					metalBaseBottom: 'Metal Base on the bottom side'
				}
			},
			thickness: {
				title: 'Thickness',
				description:
					'For ordinary materials, the board thickness refers to the thickness of the PCB after production is complete, and the error is about 10% (+/-10% (T>=1mm) or +/- 0.1mm (T<1mm).). The error is mainly caused by solder mask and copper sinking.If there are other requirements for thickness error, please make a note in Other Special Requirements. Note: For single sided/double sided Rogers board, the thickness refers to thickness of substrate.',
				imgSrc: ''
			},
			minTrack: {
				title: 'Min Track/Spacing',
				description:
					'Minimum width of the copper trace and minimum distance between two traces. Velenova engineers will double-check the Min Track/Spacing.',
				imgSrc: ''
			},
			minHoleSize: {
				title: 'Min Hole Size',
				description: 'Minimum diameter of holes. Velenova engineers will double-check the min hole size.',
				noDrill: 'No Drill',
				imgSrc: ''
			},
			solderMaskColor: {
				title: 'Solder Mask',
				description:
					'Solder mask color refers to the color of the PCB surface. Currently, Velenova provides 9 conventional solder mask colors. If you need pink, gray, orange, or transparent, please go to the Advanced PCB page to choose.'
			},
			silkscreenColor: {
				title: 'Silkscreen',
				description:
					'The silkscreen is a layer of ink trace used to identify the PCB components, marks, logos, symbols, and so on. The color is usually white. But when the solder mask ink is white, the silkscreen will be black.'
			},
			uvPrinting: {
				title: 'UV Printing Multi-color',
				description: '',
				descriptionDetail: {
					title1: 'Prerequisites for Ordering',
					body1: 'Maximum size for a single piece: 270*470MM',
					body2: 'Selection of soldermask color.',
					title2: 'Design Specifications',
					body3:
						'Avoid placing colored characters in areas with solder mask openings, such as surface-mount pads or through-hole pads.',
					body4:
						'Colored characters can be provided through reference pictures and reference alignment maps (for convenient alignment with PCB) without the necessity of designing them in Gerber files. However, if you opt to include colored characters in the Gerber files, ensure they are placed on the silkscreen layer and annotated with colors.',
					disclaimer:
						'* Please send the images you want to print on the PCB in the following formats: AI, PDF, JPEG, PNG, TIFF, etc., and indicate your desired printing location on the board.'
				},
				disclaimer: '*The uploaded PCB file should contain color renderings',
				url: '',
				values: {
					singleSidedTop: 'Single Sided: Top',
					singleSidedBottom: 'Single Sided: Bottom',
					doubleSided: 'Double Sided'
				}
			},
			edgeConnector: {
				title: 'Edge Connector',
				description:
					"Edge connectors achieve electrical connection by contacting the golden fingers on the PCB. If your design includes golden finger, please check 'Yes' for this item and select the surface finish method and bevelling angle for it. Otherwise, please check 'No'."
			},
			surfaceFinish: {
				title: 'Surface Finish',
				description:
					'Surface finish is an important part of PCB production. It can protect the copper from oxidation, which would render the PCB unusable. In addition, it provides a smooth surface for the components to be soldered.',
				values: {
					haslWithLead: 'HASL with lead',
					haslLeadFree: 'HASL lead free',
					immersionGold: 'Immersion Gold (ENIG)',
					osp: 'OSP',
					hardGold: 'Hard Gold',
					immersionSilver: 'Immersion Silver (Ag)',
					immersionTin: 'Immersion Tin',
					haslLeadFreeImmersionGold: 'HASL lead free + Selective immersion gold',
					haslLeadFreeHardGold: 'HASL lead free + Selective hard gold',
					immersionGoldHardGold: 'Immersion gold + Selective hard gold',
					enepig: 'ENEPIG',
					plainCopper: 'Plain Copper / None'
				},
				acceptHASLChange:
					'Tick means you accept we might change "HASL" to "ENIG" at our discretion without extra charge.'
			},
			viaProcess: {
				title: 'Via Process',
				description:
					'For gerber files, we will process according to the files, and this option is invalid. For .PCB or .PCBDOC files, we will process with the parameters you select.',
				disclaimer:
					'*For Gerber files this choice will not affect anything, PCB will be made using the parameters of the files.',
				values: {
					tentingVias: 'Tenting vias',
					pluggedVias: 'Plugged vias with solder mask',
					viasNotCovered: 'Vias not covered'
				}
			},
			finishedCopper: {
				title: 'Finished Copper',
				description:
					'The weight in ounces of copper in one square foot of PCB, this option will determine the thickness of copper on the outer layers. Velenova provides the thickness of copper on outer layers of 1-13oz.PTH holes or vias that are cutted through to create a partial or half hole to form an opening into the side of the hole barrel. Generally they are used for mounting a PCB to another one.',
				disclaimer: '*Requirement of Min Track/Spacing: ≥ 3/3mil for sample orders, or ≥ 3.5/3.5mil for bulk orders.',
				bareBoard: 'Bare Board'
			},
			innerCopper: {
				title: 'Inner Copper',
				description:
					'The copper weight on the inner layers for multilayer PCBs. The default inner copper weight is 1 oz.',
				disclaimer: '*Requirement of Min Track/Spacing: ≥ 3/3mil for sample orders, or ≥ 3.5/3.5mil for bulk orders.'
			},
			removeProductNo: {
				title: 'Remove Product No',
				description:
					'Velenova will add our product number on PCB to distinguish your PCBs from others. If you want to remove it, there will be an extra $1.5 charge. If you want to put it in a specific location, please indicate the location by adding the text "Velenova" in silkscreen layer and there is no extra charge for this option.',
				values: {
					no: 'No',
					yes: 'Yes (extra + $1.5)',
					specifyLocation: 'Specify a Location'
				}
			},
			peelableSolderMask: {
				title: 'Peelable Solder Mask',
				description:
					'Also known as a blue peelable mask, it is used to protect the required solder pads during assembly and is typically referred to as GTPM and GBPM in design. Unlike green soldermask, which is a negative image and is permanently present on the PCB in PCB design, Peelable Soldermask is a positive image (what you see is what you get in your design) and is temporarily used for PCB manufacturing and assembly. Coating material could be removed after board through wave soldering.',
				values: {
					topSide: 'Top Side',
					bottomSide: 'Bottom Side',
					bothSides: 'Both Sides'
				}
			},
			holeCopperThickness: {
				title: 'Hole Copper Thickness',
				description: 'Please select the hole copper thickness you need'
			},
			ulMarking: {
				title: 'UL Marking',
				description:
					'Velenova has obtained UL certification, please choose to add the corresponding logo on the layer you need. We will add the logo JDB-D if it is a two-layer board, and add JDB-M if it is a multilayer board.For single layer metal base PCB,we will add corresponding UL（JDB-A1,JDB-A2,JDB-A3)as required.',
				values: {
					topSilkscreen: 'Yes - add to top silkscreen',
					bottomSilkscreen: 'Yes - add to bottom silkscreen',
					topSolderMask: 'Yes - add to top solder mask',
					bottomSolderMask: 'Yes - add to bottom solder mask',
					topCopper: 'Yes - add to top copper',
					bottomCopper: 'Yes - add to bottom copper',
					default: 'Yes - as Velenova default'
				}
			},
			dateCode: {
				title: 'Date Code',
				description: 'Add the production time on the PCB',
				placeholder: 'For example: date code in the format of WWYY in top silkscreen layer',
				values: {
					velenovaPrefer: 'Add as Velenova prefer',
					customerRequired: "Add as customer's required",
					updateDesignedDateCode: 'Update the designed date code'
				}
			},
			customizedServices: {
				title: 'Customized Services and Advanced Options',
				description: 'We may add extra cost for these special options which will be confirmed after review.',
				values: {
					halfCut: {
						title: 'Half-Cut / Castellated Holes',
						description:
							'PTH holes or vias that are cutted through to create a partial or half hole to form an opening into the side of the hole barrel. Generally they are used for mounting a PCB to another one.',
						url: '',
						imgSrc: ''
					},
					edgePlating: {
						title: 'Edge Plating',
						description:
							'PCB edge plating refers to the metallization of the sides of a printed circuit board across its height.You can carry out edge plating on just one of the board edges or all round. Through edge plating，your equip the board with a reliable connection and rigidity.'
					},
					impedanceControl: {
						title: 'Impedance Control',
						description:
							'Conductors in a PCB carry various signals, and to increase their transmission speed, their frequency must be raised. However, factors such as etching, layer thickness, and line width can cause impedance variations in the PCB, leading to signal distortion. Therefore, for high-speed PCB conductors, their impedance values should be controlled within a certain range, known as "impedance control". The impedance tolerance is generally ±10%. If impedance requirements are specified in the documentation but not selected in the order, it will be regarded as ignoring the impedance requirement.'
					},
					halogenFree: {
						title: 'Halogen-Free',
						description:
							'According to the JPCA-ES-01-2003 standard, a copper-clad laminate with a chlorine (Cl) content and bromine (Br) content of less than 0.09% Wt (by weight) each and the total amount of CI+Br is ≤ 0.15% [1500PPM] is defined as a halogen-free copper-clad laminate.'
					},
					customStackup: {
						title: 'Custom Stackup',
						description:
							'Apply to multilayer PCBs only. If you need to customize a specific stack-up, please upload the stack-up file together or contact your sales representative.',
						url: ''
					},
					carbonInk: {
						title: 'Carbon Ink',
						description:
							'Also called carbon oil PCB. Carbon ink PCB is coated on the PCB substrate with carbon-based conductive ink (referred to as carbon ink), cured to form a PCB with a carbon film conductive pattern. Carbon ink PCB has the advantages of low cost, strong impedance control ability, high reliability, and good corrosion resistance.'
					},
					allViasFilled: {
						title: 'All vias filled with resin and capped',
						description: 'If you check this option, all vias will be filled with resin,then capped and plated cover.'
					},
					viaInPad: {
						title: 'Via in Pad',
						description:
							'If there are via in pad in your design, that is, vias in the SMD pad, check this option and we will perform resin plug,then capped and plated cover.'
					},
					pressFitHoles: {
						title: 'Press-fit Holes',
						description:
							'Press-fit holes are holes are designed to accept components with press-fit pins. The pins are inserted into the holes and then pressed into place to create a secure connection. Tolerance：+/-0.05mm.',
						imgSrc: ''
					},
					countersink: {
						title: 'Countersink / Counterbore',
						description:
							'The most noted difference between a countersink and counterbore is the size and shape of the screw or the tool which creates the holes in the material. A counterbore hole is deeper and has a square-like shape where the shoulder of the screw head can seat. It also allows for the addition of washers to be used.',
						imgSrc: ''
					},
					zAxisMilling: {
						title: 'Z-axis Milling',
						description:
							'It is also known as depth control routing(milling) or level milling, it refers to partial routing in PCB with a variable level elevation at the PCB edge or within PCB.',
						imgSrc: ''
					},
					blackFr4: {
						title: 'Black FR4 (Black Core)',
						description:
							'It belongs to ordinary FR-4 base material and its processing technology is same as FR-4 too. It is black, opaque, shading, and suitable for making LED display PCB and insulation structural parts in instrumentation and optical instruments..',
						url: ''
					},
					embeddedCopperPcb: {
						title: 'Embedded Copper PCB',
						description:
							'Embedded copper PCBs are printed circuit boards that have copper traces embedded within the substrate material. The design of buried copper blocks can be mainly divided into two categories: buried copper blocks and embedded copper blocks. Buried copper blocks refer to copper blocks that are buried with a thickness less than the total thickness of the board, with one side of the copper block flush with the bottom layer and the other side flush with a certain inner layer, as shown in Figure 1 (semi-buried copper block). Embedded copper blocks refer to copper blocks that are embedded with a thickness close to or equal to the total thickness of the board, with the copper block passing through the top layer, as shown in Figure 2 (through-hole copper block). Printed circuit boards with buried or embedded copper blocks have the characteristics of high thermal conductivity, high heat dissipation, and saving board space, which can effectively solve the heat dissipation problem of high-power electronic components.',
						imgSrc: ''
					},
					cavityPcb: {
						title: 'Cavity PCB',
						description:
							'Cavity PCB is a type of PCB that features one or multiple recessed grooves or cavities on its surface. These grooves are created by removing a portion of the board material, leaving behind a depressed area where components can be placed deeper, and finally reducing the overall height of the device. Cavity PCB and back drilling PCB are two different technologies, back drilling refers to drilling holes for vias, which stops at a certain depth and does not penetrate through the board, while cavity PCB refers to a specific area on the PCB.',
						imgSrc: ''
					},
					semiFlexPcb: {
						title: 'Semi-Flex PCB',
						description:
							'Semi-flex PCB is a kind of PCB that can be locally bent on the basis of rigid PCB, which can not only provide the support of rigid PCB, but also achieve local bending according to product requirements, including the bending in 45°, 90°, 180°, meeting the installation performance requirements of various types of 3D assembly.',
						imgSrc: ''
					},
					hybridPcb: {
						title: 'Whole/Partially Hybrid PCB',
						description:
							'Hybrid PCB utilizes different materials to build the substrate core layers and also the dielectric layers. Rather than using one material, the fabrication of hybrid PCB involves the use of different materials. Different materials are used to combine all positives into the manufacturing process of the PCB and reduce the negatives that a particular material may feature.'
					},
					backDrillPcb: {
						title: 'Back Drill PCB',
						description:
							'Back drilling (sometimes called controlled depth drilling or CDD) involves using a drill bit slightly larger in diameter than the PTH to remove the conductive plating or stub from the hole.The back drilled hole should bring down the stub length to 10 mils.If the stubs are greater than 10 mils，then signal reflections will be produced.',
						imgSrc: ''
					},
					leadlessPartialHardGold: {
						title: 'Leadless Partially Plated Hard Gold',
						description:
							'This is an electronic component surface treatment technology that is lead-free and selectively electroplated in certain areas to provide high levels of conductivity and durability.'
					}
				}
			},
			specialRequests: {
				title: 'Other Special Requests',
				placeholder: 'Fill in any PCB details to make it as clear as possible for us to understand your requirements.'
			}
		},

		assembly: {
			id: {
				title: 'Product ID'
			},
			createdAt: {
				title: 'Created At'
			},
			updatedAt: {
				title: 'Updated At'
			},
			name: {
				title: 'Product Name',
				description: 'Please enter a name for your product',
				error: 'Product name is required'
			},
			fileName: {
				title: 'File Name'
			},
			buildTime: {
				title: 'Build Time'
			},
			weight: {
				title: 'Weight'
			},
			initialPrice: {
				title: 'Initial Price'
			},
			finalPrice: {
				title: 'Final Price'
			},
			flexibleOptions: {
				title: 'Flexible Options',
				values: {
					turnkey: {
						title: 'Turnkey',
						description: 'Velenova supply parts'
					},
					kitted: {
						title: 'Kitted or Consigned',
						description: 'Customer supply parts'
					},
					combo: {
						title: 'Combo',
						description: 'You supply some parts we do the rest'
					}
				}
			},
			boardType: {
				title: 'Board Type',
				description:
					'We suggest choose to do panel if single PCB qty is more than 20pcs or any side of single board is smaller than 50mm.',
				disclaimer:
					'We suggest choose to do panel if single PCB qty is more than 20pcs or any side of single board is smaller than 50mm.',
				values: {
					singlePieces: 'Single Pieces',
					panelizedPcbs: 'Panelized PCBs'
				}
			},
			side: {
				title: 'Assembly side',
				description: 'Are the parts mounted on one side only or both sides?',
				values: {
					topSide: 'Top Side',
					bottomSide: 'Bottom Side',
					bothSides: 'Both Sides'
				}
			},
			quantity: {
				title: 'Quantity',
				description: 'Please fill in total quantity of single PCBs.',
				error: 'Quantity should be greater than 0',
				placeholder: 'Quantity',
				pieces: 'Pieces'
			},
			payAttention: {
				title: 'Pay Attention',
				description:
					"Due to the diversity of components, there are usually many things need to be paid attention to while doing assembly, such as whether it needs to be baked before mounting, whether there are special requirements about welding temperature, corrosion resistance, humidity, etc. Our engineers will check all the information, but it is still inevitable that there will be omissions. So it'll be much better that you can hightlight the special requirements in advance."
			},
			sensitiveParts: {
				title: 'Sensitive Parts',
				description: 'Contains sensitive components/parts'
			},
			alternatesChina: {
				title: 'Alternates Made in China',
				description: 'Do you accept alternatives/substitutes made in China?'
			},
			otherParameters: {
				title: 'Other Parameters',
				description: 'Fill in to get the exact price, or leave it blank to wait for final quote.'
			},
			uniqueParts: {
				title: 'Number of Unique Parts',
				description: 'The variety of components in the BOM.',
				error: 'Unique parts cannot be less than 0'
			},
			smdParts: {
				title: 'Number of SMD Parts',
				description: 'The total number of SMDs on each board (including fine pitch and leadless)',
				error: 'SMD parts cannot be less than 0'
			},
			bgaParts: {
				title: 'Number of BGA/QFP Parts',
				description:
					'Number of ICs with more than 16pins and SMD irregular parts with more than 10pins on each board. (SOP,QFP,QFN,BGA)',
				error: 'BGA parts cannot be less than 0'
			},
			throughHoleParts: {
				title: 'Number of Through-Hole Parts',
				description: 'The total number of THT parts on each board (DIP NO.)',
				error: 'Through-hole parts cannot be less than 0'
			},
			customizedServices: {
				title: 'Customized Services and Advanced Options',
				description: 'Below options, their cost is not included in the online quotation',
				values: {
					depanelBoards: {
						title: 'Depanel the boards to delivery',
						description:
							'It is also called sub-board shipment,the panelized PCB is divided into pieces and packaged separately to ship out after the assembly service.'
					},
					functionTest: {
						title: 'Function Test',
						description:
							'Functional testing, also known as FCT testing, is the last manufacturing step of PCB creation. Essentially, functional testing makes sure the PCB works correctly. It is done mainly to avoid assembly issues including shorts, opens, missing components or the installation of incorrect parts. Please note your functional test methods and detailed requirements if needed.'
					},
					conformalCoating: {
						title: 'Conformal coating',
						description:
							'Conformal coating is a protective coating of thin polymeric film applied to printed circuit boards (PCB). The coating is named conformal since it conforms to the contours of the PCB. Conformal coatings are typically applied at 25-250 μm to the electronic circuitry and provides protection against moisture, dust, chemicals and temperature extremities.'
					},
					firmwareLoading: {
						title: 'Firmware loading',
						description:
							'In the PCB industry, firmware loading typically refers to the process of loading a previously written program, or firmware, onto the chips on the PCB. During PCB manufacturing, different types of chips are often combined together to achieve specific functionalities. In order for the chips to function properly, the corresponding firmware needs to be loaded onto them.'
					},
					pressFit: {
						title: 'Press-fit assembly',
						description:
							'Press-fit assembly is an electronic manufacturing technology used to establish mechanical and electrical connections between circuit boards and components without the need for soldering. It involves inserting connector pins into the gold-plated through-holes on the circuit board and applying a certain amount of force to establish the connection. This technology eliminates some of the issues that arise in traditional soldering processes, such as broken or cold soldered pins, resulting in improved reliability and durability of the connector components.',
						imgSrc: ''
					},
					boxBuild: {
						title: 'Box build assembly',
						description:
							'It is also known as systems integration, it is a full process service from designing and manufacturing the enclosure, installing a PCBA, installing cables and the cable harness assembly, and even installing electrical and/or pneumatic systems.',
						imgSrc: ''
					},
					cableWireHarness: {
						title: 'Cable wire harness assembly',
						description:
							'A cable assembly is a group of wires or cables covered by an exterior sleeve made from a variety of material. A wire harness is a single cable covered by an exterior sleeve.We can provide standard and simple wiring harness assembly, or custom wire harnesses assembly and cable assembly at shortest turnaround times.',
						imgSrc: ''
					},
					packageBox: {
						title: 'Package box',
						description: 'Customize your own special packaging for your products.'
					}
				}
			},
			xrayTest: {
				title: 'Number of X-ray test',
				description:
					'In PCB manufacturing, X-ray test typically refers to X-ray inspection or X-ray detection. It is a non-destructive testing technique used to inspect the quality of solder joint connections and component placement in electronic products.',
				error: 'Number of X-ray test should be greater than 0'
			},
			detailedInformation: {
				title: 'Detailed information of assembly',
				placeholder:
					'Please fill in detailed technical information about the PCB assembly, other shell assembly, cable soldering, fuse wires, rivets, etc.'
			}
		},

		stencil: {
			id: {
				title: 'Product ID'
			},
			createdAt: {
				title: 'Created At'
			},
			updatedAt: {
				title: 'Updated At'
			},
			name: {
				title: 'Product Name',
				description: 'Please enter a name for your product',
				error: 'Product name is required'
			},
			fileName: {
				title: 'File Name'
			},
			buildTime: {
				title: 'Build Time'
			},
			weight: {
				title: 'Weight'
			},
			initialPrice: {
				title: 'Initial Price'
			},
			finalPrice: {
				title: 'Final Price'
			},
			type: {
				title: 'Stencil type',
				disclaimer: 'Allow combining several PCBs on a single SMD stencil.',
				values: {
					framework: 'Framework',
					nonFramework: 'Non-framework'
				}
			},
			multiLevel: {
				title: 'Multi-level/Step stencil',
				description: 'Partial STEP-UP Stencil and partial STEP-DOWN Stencil. '
			},
			side: {
				title: 'Stencil side',
				description: 'For Top+Bottom(On Single Stencil) the stencil size should be at least twice the PCB size.',
				values: {
					top: 'Top',
					bottom: 'Bottom',
					topBottomSingle: 'Top+Bottom (On Single Stencil)',
					topBottomSeparate: 'Top and Bottom (On Separate Stencil)'
				}
			},
			size: {
				title: 'Size (mm)',
				validArea: 'Valid Area'
			},
			length: {
				title: 'Length'
			},
			width: {
				title: 'Width'
			},
			quantity: {
				title: 'Quantity',
				pieces: 'Pieces',
				error: 'Quantity should be greater than 0'
			},
			thickness: {
				title: 'Thickness',
				description: 'The stencil thickness is chosen according to the component sizes.'
			},
			existingFiducials: {
				title: 'Existing fiducials',
				description: 'Fiducials "half lasered“, always on the PCB side (bottom).',
				values: {
					halfLasered: 'Half lasered',
					laseredThrough: 'Lasered through'
				}
			},
			electroPolishing: {
				title: 'Electro-polishing',
				description:
					'Electropolishing, also known as electrochemical surface treatment or Electrochemical deburring, results in an optimized surface quality. Suitable for medium series.'
			},
			specialRequests: {
				title: 'Other Special Requests',
				description:
					"We normally will reduce apatures for ICs to make stencil, so if don't want to change the apatures, please note it when place the order.",
				placeholder:
					'Fill in any Stencil details to make it as clear as possible for us to understand your requirements. e.g.Multi-level /Step stencil, please specify the region and thickness for step-up/step-down in the gerber.'
			}
		},

		gerberFile: {
			title: 'Gerber File',
			description: 'Please upload the Gerber file for your PCB (only accepts .zip, .rar)'
		}
	},

	shipping: {
		shippingEstimate: 'Shipping Estimate',
		shippingInfo: 'Shipping Info',
		selectShippingMethod: 'Select Shipping Method',
		shippingTo: 'Shipping to',
		selectCountry: 'Select Country',
		shippingMethod: 'Shipping Method',
		price: 'Price',
		deliveryTime: 'Delivery Time',
		restriction: 'Restriction',
		country: 'Country',
		method: 'Method',
		weight: 'Weight',
		shippingCost: 'Shipping Cost',
		updatingShipping: 'Updating Shipping Method',
		updateShippingError: 'Failed to update shipping info',
		updateShippingSuccess: 'Shipping info updated successfully'
	},

	orders: {
		pageTitle: 'My Orders',
		viewCart: 'View Cart',
		orderId: 'Order ID',
		createdDate: 'Created Date',
		status: 'Status',
		itemsCount: 'Items Count',
		viewDetails: 'View Details'
	},

	order: {
		pageTitle: 'Order',
		allOrders: 'All Orders',
		myCart: 'My Cart',
		orderId: 'Order ID',

		submitReview: {
			noProducts: 'No products in the cart',
			shippingError: 'Shipping info is not provided',
			deliveryError: 'Delivery address is not provided',
			filesNotUploaded: 'Product files are not uploaded',
			submittingOrder: 'Submitting Order',
			submitOrderError: 'Failed to submit order',
			submitOrderSuccess: 'Order submitted successfully'
		},

		saveOrder: {
			savingOrder: 'Saving Order',
			saveOrderError: 'Failed to save order',
			saveOrderSuccess: 'Order saved successfully'
		},

		cancelReview: {
			cancellingReview: 'Cancelling Review',
			cancelReviewError: 'Failed to cancel review',
			cancelReviewSuccess: 'Review cancelled successfully'
		},

		orderMessage: {
			review: {
				title: 'Your order has been submitted for review',
				button: 'Cancel Review'
			},
			rejected: {
				title: 'Your order review has been rejected',
				description: 'Check the review messages for more detail',
				button: 'Submit Again For Review'
			},
			approved: {
				title: 'Your order review has been approved',
				description: 'Check the updated prices and proceed with payment',
				button: 'Proceed to Payment'
			},
			confirmed: {
				title: 'Payment Success!',
				description: 'Your order is confirmed and is now being processed'
			},
			fabrication: {
				title: 'Fabrication in progress',
				description: 'Check the progress status of each product'
			},
			delivery: {
				title: 'Delivery in progress',
				description: 'Your order is on the way',
				button: 'Track Delivery'
			},
			completed: {
				title: 'Order Completed!',
				description: 'Thank you for shopping with us'
			}
		},

		deliveryAddress: {
			title: 'Delivery Address',
			selectAddress: 'Select Delivery Address',
			noAddressFound: 'No Address Found',
			failedToGetAddress: 'Failed to get address',
			updatingAddress: 'Updating Address',
			selectAddressError: 'Failed to select delivery address',
			selectAddressSuccess: 'Delivery address selected successfully'
		},

		productsTable: {
			products: 'Products',
			addProduct: 'Add Product',
			noProductFound: 'No Product Found',
			product: 'Product',
			buildTime: 'Build Time',
			quantity: 'Quantity',
			gerberFile: 'Gerber File',
			quotePrice: 'Quote Price',
			finalPrice: 'Final Price',
			details: 'Details',
			edit: 'Edit',
			notUploaded: 'Not Uploaded',
			viewProgress: 'View Progress',
			productDetails: {
				title: 'Product Details',
				failedToFetch: 'Failed to fetch product details'
			},
			fabrication: {
				title: 'Fabrication ',
				fabricationProgress: 'Fabrication Progress',
				notStarted: 'Fabrication Not Started',
				completed: 'Fabrication Completed'
			}
		},

		reviewMessages: {
			title: 'Review Messages',
			failedToSend: 'Failed to send message',
			noMessages: 'No Messages, yet',
			conversationClosed: 'This conversation is closed'
		},

		orderSummary: {
			title: 'Order Summary',
			itemsCost: 'Items Cost',
			shippingCost: 'Shipping Cost',
			discount: 'Discount',
			taxes: 'Taxes',
			orderTotal: 'Order Total',
			estDeliveryDate: 'Est Delivery Date',
			estDeliveryDateDesc:
				'The estimated shipping date is calculated based on the item with the longest build time in your order. Please note that this date is for reference only. If your order requires confirmation, the shipping date may be subject to extension.',
			weight: 'Weight',
			weightDesc:
				'The weight here is calculated based on the larger value of gross weight and volume weight, which is estimated for reference. If the actual weight differs from the estimate, shipping cost may be adjusted accordingly.',
			submitOrderForReview: 'Submit Order for Review',
			saveOrder: 'Save Order'
		},

		payment: {
			title: 'Payment Details',
			transactionId: 'Transaction ID',
			paymentTime: 'Payment Time',
			paymentMethod: 'Payment Method',
			totalAmount: 'Total Amount',
			failedToGenerateToken: 'Failed to generate payment token',
			failedToSubmit: 'Failed to submit payment',
			checkout: 'Checkout',
			amountToBePaid: 'Amount to be paid',
			paymentSuccess: 'Payment Success',
			paymentTotal: 'Payment Total',
			print: 'Print',
			payNow: 'Pay Now',
			cancelPayment: 'Cancel Payment'
		},

		removeProduct: {
			modalTitle: 'Are you sure to remove this product?',
			modalTitleAll: 'Are you sure to remove all products?',
			modalBody: 'This action cannot be undone',
			removingProduct: 'Removing Product',
			removingProductAll: 'Removing All Products',
			removeProductError: 'Failed to remove product',
			removeProductAllError: 'Failed to remove all products',
			removeProductSuccess: 'Product removed successfully',
			removeProductAllSuccess: 'All products removed successfully'
		},

		removeOrder: {
			title: 'Remove Order',
			description:
				'This action will permanently delete the order and all its related information. This cannot be undone, so please proceed with caution.',
			modalTitle: 'Are you sure to remove this order?',
			modalBody: 'This action cannot be undone',
			removingOrder: 'Removing Order',
			removeOrderError: 'Failed to remove order',
			removeOrderSuccess: 'Order removed successfully'
		},

		trackDelivery: 'Track Delivery'
	},

	orderStatus: {
		CREATED: 'Order Created',
		CART: 'Cart',
		SAVED: 'Saved as Draft',
		REVIEW: 'In Review',
		REJECTED: 'Review Rejected',
		APPROVED: 'Review Approved',
		PAYMENT: 'Payment',
		CONFIRMED: 'Order Confirmed',
		FABRICATION: 'In Fabrication',
		DELIVERY: 'Shipping & Delivery',
		COMPLETED: 'Order Completed',
		CANCELLED: 'Order Cancelled',
		REFUNDED: 'Refunded'
	}
};
export type Lang = typeof en;
