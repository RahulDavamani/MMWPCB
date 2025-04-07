import type { Lang } from './en';

export const es: Lang = {
	common: {
		yes: 'Sí',
		no: 'No',
		or: 'O',
		none: 'Ninguno',
		other: 'Otro',

		search: 'Buscar',
		sortBy: 'Ordenar por',
		typeHere: 'Escribe aquí...',
		pleaseEnterValue: 'Por favor ingrese un valor',

		warning: 'Advertencia',
		error: 'Error',

		add: 'Agregar',
		edit: 'Editar',
		save: 'Guardar',
		continue: 'Continuar',
		retry: 'Reintentar',
		cancel: 'Cancelar',
		close: 'Cerrar',
		remove: 'Eliminar',
		reset: 'Restablecer',

		upload: 'Subir',
		select: 'Seleccionar',
		home: 'Inicio',
		moreDetails: 'Más detalles',

		noResultsFound: 'No se encontraron resultados',
		notSelected: 'No seleccionado',

		page: 'Página',
		results: 'Resultados'
	},

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
		matteBlack: 'Negro Mate',
		matteGreen: 'Verde Mate',
		matteBlue: 'Azul Mate',
		matteRed: 'Rojo Mate',
		silver: 'Plata',
		silverWhite: 'Plata Blanca',
		silverGray: 'Plata Gris',
		metallic: 'Metálico',
		copper: 'Cobre',
		darkBlack: 'Negro Oscuro',
		transparent: 'Transparente'
	},

	user: {
		name: 'Nombre',
		firstName: 'Primer Nombre',
		lastName: 'Apellido',
		email: 'Correo Electrónico',
		phone: 'Número de Teléfono',
		password: 'Contraseña',
		profilePicture: 'Foto de Perfil'
	},

	navbar: {
		instantQuote: 'Cotización Instantánea',
		services: 'Productos y Servicios',
		capabilities: 'Capacidades',
		whyUs: '¿Por Qué Nosotros?',
		support: 'Soporte',
		adminPortal: 'Portal de Administrador',
		backToApp: 'Volver a la Aplicación',
		login: 'Iniciar sesión',
		i18n: {
			language: 'Idioma',
			currency: 'Moneda'
		},
		cart: {
			myCart: 'Mi Carrito',
			viewCart: 'Ver Carrito',
			proceedToCheckout: 'Proceder al Pago',
			loginViewCart: 'Inicie sesión para ver su carrito',
			cartEmpty: 'Su carrito está vacío',
			orderNow: 'Ordenar Ahora',
			subTotal: 'Subtotal'
		},
		user: {
			orders: 'Pedidos',
			serviceRequests: 'Solicitudes de servicio',
			profile: 'Perfil',
			settings: 'Configuración',
			logout: 'Cerrar sesión'
		}
	},

	login: {
		title: 'Iniciar sesión',
		loggingIn: 'Iniciando sesión',
		failedToLogin: 'Falló al iniciar sesión',
		loginSuccess: 'Has iniciado sesión con éxito',
		invalidEmail: 'Correo electrónico inválido',
		forgotPassword: '¿Olvidaste la Contraseña?',
		dontHaveAccount: '¿No tienes una cuenta?',
		signInGoogle: 'Iniciar sesión con Google'
	},

	signup: {
		title: 'Registrarse',
		signingup: 'Registrándose',
		failedToSignup: 'Falló al registrarse',
		signupSuccess: 'Te has registrado con éxito',
		verifyOtp: 'Verificar OTP',
		otpSent: 'OTP ha sido enviado por correo electrónico a',
		otpFailed: 'Falló al enviar OTP',
		incorrectOTP: 'OTP incorrecto',
		enterOtp: 'Por favor ingresa el OTP enviado a tu correo electrónico',
		didNotGetOtp: '¿No recibiste el OTP?',
		resendOtp: 'Reenviar OTP',
		notYourEmail: '¿No es tu correo electrónico?',
		changeEmail: 'Cambiar Correo Electrónico',
		invalidEmail: 'Correo electrónico inválido',
		confirmPassword: 'Confirmar Contraseña',
		passwordTooltip: 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números',
		invalidPassword: 'Contraseña inválida',
		passwordsDoNotMatch: 'Las contraseñas no coinciden',
		iAgree: 'Acepto registrarme',
		alreadyHaveAccount: '¿Ya tienes una cuenta?',
		signInGoogle: 'Iniciar sesión con Google'
	},

	forgotPassword: {
		forgotPassword: 'Olvidé mi Contraseña',
		enterEmail: 'Por favor ingresa tu correo electrónico y te enviaremos un OTP para restablecer la contraseña',
		backToLogin: 'Volver a Iniciar sesión',
		sendingOtp: 'Enviando OTP',
		otpSent: 'OTP ha sido enviado por correo electrónico a',
		otpFailed: 'Falló al enviar OTP',
		incorrectOTP: 'OTP incorrecto',
		enterOtp: 'Por favor ingresa el OTP enviado a tu correo electrónico',
		didNotGetOtp: '¿No recibiste el OTP?',
		resendOtp: 'Reenviar OTP',
		notYourEmail: '¿No es tu correo electrónico?',
		changeEmail: 'Cambiar Correo Electrónico',
		invalidEmail: 'Correo electrónico inválido',
		enterValidEmail: 'Por favor ingresa un correo electrónico válido',
		enterPassword: 'Por favor ingresa tu nueva contraseña',
		confirmPassword: 'Confirmar Contraseña',
		passwordTooltip: 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números',
		invalidPassword: 'Contraseña inválida',
		passwordsDoNotMatch: 'Las contraseñas no coinciden',
		enterSamePassword: 'Por favor ingresa la misma contraseña',
		resetPassword: 'Restablecer Contraseña',
		resettingPassword: 'Restableciendo Contraseña',
		resetPasswordFailed: 'Fallo al restablecer la contraseña',
		resetPasswordSuccess: 'Tu contraseña ha sido restablecida con éxito'
	},

	profile: {
		pageTitle: 'Perfil',
		myProfile: 'Mi Perfil',
		personalInformation: {
			title: 'Información Personal',
			editProfile: 'Editar Perfil',
			savingProfile: 'Guardando Perfil',
			saveProfileSuccess: 'Perfil guardado con éxito',
			saveProfileError: 'Fallo al guardar perfil'
		},
		addresses: {
			title: 'Direcciones de Entrega',
			newAddress: 'Nueva Dirección',
			noAddressFound: 'No se encontró ninguna dirección',
			removingAddress: 'Eliminando Dirección',
			removeAddressSuccess: 'Dirección eliminada con éxito',
			removeAddressError: 'Fallo al eliminar dirección'
		},
		upsertAddress: {
			addAddress: 'Agregar Dirección de Entrega',
			updateAddress: 'Actualizar Dirección de Entrega',
			nameError: 'Por favor ingresa tu nombre',
			phoneError: 'Por favor ingresa tu número de teléfono',
			addressLine1: 'Línea de Dirección 1',
			addressLine1Error: 'Por favor ingresa tu dirección',
			addressLine2: 'Línea de Dirección 2',
			city: 'Ciudad',
			cityError: 'Por favor ingresa tu ciudad',
			state: 'Estado',
			stateError: 'Por favor ingresa tu estado',
			country: 'País',
			countryError: 'Por favor ingresa tu país',
			postalCode: 'Código Postal',
			postalCodeError: 'Por favor ingresa tu código postal',
			savingAddress: 'Guardando Dirección',
			saveAddressSuccess: 'Dirección guardada con éxito',
			saveAddressError: 'Fallo al guardar dirección',
			addingAddress: 'Agregando Dirección',
			addAddressSuccess: 'Dirección agregada con éxito',
			addAddressError: 'Fallo al agregar dirección'
		}
	},

	home: {
		pageTitle: 'Inicio',
		instantQuote: 'Cotización Instantánea',
		quoteNow: 'Cotizar Ahora'
	},

	support: {
		title: 'Soporte',
		subtitle: 'Hola, ¿Cómo podemos ayudar?',
		quickLinks: {
			howToOrder: 'Cómo Ordenar',
			generateGerberFile: 'Generar Archivo Gerber',
			accountSettings: 'Configuraciones de Cuenta'
		},
		faqs: 'Preguntas Frecuentes',
		qa: 'Preguntas y Respuestas',
		moreTopics: 'Más Temas',
		sections: {
			myOrders: {
				title: 'Mis Órdenes',
				subsections: {
					ordering: {
						title: 'Ordenando',
						questions: [
							{
								title: '¿Cómo realizar pedidos de PCB y ensamblaje de PCB?',
								contents: [
									[
										'Comprar PCBs de',
										'MMWPCB.com',
										'es fácil y conveniente. Con solo unos pocos pasos, puedes disfrutar de servicios de prototipado de PCB de alta calidad a precios asequibles.'
									],
									['Video:', '¿Cómo hacer un pedido en línea en PCBWay? Guía en video de un minuto.'],
									['Paso 1: Haga clic en el tipo de servicio que desea. Por ejemplo: PCB.'],
									["Seleccione y complete las especificaciones, luego haga clic en el botón 'Calcular' para continuar."]
								]
							},
							{
								title: '¿Cómo hacer un pedido de ensamblaje de PCB (consulta)?',
								contents: [
									['Otro artículo de actualización(2022-02-25):', '¿Cómo subir consulta de ensamblaje de PCB (PCBA)'],
									['Hay 3 formas de hacer un pedido de ensamblaje de PCB.'],
									['1. Hacer pedidos de ensamblaje de PCB junto con el pedido de PCB.'],
									[
										'Puedes hacer clic en la',
										'Cotización Instantánea de PCB',
										'barra de navegación para entrar, después de realizar los pedidos de PCB, seleccionar el ensamblaje para completar los parámetros de servicio de ensamblaje. Haga clic en Calcular para seleccionar el precio, Agregar al Carrito y cargar archivos.'
									]
								]
							},
							{
								title: '¿Cómo hacer un pedido de CNC?',
								contents: [
									[
										"Además de los servicios de fabricación de PCB, PCBWay también ofrece servicios de mecanizado CNC, impresión 3D, fabricación de chapa metálica, moldeo por inyección y fundición al vacío. Cuando vayas al sitio web de PCBWay y luego hagas clic en la sección 'CNC/Impresión 3D', podrás ver las cinco páginas de cotización disponibles aquí. Los procesos de pedido de los cinco servicios son básicamente los mismos, excepto por algunos parámetros seleccionados. ¡Vamos a introducir el proceso de pedido de mecanizado CNC. ¡Ahora comencemos!"
									]
								]
							}
						]
					},
					leadTime: {
						title: 'Tiempo de Entrega',
						questions: [
							{
								title: '¿Cómo comprobar el tiempo estimado de finalización?',
								contents: [
									['Antes del Pago'],
									[
										"En la lista 'Esperando Pago', haga clic en el título del producto o 'Ver Detalle' para mostrar la caja de información del producto."
									],
									[
										'En esta caja, encontrarás el tiempo estimado de finalización, como se muestra en la imagen a continuación.'
									]
								]
							},
							{
								title: 'Política de combinación de órdenes, envío y pago',
								contents: [
									['¡Un Pago, Un Envío!'],
									[
										'1. El propósito de la combinación de pedidos es ahorrar en costos de envío. Si tu cronograma para tus PCBs no es ajustado, combina tus pedidos y envíalos juntos.'
									],
									[
										'2. Al combinar todos estos pedidos en un grupo y pagar ahora, confirmas que todos estos pedidos se enviarán juntos alrededor de [xx-xx-xx]. Esta es la fecha en la que podemos completar tu último pedido de PCB en este grupo de pedidos, y puede que necesitemos un tiempo adicional para que la empresa de express (sin servicio los domingos) recoja tu paquete.'
									]
								]
							},
							{
								title: '¿Cuándo se producirá el pedido express?',
								contents: [
									[
										"Desde que PCBWay lanzó el Servicio Express de 24 Horas, ha traído muchos beneficios a los clientes que a menudo tienen proyectos de PCB urgentes en su agenda. Sin embargo, también ha traído algunas quejas de clientes cuyos pedidos están retrasados. Debido a la naturaleza especial de los pedidos urgentes, las quejas de estos clientes son particularmente críticas. Los datos muestran que la mayoría de los 'retrasos' fueron causados por malos entendidos sobre el Express de 24 Horas."
									],
									[
										'1. Primero, definamos el Servicio Express de 24 Horas de PCBWay. El intervalo de tiempo es desde el inicio de la producción hasta la finalización de la producción. Cabe destacar que este tiempo no se cuenta desde el momento de tu pago.'
									],
									[
										'2. El pago debe realizarse antes de las 18:00 (GMT+8), o las disposiciones de producción se pospondrán un día.'
									]
								]
							}
						]
					},
					salesService: {
						title: 'Servicio de Ventas',
						questions: [
							{
								title: '¿Puedo cambiar a mi representante de ventas?',
								contents: [
									[
										'Cada uno de nuestros representantes de ventas ha sido capacitado profesionalmente. Si hay alguna deficiencia, esperamos que puedas proporcionar sugerencias y correcciones.'
									],
									[
										'Si no estás satisfecho con tu representante de ventas, por favor envía tus preguntas a service@mmwpcb.com para solicitar un reemplazo.'
									]
								]
							},
							{
								title: '¿Cómo encontrar mi representante de ventas para ayuda sobre el problema de PCB o PCBA?',
								contents: [
									[
										'Si tienes alguna pregunta, por favor contacta a tu representante de ventas o utiliza el Chat en Línea. Puedes encontrar su información de contacto de las siguientes maneras:'
									],
									[
										'1. En la esquina superior derecha de tu página de inicio o detrás del número de pedido, como indica las cajas rojas en la imagen a continuación;'
									],
									['2. En tu carrito de compras o lista de pedidos;']
								]
							},
							{
								title: '¿Qué hacer si el representante de ventas o el servicio post-venta no responde?',
								contents: [
									[
										'1. Puede ser que el sistema de correo anti-spam estén actuando, bloqueando el correo electrónico o enviándolo a la carpeta de spam. Por favor envía un seguimiento.'
									],
									['2. Si no han respondido en un plazo razonable y si tienes preguntas sobre un pedido, puedes:'],
									['a. Contactar a service@mmwpcb.com o feedback@mmwpcb.com para asistencia.'],
									['b. Abrir una disputa.']
								]
							}
						]
					}
				}
			},
			myAccount: {
				title: 'Mi Cuenta',
				subsections: {
					registeringSigningIn: {
						title: 'Registrándose e Iniciando Sesión',
						questions: [
							{
								title: '¿Cómo me registro en PCBWay?',
								contents: [
									[
										'1. Haga clic en Unirse en la página de inicio o en la esquina superior derecha de cualquier página de PCBWay.'
									],
									[
										'2. Introduzca su dirección de correo electrónico y establezca y confirme su contraseña de inicio de sesión, ¡luego comience a comprar!'
									],
									[
										'Nota: Asegúrate de ingresar la dirección de correo electrónico correcta. Nuestro sistema actualmente solo reconoce caracteres del alfabeto inglés.'
									]
								]
							},
							{
								title: 'Mi cuenta no está disponible. ¿Qué puedo hacer?',
								contents: [
									['Hay muchas razones por las que tu cuenta puede no estar disponible, tales como:'],
									[
										'1. Auto-desactivación. En este caso, sugerimos registrar una nueva cuenta o contactar al representante de servicio/ventas.'
									],
									['2. Desactivado debido a violaciones de las reglas comercial.']
								]
							},
							{
								title: '¿Puedo convertirme en un distribuidor de mmwpcb?',
								contents: [
									[
										'Puedes visitar la información de contacto enviada por',
										'Convertirse en nuestro Distribuidor',
										'y nos pondremos en contacto contigo para cooperación.'
									]
								]
							}
						]
					},
					accountSettings: {
						title: 'Configuraciones de Cuenta',
						questions: [
							{
								title: 'Configuraciones de Cuenta',
								contents: [
									['¿Cómo cambio mi dirección de correo electrónico?'],
									['Nota: No recomendamos que cambies tu dirección de correo electrónico con demasiada frecuencia.']
								]
							},
							{
								title: '¿Cómo cambio mi dirección de correo electrónico?',
								contents: [
									[
										"Los clientes que tienen una dirección de correo electrónico incorrecta o que no han recibido el correo de verificación. Pueden enviar una solicitud para cambiar el correo electrónico a través del formulario 'Solicitar Cambio de Correo Electrónico'. El cliente debe completar la nueva dirección de correo electrónico y proporcionar la razón para el cambio."
									],
									['Aquí están los pasos específicos:'],
									['Paso 1: Configuraciones de Cuenta -> Cambiar Correo Electrónico']
								]
							},
							{
								title: '¿Cómo puedo usar mi dirección de correo electrónico para una nueva cuenta de PCBWay?',
								contents: [
									[
										'Si tienes varias cuentas de PCBWay y te gustaría vincular una dirección de correo electrónico existente a tu nueva cuenta, debes:'
									],
									[
										'1. Cambiar primero la dirección de correo electrónico de tu cuenta existente/antigua. Por el momento, cada cuenta de PCBWay solo puede estar vinculada a una dirección de correo electrónico única.'
									],
									[
										'2. Después de haber actualizado con éxito la dirección de tu cuenta existente, puedes vincular tu nueva cuenta a la otra dirección de correo electrónico.'
									]
								]
							}
						]
					},
					mmwpcbRewards: {
						title: 'Recompensas MMWPCB',
						questions: [
							{
								title: '¿Cómo uso mis puntos de recompensa?',
								contents: [
									[
										'El Club de Miembros de MMWPCB tiene 6 niveles: V0, V1, V2, V3, V4, V5. El nivel en el que te encuentras determina los beneficios y privilegios a los que tienes derecho. Todos los compradores son automáticamente asignados a un nivel de membresía una vez que cumplen con los requisitos mínimos (ver la tabla a continuación).'
									],
									['Detalles de los beneficios:'],
									[
										'V0 Miembro 0% de descuento',
										'V1 Miembro 1% de descuento',
										'V2 Miembro 2% de descuento',
										'V3 Miembro 3% de descuento'
									]
								]
							},
							{
								title: '¿Cuáles son los privilegios del Club de Miembros de MMWPCB?',
								contents: [
									[
										'El Club de Miembros de MMWPCB tiene 6 niveles: V0, V1, V2, V3, V4, V5. El nivel en el que te encuentras determina los beneficios y privilegios a los que tienes derecho. Todos los compradores son automáticamente asignados a un nivel de membresía una vez que cumplen con los requisitos mínimos (ver la tabla a continuación).'
									],
									['Detalles de los beneficios:'],
									[
										'V0 Miembro 0% de descuento',
										'V1 Miembro 1% de descuento',
										'V2 Miembro 2% de descuento',
										'V3 Miembro 3% de descuento'
									]
								]
							},
							{
								title: 'Mis puntos de recompensa no se han agregado a mi cuenta. ¿Qué puedo hacer?',
								contents: [
									[
										'Para una introducción detallada sobre los Puntos y Granos de PCBWay y cómo ganarlos, haga clic en',
										'Introducción Detallada sobre los Puntos y Granos de PCBWay',
										'para aprender más.'
									],
									[
										'Si los puntos aún no se han acreditado a tu cuenta, puede deberse a una de las siguientes razones:'
									],
									[
										'1. El pedido no está en estado completado. Por favor verifica el estado de tu pedido, ya que los puntos por realizar pedidos solo se otorgan una vez que se completa el pedido.'
									]
								]
							}
						]
					}
				}
			}
		}
	},

	products: {
		standardPcb: 'PCB Estándar',
		advancedPcb: 'PCB Avanzado',
		flexiblePcb: 'PCB Flexible',
		rigidFlex: 'Rigid-Flex',
		assembly: 'Ensamblaje',
		stencil: 'Plantilla SMD',
		cnc: 'Mecanizado CNC',
		sheetMetal: 'Chapa Metálica',
		threePrinting: 'Impresión 3D',
		injectionMolding: 'Moldeo por Inyección',
		vacuumCasting: 'Fundición al Vacío'
	},

	shipping: {
		shippingEstimate: 'Estimación de Envío',
		shippingInfo: 'Información de Envío',
		selectShippingMethod: 'Seleccionar Método de Envío',
		shippingTo: 'Envío a',
		selectCountry: 'Seleccionar País',
		shippingMethod: 'Método de Envío',
		price: 'Precio',
		deliveryTime: 'Tiempo de Entrega',
		days: 'Días',
		country: 'País',
		method: 'Método',
		weight: 'Peso',
		shippingCost: 'Costo de Envío',
		noShippingMethods: 'No hay Métodos de Envío Disponibles',
		updatingShipping: 'Actualizando Método de Envío',
		updateShippingError: 'Fallo al actualizar la información de envío',
		updateShippingSuccess: 'Información de envío actualizada con éxito'
	},

	orders: {
		pageTitle: 'Mis Pedidos',
		allOrders: 'Todos los Pedidos',
		viewCart: 'Ver Carrito',
		fetchingOrders: 'Obteniendo pedidos',
		noOrders: 'No se encontraron pedidos',
		checkFilters: 'Verifica tus filtros o empieza a explorar para encontrar lo que necesitas!',
		getInstantQuote: 'Obtener Cotización Instantánea',
		orderNo: 'Número de Pedido',
		createdBy: 'Creado por',
		deliveryAddress: 'Dirección de Entrega',
		products: 'Productos',
		orderDetails: 'Detalles del Pedido',
		finalPrice: 'Precio Final',
		quotePrice: 'Precio Cotizado'
	},

	order: {
		pageTitle: 'Orden',
		allOrders: 'Todas las Órdenes',
		myCart: 'Mi Carrito',
		orderId: 'ID de Orden',

		applyDiscount: {
			applyingDiscount: 'Aplicando descuento',
			applyDiscountError: 'Error al aplicar el descuento',
			applyDiscountSuccess: 'Descuento aplicado con éxito'
		},
		removeDiscount: {
			removingDiscount: 'Eliminando descuento',
			removeDiscountError: 'Error al eliminar el descuento',
			removeDiscountSuccess: 'Descuento eliminado con éxito'
		},

		submitReview: {
			noProducts: 'No hay productos en el carrito',
			shippingError: 'La información de envío no está proporcionada',
			deliveryError: 'La dirección de entrega no está proporcionada',
			filesNotUploaded: 'Los archivos del producto no están subidos',
			submittingOrder: 'Enviando Orden',
			submitOrderError: 'Fallo al enviar la orden',
			submitOrderSuccess: 'Orden enviada con éxito'
		},
		saveOrder: {
			savingOrder: 'Guardando Orden',
			saveOrderError: 'Fallo al guardar la orden',
			saveOrderSuccess: 'Orden guardada con éxito'
		},
		cancelReview: {
			cancellingReview: 'Cancelando Revisión',
			cancelReviewError: 'Fallo al cancelar revisión',
			cancelReviewSuccess: 'Revisión cancelada con éxito'
		},
		approveReview: {
			noWeightError: 'El peso del producto no está proporcionado',
			noEstDeliveryDateError: 'La fecha estimada de entrega no está proporcionada',
			noPriceError: 'Actualiza los precios del producto',
			noCountryError: 'El país de envío no está proporcionado',
			approvingReview: 'Aprobando revisión',
			approveReviewError: 'Error al aprobar la revisión',
			approveReviewSuccess: 'Revisión aprobada con éxito'
		},
		rejectReview: {
			rejectingReview: 'Rechazando Revisión',
			rejectReviewError: 'Fallo al rechazar revisión',
			rejectReviewSuccess: 'Revisión rechazada con éxito'
		},
		startFabrication: {
			startingFabrication: 'Iniciando Fabricación',
			startFabricationError: 'Fallo al iniciar fabricación',
			startFabricationSuccess: 'Fabricación iniciada con éxito'
		},
		updateFabrication: {
			completingFabrication: 'Actualizando el Progreso de Fabricación',
			updateFabricationError: 'Fallo al actualizar el progreso de fabricación',
			updateFabricationSuccess: 'Progreso de fabricación actualizado con éxito'
		},
		completeFabrication: {
			completingFabrication: 'Completando Fabricación',
			completeFabricationError: 'Fallo al completar la fabricación',
			completeFabricationSuccess: 'Fabricación completada con éxito'
		},
		updateDelivery: {
			updatingDelivery: 'Actualizando el Progreso de Entrega',
			updateDeliveryError: 'Fallo al actualizar el progreso de entrega',
			updateDeliverySuccess: 'Progreso de entrega actualizado con éxito'
		},
		updateTracking: {
			updatingTracking: 'Actualizando información de seguimiento',
			updateTrackingError: 'Error al actualizar la información de seguimiento',
			updateTrackingSuccess: 'Información de seguimiento actualizada con éxito'
		},
		completeOrder: {
			completingOrder: 'Completando Orden',
			completeOrderError: 'Fallo al completar la orden',
			completeOrderSuccess: 'Orden completada con éxito'
		},
		orderMessage: {
			saved: {
				title: 'Este pedido está guardado como borrador',
				description: 'Aún no ha sido enviado para revisión'
			},
			review: {
				title: 'Tu orden ha sido enviada para revisión',
				button: 'Cancelar Revisión'
			},
			rejected: {
				title: 'Tu revisión de la orden ha sido rechazada',
				description: 'Verifique los mensajes de revisión para más detalles',
				button: 'Enviar Nuevamente Para Revisión'
			},
			approved: {
				title: 'Tu revisión de la orden ha sido aprobada',
				description: 'Verifica los precios actualizados y procede al pago',
				button: 'Proceder al Pago'
			},
			confirmed: {
				title: '¡Pago Exitoso!',
				description: 'Tu orden está confirmada y ahora se está procesando'
			},
			fabrication: {
				title: 'Fabricación en progreso',
				description: 'Verifica el estado del progreso de cada producto'
			},
			delivery: {
				title: 'Entrega en progreso',
				description: 'Tu orden está en camino',
				button: 'Rastrear Entrega'
			},
			completed: {
				title: '¡Orden Completada!',
				description: 'Gracias por comprar con nosotros'
			}
		},
		deliveryAddress: {
			title: 'Dirección de Entrega',
			selectAddress: 'Seleccionar Dirección de Entrega',
			noAddressFound: 'No se encontró ninguna dirección',
			failedToGetAddress: 'Fallo al obtener dirección',
			updatingAddress: 'Actualizando Dirección',
			selectAddressError: 'Fallo al seleccionar dirección de entrega',
			selectAddressSuccess: 'Dirección de entrega seleccionada con éxito'
		},
		productsTable: {
			products: 'Productos',
			addProduct: 'Agregar Producto',
			noProductFound: 'No se encontró ningún producto',
			product: 'Producto',
			buildTime: 'Tiempo de Construcción',
			quantity: 'Cantidad',
			file: 'Archivo',
			files: 'Archivos',
			quotePrice: 'Precio de Cotización',
			finalPrice: 'Precio Final',
			details: 'Detalles',
			edit: 'Editar',
			uploaded: 'Subido',
			notUploaded: 'No Subido',
			viewProgress: 'Ver Progreso',
			productDetails: {
				title: 'Detalles del Producto',
				failedToFetch: 'Fallo al obtener detalles del producto'
			},
			fabrication: {
				title: 'Fabricación',
				fabricationProgress: 'Progreso de Fabricación',
				notStarted: 'Fabricación No Comenzada',
				completed: 'Fabricación Completada'
			}
		},
		reviewMessages: {
			title: 'Mensajes de Revisión',
			failedToSend: 'Fallo al enviar mensaje',
			noMessages: 'No hay Mensajes, aún',
			conversationClosed: 'Esta conversación está cerrada'
		},
		orderSummary: {
			title: 'Resumen de la Orden',
			itemsCost: 'Costo de Artículos',
			shippingCost: 'Costo de Envío',
			discount: 'Descuento',
			taxes: 'Impuestos',
			orderTotal: 'Total de la Orden',
			promoCode: 'Código Promocional',
			apply: 'Aplicar',
			estDeliveryDate: 'Fecha Estimada de Entrega',
			estDeliveryDateDesc:
				'La fecha de envío estimada se calcula en base al artículo con el tiempo de construcción más largo en tu orden. Por favor ten en cuenta que esta fecha es solo para referencia. Si tu orden requiere confirmación, la fecha de envío puede estar sujeta a extensión.',
			weight: 'Peso',
			weightDesc:
				'El peso aquí se calcula en base al valor más grande del peso bruto y el peso volumétrico, el cual es estimado para referencia. Si el peso real difiere de la estimación, el costo de envío puede ajustarse de acuerdo.',
			submitOrderForReview: 'Enviar Orden para Revisión',
			saveOrder: 'Guardar Orden'
		},
		payment: {
			title: 'Detalles de Pago',
			transactionId: 'ID de Transacción',
			paymentTime: 'Tiempo de Pago',
			paymentMethod: 'Método de Pago',
			totalAmount: 'Monto Total',
			failedToGenerateToken: 'Fallo al generar token de pago',
			failedToSubmit: 'Fallo al enviar pago',
			checkout: 'Pagar',
			amountToBePaid: 'Monto a Pagar',
			paymentSuccess: 'Pago Exitoso',
			paymentTotal: 'Total de Pago',
			print: 'Imprimir',
			payNow: 'Pagar Ahora',
			cancelPayment: 'Cancelar Pago'
		},
		removeProduct: {
			modalTitle: '¿Estás seguro de eliminar este producto?',
			modalTitleAll: '¿Estás seguro de eliminar todos los productos?',
			modalBody: 'Esta acción no se puede deshacer',
			removingProduct: 'Eliminando Producto',
			removingProductAll: 'Eliminando Todos los Productos',
			removeProductError: 'Fallo al eliminar producto',
			removeProductAllError: 'Fallo al eliminar todos los productos',
			removeProductSuccess: 'Producto eliminado con éxito',
			removeProductAllSuccess: 'Todos los productos eliminados con éxito'
		},
		removeOrder: {
			title: 'Eliminar Orden',
			description:
				'Esta acción eliminará permanentemente la orden y toda su información relacionada. Esta acción no se puede deshacer, por favor proceda con precaución.',
			modalTitle: '¿Estás seguro de eliminar esta orden?',
			modalBody: 'Esta acción no se puede deshacer',
			removingOrder: 'Eliminando Orden',
			removeOrderError: 'Fallo al eliminar la orden',
			removeOrderSuccess: 'Orden eliminada con éxito'
		},
		trackDelivery: 'Rastrear Entrega'
	},

	orderStatus: {
		CREATED: 'Orden Creada',
		CART: 'Carrito',
		SAVED: 'Guardado como Borrador',
		REVIEW: 'En Revisión',
		REJECTED: 'Revisión Rechazada',
		APPROVED: 'Revisión Aprobada',
		PAYMENT: 'Pago',
		CONFIRMED: 'Orden Confirmada',
		FABRICATION: 'En Fabricación',
		DELIVERY: 'Envío y Entrega',
		COMPLETED: 'Orden Completada',
		CANCELLED: 'Orden Cancelada',
		REFUNDED: 'Reembolsado'
	},

	instantQuote: {
		pageTitle: 'Cotización Instantánea',
		specification: 'Especificaciones',

		upsertProduct: {
			uploadingFiles: 'Cargando Archivos',
			savingCart: 'Guardando en el Carrito',
			addingOrder: 'Agregando a la Orden',
			updatingProduct: 'Actualizando Especificaciones del Producto',
			uploadFileError: 'Error al cargar el archivo',
			saveCartError: 'Error al guardar en el carrito',
			addOrderError: 'Error al agregar a la orden',
			updateProductError: 'Error al actualizar el producto',
			saveCartSuccess: 'Producto guardado en el carrito',
			addOrderSuccess: 'Producto agregado a la orden',
			updateProductSuccess: 'Producto actualizado con éxito',
			postOrderModal1: {
				title: 'Servicios adicionales para su pedido de PCB',
				body: '¿Necesita servicios de ensamblaje o prueba para su PCB?'
			},
			postOrderModal2: {
				title: 'Complete su pedido con servicios de prueba',
				body: '¿Le gustaría agregar servicios de prueba?'
			},
			goToOrder: 'Ir al pedido',
			addAssembly: 'Agregar ensamblaje',
			addTestingServices: 'Agregar servicios de prueba'
		},

		pricing: {
			title: 'Precios y Tiempo de Fabricación',
			weight: 'Peso',
			buildTime: 'Tiempo de Fabricación',
			chargeDetails: 'Detalles de Cargos',
			total: 'Total',
			saveProduct: 'Guardar Producto',
			saveToCart: 'Guardar en el Carrito',
			addToOrder: 'Agregar a la Orden',
			loginToContinue: 'Inicia sesión para continuar'
		},

		gerberFile: {
			title: 'Archivo Gerber',
			description: 'Por favor, suba el archivo Gerber de su producto (solo acepta .zip, .rar)'
		},

		designFile: {
			title: 'Archivo de Diseño',
			description: 'Por favor, suba el archivo de diseño de su producto (solo acepta .zip, .rar)'
		},

		fileDrop: {
			dragDrop: 'Arrastra y suelta tus archivos aquí o haz clic para subirlos',
			onlyAccepts20: 'Solo acepta ZIP o RAR | Tamaño máximo: 20 MB',
			onlyAccepts200: 'Solo acepta ZIP o RAR | Tamaño máximo: 200 MB',
			file: 'Archivo',
			files: 'Archivos',
			added: 'Añadido',
			belowFiles: 'A continuación, los archivos que has añadido'
		},

		standardPcb: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Creado en'
			},
			updatedAt: {
				title: 'Actualizado en'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor ingrese un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			buildTime: {
				title: 'Tiempo de fabricación'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			boardType: {
				title: 'Tipos de placa',
				description:
					'Las PCBs se enviarán en piezas individuales o en panel. Para pedidos de ensamblaje a granel (cantidad superior a 30), recomendamos el envío en panel, lo que mejorará la eficiencia del ensamblaje y reducirá los costos.',
				values: {
					singlePieces: 'Piezas individuales',
					panelByCustomer: 'Panel del cliente',
					panelByVelenova: 'Panel de Velenova'
				}
			},
			xoutAllowance: {
				title: 'Permiso de X-out en el panel',
				description:
					'Puede haber PCBs defectuosas en el panel, la cotización aumentará aproximadamente un 30% si no se acepta el permiso de X-out.',
				values: {
					accept: 'Aceptar',
					decline: 'Rechazar'
				}
			},
			routeProcess: {
				title: 'Proceso de enrutamiento',
				description: 'En el panel, las PCBs están conectadas como se muestra en el siguiente diagrama:',
				values: {
					velenovaPrefer: 'Panel según preferencias de Velenova',
					vScoring: 'Panel según V-Scoring',
					tabRoute: 'Panel según Tab Route',
					vScoringTabRoute: 'Ambos: V-Scoring y Tab Route'
				}
			},
			breakAwayRail: {
				title: 'Riel desprendible',
				description:
					'Los rieles desprendibles son bordes de placas en tira largos colocados para dejar espacio de transmisión durante el ensamblaje y colocar el punto de marca en el panel. Las PCBs se transmiten a través del riel guía en la línea de producción de ensamblaje, por lo tanto, se debe dejar un par de bordes que prohíban la colocación de componentes como el borde de transmisión. El ancho del riel desprendible es generalmente entre 5 y 8 mm.'
			},
			panelRequirements: {
				title: 'Requisitos del panel',
				disclaimer:
					'(ejemplo: panel de 2*3, tamaño del riel desprendible, total de 5 paneles = total de 30 placas individuales)'
			},
			differentDesign: {
				title: 'Diseños diferentes en el panel',
				description:
					'Esto significa que hay diferentes diseños en sus archivos separados por cortes en V, agujeros de estampado, ranuras fresadas u otros. Cobramos un costo adicional de panel si hay diferentes tipos de diseños de PCB en un solo archivo Gerber.',
				error: 'El diseño diferente debe ser mayor a 0'
			},
			size: {
				title: 'Tamaño (único)',
				description:
					'El tamaño de la placa se refiere a la longitud y el ancho de la placa pedida por el cliente. Si es una placa circular, la longitud y el ancho son el diámetro del círculo; si es una placa de forma irregular, la longitud y el ancho se miden según el rango de forma más grande.',
				error: 'La longitud y el ancho deben ser mayores a 0'
			},
			length: {
				title: 'Longitud'
			},
			width: {
				title: 'Ancho'
			},
			quantity: {
				title: 'Cantidad (única)',
				description:
					'Por favor, elija el número de piezas individuales que necesita. Para PCB estándar, la cantidad mínima es de 5 piezas.',
				error: 'La cantidad debe ser mayor a 0',
				placeholder: 'Cantidad',
				pieces: 'Piezas'
			},
			layers: {
				title: 'Capas',
				description:
					'El número de capas de cobre en la placa. MMWPCB puede producir actualmente hasta 60 capas, si necesita más de 14 capas, seleccione la página de PCB avanzados para la valoración.',
				layer: 'Capa',
				layers: 'Capas'
			},
			copperLayer: {
				title: 'Capa de cobre',
				description:
					'Al pedir PCB de 1 capa, por favor especifique si la capa de circuito está en la parte superior, en la parte inferior o ninguna. Asegúrese de seleccionar los parámetros correctos, de lo contrario, necesitaremos contactarlo para reconfirmar.',
				values: {
					topLayer: 'Capa superior',
					bottomLayer: 'Capa inferior'
				}
			},
			solderMask: {
				title: 'Máscara de soldadura',
				description:
					'Es un material de recubrimiento utilizado para enmascarar o proteger un área seleccionada. Al pedir PCB de 1 capa, por favor especifique si la máscara de soldadura está en la parte superior, en la parte inferior o en ambos lados. Cuando solo se elige un lado para la máscara de soldadura, el otro lado estará completamente expuesto con la apertura de la máscara de soldadura. Asegúrese de seleccionar los parámetros correctos, de lo contrario, necesitaremos contactarlo para reconfirmar.',
				values: {
					topSide: 'Lado superior',
					bottomSide: 'Lado inferior',
					bothSides: 'Ambos lados'
				}
			},
			silkscreen: {
				title: 'Serigrafía',
				description:
					'La serigrafía es una capa de tinta utilizada para identificar los componentes del PCB, marcas, logotipos, símbolos, etc. Al pedir PCB de 1 capa, por favor especifique en qué capa está la serigrafía.',
				values: {
					topSide: 'Lado superior',
					bottomSide: 'Lado inferior',
					bothSides: 'Ambos lados'
				}
			},
			material: {
				title: 'Material',
				description:
					'FR4 es el material dieléctrico más común utilizado en la fabricación de placas de circuitos. Las placas de aluminio tienen una mejor disipación de calor y transferencia térmica que las construcciones estándar de FR-4. Las placas de base de cobre tienen una gran conductividad térmica, mejor que las PCB de aluminio. Debido a sus características de baja pérdida dieléctrica, Rogers se utiliza a menudo en PCB de alta frecuencia. Si necesita otros materiales, comuníquese con su representante de ventas.',
				disclaimer: '*El modelo de material puede ser anotado a continuación. HDI está disponible para 4 capas o más.',
				values: {
					fr4: 'FR-4',
					aluminum: 'Aluminio',
					rogers: 'Rogers',
					hdi: 'HDI (Vías enterradas/cegadas)',
					copperBase: 'Base de cobre'
				}
			},
			fr4TG: {
				title: 'FR4-TG',
				description:
					'TG significa Temperatura de Transición Vítrea. TG ordinaria es de 130 °C o más, TG media es de aproximadamente superior a 150 °C, y TG avanzada generalmente es mayor a 170 °C. Cuanto mayor es la TG, mejor es la resistencia térmica del material. El material por defecto de MMWPCB tiene un TG de 150-160 °C, que es más alto que la mayoría de las empresas.',
				disclaimer:
					'*El material de base con alta TG tiene buena resistencia al CAF, alta resistencia al calor, estabilidad dimensional y es adecuado para el proceso de soldadura sin plomo.'
			},
			rogers: {
				title: 'Rogers',
				description:
					'La serie Rogers RO4000 ha estado en una posición de liderazgo en la industria. Este material de baja pérdida es ampliamente utilizado en diseños de frecuencia de microondas y milímetros. En comparación con el material PTFE tradicional, es más fácil de usar en la fabricación de circuitos y tiene un rendimiento estable y consistente. Actualmente, 4003C y 4350B están disponibles para MMWPCB. Si necesita otros modelos, comuníquese con su representante de ventas.'
			},
			thermalConductivity: {
				title: 'Conductividad térmica',
				description:
					'La conductividad térmica de PCB de aluminio/base de cobre es la medida de la capacidad del material para conducir el calor lejos de una fuente. Generalmente se mide en vatios por metro Kelvin (W/mK) y comúnmente se denota por k, λ, o K.'
			},
			thermoElectricSeparation: {
				title: 'Separación termoeléctrica',
				description:
					'La separación termoelectrica significa que los pads conductores térmicamente en el sustrato de cobre y los pads conductores eléctricamente están separados, lo que puede ayudar a lograr el mejor efecto de conducción y disipación de calor. Mostrado como a continuación:'
			},
			structureOfMCPCB: {
				title: 'Estructura de MCPCB',
				description:
					'Esto es para placas de sustrato metálico de doble cara/multicapa (Aluminio o Base de Cobre). Hay dos estructuras para elegir según si la base metálica está en el medio o en la parte inferior.',
				values: {
					metalCoreMiddle: 'Núcleo metálico en el medio',
					metalBaseBottom: 'Base metálica en la parte inferior'
				}
			},
			thickness: {
				title: 'Espesor',
				description:
					'Para materiales ordinarios, el grosor de la placa se refiere al grosor del PCB una vez completada la producción, y el error es de aproximadamente un 10% (+/-10% (T>=1mm) o +/- 0.1mm (T<1mm)). El error se debe principalmente al máscara de soldadura y la deposición de cobre. Si hay otros requisitos para el error de espesor, por favor haga una nota en Otros requisitos especiales. Nota: Para la placa Rogers de un solo/doble cara, el grosor se refiere al grosor del sustrato.',
				error: 'El grosor debe ser mayor que 0'
			},
			minTrack: {
				title: 'Min Track/Espaciado',
				description:
					'Ancho mínimo de la traza de cobre y distancia mínima entre dos trazas. Los ingenieros de MMWPCB revisarán de nuevo el Min Track/Espaciado.'
			},
			minHoleSize: {
				title: 'Tamaño mínimo del agujero',
				description:
					'Diámetro mínimo de los agujeros. Los ingenieros de MMWPCB revisarán de nuevo el tamaño mínimo del agujero.',
				noDrill: 'Sin taladrar'
			},
			solderMaskColor: {
				title: 'Máscara de soldadura',
				description:
					'El color de la máscara de soldadura se refiere al color de la superficie del PCB. Actualmente, MMWPCB proporciona 9 colores convencionales de máscara de soldadura. Si necesita rosa, gris, naranja o transparente, dirígete a la página de PCB avanzados para elegir.'
			},
			silkscreenColor: {
				title: 'Serigrafía',
				description:
					'La serigrafía es una capa de tinta utilizada para identificar los componentes del PCB, marcas, logotipos, símbolos, etc. El color es generalmente blanco. Pero cuando la tinta de la máscara de soldadura es blanca, la serigrafía será negra.'
			},
			uvPrinting: {
				title: 'Impresión UV multicolor',
				description: '',
				descriptionDetail: {
					title1: 'Requisitos para realizar un pedido',
					body1: 'Tamaño máximo para una pieza única: 270*470MM',
					body2: 'Selección del color de máscara de soldadura.',
					title2: 'Especificaciones de diseño',
					body3:
						'Evite colocar caracteres de color en áreas con aberturas de máscara de soldadura, como almohadillas de montaje en superficie o almohadillas de perforación.',
					body4:
						'Se pueden proporcionar caracteres de color a través de imágenes de referencia y mapas de alineación de referencia (para la alineación conveniente con el PCB) sin necesidad de diseñarlos en archivos Gerber. Sin embargo, si opta por incluir caracteres de color en los archivos Gerber, asegúrese de que estén ubicados en la capa de serigrafía y anotados con colores.',
					disclaimer:
						'* Por favor envíe las imágenes que desea imprimir en el PCB en los siguientes formatos: AI, PDF, JPEG, PNG, TIFF, etc., e indique su ubicación de impresión deseada en la placa.'
				},
				disclaimer: '*El archivo PCB subido debe contener renderizados en color.',
				values: {
					singleSidedTop: 'Un solo lado: Superior',
					singleSidedBottom: 'Un solo lado: Inferior',
					doubleSided: 'Doble cara'
				}
			},
			edgeConnector: {
				title: 'Conector de borde',
				description:
					"Los conectores de borde logran la conexión eléctrica al contactar los dedos dorados en el PCB. Si su diseño incluye dedos dorados, marque 'Sí' para este elemento y seleccione el método de acabado de superficie y el ángulo de chaflán. De lo contrario, marque 'No'."
			},
			surfaceFinish: {
				title: 'Acabado de superficie',
				description:
					'El acabado de superficie es una parte importante de la producción de PCB. Puede proteger el cobre de la oxidación, lo que haría que el PCB no fuera utilizable. Además, proporciona una superficie lisa para soldar los componentes.',
				values: {
					immersionGold: 'Inmersión en oro (ENIG)',
					osp: 'OSP',
					immersionTin: 'Inmersión en estaño',
					enepig: 'ENEPIG',
					plainCopper: 'Cobre desnudo / Ninguno'
				},
				acceptHASLChange:
					'Marcar significa que acepta que podemos cambiar "HASL" a "ENIG" a nuestra discreción sin cargo adicional.'
			},
			surfaceFinishLayer: {
				title: 'Capa de acabado de superficie',
				description: 'Por favor, seleccione la capa de acabado de superficie que necesita.',
				values: {
					singleSide: 'Una sola cara',
					doubleSide: 'Doble cara'
				}
			},
			finishedCopper: {
				title: 'Cobre terminado',
				description:
					'El peso en onzas de cobre en un pie cuadrado de PCB, esta opción determinará el grosor del cobre en las capas externas. MMWPCB proporciona un grosor de cobre en las capas externas de 1 a 13 oz. Los agujeros PTH o vías que se cortan para crear un agujero parcial o medio para formar una abertura en el lado del barril del agujero. Generalmente, se utilizan para montar una PCB en otra.',
				disclaimer:
					'*Requisito de Min Track/Espaciado: ≥ 3/3mil para pedidos de muestras, o ≥ 3.5/3.5mil para pedidos al por mayor.',
				bareBoard: 'Placa desnuda'
			},
			innerCopper: {
				title: 'Cobre interior',
				description:
					'El peso de cobre en las capas internas para PCBs multicapa. El peso de cobre interior por defecto es de 1 oz.',
				disclaimer:
					'*Requisito de Min Track/Espaciado: ≥ 3/3mil para pedidos de muestras, o ≥ 3.5/3.5mil para pedidos al por mayor.'
			},
			removeProductNo: {
				title: 'Eliminar el número de producto',
				description:
					'MMWPCB agregará nuestro número de producto en el PCB para distinguir sus PCBs de los demás. Si desea eliminarlo, habrá un cargo adicional de 1.5 $. Si desea colocarlo en una ubicación específica, indique la ubicación agregando el texto "MMWPCB" en la capa de serigrafía y no habrá cargo adicional por esta opción.',
				values: {
					no: 'No',
					yes: 'Sí (costo adicional + 1.5 $)',
					specifyLocation: 'Especificar una ubicación'
				}
			},
			peelableSolderMask: {
				title: 'Máscara de soldadura pelable',
				description:
					'También conocida como máscara pelable azul, se utiliza para proteger los pads de soldadura requeridos durante el ensamblaje y se refiere generalmente como GTPM y GBPM en diseño. A diferencia de la máscara de soldadura verde, que es una imagen negativa y está presente de forma permanente en el PCB en el diseño de PCB, la Máscara de Soldadura Pelable es una imagen positiva (Lo que ve es lo que obtiene en su diseño) y se utiliza temporalmente para la fabricación y ensamblaje de PCB. El material de recubrimiento se puede quitar después de la soldadura por ola.',
				values: {
					topSide: 'Lado superior',
					bottomSide: 'Lado inferior',
					bothSides: 'Ambos lados'
				}
			},
			holeCopperThickness: {
				title: 'Grosor de cobre en agujero',
				description: 'Por favor, seleccione el grosor de cobre en agujero que necesita.'
			},
			ulMarking: {
				title: 'Marcado UL',
				description:
					'MMWPCB ha obtenido la certificación UL, por favor seleccione agregar el logotipo correspondiente en la capa que necesita. Agregaremos el logotipo JDB-D si es una placa de dos capas, y agregaremos JDB-M si es una placa multicapa. Para PCB de base metálica de una sola capa, agregaremos el UL correspondiente (JDB-A1, JDB-A2, JDB-A3) según se requiera.',
				values: {
					topSilkscreen: 'Sí - agregar a la serigrafía superior',
					bottomSilkscreen: 'Sí - agregar a la serigrafía inferior',
					topSolderMask: 'Sí - agregar a la máscara de soldadura superior',
					bottomSolderMask: 'Sí - agregar a la máscara de soldadura inferior',
					topCopper: 'Sí - agregar al cobre superior',
					bottomCopper: 'Sí - agregar al cobre inferior',
					default: 'Sí - según el defecto de MMWPCB'
				}
			},
			dateCode: {
				title: 'Código de fecha',
				description: 'Agregar el tiempo de producción en el PCB',
				placeholder: 'Por ejemplo: código de fecha en el formato WWYY en la capa de serigrafía superior',
				values: {
					velenovaPrefer: 'Agregar como prefiera Velenova',
					customerRequired: 'Agregar como requiera el cliente',
					updateDesignedDateCode: 'Actualizar el código de fecha diseñado'
				}
			},
			dateCodeDescription: {
				title: 'Descripción del código de fecha'
			},
			customizedServices: {
				title: 'Servicios personalizados y opciones avanzadas',
				description:
					'Podríamos añadir costos adicionales para estas opciones especiales que se confirmarán después de la revisión.',
				values: {
					halfCut: {
						title: 'Corte a media profundidad / Agujeros en castellado',
						description:
							'Los agujeros PTH o vías que son cortados para crear un agujero parcial o medio para formar una abertura en el lado del barril del agujero. Generalmente se utilizan para montar un PCB en otro.'
					},
					edgePlating: {
						title: 'Platinado de bordes',
						description:
							'El platinado de bordes de PCB se refiere a la metalización de los lados de una placa de circuito impreso a lo largo de su altura. Puede realizar un platinado de bordes en uno de los bordes de la placa o en todos. A través del platinado de bordes, se equipa la placa con una conexión confiable y rigidez.'
					},
					impedanceControl: {
						title: 'Control de impedancia',
						description:
							'Los conductores en un PCB llevan diversas señales, y para aumentar su velocidad de transmisión, su frecuencia debe ser elevada. Sin embargo, factores como el grabado, el grosor de las capas y el ancho de línea pueden causar variaciones de impedancia en el PCB, llevando a la distorsión de la señal. Por lo tanto, para los conductores de PCB de alta velocidad, sus valores de impedancia deben ser controlados dentro de un cierto rango, conocido como "control de impedancia". La tolerancia de impedancia es generalmente de ±10%. Si se especifican requisitos de impedancia en la documentación pero no se seleccionan en el pedido, se considerará que se ignoran los requisitos de impedancia.'
					},
					halogenFree: {
						title: 'Libre de halógenos',
						description:
							'De acuerdo a la norma JPCA-ES-01-2003, un laminado de cobre con un contenido de cloro (Cl) y un contenido de bromo (Br) inferior al 0.09 % Wt (por peso) cada uno y la cantidad total de CI+Br ≤ 0.15 % [1500PPM] se define como un laminado de cobre libre de halógenos.'
					},
					customStackup: {
						title: 'Apilamiento personalizado',
						description:
							'Aplica solo a PCBs multicapa. Si necesita personalizar un apilamiento específico, por favor cargue el archivo de apilamiento junto o contacte a su representante de ventas.'
					},
					carbonInk: {
						title: 'Tinta de carbono',
						description:
							'También llamada PCB de tinta de carbono. El PCB de tinta de carbono se recubre en el sustrato PCB con tinta conductora a base de carbono (denominada tinta de carbono), curada para formar un PCB con un patrón conductor de película de carbono. El PCB de tinta de carbono tiene las ventajas de bajo costo, fuerte capacidad de control de impedancia, alta fiabilidad y buena resistencia a la corrosión.'
					},
					allViasFilled: {
						title: 'Todas las vías rellenadas con resina y cubiertas',
						description:
							'Si marca esta opción, todas las vías se rellenarán con resina, luego se cubrirán y se recubrirán.'
					},
					viaInPad: {
						title: 'Via en el pad',
						description:
							'Si hay vías en el pad en su diseño, es decir, vías en el pad SMD, marque esta opción y realizaremos un tapón de resina, luego cubriremos y recubriremos.'
					},
					pressFitHoles: {
						title: 'Agujeros de ajuste a presión',
						description:
							'Los agujeros de ajuste a presión son agujeros diseñados para aceptar componentes con pines de ajuste a presión. Los pines se insertan en los agujeros y luego se presionan en su lugar para crear una conexión segura. Tolerancia: +/-0.05mm.'
					},
					countersink: {
						title: 'Contrachaflanado / Contraagujero',
						description:
							'La diferencia más notable entre un contrachaflanado y un contraagujero es el tamaño y la forma del tornillo o la herramienta que crea los agujeros en el material. Un agujero de contraagujero es más profundo y tiene una forma cuadrada donde se puede asentar la cabeza del tornillo. También permite la adición de arandelas.'
					},
					zAxisMilling: {
						title: 'Fresado en el eje Z',
						description:
							'También conocido como enrutamiento (fresado) de control de profundidad, se refiere a un enrutamiento parcial en el PCB con una elevación de nivel variable en el borde del PCB o dentro del PCB.'
					},
					blackFr4: {
						title: 'FR4 negro (Núcleo negro)',
						description:
							'Pertenece a un material de base FR-4 ordinario y su tecnología de procesamiento es la misma que la del FR-4. Es negro, opaco, sombreado y adecuado para fabricar PCB de visualización LED y piezas estructurales aislantes en instrumentos y equipos ópticos.'
					},
					embeddedCopperPcb: {
						title: 'PCB de cobre integrado',
						description:
							'Los PCBs de cobre integrado son placas de circuito impreso que tienen trazas de cobre incrustadas en el material del sustrato. El diseño de bloques de cobre enterrados se puede dividir en dos categorías: bloques de cobre enterrados y bloques de cobre integrados. Los bloques de cobre enterrados se refieren a bloques de cobre que están al nivel de un grosor menor que el grosor total de la placa, con un lado del bloque de cobre al ras con la capa inferior y el otro lado a la altura de una cierta capa interna, como se muestra en la Figura 1 (bloque de cobre semi-enterrado). Los bloques de cobre integrados se refieren a bloques de cobre que están incrustados con un grosor cercano o igual al grosor total de la placa, con el bloque de cobre pasando a través de la capa superior, como se muestra en la Figura 2 (bloque de cobre de orificio pasante). Las placas de circuito impresos con bloques de cobre enterrados o integrados tienen características de alta conductividad térmica, alta disipación de calor y ahorro de espacio en la placa, lo que puede resolver de manera efectiva el problema de disipación de calor de componentes electrónicos de alta potencia.'
					},
					cavityPcb: {
						title: 'PCB en cavidad',
						description:
							'El PCB en cavidad es un tipo de PCB que presenta una o varias ranuras o cavidades en su superficie. Estas ranuras se crean al eliminar una parte del material de la placa, dejando atrás un área deprimida donde se pueden colocar componentes más profundamente, y reduciendo finalmente la altura total del dispositivo. El PCB en cavidad y el PCB de perforación trasera son dos tecnologías diferentes, la perforación trasera se refiere a perforar agujeros para las vías, que se detiene a una profundidad determinada y no atraviesa la placa, mientras que el PCB en cavidad se refiere a un área específica en el PCB.'
					},
					semiFlexPcb: {
						title: 'PCB semi-flexible',
						description:
							'El PCB semi-flexible es un tipo de PCB que puede doblarse localmente sobre la base del PCB rígido, lo que puede proporcionar no solo el soporte del PCB rígido, sino también permitir el doblado local de acuerdo con los requisitos del producto, incluyendo el doblado en 45°, 90°, 180°, satisfaciendo las necesidades de rendimiento de instalación de varios tipos de ensamblajes 3D.'
					},
					hybridPcb: {
						title: 'PCB híbrido total/parcial',
						description:
							'El PCB híbrido utiliza diferentes materiales para construir las capas del núcleo del sustrato así como las capas dieléctricas. En lugar de usar un solo material, la fabricación del PCB híbrido implica el uso de diferentes materiales. Se usan diferentes materiales para combinar todas las ventajas en el proceso de fabricación del PCB y reducir las desventajas que puede tener un material particular.'
					},
					backDrillPcb: {
						title: 'PCB de perforación trasera',
						description:
							'La perforación trasera (a veces llamada perforación de profundidad controlada o CDD) implica el uso de una broca ligeramente más grande en diámetro que el PTH para eliminar el recubrimiento conductor o el stub del agujero. El agujero perforado debe reducir la longitud del stub a 10 mils. Si los stubs son mayores que 10 mils, se producirán reflexiones de señal.'
					},
					leadlessPartialHardGold: {
						title: 'Oro duro parcialmente recubierto sin plomo',
						description:
							'Esta es una tecnología de tratamiento de superficie para componentes electrónicos que es libre de plomo y electrochapada selectivamente en ciertas áreas para proporcionar altos niveles de conductividad y durabilidad.'
					}
				}
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				placeholder:
					'Complete cualquier detalle del PCB para que nos quede lo más claro posible entender sus requisitos.'
			}
		},

		advancedPcb: {
			id: {
				title: 'ID de Producto'
			},
			createdAt: {
				title: 'Creado En'
			},
			updatedAt: {
				title: 'Actualizado En'
			},
			name: {
				title: 'Nombre del Producto',
				description: 'Por favor, ingrese un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del Archivo'
			},
			buildTime: {
				title: 'Tiempo de Construcción'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio Inicial'
			},
			finalPrice: {
				title: 'Precio Final'
			},
			pcbType: {
				title: 'Tipo de PCB',
				description:
					'Las placas de interconexión de alta densidad (HDI) contienen vías ciegas y/o enterradas y a menudo contienen micro vías de .006 o menos de diámetro. Tienen una mayor densidad de circuitos que las placas de circuito tradicionales.',
				values: {
					throughHoleBoard: 'Placa con agujero pasante',
					hdi: 'HDI (Vías enterradas/ciegas)'
				}
			},
			boardSpec: {
				title: 'Especificación de la Placa',
				description: 'Se requieren estándares para producir PCBs',
				values: {
					ipc6012Class2: 'IPC 6012 Clase 2',
					ipc6012Class3: 'IPC 6012 Clase 3',
					iatf16949: 'IATF 16949',
					iso13485: 'ISO 13485',
					customerStandard: 'Estándar del Cliente'
				}
			},
			boardType: {
				title: 'Tipo de Placa',
				description:
					'Las PCBs se enviarán en piezas individuales o en panel. Para pedidos de ensamblaje a granel (cantidad mayor a 30), recomendamos enviar en panel, lo que mejorará la eficiencia del ensamblaje.',
				values: {
					singlePieces: 'Piezas Individuales',
					panelByCustomer: 'Panel por el Cliente',
					panelByVelenova: 'Panel por Velenova'
				}
			},
			xoutAllowance: {
				title: 'Permiso de X-out en Panel',
				description:
					'Puede haber PCBs defectuosas en el panel, la cotización aumentará aproximadamente un 30% si no se acepta el permiso de X-out.',
				values: {
					accept: 'Aceptar',
					decline: 'Rechazar'
				}
			},
			routeProcess: {
				title: 'Proceso de Ruta',
				description: 'En el panel, las PCBs están conectadas como se muestra en el siguiente diagrama:',
				values: {
					velenovaPrefer: 'Panel según preferencia de Velenova',
					vScoring: 'Panel como V-Scoring',
					tabRoute: 'Panel como Ruta Tab',
					vScoringTabRoute: 'Tanto V-Scoring como Ruta Tab'
				}
			},
			breakAwayRail: {
				title: 'Riel de Separación',
				description:
					'Los rieles de separación son bordes de placa en blanco largos configurados para dejar fuera el espacio de transmisión de pista durante el ensamblaje y colocar el punto de marca en el panel. Las PCBs se transmiten a través del riel guía en la línea de producción de ensamblaje, por lo tanto, se debe dejar un par de bordes que prohíban la colocación de componentes como el borde de transmisión. El ancho del riel de separación generalmente es de alrededor de 5-8 mm.'
			},
			panelRequirements: {
				title: 'Requisitos del Panel',
				disclaimer:
					'(por ejemplo, Panel en 2*3, tamaño del riel de separación, total 5 paneles = total 30 placas individuales)'
			},
			differentDesign: {
				title: 'Diseño Diferente en el Panel',
				description:
					'Significa que hay diseños diferentes en sus archivos separados por cortes en v, agujeros de estampado, ranuras de fresado u otros. Cobramos un costo adicional de panel si hay diferentes tipos de diseños de PCB en un archivo Gerber.',
				error: 'El diseño diferente debe ser mayor que 0'
			},
			size: {
				title: 'Tamaño (individual)',
				description:
					'El tamaño de la placa se refiere a la longitud y el ancho de la placa ordenada por el cliente. Si es una placa circular, la longitud y el ancho son el diámetro del círculo; si es una placa con forma irregular, la longitud y el ancho se miden según el mayor rango de forma.',
				error: 'La longitud y el ancho deben ser mayores que 0'
			},
			length: {
				title: 'Longitud'
			},
			width: {
				title: 'Ancho'
			},
			quantity: {
				title: 'Cantidad (individual)',
				description:
					'Por favor, elija el número de piezas individuales que necesita. Para PCB estándar, la cantidad mínima es de 5 piezas.',
				error: 'La cantidad debe ser mayor que 0',
				placeholder: 'Cantidad',
				pieces: 'Piezas'
			},
			layers: {
				title: 'Capas',
				description:
					'El número de capas de cobre en la placa. MMWPCB actualmente puede producir hasta 60 capas, si necesita más de 14 capas, consulte la página de PCB avanzada para una valoración.',
				layer: 'Capa',
				layers: 'Capas'
			},
			copperLayer: {
				title: 'Capa de Cobre',
				description:
					'Al ordenar PCB de 1 capa, especifique si la capa de circuito está en la parte superior, inferior o ninguna. Asegúrese de seleccionar los parámetros correctos, de lo contrario, necesitaremos contactarlo para reconfirmación.',
				values: {
					topLayer: 'Capa Superior',
					bottomLayer: 'Capa Inferior'
				}
			},
			solderMask: {
				title: 'Máscara de Soldadura',
				description:
					'Es un material de recubrimiento utilizado para enmascarar o proteger áreas seleccionadas. Al ordenar PCB de 1 capa, especifique si la máscara de soldadura está en la parte superior, inferior o ambos lados. Cuando solo se elige un lado para la máscara de soldadura, el otro lado estará expuesto con la apertura de la máscara de soldadura completamente. Asegúrese de seleccionar los parámetros correctos, de lo contrario, necesitaremos contactarlo para reconfirmación.',
				values: {
					topSide: 'Lado Superior',
					bottomSide: 'Lado Inferior',
					bothSides: 'Ambos Lados'
				}
			},
			silkscreen: {
				title: 'Serigrafía',
				description:
					'La serigrafía es una capa de tinta utilizada para identificar los componentes de PCB, marcas, logotipos, símbolos, etc. Al ordenar PCB de 1 capa, especifique en qué capa se encuentra la serigrafía.',
				values: {
					topSide: 'Lado Superior',
					bottomSide: 'Lado Inferior',
					bothSides: 'Ambos Lados'
				}
			},
			material: {
				title: 'Material',
				description:
					'FR4 es el material dieléctrico más común que se utiliza en la fabricación de placas de circuito. Las placas de aluminio tienen una mejor disipación de calor y transferencia térmica que las construcciones estándar de FR-4. Las placas de base de cobre tienen una gran conductividad térmica mejor que las PCB de aluminio. Debido a sus características de baja pérdida dieléctrica, Rogers se utiliza a menudo en PCB de alta frecuencia. Si necesita otros materiales, comuníquese con su representante de ventas.',
				values: {
					tg140Fr4: {
						title: 'TG140 FR-4',
						disclaimer: '*Material TG140 FR-4: Shengyi S1141'
					},
					tg150Fr4: {
						title: 'TG150 FR-4',
						disclaimer: '*Material TG150 FR-4: Shengyi S1000-H'
					},
					tg170Fr4: {
						title: 'TG170 FR-4',
						disclaimer: '*Material TG170 FR-4: S1000-2, S1000-2M'
					},
					tg150Fr4HalogenFree: {
						title: 'TG150 FR-4 (Libre de Halógenos)',
						disclaimer:
							'*Material TG150 FR-4 (Libre de Halógenos): Shengyi S1150G Para garantizar la calidad, generalmente no almacenaremos estos materiales. Período de compra de 7-20 días'
					},
					tg170Fr4HalogenFree: {
						title: 'TG170 FR-4 (Libre de Halógenos)',
						disclaimer:
							'*Material TG170 FR-4 (Libre de Halógenos): Shengyi S1170G Para garantizar la calidad, generalmente no almacenaremos estos materiales. Período de compra de 7-20 días'
					},
					highCTI: {
						title: 'High-CTI (>=600V)',
						disclaimer: '*Material High-CTI (≥600V): Shengyi S1600 (CTI≥600V)'
					},
					highCTIHalogenFree: {
						title: 'High-CTI (>=600V, Libre de Halógenos)',
						disclaimer: 'Material High-CTI (Libre de Halógenos, ≥600V): Shengyi S1151G (CTI≥600V)'
					},
					highSpeed: {
						title: 'Alta Velocidad (GHz)',
						disclaimer:
							'Alta Velocidad (GHz) y PCB de Alta Frecuencia (DK): Las cadenas de suministro de estos materiales o las opciones de aprovisionamiento son limitadas. Para garantizar la calidad, generalmente no almacenaremos estos materiales. Le responderemos después de que realice un pedido.'
					},
					highFrequency: {
						title: 'PCB de Alta Frecuencia (DK)',
						disclaimer:
							'Alta Velocidad (GHz) y PCB de Alta Frecuencia (DK): Las cadenas de suministro de estos materiales o las opciones de aprovisionamiento son limitadas. Para garantizar la calidad, generalmente no almacenaremos estos materiales. Le responderemos después de que realice un pedido.'
					},
					specialMaterial: {
						title: 'Material Especial (Temperatura Alta y Baja)',
						disclaimer: 'Material Especial (Temperatura Alta y Baja): Shengyi SH260'
					}
				}
			},
			highSpeed: {
				title: 'Alta Velocidad (GHz)',
				description: 'Alta Velocidad (GHz)'
			},
			highFrequency: {
				title: 'PCB de Alta Frecuencia (DK)',
				description: 'PCB de Alta Frecuencia (DK)'
			},
			thickness: {
				title: 'Grosor',
				description:
					'Para materiales ordinarios, el grosor de la placa se refiere al grosor de la PCB una vez completada la producción, y el error es de aproximadamente 10% (+/-10% (T>=1mm) o +/- 0.1mm (T<1mm)). El error se debe principalmente a la máscara de soldadura y el hundimiento de cobre. Si hay otros requisitos para el error de grosor, por favor haga una nota en Otros Requisitos Especiales. Nota: Para placas de Rogers de un solo lado/dos lados, el grosor se refiere al grosor del sustrato.',
				error: 'El grosor debe ser mayor que 0'
			},
			minTrack: {
				title: 'Min Track/Espaciado',
				description:
					'Ancho mínimo de la traza de cobre y distancia mínima entre dos trazas. Los ingenieros de PCBWay verificarán el Min Track/Espaciado.'
			},
			minHoleSize: {
				title: 'Tamaño Mínimo del Agujero',
				description:
					'Diámetro mínimo de los agujeros. Los ingenieros de PCBWay verificarán el tamaño mínimo del agujero.',
				noDrill: 'Sin Taladrar'
			},
			solderMaskColor: {
				title: 'Máscara de Soldadura',
				description:
					'El color de la máscara de soldadura se refiere al color de la superficie de la PCB. Actualmente, PCBWay ofrece 9 colores convencionales de máscara de soldadura. Si necesita rosa, gris, naranja o transparente, por favor dirígete a la página de PCB avanzada para elegir.'
			},
			silkscreenColor: {
				title: 'Serigrafía',
				description:
					'La serigrafía es una capa de tinta utilizada para identificar los componentes de PCB, marcas, logotipos, símbolos, etc. El color suele ser blanco. Pero cuando la tinta de la máscara de soldadura es blanca, la serigrafía será negra.'
			},
			edgeConnector: {
				title: 'Conector de Borde',
				description:
					"Los conectores de borde logran conexión eléctrica al contactar los dedos dorados en la PCB. Si su diseño incluye dedos dorados, por favor marque 'Sí' para este ítem y seleccione el método de acabado de superficie y el ángulo de bisel para ello. De lo contrario, marque 'No'."
			},
			surfaceFinish: {
				title: 'Acabado de Superficie',
				description:
					'El acabado de superficie es una parte importante de la producción de PCB. Puede proteger el cobre de la oxidación, lo que haría que la PCB fuera inutilizable. Además, proporciona una superficie suave para que los componentes sean soldados.',
				values: {
					immersionGold: 'Oro de Inmersión (ENIG)',
					osp: 'OSP',
					immersionTin: 'Estaño de Inmersión',
					enepig: 'ENEPIG',
					plainCopper: 'Cobre Simple / Ninguno'
				}
			},
			surfaceThickness: {
				title: 'Grosor de Superficie',
				immersionGold: {
					title: 'Grosor de Oro de Inmersión'
				},
				hardGold: {
					title: 'Grosor de Au/Ni'
				},
				haslLeadFreeImmersionGold: {
					title: 'Grosor de Oro de Inmersión'
				},
				haslLeadFreeHardGold: {
					title: 'Grosor de Oro Duro'
				},
				immersionGoldHardGold: {
					title: 'Grosor de Oro de Inmersión / Oro Duro'
				},
				enepig: {
					title: 'Grosor de ENEPIG'
				}
			},
			finishedCopper: {
				title: 'Cobre Terminado',
				description:
					'El peso en onzas de cobre en un pie cuadrado de PCB, esta opción determinará el grosor de cobre en las capas exteriores. MMWPCB proporciona el grosor de cobre en las capas exteriores de 1-13 oz. Los agujeros o vías PTH que están cortados para crear un agujero parcial o medio para formar una abertura en el lateral del barril del agujero. Generalmente se utilizan para montar una PCB en otra.',
				bareBoard: 'Tablero Desnudo'
			},
			innerCopper: {
				title: 'Cobre Interno',
				description:
					'El peso de cobre en las capas internas para PCBs de múltiples capas. El peso de cobre interno predeterminado es de 1 oz.'
			},
			peelableSolderMask: {
				title: 'Máscara de Soldadura Pelable',
				description:
					'También conocida como máscara pelable azul, se utiliza para proteger las almohadillas de soldadura necesarias durante el ensamblaje y se denomina típicamente GTPM y GBPM en el diseño. A diferencia de la máscara de soldadura verde, que es una imagen negativa y está presente de forma permanente en la PCB en el diseño de PCB, la máscara de soldadura pelable es una imagen positiva (lo que ves es lo que obtienes en tu diseño) y se utiliza temporalmente para la fabricación y ensamblaje de PCBs. El material de recubrimiento podría eliminarse después de que la placa pase por la soldadura por ola.',
				values: {
					topSide: 'Lado Superior',
					bottomSide: 'Lado Inferior',
					bothSides: 'Ambos Lados'
				}
			},
			holeCopperThickness: {
				title: 'Grosor de Cobre del Agujero',
				description: 'Por favor, seleccione el grosor de cobre del agujero que necesita'
			},
			ulMarking: {
				title: 'Marcado UL',
				description:
					'MMWPCB ha obtenido la certificación UL, por favor elija agregar el logotipo correspondiente en la capa que necesita. Agregaremos el logotipo JDB-D si es una placa de dos capas, y agregaremos JDB-M si es una placa de múltiples capas. Para PCB base metálica de una sola capa, agregaremos UL correspondiente (JDB-A1, JDB-A2, JDB-A3) según sea necesario.',
				values: {
					topSilkscreen: 'Sí - agregar a la serigrafía superior',
					bottomSilkscreen: 'Sí - agregar a la serigrafía inferior',
					topSolderMask: 'Sí - agregar a la máscara de soldadura superior',
					bottomSolderMask: 'Sí - agregar a la máscara de soldadura inferior',
					topCopper: 'Sí - agregar al cobre superior',
					bottomCopper: 'Sí - agregar al cobre inferior',
					default: 'Sí - como predeterminado de MMWPCB'
				}
			},
			dateCode: {
				title: 'Código de Fecha',
				description: 'Agregar el tiempo de producción en la PCB',
				placeholder: 'Por ejemplo: código de fecha en formato WWYY en capa de serigrafía superior',
				values: {
					velenovaPrefer: 'Agregar según preferencia de Velenova',
					customerRequired: 'Agregar según lo requerido por el cliente',
					updateDesignedDateCode: 'Actualizar el código de fecha diseñado'
				}
			},
			dateCodeDescription: {
				title: 'Descripción del Código de Fecha'
			},
			customizedServices: {
				title: 'Servicios Personalizados y Opciones Avanzadas',
				description:
					'Podemos agregar un costo adicional por estas opciones especiales, que se confirmará después de la revisión.',
				values: {
					halfCut: {
						title: 'Corte a la Mitad / Agujeros Castellados',
						description:
							'Agujeros PTH o vías que se cortan para crear un agujero parcial o medio para formar una abertura en el lado del barril del agujero. Generalmente se utilizan para montar una PCB en otra.'
					},
					edgePlating: {
						title: 'Platinado de Bordes',
						description:
							'El platinado de bordes de PCB se refiere a la metalización de los lados de una placa de circuito impreso a lo largo de su altura. Puede realizar el platinado de bordes en uno de los bordes de la placa o en todos. A través del platinado de bordes, equipa la placa con una conexión y rigidez confiables.'
					},
					impedanceControl: {
						title: 'Control de Impedancia',
						description:
							'Los conductores en una PCB transportan varias señales y, para aumentar su velocidad de transmisión, su frecuencia debe elevarse. Sin embargo, factores como la grabado, el grosor de la capa y el ancho de la línea pueden causar variaciones de impedancia en la PCB, lo que provoca distorsión de la señal. Por lo tanto, para conductores de PCB de alta velocidad, sus valores de impedancia deben controlarse dentro de un cierto rango, conocido como "control de impedancia". La tolerancia de impedancia es generalmente ±10%. Si se especifican requisitos de impedancia en la documentación pero no se seleccionan en el pedido, se considerará que se ignora el requisito de impedancia.'
					},
					halogenFree: {
						title: 'Libre de Halógenos',
						description:
							'De acuerdo con la norma JPCA-ES-01-2003, un laminado de cubierta de cobre con un contenido de cloro (Cl) y un contenido de bromo (Br) de menos de 0.09% Wt (por peso) cada uno y la cantidad total de CI+Br es ≤ 0.15% [1500PPM] se define como un laminado de cobre libre de halógenos.'
					},
					customStackup: {
						title: 'Apilado Personalizado',
						description:
							'Aplicable solo a PCBs de múltiples capas. Si necesita personalizar un apilamiento específico, por favor cargue el archivo de apilamiento junto o comuníquese con su representante de ventas.'
					},
					carbonInk: {
						title: 'Tinta de Carbono',
						description:
							'También llamada PCB de tinta de carbono. La PCB de tinta de carbono se recubre en el sustrato de la PCB con tinta conductora a base de carbono (denominada tinta de carbono), curada para formar una PCB con un patrón conductivo de película de carbono. La PCB de tinta de carbono tiene las ventajas de bajo costo, fuerte capacidad de control de impedancia, alta confiabilidad y buena resistencia a la corrosión.'
					},
					allViasFilled: {
						title: 'Todas las vías llenas de resina y tapadas',
						description: 'Si selecciona esta opción, todas las vías se llenarán de resina, luego se taparán y cubrirán.'
					},
					viaInPad: {
						title: 'Vía en Almohadilla',
						description:
							'Si hay vías en la almohadilla en su diseño, es decir, vías en la almohadilla SMD, seleccione esta opción y realizaremos un tapón de resina, luego se taparán y cubrirán.'
					},
					pressFitHoles: {
						title: 'Agujeros de Ajuste por Presión',
						description:
							'Los agujeros de ajuste por presión están diseñados para aceptar componentes con pines de ajuste por presión. Los pines se insertan en los agujeros y luego se presionan en su lugar para crear una conexión segura. Tolerancia: +/- 0.05 mm.'
					},
					countersink: {
						title: 'Fresado en Contra/Contrabore',
						description:
							'La diferencia más notable entre un contrabore y un contrabore es el tamaño y la forma del tornillo o la herramienta que crea los agujeros en el material. Un agujero de contrabore es más profundo y tiene una forma cuadrada donde el hombro de la cabeza del tornillo puede asentarse. También permite la adición de arandelas.'
					},
					zAxisMilling: {
						title: 'Fresado en Z',
						description:
							'También se conoce como fresado de control de profundidad, se refiere al fresado parcial en la PCB con una elevación de nivel variable en el borde de la PCB o dentro de la PCB.'
					},
					blackFr4: {
						title: 'FR4 Negro (Núcleo Negro)',
						description:
							'Pertenece a material base FR-4 ordinario y su tecnología de procesamiento es la misma que la de FR-4 también. Es negro, opaco, sombreado y adecuado para fabricar PCB para pantallas LED y partes estructurales aislantes en instrumentos de medición y ópticos.'
					},
					embeddedCopperPcb: {
						title: 'PCB de Cobre Empotrado',
						description:
							'Las PCBs de cobre empotrado son placas de circuito impreso que tienen trazas de cobre empotradas dentro del material del sustrato. El diseño de bloques de cobre enterrados se puede dividir principalmente en dos categorías: bloques de cobre enterrados y bloques de cobre empotrados. Los bloques de cobre enterrados se refieren a bloques de cobre que están enterrados con un grosor menor que el grosor total de la placa, con un lado del bloque de cobre al ras con la capa inferior y el otro lado al ras con una cierta capa interna, como se muestra en la Figura 1 (bloque de cobre semienterrado). Los bloques de cobre empotrados se refieren a bloques de cobre que están empotrados con un grosor cercano o igual al grosor total de la placa, con el bloque de cobre pasando a través de la capa superior, como se muestra en la Figura 2 (bloque de cobre de orificio pasante). Las placas de circuito impreso con bloques de cobre enterrados o empotrados tienen las características de alta conductividad térmica, alta disipación de calor y ahorro de espacio de placa, lo que puede resolver eficazmente el problema de disipación de calor de componentes electrónicos de alta potencia.'
					},
					cavityPcb: {
						title: 'PCB de Cavidad',
						description:
							'El PCB de cavidad es un tipo de PCB que presenta una o múltiples ranuras o cavidades rehundidas en su superficie. Estas ranuras se crean al eliminar una porción del material de la placa, dejando una área deprimida donde los componentes pueden colocarse más profundamente, y finalmente reduciendo la altura total del dispositivo. El PCB de cavidad y el PCB de taladrado trasero son dos tecnologías diferentes; el taladrado trasero se refiere a taladrar agujeros para vías, que se detiene a una cierta profundidad y no penetra a través de la placa, mientras que el PCB de cavidad se refiere a un área específica en la PCB.'
					},
					semiFlexPcb: {
						title: 'PCB Semi-flexible',
						description:
							'El PCB semi-flexible es un tipo de PCB que puede doblarse localmente sobre la base de PCB rígido, que puede proporcionar no solo el soporte del PCB rígido, sino también lograr el doblado local según los requisitos del producto, incluyendo el doblado en 45°, 90°, 180°, cumpliendo con los requisitos de rendimiento de instalación de varios tipos de ensamblaje 3D.'
					},
					hybridPcb: {
						title: 'PCB Híbrido Total/Parcial',
						description:
							'El PCB híbrido utiliza diferentes materiales para construir las capas centrales del sustrato y también las capas dieléctricas. En lugar de utilizar un solo material, la fabricación de PCB híbrido implica el uso de diferentes materiales. Se utilizan diferentes materiales para combinar todas las ventajas en el proceso de fabricación de la PCB y reducir las desventajas que puede presentar un material en particular.'
					},
					backDrillPcb: {
						title: 'PCB de Taladrado Trasero',
						description:
							'El taladrado trasero (a veces llamado taladrado de profundidad controlada o CDD) implica usar una broca ligeramente más grande en diámetro que la PTH para eliminar el recubrimiento conductor o el tapón del agujero. El agujero taladrado trasero debería reducir la longitud del tapón a 10 mil. Si los tapones son mayores a 10 mil, se producirán reflexiones de señal.'
					},
					leadlessPartialHardGold: {
						title: 'Oro Duro Parcialmente Platinado sin Plomo',
						description:
							'Esta es una tecnología de tratamiento de superficie para componentes electrónicos que es libre de plomo y electrochapada selectivamente en ciertas áreas para proporcionar altos niveles de conductividad y durabilidad.'
					}
				}
			},
			finalInspectionReport: {
				title: 'Informe de Inspección Final (Gratuito)',
				description:
					'El informe de envío regular incluye adicionalmente el informe de prueba y el informe de inspección dimensional.',
				values: {
					defaultInspectionReport: 'Informe de Inspección Predeterminado',
					microsectionInspectionReport: 'Informe de Inspección de Microsección',
					solderabilityInspectionReport: 'Informe de Inspección de Soldabilidad',
					thermalStressInspectionReport: 'Informe de Inspección de Estrés Térmico',
					impedanceTestReport: 'Informe de Prueba de Impedancia',
					humidityIndicatorCards: 'Tarjetas Indicadoras de Humedad'
				}
			},
			specialRequests: {
				title: 'Otras Solicitudes Especiales',
				placeholder:
					'Rellene cualquier detalle de la PCB para que nos quede lo más claro posible para entender sus requisitos.'
			}
		},

		flexiblePcb: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Fecha de creación'
			},
			updatedAt: {
				title: 'Fecha de actualización'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor, ingrese un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			buildTime: {
				title: 'Tiempo de construcción'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			boardType: {
				title: 'Tipos de placa',
				description:
					'Las PCB se enviarán en piezas individuales o en panel. Para pedidos de ensamblaje a granel (cantidad mayor a 30), recomendamos el envío en panel, lo que mejorará la eficiencia del ensamblaje y reducirá el costo.',
				values: {
					singlePieces: 'Piezas individuales',
					panelByCustomer: 'Panel por el cliente',
					panelByVelenova: 'Panel por Velenova'
				}
			},
			xoutAllowance: {
				title: 'Permiso de X-out en panel',
				description:
					'Puede haber PCB defectuosos en el panel; la cotización aumentará aproximadamente un 30% si no se acepta el permiso de X-out.',
				values: {
					accept: 'Aceptar',
					decline: 'Rechazar'
				}
			},
			routeProcess: {
				title: 'Proceso de ruta',
				description: 'En el panel, las PCB están conectadas como se muestra en el siguiente diagrama:',
				values: {
					velenovaPrefer: 'Panel según preferencias de Velenova',
					vScoring: 'Panel con V-Scoring',
					tabRoute: 'Panel con ruta de lengüeta',
					vScoringTabRoute: 'Ambos V-Scoring y ruta de lengüeta'
				}
			},
			breakAwayRail: {
				title: 'Riel de ruptura',
				description:
					'Los rieles de ruptura son bordes de placa en tira larga diseñados para dejar espacio para la transmisión durante el ensamblaje y colocar el punto de marcado en el panel. Las PCB son transmitidas a través del riel guía en la línea de producción de ensamblaje, por lo tanto, se debe dejar un par de bordes que prohíban la colocación de componentes como el borde de transmisión. El ancho del riel de ruptura es generalmente de aproximadamente 5 a 8 mm.'
			},
			panelRequirements: {
				title: 'Requisitos del panel',
				disclaimer:
					'(por ejemplo: Panel de 2*3, tamaño del riel de ruptura, total de 5 paneles = total de 30 placas individuales)'
			},
			differentDesign: {
				title: 'Diseño diferente en el panel',
				description:
					'Esto significa que hay diferentes diseños en sus archivos separados por cortes en V, agujeros de estampado, ranuras fresadas u otros. Cobraremos un costo adicional de panel si hay diferentes tipos de diseños de PCB en un archivo Gerber.',
				error: 'El diseño diferente debe ser mayor que 0'
			},
			size: {
				title: 'Tamaño (individual)',
				description:
					'El tamaño de la placa se refiere a la longitud y el ancho de la placa ordenada por el cliente. Si es una placa circular, la longitud y el ancho son el diámetro del círculo; si es una placa con forma irregular, la longitud y el ancho se miden de acuerdo a la mayor dimensión de la forma.',
				error: 'La longitud y el ancho deben ser mayores que 0'
			},
			length: {
				title: 'Longitud'
			},
			width: {
				title: 'Ancho'
			},
			quantity: {
				title: 'Cantidad (individual)',
				description:
					'Por favor, elija el número de piezas individuales que necesita. Para PCB estándar, la cantidad mínima es 5 piezas.',
				error: 'La cantidad debe ser mayor que 0',
				placeholder: 'Cantidad',
				pieces: 'Piezas'
			},
			layers: {
				title: 'Capas',
				description:
					'El número de capas de cobre en la placa. MMWPCB actualmente puede producir hasta 60 capas, si necesita más de 14 capas, por favor seleccione la página avanzada de PCB para valoración.',
				layer: 'Capa',
				layers: 'Capas'
			},
			material: {
				title: 'Material base de poliamida',
				description: 'Uno de los materiales dieléctricos comúnmente utilizados',
				values: {
					polyimideFlex: 'Poliamida flexible',
					pet: 'PET',
					highFrequency: 'Alta frecuencia (DK<=3.6)'
				}
			},
			petType: {
				title: 'Material (PET)',
				disclaimer: '*Soporta temperatura hasta 110°',
				values: {
					transparent: 'Transparente',
					translucent: 'Translúcido'
				}
			},
			thickness: {
				title: 'Espesor de FPC',
				description: 'El espesor del FPC no incluye el espesor del refuerzo y de la cinta 3M.',
				disclaimer: '*El espesor del FPC no incluye el espesor del refuerzo y de la cinta 3M.'
			},
			minTrack: {
				title: 'Min. Ancho/Separación',
				description:
					'Ancho mínimo de la traza de cobre y distancia mínima entre dos trazas. Los ingenieros de MMWPCB verificarán nuevamente el Min. Ancho/Separación.'
			},
			minHoleSize: {
				title: 'Tamaño mínimo de agujero/Tamaño de pad (diámetro)',
				description: 'Diámetro mínimo de los agujeros y pads',
				noDrill: 'Sin perforar'
			},
			solderMaskColor: {
				title: 'Máscara de soldadura (Cubierta)',
				description: 'Color de la máscara utilizada para cubrir la PCB',
				coverlay: 'Cubierta'
			},
			silkscreenColor: {
				title: 'Sérigrafía',
				description:
					'La sérigrafía es una capa de tinta utilizada para identificar los componentes, marcas, logotipos, símbolos, etc. de la PCB. El color es generalmente blanco. Pero cuando la tinta de la máscara de soldadura es blanca, la sérigrafía será negra.'
			},
			edgeConnector: {
				title: 'Conector de borde',
				description:
					"También llamado 'gold finger'. Es un tipo de conector utilizado en placas PCB. Es un borde metálico diseñado para hacer contacto eléctrico con un conector emparejado."
			},
			stiffener: {
				title: 'Refuerzo',
				description:
					'Material agregado a una placa de circuito flexible para rigidizar áreas específicas o realizar otras funciones especiales, como aumentar el grosor total; proteger las uniones de soldadura; disipación de calor, etc.',
				values: {
					topSide: 'Lado superior',
					bottomSide: 'Lado inferior',
					bothSides: 'Ambos lados'
				}
			},
			surfaceFinish: {
				title: 'Acabado de superficie',
				description: 'Proceso que ayuda con la soldabilidad',
				values: {
					immersionGold: 'Oro por inmersión (ENIG)',
					osp: 'OSP',
					hardGold: 'Oro duro',
					immersionSilver: 'Plata por inmersión (Ag)',
					immersionTin: 'Estaño por inmersión',
					immersionGoldHardGold: 'Oro por inmersión + Oro duro selectivo',
					enepig: 'ENEPIG'
				}
			},
			surfaceThickness: {
				title: 'Espesor de superficie',
				immersionGold: {
					title: 'Espesor de oro por inmersión'
				},
				hardGold: {
					title: 'Espesor de Au/Ni'
				},
				immersionGoldHardGold: {
					title: 'Espesor de oro por inmersión / oro duro'
				},
				enepig: {
					title: 'Espesor de ENEPIG'
				}
			},
			finishedCopper: {
				title: 'Cobre terminado',
				description:
					'El peso en onzas de cobre en un pie cuadrado de PCB, esta opción determinará el grosor del cobre en las capas externas. PCBWay proporciona un grosor de cobre en las capas externas de 1-13 oz.',
				bareBoard: 'Placa desnuda'
			},
			etest: {
				title: 'E-Prueba',
				description:
					'Prueba eléctrica, realizada con sondas volantes para cantidades más pequeñas o un fixture de prueba eléctrica para las más grandes.'
			},
			tape: {
				title: 'Cinta 3M/Tesa',
				description: 'Adjuntar toda o parte de la placa FPC a otro objeto.',
				values: {
					threeM467: '3M467',
					tesa8853: 'Tesa8853',
					tesa8854: 'Tesa8854',
					threeM9495LE: '3M9495LE'
				}
			},
			doubleSidedTape: {
				title: 'Cinta adhesiva conductora doble cara',
				description:
					'Cinta adhesiva conductora: un tipo de cinta que se coloca sobre toda o parte de la placa FPC y que puede adjuntarse a otro objeto y es conductora.',
				values: {
					htA1134: 'HT-A1134'
				}
			},
			emiShieldingFilm: {
				title: 'Película de blindaje EMI',
				description: 'Es un tipo de película funcional eléctrica con una alta efectividad de blindaje.',
				values: {
					hcf6000g: 'HCF-6000G',
					pc800: 'PC800'
				}
			},
			peelableSolderMask: {
				title: 'Máscara de soldadura despegable',
				description:
					'También conocida como máscara despegable azul, se utiliza para proteger los pads de soldadura requeridos durante el ensamblaje y se refiere típicamente como GTPM y GBPM en el diseño. A diferencia de la máscara de soldadura verde, que es una imagen negativa y está presente permanentemente en el diseño PCB, la máscara de soldadura despegable es una imagen positiva (lo que ves es lo que obtienes en tu diseño) y se utiliza temporalmente para la fabricación y el ensamblaje de PCB. El material de recubrimiento podría eliminarse después de la placa a través de soldadura de ola.',
				values: {
					topSide: 'Lado superior',
					bottomSide: 'Lado inferior',
					bothSides: 'Ambos lados'
				}
			},
			ulMarking: {
				title: 'Marcado UL',
				description:
					'MMWPCB ha obtenido la certificación UL, por favor elija agregar el logotipo correspondiente en la capa que necesita. Agregaremos el logotipo JDB-D si es una placa de dos capas, y agregaremos JDB-M si es una placa multicapa. Para PCB de metal de una sola capa, agregaremos el correspondiente UL (JDB-A1, JDB-A2, JDB-A3) según sea necesario.',
				values: {
					topSilkscreen: 'Sí - agregar a la serigrafía superior',
					bottomSilkscreen: 'Sí - agregar a la serigrafía inferior',
					topSolderMask: 'Sí - agregar a la máscara de soldadura superior',
					bottomSolderMask: 'Sí - agregar a la máscara de soldadura inferior',
					topCopper: 'Sí - agregar al cobre superior',
					bottomCopper: 'Sí - agregar al cobre inferior',
					default: 'Sí - como predeterminado de MMWPCB'
				}
			},
			dateCode: {
				title: 'Código de fecha',
				description: 'Agregar la hora de producción en el PCB',
				placeholder: 'Por ejemplo: código de fecha en el formato WWYY en la capa de serigrafía superior',
				values: {
					velenovaPrefer: 'Agregar según preferencia de Velenova',
					customerRequired: 'Agregar según lo que requiera el cliente',
					updateDesignedDateCode: 'Actualizar el código de fecha diseñado'
				}
			},
			dateCodeDescription: {
				title: 'Descripción del código de fecha'
			},
			customizedServices: {
				title: 'Servicios personalizados y opciones avanzadas',
				description:
					'Podemos agregar costos adicionales para estas opciones especiales que se confirmarán después del examen.',
				values: {
					halfCut: {
						title: 'Corte a la mitad / Agujeros castellanos',
						description:
							'Agujeros PTH o vias que se cortan para crear un agujero parcial o medio para formar una apertura en el lado del barril del agujero. Generalmente se utilizan para montar una PCB a otra.'
					},
					edgePlating: {
						title: 'Plataforma de borde',
						description:
							'La electrificación de los bordes de una placa se refiere a la metalización de las caras del circuito impreso a lo largo de su altura. Puede realizarse en uno de los bordes de la placa o en toda ella. A través de la electrificación del borde, se proporciona una conexión y rigidez confiables a la placa.'
					},
					impedanceControl: {
						title: 'Control de impedancia',
						description: ''
					},
					viasFilledWithCopper: {
						title: 'Vías llenas de cobre',
						description: ''
					},
					fpcWithAirgap: {
						title: 'FPC con espacio de aire',
						description: ''
					},
					singleSideDoubleAccess: {
						title: 'Acceso doble de un solo lado',
						description: ''
					},
					stiffenerTopBottom: {
						title: 'Refuerzo en la parte superior e inferior'
					}
				}
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				placeholder: 'Rellene cualquier detalle del PCB para que nos sea lo más claro posible entender sus requisitos.'
			}
		},

		rigidFlex: {
			id: {
				title: 'ID del Producto'
			},
			createdAt: {
				title: 'Creado en'
			},
			updatedAt: {
				title: 'Actualizado en'
			},
			name: {
				title: 'Nombre del Producto',
				description: 'Por favor, ingresa un nombre para tu producto',
				error: 'Se requiere nombre del producto'
			},
			fileName: {
				title: 'Nombre del Archivo'
			},
			buildTime: {
				title: 'Tiempo de Construcción'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio Inicial'
			},
			finalPrice: {
				title: 'Precio Final'
			},
			boardType: {
				title: 'Tipos de Tablero',
				description:
					'Las PCBs se enviarán en piezas individuales o en panel. Para pedidos de ensamblaje a granel (cantidad superior a 30), recomendamos enviar en panel, lo que mejorará la eficiencia del ensamblaje y reducirá los costos.',
				values: {
					singlePieces: 'Piezas Individuales',
					panelByCustomer: 'Panel por el Cliente',
					panelByVelenova: 'Panel por Velenova'
				}
			},
			xoutAllowance: {
				title: 'Permiso de X-out en Panel',
				description:
					'Puede haber PCBs defectuosas en el panel, la cotización aumentará aproximadamente un 30% si no se acepta el Permiso de X-out.',
				values: {
					accept: 'Aceptar',
					decline: 'Rechazar'
				}
			},
			routeProcess: {
				title: 'Proceso de Ruta',
				description: 'En el panel, las PCBs están conectadas como se muestra en el siguiente diagrama:',
				values: {
					velenovaPrefer: 'Panel como prefiere Velenova',
					vScoring: 'Panel como V-Scoring',
					tabRoute: 'Panel como Ruta de Pestaña',
					vScoringTabRoute: 'Tanto V-Scoring como Ruta de Pestaña'
				}
			},
			breakAwayRail: {
				title: 'Riel de Desprendimiento',
				description:
					'Los rieles de desprendimiento son bordes de placa en blanco largos configurados para dejar el espacio de transmisión de la pista durante el ensamblaje y colocar el punto de marca en el panel. Las PCBs se transmiten a través del riel guía en la línea de producción de ensamblaje, por lo tanto, se debe dejar un par de bordes que prohiben colocar componentes como el borde de transmisión. El ancho del riel de desprendimiento es generalmente de aproximadamente 5-8 mm.'
			},
			panelRequirements: {
				title: 'Requisitos del Panel',
				disclaimer:
					'(por ejemplo, Panel en 2*3, tamaño del riel de desprendimiento, total 5 paneles = total 30 placas individuales)'
			},
			differentDesign: {
				title: 'Diseño Diferente en el Panel',
				description:
					'Significa que hay diferentes diseños en tus archivos separados por cortes en v, agujeros de estampado, ranuras de fresado u otros. Cobramos un costo adicional de panel si hay diferentes tipos de diseños de PCB en un archivo Gerber.',
				error: 'El diseño diferente debe ser mayor que 0'
			},
			size: {
				title: 'Tamaño (individual)',
				description:
					'El tamaño de la placa se refiere a la longitud y el ancho de la placa ordenada por el cliente. Si es una placa circular, la longitud y el ancho son el diámetro del círculo; si es una placa de forma irregular, la longitud y el ancho se miden de acuerdo con el rango de forma más grande.',
				error: 'La longitud y el ancho deben ser mayores que 0'
			},
			length: {
				title: 'Longitud'
			},
			width: {
				title: 'Ancho'
			},
			quantity: {
				title: 'Cantidad (individual)',
				description:
					'Por favor, elige el número de piezas individuales que necesitas. Para PCB estándar, la cantidad mínima es de 5 piezas.',
				error: 'La cantidad debe ser mayor que 0',
				placeholder: 'Cantidad',
				pieces: 'Piezas'
			},
			layers: {
				title: 'Capas',
				description:
					'El número de capas de cobre en el tablero. MMWPCB actualmente puede producir hasta 60 capas, si necesitas más de 14 capas, por favor selecciona la página avanzada de PCB para la valoración.',
				layer: 'Capa',
				layers: 'Capas'
			},
			material: {
				title: 'Material',
				description:
					'FR4 es el material dieléctrico más común que se utiliza en la fabricación de placas de circuito. Las placas de aluminio tienen mejor disipación de calor y transferencia térmica que las construcciones estándar FR-4. Las placas de base de cobre tienen una gran conductividad térmica mejor que las PCB de aluminio. Debido a sus características de baja pérdida dieléctrica, Rogers se utiliza a menudo en PCB de alta frecuencia. Si necesitas otros materiales, por favor contacta a tu representante de ventas.',
				values: {
					polyimideFlex: 'Flex de Poliamida + FR4'
				}
			},
			thickness: {
				title: 'Espesor Rigid-Flex',
				description: 'Espesor total de las capas rígidas y flexibles'
			},
			minTrack: {
				title: 'Min Track/Espaciado',
				description:
					'Ancho mínimo de la traza de cobre y distancia mínima entre dos trazas. Los ingenieros de PCBWay verificarán el Min Track/Espaciado.'
			},
			minHoleSize: {
				title: 'Tamaño Mínimo de Agujero',
				description:
					'Diámetro mínimo de los agujeros. Los ingenieros de PCBWay verificarán el tamaño mínimo del agujero.',
				noDrill: 'Sin Perforación'
			},
			surfaceFinish: {
				title: 'Acabado de Superficie',
				description: 'Proceso adicional para cobre expuesto para ayudar a la soldabilidad',
				values: {
					immersionGold: 'Oro de Inmersión (ENIG)',
					osp: 'OSP',
					immersionSilver: 'Plata de Inmersión (Ag)'
				}
			},
			surfaceThickness: {
				title: 'Espesor de Superficie',
				immersionGold: {
					title: 'Espesor de Oro de Inmersión'
				}
			},
			edgeConnector: {
				title: 'Conector de Borde',
				description:
					"Los conectores de borde logran la conexión eléctrica mediante el contacto con los dedos dorados en la PCB. Si tu diseño incluye dedo dorado, por favor selecciona 'Sí' para este ítem y elige el método de acabado de superficie y el ángulo de bisel para ello. De lo contrario, selecciona 'No'."
			},
			flexPart: 'Parte Flex',
			fpcLayers: {
				title: 'Capas FPC',
				description: 'El número de capas conductoras para la parte Flex.'
			},
			fpcThickness: {
				title: 'Espesor FPC',
				description: 'El espesor de la placa para la parte Flex'
			},
			fpcCoverlay: {
				title: 'Cubierta FPC',
				description: 'Color de la máscara utilizada para cubrir la PCB',
				coverlay: 'Cubierta'
			},
			fpcSilkscreenColor: {
				title: 'Serigrafía',
				description:
					'La serigrafía es una capa de tinta trazada utilizada para identificar los componentes de la PCB, marcas, logotipos, símbolos, etc. El color es generalmente blanco. Pero cuando la tinta de la máscara de soldadura es blanca, la serigrafía será negra.'
			},
			fpcFinishedCopper: {
				title: 'Cobre Terminado',
				description:
					'El peso en onzas de cobre en un pie cuadrado de PCB, esta opción determinará el espesor de cobre en las capas externas. PCBWay proporciona el espesor de cobre en capas externas de 1-13oz.'
			},
			rigidPart: 'Parte Rígida',
			rpcSolderMaskColor: {
				title: 'Máscara de Soldadura',
				description:
					'El color de la máscara de soldadura se refiere al color de la superficie de la PCB. Actualmente, PCBWay proporciona 9 colores convencionales de máscara de soldadura. Si necesitas rosa, gris, naranja o transparente, por favor visita la página de PCB Avanzado para elegir.'
			},
			rpcSilkscreenColor: {
				title: 'Serigrafía',
				description:
					'La serigrafía es una capa de tinta trazada utilizada para identificar los componentes de la PCB, marcas, logotipos, símbolos, etc. El color es generalmente blanco. Pero cuando la tinta de la máscara de soldadura es blanca, la serigrafía será negra.'
			},
			rpcFinishedCopper: {
				title: 'Cobre Terminado',
				description:
					'El peso en onzas de cobre en un pie cuadrado de PCB, esta opción determinará el espesor de cobre en las capas externas. PCBWay proporciona el espesor de cobre en capas externas de 1-13oz.'
			},
			ulMarking: {
				title: 'Marcado UL',
				description:
					'MMWPCB ha obtenido certificación UL, por favor elige agregar el logotipo correspondiente en la capa que necesitas. Agregaremos el logotipo JDB-D si es un tablero de dos capas, y agregaremos JDB-M si es un tablero multicapa. Para PCB de base de metal de una sola capa, agregaremos UL correspondiente (JDB-A1, JDB-A2, JDB-A3) según sea necesario.',
				values: {
					topSilkscreen: 'Sí - agregar a la serigrafía superior',
					bottomSilkscreen: 'Sí - agregar a la serigrafía inferior',
					topSolderMask: 'Sí - agregar a la máscara de soldadura superior',
					bottomSolderMask: 'Sí - agregar a la máscara de soldadura inferior',
					topCopper: 'Sí - agregar al cobre superior',
					bottomCopper: 'Sí - agregar al cobre inferior',
					default: 'Sí - como predeterminado de MMWPCB'
				}
			},
			dateCode: {
				title: 'Código de Fecha',
				description: 'Agregar la fecha de producción en la PCB',
				placeholder: 'Por ejemplo: código de fecha en el formato de WWYY en la capa de serigrafía superior',
				values: {
					velenovaPrefer: 'Agregar según prefiere Velenova',
					customerRequired: 'Agregar según lo requerido por el cliente',
					updateDesignedDateCode: 'Actualizar el código de fecha diseñado'
				}
			},
			dateCodeDescription: {
				title: 'Descripción del Código de Fecha'
			},
			customizedServices: {
				title: 'Servicios Personalizados y Opciones Avanzadas',
				description:
					'Podemos agregar costos adicionales para estas opciones especiales que se confirmarán después de la revisión.',
				values: {
					halfCut: {
						title: 'Corte a la Mitad / Agujeros Castellados',
						description:
							'Agujeros PTH o vías que están cortadas para crear un agujero parcial o a la mitad para formar una apertura en el lado del barril del agujero. Generalmente se utilizan para montar una PCB en otra.'
					},
					impedanceControl: {
						title: 'Control de Impedancia',
						description:
							"Los conductores en una PCB transportan diversas señales, y para aumentar su velocidad de transmisión, su frecuencia debe elevarse. Sin embargo, factores como el grabado, el grosor de la capa y el ancho de la línea pueden causar variaciones de impedancia en la PCB, provocando distorsión de la señal. Por lo tanto, para los conductores de PCB de alta velocidad, los valores de impedancia deben controlarse dentro de un cierto rango, conocido como 'control de impedancia'. La tolerancia de impedancia es generalmente ±10%. Si se especifican requisitos de impedancia en la documentación pero no se seleccionan en el pedido, se considerará como ignorar el requisito de impedancia."
					},
					allViasFilled: {
						title: 'Todas las vías llenas de resina y cubiertas',
						description:
							'Si marcas esta opción, todas las vías se llenarán con resina, luego se cubrirán y se chaparán.'
					},
					viaInPad: {
						title: 'Vía en Pad',
						description:
							'Si hay vía en pad en tu diseño, es decir, vías en el pad SMD, marca esta opción y realizaremos un tapón de resina, luego cubriremos y chapamos.'
					},
					hdi: {
						title: 'HDI (Vías Sepultadas/Sordas)',
						description:
							'Una Vía Sorda conecta una capa exterior a una o más capas internas, pero no atraviesa toda la placa. Una Vía Sepultada conecta dos o más capas internas, pero no atraviesa a una capa externa.'
					}
				}
			},
			finalInspectionReport: {
				title: 'Informe de Inspección Final (Gratis)',
				description:
					'El informe de envío regular incluye adicionalmente el informe de prueba, el informe de inspección dimensional',
				values: {
					defaultInspectionReport: 'Informe de Inspección Predeterminado',
					microsectionInspectionReport: 'Informe de Inspección de Microsección',
					solderabilityInspectionReport: 'Informe de Inspección de Soldabilidad',
					thermalStressInspectionReport: 'Informe de Inspección de Estrés Térmico',
					impedanceTestReport: 'Informe de Prueba de Impedancia',
					humidityIndicatorCards: 'Tarjetas Indicadoras de Humedad'
				}
			},
			specialRequests: {
				title: 'Otras Solicitudes Especiales',
				placeholder: 'Completa cualquier detalle de PCB para que nos sea lo más claro posible entender tus requisitos.'
			}
		},

		assembly: {
			id: {
				title: 'ID del Producto'
			},
			createdAt: {
				title: 'Creado el'
			},
			updatedAt: {
				title: 'Actualizado el'
			},
			name: {
				title: 'Nombre del Producto',
				description: 'Por favor, ingrese un nombre para su producto',
				error: 'Se requiere un nombre de producto'
			},
			fileName: {
				title: 'Nombre del Archivo'
			},
			buildTime: {
				title: 'Tiempo de Construcción'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio Inicial'
			},
			finalPrice: {
				title: 'Precio Final'
			},
			flexibleOptions: {
				title: 'Opciones Flexibles',
				values: {
					turnkey: {
						title: 'Llave en Mano',
						description: 'MMWPCB proporciona las piezas'
					},
					kitted: {
						title: 'Conjunto o Consignado',
						description: 'El cliente proporciona las piezas'
					},
					combo: {
						title: 'Combinación',
						description: 'Usted proporciona algunas piezas, nosotros hacemos el resto'
					}
				}
			},
			boardType: {
				title: 'Tipo de Placa',
				description:
					'Sugerimos elegir hacer un panel si la cantidad de PCB única es superior a 20 piezas o si cualquier lado de la placa única es menor de 50 mm.',
				disclaimer:
					'Sugerimos elegir hacer un panel si la cantidad de PCB única es superior a 20 piezas o si cualquier lado de la placa única es menor de 50 mm.',
				values: {
					singlePieces: 'Piezas Únicas',
					panelizedPcbs: 'PCBs Panelizados'
				}
			},
			side: {
				title: 'Lado de Ensamblaje',
				description: '¿Los componentes están montados solo en un lado o en ambos lados?',
				values: {
					topSide: 'Lado Superior',
					bottomSide: 'Lado Inferior',
					bothSides: 'Ambos Lados'
				}
			},
			quantity: {
				title: 'Cantidad',
				description: 'Por favor, complete la cantidad total de PCBs únicos.',
				error: 'La cantidad debe ser mayor que 0',
				placeholder: 'Cantidad',
				pieces: 'Piezas'
			},
			payAttention: {
				title: 'Prestar Atención',
				description:
					'Debido a la diversidad de componentes, generalmente hay muchas cosas a tener en cuenta al realizar el ensamblaje, como si necesita ser horneado antes de montar, si hay requisitos especiales sobre la temperatura de soldadura, resistencia a la corrosión, humedad, etc. Nuestros ingenieros revisarán toda la información, pero aún es inevitable que haya omisiones. Por lo tanto, sería mucho mejor que pudiera resaltar los requisitos especiales con anticipación.'
			},
			sensitiveParts: {
				title: 'Componentes Sensibles',
				description: 'Contiene componentes/partes sensibles'
			},
			alternatesChina: {
				title: 'Alternativas Hechas en China',
				description: '¿Acepta alternativas/sustitutos hechos en China?'
			},
			otherParameters: {
				title: 'Otros Parámetros',
				description: 'Complete para obtener el precio exacto, o deje vacío para esperar la cotización final.'
			},
			solderPads: {
				title: 'Número de Pads de Soldadura de PCBA',
				description: 'El número total de pads de soldadura en cada placa',
				error: 'El número de pads de soldadura no puede ser menor que 0'
			},
			customizedServices: {
				title: 'Servicios Personalizados y Opciones Avanzadas',
				description: 'Las opciones a continuación, su costo no está incluido en la cotización en línea',
				values: {
					depanelBoards: {
						title: 'Desmontar las placas para entrega',
						description:
							'También se llama envío por subplacas, el PCB panelizado se divide en piezas y se empaqueta por separado para enviarse después del servicio de ensamblaje.'
					},
					functionTest: {
						title: 'Prueba Funcional',
						description:
							'La prueba funcional, también conocida como prueba FCT, es el último paso de fabricación de la creación de PCB. Esencialmente, la prueba funcional asegura que el PCB funcione correctamente. Se realiza principalmente para evitar problemas de ensamblaje, incluyendo cortocircuitos, circuitos abiertos, componentes faltantes o instalación de piezas incorrectas. Por favor, indique sus métodos de prueba funcional y requisitos detallados si es necesario.'
					},
					conformalCoating: {
						title: 'Recubrimiento Conformal',
						description:
							'El recubrimiento conformal es una capa protectora de película polimérica delgada aplicada a las placas de circuito impreso (PCB). El recubrimiento se llama conformal porque se ajusta a los contornos del PCB. Los recubrimientos conformales se aplican típicamente a 25-250 μm en el circuito electrónico y proporcionan protección contra la humedad, el polvo, productos químicos y extremos de temperatura.'
					},
					firmwareLoading: {
						title: 'Carga de Firmware',
						description:
							'En la industria de los PCB, la carga de firmware generalmente se refiere al proceso de cargar un programa escrito previamente o firmware en los chips del PCB. Durante la fabricación de PCB, diferentes tipos de chips a menudo se combinan para lograr funcionalidades específicas. Para que los chips funcionen correctamente, es necesario cargar el firmware correspondiente.'
					},
					pressFit: {
						title: 'Ensamblaje a Presión',
						description:
							'El ensamblaje a presión es una tecnología de fabricación electrónica utilizada para establecer conexiones mecánicas y eléctricas entre placas de circuito y componentes sin necesidad de soldadura. Implica insertar pines de conector en los agujeros pasantes dorados en la placa de circuito y aplicar una cierta cantidad de fuerza para establecer la conexión. Esta tecnología elimina algunos de los problemas que surgen en los procesos de soldadura tradicionales, como pines rotos o fríos, mejorando así la fiabilidad y durabilidad de los componentes conectores.'
					},
					boxBuild: {
						title: 'Ensamblaje de Caja',
						description:
							'También conocido como integración de sistemas, es un servicio completo de proceso que abarca desde el diseño y fabricación de la carcasa, la instalación de un PCBA, la instalación de cables y el ensamblaje del arnés de cables, e incluso la instalación de sistemas eléctricos y/o neumáticos.'
					},
					cableWireHarness: {
						title: 'Ensamblaje de Arnes de Cables',
						description:
							'Un conjunto de cables es un grupo de hilos o cables cubiertos por una funda exterior hecha de diversos materiales. Un arnés es un solo cable cubierto por una funda exterior. Podemos proporcionar ensamblajes de arneses simples y estándar, o arneses de cables y ensamblajes de cable personalizados en los tiempos de entrega más cortos.'
					},
					packageBox: {
						title: 'Caja de Embalaje',
						description: 'Personalice su propio embalaje especial para sus productos.'
					}
				}
			},
			xrayTest: {
				title: 'Número de Pruebas de Rayos X',
				description:
					'En la fabricación de PCB, la prueba de rayos X se refiere típicamente a la inspección por rayos X o detección por rayos X. Es una técnica de prueba no destructiva utilizada para inspeccionar la calidad de las conexiones de los puntos de soldadura y la colocación de componentes en productos electrónicos.',
				error: 'El número de pruebas de rayos X debe ser mayor que 0'
			},
			detailedInformation: {
				title: 'Información Detallada sobre el Ensamblaje',
				placeholder:
					'Por favor, complete la información técnica detallada sobre el ensamblaje de PCB, otros ensamblajes de carcasas, soldadura de cables, fusibles, remaches, etc.'
			}
		},

		stencil: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Creado en'
			},
			updatedAt: {
				title: 'Actualizado en'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor, ingrese un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			buildTime: {
				title: 'Tiempo de fabricación'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			type: {
				title: 'Tipo de plantilla',
				disclaimer: 'Permitir la combinación de varias PCB en una sola plantilla SMD.',
				values: {
					framework: 'Marco',
					nonFramework: 'Sin marco'
				}
			},
			multiLevel: {
				title: 'Plantilla multi-nivel/pasos',
				description: 'Plantilla STEP-UP parcial y plantilla STEP-DOWN parcial.'
			},
			side: {
				title: 'Lado de la plantilla',
				description:
					'Para Top+Bottom (en una sola plantilla), el tamaño de la plantilla debe ser al menos el doble del tamaño de la PCB.',
				values: {
					top: 'Arriba',
					bottom: 'Abajo',
					topBottomSingle: 'Arriba+Abajo (en una sola plantilla)',
					topBottomSeparate: 'Arriba y Abajo (en plantillas separadas)'
				}
			},
			size: {
				title: 'Tamaño (mm)',
				validArea: 'Área válida'
			},
			length: {
				title: 'Longitud'
			},
			width: {
				title: 'Ancho'
			},
			quantity: {
				title: 'Cantidad',
				pieces: 'Piezas',
				error: 'La cantidad debe ser mayor que 0'
			},
			thickness: {
				title: 'Grosor',
				description: 'El grosor de la plantilla se elige según los tamaños de los componentes.'
			},
			existingFiducials: {
				title: 'Fiduciales existentes',
				description: "Fiduciales 'medio láser', siempre en el lado de la PCB (abajo).",
				values: {
					halfLasered: 'Medio láser',
					laseredThrough: 'Láser atravesado'
				}
			},
			electroPolishing: {
				title: 'Electropulido',
				description:
					'El electropulido, también conocido como tratamiento de superficie electroquímica o desbarbado electroquímico, resulta en una calidad de superficie optimizada. Adecuado para series medianas.'
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				description:
					'Normalmente reduciremos las aperturas para los IC para hacer la plantilla, así que si no desea cambiar las aperturas, por favor indíquelo al realizar el pedido.',
				placeholder:
					'Complete cualquier detalle de la plantilla para que se nos haga lo más claro posible entender sus requisitos. Por ejemplo, plantilla multi-nivel/pasos, especifique la región y el grosor para el step-up/step-down en el gerber.'
			}
		},

		cnc: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Creado en'
			},
			updatedAt: {
				title: 'Actualizado en'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor, ingrese un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			quantity: {
				title: 'Cantidad',
				error: 'La cantidad debe ser mayor que 0'
			},
			designUnits: {
				title: 'Unidades de diseño'
			},
			material: {
				title: 'Material',
				values: {
					aluminum: 'Aluminio',
					stainlessSteel: 'Acero inoxidable',
					mildSteel: 'Acero al carbono',
					copper: 'Cobre',
					carbonFiber: 'Fibra de carbono'
				}
			},
			materialType: {
				title: 'Tipo de material',
				values: {
					aluminum5052: 'Aluminio 5052',
					aluminum6061: 'Aluminio 6061',
					aluminum7075: 'Aluminio 7075',
					aluminum2a12: 'Aluminio 2A12',
					stainlessSteel201: 'Acero inoxidable 201',
					stainlessSteel303: 'Acero inoxidable 303',
					stainlessSteel304: 'Acero inoxidable 304',
					stainlessSteel316: 'Acero inoxidable 316',
					stainlessSteel430: 'Acero inoxidable 430',
					mildSteel1018: 'Acero al carbono 1018',
					mildSteel1045: 'Acero al carbono 1045',
					mildSteelA36: 'Acero al carbono A36',
					copper: 'Cobre',
					carbonFiberPlate: 'Placa de fibra de carbono'
				}
			},
			color: {
				title: 'Color'
			},
			surfaceFinish: {
				title: 'Acabado de superficie',
				sections: {
					standard: 'Estándar (Tal como se mecaniza)',
					brushed: 'Cepillado',
					beadBlast: 'Chorro de perlas',
					sprayPainting: 'Pintura en spray',
					powderCoat: 'Recubrimiento en polvo',
					detailSanding: 'Lijado detallado',
					others: 'Otros'
				},
				values: {
					standard: 'Estándar (Tal como se mecaniza)',
					brushed: 'Cepillado',
					beadBlast: 'Chorro de perlas',
					sprayPaintingMatt: 'Pintura en spray mate',
					sprayPaintingHighGloss: 'Pintura en spray brillante',
					powderCoatMatt: 'Recubrimiento en polvo mate',
					powderCoatHighGloss: 'Recubrimiento en polvo brillante',
					sanding1000: 'Lijado 1000',
					others: 'Otros'
				},
				surfaceTreatment: {
					title: 'Introducción al tratamiento de superficies',
					description:
						'El lijado es el uso de finas partículas abrasivas para frotar la superficie del producto y producir un efecto de textura difusa y no lineal. Se adhiere un grano abrasivo diferente al papel de respaldo o a la parte posterior de la tabla, y los granos abrasivos pueden distinguirse por su granularidad según el tamaño: cuanto mayor es el tamaño de las partículas, más fino es el grano abrasivo, por lo que el efecto en la superficie es mejor.'
				}
			},
			surfaceFinishColor: {
				title: 'Color de acabado de superficie'
			},
			technicalDrawing: {
				title: 'Dibujo técnico',
				description:
					'Tenga en cuenta que su archivo 3D y las especificaciones de la pieza seleccionadas en esta pantalla (por ejemplo, acabado de superficie) tendrán prioridad sobre su dibujo técnico. Asegúrese de que su dibujo técnico esté actualizado.',
				uploadTechnicalDrawing: 'Subir dibujo técnico'
			},
			threadsTappedHoles: {
				title: 'Roscas y agujeros roscados',
				description:
					'Por favor, especifique si su pieza tiene roscas internas o externas. PCBWay no asumirá ningún riesgo de ensamblaje si se trata de una rosca no estándar, a menos que todas las piezas de ensamblaje sean producidas y ensambladas aquí.',
				question: '¿Sus piezas necesitan ser roscadas?'
			},
			inserts: {
				title: 'Insertos',
				description: 'Por favor, especifique los insertos estándar en su pieza'
			},
			tolerance: {
				title: 'Tolerancia',
				description:
					'Las tolerancias se controlarán con la norma ISO 2768-1. Para otras tolerancias más estrictas, se requerirá un dibujo técnico que indique las dimensiones críticas.',
				noTolerance: 'No se requieren tolerancias más estrictas'
			},
			surfaceRoughness: {
				title: 'Rugosidad de superficie',
				description:
					'La rugosidad de superficie se controlará en 250uin/6.3um Ra, a menos que tenga otros requisitos de rugosidad de superficie.'
			},
			partMarking: {
				title: 'Marcado de piezas',
				description:
					'Por favor, marque claramente el contenido de la serigrafía o grabado láser en el archivo CAD (DWG o DXF), y también se requiere un archivo gráfico (Ai o SVG).'
			},
			silkScreen: {
				title: 'Serigrafía'
			},
			laserEngraving: {
				title: 'Grabado láser'
			},
			partsAssembly: {
				title: 'Ensamblaje de piezas',
				description:
					"Por favor, especifique los requisitos de ensamblaje. PCBWay no asumirá ningún riesgo de ensamblaje si elige 'Sin requisitos de ensamblaje'.",
				values: {
					assemblyTest: 'Prueba de ensamblaje',
					shipAssembly: 'Envío con ensamblaje'
				}
			},
			finishedAppearance: {
				title: 'Apariencia final',
				values: {
					standard: {
						title: 'Estándar',
						description:
							'Marcas de procesamiento normales o rasguños causados durante la producción, o marcas sutiles dejadas después del acabado de superficie.'
					},
					premium: {
						title: 'Premium',
						description:
							'Requisitos de apariencia más altos, la superficie está limpia y suave sin defectos evidentes. (Excepto por las marcas inherentes de los racks de anodizado). Se enviarán fotos para confirmar antes del envío.'
					}
				}
			},
			inspection: {
				title: 'Inspección',
				description: 'El informe de inspección no se enviará con sus piezas a menos que lo necesite.',
				values: {
					standardInspection: {
						title: 'Inspección estándar (sin informe)',
						description: [
							'Sin cargo adicional',
							'PCBWay realizará las inspecciones de dimensiones y características superficiales según los dibujos proporcionados por el cliente.'
						]
					},
					standardInspectionFormalReport: {
						title: 'Inspección estándar con informe formal',
						description: ['Cargar costo adicional', 'Se requieren dibujos técnicos 2D.']
					},
					cmmInspectionFormalReport: {
						title: 'Inspección CMM con informe formal',
						description: ['Cargar costo adicional', 'Se requieren dibujos técnicos 2D.']
					},
					sourceMaterialCertification: {
						title: 'Certificación de material de origen',
						description: ['Cargar costo adicional', 'Se requieren dibujos técnicos 2D.']
					}
				}
			},
			productDescription: {
				title: 'Descripción del producto',
				description: '',
				descriptionDetail: {
					title1: 'Descripción del producto requerida para el despacho de aduanas:',
					body1:
						'1. Cumplir con los principios del comercio internacional y proporcionar descripciones de productos para el despacho de aduanas.',
					body2:
						'2. Por favor seleccione la descripción del producto correcta según el uso real del producto. Si no hay un artículo que coincida, seleccione Otro.',
					title2: 'Por favor, tenga en cuenta:',
					body3:
						'1. Pueden aplicarse aranceles e impuestos de importación, y las tasas aplicables de derechos e impuestos varían según la descripción de la mercancía y las regulaciones de importación de diferentes países.',
					body4:
						'2. Las mercancías con descripciones de productos incorrectas o poco claras pueden ser retenidas por la aduana. El cliente será responsable de las sanciones aduaneras resultantes de información incorrecta proporcionada.',
					body5:
						'3. PCBWay no cambiará las descripciones de productos proporcionadas por el cliente, por favor seleccione cuidadosamente.'
				},
				values: {
					printerEnclosure: 'Carcasa de impresora',
					inkCartridge: 'Cartucho de tinta',
					motorcycleConnectorEnclosure: 'Carcasa de conector de motocicleta',
					cncLatheReplacementArm: 'Brazo de reemplazo para torno CNC',
					headband: 'Diadema',
					wheelPlate: 'Placa de rueda',
					recorderEnclosure: 'Carcasa de grabadora',
					compoundOpticalMicroscope: 'Microscopio óptico compuesto'
				}
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				placeholder: 'Complete aquí cualquier requisito sobre producción, empaque o envío.'
			}
		},

		sheetMetal: {
			id: {
				title: 'ID de Producto'
			},
			createdAt: {
				title: 'Creado el'
			},
			updatedAt: {
				title: 'Actualizado el'
			},
			name: {
				title: 'Nombre del Producto',
				description: 'Por favor, ingresa un nombre para tu producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del Archivo'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio Inicial'
			},
			finalPrice: {
				title: 'Precio Final'
			},
			quantity: {
				title: 'Cantidad'
			},
			designUnits: {
				title: 'Unidades de Diseño'
			},
			material: {
				title: 'Material',
				values: {
					aluminum: 'Aluminio',
					stainlessSteel: 'Acero Inoxidable',
					mildSteel: 'Acero Dulce',
					copper: 'Cobre',
					carbonFiber: 'Fibra de Carbono'
				}
			},
			materialType: {
				title: 'Tipo de Material',
				values: {
					aluminum5052: 'Aluminio 5052',
					aluminum6061: 'Aluminio 6061',
					stainlessSteel201: 'Acero Inoxidable 201',
					stainlessSteel303: 'Acero Inoxidable 303',
					stainlessSteel304: 'Acero Inoxidable 304',
					stainlessSteel316: 'Acero Inoxidable 316',
					mildSteel1018: 'Acero Dulce 1018',
					copper101: 'Cobre 101',
					copperC110: 'Cobre C110',
					copper260: 'Cobre 260',
					carbonFiberPlate: 'Placa de Fibra de Carbono'
				}
			},
			color: {
				title: 'Color'
			},
			surfaceFinish: {
				title: 'Acabado de Superficie',
				sections: {
					standard: 'Estándar (Tal Cual)',
					brushed: 'Cepillado',
					beadBlast: 'Chorro de Perlas',
					sprayPainting: 'Pintura en Spray',
					powderCoat: 'Pintura en Polvo',
					detailSanding: 'Lijado Detallado',
					others: 'Otros'
				},
				values: {
					standard: 'Estándar (Tal Cual)',
					brushed: 'Cepillado',
					beadBlast: 'Chorro de Perlas',
					sprayPaintingMatt: 'Pintura en Spray Mate',
					sprayPaintingHighGloss: 'Pintura en Spray Brillante',
					powderCoatMatt: 'Pintura en Polvo Mate',
					powderCoatHighGloss: 'Pintura en Polvo Brillante',
					sanding1000: 'Lijado 1000',
					others: 'Otros'
				},
				surfaceTreatment: {
					title: 'Introducción al Tratamiento de Superficie',
					description:
						'El lijado es el uso de finas partículas abrasivas para frotar la superficie del producto y producir un efecto de textura difusa y no lineal. Se adhieren diferentes granos abrasivos al papel de respaldo o a la parte posterior de la placa, y los granos abrasivos pueden distinguirse por diferentes granulometrías según el tamaño: cuanto mayor sea el tamaño de las partículas, más fino será el grano abrasivo, por lo que el efecto de superficie es mejor.'
				}
			},
			surfaceFinishColor: {
				title: 'Color de Acabado de Superficie'
			},
			technicalDrawing: {
				title: 'Dibujo Técnico',
				description:
					'Ten en cuenta que tu archivo 3D y las especificaciones de la pieza seleccionadas en esta pantalla (por ejemplo, acabado de superficie) tendrán prioridad sobre tu dibujo técnico. Asegúrate de que tu dibujo técnico esté actualizado.',
				uploadTechnicalDrawing: 'Subir Dibujo Técnico'
			},
			threadsTappedHoles: {
				title: 'Roscas y Agujeros Roscados',
				description:
					'Por favor, especifica si tu pieza tiene alguna rosca interna o externa. PCBWay no asumirá ningún riesgo de ensamblaje si se trata de una rosca no estándar, a menos que todas las piezas de ensamblaje sean producidas y ensambladas aquí.',
				question: '¿Tus piezas necesitan roscar?'
			},
			inserts: {
				title: 'Insertos',
				description: 'Por favor, especifica los insertos estándar en tu pieza'
			},
			tolerance: {
				title: 'Tolerancia',
				description:
					'Las tolerancias se controlarán según la ISO 2768-1. Para tolerancias más estrictas, se requerirá un dibujo técnico para indicar las dimensiones críticas.',
				noTolerance: 'No se Requiere Tolerancia Más Estricta'
			},
			wielding: {
				title: 'Soldadura'
			},
			partMarking: {
				title: 'Marcado de Piezas',
				description:
					'Por favor, marca claramente el contenido de la serigrafía o grabado láser en el archivo CAD (DWG o DXF), y también se requiere un archivo gráfico (Ai o SVG).'
			},
			silkScreen: {
				title: 'Sérigrafía'
			},
			laserEngraving: {
				title: 'Grabado Láser'
			},
			partsAssembly: {
				title: 'Ensamblaje de Piezas',
				description:
					'Por favor, especifica los requisitos de ensamblaje. PCBWay no asumirá ningún riesgo de ensamblaje si eliges la opción sin requisitos de ensamblaje.',
				values: {
					assemblyTest: 'Prueba de Ensamblaje',
					shipAssembly: 'Enviar Ensamblado'
				}
			},
			finishedAppearance: {
				title: 'Apariencia Final',
				values: {
					standard: {
						title: 'Estándar',
						description:
							'Rastros de procesamiento normales o rayones causados durante la producción, o rastros sutiles dejados después del acabado de superficie.'
					},
					premium: {
						title: 'Premium',
						description:
							'Requerimientos estéticos más altos, la superficie es limpia y suave sin defectos evidentes. (Excepto por las marcas inherentes al soporte de anodizado). Se enviarán fotos para confirmar antes del envío.'
					}
				}
			},
			inspection: {
				title: 'Inspección',
				description: 'El informe de inspección no se enviará con tus piezas a menos que lo necesites.',
				values: {
					standardInspection: {
						title: 'Inspección Estándar (Sin Informe)',
						description: [
							'Sin costo adicional',
							'PCBWay realizará inspecciones de dimensiones y características de superficie basadas en los dibujos proporcionados por el cliente.'
						]
					},
					standardInspectionFormalReport: {
						title: 'Inspección Estándar con Informe Formal',
						description: ['Costo adicional', 'Se requieren dibujos técnicos 2D.']
					},
					cmmInspectionFormalReport: {
						title: 'Inspección CMM con Informe Formal',
						description: ['Costo adicional', 'Se requieren dibujos técnicos 2D.']
					},
					sourceMaterialCertification: {
						title: 'Certificación de Material de Origen',
						description: ['Costo adicional', 'Se requieren dibujos técnicos 2D.']
					}
				}
			},
			productDescription: {
				title: 'Descripción del Producto',
				description: '',
				descriptionDetail: {
					title1: 'Descripción del producto requerida para el despacho de aduana:',
					body1:
						'1. Cumplir con los principios del comercio internacional y proporcionar descripciones de productos para el despacho de aduana.',
					body2:
						'2. Por favor, selecciona la descripción correcta del producto según el uso real del producto. Si no hay un ítem coincidente, selecciona Otro.',
					title2: 'Por favor, tenga en cuenta:',
					body3:
						'1. Puede haber derechos de aduana e impuestos de importación, y las tarifas de derechos e impuestos aplicables varían según la descripción de las mercancías y las regulaciones de importación de diferentes países.',
					body4:
						'2. Las mercancías con descripciones de productos incorrectas o poco claras pueden ser retenidas por la aduana. El cliente será responsable de las sanciones aduaneras resultantes de la información incorrecta proporcionada.',
					body5:
						'3. PCBWay no cambiará las descripciones de producto proporcionadas por el cliente, por favor selecciona cuidadosamente.'
				},
				values: {
					printerEnclosure: 'Carcasa de Impresora',
					inkCartridge: 'Cartucho de Tinta',
					motorcycleConnectorEnclosure: 'Carcasa de Conector de Motocicleta',
					cncLatheReplacementArm: 'Brazo de Reemplazo para Torno CNC',
					headband: 'Diadema',
					wheelPlate: 'Placa de Rueda',
					recorderEnclosure: 'Carcasa de Grabadora',
					compoundOpticalMicroscope: 'Microscopio Óptico Compuesto'
				}
			},
			specialRequests: {
				title: 'Otras Solicitudes Especiales',
				placeholder: 'Llena aquí cualquier requisito sobre producción, empaque o envío.'
			}
		},

		threePrinting: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Creado el'
			},
			updatedAt: {
				title: 'Actualizado el'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor, introduzca un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			quantity: {
				title: 'Cantidad'
			},
			designUnits: {
				title: 'Unidades de diseño'
			},
			material: {
				title: 'Material',
				values: {
					aluminum: 'Aluminio',
					stainlessSteel: 'Acero inoxidable',
					nylon: 'Nylon',
					abs: 'ABS',
					petg: 'PETG'
				}
			},
			materialType: {
				title: 'Tipo de material',
				values: {
					aluminum: 'Aluminio',
					stainlessSteel: 'Acero inoxidable',
					pa12: 'PA 12',
					hppa12: 'HP PA 12',
					glassFiberNylon: 'Nylon con fibra de vidrio',
					petg: 'PETG'
				}
			},
			color: {
				title: 'Color'
			},
			process: {
				title: 'Proceso'
			},
			surfaceFinish: {
				title: 'Acabado de superficie',
				sections: {
					sprayPainting: 'Pintura en aerosol',
					powderCoat: 'Recubrimiento en polvo',
					detailSanding: 'Lijado detallado',
					dying: 'Tintado'
				},
				values: {
					sprayPaintingMatt: 'Pintura en aerosol mate',
					sprayPaintingHighGloss: 'Pintura en aerosol brillante',
					sanding1000: 'Lijado 1000',
					dying: 'Tintado'
				},
				surfaceTreatment: {
					title: 'Introducción al tratamiento de superficies',
					description:
						'El lijado es el uso de partículas de arena abrasiva fina para frotar la superficie del producto y producir un efecto de textura difusa y no lineal. Se adhiere diferente grano abrasivo al papel de respaldo o la parte posterior de la tabla, y el grano abrasivo se puede distinguir por diferentes granularidades según el tamaño: cuanto mayor sea el tamaño de la partícula, más fino será el grano abrasivo, por lo que el efecto de superficie es mejor.'
				}
			},
			surfaceFinishColor: {
				title: 'Color de acabado de superficie'
			},
			technicalDrawing: {
				title: 'Dibujo técnico',
				description:
					'Tenga en cuenta que su archivo 3D y las especificaciones de la pieza seleccionadas en esta pantalla (por ejemplo, acabado de superficie) tendrán prioridad sobre su dibujo técnico. Asegúrese de que su dibujo técnico esté actualizado.',
				uploadTechnicalDrawing: 'Subir dibujo técnico'
			},
			threadsTappedHoles: {
				title: 'Roscas y agujeros roscados',
				description:
					'Por favor, especifique si su pieza tiene roscas internas o externas. PCBWay no asumirá ningún riesgo de ensamblaje si se trata de una rosca no estándar, a menos que todas las partes de ensamblaje se produzcan y ensamblen aquí.',
				question: '¿Sus piezas necesitan ser roscadas?'
			},
			inserts: {
				title: 'Inserts',
				description: 'Por favor, especifique los inserts estándar en su pieza'
			},
			partMarking: {
				title: 'Marcado de piezas',
				description:
					'Por favor, marque claramente el contenido de la serigrafía o grabado láser en el archivo CAD (DWG o DXF), y también se requiere un archivo gráfico (Ai o SVG).'
			},
			silkScreen: {
				title: 'Serigrafía'
			},
			laserEngraving: {
				title: 'Grabado láser'
			},
			partsAssembly: {
				title: 'Ensamblaje de partes',
				description:
					'Por favor, especifique los requisitos de ensamblaje. PCBWay no asumirá ningún riesgo de ensamblaje si elige no tener requisitos de ensamblaje.',
				values: {
					assemblyTest: 'Prueba de ensamblaje',
					shipAssembly: 'Envío de ensamblaje'
				}
			},
			printingRisk: {
				title: 'Riesgo de impresión',
				description:
					'El parámetro está marcado por defecto. Puede desmarcarlo y le enviaremos un correo electrónico con problemas cuando la pieza tenga un riesgo de impresión específico.'
			},
			wallThicknessRisk: {
				title: 'Riesgo de grosor de pared asumido',
				description:
					'El cliente sabe que las paredes delgadas diseñadas no cumplen con el estándar de grosor de pared, pero necesita imprimir tal cual y asumir todos los riesgos.'
			},
			printedThreadsRisk: {
				title: 'Riesgo de roscas impresas no estándar asumido',
				description:
					'El cliente sabe que las roscas diseñadas no cumplen con el estándar de impresión de roscas, pero necesita imprimir tal cual y asumir todos los riesgos.'
			},
			productDescription: {
				title: 'Descripción del producto',
				description: '',
				descriptionDetail: {
					title1: 'Descripción del producto requerida para el despacho aduanero:',
					body1:
						'1. Cumplir con los principios del comercio internacional y proporcionar descripciones del producto para el despacho aduanero.',
					body2:
						'2. Por favor, seleccione la descripción del producto correcta según el uso real del producto. Si no hay un elemento que coincida, seleccione Otro.',
					title2: 'Por favor, tenga en cuenta:',
					body3:
						'1. Pueden existir derechos e impuestos de importación, y las tasas de derechos e impuestos aplicables varían según la descripción de las mercancías y las regulaciones de importación de diferentes países.',
					body4:
						'2. Las mercancías con descripciones de productos incorrectas o poco claras pueden ser retenidas por la aduana. El cliente será responsable de las sanciones aduaneras derivadas de información incorrecta proporcionada.',
					body5:
						'3. PCBWay no cambiará las descripciones de productos proporcionadas por el cliente, por favor seleccione con cuidado.'
				},
				values: {
					printerEnclosure: 'Carcasa de la impresora',
					inkCartridge: 'Cartucho de tinta',
					motorcycleConnectorEnclosure: 'Carcasa del conector de motocicleta',
					cncLatheReplacementArm: 'Brazo de repuesto para torreta CNC',
					headband: 'Banda para la cabeza',
					wheelPlate: 'Placa de rueda',
					recorderEnclosure: 'Carcasa de grabadora',
					compoundOpticalMicroscope: 'Microscopio óptico compuesto'
				}
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				placeholder: 'Complete aquí cualquier requisito sobre producción, embalaje o envío.'
			}
		},

		injectionMolding: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Creado el'
			},
			updatedAt: {
				title: 'Actualizado el'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor, ingresa un nombre para tu producto',
				error: 'El nombre del producto es requerido'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			quantity: {
				title: 'Cantidad del primer pedido',
				error: 'La cantidad debe ser mayor a 0'
			},
			minExpectedVolume: {
				title: 'Volumen anual mínimo esperado'
			},
			maxExpectedVolume: {
				title: 'Volumen anual máximo esperado'
			},
			designUnits: {
				title: 'Unidades de diseño'
			},
			material: {
				title: 'Material',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			materialType: {
				title: 'Tipo de material',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			color: {
				title: 'Color'
			},
			spiFinish: {
				title: 'Acabado SPI'
			},
			toolRequirements: {
				title: 'Requisitos de herramientas',
				description:
					'Por favor, proporciona los requisitos del molde, como requisitos de superficie, resistencia del molde, tamaño de la máquina, número de cavidades y requisitos de diseño del molde, etc.'
			},
			molds: {
				title: 'Moldes',
				description:
					'Mantendremos el molde durante 2 años. Puedes seguir pidiendo piezas hasta que finalice la vida útil del molde. Después de la expiración, se reciclará por defecto. Si necesitas que el molde te sea enviado, por favor contacta a tu representante comercial para información sobre el envío.',
				values: {
					keepMoldsFactory: 'Mantener los moldes en la fábrica',
					moldsShipped: 'Necesito que los moldes sean enviados'
				}
			},
			surfaceFinish: {
				title: 'Acabado de superficie',
				sections: {},
				values: {},
				surfaceTreatment: {
					title: 'Introducción al tratamiento de superficie',
					description:
						'El pulido implica usar partículas de arena fina para frotar la superficie del producto, creando un efecto texturizado difuso y no lineal. Se adhiere un grano abrasivo diferente al papel de respaldo o a la parte posterior de la placa, y el grano abrasivo puede distinguirse por el tamaño de las partículas: cuanto más grande sea el tamaño de la partícula, más fino será el grano abrasivo, y, por lo tanto, el efecto sobre la superficie será mejor.'
				}
			},
			surfaceFinishColor: {
				title: 'Color del acabado de superficie'
			},
			technicalDrawing: {
				title: 'Dibujo técnico',
				description:
					'Ten en cuenta que el archivo 3D y las especificaciones de la pieza seleccionadas en esta pantalla (por ejemplo, acabado de superficie) tendrán prioridad sobre tu dibujo técnico. Asegúrate de que tu dibujo técnico esté actualizado.',
				uploadTechnicalDrawing: 'Subir dibujo técnico'
			},
			threadsTappedHoles: {
				title: 'Roscas y agujeros roscados',
				description:
					'Por favor, especifica si tu pieza tiene roscas internas o externas. PCBWay no asumirá ningún riesgo de ensamblaje si se trata de un tipo de rosca no estándar, a menos que todas las piezas de ensamblaje sean producidas y ensambladas aquí.',
				question: '¿Tu pieza necesita roscas?'
			},
			inserts: {
				title: 'Inserts',
				description: 'Por favor, especifica los inserts estándar en tu pieza'
			},
			tolerance: {
				title: 'Tolerancia',
				description:
					'Las tolerancias se controlarán según la ISO 2768-1. Para otras tolerancias más estrictas, se requerirá un dibujo técnico para indicar las dimensiones clave.',
				noTolerance: 'No se requieren tolerancias más estrictas'
			},
			partMarking: {
				title: 'Marcado de piezas',
				description:
					'Por favor, marca claramente el contenido de la serigrafía o grabado láser en el archivo CAD (DWG o DXF), y también se requiere un archivo gráfico (Ai o SVG).'
			},
			silkScreen: {
				title: 'Serigrafía'
			},
			laserEngraving: {
				title: 'Grabado láser'
			},
			partsAssembly: {
				title: 'Ensamblaje de piezas',
				description:
					"Por favor, especifica los requisitos de ensamblaje. PCBWay no asumirá ningún riesgo de ensamblaje si eliges 'Sin requisitos de ensamblaje'.",
				values: {
					assemblyTest: 'Prueba de ensamblaje',
					shipAssembly: 'Enviar ensamblaje'
				}
			},
			finishedAppearance: {
				title: 'Apariencia terminada',
				values: {
					standard: {
						title: 'Estándar',
						description:
							'Marcas de procesamiento normales o rayones causados durante la producción, o marcas leves que quedan después del acabado de superficie.'
					},
					premium: {
						title: 'Premium',
						description:
							'Requisitos de apariencia más altos, superficie limpia y suave sin defectos evidentes. (Excluyendo marcas de bastidor de anodización inherentes). Se enviarán fotos para confirmación antes del envío.'
					}
				}
			},
			inspection: {
				title: 'Inspección',
				description: 'El informe de inspección no se enviará con tus piezas, a menos que lo necesites.',
				values: {
					standardInspection: {
						title: 'Inspección estándar (sin informe)',
						description: [
							'No hay cargo adicional',
							'PCBWay realizará inspecciones de dimensiones y características de superficie basadas en los dibujos proporcionados por el cliente.'
						]
					},
					sourceMaterialCertification: {
						title: 'Certificación de material de origen',
						description: ['Pagar un cargo adicional', 'Se requieren dibujos técnicos en 2D.']
					}
				}
			},
			productDescription: {
				title: 'Descripción del producto',
				description: '',
				descriptionDetail: {
					title1: 'Descripción del producto requerida para el despacho aduanero:',
					body1:
						'1. Cumplir con los principios del comercio internacional y proporcionar descripciones de productos para el despacho aduanero.',
					body2:
						"2. Por favor, selecciona la descripción de producto correcta de acuerdo con el uso real del producto. Si no hay un artículo correspondiente, selecciona 'Otro'.",
					title2: 'Ten en cuenta:',
					body3:
						'1. Puede haber derechos e impuestos de importación, y los aranceles y tasas aplicables varían según la descripción del producto y las regulaciones de importación de diferentes países.',
					body4:
						'2. Las mercancías con descripciones de productos incorrectas o poco claras pueden ser retenidas por las aduanas. El cliente será responsable de las sanciones aduaneras resultantes de la información incorrecta proporcionada.',
					body5:
						'3. PCBWay no cambiará las descripciones de productos proporcionadas por el cliente, así que selecciona cuidadosamente.'
				},
				values: {
					printerEnclosure: 'Carcasa de la impresora',
					inkCartridge: 'Cartucho de tinta',
					motorcycleConnectorEnclosure: 'Carcasa del conector de motocicleta',
					cncLatheReplacementArm: 'Brazo de reemplazo de tornero CNC',
					headband: 'Cinta para la cabeza',
					wheelPlate: 'Placa de rueda',
					recorderEnclosure: 'Carcasa del grabador',
					compoundOpticalMicroscope: 'Microscopio óptico compuesto'
				}
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				placeholder: 'Escribe aquí cualquier requisito sobre producción, embalaje o envío.'
			}
		},

		vacuumCasting: {
			id: {
				title: 'ID del producto'
			},
			createdAt: {
				title: 'Creado el'
			},
			updatedAt: {
				title: 'Actualizado el'
			},
			name: {
				title: 'Nombre del producto',
				description: 'Por favor, ingrese un nombre para su producto',
				error: 'El nombre del producto es obligatorio'
			},
			fileName: {
				title: 'Nombre del archivo'
			},
			weight: {
				title: 'Peso'
			},
			initialPrice: {
				title: 'Precio inicial'
			},
			finalPrice: {
				title: 'Precio final'
			},
			quantity: {
				title: 'Cantidad'
			},
			designUnits: {
				title: 'Unidades de diseño'
			},
			material: {
				title: 'Material',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			materialType: {
				title: 'Tipo de material',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			color: {
				title: 'Color'
			},
			surfaceFinish: {
				title: 'Acabado de superficie',
				sections: {
					beadBlast: 'Chorro de perlas',
					sprayPainting: 'Pintura en spray',
					detailSanding: 'Lijado detallado'
				},
				values: {
					beadBlast: 'Chorro de perlas',
					sprayPaintingMatt: 'Pintura en spray mate',
					sprayPaintingHighGloss: 'Pintura en spray brillo',
					sanding1000: 'Lijado 1000'
				},
				surfaceTreatment: {
					title: 'Introducción al tratamiento de superficies',
					description:
						'El lijado es el uso de finas partículas de arena abrasiva para frotar la superficie del producto y producir un efecto de textura difusa y no lineal. Adhiera diferentes granos abrasivos al papel de soporte o la parte posterior de la tabla, y los granos abrasivos se pueden distinguir por diferentes granularidades según el tamaño: cuanto mayor sea el tamaño de la partícula, más fino será el grano abrasivo, por lo que el efecto superficial será mejor.'
				}
			},
			surfaceFinishColor: {
				title: 'Color de acabado de superficie'
			},
			technicalDrawing: {
				title: 'Dibujo técnico',
				description:
					'Tenga en cuenta que su archivo 3D y las especificaciones de la pieza seleccionadas en esta pantalla (por ejemplo, acabado de superficie) tendrán prioridad sobre su dibujo técnico. Asegúrese de que su dibujo técnico esté actualizado.',
				uploadTechnicalDrawing: 'Subir dibujo técnico'
			},
			threadsTappedHoles: {
				title: 'Filetes y agujeros roscados',
				description:
					'Por favor, especifique si su pieza tiene filetes internos o externos. PCBWay no asumirá ningún riesgo de ensamblaje si es un filete no estándar, a menos que todas las piezas de ensamblaje se produzcan y ensamblen aquí.',
				question: '¿Sus piezas necesitan roscar filetes?'
			},
			inserts: {
				title: 'Inserciones',
				description: 'Por favor, especifique las inserciones estándar en su pieza.'
			},
			tolerance: {
				title: 'Tolerancia',
				description:
					'Las tolerancias serán controladas según la ISO 2768-1. Para otras tolerancias más ajustadas, se requerirá un dibujo técnico para indicar las dimensiones críticas.',
				noTolerance: 'No se requiere tolerancia más ajustada'
			},
			partMarking: {
				title: 'Marcado de piezas',
				description:
					'Por favor, marque claramente el contenido de la serigrafía o grabado láser en el archivo CAD (DWG o DXF), y también se requiere un archivo gráfico (Ai o SVG).'
			},
			silkScreen: {
				title: 'Serigrafía'
			},
			laserEngraving: {
				title: 'Grabado láser'
			},
			partsAssembly: {
				title: 'Ensamblaje de piezas',
				description:
					"Por favor, especifique los requisitos de ensamblaje. PCBWay no asumirá ningún riesgo de ensamblaje si elige 'Sin requisitos de ensamblaje'.",
				values: {
					assemblyTest: 'Prueba de ensamblaje',
					shipAssembly: 'Envío de ensamblaje'
				}
			},
			finishedAppearance: {
				title: 'Apariencia terminada',
				values: {
					standard: {
						title: 'Estándar',
						description:
							'Marcas de procesamiento normales o rayones causados durante la producción, o marcas sutiles dejadas después del acabado de superficie.'
					},
					premium: {
						title: 'Premium',
						description:
							'Requisitos de apariencia más altos, superficie limpia y suave sin defectos evidentes. (Excepto por las marcas inherentes del marco de anodización). Se enviarán fotos para confirmar antes del envío.'
					}
				}
			},
			inspection: {
				title: 'Inspección',
				description: 'El informe de inspección no se enviará con sus piezas a menos que lo necesite.',
				values: {
					standardInspection: {
						title: 'Inspección estándar (sin informe)',
						description: [
							'Sin costo adicional',
							'PCBWay realizará las inspecciones de dimensiones y características de superficie basadas en los dibujos proporcionados por el cliente.'
						]
					},
					sourceMaterialCertification: {
						title: 'Certificación de material de origen',
						description: ['Pagar un extra', 'Se requieren dibujos técnicos en 2D.']
					}
				}
			},
			productDescription: {
				title: 'Descripción del producto',
				description: '',
				descriptionDetail: {
					title1: 'Descripción del producto requerida para la aduana:',
					body1:
						'1. Cumplir con los principios del comercio internacional y proporcionar descripciones de productos para la aduana.',
					body2:
						"2. Por favor, seleccione la descripción del producto correcta según el uso real del producto. Si no hay un artículo coincidente, seleccione 'Otro'.",
					title2: 'Por favor, tenga en cuenta:',
					body3:
						'1. Puede haber derechos e impuestos de importación, y las tasas de derechos e impuestos son variables según la descripción de las mercancías y las regulaciones de importación de diferentes países.',
					body4:
						'2. Los productos con descripciones de productos incorrectas o poco claras pueden ser retenidos por la aduana. El cliente será responsable de las sanciones aduaneras derivadas de información incorrecta proporcionada.',
					body5:
						'3. PCBWay no cambiará las descripciones de productos proporcionadas por el cliente, por favor seleccione cuidadosamente.'
				},
				values: {
					printerEnclosure: 'Carcasa de impresora',
					inkCartridge: 'Cartucho de tinta',
					motorcycleConnectorEnclosure: 'Carcasa del conector de motocicleta',
					cncLatheReplacementArm: 'Brazo de reemplazo para torno CNC',
					headband: 'Banda para la cabeza',
					wheelPlate: 'Placa de rueda',
					recorderEnclosure: 'Carcasa del grabador',
					compoundOpticalMicroscope: 'Microscopio óptico compuesto'
				}
			},
			specialRequests: {
				title: 'Otras solicitudes especiales',
				placeholder: 'Complete aquí cualquier requisito acerca de la producción, el empaque o el envío.'
			}
		}
	},

	services: {
		title: 'Productos y Servicios',
		subtitle: 'Tecnologías integrales de medición y prueba para aplicaciones industriales avanzadas.',
		description:
			'Somos un proveedor líder de tecnologías avanzadas de medición y prueba, especializado en ofrecer soluciones de alta precisión para abordar desafíos técnicos complejos en diversas industrias. Nuestro portafolio incluye analizadores de espectro de última generación, equipos de prueba de redes, herramientas de calibración y servicios técnicos integrados, diseñados para cumplir con los más altos estándares de rendimiento e innovación. Al combinar hardware sofisticado, software inteligente y soporte técnico experto, ayudamos a las empresas a superar los límites de la investigación tecnológica, el desarrollo y el aseguramiento de la calidad.',

		subHeading1: 'Tecnologías Innovadoras de Medición',
		para1:
			'Ofrecemos soluciones de medición de alto rendimiento que impulsan el avance tecnológico. Nuestros analizadores de espectro avanzados, equipos de prueba de redes y herramientas de calibración están diseñados para proporcionar una precisión y confiabilidad incomparables. Al combinar hardware de última generación con software sofisticado, ayudamos a ingenieros e investigadores a alcanzar nuevos niveles de rendimiento y descubrimientos revolucionarios.',
		subHeading2: 'Servicios Técnicos Integrados',
		para2:
			'Más allá de la venta de equipos, ofrecemos servicios técnicos completos que cubren todo el ciclo de vida del producto. Nuestro equipo de expertos brinda calibración especializada, reparación de precisión, asesoría técnica y desarrollo de soluciones personalizadas. Garantizamos que su infraestructura de medición se mantenga a la vanguardia de la tecnología, con soporte global y certificación trazable NIST, asegurando los más altos estándares de excelencia técnica.',

		explorePS: 'Explorar Nuestros Productos y Servicios',
		browseSolutions: 'Explorar Nuestras Soluciones',
		browseCatalog: 'Explorar Nuestro Catálogo',
		viewAllPS: 'Ver Todos los Productos y Servicios',

		catalog: {
			title: 'Catálogo de Productos y Servicios',
			subtitle:
				'Una selección completa de productos de alta calidad y soluciones personalizadas para satisfacer sus necesidades.'
		},

		startingFrom: 'Desde',
		getQuote: 'Obtener Cotización',
		features: 'Características',
		loginToGetQuote: 'Inicie sesión para obtener una cotización',

		requestQuote: {
			title: 'Solicitar Cotización',
			company: 'Empresa',
			testingRequirements: 'Requisitos de Prueba',
			companyError: 'Por favor, ingrese el nombre de su empresa',
			firstNameError: 'Por favor, ingrese su nombre',
			lastNameError: 'Por favor, ingrese su apellido',
			emailError: 'Por favor, ingrese un correo electrónico válido',
			phoneError: 'Por favor, ingrese un número de teléfono válido',
			autPort: 'Puerto AUT',
			connectorType: 'Tipo de Conector',
			impedance: 'Impedancia',
			gender: 'Género',
			submittingRequest: 'Enviando Solicitud',
			requestError: 'Error al enviar la solicitud',
			requestSuccess: 'Su solicitud ha sido enviada con éxito',
			serviceRequestNo: 'Número de Solicitud de Servicio',
			viewServiceRequests: 'Ver Mis Solicitudes de Servicio'
		},

		sections: {
			oscilloscopes: {
				title: 'Osciloscopios',
				subtitle: 'Visualiza con precisión las formas de onda eléctricas con facilidad y precisión.',

				specs: {
					title: 'Título',
					category: 'Categoría',
					categories: 'Categorías',
					bandwidth: 'Ancho de banda',
					maxMemoryDepth: 'Profundidad máxima de memoria',
					maxSampleRate: 'Tasa máxima de muestreo',
					type: 'Tipo',
					types: 'Tipos'
				},

				categories: {
					infiniiVision: 'Osciloscopios InfiniiVision',
					realTime: 'Osciloscopios en tiempo real'
				},

				types: {
					realTime: 'Tiempo real'
				},

				services: {
					HD304MSO: {
						title: 'Osciloscopio InfiniiVision HD304MSO: 4 Canales Analógicos',
						subtitle:
							'La serie HD3 ofrece una impresionante resolución con alta precisión, memoria profunda, cuatro canales analógicos y una nueva tecnología personalizada que abarca desde 200 MHz hasta 1 GHz.'
					},
					DSOS804A: {
						title: 'Osciloscopio de Alta Definición DSOS804A: 8 GHz, 4 Canales Analógicos',
						subtitle:
							'Los osciloscopios de la serie DSOS804A tienen un ancho de banda de 8 GHz, una pantalla táctil capacitiva XGA de 15” y un convertidor analógico-digital de 10 bits.'
					}
				}
			},

			networkAnalyzers: {
				title: 'Analizadores de Redes',
				subtitle: 'Analiza y optimiza el rendimiento de la red con datos confiables.',

				specs: {
					title: 'Título',
					category: 'Categoría',
					categories: 'Categorías',
					builtInPorts: 'Puertos Integrados',
					maxFrequency: 'Frecuencia Máxima',
					internalSources: 'Fuentes Internas',
					vnaSeries: 'Serie VNA',
					vnaType: 'Tipo de VNA',
					vnaTypes: 'Tipos de VNA'
				},

				categories: {
					ena: 'Analizadores de Red Vectorial ENA',
					pna: 'Analizadores de Red PNA'
				},

				vnaTypes: {
					benchtop: 'Banco de Pruebas'
				},

				services: {
					E5080B: {
						title: 'Analizador de Red Vectorial ENA E5080B',
						subtitle: 'El analizador de red ENA más integrado y flexible'
					},
					N5291A: {
						title: 'Sistema Milimétrico PNA N5291A, 900 Hz a 120 GHz',
						subtitle: 'Obtén versatilidad con un analizador de red de banda ancha de dos o cuatro puertos'
					}
				}
			},

			antennaTestSystems: {
				title: 'Sistemas de Pruebas de Antenas',
				subtitle: 'Optimiza el rendimiento de las antenas con soluciones avanzadas de pruebas y medición.',

				specs: {
					title: 'Título',
					category: 'Categoría',
					categories: 'Categorías',
					frequency: 'Frecuencia'
				},

				categories: {
					farField: 'Campo Lejano',
					nearField: 'Campo Cercano',
					onChip: 'En Chip'
				},

				services: {
					AP1: { title: 'Producto 1' },
					AP2: { title: 'Producto 2' },
					AP3: { title: 'Producto 3' },
					AP4: { title: 'Producto 4' }
				}
			},

			circuitTestPlatforms: {
				title: 'Plataformas de Pruebas de Circuitos mmWave/THz',
				subtitle: 'Acelera el diseño y las pruebas de circuitos mmWave/THz con soluciones avanzadas de medición.',

				specs: {
					title: 'Título',
					category: 'Categoría',
					categories: 'Categorías',
					frequency: 'Frecuencia'
				},

				categories: {
					circuitTestPlatform: 'Plataforma de Pruebas de Circuitos mmWave/THz'
				},

				services: {
					CP1: { title: 'Producto 1' }
				}
			}
		}
	},

	serviceRequests: {
		title: 'Solicitudes de servicio',
		allServiceRequests: 'Todas las solicitudes de servicio',
		fetchingServiceRequests: 'Obteniendo solicitudes de servicio',
		noServiceRequests: 'No se encontraron solicitudes de servicio',
		checkFilters: 'Verifique sus filtros o comience a explorar para encontrar lo que necesita.',
		browseSolutions: 'Explorar nuestras soluciones',
		id: 'ID',
		createdBy: 'Creado por',
		createdAt: 'Creado el',
		updatedAt: 'Actualizado el',
		service: 'Servicio',
		status: 'Estado',
		price: 'Precio',
		payNow: 'Pagar ahora',
		paymentSuccess: 'Pago exitoso',
		payment: {
			title: 'Detalles del pago',
			transactionId: 'ID de transacción',
			paymentTime: 'Hora de pago',
			paymentMethod: 'Método de pago',
			totalAmount: 'Monto total',
			failedToGenerateToken: 'Error al generar el token de pago',
			failedToSubmit: 'Error al enviar el pago',
			checkout: 'Pagar',
			amountToBePaid: 'Monto a pagar',
			paymentSuccess: 'Pago exitoso',
			paymentTotal: 'Total del pago',
			print: 'Imprimir',
			payNow: 'Pagar ahora',
			cancelPayment: 'Cancelar pago'
		}
	},

	serviceStatus: {
		APPLICATION_RECEIVED: 'Solicitud recibida',
		IN_REVIEW: 'En revisión',
		WAITING_FOR_PAYMENT: 'Esperando pago',
		TESTING_IN_PROGRESS: 'Pruebas en progreso',
		REPORT_RELEASED: 'Informe publicado',
		REJECTED: 'Rechazado'
	}
};
