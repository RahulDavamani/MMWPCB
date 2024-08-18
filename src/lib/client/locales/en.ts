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
		typeHere: 'Type here...'
	},

	navbar: {
		instantQuote: 'Instant Quote',
		products: 'Products',
		whyUs: 'Why Us?',
		support: 'Support',
		login: 'Login',
		i18n: {
			language: 'Language',
			currency: 'Currency'
		},
		user: {
			orders: 'Orders',
			profile: 'Profile',
			settings: 'Settings',
			logout: 'Logout'
		}
	},

	login: {
		signIn: 'Sign In',
		email: 'Email',
		password: 'Password',
		rememberMe: 'Remember Me',
		forgotPassword: 'Forgot Password?',
		dontHaveAccount: "Don't have an account?",
		signInGoogle: 'Sign In with Google'
	},

	register: {
		signUp: 'Sign Up',
		firstName: 'First Name',
		lastName: 'Last Name',
		email: 'Email',
		password: 'Password',
		confirmPassword: 'Confirm Password',
		iAgree: 'I agree to sign up',
		alreadyHaveAccount: 'Already have an account?',
		signInGoogle: 'Sign In with Google'
	},

	instantQuote: {
		products: {
			standardPcb: 'Standard PCB',
			advancedPcb: 'Advanced PCB',
			flexiblePcb: 'FPC/Rigid-Flex',
			assembly: 'Assembly',
			stencil: 'SMD-Stencil'
		},

		pricing: {
			title: 'Pricing and Build Time',
			buildTime: 'Build Time',
			chargeDetails: 'Charge Details',
			total: 'Total',
			saveToCart: 'Save to Cart',
			addToOrder: 'Add to Order'
		},

		shipping: {
			title: 'Shipping Estimate',
			selectShipping: 'Select Shipping Method',
			shippingTo: 'Shipping to',
			selectCountry: 'Select Country',
			shippingMethod: 'Shipping Method',
			price: 'Price',
			deliveryTime: 'Delivery Time',
			restriction: 'Restriction',
			country: 'Country',
			method: 'Method',
			weight: 'Weight',
			shippingCost: 'Shipping Cost'
		},

		standardPcb: {
			name: {
				title: 'Product Name',
				description: 'Please enter a name for your product',
				error: 'Product name is required'
			},
			boardType: {
				title: 'Board Types',
				description:
					'PCBs will be shipped in single pieces or in panel. For bulk assembly orders (quantity greater than 30), we recommend shipping in panel, which will improve the assembly efficiency and reduce the cost.',
				options: {
					singlePieces: 'Single Pieces',
					panelByCustomer: 'Panel by Customer',
					panelByVelenova: 'Panel by Velenova'
				}
			},
			xoutAllowance: {
				title: 'X-out Allowance in Panel',
				description:
					'Bad PCBs may exist in the panel, the quotation will increase by about 30% if X-out Allowance is not accepted.',
				options: {
					accept: 'Accept',
					decline: 'Decline'
				}
			},
			routeProcess: {
				title: 'Route Process',
				description: 'In the panel, the PCBs are connected as shown in the following diagram:',
				options: {
					velenovaPrefer: 'Panel as Velenova prefer',
					vScoring: 'Panel as V-Scoring',
					tabRoute: 'Panel as Tab Route',
					vScoringTabRoute: 'Both V-Scoring and Tab Route'
				}
			},
			breakAwayRail: {
				title: 'Break-away rail',
				description:
					'Break-away rails are long strip blank plate edges set up to leave out the track transmission space during assembly and place the mark point in the panel. PCBs are transmitted through the guide rail on the assembly production line, therefore, a pair of edges that forbid placing components must be left as the transmission edge. The width of the breakaway rail is generally about 5-8mm.'
			},
			panelRequirements: {
				title: 'Panel Requirements',
				disclaimer: '(e.g. Panel in 2*3, size of the break-away rail, total 5 panels=total 30 individual boards)'
			},
			differentDesign: {
				title: 'Different Design in Panel',
				description:
					'It means there are different designs in your files separated by v-cuts, stamp holes, milling slots or others. We will charge additional panel cost if there are different kinds of PCB designs in one Gerber file.',
				error: 'Different design should be greater than 0'
			},
			size: {
				title: 'Size (single)',
				description:
					'The board size refers to the length and width of the board ordered by the customer. If it is a circular board, the length and width are the diameter of the circle; If it is a board with irregular shape, the length and width are measured according to the largest shape range.',
				error: 'Length and width should be greater than 0',
				placeholder: {
					length: 'Length',
					width: 'Width'
				}
			},
			quantity: {
				title: 'Quantity (single)',
				description:
					'Please choose the number of single pieces you need. For standard PCB, the starting quantity is 5 pieces.',
				placeholder: 'Quantity',
				pieces: 'Pieces'
			},
			layers: {
				title: 'Layers',
				description:
					'The number of copper layers in the board. Velenova can currently produce up to 60 layers, if you need more than 14 layers, please select the advanced PCB page for valuation.',
				layer: 'Layer',
				layers: 'Layers'
			},
			copperLayer: {
				title: 'Copper Layer',
				description:
					'When ordering 1-layer PCB, please specify whether the circuit layer is on top, bottom, or none. Please be sure to select the correct parameters, otherwise, we need to contact you for reconfirmation.',
				options: {
					topLayer: 'Top Layer',
					bottomLayer: 'Bottom Layer'
				}
			},
			solderMask: {
				title: 'Solder Mask',
				description:
					'It is coating material used to mask or to protect selected area. When ordering 1-layer PCB, please specify whether the solder mask is on top, bottom, or both sides. When only one side is chosen for the solder mask, the other side will be exposed with the solder mask opening completely. Please be sure to select the correct parameters, otherwise, we need to contact you for reconfirmation.',
				options: {
					topSide: 'Top Side',
					bottomSide: 'Bottom Side',
					bothSides: 'Both Sides'
				}
			},
			silkscreen: {
				title: 'Silkscreen',
				description:
					'The silkscreen is a layer of ink trace used to identify the PCB components, marks, logos, symbols, and so on.When ordering 1-layer PCB, please specify which layer the silkscreen is on.',
				options: {
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
				options: {
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
					'*Base material with high TG has good CAF resistance, high heat resistance, dimensional stability and is suitable forlead-free soldering process'
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
				options: {
					metalCoreMiddle: 'Metal Core in the middle',
					metalBaseBottom: 'Metal Base on the bottom side'
				}
			},
			thickness: {
				title: 'Thickness',
				description:
					'For ordinary materials, the board thickness refers to the thickness of the PCB after production is complete, and the error is about 10% (+/-10% (T>=1mm) or +/- 0.1mm (T<1mm).). The error is mainly caused by solder mask and copper sinking.If there are other requirements for thickness error, please make a note in Other Special Requirements. Note: For single sided/double sided Rogers board, the thickness refers to thickness of substrate.'
			},
			minTrack: {
				title: 'Min Track/Spacing',
				description:
					'Minimum width of the copper trace and minimum distance between two traces. Velenova engineers will double-check the Min Track/Spacing.'
			},
			minHoleSize: {
				title: 'Min Hole Size',
				description: 'Minimum diameter of holes. Velenova engineers will double-check the min hole size.',
				noDrill: 'No Drill'
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
				description: {
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
				options: {
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
				options: {
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
				options: {
					tentingVias: 'Tenting vias',
					pluggedVias: 'Plugged vias with solder mask',
					viasNotCovered: 'Vias not covered'
				},
				disclaimer:
					'*For Gerber files this choice will not affect anything, PCB will be made using the parameters of the files.'
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
				options: {
					no: 'No',
					yes: 'Yes (extra + $1.5)',
					specifyLocation: 'Specify a Location'
				}
			},
			customizedServices: {
				title: 'Customized Services and Advanced Options',
				description: 'We may add extra cost for these special options which will be confirmed after review.',
				options: {
					halfCut: {
						title: 'Half-Cut / Castellated Holes',
						description:
							'PTH holes or vias that are cutted through to create a partial or half hole to form an opening into the side of the hole barrel. Generally they are used for mounting a PCB to another one.'
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
							'Apply to multilayer PCBs only. If you need to customize a specific stack-up, please upload the stack-up file together or contact your sales representative.'
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
							'Press-fit holes are holes are designed to accept components with press-fit pins. The pins are inserted into the holes and then pressed into place to create a secure connection. Tolerance：+/-0.05mm.'
					},
					countersink: {
						title: 'Countersink / Counterbore',
						description:
							'The most noted difference between a countersink and counterbore is the size and shape of the screw or the tool which creates the holes in the material. A counterbore hole is deeper and has a square-like shape where the shoulder of the screw head can seat. It also allows for the addition of washers to be used.'
					},
					zAxisMilling: {
						title: 'Z-axis Milling',
						description:
							'It is also known as depth control routing(milling) or level milling, it refers to partial routing in PCB with a variable level elevation at the PCB edge or within PCB.'
					},
					blackFr4: {
						title: 'Black FR4 (Black Core)',
						description:
							'It belongs to ordinary FR-4 base material and its processing technology is same as FR-4 too. It is black, opaque, shading, and suitable for making LED display PCB and insulation structural parts in instrumentation and optical instruments..'
					},
					embeddedCopperPcb: {
						title: 'Embedded Copper PCB',
						description:
							'Embedded copper PCBs are printed circuit boards that have copper traces embedded within the substrate material. The design of buried copper blocks can be mainly divided into two categories: buried copper blocks and embedded copper blocks. Buried copper blocks refer to copper blocks that are buried with a thickness less than the total thickness of the board, with one side of the copper block flush with the bottom layer and the other side flush with a certain inner layer, as shown in Figure 1 (semi-buried copper block). Embedded copper blocks refer to copper blocks that are embedded with a thickness close to or equal to the total thickness of the board, with the copper block passing through the top layer, as shown in Figure 2 (through-hole copper block). Printed circuit boards with buried or embedded copper blocks have the characteristics of high thermal conductivity, high heat dissipation, and saving board space, which can effectively solve the heat dissipation problem of high-power electronic components.'
					},
					cavityPcb: {
						title: 'Cavity PCB',
						description:
							'Cavity PCB is a type of PCB that features one or multiple recessed grooves or cavities on its surface. These grooves are created by removing a portion of the board material, leaving behind a depressed area where components can be placed deeper, and finally reducing the overall height of the device. Cavity PCB and back drilling PCB are two different technologies, back drilling refers to drilling holes for vias, which stops at a certain depth and does not penetrate through the board, while cavity PCB refers to a specific area on the PCB.'
					},
					semiFlexPcb: {
						title: 'Semi-Flex PCB',
						description:
							'Semi-flex PCB is a kind of PCB that can be locally bent on the basis of rigid PCB, which can not only provide the support of rigid PCB, but also achieve local bending according to product requirements, including the bending in 45°, 90°, 180°, meeting the installation performance requirements of various types of 3D assembly.'
					},
					hybridPcb: {
						title: 'Whole/Partially Hybrid PCB',
						description:
							'Hybrid PCB utilizes different materials to build the substrate core layers and also the dielectric layers. Rather than using one material, the fabrication of hybrid PCB involves the use of different materials. Different materials are used to combine all positives into the manufacturing process of the PCB and reduce the negatives that a particular material may feature.'
					},
					backDrillPcb: {
						title: 'Back Drill PCB',
						description:
							'Back drilling (sometimes called controlled depth drilling or CDD) involves using a drill bit slightly larger in diameter than the PTH to remove the conductive plating or stub from the hole.The back drilled hole should bring down the stub length to 10 mils.If the stubs are greater than 10 mils，then signal reflections will be produced.'
					},
					leadlessPartialHardGold: {
						title: 'Leadless Partially Plated Hard Gold',
						description:
							'This is an electronic component surface treatment technology that is lead-free and selectively electroplated in certain areas to provide high levels of conductivity and durability.'
					}
				}
			},
			peelableSolderMask: {
				title: 'Peelable Solder Mask',
				description:
					'Also known as a blue peelable mask, it is used to protect the required solder pads during assembly and is typically referred to as GTPM and GBPM in design. Unlike green soldermask, which is a negative image and is permanently present on the PCB in PCB design, Peelable Soldermask is a positive image (what you see is what you get in your design) and is temporarily used for PCB manufacturing and assembly. Coating material could be removed after board through wave soldering.',
				options: {
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
				options: {
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
				options: {
					velenovaPrefer: 'Add as Velenova prefer',
					customerRequired: "Add as customer's required",
					updateDesignedDateCode: 'Update the designed date code'
				}
			},
			specialRequest: {
				title: 'Other Special Request',
				placeholder: 'Fill in any PCB details to make it as clear as possible for us to understand your requirements.'
			}
		}
	}
};
export type Lang = typeof en;
