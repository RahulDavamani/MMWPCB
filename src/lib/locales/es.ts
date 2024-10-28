import type { Lang } from './en';

export const es: Lang = {
	common: {
		login: 'Iniciar sesión',
		or: 'O',
		yes: 'Sí',
		no: 'No',
		none: 'Ninguno',
		color: {
			white: 'Blanco',
			black: 'Negro',
			green: 'Verde',
			red: 'Rojo',
			blue: 'Azul',
			yellow: 'Amarillo',
			purple: 'Púrpura',
			pink: 'Rosa',
			orange: 'Naranja',
			grey: 'Gris',
			matteBlack: 'Negro mate',
			matteGreen: 'Verde mate',
			matteBlue: 'Azul mate',
			matteRed: 'Rojo mate',
			silver: 'Plata',
			silverWhite: 'Blanco plateado',
			silverGray: 'Gris plateado',
			metallic: 'Metálico',
			copper: 'Cobre',
			darkBlack: 'Negro oscuro',
			transparent: 'Transparente'
		},
		typeHere: 'Escribe aquí...',
		select: 'Seleccionar',
		warning: 'Advertencia',
		error: 'Error',
		retry: 'Reintentar',
		moreDetails: 'Más detalles',
		home: 'Inicio',
		add: 'Agregar',
		edit: 'Editar',
		save: 'Guardar',
		cancel: 'Cancelar',
		close: 'Cerrar',
		remove: 'Eliminar',
		reset: 'Restablecer',
		upload: 'Subir'
	},

	user: {
		name: 'Nombre',
		firstName: 'Nombre de pila',
		lastName: 'Apellido',
		email: 'Correo electrónico',
		phone: 'Número de teléfono',
		password: 'Contraseña',
		profilePicture: 'Foto de perfil'
	},

	navbar: {
		instantQuote: 'Cotización instantánea',
		products: 'Productos y capacidades',
		whyUs: '¿Por qué nosotros?',
		support: 'Soporte',
		login: 'Iniciar sesión',
		i18n: {
			language: 'Idioma',
			currency: 'Moneda'
		},
		cart: {
			myCart: 'Mi carrito',
			viewCart: 'Ver carrito',
			proceedToCheckout: 'Proceder al pago',
			loginViewCart: 'Inicia sesión para ver tu carrito',
			cartEmpty: 'Tu carrito está vacío',
			orderNow: 'Ordenar ahora',
			subTotal: 'Subtotal'
		},
		user: {
			orders: 'Órdenes',
			profile: 'Perfil',
			settings: 'Configuraciones',
			logout: 'Cerrar sesión'
		}
	},

	login: {
		pageTitle: 'Iniciar sesión',
		signIn: 'Iniciar sesión',
		rememberMe: 'Recuérdame',
		forgotPassword: '¿Olvidaste tu contraseña?',
		dontHaveAccount: '¿No tienes una cuenta?',
		signInGoogle: 'Iniciar sesión con Google'
	},

	register: {
		pageTitle: 'Registro',
		signUp: 'Registrarse',
		confirmPassword: 'Confirmar contraseña',
		iAgree: 'Estoy de acuerdo en registrarme',
		alreadyHaveAccount: '¿Ya tienes una cuenta?',
		signInGoogle: 'Iniciar sesión con Google'
	},

	profile: {
		pageTitle: 'Perfil',
		myProfile: 'Mi perfil',
		personalInformation: {
			title: 'Información personal',
			editProfile: 'Editar perfil',
			savingProfile: 'Guardando el perfil',
			saveProfileSuccess: 'Perfil guardado exitosamente',
			saveProfileError: 'Falló al guardar el perfil'
		},
		addresses: {
			title: 'Direcciones de entrega',
			newAddress: 'Nueva dirección',
			noAddressFound: 'No se encontró ninguna dirección',
			removingAddress: 'Eliminando la dirección',
			removeAddressSuccess: 'Dirección eliminada exitosamente',
			removeAddressError: 'Falló al eliminar la dirección'
		},
		upsertAddress: {
			addAddress: 'Agregar dirección de entrega',
			updateAddress: 'Actualizar dirección de entrega',
			nameError: 'Por favor ingresa tu nombre',
			phoneError: 'Por favor ingresa tu número de teléfono',
			addressLine1: 'Línea de dirección 1',
			addressLine1Error: 'Por favor ingresa tu dirección',
			addressLine2: 'Línea de dirección 2',
			city: 'Ciudad',
			cityError: 'Por favor ingresa tu ciudad',
			state: 'Estado',
			stateError: 'Por favor ingresa tu estado',
			country: 'País',
			countryError: 'Por favor ingresa tu país',
			postalCode: 'Código postal',
			postalCodeError: 'Por favor ingresa tu código postal',
			savingAddress: 'Guardando la dirección',
			saveAddressSuccess: 'Dirección guardada exitosamente',
			saveAddressError: 'Falló al guardar la dirección',
			addingAddress: 'Agregando dirección',
			addAddressSuccess: 'Dirección agregada exitosamente',
			addAddressError: 'Falló al agregar la dirección'
		}
	},

	home: {
		pageTitle: 'Inicio',
		instantQuote: 'Cotización instantánea',
		quoteNow: 'Cotiza ahora'
	},

	products: {
		standardPcb: 'PCB estándar',
		advancedPcb: 'PCB avanzado',
		flexiblePcb: 'PCB flexible',
		rigidFlex: 'Rígido-flexible',
		assembly: 'Ensamblaje',
		stencil: 'Plantilla SMD',
		cnc: 'Mecanizado CNC',
		sheetMetal: 'Metal de chapa',
		threePrinting: 'Impresión 3D',
		injectionMolding: 'Moldeo por inyección',
		vacuumCasting: 'Moldeo al vacío'
	},

	shipping: {
		shippingEstimate: 'Estimación de envío',
		shippingInfo: 'Información de envío',
		selectShippingMethod: 'Seleccionar método de envío',
		shippingTo: 'Envío a',
		selectCountry: 'Seleccionar país',
		shippingMethod: 'Método de envío',
		price: 'Precio',
		deliveryTime: 'Tiempo de entrega',
		restriction: 'Restricción',
		country: 'País',
		method: 'Método',
		weight: 'Peso',
		shippingCost: 'Costo de envío',
		updatingShipping: 'Actualizando el método de envío',
		updateShippingError: 'Falló al actualizar la información de envío',
		updateShippingSuccess: 'Información de envío actualizada exitosamente'
	},

	orders: {
		pageTitle: 'Mis órdenes',
		viewCart: 'Ver carrito',
		orderId: 'ID de orden',
		createdDate: 'Fecha de creación',
		status: 'Estado',
		itemsCount: 'Cantidad de artículos',
		viewDetails: 'Ver detalles'
	},

	order: {
		pageTitle: 'Orden',
		allOrders: 'Todas las órdenes',
		myCart: 'Mi carrito',
		orderId: 'ID de orden',

		submitReview: {
			noProducts: 'No hay productos en el carrito',
			shippingError: 'No se proporcionó información de envío',
			deliveryError: 'No se proporcionó dirección de entrega',
			filesNotUploaded: 'No se han subido los archivos del producto',
			submittingOrder: 'Enviando orden',
			submitOrderError: 'Falló al enviar la orden',
			submitOrderSuccess: 'Orden enviada exitosamente'
		},

		saveOrder: {
			savingOrder: 'Guardando orden',
			saveOrderError: 'Falló al guardar la orden',
			saveOrderSuccess: 'Orden guardada exitosamente'
		},

		cancelReview: {
			cancellingReview: 'Cancelando revisión',
			cancelReviewError: 'Falló al cancelar revisión',
			cancelReviewSuccess: 'Revisión cancelada exitosamente'
		},

		orderMessage: {
			review: {
				title: 'Tu orden ha sido enviada para revisión',
				button: 'Cancelar revisión'
			},
			rejected: {
				title: 'Tu revisión de orden ha sido rechazada',
				description: 'Revisa los mensajes de revisión para más detalles',
				button: 'Enviar de nuevo para revisión'
			},
			approved: {
				title: 'Tu revisión de orden ha sido aprobada',
				description: 'Revisa los precios actualizados y procede con el pago',
				button: 'Proceder al pago'
			},
			confirmed: {
				title: '¡Pago exitoso!',
				description: 'Tu orden está confirmada y ahora está en proceso'
			},
			fabrication: {
				title: 'Fabricación en progreso',
				description: 'Revisa el estado de progreso de cada producto'
			},
			delivery: {
				title: 'Entrega en progreso',
				description: 'Tu orden está en camino',
				button: 'Rastrear entrega'
			},
			completed: {
				title: '¡Orden completada!',
				description: 'Gracias por tu compra'
			}
		},

		deliveryAddress: {
			title: 'Dirección de entrega',
			selectAddress: 'Seleccionar dirección de entrega',
			noAddressFound: 'No se encontró dirección',
			failedToGetAddress: 'Falló al obtener la dirección',
			updatingAddress: 'Actualizando dirección',
			selectAddressError: 'Falló al seleccionar la dirección de entrega',
			selectAddressSuccess: 'Dirección de entrega seleccionada exitosamente'
		},

		productsTable: {
			products: 'Productos',
			addProduct: 'Agregar producto',
			noProductFound: 'No se encontró producto',
			product: 'Producto',
			buildTime: 'Tiempo de construcción',
			quantity: 'Cantidad',
			gerberFile: 'Archivo Gerber',
			quotePrice: 'Precio del presupuesto',
			finalPrice: 'Precio final',
			details: 'Detalles',
			edit: 'Editar',
			notUploaded: 'No subido',
			viewProgress: 'Ver progreso',
			productDetails: {
				title: 'Detalles del producto',
				failedToFetch: 'Falló al obtener detalles del producto'
			},
			fabrication: {
				title: 'Fabricación',
				fabricationProgress: 'Progreso de fabricación',
				notStarted: 'Fabricación no iniciada',
				completed: 'Fabricación completada'
			}
		},

		reviewMessages: {
			title: 'Mensajes de revisión',
			failedToSend: 'Falló al enviar el mensaje',
			noMessages: 'No hay mensajes, aún',
			conversationClosed: 'Esta conversación está cerrada'
		},

		orderSummary: {
			title: 'Resumen de la orden',
			itemsCost: 'Costo de artículos',
			shippingCost: 'Costo de envío',
			discount: 'Descuento',
			taxes: 'Impuestos',
			orderTotal: 'Total de la orden',
			estDeliveryDate: 'Fecha de entrega estimada',
			estDeliveryDateDesc:
				'La fecha de envío estimada se calcula en función del artículo con el tiempo de construcción más largo en tu orden. Por favor nota que esta fecha es solo de referencia. Si tu orden requiere confirmación, la fecha de envío puede estar sujeta a extensión.',
			weight: 'Peso',
			weightDesc:
				'El peso aquí se calcula en base al mayor valor entre el peso bruto y el peso volumétrico, el cual es estimado para referencia. Si el peso real difiere de la estimación, el costo de envío puede ser ajustado en consecuencia.',
			submitOrderForReview: 'Enviar orden para revisión',
			saveOrder: 'Guardar orden'
		},

		payment: {
			title: 'Detalles de pago',
			transactionId: 'ID de transacción',
			paymentTime: 'Tiempo de pago',
			paymentMethod: 'Método de pago',
			totalAmount: 'Monto total',
			failedToGenerateToken: 'Falló al generar el token de pago',
			failedToSubmit: 'Falló al enviar el pago',
			checkout: 'Finalizar compra',
			amountToBePaid: 'Monto a pagar',
			paymentSuccess: 'Pago exitoso',
			paymentTotal: 'Total del pago',
			print: 'Imprimir',
			payNow: 'Pagar ahora',
			cancelPayment: 'Cancelar pago'
		},

		removeProduct: {
			modalTitle: '¿Estás seguro de que deseas eliminar este producto?',
			modalTitleAll: '¿Estás seguro de que deseas eliminar todos los productos?',
			modalBody: 'Esta acción no se puede deshacer',
			removingProduct: 'Eliminando producto',
			removingProductAll: 'Eliminando todos los productos',
			removeProductError: 'Falló al eliminar el producto',
			removeProductAllError: 'Falló al eliminar todos los productos',
			removeProductSuccess: 'Producto eliminado exitosamente',
			removeProductAllSuccess: 'Todos los productos eliminados exitosamente'
		},

		removeOrder: {
			title: 'Eliminar orden',
			description:
				'Esta acción eliminará permanentemente la orden y toda su información relacionada. Esto no se puede deshacer, así que procede con precaución.',
			modalTitle: '¿Estás seguro de que deseas eliminar esta orden?',
			modalBody: 'Esta acción no se puede deshacer',
			removingOrder: 'Eliminando orden',
			removeOrderError: 'Falló al eliminar la orden',
			removeOrderSuccess: 'Orden eliminada exitosamente'
		},

		trackDelivery: 'Rastrear entrega'
	},

	orderStatus: {
		CREATED: 'Orden creada',
		CART: 'Carrito',
		SAVED: 'Guardado como borrador',
		REVIEW: 'En revisión',
		REJECTED: 'Revisión rechazada',
		APPROVED: 'Revisión aprobada',
		PAYMENT: 'Pago',
		CONFIRMED: 'Orden confirmada',
		FABRICATION: 'En fabricación',
		DELIVERY: 'Envío y entrega',
		COMPLETED: 'Orden completada',
		CANCELLED: 'Orden cancelada',
		REFUNDED: 'Reembolsado'
	},

	support: {
		title: 'Soporte',
		sections: {
			myOrders: {
				title: 'Mis órdenes',
				subsections: {
					ordering: {
						title: 'Realizando pedidos',
						questions: [
							{
								title: '¿Cómo hacer pedidos para PCB y ensamblaje de PCB?',
								contents: [
									[
										'Comprar PCB desde',
										'MMWPCB.com',
										'es fácil y conveniente. Con solo unos pocos pasos, puedes disfrutar de servicios de prototipado de PCB de alta calidad y a precios asequibles.'
									],
									['"Video":', '¿Cómo hacer un pedido en línea en PCBWay? Un video guía de un minuto.'],
									['Paso "1": Haz clic en el tipo de servicio que deseas. Por "ejemplo": PCB.'],
									['Selecciona y completa las especificaciones, luego haz clic en el botón "Calcular" para continuar.']
								]
							},
							{
								title: '¿Cómo hacer un pedido de ensamblaje de PCB (consulta)?',
								contents: [
									['Otro artículo de actualización (2022-02-25):', '¿Cómo subir consulta de ensamblaje de PCB (PCBA)?'],
									['Hay 3 formas de hacer un pedido de ensamblaje de PCB.'],
									['1. Hacer pedidos de ensamblaje de PCB junto con el pedido de PCB.'],
									[
										'Puedes hacer clic en ',
										'Presupuesto instantáneo de PCB',
										'la barra de navegación para entrar, después de hacer los pedidos de PCB, selecciona el ensamblaje para completar tus parámetros de servicio de ensamblaje. Haz clic en Calcular para seleccionar el precio, Agregar al carrito y subir archivos.'
									]
								]
							},
							{
								title: '¿Cómo hacer un pedido de CNC?',
								contents: [
									[
										'Además de los servicios de fabricación de PCB, PCBWay también ofrece servicios de mecanizado CNC, impresión 3D, fabricación de chapa, moldeo por inyección y moldeo al vacío. Cuando vayas al sitio web de PCBWay y luego hagas clic en la sección "CNC/imprimir en 3D", podrás ver las cinco páginas de presupuestos disponibles aquí. Los procesos de pedido de los cinco servicios son básicamente los mismos, excepto por algunos parámetros seleccionados. ¡Vamos a comenzar!'
									]
								]
							}
						]
					},
					leadTime: {
						title: 'Tiempo de entrega',
						questions: [
							{
								title: '¿Cómo comprobar el tiempo de finalización estimado?',
								contents: [
									['Antes del pago'],
									[
										'Bajo la lista "Esperando pago", haz clic en el título del producto o en "Ver detalles" para abrir la caja de información detallada del producto.'
									],
									[
										'En esta caja, encontrarás el tiempo de finalización estimado, como se muestra en la imagen de abajo.'
									]
								]
							},
							{
								title: 'Política de combinación de pedidos, envío y pago',
								contents: [
									['¡Un pago, un envío!'],
									[
										'1. El propósito de la combinación de pedidos es ahorrar en costos de envío. Si tu cronograma para tus PCB no es apretado, combina tus pedidos y envíalos juntos.'
									],
									[
										'2. Al combinar todos estos pedidos en un grupo y pagar ahora, confirmas que todos estos pedidos se enviarán juntos alrededor de [xx-xx-xx]. Esta es la fecha en la que podemos completar tu último pedido de PCB en este grupo de pedidos, y puede que necesitemos algo de tiempo extra para que la empresa de mensajería (sin servicio los domingos) recoja tu paquete.'
									]
								]
							},
							{
								title: '¿Cuándo se producirá la orden express?',
								contents: [
									[
										'Desde que MMWPCB lanzó el servicio express de 24 horas, ha traído muchos beneficios a los clientes que a menudo tienen proyectos urgentes de PCB en su agenda. Sin embargo, también ha traído algunas quejas de clientes cuyas órdenes se retrasaron. Debido a la naturaleza especial de las órdenes urgentes, estas quejas de clientes son especialmente críticas. Los datos muestran que la mayoría de los "retardos" fueron causados por malentendidos sobre el servicio express de 24 horas.'
									],
									[
										'1. Primero, definamos el servicio express de 24 horas de MMWPCB. El intervalo de tiempo va desde el inicio de la producción hasta la finalización de la producción. Es importante señalar que este tiempo no se cuenta desde el momento de tu pago.'
									],
									[
										'2. El pago debe hacerse antes de las 18:00 (GMT+8), o los arreglos de producción se pospondrán un día.'
									]
								]
							}
						]
					},
					salesService: {
						title: 'Servicio de ventas',
						questions: [
							{
								title: '¿Puedo cambiar de representante de ventas?',
								contents: [
									[
										'Todos nuestros representantes de ventas han sido capacitados profesionalmente. Si hay alguna deficiencia, esperamos que puedas proporcionar sugerencias y correcciones.'
									],
									[
										'Si no estás satisfecho con tu representante de ventas, envía tus preguntas a service@mmwpcb.com para solicitar un reemplazo.'
									]
								]
							},
							{
								title: '¿Cómo encuentro a mi representante de ventas para pedir ayuda con el problema de PCB o PCBA?',
								contents: [
									[
										'Si tienes alguna pregunta, ponte en contacto con tu representante de ventas o utiliza el chat en línea. Puedes encontrar su información de contacto de las siguientes formas:'
									],
									[
										'1. En la esquina superior derecha de tu página de inicio o detrás del número de pedido, como se indica en los cuadros rojos en la imagen de abajo;'
									],
									['2. En tu carrito de compras o en la lista de pedidos;']
								]
							},
							{
								title: '¿Qué hacer si el representante de ventas o el servicio postventa no responde?',
								contents: [
									[
										'1. Puede ser que el sistema anti-spam esté activado, causando que el correo electrónico fuera bloqueado o enviado a la carpeta de spam. Por favor, envía un seguimiento proactivo.'
									],
									['2. Si no han respondido en un tiempo razonable y si tienes preguntas sobre un pedido, puedes:'],
									['a. Contactar a service@mmwpcb.com o feedback@mmwpcb.com para obtener asistencia.'],
									['b. Abrir una disputa']
								]
							}
						]
					}
				}
			},
			myAccount: {
				title: 'Mi cuenta',
				subsections: {
					registeringSigningIn: {
						title: 'Registro e inicio de sesión',
						questions: [
							{
								title: '¿Cómo me registro en PCBWay?',
								contents: [
									[
										'1. Haz clic en Unirte en la página de inicio o en la parte superior derecha de cualquier página de PCBWay'
									],
									[
										'2. Ingresa tu dirección de correo electrónico y establece y confirma tu contraseña de inicio de sesión, ¡luego comienza a comprar!'
									],
									[
										'"Nota": Asegúrate de ingresar la dirección de correo electrónico correcta, nuestro sistema actualmente solo reconoce caracteres del alfabeto inglés.'
									]
								]
							},
							{
								title: 'Mi cuenta no está disponible. ¿Qué puedo hacer?',
								contents: [
									['Hay muchas razones por las que tu cuenta puede estar no disponible, tales como:'],
									[
										'1. Auto-desactivación. En este caso, te sugerimos que registres una nueva cuenta o contactes a un representante de servicio/ventas.'
									],
									['2. Desactivada por violación de las reglas comerciales']
								]
							},
							{
								title: '¿Puedo ser distribuidor de mmwpcb?',
								contents: [
									[
										'Puedes visitar la información de contacto que enviaste mediante',
										'Conviértete en nuestro distribuidor',
										'y nos pondremos en contacto contigo para la cooperación.'
									]
								]
							}
						]
					},
					accountSettings: {
						title: 'Configuraciones de la cuenta',
						questions: [
							{
								title: 'Configuraciones de la cuenta',
								contents: [
									['¿Cómo cambio mi dirección de correo electrónico?'],
									['"Nota": No recomendamos cambiar tu dirección de correo electrónico con frecuencia.']
								]
							},
							{
								title: '¿Cómo cambio mi dirección de correo electrónico?',
								contents: [
									[
										'Clientes cuya antigua dirección de correo es incorrecta, o que no han recibido el correo electrónico de verificación, pueden enviar una solicitud de cambio de correo a través del formulario "Solicitar cambio de correo". El cliente debe completar la nueva dirección de correo electrónico y proporcionar la razón del cambio.'
									],
									['Aquí están los "pasos" específicos:'],
									['Paso "1": Configuración de la cuenta -> Cambiar correo electrónico']
								]
							},
							{
								title: '¿Cómo puedo usar mi dirección de correo electrónico para una nueva cuenta de PCBWay?',
								contents: [
									[
										'Si tienes varias cuentas de PCBWay y deseas vincular una dirección de correo electrónico existente a tu nueva cuenta, necesitas:'
									],
									[
										'1. Cambiar primero la dirección de correo de tu cuenta existente/antigua. En este momento, cada cuenta de PCBWay solo puede estar vinculada a una dirección de correo electrónico única.'
									],
									[
										'2. Después de que hayas actualizado con éxito la dirección de tu cuenta existente, puedes vincular tu nueva cuenta a la otra dirección de correo electrónico.'
									]
								]
							}
						]
					},
					mmwpcbRewards: {
						title: 'Recompensas MMWPCB',
						questions: [
							{
								title: '¿Cómo utilizo mis puntos de recompensa?',
								contents: [
									[
										'El club de miembros de MMWPCB tiene 6 niveles: V0, V1, V2, V3, V4, V5. El nivel en el que te encuentras determina los beneficios y privilegios a los que tienes derecho. Todos los compradores son automáticamente asignados a un nivel de membresía una vez que cumplen con los requisitos mínimos (ver la tabla a continuación).'
									],
									[
										'Detalles de los "beneficios":',
										'Miembro V0: 0% de descuento',
										'Miembro V1: 1% de descuento',
										'Miembro V2: 2% de descuento',
										'Miembro V3: 3% de descuento'
									]
								]
							},
							{
								title: '¿Cuáles son los privilegios del club de miembros de MMWPCB?',
								contents: [
									[
										'El club de miembros de MMWPCB tiene 6 niveles: V0, V1, V2, V3, V4, V5. El nivel en el que te encuentras determina los beneficios y privilegios a los que tienes derecho. Todos los compradores son automáticamente asignados a un nivel de membresía una vez que cumplen con los requisitos mínimos (ver la tabla a continuación).'
									],
									[
										'Detalles de los "beneficios":',
										'Miembro V0: 0% de descuento',
										'Miembro V1: 1% de descuento',
										'Miembro V2: 2% de descuento',
										'Miembro V3: 3% de descuento'
									]
								]
							},
							{
								title: 'Mis puntos de recompensa no se han agregado a mi cuenta. ¿Qué puedo hacer?',
								contents: [
									[
										'Para una introducción detallada sobre los puntos y frijoles de PCBWay y cómo ganarlos, haga clic en',
										'Introducción detallada sobre los puntos y frijoles de PCBWay',
										'para saber más.'
									],
									['Si los puntos aún no se han otorgado a tu cuenta, podría ser por alguna de las "razones":'],
									[
										'1. La orden no está en estado completado. Por favor verifica el estado de tu orden, ya que los puntos por hacer pedidos solo se otorgan una vez que la orden está completada.'
									]
								]
							}
						]
					}
				}
			}
		}
	}
};
