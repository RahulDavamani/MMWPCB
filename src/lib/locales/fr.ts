import type { Lang } from './en';

export const fr: Lang = {
	common: {
		yes: 'Oui',
		no: 'Non',
		or: 'Ou',
		none: 'Aucun',
		other: 'Autre',

		search: 'Rechercher',
		sortBy: 'Trier par',
		typeHere: 'Tapez ici...',
		pleaseEnterValue: 'Veuillez entrer une valeur',

		warning: 'Avertissement',
		error: 'Erreur',

		add: 'Ajouter',
		edit: 'Modifier',
		save: 'Enregistrer',
		continue: 'Continuer',
		retry: 'Réessayer',
		cancel: 'Annuler',
		close: 'Fermer',
		remove: 'Supprimer',
		reset: 'Réinitialiser',

		upload: 'Téléverser',
		select: 'Sélectionner',
		home: 'Accueil',
		moreDetails: 'Plus de détails',

		noResultsFound: 'Aucun résultat trouvé',
		notSelected: 'Non sélectionné',

		page: 'Page',
		results: 'Résultats'
	},

	color: {
		white: 'Blanc',
		black: 'Noir',
		green: 'Vert',
		red: 'Rouge',
		blue: 'Bleu',
		yellow: 'Jaune',
		purple: 'Violet',
		pink: 'Rose',
		orange: 'Orange',
		grey: 'Gris',
		matteBlack: 'Noir mat',
		matteGreen: 'Vert mat',
		matteBlue: 'Bleu mat',
		matteRed: 'Rouge mat',
		silver: 'Argent',
		silverWhite: 'Argent blanc',
		silverGray: 'Argent gris',
		metallic: 'Métallique',
		copper: 'Cuivre',
		darkBlack: 'Noir foncé',
		transparent: 'Transparent'
	},

	user: {
		name: 'Nom',
		firstName: 'Prénom',
		lastName: 'Nom de famille',
		email: 'Email',
		phone: 'Numéro de téléphone',
		password: 'Mot de passe',
		profilePicture: 'Photo de profil'
	},

	navbar: {
		instantQuote: 'Devis instantané',
		services: 'Produits et Services',
		capabilities: 'Capacités',
		whyUs: 'Pourquoi nous choisir ?',
		support: 'Support',
		adminPortal: 'Portail administrateur',
		backToApp: "Retour à l'application",
		login: 'Connexion',
		i18n: {
			language: 'Langue',
			currency: 'Devise'
		},
		cart: {
			myCart: 'Mon panier',
			viewCart: 'Voir le panier',
			proceedToCheckout: 'Passer à la caisse',
			loginViewCart: 'Connectez-vous pour voir votre panier',
			cartEmpty: 'Votre panier est vide',
			orderNow: 'Commander maintenant',
			subTotal: 'Sous-total'
		},
		user: {
			orders: 'Commandes',
			serviceRequests: 'Demandes de service',
			profile: 'Profil',
			settings: 'Paramètres',
			logout: 'Déconnexion'
		}
	},

	login: {
		title: 'Connexion',
		loggingIn: 'Connexion en cours',
		failedToLogin: 'Échec de la connexion',
		loginSuccess: 'Vous vous êtes connecté avec succès',
		invalidEmail: 'Email invalide',
		forgotPassword: 'Mot de passe oublié ?',
		dontHaveAccount: 'Pas encore de compte ?',
		signInGoogle: 'Se connecter avec Google'
	},

	signup: {
		title: 'Inscription',
		signingup: 'Inscription en cours',
		failedToSignup: "Échec de l'inscription",
		signupSuccess: 'Vous vous êtes inscrit avec succès',

		verifyOtp: 'Vérifier le OTP',
		otpSent: 'OTP envoyé par e-mail à',
		otpFailed: "Échec de l'envoi de l'OTP",
		incorrectOTP: 'OTP incorrect',
		enterOtp: "Veuillez entrer l'OTP envoyé à votre email",
		didNotGetOtp: "Pas reçu l'OTP ?",
		resendOtp: "Renvoyer l'OTP",

		notYourEmail: 'Pas votre email ?',
		changeEmail: "Changer l'email",
		invalidEmail: 'Email invalide',

		confirmPassword: 'Confirmer le mot de passe',
		passwordTooltip:
			'Le mot de passe doit contenir au moins 8 caractères, y compris des majuscules, des minuscules et un chiffre',
		invalidPassword: 'Mot de passe invalide',
		passwordsDoNotMatch: 'Les mots de passe ne correspondent pas',

		iAgree: "Je consens à m'inscrire",
		alreadyHaveAccount: 'Vous avez déjà un compte ?',
		signInGoogle: 'Se connecter avec Google'
	},

	forgotPassword: {
		forgotPassword: 'Mot de passe oublié',
		enterEmail: 'Veuillez entrer votre email et nous vous enverrons un OTP pour réinitialiser le mot de passe',
		backToLogin: 'Retour à la connexion',

		sendingOtp: "Envoi de l'OTP",
		otpSent: 'OTP envoyé par e-mail à',
		otpFailed: "Échec de l'envoi de l'OTP",
		incorrectOTP: 'OTP incorrect',
		enterOtp: "Veuillez entrer l'OTP envoyé à votre email",
		didNotGetOtp: "Pas reçu l'OTP ?",
		resendOtp: "Renvoyer l'OTP",

		notYourEmail: 'Pas votre email ?',
		changeEmail: "Changer l'email",
		invalidEmail: 'Email invalide',
		enterValidEmail: 'Veuillez entrer un email valide',

		enterPassword: 'Veuillez entrer votre nouveau mot de passe',
		confirmPassword: 'Confirmer le mot de passe',
		passwordTooltip:
			'Le mot de passe doit contenir au moins 8 caractères, y compris des majuscules, des minuscules et un chiffre',
		invalidPassword: 'Mot de passe invalide',
		passwordsDoNotMatch: 'Les mots de passe ne correspondent pas',
		enterSamePassword: 'Veuillez entrer le même mot de passe',
		resetPassword: 'Réinitialiser le mot de passe',
		resettingPassword: 'Réinitialisation du mot de passe',
		resetPasswordFailed: 'Échec de la réinitialisation du mot de passe',
		resetPasswordSuccess: 'Votre mot de passe a été réinitialisé avec succès'
	},

	profile: {
		pageTitle: 'Profil',
		myProfile: 'Mon Profil',
		personalInformation: {
			title: 'Informations personnelles',
			editProfile: 'Modifier le profil',
			savingProfile: 'Enregistrement du profil',
			saveProfileSuccess: 'Profil enregistré avec succès',
			saveProfileError: "Échec de l'enregistrement du profil"
		},
		addresses: {
			title: 'Adresses de livraison',
			newAddress: 'Nouvelle adresse',
			noAddressFound: 'Aucune adresse trouvée',
			removingAddress: "Suppression de l'adresse",
			removeAddressSuccess: 'Adresse supprimée avec succès',
			removeAddressError: "Échec de la suppression de l'adresse"
		},
		upsertAddress: {
			addAddress: 'Ajouter une adresse de livraison',
			updateAddress: "Mettre à jour l'adresse de livraison",
			nameError: 'Veuillez entrer votre nom',
			phoneError: 'Veuillez entrer votre numéro de téléphone',
			addressLine1: "Ligne d'adresse 1",
			addressLine1Error: 'Veuillez entrer votre adresse',
			addressLine2: "Ligne d'adresse 2",
			city: 'Ville',
			cityError: 'Veuillez entrer votre ville',
			state: 'État',
			stateError: 'Veuillez entrer votre état',
			country: 'Pays',
			countryError: 'Veuillez entrer votre pays',
			postalCode: 'Code postal',
			postalCodeError: 'Veuillez entrer votre code postal',
			savingAddress: "Enregistrement de l'adresse",
			saveAddressSuccess: 'Adresse enregistrée avec succès',
			saveAddressError: "Échec de l'enregistrement de l'adresse",
			addingAddress: "Ajout de l'adresse",
			addAddressSuccess: 'Adresse ajoutée avec succès',
			addAddressError: "Échec de l'ajout de l'adresse"
		}
	},

	home: {
		pageTitle: 'Accueil',
		instantQuote: 'Devis instantané',
		quoteNow: 'Obtenir un devis'
	},

	support: {
		title: 'Support',
		subtitle: 'Bonjour, comment pouvons-nous vous aider ?',
		quickLinks: {
			howToOrder: 'Comment commander',
			generateGerberFile: 'Générer un fichier Gerber',
			accountSettings: 'Paramètres du compte'
		},
		faqs: 'Questions fréquentes',
		qa: 'Q&R',
		moreTopics: 'Plus de sujets',
		sections: {
			myOrders: {
				title: 'Mes Commandes',
				subsections: {
					ordering: {
						title: 'Commande',
						questions: [
							{
								title: 'Comment passer des commandes pour des PCB et des assemblages PCB ?',
								contents: [
									[
										'Acheter des PCB sur',
										'MMWPCB.com',
										'est facile et pratique. En quelques étapes, vous pouvez bénéficier de services de prototypage PCB abordables et de haute qualité.'
									],
									['Vidéo :', "Comment passer une commande en ligne chez PCBWay ? Guide vidéo d'une minute."],
									['Étape 1 : Cliquez sur le type de service que vous souhaitez. Par exemple : PCB.'],
									[
										"Sélectionnez et remplissez les spécifications, puis cliquez sur le bouton 'Calculer' pour continuer."
									]
								]
							},
							{
								title: "Comment passer une commande d'assemblage PCB (demande) ?",
								contents: [
									[
										'Un autre article de mise à jour (2022-02-25) :',
										"Comment télécharger une demande d'assemblage PCB (PCBA)"
									],
									["Il y a 3 façons de passer une commande d'assemblage PCB."],
									["1. Passer les commandes d'assemblage PCB avec la commande PCB."],
									[
										'Vous pouvez cliquer sur la ',
										'Devis instantané PCB',
										"barre de navigation pour entrer, après avoir passé les commandes PCB, sélectionner l'assemblage pour remplir vos paramètres de service d'assemblage. Cliquez sur Calculer pour sélectionner le prix, Ajouter au panier et télécharger des fichiers."
									]
								]
							},
							{
								title: 'Comment passer une commande CNC ?',
								contents: [
									[
										"En plus des services de fabrication de PCB, PCBWay propose également de l'usinage CNC, de l'impression 3D, de la fabrication de tôle, du moulage par injection et des services de moulage sous vide. Lorsque vous accédez au site Web de PCBWay et cliquez ensuite sur la section 'CNC/impression 3D', vous pouvez voir les cinq pages de devis disponibles ici. Les processus de commande des cinq services sont essentiellement les mêmes à l'exception de certains paramètres sélectionnés. Présentons le processus de commande de l'usinage CNC. Commençons maintenant !"
									]
								]
							}
						]
					},
					leadTime: {
						title: 'Délais',
						questions: [
							{
								title: 'Comment vérifier le temps estimé de finition ?',
								contents: [
									['Avant le paiement'],
									[
										"Sous la liste 'En attente de paiement', cliquez sur le titre du produit ou sur 'Voir les détails' pour afficher la boîte d'informations détaillées du produit."
									],
									[
										"Dans cette boîte, vous trouverez le temps estimé de finition, comme indiqué dans l'image ci-dessous."
									]
								]
							},
							{
								title: "Politique de combinaison de commandes, d'expédition et de paiement",
								contents: [
									['Un paiement, une expédition !'],
									[
										"1. Le but de la combinaison de commandes est d'économiser sur les frais d'expédition. Si votre calendrier pour vos PCB n'est pas serré, combinez vos commandes et expédiez-les ensemble."
									],
									[
										"2. En combinant toutes ces commandes en un groupe et en payant maintenant, vous confirmez que toutes ces commandes seront expédiées ensemble autour de [xx-xx-xx]. C'est la date à laquelle nous pouvons compléter votre dernière commande PCB dans ce groupe de commandes, et nous pourrions avoir besoin d'un peu de temps supplémentaire pour que la société de messagerie (pas de service le dimanche) prenne en charge votre colis."
									]
								]
							},
							{
								title: 'Quand la commande express sera-t-elle produite ?',
								contents: [
									[
										"Depuis que PCBWay a lancé le service express de 24 heures, cela a apporté de nombreux avantages aux clients qui ont souvent des projets PCB urgents à l'ordre du jour. Cependant, cela a également entraîné quelques plaintes de clients dont les commandes sont retardées. En raison de la nature particulière des commandes urgentes, les plaintes de ces clients sont particulièrement critiques. Les données montrent que la plupart des 'retards' ont été causés par des malentendus concernant l'express de 24 heures."
									],
									[
										"1. Tout d'abord, définissons le service express de 24 heures de PCBWay. La plage horaire s'étend du début de la production à l'achèvement de la production. Il convient de noter que ce temps ne compte pas à partir du moment de votre paiement."
									],
									[
										"2. Le paiement doit être effectué avant 18h00 (GMT+8), sinon les arrangements de production seront reportés d'un jour."
									]
								]
							}
						]
					},
					salesService: {
						title: 'Service commercial',
						questions: [
							{
								title: 'Puis-je changer de représentant commercial ?',
								contents: [
									[
										"Chacun de nos représentants commerciaux a été formé de manière professionnelle. S'il y a des lacunes, nous espérons que vous pourrez fournir des suggestions et des corrections."
									],
									[
										"Si vous n'êtes pas satisfait de votre représentant commercial, veuillez envoyer vos questions à service@mmwpcb.com pour demander un remplacement."
									]
								]
							},
							{
								title: "Comment trouver mon commercial pour obtenir de l'aide concernant un problème PCB ou PCBA ?",
								contents: [
									[
										'Si vous avez des questions, veuillez contacter votre représentant commercial ou utiliser le chat en ligne. Vous pouvez trouver leurs informations de contact de plusieurs façons :'
									],
									[
										"1. Dans le coin supérieur droit de votre page d'accueil ou derrière le numéro de commande, comme indiqué par les cases rouges dans l'image ci-dessous ;"
									],
									['2. Dans votre panier ou votre liste de commandes ;']
								]
							},
							{
								title: 'Que faire si le représentant commercial ou le service après-vente ne répond pas ?',
								contents: [
									[
										"1. Cela peut être dû à un système anti-spam qui joue son rôle, entraînant le blocage ou l'envoi de l'email dans les courriers indésirables. Veuillez envoyer une relance."
									],
									[
										"2. S'ils n'ont pas répondu dans un délai raisonnable et que vous avez des questions sur une commande, vous pouvez :"
									],
									["a. Contacter service@mmwpcb.com ou feedback@mmwpcb.com pour obtenir de l'aide."],
									['b. Ouvrir un litige']
								]
							}
						]
					}
				}
			},
			myAccount: {
				title: 'Mon compte',
				subsections: {
					registeringSigningIn: {
						title: 'Inscription et connexion',
						questions: [
							{
								title: "Comment puis-je m'inscrire sur PCBWay ?",
								contents: [
									[
										"1. Cliquez sur Rejoindre sur la page d'accueil ou dans le coin supérieur droit de n'importe quelle page PCBWay"
									],
									[
										'2. Entrez votre adresse e-mail et définissez et confirmez votre mot de passe, puis commencez à faire des achats !'
									],
									[
										"Remarque : Assurez-vous de saisir la bonne adresse e-mail. Notre système ne reconnaît actuellement que les caractères de l'alphabet anglais."
									]
								]
							},
							{
								title: 'Mon compte est indisponible. Que puis-je faire ?',
								contents: [
									['Il existe de nombreuses raisons pour lesquelles votre compte peut être indisponible, telles que :'],
									[
										"1. Auto-désactivation. Dans ce cas, nous vous conseillons d'enregistrer un nouveau compte ou de contacter un représentant commercial/service."
									],
									['2. Désactivation pour violation des règles de commerce.']
								]
							},
							{
								title: 'Puis-je devenir un distributeur mmwpcb ?',
								contents: [
									[
										'Vous pouvez consulter vos informations de contact soumises par',
										'Devenir notre distributeur',
										'et nous vous contacterons pour une collaboration.'
									]
								]
							}
						]
					},
					accountSettings: {
						title: 'Paramètres du compte',
						questions: [
							{
								title: 'Paramètres du compte',
								contents: [
									['Comment puis-je changer mon adresse e-mail ?'],
									["Remarque : Nous ne recommandons pas de changer d'adresse e-mail trop fréquemment."]
								]
							},
							{
								title: 'Comment puis-je changer mon adresse e-mail',
								contents: [
									[
										"Les clients dont l'ancienne adresse e-mail est incorrecte, ou qui n'ont pas reçu l'email de vérification peuvent soumettre une demande de changement d'e-mail via le formulaire 'Demander un changement d'e-mail'. Le client doit remplir la nouvelle adresse e-mail et fournir la raison du changement."
									],
									['Voici les étapes spécifiques :'],
									["Étape 1 : Paramètres du compte -> Changer l'e-mail"]
								]
							},
							{
								title: 'Comment puis-je utiliser mon adresse e-mail pour un nouveau compte PCBWay ?',
								contents: [
									[
										'Si vous avez plusieurs comptes PCBWay et souhaitez lier une adresse e-mail existante à votre nouveau compte, vous devez :'
									],
									[
										"1. D'abord changer l'adresse e-mail de votre compte existant/ancien. Pour le moment, chaque compte PCBWay ne peut être lié qu'à une seule adresse e-mail unique."
									],
									[
										"2. Après avoir réussi à mettre à jour l'adresse de votre compte existant, vous pouvez lier votre nouveau compte à l'autre adresse e-mail."
									]
								]
							}
						]
					},
					mmwpcbRewards: {
						title: 'Récompenses MMWPCB',
						questions: [
							{
								title: 'Comment puis-je utiliser mes points de récompense ?',
								contents: [
									[
										"Le Club des membres MMWPCB a 6 niveaux—V0, V1, V2, V3, V4, V5. Le niveau dans lequel vous vous trouvez détermine les avantages et privilèges auxquels vous avez droit. Tous les acheteurs se voient automatiquement attribuer un niveau de membre une fois qu'ils répondent aux exigences minimales (voir le tableau ci-dessous)."
									],
									['Détails des avantages :'],
									[
										'Membre V0 0% de réduction',
										'Membre V1 1% de réduction',
										'Membre V2 2% de réduction',
										'Membre V3 3% de réduction'
									]
								]
							},
							{
								title: 'Quels sont les privilèges du Club des membres MMWPCB ?',
								contents: [
									[
										"Le Club des membres MMWPCB a 6 niveaux—V0, V1, V2, V3, V4, V5. Le niveau dans lequel vous vous trouvez détermine les avantages et privilèges auxquels vous avez droit. Tous les acheteurs se voient automatiquement attribuer un niveau de membre une fois qu'ils répondent aux exigences minimales (voir le tableau ci-dessous)."
									],
									['Détails des avantages :'],
									[
										'Membre V0 0% de réduction',
										'Membre V1 1% de réduction',
										'Membre V2 2% de réduction',
										'Membre V3 3% de réduction'
									]
								]
							},
							{
								title: "Mes points de récompense n'ont pas été ajoutés à mon compte. Que puis-je faire ?",
								contents: [
									[
										'Pour une introduction détaillée sur les Points et Fèves PCBWay et comment les gagner, veuillez cliquer sur',
										'Introduction détaillée sur les Points et Fèves PCBWay',
										'pour en savoir plus.'
									],
									[
										"Si des points n'ont pas encore été attribués à votre compte, cela peut être dû à l'une des raisons suivantes :"
									],
									[
										"1. La commande n'est pas dans un statut complété. Veuillez vérifier le statut de votre commande, car les points d'une commande ne sont attribués qu'une fois la commande complétée."
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
		standardPcb: 'PCB standard',
		advancedPcb: 'PCB avancé',
		flexiblePcb: 'PCB flexible',
		rigidFlex: 'Rigide-flex',
		assembly: 'Assemblage',
		stencil: 'SMD-Masque',
		cnc: 'Usinage CNC',
		sheetMetal: 'Tôle',
		threePrinting: 'Impression 3D',
		injectionMolding: 'Moulage par injection',
		vacuumCasting: 'Moulage sous vide'
	},

	shipping: {
		shippingEstimate: "Estimation des frais d'expédition",
		shippingInfo: "Informations d'expédition",
		selectShippingMethod: "Sélectionner la méthode d'expédition",
		shippingTo: 'Expédition vers',
		selectCountry: 'Sélectionner le pays',
		shippingMethod: "Méthode d'expédition",
		price: 'Prix',
		deliveryTime: 'Délai de livraison',
		restriction: 'Restriction',
		country: 'Pays',
		method: 'Méthode',
		weight: 'Poids',
		shippingCost: "Frais d'expédition",
		noShippingMethods: "Aucune méthode d'expédition disponible",
		updatingShipping: "Mise à jour de la méthode d'expédition",
		updateShippingError: "Échec de la mise à jour des informations d'expédition",
		updateShippingSuccess: "Informations d'expédition mises à jour avec succès"
	},

	orders: {
		pageTitle: 'Mes Commandes',
		allOrders: 'Toutes les Commandes',
		viewCart: 'Voir le Panier',
		fetchingOrders: 'Récupération des commandes',
		noOrders: 'Aucune commande trouvée',
		checkFilters: 'Vérifiez vos filtres ou commencez à explorer pour trouver ce dont vous avez besoin !',
		getInstantQuote: 'Obtenir un devis instantané',
		orderNo: 'Numéro de commande',
		createdBy: 'Créé par',
		deliveryAddress: 'Adresse de livraison',
		products: 'Produits',
		orderDetails: 'Détails de la commande',
		finalPrice: 'Prix final',
		quotePrice: 'Prix du devis'
	},

	order: {
		pageTitle: 'Commande',
		allOrders: 'Toutes les Commandes',
		myCart: 'Mon Panier',
		orderId: 'ID de commande',

		applyDiscount: {
			applyingDiscount: 'Application de la réduction',
			applyDiscountError: "Échec de l'application de la réduction",
			applyDiscountSuccess: 'Réduction appliquée avec succès'
		},
		removeDiscount: {
			removingDiscount: 'Suppression de la réduction',
			removeDiscountError: 'Échec de la suppression de la réduction',
			removeDiscountSuccess: 'Réduction supprimée avec succès'
		},

		submitReview: {
			noProducts: 'Aucun produit dans le panier',
			shippingError: "Les informations d'expédition ne sont pas fournies",
			deliveryError: "L'adresse de livraison n'est pas fournie",
			filesNotUploaded: 'Fichiers de produit non téléchargés',
			submittingOrder: 'Soumission de la commande',
			submitOrderError: 'Échec de la soumission de la commande',
			submitOrderSuccess: 'Commande soumise avec succès'
		},

		saveOrder: {
			savingOrder: 'Enregistrement de la commande',
			saveOrderError: "Échec de l'enregistrement de la commande",
			saveOrderSuccess: 'Commande enregistrée avec succès'
		},

		cancelReview: {
			cancellingReview: "Annulation de l'examen",
			cancelReviewError: "Échec de l'annulation de l'examen",
			cancelReviewSuccess: 'Examen annulé avec succès'
		},

		approveReview: {
			noWeightError: "Le poids du produit n'est pas fourni",
			noEstDeliveryDateError: "La date de livraison estimée n'est pas fournie",
			noPriceError: 'Mettez à jour les prix des produits',
			noCountryError: "Le pays de livraison n'est pas fourni",
			approvingReview: "Approbation de l'avis en cours",
			approveReviewError: "Échec de l'approbation de l'avis",
			approveReviewSuccess: 'Avis approuvé avec succès'
		},

		rejectReview: {
			rejectingReview: "Rejet de l'examen",
			rejectReviewError: "Échec du rejet de l'examen",
			rejectReviewSuccess: 'Examen rejeté avec succès'
		},

		startFabrication: {
			startingFabrication: 'Démarrage de la fabrication',
			startFabricationError: 'Échec du démarrage de la fabrication',
			startFabricationSuccess: 'Fabrication démarrée avec succès'
		},

		updateFabrication: {
			completingFabrication: "Mise à jour de l'avancement de la fabrication",
			updateFabricationError: "Échec de la mise à jour de l'avancement de la fabrication",
			updateFabricationSuccess: 'Avancement de la fabrication mis à jour avec succès'
		},

		completeFabrication: {
			completingFabrication: 'Finalisation de la fabrication',
			completeFabricationError: 'Échec de la finalisation de la fabrication',
			completeFabricationSuccess: 'Fabrication terminée avec succès'
		},

		updateDelivery: {
			updatingDelivery: "Mise à jour de l'avancement de la livraison",
			updateDeliveryError: "Échec de la mise à jour de l'avancement de la livraison",
			updateDeliverySuccess: 'Avancement de la livraison mis à jour avec succès'
		},

		updateTracking: {
			updatingTracking: 'Mise à jour des informations de suivi',
			updateTrackingError: 'Échec de la mise à jour des informations de suivi',
			updateTrackingSuccess: 'Informations de suivi mises à jour avec succès'
		},

		completeOrder: {
			completingOrder: 'Finalisation de la commande',
			completeOrderError: 'Échec de la finalisation de la commande',
			completeOrderSuccess: 'Commande finalisée avec succès'
		},

		orderMessage: {
			saved: {
				title: 'Cette commande est enregistrée en brouillon',
				description: "Elle n'a pas encore été soumise pour examen"
			},
			review: {
				title: 'Votre commande a été soumise pour révision',
				button: "Annuler l'examen"
			},
			rejected: {
				title: 'Votre examen de commande a été rejeté',
				description: "Vérifiez les messages d'examen pour plus de détails",
				button: 'Soumettre à nouveau pour révision'
			},
			approved: {
				title: 'Votre examen de commande a été approuvé',
				description: 'Vérifiez les prix mis à jour et procédez au paiement',
				button: 'Procéder au paiement'
			},
			confirmed: {
				title: 'Paiement réussi !',
				description: 'Votre commande est confirmée et est en cours de traitement'
			},
			fabrication: {
				title: 'Fabrication en cours',
				description: "Vérifiez l'état d'avancement de chaque produit"
			},
			delivery: {
				title: 'Livraison en cours',
				description: 'Votre commande est en chemin',
				button: 'Suivre la livraison'
			},
			completed: {
				title: 'Commande Complétée !',
				description: "Merci d'avoir acheté chez nous"
			}
		},

		deliveryAddress: {
			title: 'Adresse de livraison',
			selectAddress: "Sélectionner l'adresse de livraison",
			noAddressFound: 'Aucune adresse trouvée',
			failedToGetAddress: "Échec de l'obtention de l'adresse",
			updatingAddress: "Mise à jour de l'adresse",
			selectAddressError: "Échec de la sélection de l'adresse de livraison",
			selectAddressSuccess: 'Adresse de livraison sélectionnée avec succès'
		},

		productsTable: {
			products: 'Produits',
			addProduct: 'Ajouter un produit',
			noProductFound: 'Aucun produit trouvé',
			product: 'Produit',
			buildTime: 'Temps de fabrication',
			quantity: 'Quantité',
			file: 'Fichier',
			files: 'Fichiers',
			quotePrice: 'Prix du devis',
			finalPrice: 'Prix final',
			details: 'Détails',
			edit: 'Modifier',
			uploaded: 'Téléversé',
			notUploaded: 'Non téléchargé',
			viewProgress: "Voir l'avancement",
			productDetails: {
				title: 'Détails du produit',
				failedToFetch: 'Échec de la récupération des détails du produit'
			},
			fabrication: {
				title: 'Fabrication',
				fabricationProgress: 'Avancement de la fabrication',
				notStarted: 'Fabrication non commencée',
				completed: 'Fabrication terminée'
			}
		},

		reviewMessages: {
			title: "Messages d'examen",
			failedToSend: "Échec de l'envoi du message",
			noMessages: 'Pas encore de messages',
			conversationClosed: 'Cette conversation est fermée'
		},

		orderSummary: {
			title: 'Résumé de la commande',
			itemsCost: 'Coût des articles',
			shippingCost: "Frais d'expédition",
			discount: 'Remise',
			taxes: 'Taxes',
			orderTotal: 'Total de la commande',
			promoCode: 'Code Promo',
			apply: 'Appliquer',
			estDeliveryDate: 'Date de livraison estimée',
			estDeliveryDateDesc:
				"La date d'expédition estimée est calculée en fonction de l'article ayant le temps de fabrication le plus long dans votre commande. Veuillez noter que cette date est à titre de référence uniquement. Si votre commande nécessite une confirmation, la date d'expédition peut être prolongée.",
			weight: 'Poids',
			weightDesc:
				"Le poids ici est calculé en fonction de la valeur supérieure entre le poids brut et le poids volumétrique, qui est estimé à titre de référence. Si le poids réel diffère de l'estimation, les frais d'expédition peuvent être ajustés en conséquence.",
			submitOrderForReview: 'Soumettre la commande pour révision',
			saveOrder: 'Enregistrer la commande'
		},

		payment: {
			title: 'Détails du paiement',
			transactionId: 'ID de transaction',
			paymentTime: 'Heure de paiement',
			paymentMethod: 'Méthode de paiement',
			totalAmount: 'Montant total',
			failedToGenerateToken: 'Échec de la génération du token de paiement',
			failedToSubmit: 'Échec de la soumission du paiement',
			checkout: 'Passer à la caisse',
			amountToBePaid: 'Montant à payer',
			paymentSuccess: 'Paiement réussi',
			paymentTotal: 'Total du paiement',
			print: 'Imprimer',
			payNow: 'Payer maintenant',
			cancelPayment: 'Annuler le paiement'
		},

		removeProduct: {
			modalTitle: 'Êtes-vous sûr de vouloir supprimer ce produit ?',
			modalTitleAll: 'Êtes-vous sûr de vouloir supprimer tous les produits ?',
			modalBody: 'Cette action ne peut pas être annulée',
			removingProduct: 'Suppression du produit',
			removingProductAll: 'Suppression de tous les produits',
			removeProductError: 'Échec de la suppression du produit',
			removeProductAllError: 'Échec de la suppression de tous les produits',
			removeProductSuccess: 'Produit supprimé avec succès',
			removeProductAllSuccess: 'Tous les produits supprimés avec succès'
		},

		removeOrder: {
			title: 'Supprimer la commande',
			description:
				'Cette action supprimera définitivement la commande et toutes ses informations connexes. Cela ne peut pas être annulé, veuillez procéder avec prudence.',
			modalTitle: 'Êtes-vous sûr de vouloir supprimer cette commande ?',
			modalBody: 'Cette action ne peut pas être annulée',
			removingOrder: 'Suppression de la commande',
			removeOrderError: 'Échec de la suppression de la commande',
			removeOrderSuccess: 'Commande supprimée avec succès'
		},

		trackDelivery: 'Suivre la livraison'
	},

	orderStatus: {
		CREATED: 'Commande créée',
		CART: 'Panier',
		SAVED: 'Enregistré en tant que brouillon',
		REVIEW: 'En révision',
		REJECTED: 'Examen rejeté',
		APPROVED: 'Examen approuvé',
		PAYMENT: 'Paiement',
		CONFIRMED: 'Commande confirmée',
		FABRICATION: 'En fabrication',
		DELIVERY: 'Expédition et livraison',
		COMPLETED: 'Commande complétée',
		CANCELLED: 'Commande annulée',
		REFUNDED: 'Remboursé'
	},

	instantQuote: {
		pageTitle: 'Devis Instantané',
		specification: 'Spécifications',

		upsertProduct: {
			uploadingFiles: 'Téléchargement de fichiers',
			savingCart: 'Sauvegarde dans le panier',
			addingOrder: 'Ajout à la commande',
			updatingProduct: 'Mise à jour des spécifications du produit',
			uploadFileError: 'Échec du téléchargement du fichier',
			saveCartError: 'Échec de la sauvegarde dans le panier',
			addOrderError: "Échec de l'ajout à la commande",
			updateProductError: 'Échec de la mise à jour du produit',
			saveCartSuccess: 'Produit sauvé dans le panier',
			addOrderSuccess: 'Produit ajouté à la commande',
			updateProductSuccess: 'Produit mis à jour avec succès',
			postOrderModal1: {
				title: 'Services supplémentaires pour votre commande de PCB',
				body: 'Avez-vous besoin de services d’assemblage ou de test pour votre PCB ?'
			},
			postOrderModal2: {
				title: 'Finalisez votre commande avec des services de test',
				body: 'Souhaitez-vous ajouter des services de test ?'
			},
			goToOrder: 'Aller à la commande',
			addAssembly: 'Ajouter l’assemblage',
			addTestingServices: 'Ajouter les services de test'
		},

		pricing: {
			title: 'Tarification et Temps de Construction',
			weight: 'Poids',
			buildTime: 'Temps de Construction',
			chargeDetails: 'Détails des frais',
			total: 'Total',
			saveProduct: 'Sauvegarder le Produit',
			saveToCart: 'Sauvegarder dans le Panier',
			addToOrder: 'Ajouter à la Commande',
			loginToContinue: 'Connectez-vous pour continuer'
		},

		gerberFile: {
			title: 'Fichier Gerber',
			description: "Veuillez télécharger le fichier Gerber pour votre produit (n'accepte que les formats .zip, .rar)"
		},

		designFile: {
			title: 'Fichier de Design',
			description: "Veuillez télécharger le fichier de design pour votre produit (n'accepte que les formats .zip, .rar)"
		},

		fileDrop: {
			dragDrop: 'Glissez-déposez vos fichiers ici ou cliquez pour télécharger',
			onlyAccepts20: 'Accepte uniquement ZIP ou RAR | Taille max : 20 Mo',
			onlyAccepts200: 'Accepte uniquement ZIP ou RAR | Taille max : 200 Mo',
			file: 'Fichier',
			files: 'Fichiers',
			added: 'Ajouté',
			belowFiles: 'Voici les fichiers que vous avez ajoutés'
		},

		standardPcb: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé à'
			},
			updatedAt: {
				title: 'Mis à jour à'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			buildTime: {
				title: 'Temps de fabrication'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			boardType: {
				title: 'Types de carte',
				description:
					"Les circuits imprimés seront expédiés en pièces individuelles ou en panneau. Pour les commandes de montage en gros (quantité supérieure à 30), nous recommandons l'expédition en panneau, ce qui améliorera l'efficacité du montage et réduira les coûts.",
				values: {
					singlePieces: 'Pièces individuelles',
					panelByCustomer: 'Panneau par le client',
					panelByVelenova: 'Panneau par Velenova'
				}
			},
			xoutAllowance: {
				title: 'Tolérance X-out dans le panneau',
				description:
					"Des circuits imprimés défectueux peuvent exister dans le panneau, le devis augmentera d'environ 30% si la tolérance X-out n'est pas acceptée.",
				values: {
					accept: 'Accepter',
					decline: 'Décliner'
				}
			},
			routeProcess: {
				title: 'Processus de routage',
				description: 'Dans le panneau, les circuits imprimés sont connectés comme illustré dans le diagramme suivant :',
				values: {
					velenovaPrefer: 'Panneau selon les préférences de Velenova',
					vScoring: 'Panneau selon V-Scoring',
					tabRoute: 'Panneau selon Tab Route',
					vScoringTabRoute: 'À la fois V-Scoring et Tab Route'
				}
			},
			breakAwayRail: {
				title: 'Rail détachable',
				description:
					"Les rails détachables sont de longues bandes de plaques vides mises en place pour laisser l'espace de transmission lors de l'assemblage et pour placer le point de marquage dans le panneau. Les circuits imprimés sont transmis via le rail de guidage sur la ligne de production d'assemblage, par conséquent, une paire de bords qui interdisent le placement de composants doit être laissée comme bord de transmission. La largeur du rail détachable est généralement d'environ 5 à 8 mm."
			},
			panelRequirements: {
				title: 'Exigences du panneau',
				disclaimer:
					'(par exemple, panneau de 2*3, taille du rail détachable, total de 5 panneaux = total de 30 cartes individuelles)'
			},
			differentDesign: {
				title: 'Différents designs dans le panneau',
				description:
					"Cela signifie qu'il y a différents designs dans vos fichiers séparés par des v-coupes, des trous de tampon, des fentes fraisées ou autres. Nous facturerons un coût de panneau supplémentaire s'il y a différents types de conceptions de circuits imprimés dans un fichier Gerber.",
				error: 'Le design différent doit être supérieur à 0'
			},
			size: {
				title: 'Taille (unique)',
				description:
					"La taille de la carte fait référence à la longueur et à la largeur de la carte commandée par le client. Si c'est une carte circulaire, la longueur et la largeur sont le diamètre du cercle ; s'il s'agit d'une carte de forme irrégulière, la longueur et la largeur sont mesurées en fonction de la plus grande plage de forme.",
				error: 'La longueur et la largeur doivent être supérieures à 0'
			},
			length: {
				title: 'Longueur'
			},
			width: {
				title: 'Largeur'
			},
			quantity: {
				title: 'Quantité (unique)',
				description:
					'Veuillez choisir le nombre de pièces individuelles dont vous avez besoin. Pour un PCB standard, la quantité minimale est de 5 pièces.',
				error: 'La quantité doit être supérieure à 0',
				placeholder: 'Quantité',
				pieces: 'Pièces'
			},
			layers: {
				title: 'Couches',
				description:
					"Le nombre de couches de cuivre dans la carte. MMWPCB peut actuellement produire jusqu'à 60 couches, si vous avez besoin de plus de 14 couches, veuillez sélectionner la page de PCB avancée pour valuer.",
				layer: 'Couche',
				layers: 'Couches'
			},
			copperLayer: {
				title: 'Couche de cuivre',
				description:
					'Lors de la commande de circuits imprimés à 1 couche, veuillez spécifier si la couche de circuit est en haut, en bas ou aucune. Veillez à sélectionner les paramètres corrects, sinon nous devrons vous contacter pour reconfirmer.',
				values: {
					topLayer: 'Couche supérieure',
					bottomLayer: 'Couche inférieure'
				}
			},
			solderMask: {
				title: 'Masque de soudure',
				description:
					"C'est un matériau de revêtement utilisé pour masquer ou protéger une zone sélectionnée. Lors de la commande de circuits imprimés à 1 couche, veuillez spécifier si le masque de soudure est en haut, en bas ou sur les deux côtés. Lorsque seule une face est sélectionnée pour le masque de soudure, l'autre face sera complètement exposée avec l'ouverture du masque de soudure. Veillez à sélectionner les bons paramètres, sinon nous devrons vous contacter pour reconfirmer.",
				values: {
					topSide: 'Côté supérieur',
					bottomSide: 'Côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			silkscreen: {
				title: 'Sérigraphie',
				description:
					"La sérigraphie est une couche d'encre utilisée pour identifier les composants du PCB, les marques, les logos, les symboles, etc. Lors de la commande de circuits imprimés à 1 couche, veuillez spécifier sur quelle couche se trouve la sérigraphie.",
				values: {
					topSide: 'Côté supérieur',
					bottomSide: 'Côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			material: {
				title: 'Matériau',
				description:
					"FR4 est le matériau diélectrique le plus courant utilisé dans la fabrication des cartes de circuits. Les cartes en aluminium ont une meilleure dissipation de la chaleur et un transfert thermique que les constructions standard en FR-4. Les cartes à base de cuivre ont une grande conductivité thermique, supérieure à celle des PCB en aluminium. En raison de ses caractéristiques de faible perte diélectrique, Rogers est souvent utilisé dans les PCB haute fréquence. Si vous avez besoin d'autres matériaux, veuillez contacter votre représentant commercial.",
				disclaimer: '*Le modèle de matériau peut être noté ci-dessous. HDI est disponible pour 4 couches ou plus.',
				values: {
					fr4: 'FR-4',
					aluminum: 'Aluminium',
					rogers: 'Rogers',
					hdi: 'HDI (via enterrés/aveugles)',
					copperBase: 'Base en cuivre'
				}
			},
			fr4TG: {
				title: 'FR4-TG',
				description:
					"TG signifie température de transition vitreuse. TG ordinaire est de 130 °C ou plus, TG moyen est d'environ supérieur à 150 °C, et TG avancé est généralement supérieur à 170 °C. Plus la TG est élevée, meilleure est la résistance à la température du matériau. Le matériau par défaut de MMWPCB a une TG de 150-160 °C, ce qui est plus élevé que la plupart des entreprises.",
				disclaimer:
					'*Le matériau de base avec une haute TG a une bonne résistance au CAF, une haute résistance à la chaleur, une stabilité dimensionnelle et est adapté au processus de soudage sans plomb.'
			},
			rogers: {
				title: 'Rogers',
				description:
					"La série Rogers RO4000 est en position de leader dans l'industrie. Ce matériau à faible perte est largement utilisé dans les conceptions de fréquence micro-ondes et millimétriques. Par rapport au matériau PTFE traditionnel, il est plus facile à utiliser dans la fabrication de circuits et présente des performances stables et cohérentes. Actuellement, 4003C et 4350B sont disponibles pour MMWPCB. Si vous avez besoin d'autres modèles, veuillez contacter votre représentant commercial."
			},
			thermalConductivity: {
				title: 'Conductivité thermique',
				description:
					"La conductivité thermique du PCB en aluminium/basé en cuivre est la mesure de la capacité du matériau à conduire la chaleur loin d'une source. Elle est généralement mesurée en watts par mètre Kelvin (W/mK) et couramment notée par k, λ, ou K."
			},
			thermoElectricSeparation: {
				title: 'Séparation thermo-électrique',
				description:
					'La séparation thermoélectrique signifie que les pads conducteurs thermiquement sur le substrat en cuivre et les pads conducteurs électriquement sont séparés, ce qui peut aider à réaliser le meilleur effet de conduction et de dissipation thermique. Illustré comme ci-dessous :'
			},
			structureOfMCPCB: {
				title: 'Structure de MCPCB',
				description:
					'Ceci est pour les cartes à substrat métallique double face / multicouches (Aluminium ou Base en cuivre). Il y a deux structures à choisir selon que la base métallique est au milieu ou en bas.',
				values: {
					metalCoreMiddle: 'Noyau métallique au milieu',
					metalBaseBottom: 'Base métallique au bas'
				}
			},
			thickness: {
				title: 'Épaisseur',
				description:
					"Pour les matériaux ordinaires, l'épaisseur de la carte fait référence à l'épaisseur du PCB une fois la production terminée, et l'erreur est d'environ 10 % (+/-10 % (T>=1mm) ou +/- 0,1mm (T<1mm)). L'erreur est principalement causée par le masque de soudure et la déposition de cuivre. S'il y a d'autres exigences concernant l'erreur d'épaisseur, veuillez le noter dans Autres exigences spéciales. Remarque : Pour une carte Rogers simple/double face, l'épaisseur fait référence à l'épaisseur du substrat.",
				error: "L'épaisseur doit être supérieure à 0"
			},
			minTrack: {
				title: 'Min Track/Espacement',
				description:
					'Largeur minimale du tracé en cuivre et distance minimale entre deux tracés. Les ingénieurs de MMWPCB vérifieront à nouveau le Min Track/Espacement.'
			},
			minHoleSize: {
				title: 'Taille minimale de trou',
				description:
					'Diamètre minimum des trous. Les ingénieurs de MMWPCB vérifieront à nouveau la taille du trou minimale.',
				noDrill: 'Pas de perçage'
			},
			solderMaskColor: {
				title: 'Masque de soudure',
				description:
					'La couleur du masque de soudure fait référence à la couleur de la surface du PCB. Actuellement, MMWPCB propose 9 couleurs de masque de soudure conventionnelles. Si vous avez besoin de rose, gris, orange ou transparent, veuillez vous rendre sur la page PCB avancée pour choisir.'
			},
			silkscreenColor: {
				title: 'Sérigraphie',
				description:
					"La sérigraphie est une couche d'encre utilisée pour identifier les composants, marques, logos, symboles du PCB, etc. La couleur est généralement blanche. Mais lorsque l'encre du masque de soudure est blanche, la sérigraphie sera noire."
			},
			uvPrinting: {
				title: 'Impression UV multicolore',
				description: '',
				descriptionDetail: {
					title1: 'Conditions préalables pour la commande',
					body1: 'Taille maximum pour une pièce unique : 270*470MM',
					body2: 'Sélection de la couleur du masque de soudure.',
					title2: 'Spécifications de conception',
					body3:
						'Évitez de placer des caractères colorés dans des zones avec des ouvertures de masque de soudure, telles que des plots de montage en surface ou des plots de perçage.',
					body4:
						"Les caractères colorés peuvent être fournis via des images de référence et des cartes d'alignement de référence (pour un alignement pratique avec le PCB) sans nécessité de les designer dans les fichiers Gerber. Cependant, si vous choisissez d'inclure des caractères colorés dans les fichiers Gerber, assurez-vous qu'ils soient placés sur la couche de sérigraphie et notés avec des couleurs.",
					disclaimer:
						"*Veuillez envoyer les images que vous souhaitez imprimer sur le PCB dans les formats suivants : AI, PDF, JPEG, PNG, TIFF, etc., et indiquer votre emplacement d'impression souhaité sur la carte."
				},
				disclaimer: '*Le fichier PCB téléchargé devrait contenir des rendus en couleur.',
				values: {
					singleSidedTop: 'Simple face : Haut',
					singleSidedBottom: 'Simple face : Bas',
					doubleSided: 'Double face'
				}
			},
			edgeConnector: {
				title: 'Connecteur de bord',
				description:
					"Les connecteurs de bord obtiennent une connexion électrique en contactant les doigts dorés sur le PCB. Si votre conception inclut des doigts dorés, veuillez cocher 'Oui' pour cet élément et sélectionner la méthode de finition de surface et l'angle de biseautage. Sinon, veuillez cocher 'Non'."
			},
			surfaceFinish: {
				title: 'Finition de surface',
				description:
					"La finition de surface est une partie importante de la production de PCB. Elle peut protéger le cuivre de l'oxydation, ce qui rendrait le PCB inutilisable. De plus, elle fournit une surface lisse pour que les composants soient soudés.",
				values: {
					immersionGold: 'Or immersion (ENIG)',
					osp: 'OSP',
					immersionTin: 'Étain immersion',
					enepig: 'ENEPIG',
					plainCopper: 'Cuivre nu / Aucun'
				},
				acceptHASLChange:
					"Cocher signifie que vous acceptez que nous puissions changer 'HASL' en 'ENIG' à notre discrétion sans frais supplémentaires."
			},
			surfaceFinishLayer: {
				title: 'Couche de finition de surface',
				description: 'Veuillez sélectionner la couche de finition de surface dont vous avez besoin.',
				values: {
					singleSide: 'Simple face',
					doubleSide: 'Double face'
				}
			},
			finishedCopper: {
				title: 'Cuivre fini',
				description:
					"Le poids en onces de cuivre dans un pied carré de PCB, cette option déterminera l'épaisseur du cuivre sur les couches externes. MMWPCB fournit une épaisseur de cuivre sur les couches externes de 1 à 13 oz. Les trous PTH ou vias qui sont découpés pour créer un trou partiel ou un demi-trou pour former une ouverture sur le côté du trou. Généralement, ils sont utilisés pour monter un PCB sur un autre.",
				disclaimer:
					"*Exigence du Min Track/Espacement : ≥ 3/3mil pour les commandes d'échantillon ou ≥ 3.5/3.5mil pour les commandes en gros.",
				bareBoard: 'Plateau nu'
			},
			innerCopper: {
				title: 'Cuivre intérieur',
				description:
					'Le poids du cuivre dans les couches internes pour les PCBs multicouches. Le poids de cuivre intérieur par défaut est de 1 oz.',
				disclaimer:
					"*Exigence du Min Track/Espacement : ≥ 3/3mil pour les commandes d'échantillon ou ≥ 3.5/3.5mil pour les commandes en gros."
			},
			removeProductNo: {
				title: 'Retirer le numéro de produit',
				description:
					"MMWPCB ajoutera notre numéro de produit sur le PCB pour distinguer vos circuits imprimés des autres. Si vous souhaitez le retirer, des frais supplémentaires de 1.5 $ seront appliqués. Si vous souhaitez le placer à un emplacement spécifique, veuillez indiquer l'emplacement en ajoutant le texte 'MMWPCB' dans la couche de sérigraphie et il n'y aura pas de frais supplémentaires pour cette option.",
				values: {
					no: 'Non',
					yes: 'Oui (supplément + 1.5 $)',
					specifyLocation: 'Spécifier un emplacement'
				}
			},
			peelableSolderMask: {
				title: 'Masque de soudure peelable',
				description:
					"Également connu sous le nom de masque bleu peelable, il est utilisé pour protéger les plots de soudure nécessaires lors de l'assemblage et est généralement appelé GTPM et GBPM dans la conception. Contrairement au masque de soudure vert, qui est une image négative et est présent de manière permanente sur le PCB dans la conception PCB, le masque de soudure peelable est une image positive (ce que vous voyez est ce que vous obtenez dans votre conception) et est utilisé temporairement pour la fabrication et l'assemblage du PCB. Le matériau de revêtement peut être retiré après que la carte soit passée par la soudure en vague.",
				values: {
					topSide: 'Côté supérieur',
					bottomSide: 'Côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			holeCopperThickness: {
				title: 'Épaisseur de cuivre des trous',
				description: "Veuillez sélectionner l'épaisseur de cuivre des trous dont vous avez besoin."
			},
			ulMarking: {
				title: 'Marquage UL',
				description:
					"MMWPCB a obtenu la certification UL, veuillez choisir d'ajouter le logo correspondant sur la couche dont vous avez besoin. Nous ajouterons le logo JDB-D s'il s'agit d'une carte à deux couches, et ajouterons JDB-M s'il s'agit d'une carte multicouche. Pour un PCB à base métallique à une seule couche, nous ajouterons le UL correspondant (JDB-A1, JDB-A2, JDB-A3) selon les besoins.",
				values: {
					topSilkscreen: 'Oui - ajouter à la sérigraphie supérieure',
					bottomSilkscreen: 'Oui - ajouter à la sérigraphie inférieure',
					topSolderMask: 'Oui - ajouter au masque de soudure supérieur',
					bottomSolderMask: 'Oui - ajouter au masque de soudure inférieur',
					topCopper: 'Oui - ajouter au cuivre supérieur',
					bottomCopper: 'Oui - ajouter au cuivre inférieur',
					default: 'Oui - selon le défaut de MMWPCB'
				}
			},
			dateCode: {
				title: 'Code date',
				description: 'Ajouter le temps de production sur le PCB',
				placeholder: 'Par exemple : code date dans le format WWYY dans la couche de sérigraphie supérieure',
				values: {
					velenovaPrefer: 'Ajouter selon la préférence de Velenova',
					customerRequired: 'Ajouter selon les besoins du client',
					updateDesignedDateCode: 'Mettre à jour le code date conçu'
				}
			},
			dateCodeDescription: {
				title: 'Description du code date'
			},
			customizedServices: {
				title: 'Services personnalisés et options avancées',
				description:
					'Nous pourrions ajouter des coûts supplémentaires pour ces options spéciales qui seront confirmées après révision.',
				values: {
					halfCut: {
						title: 'Demi-coup / trous coudés',
						description:
							'Les trous PTH ou vias sont découpés pour créer un trou partiel ou un demi-trou pour former une ouverture sur le côté du trou. Généralement, il est utilisé pour monter une carte PCB sur une autre.'
					},
					edgePlating: {
						title: 'Revêtement des bords',
						description:
							"Le revêtement des bords des PCB fait référence à la métallisation des côtés d'un circuit imprimé sur toute sa hauteur. Vous pouvez réaliser un revêtement des bords sur un seul bord de la carte ou sur tout le tour. Grâce au revêtement des bords, vous équipez la carte d'une connexion fiable et d'une rigidité."
					},
					impedanceControl: {
						title: "Contrôle de l'impédance",
						description:
							"Les conducteurs d'un PCB portent divers signaux, et pour augmenter leur vitesse de transmission, leur fréquence doit être élevée. Cependant, des facteurs tels que l'usinage, l'épaisseur des couches et la largeur des lignes peuvent provoquer des variations d'impédance dans le PCB, entraînant la distorsion des signaux. Par conséquent, pour les conducteurs de PCB haute vitesse, leurs valeurs d'impédance doivent être contrôlées dans une certaine plage, connue sous le nom de « contrôle de l'impédance ». La tolérance d'impédance est généralement de ±10 %. Si des exigences d'impédance sont spécifiées dans la documentation mais non sélectionnées dans la commande, cela sera considéré comme une ignorance de la exigence d'impédance."
					},
					halogenFree: {
						title: 'Sans halogène',
						description:
							'Selon la norme JPCA-ES-01-2003, un stratifié en cuivre avec une teneur en chlore (Cl) et en bromure (Br) inférieure à 0,09 % Wt (en poids) chacune et le montant total de CI+Br ≤ 0,15 % [1500PPM] est défini comme un stratifié en cuivre sans halogène.'
					},
					customStackup: {
						title: 'Empilement personnalisé',
						description:
							"S'applique uniquement aux PCB multicouches. Si vous devez personnaliser un empilement spécifique, veuillez télécharger le fichier d'empilement ensemble ou contacter votre représentant commercial."
					},
					carbonInk: {
						title: 'Encre de carbone',
						description:
							"Également appelée PCB à encre de carbone. Le PCB à encre de carbone est enduit sur le substrat PCB avec de l'encre conductrice à base de carbone (appelée encre de carbone), durcie pour former un PCB avec un motif conducteur en film de carbone. Le PCB à encre de carbone présente des avantages tels que le faible coût, la forte capacité de contrôle de l'impédance, une fiabilité élevée et une bonne résistance à la corrosion."
					},
					allViasFilled: {
						title: 'Tous les vias remplis de résine et couverts',
						description:
							'Si vous cochez cette option, tous les vias seront remplis de résine, puis couverts et plaqués.'
					},
					viaInPad: {
						title: 'Via dans le pad',
						description:
							"S'il y a un via dans le pad dans votre conception, c'est-à-dire des vias dans le pad SMD, cochez cette option et nous réaliserons un bouchage résine, puis le couvrirons et le plaquerons."
					},
					pressFitHoles: {
						title: 'Trous de pression',
						description:
							'Les trous de pression sont conçus pour accepter des composants avec des broches à pression. Les broches sont insérées dans les trous, puis pressées en place pour créer une connexion sécurisée. Tolérance : ±0,05 mm.'
					},
					countersink: {
						title: 'Châssis/Contre-forage',
						description:
							"La différence la plus notée entre un châssis et un contre-forage est la taille et la forme de la vis ou de l'outil qui crée les trous dans le matériau. Un trou de contre-forage est plus profond et a une forme carré où l'épaule de la tête de vis peut s'assoir. Il permet également d'ajouter des rondelles."
					},
					zAxisMilling: {
						title: 'Fraisage en Z',
						description:
							"Également connu sous le nom de fraisage à contrôle de profondeur, il fait référence à l'usinage partiel du PCB avec un niveau variable d'élévation sur le bord du PCB ou à l'intérieur du PCB."
					},
					blackFr4: {
						title: 'FR4 noir (Noyau noir)',
						description:
							"Il appartient au matériau de base FR-4 ordinaire et sa technologie de traitement est également la même que celle du FR-4. Il est noir, opaque, ombragé et approprié pour la fabrication de PCB d'affichage LED et de pièces structurelles isolantes dans les instruments et les instruments optiques."
					},
					embeddedCopperPcb: {
						title: 'PCB en cuivre intégré',
						description:
							"Les PCBs en cuivre intégrés sont des cartes de circuits imprimés qui ont des traces de cuivre intégrées dans le matériau du substrat. La conception de blocs de cuivre enfouis peut être principalement divisée en deux catégories : blocs de cuivre enfouis et blocs de cuivre intégrés. Les blocs de cuivre enfouis font référence à des blocs de cuivre qui sont enterrés avec une épaisseur inférieure à l'épaisseur totale de la carte, avec un côté du bloc de cuivre affleurant la couche inférieure et l'autre côté affleurant une certaine couche intérieure, comme illustré à la figure 1 (bloc de cuivre semi-enterré). Les blocs de cuivre intégrés font référence à des blocs de cuivre qui sont intégrés avec une épaisseur proche ou égale à l'épaisseur totale de la carte, le bloc de cuivre traversant la couche supérieure, comme illustré à la figure 2 (bloc de cuivre traversant). Les cartes de circuits imprimés avec des blocs de cuivre enfouis ou intégrés présentent des caractéristiques de conductivité thermique élevée, de dissipation thermique élevée et d'économie d'espace de carte, ce qui peut effectivement résoudre le problème de dissipation thermique des composants électroniques à haute puissance."
					},
					cavityPcb: {
						title: 'PCB en cavité',
						description:
							"Le PCB en cavité est un type de PCB qui possède une ou plusieurs rainures ou cavités en relief sur sa surface. Ces rainures sont créées en retirant une partie du matériau de la carte, laissant derrière une zone déprimée où les composants peuvent être placés plus profondément, et réduisant finalement la hauteur totale de l'appareil. Le PCB en cavité et le PCB de perçage arrière sont deux technologies différentes ; le perçage arrière fait référence à des trous pour les vias, s'arrêtant à une profondeur donnée sans pénétrer dans la carte, tandis que le PCB en cavité se réfère à une zone spécifique sur le PCB."
					},
					semiFlexPcb: {
						title: 'PCB semi-flexible',
						description:
							"Le PCB semi-flexible est un type de PCB qui peut être plié localement sur la base du PCB rigide, ce qui peut fournir le support du PCB rigide tout en réalisant un pliage local conformément aux exigences du produit, y compris le pliage à 45°, 90°, 180°, satisfaisant les exigences de performance d'installation de divers types d'assemblage 3D."
					},
					hybridPcb: {
						title: 'PCB hybride intégral/partiel',
						description:
							"Le PCB hybride utilise différents matériaux pour construire les couches de cœur du substrat ainsi que les couches diélectriques. Plutôt que d'utiliser un seul matériau, la fabrication du PCB hybride implique l'utilisation de différents matériaux. Différents matériaux sont utilisés pour combiner tous les avantages dans le processus de fabrication du PCB et réduire les inconvénients qu'un matériau particulier peut présenter."
					},
					backDrillPcb: {
						title: 'PCB à perçage arrière',
						description:
							"Le perçage arrière (parfois appelé perçage de profondeur contrôlée ou CDD) implique l'utilisation d'un foret légèrement plus grand que le diamètre du PTH pour retirer le placage conducteur ou le stub du trou. Le trou perçu doit réduire la longueur du stub à 10 mils. Si les stubs sont supérieurs à 10 mils, des réflexions de signal seront produites."
					},
					leadlessPartialHardGold: {
						title: 'Or dur partiellement plaqué sans plomb',
						description:
							"C'est une technologie de traitement de surface des composants électroniques qui est sans plomb et électroplaquée de manière sélective dans certaines zones pour fournir de hauts niveaux de conductivité et de durabilité."
					}
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder:
					'Remplissez tous les détails du PCB pour nous permettre de comprendre aussi clairement que possible vos exigences.'
			}
		},

		advancedPcb: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			buildTime: {
				title: 'Temps de construction'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			pcbType: {
				title: 'Type de PCB',
				description:
					"Les plaques à haute densité d'interconnexion (HDI) contiennent des vias aveugles et/ou enterrés et contiennent souvent des micro vias de 0,006 ou moins de diamètre. Elles ont une densité de circuits plus élevée que les circuits imprimés traditionnels.",
				values: {
					throughHoleBoard: 'Plaque à trous traversants',
					hdi: 'HDI (Vias enterrés/aveugles)'
				}
			},
			boardSpec: {
				title: 'Spécification de la plaque',
				description: 'Des normes sont requises pour produire des PCBs',
				values: {
					ipc6012Class2: 'IPC 6012 Classe 2',
					ipc6012Class3: 'IPC 6012 Classe 3',
					iatf16949: 'IATF 16949',
					iso13485: 'ISO 13485',
					customerStandard: 'Norme client'
				}
			},
			boardType: {
				title: 'Type de plaque',
				description:
					"Les PCB seront expédiés en pièces individuelles ou en panneaux. Pour les commandes d'assemblage en vrac (quantité supérieure à 30), nous recommandons l'expédition en panneaux, ce qui améliorera l'efficacité de l'assemblage.",
				values: {
					singlePieces: 'Pièces uniques',
					panelByCustomer: 'Panneau par le client',
					panelByVelenova: 'Panneau par Velenova'
				}
			},
			xoutAllowance: {
				title: 'Autorisation X-out dans le panneau',
				description:
					"Des PCB défectueux peuvent exister dans le panneau, le devis augmentera d'environ 30% si l'autorisation X-out n'est pas acceptée.",
				values: {
					accept: 'Accepter',
					decline: 'Décliner'
				}
			},
			routeProcess: {
				title: 'Processus de routage',
				description: 'Dans le panneau, les PCB sont connectés comme indiqué dans le schéma suivant :',
				values: {
					velenovaPrefer: 'Panneau comme Velenova préfère',
					vScoring: 'Panneau avec V-Scoring',
					tabRoute: 'Panneau avec routage par onglet',
					vScoringTabRoute: 'V-Scoring et routage par onglet'
				}
			},
			breakAwayRail: {
				title: 'Rail détachable',
				description:
					"Les rails détachables sont de longues bandes de plaque vides mises en place pour laisser l'espace de transmission de piste lors de l'assemblage et placer le point de marquage dans le panneau. Les PCB sont transmis à travers le rail guide sur la ligne de production d'assemblage, par conséquent, une paire de bords qui interdisent de placer des composants doit être laissée comme bord de transmission. La largeur du rail détachable est généralement d'environ 5-8mm."
			},
			panelRequirements: {
				title: 'Exigences du panneau',
				disclaimer:
					'(par exemple, Panneau en 2*3, taille du rail détachable, total 5 panneaux = total 30 plaques individuelles)'
			},
			differentDesign: {
				title: 'Design différent dans le panneau',
				description:
					"Cela signifie qu'il y a des designs différents dans vos fichiers séparés par des coupes en V, des trous de poinçonnage, des fentes de fraisage ou autres. Nous facturerons un coût supplémentaire pour le panneau s'il y a différents types de conceptions PCB dans un fichier Gerber.",
				error: 'Le design différent doit être supérieur à 0'
			},
			size: {
				title: 'Taille (unique)',
				description:
					"La taille de la plaque se réfère à la longueur et à la largeur de la plaque commandée par le client. Si c'est une plaque circulaire, la longueur et la largeur sont le diamètre du cercle ; Si c'est une plaque de forme irrégulière, la longueur et la largeur sont mesurées selon la plus grande plage de forme.",
				error: 'La longueur et la largeur doivent être supérieures à 0'
			},
			length: {
				title: 'Longueur'
			},
			width: {
				title: 'Largeur'
			},
			quantity: {
				title: 'Quantité (unique)',
				description:
					'Veuillez choisir le nombre de pièces uniques dont vous avez besoin. Pour un PCB standard, la quantité minimale est de 5 pièces.',
				error: 'La quantité doit être supérieure à 0',
				placeholder: 'Quantité',
				pieces: 'Pièces'
			},
			layers: {
				title: 'Couches',
				description:
					"Le nombre de couches de cuivre dans la plaque. MMWPCB peut actuellement produire jusqu'à 60 couches, si vous avez besoin de plus de 14 couches, veuillez sélectionner la page avancée PCB pour l'évaluation.",
				layer: 'Couche',
				layers: 'Couches'
			},
			copperLayer: {
				title: 'Couche de cuivre',
				description:
					"Lors de la commande d'un PCB à 1 couche, veuillez spécifier si la couche de circuit est sur le dessus, le fond ou aucune. Veuillez vous assurer de sélectionner les bons paramètres, sinon nous devrons vous contacter pour une reconfirmation.",
				values: {
					topLayer: 'Couche supérieure',
					bottomLayer: 'Couche inférieure'
				}
			},
			solderMask: {
				title: 'Masque de soudure',
				description:
					"C'est un matériau de revêtement utilisé pour masquer ou protéger une zone sélectionnée. Lors de la commande d'un PCB à 1 couche, veuillez spécifier si le masque de soudure est sur le dessus, le dessous, ou les deux côtés. Lorsque seul un côté est choisi pour le masque de soudure, l'autre côté sera exposé avec l'ouverture du masque de soudure complètement. Veuillez vous assurer de sélectionner les bons paramètres, sinon nous devrons vous contacter pour une reconfirmation.",
				values: {
					topSide: 'Côté supérieur',
					bottomSide: 'Côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			silkscreen: {
				title: 'Sérigraphe',
				description:
					"Le sérigraphe est une couche d'encre utilisée pour identifier les composants PCB, marques, logos, symboles, etc. Lors de la commande d'un PCB à 1 couche, veuillez spécifier sur quelle couche se trouve la sérigraphie.",
				values: {
					topSide: 'Côté supérieur',
					bottomSide: 'Côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			material: {
				title: 'Matériau',
				description:
					"FR4 est le matériau diélectrique le plus courant utilisé dans la fabrication de circuits imprimés. Les plaques en aluminium ont une meilleure dissipation thermique et un transfert thermique que les constructions FR-4 standard. Les plaques en cuivre ont une grande conductivité thermique, meilleure que celle des PCB en aluminium. En raison de ses caractéristiques de faible perte diélectrique, Rogers est souvent utilisé dans les PCB haute fréquence. Si vous avez besoin d'autres matériaux, veuillez contacter votre représentant commercial.",
				values: {
					tg140Fr4: {
						title: 'TG140 FR-4',
						disclaimer: '*Matériau TG140 FR-4 : Shengyi S1141'
					},
					tg150Fr4: {
						title: 'TG150 FR-4',
						disclaimer: '*Matériau TG150 FR-4 : Shengyi S1000-H'
					},
					tg170Fr4: {
						title: 'TG170 FR-4',
						disclaimer: '*Matériau TG170 FR-4 : S1000-2, S1000-2M'
					},
					tg150Fr4HalogenFree: {
						title: 'TG150 FR-4 (Sans halogène)',
						disclaimer:
							"*Matériau TG150 FR-4 (sans halogène) : Shengyi S1150G Pour assurer la qualité, nous ne stockons généralement pas ces matériaux. Période d'achat de 7 à 20 jours"
					},
					tg170Fr4HalogenFree: {
						title: 'TG170 FR-4 (Sans halogène)',
						disclaimer:
							"*Matériau TG170 FR-4 (sans halogène) : Shengyi S1170G Pour assurer la qualité, nous ne stockons généralement pas ces matériaux. Période d'achat de 7 à 20 jours"
					},
					highCTI: {
						title: 'High-CTI (>=600V)',
						disclaimer: '*Matériau High-CTI (≥600V) : Shengyi S1600 (CTI ≥ 600V)'
					},
					highCTIHalogenFree: {
						title: 'High-CTI (>=600V, Sans Halogène)',
						disclaimer: 'Matériau High-CTI (sans halogène, ≥600V) : Shengyi S1151G (CTI ≥ 600V)'
					},
					highSpeed: {
						title: 'Haute Vitesse (GHz)',
						disclaimer:
							"Les chaînes d'approvisionnement des matériaux haute vitesse (GHz) & PCB haute fréquence (DK) sont limitées. Pour assurer la qualité, nous ne stockons généralement pas ces matériaux. Nous vous répondrons après que vous ayez passé une commande."
					},
					highFrequency: {
						title: 'PCBs haute fréquence (DK)',
						disclaimer:
							"Les chaînes d'approvisionnement des matériaux haute vitesse (GHz) & PCB haute fréquence (DK) sont limitées. Pour assurer la qualité, nous ne stockons généralement pas ces matériaux. Nous vous répondrons après que vous ayez passé une commande."
					},
					specialMaterial: {
						title: 'Matériau spécial (haute basse température)',
						disclaimer: 'Matériau spécial (haute basse température) : Shengyi SH260'
					}
				}
			},
			highSpeed: {
				title: 'Haute Vitesse (GHz)',
				description: 'Haute Vitesse (GHz)'
			},
			highFrequency: {
				title: 'PCBs haute fréquence (DK)',
				description: 'PCBs haute fréquence (DK)'
			},
			thickness: {
				title: 'Épaisseur',
				description:
					"Pour les matériaux ordinaires, l'épaisseur de la plaque se réfère à l'épaisseur du PCB après la production, et l'erreur est d'environ 10% (+/-10% (T>=1mm) ou +/- 0.1mm (T<1mm)). L'erreur est principalement causée par le masque de soudure et le cuivre qui s'enfonce. Si vous avez d'autres exigences concernant l'erreur d'épaisseur, veuillez le noter dans d'autres exigences spéciales. Remarque : Pour le circuit imprimé Rogers à une ou deux faces, l'épaisseur se réfère à l'épaisseur du substrat.",
				error: "L'épaisseur doit être supérieure à 0"
			},
			minTrack: {
				title: 'Piste/espacement min',
				description:
					'Largeur minimale de la trace de cuivre et distance minimale entre deux traces. Les ingénieurs de PCBWay vérifieront en doublant la Piste/Espacement min.'
			},
			minHoleSize: {
				title: 'Taille de trou min',
				description: 'Diamètre minimum des trous. Les ingénieurs de PCBWay vérifieront la taille minimum des trous.',
				noDrill: 'Pas de perçage'
			},
			solderMaskColor: {
				title: 'Masque de soudure',
				description:
					'La couleur du masque de soudure se réfère à la couleur de la surface du PCB. Actuellement, PCBWay propose 9 couleurs de masque de soudure conventionnelles. Si vous avez besoin de rose, gris, orange ou transparent, veuillez aller sur la page Avancée PCB pour choisir.'
			},
			silkscreenColor: {
				title: 'Sérigraphie',
				description:
					"Le sérigraphe est une couche d'encre utilisée pour identifier les composants PCB, marques, logos, symboles, etc. La couleur est généralement blanche. Mais lorsque l'encre de masque de soudure est blanche, le sérigraphe sera noir."
			},
			edgeConnector: {
				title: 'Connecteur de bord',
				description:
					"Les connecteurs de bord obtiennent la connexion électrique en contactant les doigts dorés sur le PCB. Si votre design inclut des doigts dorés, veuillez cocher 'Oui' pour cet élément et sélectionner la méthode de finition de surface et l'angle d'avril pour cela. Sinon, veuillez cocher 'Non'."
			},
			surfaceFinish: {
				title: 'Finition de surface',
				description:
					"La finition de surface est une partie importante de la production de PCB. Elle peut protéger le cuivre de l'oxydation, rendant le PCB inutilisable. De plus, elle fournit une surface lisse pour que les composants soient soudés.",
				values: {
					immersionGold: 'Or immersion (ENIG)',
					osp: 'OSP',
					immersionTin: "Étain d'immersion",
					enepig: 'ENEPIG',
					plainCopper: 'Cuivre nu / Aucun'
				}
			},
			surfaceThickness: {
				title: 'Épaisseur de surface',
				immersionGold: {
					title: "Épaisseur de l'or d'immersion"
				},
				hardGold: {
					title: 'Épaisseur Au/Ni'
				},
				haslLeadFreeImmersionGold: {
					title: "Épaisseur de l'or d'immersion"
				},
				haslLeadFreeHardGold: {
					title: "Épaisseur de l'or dur"
				},
				immersionGoldHardGold: {
					title: "Épaisseur d'or d'immersion / d'or dur"
				},
				enepig: {
					title: 'Épaisseur de ENEPIG'
				}
			},
			finishedCopper: {
				title: 'Cuivre fini',
				description:
					"Le poids en onces de cuivre dans un pied carré de PCB, cette option déterminera l'épaisseur du cuivre sur les couches extérieures. MMWPCB fournit l'épaisseur du cuivre sur les couches extérieures de 1 à 13 oz. Les trous PTH ou vias qui sont découpés pour créer un trou partiel ou demi trou pour former une ouverture dans le côté du baril de trou. En général, ils sont utilisés pour monter un PCB sur un autre.",
				bareBoard: 'Planche nue'
			},
			innerCopper: {
				title: 'Cuivre intérieur',
				description:
					'Le poids de cuivre sur les couches intérieures pour les PCBs multicouches. Le poids de cuivre intérieur par défaut est de 1 oz.'
			},
			peelableSolderMask: {
				title: 'Masque de soudure peelable',
				description:
					"Également connu sous le nom de masque peelable bleu, il sert à protéger les pastilles de soudure requises lors de l'assemblage et est généralement appelé GTPM et GBPM dans la conception. Contrairement au masque de soudure vert, qui est une image négative et est présent de manière permanente sur le PCB dans la conception PCB, le masque de soudure peelable est une image positive (ce que vous voyez est ce que vous obtenez dans votre design) et est utilisé temporairement pour la fabrication et l'assemblage des PCB. Le matériau de revêtement pourrait être retiré après que la plaque soit passée à travers le soudage par vague.",
				values: {
					topSide: 'Côté supérieur',
					bottomSide: 'Côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			holeCopperThickness: {
				title: 'Épaisseur de cuivre de trou',
				description: "Veuillez sélectionner l'épaisseur de cuivre de trou dont vous avez besoin"
			},
			ulMarking: {
				title: 'Marquage UL',
				description:
					"MMWPCB a obtenu la certification UL, veuillez choisir d'ajouter le logo correspondant sur la couche nécessaire. Nous ajouterons le logo JDB-D s'il s'agit d'un circuit à deux couches, et ajouterons JDB-M s'il s'agit d'un circuit multicouches. Pour un PCB à base métallique à une couche, nous ajouterons UL correspondant (JDB-A1, JDB-A2, JDB-A3) selon les besoins.",
				values: {
					topSilkscreen: 'Oui - ajouter à la sérigraphie supérieure',
					bottomSilkscreen: 'Oui - ajouter à la sérigraphie inférieure',
					topSolderMask: 'Oui - ajouter au masque de soudure supérieur',
					bottomSolderMask: 'Oui - ajouter au masque de soudure inférieur',
					topCopper: 'Oui - ajouter au cuivre supérieur',
					bottomCopper: 'Oui - ajouter au cuivre inférieur',
					default: 'Oui - comme par défaut MMWPCB'
				}
			},
			dateCode: {
				title: 'Code date',
				description: 'Ajouter le temps de production sur le PCB',
				placeholder: 'Par exemple : code date au format WWYY dans la couche de sérigraphie supérieure',
				values: {
					velenovaPrefer: 'Ajouter comme Velenova préfère',
					customerRequired: 'Ajouter comme requis par le client',
					updateDesignedDateCode: 'Mettre à jour le code date conçu'
				}
			},
			dateCodeDescription: {
				title: 'Description du code date'
			},
			customizedServices: {
				title: 'Services personnalisés et options avancées',
				description:
					'Nous pouvons ajouter des coûts supplémentaires pour ces options spéciales qui seront confirmées après révision.',
				values: {
					halfCut: {
						title: 'Coupe partielle / Trous à pas de vis',
						description:
							'Les trous PTH ou vias qui sont découpés pour créer un trou partiel ou demi trou pour former une ouverture dans le côté du baril de trou. En général, ils sont utilisés pour monter un PCB sur un autre.'
					},
					edgePlating: {
						title: 'Placage de bord',
						description:
							"Le placage de bord du PCB fait référence à la métallisation des côtés d'un circuit imprimé sur sa hauteur. Vous pouvez effectuer le placage de bord sur l'un des bords de la plaque ou tout autour. Grâce au placage de bord, vous donnez au panneau une connexion fiable et une rigidité."
					},
					impedanceControl: {
						title: "Contrôle d'impédance",
						description:
							"Les conducteurs dans un PCB transportent divers signaux, et pour augmenter leur vitesse de transmission, leur fréquence doit être augmentée. Cependant, des facteurs tels que la gravure, l'épaisseur des couches et la largeur des lignes peuvent provoquer des variations d'impédance dans le PCB, entraînant une distorsion du signal. Par conséquent, pour les conducteurs PCB haute vitesse, leurs valeurs d'impédance doivent être contrôlées dans une certaine plage, connue sous le nom de \"contrôle d'impédance\". La tolérance d'impédance est généralement ±10%. Si des exigences d'impédance sont spécifiées dans la documentation mais non sélectionnées dans la commande, elles seront considérées comme ignorées."
					},
					halogenFree: {
						title: 'Sans Halogène',
						description:
							'Conformément à la norme JPCA-ES-01-2003, un stratifié en cuivre avec une teneur en chlore (Cl) et une teneur en brome (Br) de moins de 0,09% Wt (en poids) chacune et le montant total de CI + Br ≤ 0,15% [1500 PPM] est défini comme un stratifié en cuivre sans halogène.'
					},
					customStackup: {
						title: 'Échelonnement personnalisé',
						description:
							"S'applique uniquement aux PCBs multicouches. Si vous avez besoin de personnaliser un échelonnement spécifique, veuillez télécharger le fichier d'échelonnement ou contacter votre représentant commercial."
					},
					carbonInk: {
						title: 'Encre de carbone',
						description:
							"Également appelé PCB à encre de carbone. Le PCB à encre de carbone est recouvert sur le substrat PCB d'encre conductrice à base de carbone (appelée encre de carbone), durcie pour former un PCB avec un motif conducteur en film de carbone. Le PCB à encre de carbone présente les avantages de faible coût, de forte capacité de contrôle de l'impédance, de haute fiabilité et de bonne résistance à la corrosion."
					},
					allViasFilled: {
						title: 'Tous les vias remplis de résine et bouchés',
						description: 'Si vous cochez cette option, tous les vias seront remplis de résine, puis bouchés et plaqués.'
					},
					viaInPad: {
						title: 'Via dans la pastille',
						description:
							"S'il y a des vias dans les pastilles dans votre conception, c'est-à-dire des vias dans la pastille SMD, cochez cette option et nous effectuerons un bouchage en résine, puis nous boucherons et plaquerons."
					},
					pressFitHoles: {
						title: 'Trous prés ajustés',
						description:
							'Les trous prés ajustés sont conçus pour accepter des composants avec des pins prés ajustés. Les pins sont insérés dans les trous, puis pressés en place pour créer une connexion sécurisée. Tolérance : +/-0,05 mm.'
					},
					countersink: {
						title: 'Châssis / Contre-perçage',
						description:
							"La différence la plus notable entre un châssis et un contre-perçage est la taille et la forme de la vis ou de l'outil qui crée les trous dans le matériau. Un trou de contre-perçage est plus profond et a une forme carrée où l'épaule de la tête de vis peut s'asseoir. Il permet également l'ajout de rondelles."
					},
					zAxisMilling: {
						title: 'Fraisage Z-axis',
						description:
							"Également connu sous le nom de fraisage par contrôle de profondeur, cela fait référence au fraisage partiel dans le PCB avec une élévation de niveau variable au bord du PCB ou à l'intérieur du PCB."
					},
					blackFr4: {
						title: 'FR4 Noir (noyau noir)',
						description:
							"Il appartient au matériau de base FR-4 ordinaire et sa technologie de traitement est la même que celle du FR-4. Il est noir, opaque, ombragé et adapté à la fabrication de PCB d'affichage LED et de pièces structurelles isolantes dans l'instrumentation et les instruments optiques."
					},
					embeddedCopperPcb: {
						title: 'PCB en cuivre intégré',
						description:
							"Les PCB en cuivre intégré sont des circuits imprimés qui ont des traces de cuivre intégrées au sein du matériau du substrat. La conception des blocs de cuivre enfouis peut être principalement divisée en deux catégories : blocs de cuivre enfouis et blocs de cuivre intégrés. Les blocs de cuivre enfouis font référence aux blocs de cuivre qui sont enterrés avec une épaisseur inférieure à l'épaisseur totale de la plaque, avec un côté du bloc de cuivre à niveau avec la couche inférieure et l'autre côté à niveau avec une certaine couche intérieure, comme le montre la Figure 1 (bloc de cuivre semi-enterré). Les blocs de cuivre intégrés font référence aux blocs de cuivre qui sont intégrés avec une épaisseur proche de l'épaisseur totale de la plaque, le bloc de cuivre passant par la couche supérieure, comme le montre la Figure 2 (bloc de cuivre avec trou traversant). Les circuits imprimés avec des blocs de cuivre enfouis ou intégrés ont les caractéristiques d'une haute conductivité thermique, d'une forte dissipation thermique, et permettent d'économiser de l'espace sur le panneau, ce qui peut résoudre efficacement le problème de dissipation thermique des composants électroniques haute puissance."
					},
					cavityPcb: {
						title: 'PCB en cavité',
						description:
							"Le PCB en cavité est un type de PCB qui présente une ou plusieurs rainures ou cavités en retrait à sa surface. Ces rainures sont créées en enlevant une partie du matériau de la plaque, laissant derrière une zone en dépression où les composants peuvent être placés plus en profondeur, réduisant ainsi la hauteur globale de l'appareil. Le PCB en cavité et le PCB à perçage arrière sont deux technologies différentes, le perçage arrière désignant le perçage de trous pour les vias, qui s'arrête à une certaine profondeur et ne pénètre pas à travers la plaque, tandis que le PCB en cavité fait référence à une zone spécifique sur le PCB."
					},
					semiFlexPcb: {
						title: 'PCB semi-flexible',
						description:
							"Le PCB semi-flexible est un type de PCB qui peut être localement plié sur la base d'un PCB rigide, fournissant non seulement le support d'un PCB rigide, mais permettant également d'obtenir un pliage local selon les exigences du produit, y compris le pliage à 45°, 90°, 180°, répondant aux exigences de performance d'installation de divers types d'assemblage 3D."
					},
					hybridPcb: {
						title: 'PCB entièrement/partiellement hybride',
						description:
							"Le PCB hybride utilise différents matériaux pour construire les couches centrales du substrat ainsi que les couches diélectriques. Au lieu d'utiliser un seul matériau, la fabrication d'un PCB hybride implique l'utilisation de différents matériaux. Différents matériaux sont utilisés pour combiner tous les avantages dans le processus de fabrication du PCB et réduire les inconvénients qu'un matériau particulier peut présenter."
					},
					backDrillPcb: {
						title: 'PCB à perçage arrière',
						description:
							"Le perçage arrière (parfois appelé perçage à profondeur contrôlée ou CDD) implique l'utilisation d'un foret légèrement plus grand que le PTH pour retirer le placage conductif ou le stub du trou. Le trou percé en arrière doit réduire la longueur du stub à 10 mils. Si les stubs sont supérieurs à 10 mils, des réflexions de signal seront produites."
					},
					leadlessPartialHardGold: {
						title: 'Or dur partiellement plaqué sans plomb',
						description:
							"C'est une technologie de traitement de surface de composants électroniques qui est sans plomb et plaquée électriquement de manière sélective dans certaines zones pour fournir des niveaux élevés de conductivité et de durabilité."
					}
				}
			},
			finalInspectionReport: {
				title: "Rapport d'inspection final (gratuit)",
				description:
					"Le rapport d'expédition régulier inclut également le rapport de test, le rapport d'inspection dimensionnelle.",
				values: {
					defaultInspectionReport: "Rapport d'inspection par défaut",
					microsectionInspectionReport: "Rapport d'inspection de microsection",
					solderabilityInspectionReport: "Rapport d'inspection de soudabilité",
					thermalStressInspectionReport: "Rapport d'inspection de stress thermique",
					impedanceTestReport: "Rapport de test d'impédance",
					humidityIndicatorCards: "Cartes indicatrices d'humidité"
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder:
					'Remplissez tous les détails du PCB pour que nous puissions comprendre vos exigences aussi clairement que possible.'
			}
		},

		flexiblePcb: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Date de création'
			},
			updatedAt: {
				title: 'Date de mise à jour'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer le nom de votre produit',
				error: 'Nom du produit est obligatoire'
			},
			fileName: {
				title: 'Nom de fichier'
			},
			buildTime: {
				title: 'Temps de production'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix définitif'
			},
			boardType: {
				title: 'Type de carte',
				description:
					"La carte sera transportée sous forme de plaquettes ou de pièces individuelles. Pour les commandes de montage en série (supérieures à 30), nous recommandons la livraison en plaquettes, ce qui améliorera l'efficacité du montage et réduira les coûts.",
				values: {
					singlePieces: 'Pièces individuelles',
					panelByCustomer: 'Livraison en plaquettes par le client',
					panelByVelenova: 'Livraison en plaquettes par Velenova'
				}
			},
			xoutAllowance: {
				title: 'Tolérance de défectuosité en plaquette',
				description:
					"Il est possible que les plaquettes contiennent des PCB défauts, si vous ne souhaitez pas accepter la tolérance de défectuosité, le prix sera augmenté d'environ 30%.",
				values: {
					accept: 'Accepter',
					decline: 'Refuser'
				}
			},
			routeProcess: {
				title: 'Processus de ligne',
				description: 'Les PCB dans les plaquettes sont branchés en fonction des schémas suivants :',
				values: {
					velenovaPrefer: 'En plaquette selon les préférences de Velenova',
					vScoring: 'V-évaluation en plaquette',
					tabRoute: 'Routeur avec plaquette',
					vScoringTabRoute: 'V-évaluation et routeur'
				}
			},
			breakAwayRail: {
				title: 'Rail de désinsertion',
				description:
					'Le rail de désinsertion est une zone vide longue et étroite le long du bord de la plaque destinée à laisser place à une zone de transport et à y poser des signes de dépose. Les PCB se déplacent le long de ces rail sur la production en chaîne, il faut donc laisser place à deux côtés interdits aux composants. La largeur de ces rail est normalement comprise entre 5 et 8 mm.'
			},
			panelRequirements: {
				title: 'Règles de plaquette',
				disclaimer:
					'(Exemple : 2*3 plaquettes, largeur du rail de désinsertion, nombre total de plaquettes, nombre total de PCB séparés)'
			},
			differentDesign: {
				title: 'Conception differente en plaquette',
				description:
					"Il signifie que le fichier contient plusieurs conceptions différentes séparées par un V-coupure, une poinçonnure, une alésage ou d'autres procédés. Si vous avez un fichier Gerber contenant différentes conceptions de PCB, nous demanderons une surcharge pour les plaquettes.",
				error: 'La conception différente ne peut pas être inférieure à 0'
			},
			size: {
				title: 'Dimensions (Pièces individuelles)',
				description:
					"Les dimensions de la plaque représentent la longueur et la largeur des plaquettes commandées par le client. Si c'est un disque circulaire, la longueur et la largeur correspondent au diamètre du disque ; si c'est une forme non régulière, on mesure la largeur et la longueur suivant l'extension de la forme.",
				error: 'La longueur et la largeur doivent être supérieure à 0.'
			},
			length: {
				title: 'Longueur'
			},
			width: {
				title: 'Largeur'
			},
			quantity: {
				title: 'Quantité (Pièces individuelles)',
				description:
					'Choisissez la quantité de PCB que vous souhaitez commander. Pour les PCB standard, la quantité minimum est de 5 pièces.',
				error: 'La quantité doit être supérieure à 0',
				placeholder: 'Quantité',
				pieces: 'Pièces'
			},
			layers: {
				title: 'Nombres de couches',
				description:
					'Le nombre de couches en cuivre dans la plaque. Actuellement, MMWPCB peut produire au maximum 60 couches. Si vous souhaitez plus de 14 couches, merci de passer par la page de commande PCB avancée.',
				layer: 'Couche',
				layers: 'Nombres de couches'
			},
			material: {
				title: 'Matériau',
				description: 'Un matériau électrique communément utilisé.',
				values: {
					polyimideFlex: 'Polyimidé flexible',
					pet: 'PET',
					highFrequency: 'Haute fréquence (DK≤3,6)'
				}
			},
			petType: {
				title: 'Matériau (PET)',
				disclaimer: '*Conformité aux températures inférieures ou égales à 110°',
				values: {
					transparent: 'Transparent',
					translucent: 'Translucide'
				}
			},
			thickness: {
				title: 'Épaisseur de FPC',
				description: "L'épaisseur du FPC ne compte pas l'épaisseur du matériau d'appoint et du 3M.",
				disclaimer: "*L'épaisseur du FPC ne compte pas l'épaisseur du matériau d'appoint et du 3M."
			},
			minTrack: {
				title: 'Nombres minima de trace / inter-trace',
				description:
					'La largeur minimale de la ligne de cuivre et la distance minimale entre deux lignes de cuivre. Les ingénieurs de MMWPCB vérifieront à nouveau cette entrée.'
			},
			minHoleSize: {
				title: 'Nombres minima de trou/anneau de soudure (diamètre)',
				description:
					"Le diamètre minima de trou et d'anneau de soudure. Si vous n'avez pas besoin de trous, veuillez cocher « Non perforé ».",
				noDrill: 'Pas de trou'
			},
			solderMaskColor: {
				title: 'Masque de soudure',
				description: 'Couleur pour le masque de soudure',
				coverlay: 'Masque de cuivre'
			},
			silkscreenColor: {
				title: 'Sérigraphie',
				description:
					"La sérigraphie est une couche de liquide colorant appliquée en surface d'un produit. Elle peut servir à plusieurs fins : identifier les composants, les marques, les logos, les symboles, etc. Les couleurs utilisées sont généralement la blanche, mais lorsqu'on utilise un masque de soudure blanc, la couleur de sérigraphie sera noire."
			},
			edgeConnector: {
				title: "Connecteur d'extrémité",
				description:
					"Un connecteur qui se situe à la extrémité d'une plaque PCB. Il est conçu pour établir un contact électrique avec un connecteur de correspondance."
			},
			stiffener: {
				title: "Matériau d'appoint",
				description:
					"Un matériau utilisé pour augmenter la rigidité d'une zone spécifique ou remplir une fonction particulière d'une plaquette, tels que renforcer l'ensemble du PCB ; protéger les points de soudure ; améliorer la conduction thermique, etc.",
				values: {
					topSide: 'Du côté supérieur',
					bottomSide: 'Du côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			surfaceFinish: {
				title: 'Finition de surface',
				description: 'Finition qui aide à améliorer la surface de soudure. ',
				values: {
					immersionGold: 'Plongée dorée (ENIG)',
					osp: 'OSP',
					hardGold: 'Or dur',
					immersionSilver: 'Plongée argentée (Ag)',
					immersionTin: 'Plongée en étain',
					immersionGoldHardGold: 'Plongée dorée + or dur',
					enepig: 'Enepig'
				}
			},
			surfaceThickness: {
				title: 'Épaisseur de surface',
				immersionGold: {
					title: 'Nombres épaisseurs dorée'
				},
				hardGold: {
					title: 'Épaisseur or/Nickel'
				},
				immersionGoldHardGold: {
					title: 'Épaisseur dorée + or dur'
				},
				enepig: {
					title: 'Épaisseur enepig'
				}
			},
			finishedCopper: {
				title: 'Épaisseur du cuivre',
				description:
					"Le poids en onces par pied carré du PCB. Ce choix sera le décideur du niveau d'épaisseur de cuivre externe. PCWay fournit les épaisseurs en cuivre externe entre 1 et 13 onces.",
				bareBoard: 'Carte nue'
			},
			etest: {
				title: 'Étalon',
				description:
					'Le test électrique, qui utilise une aiguille testée sur un petit nombre de produits. Pour de plus grandes quantités, on utilise un appareillage de test électrique.'
			},
			tape: {
				title: 'Adhésif 3M/Tesa',
				description: "Coller toute ou partie d'une plaque FPC à une autre entité",
				values: {
					threeM467: '3M467',
					tesa8853: 'Tesa8853',
					tesa8854: 'Tesa8854',
					threeM9495LE: '3M9495LE'
				}
			},
			doubleSidedTape: {
				title: 'Adhésif bidirectionnel',
				description: 'Un adhésif collant au FPC tout entier ou en partie sur une autre entité et est électrique.',
				values: {
					htA1134: 'HT-A1134'
				}
			},
			emiShieldingFilm: {
				title: "Film d'écran de protection contre les interférences électromagnétiques",
				description:
					'Un film de hautes performances qui permet de protéger efficacement contre les interférences électromagnétiques.',
				values: {
					hcf6000g: 'HCF-6000G',
					pc800: 'PC800'
				}
			},
			peelableSolderMask: {
				title: 'Masque de soudure à pelle',
				description:
					"Surtout connue sous le nom de masque de soudure bleu à pelle, elle est principalement prévue pour la protection des zones de soudure souhaitées pendant la phase d'assemblage et se trouve généralement au cours du design en notation GTPM et GBPM. À la différence de masque de soudure vert, masque de soudure vert n est pas une image négative qui est présente au design ; c'est une image positive qui se produit lors du design ; le masque de soudure à pelle est temporaire pendant la phase de fabrication et d'assemblage PCB. Matériau d'enduit enlevable après soudure.",
				values: {
					topSide: 'Du côté supérieur',
					bottomSide: 'Du côté inférieur',
					bothSides: 'Les deux côtés'
				}
			},
			ulMarking: {
				title: "Marquage de l'UL",
				description:
					"MMWPCB a acquis la certification UL. Veuillez choisir d'ajouter les marques souhaitées sur le côté souhaité. Pour les plaques en deux couches, nous ajoutons la marque JDB-D ; pour les plaques en couches multiples, nous ajoutons la marque JDB-M ; en cas de plateforme métallique unique, nous ajoutons les marques UL appropriées selon le besoin. ",
				values: {
					topSilkscreen: 'Oui - marquage sur le haut',
					bottomSilkscreen: 'Oui - marquage sur le bas',
					topSolderMask: 'Oui - marquage sur le haut',
					bottomSolderMask: 'Oui - marquage sur le bas',
					topCopper: 'Oui - marquage sur le haut',
					bottomCopper: 'Oui - marquage sur le bas',
					default: 'Oui - marque par défaut de MMWPCB'
				}
			},
			dateCode: {
				title: 'Code de date',
				description: 'Ajouter la date de production',
				placeholder: 'Par exemple: WWYY dans le haut de la sérigraphie',
				values: {
					velenovaPrefer: 'Ajouter selon les préférences de Velenova',
					customerRequired: 'Ajouter selon les besoins du client.',
					updateDesignedDateCode: 'Update le code de date du design'
				}
			},
			dateCodeDescription: {
				title: 'Description du code de date'
			},
			customizedServices: {
				title: 'Services personnalisés et options avancées',
				description:
					'Ces services spécialisés peuvent nécessiter un surcoût supplémentaire et nous vérifierons à nouveau après le passage en revue.',
				values: {
					halfCut: {
						title: 'Défense ou emmangeoire',
						description:
							"Traverser une ou plusieurs puits, des alésages de trous et les puits de soudure. Créer des trous ou demi-trou sur la face de la plaque PCB. Généralement, ce type de défense ou d'alésage est utilisé lors du montage de PCB à d'autres pièces."
					},
					edgePlating: {
						title: 'Electrolyse de la bords',
						description:
							"L'électrolyse des bords d'une carte, c'est-à-dire un traitement de surface en électrolyse, permet de rendre les bords du PCB plus solides en électrolyte. Cela améliore la fiabilité et la robustesse de vos PCB en augmentant la force de résistance mécanique. L'électrolyse des bords d'une carte est une étape cruciale dans la production de PCB, car elle garantit la sécurité et la stabilité de vos PCB."
					},
					impedanceControl: {
						title: "Contrôle d'impédance",
						description:
							"Contrôle d'impédance de signal, ce qui signifie une résistance électrique au parcours de signal"
					},
					viasFilledWithCopper: {
						title: 'Fils de cuivre remplissage',
						description: 'Fils en cuivre de remplissage'
					},
					fpcWithAirgap: {
						title: 'FPC avec un vide',
						description: 'FPC avec un vide entre les deux couches de la plaque de FPC.'
					},
					singleSideDoubleAccess: {
						title: 'Double accès sur la face',
						description: ''
					},
					stiffenerTopBottom: {
						title: "Matériau d'appoint sur le haut et le bas"
					}
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder:
					'Remplissez toute information de PCB supplémentaire pour que nous puissions mieux comprendre vos besoins.'
			}
		},

		rigidFlex: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			buildTime: {
				title: 'Temps de construction'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			boardType: {
				title: 'Types de carte',
				description:
					"Les circuits imprimés seront expédiés en pièces uniques ou en panneau. Pour les commandes de montage en masse (quantité supérieure à 30), nous recommandons l'expédition en panneau, ce qui améliorera l'efficacité du montage et réduira le coût.",
				values: {
					singlePieces: 'Pièces uniques',
					panelByCustomer: 'Panneau par le client',
					panelByVelenova: 'Panneau par Velenova'
				}
			},
			xoutAllowance: {
				title: 'Autorisation X-out dans le panneau',
				description:
					"Des circuits imprimés défectueux peuvent exister dans le panneau, le devis augmentera d'environ 30 % si l'autorisation X-out n'est pas acceptée.",
				values: {
					accept: 'Accepter',
					decline: 'Décliner'
				}
			},
			routeProcess: {
				title: 'Processus de routage',
				description: 'Dans le panneau, les circuits imprimés sont connectés comme montré dans le diagramme suivant :',
				values: {
					velenovaPrefer: 'Panneau selon la préférence de Velenova',
					vScoring: 'Panneau selon le V-Scoring',
					tabRoute: 'Panneau selon le routage à onglet',
					vScoringTabRoute: 'V-Scoring et routage à onglet'
				}
			},
			breakAwayRail: {
				title: 'Rail de séparation',
				description:
					"Les rails de séparation sont de longues bandes de bords de plaques vierges configurées pour laisser de l'espace de transmission pendant l'assemblage et placer le point de marque dans le panneau. Les circuits imprimés sont transmis à travers le rail de guidage sur la ligne de production d'assemblage, par conséquent, une paire de bords interdisant le placement de composants doit être laissée comme bord de transmission. La largeur du rail de séparation est généralement d'environ 5 à 8 mm."
			},
			panelRequirements: {
				title: 'Exigences du panneau',
				disclaimer:
					'(par exemple, panneau en 2*3, taille du rail de séparation, total 5 panneaux = total de 30 cartes individuelles)'
			},
			differentDesign: {
				title: 'Design différent dans le panneau',
				description:
					"Cela signifie qu'il y a différents designs dans vos fichiers séparés par des découpes en V, des trous de tampon, des fentes de fraisage ou d'autres. Nous facturerons des frais supplémentaires si il y a des types différents de dessins de circuits imprimés dans un fichier Gerber.",
				error: 'Le design différent doit être supérieur à 0'
			},
			size: {
				title: 'Taille (unique)',
				description:
					'La taille de la carte fait référence à la longueur et la largeur de la carte commandée par le client. Si c’est une carte circulaire, la longueur et la largeur correspondent au diamètre du cercle ; si c’est une carte de forme irrégulière, la longueur et la largeur sont mesurées selon le plus grand périmètre de forme.',
				error: 'La longueur et la largeur doivent être supérieures à 0'
			},
			length: {
				title: 'Longueur'
			},
			width: {
				title: 'Largeur'
			},
			quantity: {
				title: 'Quantité (unique)',
				description:
					'Veuillez choisir le nombre de pièces uniques dont vous avez besoin. Pour une carte PCB standard, la quantité minimale est de 5 pièces.',
				error: 'La quantité doit être supérieure à 0',
				placeholder: 'Quantité',
				pieces: 'Pièces'
			},
			layers: {
				title: 'Couches',
				description:
					"Le nombre de couches de cuivre dans la carte. MMWPCB peut actuellement produire jusqu'à 60 couches, si vous avez besoin de plus de 14 couches, veuillez sélectionner la page des PCB avancés pour une évaluation.",
				layer: 'Couche',
				layers: 'Couches'
			},
			material: {
				title: 'Matériau',
				description:
					"FR4 est le matériau diélectrique le plus courant utilisé dans la fabrication de circuits imprimés. Les cartes en aluminium ont une meilleure dissipation de la chaleur et un transfert thermique que les constructions standard en FR-4. Les cartes à base de cuivre ont une grande conductivité thermique meilleure que les PCB en aluminium. En raison de ses caractéristiques de faible perte diélectrique, Rogers est souvent utilisé dans les PCB haute fréquence. Si vous avez besoin d'autres matériaux, veuillez contacter votre représentant commercial.",
				values: {
					polyimideFlex: 'Polyimide Flex + FR4'
				}
			},
			thickness: {
				title: 'Épaisseur Rigid-Flex',
				description: 'Épaisseur totale des couches rigides et flexibles'
			},
			minTrack: {
				title: 'Min piste/espacement',
				description:
					'Largeur minimale de la trace en cuivre et distance minimale entre deux traces. Les ingénieurs de PCBWay vérifieront la Min Piste/Spacing.'
			},
			minHoleSize: {
				title: 'Taille minimale du trou',
				description: 'Diamètre minimum des trous. Les ingénieurs de PCBWay vérifieront la taille minimale du trou.',
				noDrill: 'Pas de perçage'
			},
			surfaceFinish: {
				title: 'Finition de surface',
				description: "Processus supplémentaire pour le cuivre exposé afin d'aider à la soudabilité",
				values: {
					immersionGold: 'Or immersion (ENIG)',
					osp: 'OSP',
					immersionSilver: 'Argent immersion (Ag)'
				}
			},
			surfaceThickness: {
				title: 'Épaisseur de surface',
				immersionGold: {
					title: "Épaisseur de l'or immersion"
				}
			},
			edgeConnector: {
				title: "Connecteur d'aplomb",
				description:
					'Les connecteurs d\'aplomb assurent la connexion électrique en contactant les doigts dorés sur le PCB. Si votre conception comprend un doigt doré, veuillez cocher "Oui" pour cet élément et sélectionner la méthode de finition de surface et l\'angle de biseautage pour cela. Sinon, veuillez cocher "Non".'
			},
			flexPart: 'Partie flexible',
			fpcLayers: {
				title: 'Couches FPC',
				description: 'Le nombre de couches conductrices pour la partie flexible.'
			},
			fpcThickness: {
				title: 'Épaisseur FPC',
				description: "L'épaisseur de la carte pour la partie flexible"
			},
			fpcCoverlay: {
				title: 'Couverture FPC',
				description: 'Couleur du masque utilisé pour couvrir le PCB',
				coverlay: 'Couverture'
			},
			fpcSilkscreenColor: {
				title: 'Sérigraphie',
				description:
					"La sérigraphie est une couche d'encre utilisée pour identifier les composants PCB, marques, logos, symboles, etc. La couleur est généralement blanche. Mais lorsque l'encre du masque de soudure est blanche, la sérigraphie sera noire."
			},
			fpcFinishedCopper: {
				title: 'Cuivre fini',
				description:
					"Le poids en onces de cuivre dans un pied carré de PCB, cette option déterminera l'épaisseur du cuivre sur les couches extérieures. PCBWay fournit l'épaisseur du cuivre sur les couches extérieures de 1 à 13 oz."
			},
			rigidPart: 'Partie rigide',
			rpcSolderMaskColor: {
				title: 'Masque de soudure',
				description:
					'La couleur du masque de soudure fait référence à la couleur de la surface du PCB. Actuellement, PCBWay propose 9 couleurs de masque de soudure conventionnelles. Si vous avez besoin de rose, gris, orange ou transparent, veuillez vous rendre sur la page PCB avancés pour faire votre choix.'
			},
			rpcSilkscreenColor: {
				title: 'Sérigraphie',
				description:
					"La sérigraphie est une couche d'encre utilisée pour identifier les composants PCB, marques, logos, symboles, etc. La couleur est généralement blanche. Mais lorsque l'encre du masque de soudure est blanche, la sérigraphie sera noire."
			},
			rpcFinishedCopper: {
				title: 'Cuivre fini',
				description:
					"Le poids en onces de cuivre dans un pied carré de PCB, cette option déterminera l'épaisseur du cuivre sur les couches extérieures. PCBWay fournit l'épaisseur du cuivre sur les couches extérieures de 1 à 13 oz."
			},
			ulMarking: {
				title: 'Marquage UL',
				description:
					"MMWPCB a obtenu la certification UL, veuillez choisir d'ajouter le logo correspondant sur la couche dont vous avez besoin. Nous ajouterons le logo JDB-D s'il s'agit d'une carte à deux couches, et ajouterons JDB-M s'il s'agit d'une carte multicouche. Pour les circuits imprimés à base de métal à une seule couche, nous ajouterons le UL correspondant (JDB-A1, JDB-A2, JDB-A3) selon les exigences.",
				values: {
					topSilkscreen: 'Oui - ajouter à la sérigraphie supérieure',
					bottomSilkscreen: 'Oui - ajouter à la sérigraphie inférieure',
					topSolderMask: 'Oui - ajouter au masque de soudure supérieur',
					bottomSolderMask: 'Oui - ajouter au masque de soudure inférieur',
					topCopper: 'Oui - ajouter au cuivre supérieur',
					bottomCopper: 'Oui - ajouter au cuivre inférieur',
					default: 'Oui - comme défaut MMWPCB'
				}
			},
			dateCode: {
				title: 'Code de date',
				description: 'Ajouter la date de production sur le PCB',
				placeholder: 'Par exemple : code de date au format WWYY dans la couche de sérigraphie supérieure',
				values: {
					velenovaPrefer: 'Ajouter selon la préférence de Velenova',
					customerRequired: 'Ajouter selon les exigences du client',
					updateDesignedDateCode: 'Mettre à jour le code de date conçu'
				}
			},
			dateCodeDescription: {
				title: 'Description du code de date'
			},
			customizedServices: {
				title: 'Services personnalisés et options avancées',
				description:
					'Nous pouvons ajouter des frais supplémentaires pour ces options spéciales qui seront confirmées après examen.',
				values: {
					halfCut: {
						title: 'Découpe à moitié / Trous en galette',
						description:
							'Trous PTH ou vias qui sont découpés pour créer un trou partiel ou à moitié pour former une ouverture sur le côté du canon de trou. En général, ils sont utilisés pour monter un PCB sur un autre.'
					},
					impedanceControl: {
						title: "Contrôle d'impédance",
						description:
							"Les conducteurs dans un PCB transportent divers signaux, et pour augmenter leur vitesse de transmission, leur fréquence doit être élevée. Cependant, des facteurs tels que la gravure, l'épaisseur de la couche et la largeur de ligne peuvent provoquer des variations d'impédance dans le PCB, entraînant une distorsion du signal. Par conséquent, pour les conducteurs de PCB haute vitesse, leurs valeurs d'impédance doivent être contrôlées dans une certaine plage, connue sous le nom de \"contrôle d'impédance\". La tolérance d'impédance est généralement de ±10 %. Si des exigences d'impédance sont spécifiées dans la documentation mais non sélectionnées dans la commande, elles seront considérées comme négligées."
					},
					allViasFilled: {
						title: 'Tous les vias remplis de résine et scellés',
						description: 'Si vous cochez cette option, tous les vias seront remplis de résine, puis scellés et plaqués.'
					},
					viaInPad: {
						title: 'Via dans le pad',
						description:
							"S'il y a des vias dans le pad dans votre conception, c'est-à-dire des vias dans le pad SMD, cochez cette option et nous effectuerons un bouchage en résine, puis scellé et plaqué."
					},
					hdi: {
						title: 'HDI (Vias enterrées/aveugles)',
						description:
							"Un via aveugle connecte une couche externe à une ou plusieurs couches internes mais ne traverse pas l'ensemble du PCB. Un via enterré connecte deux ou plusieurs couches internes mais ne traverse pas jusqu'à une couche externe."
					}
				}
			},
			finalInspectionReport: {
				title: "Rapport d'inspection finale (Gratuit)",
				description:
					"Le rapport d'expédition régulier comprend également le rapport de test et le rapport d'inspection dimensionnelle",
				values: {
					defaultInspectionReport: "Rapport d'inspection par défaut",
					microsectionInspectionReport: "Rapport d'inspection microscopique",
					solderabilityInspectionReport: "Rapport d'inspection de soudabilité",
					thermalStressInspectionReport: "Rapport d'inspection de contrainte thermique",
					impedanceTestReport: "Rapport de test d'impédance",
					humidityIndicatorCards: "Cartes indicatrices d'humidité"
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder: 'Remplissez les détails du PCB pour que nous comprenions clairement vos exigences.'
			}
		},

		assembly: {
			id: {
				title: 'ID du Produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du Produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du Fichier'
			},
			buildTime: {
				title: 'Temps de Construction'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix Initial'
			},
			finalPrice: {
				title: 'Prix Final'
			},
			flexibleOptions: {
				title: 'Options Flexibles',
				values: {
					turnkey: {
						title: 'Clé en Main',
						description: 'MMWPCB fournit les pièces'
					},
					kitted: {
						title: 'Kit ou Consigné',
						description: 'Le client fournit les pièces'
					},
					combo: {
						title: 'Combo',
						description: 'Vous fournissez certaines pièces, nous faisons le reste'
					}
				}
			},
			boardType: {
				title: 'Type de Carte',
				description:
					'Nous vous recommandons de choisir de faire une plaquette si la quantité de PCB unique est supérieure à 20 pièces ou si une des côtés de la carte unique est inférieure à 50 mm.',
				disclaimer:
					'Nous vous recommandons de choisir de faire une plaquette si la quantité de PCB unique est supérieure à 20 pièces ou si un des côtés de la carte unique est inférieure à 50 mm.',
				values: {
					singlePieces: 'Pièces Uniques',
					panelizedPcbs: 'PCBs Panelisés'
				}
			},
			side: {
				title: "Côté d'Assemblage",
				description: 'Les pièces sont-elles montées sur un seul côté ou sur les deux côtés ?',
				values: {
					topSide: 'Côté Supérieur',
					bottomSide: 'Côté Inférieur',
					bothSides: 'Les Deux Côtés'
				}
			},
			quantity: {
				title: 'Quantité',
				description: 'Veuillez remplir la quantité totale de PCBs uniques.',
				error: 'La quantité doit être supérieure à 0',
				placeholder: 'Quantité',
				pieces: 'Pièces'
			},
			payAttention: {
				title: 'À Noter',
				description:
					"En raison de la diversité des composants, il y a généralement de nombreuses choses à prendre en compte lors du montage, telles que la nécessité de préchauffage avant le montage, les exigences spécifiques concernant la température de soudage, la résistance à la corrosion, l'humidité, etc. Nos ingénieurs vérifieront toutes les informations, mais il est inévitable qu'il y ait des omissions. Il serait donc beaucoup mieux de pouvoir mettre en avant les exigences spéciales à l'avance."
			},
			sensitiveParts: {
				title: 'Composants Sensibles',
				description: 'Contient des composants/parties sensibles'
			},
			alternatesChina: {
				title: 'Alternatives Fabriquées en Chine',
				description: 'Acceptez-vous des alternatives/produits de substitution fabriqués en Chine ?'
			},
			otherParameters: {
				title: 'Autres Paramètres',
				description: 'Remplissez pour obtenir le prix exact, ou laissez vide pour attendre le devis final.'
			},
			solderPads: {
				title: 'Nombre de Trous de Soudure PCBA',
				description: 'Le nombre total de trous de soudure sur chaque carte',
				error: 'Le nombre de trous de soudure ne peut pas être inférieur à 0'
			},
			customizedServices: {
				title: 'Services Personnalisés et Options Avancées',
				description: "Les options ci-dessous, leur coût n'est pas inclus dans le devis en ligne",
				values: {
					depanelBoards: {
						title: 'Dépanelisez les cartes pour livraison',
						description:
							'On l’appelle aussi expédition par sous-cartes, le PCB panelisé est divisé en morceaux et emballé séparément pour être expédié après le service de montage.'
					},
					functionTest: {
						title: 'Test Fonctionnel',
						description:
							"Le test fonctionnel, également connu sous le nom de test FCT, est la dernière étape de fabrication de la création de PCB. Essentiellement, le test fonctionnel s'assure que le PCB fonctionne correctement. Il est principalement effectué pour éviter les problèmes d'assemblage, y compris les courts-circuits, les ouvertures, les composants manquants ou l'installation de pièces incorrectes. Veuillez noter vos méthodes de test fonctionnelles et exigences détaillées si nécessaire."
					},
					conformalCoating: {
						title: 'Revêtement Conformel',
						description:
							"Le revêtement conformel est un revêtement protecteur d'une fine pellicule polymérique appliquée aux circuits imprimés (PCB). Le revêtement est nommé conformel car il s'adapte aux contours du PCB. Les revêtements conformels sont généralement appliqués à 25-250 μm sur les circuits électroniques et protègent contre l'humidité, la poussière, les produits chimiques et les extrêmes de température."
					},
					firmwareLoading: {
						title: 'Chargement de Firmware',
						description:
							"Dans l'industrie des PCB, le chargement de firmware fait généralement référence au processus de chargement d'un programme ou firmware précédemment écrit sur les puces du PCB. Pendant la fabrication de PCB, différents types de puces sont souvent combinés pour obtenir des fonctionnalités spécifiques. Pour que les puces fonctionnent correctement, le firmware correspondant doit leur être chargé."
					},
					pressFit: {
						title: 'Assemblage Pressé',
						description:
							"L'assemblage pressé est une technologie de fabrication électronique utilisée pour établir des connexions mécaniques et électriques entre les cartes de circuits et les composants sans avoir besoin de soudure. Cela implique l'insertion de broches de connecteurs dans les trous traversants plaqués or sur la carte de circuit et l'application d'une certaine force pour établir la connexion. Cette technologie élimine certains des problèmes qui surviennent dans les processus de soudage traditionnels, tels que les broches cassées ou mal soudées, améliorant ainsi la fiabilité et la durabilité des composants connecteurs."
					},
					boxBuild: {
						title: 'Assemblage de Boîte',
						description:
							"Également connu sous le nom d'intégration de systèmes, il s'agit d'un processus complet de service allant de la conception et fabrication de l'enceinte, à l'installation d’un PCBA, du câblage et de l'assemblage du faisceau de câbles, et même à l'installation de systèmes électriques et/ou pneumatiques."
					},
					cableWireHarness: {
						title: 'Assemblage de Faisceau de Câbles',
						description:
							'Un faisceau est un groupe de fils ou de câbles recouverts par une gaine extérieure faite de divers matériaux. Un faisceau de câbles est un câble unique couvert par une gaine extérieure. Nous pouvons fournir des assemblages de faisceaux standard et simples, ou des assemblages de faisceaux de câbles personnalisés avec des délais de livraison les plus courts.'
					},
					packageBox: {
						title: "Boîte d'Emballage",
						description: 'Personnalisez votre propre emballage spécial pour vos produits.'
					}
				}
			},
			xrayTest: {
				title: 'Nombre de Tests aux Rayons X',
				description:
					"Dans la fabrication de PCB, le test aux rayons X fait généralement référence à l'inspection aux rayons X ou à la détection aux rayons X. C'est une technique de test non destructive utilisée pour inspecter la qualité des connexions des joints de soudure et le placement des composants dans les produits électroniques.",
				error: 'Le nombre de tests aux rayons X doit être supérieur à 0'
			},
			detailedInformation: {
				title: "Informations Détails sur l'Assemblage",
				placeholder:
					"Veuillez remplir les informations techniques détaillées concernant l'assemblage PCB, d'autres assemblages de coque, la soudure de câbles, fusibles, rivets, etc."
			}
		},

		stencil: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			buildTime: {
				title: 'Temps de fabrication'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			type: {
				title: 'Type de gabarit',
				disclaimer: 'Autoriser la combinaison de plusieurs PCB sur un seul gabarit SMD.',
				values: {
					framework: 'Cadre',
					nonFramework: 'Sans cadre'
				}
			},
			multiLevel: {
				title: 'Gabarit multi-niveaux/étapes',
				description: 'Gabarit partiel STEP-UP et gabarit partiel STEP-DOWN.'
			},
			side: {
				title: 'Côté du gabarit',
				description:
					'Pour Top+Bottom (sur un gabarit unique), la taille du gabarit doit être au moins deux fois la taille du PCB.',
				values: {
					top: 'Haut',
					bottom: 'Bas',
					topBottomSingle: 'Haut+Bas (sur un gabarit unique)',
					topBottomSeparate: 'Haut et Bas (sur des gabarits séparés)'
				}
			},
			size: {
				title: 'Taille (mm)',
				validArea: 'Zone valide'
			},
			length: {
				title: 'Longueur'
			},
			width: {
				title: 'Largeur'
			},
			quantity: {
				title: 'Quantité',
				pieces: 'Pièces',
				error: 'La quantité doit être supérieure à 0'
			},
			thickness: {
				title: 'Épaisseur',
				description: "L'épaisseur du gabarit est choisie en fonction des tailles des composants."
			},
			existingFiducials: {
				title: 'Fiduciaires existants',
				description: 'Fiduciaires « demi laserisés », toujours du côté du PCB (bas).',
				values: {
					halfLasered: 'Demi laserisé',
					laseredThrough: 'Laser traversé'
				}
			},
			electroPolishing: {
				title: 'Électropolissage',
				description:
					"L'électropolissage, également connu sous le nom de traitement de surface électrochimique ou de déburrage électrochimique, permet d'optimiser la qualité de surface. Convient pour les séries moyennes."
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				description:
					'Nous réduirons généralement les ouvertures pour les CI afin de fabriquer le gabarit, donc si vous ne souhaitez pas changer les ouvertures, veuillez le noter lors de la commande.',
				placeholder:
					"Remplissez tous les détails du gabarit pour que nous comprenions clairement vos exigences. Par exemple, gabarit multi-niveaux/étapes, veuillez spécifier la zone et l'épaisseur pour le step-up/step-down dans le gerber."
			}
		},

		cnc: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			quantity: {
				title: 'Quantité',
				error: 'La quantité doit être supérieure à 0'
			},
			designUnits: {
				title: 'Unités de conception'
			},
			material: {
				title: 'Matériau',
				values: {
					aluminum: 'Aluminium',
					stainlessSteel: 'Acier inoxydable',
					mildSteel: 'Acier doux',
					copper: 'Cuivre',
					carbonFiber: 'Fibre de carbone'
				}
			},
			materialType: {
				title: 'Type de matériau',
				values: {
					aluminum5052: 'Aluminium 5052',
					aluminum6061: 'Aluminium 6061',
					aluminum7075: 'Aluminium 7075',
					aluminum2a12: 'Aluminium 2A12',
					stainlessSteel201: 'Acier inoxydable 201',
					stainlessSteel303: 'Acier inoxydable 303',
					stainlessSteel304: 'Acier inoxydable 304',
					stainlessSteel316: 'Acier inoxydable 316',
					stainlessSteel430: 'Acier inoxydable 430',
					mildSteel1018: 'Acier doux 1018',
					mildSteel1045: 'Acier doux 1045',
					mildSteelA36: 'Acier doux A36',
					copper: 'Cuivre',
					carbonFiberPlate: 'Plaque en fibre de carbone'
				}
			},
			color: {
				title: 'Couleur'
			},
			surfaceFinish: {
				title: 'Finition de surface',
				sections: {
					standard: 'Standard (Tel quel)',
					brushed: 'Brossé',
					beadBlast: 'Sablage',
					sprayPainting: 'Peinture au pistolet',
					powderCoat: 'Revêtement en poudre',
					detailSanding: 'Ponçage détaillé',
					others: 'Autres'
				},
				values: {
					standard: 'Standard (Tel quel)',
					brushed: 'Brossé',
					beadBlast: 'Sablage',
					sprayPaintingMatt: 'Peinture au pistolet mate',
					sprayPaintingHighGloss: 'Peinture au pistolet brillante',
					powderCoatMatt: 'Revêtement en poudre mate',
					powderCoatHighGloss: 'Revêtement en poudre brillante',
					sanding1000: 'Ponçage 1000',
					others: 'Autres'
				},
				surfaceTreatment: {
					title: 'Introduction au traitement de surface',
					description:
						"Le ponçage consiste à utiliser de fines particules abrasives pour frotter la surface du produit afin de produire un effet de texture diffus et non linéaire. Adhérez des grains abrasifs différents au papier de support ou au dos du panneau, et les grains abrasifs peuvent être distingués par leur granularité selon la taille : plus la taille des particules est grande, plus le grain abrasif est fin, de sorte que l'effet de surface est meilleur."
				}
			},
			surfaceFinishColor: {
				title: 'Couleur de finition de surface'
			},
			technicalDrawing: {
				title: 'Dessin technique',
				description:
					'Veuillez noter que votre fichier 3D et les spécifications de pièce sélectionnées sur cet écran (par exemple, finition de surface) auront priorité sur votre dessin technique. Veuillez vous assurer que votre dessin technique est à jour.',
				uploadTechnicalDrawing: 'Télécharger le dessin technique'
			},
			threadsTappedHoles: {
				title: 'Filets et trous taraudés',
				description:
					"Veuillez préciser si votre pièce a des filets internes ou externes. PCBWay n'assume aucun risque d'assemblage s'il s'agit d'un filet non standard, sauf si toutes les pièces d'assemblage sont produites et assemblées ici.",
				question: 'Vos pièces ont-elles besoin de taraudage ?'
			},
			inserts: {
				title: 'Inserts',
				description: 'Veuillez préciser les inserts standards dans votre pièce'
			},
			tolerance: {
				title: 'Tolérance',
				description:
					"Les tolérances seront contrôlées selon l'ISO 2768-1. Pour d'autres tolérances plus strictes, un dessin technique sera requis pour indiquer les dimensions critiques.",
				noTolerance: 'Aucune tolérance plus stricte requise'
			},
			surfaceRoughness: {
				title: 'Rugosité de surface',
				description:
					"La rugosité de surface sera contrôlée à 250uin/6.3um Ra, sauf si vous avez d'autres exigences de rugosité de surface."
			},
			partMarking: {
				title: 'Marquage de pièce',
				description:
					'Veuillez marquer clairement le contenu de la sérigraphie ou de la gravure laser dans le fichier CAO (DWG ou DXF), et un fichier graphique (Ai ou SVG) est également requis.'
			},
			silkScreen: {
				title: 'Sérigraphie'
			},
			laserEngraving: {
				title: 'Gravure laser'
			},
			partsAssembly: {
				title: 'Assemblage de pièces',
				description:
					"Veuillez préciser les exigences d'assemblage. PCBWay n'assume aucun risque d'assemblage si vous choisissez 'Pas d'exigence d'assemblage'.",
				values: {
					assemblyTest: "Test d'assemblage",
					shipAssembly: 'Expédition avec assemblage'
				}
			},
			finishedAppearance: {
				title: 'Apparence finie',
				values: {
					standard: {
						title: 'Standard',
						description:
							'Traces de traitement normales ou rayures causées pendant la production, ou traces subtiles laissées après la finition de surface.'
					},
					premium: {
						title: 'Premium',
						description:
							"Exigences d'apparence plus élevées, la surface est propre et lisse sans défauts évidents. (Sauf pour les marques de rack d'anodisation inhérentes). Des photos seront envoyées pour confirmation avant l'expédition."
					}
				}
			},
			inspection: {
				title: 'Inspection',
				description: "Le rapport d'inspection ne sera pas envoyé avec vos pièces, sauf si vous en avez besoin.",
				values: {
					standardInspection: {
						title: 'Inspection standard (sans rapport)',
						description: [
							'Aucun frais supplémentaire',
							'PCBWay effectuera les inspections de dimensions et de caractéristiques de surface en fonction des dessins fournis par le client.'
						]
					},
					standardInspectionFormalReport: {
						title: 'Inspection standard avec rapport formel',
						description: ['Frais supplémentaires', 'Des dessins techniques 2D sont nécessaires.']
					},
					cmmInspectionFormalReport: {
						title: 'Inspection CMM avec rapport formel',
						description: ['Frais supplémentaires', 'Des dessins techniques 2D sont nécessaires.']
					},
					sourceMaterialCertification: {
						title: 'Certification de matériel source',
						description: ['Frais supplémentaires', 'Des dessins techniques 2D sont nécessaires.']
					}
				}
			},
			productDescription: {
				title: 'Description du produit',
				description: '',
				descriptionDetail: {
					title1: 'Description de produit requise pour le dédouanement :',
					body1:
						'1. Conformez-vous aux principes du commerce international et fournissez des descriptions de produits pour le dédouanement.',
					body2:
						"2. Veuillez sélectionner la description de produit correcte en fonction de l'utilisation réelle du produit. S'il n'y a pas d'élément correspondant, veuillez sélectionner Autre.",
					title2: 'Veuillez noter :',
					body3:
						"1. Des droits d'importation et des taxes peuvent s'appliquer, et les taux de droits et de taxes applicables varient en fonction de la description des marchandises et des réglementations d'importation de différents pays.",
					body4:
						"2. Les marchandises avec des descriptions de produit incorrectes ou peu claires peuvent être retenues par les douanes. Le client sera responsable des pénalités douanières résultant d'informations incorrectes fournies.",
					body5:
						'3. PCBWay ne changera pas les descriptions de produit fournies par le client, veuillez sélectionner avec soin.'
				},
				values: {
					printerEnclosure: "Enveloppe d'imprimante",
					inkCartridge: "Cartouche d'encre",
					motorcycleConnectorEnclosure: 'Enveloppe de connecteur de moto',
					cncLatheReplacementArm: 'Bras de remplacement pour tour CNC',
					headband: 'Diadème',
					wheelPlate: 'Plaque de roue',
					recorderEnclosure: "Enveloppe d'enregistreur",
					compoundOpticalMicroscope: 'Microscope optique composé'
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder: "Veuillez remplir ici toutes les exigences concernant la production, l'emballage ou l'expédition."
			}
		},

		sheetMetal: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			quantity: {
				title: 'Quantité'
			},
			designUnits: {
				title: 'Unités de conception'
			},
			material: {
				title: 'Matériau',
				values: {
					aluminum: 'Aluminium',
					stainlessSteel: 'Acier inoxydable',
					mildSteel: 'Acier doux',
					copper: 'Cuivre',
					carbonFiber: 'Fibre de carbone'
				}
			},
			materialType: {
				title: 'Type de matériau',
				values: {
					aluminum5052: 'Aluminium 5052',
					aluminum6061: 'Aluminium 6061',
					stainlessSteel201: 'Acier inoxydable 201',
					stainlessSteel303: 'Acier inoxydable 303',
					stainlessSteel304: 'Acier inoxydable 304',
					stainlessSteel316: 'Acier inoxydable 316',
					mildSteel1018: 'Acier doux 1018',
					copper101: 'Cuivre 101',
					copperC110: 'Cuivre C110',
					copper260: 'Cuivre 260',
					carbonFiberPlate: 'Plaque en fibre de carbone'
				}
			},
			color: {
				title: 'Couleur'
			},
			surfaceFinish: {
				title: 'Finition de surface',
				sections: {
					standard: 'Standard (tel quel)',
					brushed: 'Brossé',
					beadBlast: 'Sablage',
					sprayPainting: 'Peinture au pistolet',
					powderCoat: 'Peinture en poudre',
					detailSanding: 'Ponçage détaillé',
					others: 'Autres'
				},
				values: {
					standard: 'Standard (tel quel)',
					brushed: 'Brossé',
					beadBlast: 'Sablage',
					sprayPaintingMatt: 'Peinture au pistolet mate',
					sprayPaintingHighGloss: 'Peinture au pistolet brillante',
					powderCoatMatt: 'Peinture en poudre mate',
					powderCoatHighGloss: 'Peinture en poudre brillante',
					sanding1000: 'Ponçage 1000',
					others: 'Autres'
				},
				surfaceTreatment: {
					title: 'Introduction au traitement de surface',
					description:
						"Le ponçage utilise de fines particules abrasives pour frotter la surface du produit et produire un effet de texture diffuse et non linéaire. Des granulations abrasives différentes sont collées sur le papier de support ou le dos de la plaque, et les particules abrasives peuvent être distinguées par leur granulométrie : plus la taille des particules est grande, plus la granulation est fine, ainsi l'effet de surface est meilleur."
				}
			},
			surfaceFinishColor: {
				title: 'Couleur de finition de surface'
			},
			technicalDrawing: {
				title: 'Dessin technique',
				description:
					'Veuillez noter que votre fichier 3D et les spécifications de pièce sélectionnées sur cet écran (par exemple, finition de surface) auront priorité sur votre dessin technique. Veuillez vous assurer que votre dessin technique est à jour.',
				uploadTechnicalDrawing: 'Télécharger le dessin technique'
			},
			threadsTappedHoles: {
				title: 'Filets et trous taraudés',
				description:
					"Veuillez indiquer si votre pièce a des filets internes ou externes. PCBWay ne prendra aucun risque d'assemblage si c'est un filet non standard, à moins que toutes les pièces d'assemblage soient produites et assemblées ici.",
				question: 'Vos pièces ont-elles besoin de fileter ?'
			},
			inserts: {
				title: 'Inserts',
				description: 'Veuillez spécifier les inserts standard dans votre pièce'
			},
			tolerance: {
				title: 'Tolérance',
				description:
					"Les tolérances seront contrôlées selon l'ISO 2768-1. Pour d'autres tolérances plus strictes, un dessin technique sera nécessaire pour indiquer les dimensions critiques.",
				noTolerance: 'Aucune tolérance plus stricte requise'
			},
			wielding: {
				title: 'Soudage'
			},
			partMarking: {
				title: 'Marquage de pièce',
				description:
					'Veuillez indiquer clairement le contenu de la sérigraphie ou de la gravure laser dans le fichier CAD (DWG ou DXF), et un fichier graphique (Ai ou SVG) est également requis.'
			},
			silkScreen: {
				title: 'Sérigraphie'
			},
			laserEngraving: {
				title: 'Gravure laser'
			},
			partsAssembly: {
				title: 'Assemblage de pièces',
				description:
					"Veuillez spécifier les exigences d'assemblage. PCBWay ne prend aucun risque d'assemblage si vous choisissez l'option sans exigence d'assemblage.",
				values: {
					assemblyTest: "Test d'assemblage",
					shipAssembly: 'Assemblage à expédier'
				}
			},
			finishedAppearance: {
				title: 'Apparence finie',
				values: {
					standard: {
						title: 'Standard',
						description:
							'Traces de traitement normales ou rayures causées pendant la production, ou traces subtiles laissées après la finition de surface.'
					},
					premium: {
						title: 'Premium',
						description:
							"Exigences esthétiques plus élevées, la surface est propre et lisse sans défauts évidents. (À l'exception des marques de support d'anodisation inhérentes). Des photos seront envoyées pour confirmation avant l'expédition."
					}
				}
			},
			inspection: {
				title: 'Inspection',
				description: "Le rapport d'inspection ne sera pas envoyé avec vos pièces à moins que vous ne le demandiez.",
				values: {
					standardInspection: {
						title: 'Inspection standard (sans rapport)',
						description: [
							'Aucun frais supplémentaire',
							'PCBWay effectuera des inspections des dimensions et des caractéristiques de surface basées sur les dessins fournis par le client.'
						]
					},
					standardInspectionFormalReport: {
						title: 'Inspection standard avec rapport formel',
						description: ['Frais supplémentaires', 'Des dessins techniques 2D sont requis.']
					},
					cmmInspectionFormalReport: {
						title: 'Inspection CMM avec rapport formel',
						description: ['Frais supplémentaires', 'Des dessins techniques 2D sont requis.']
					},
					sourceMaterialCertification: {
						title: 'Certification de matériel source',
						description: ['Frais supplémentaires', 'Des dessins techniques 2D sont requis.']
					}
				}
			},
			productDescription: {
				title: 'Description du produit',
				description: '',
				descriptionDetail: {
					title1: 'Description du produit requise pour le dédouanement :',
					body1:
						'1. Se conformer aux principes du commerce international et fournir des descriptions de produits pour le dédouanement.',
					body2:
						"2. Veuillez sélectionner la description de produit correcte selon l'utilisation réelle du produit. Si aucun élément ne correspond, veuillez sélectionner Autre.",
					title2: 'Veuillez noter que :',
					body3:
						"1. Il peut y avoir des droits de douane et des taxes à l'importation, et les taux de droits et de taxes applicables varient en fonction de la description des marchandises et des règlements d'importation de différents pays.",
					body4:
						"2. Les marchandises avec des descriptions de produit incorrectes ou peu claires peuvent être retenues par les douanes. Le client sera responsable des pénalités douanières résultant d'informations incorrectes fournies.",
					body5:
						'3. PCBWay ne changera pas les descriptions de produit fournies par le client, veuillez choisir avec soin.'
				},
				values: {
					printerEnclosure: "Enceinte de l'imprimante",
					inkCartridge: "Cartouche d'encre",
					motorcycleConnectorEnclosure: 'Enceinte de connecteur de moto',
					cncLatheReplacementArm: 'Bras de remplacement de tour CNC',
					headband: 'Bandeau',
					wheelPlate: 'Plaque de roue',
					recorderEnclosure: "Enceinte d'enregistreur",
					compoundOpticalMicroscope: 'Microscope optique composé'
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder: "Remplissez ici toute exigence concernant la production, l'emballage ou l'expédition."
			}
		},

		threePrinting: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			quantity: {
				title: 'Quantité'
			},
			designUnits: {
				title: 'Unités de conception'
			},
			material: {
				title: 'Matériau',
				values: {
					aluminum: 'Aluminium',
					stainlessSteel: 'Acier inoxydable',
					nylon: 'Nylon',
					abs: 'ABS',
					petg: 'PETG'
				}
			},
			materialType: {
				title: 'Type de matériau',
				values: {
					aluminum: 'Aluminium',
					stainlessSteel: 'Acier inoxydable',
					pa12: 'PA 12',
					hppa12: 'HP PA 12',
					glassFiberNylon: 'Nylon renforcé de verre',
					petg: 'PETG'
				}
			},
			color: {
				title: 'Couleur'
			},
			process: {
				title: 'Processus'
			},
			surfaceFinish: {
				title: 'Finition de surface',
				sections: {
					sprayPainting: 'Peinture par pulvérisation',
					powderCoat: 'Revêtement en poudre',
					detailSanding: 'Ponçage détaillé',
					dying: 'Teinture'
				},
				values: {
					sprayPaintingMatt: 'Peinture par pulvérisation mate',
					sprayPaintingHighGloss: 'Peinture par pulvérisation brillante',
					sanding1000: 'Ponçage 1000',
					dying: 'Teinture'
				},
				surfaceTreatment: {
					title: 'Introduction au traitement de surface',
					description:
						"Le ponçage consiste à utiliser de fines particules abrasives pour frotter la surface du produit afin de produire un effet texture diffuse et non linéaire. Coller des grains abrasifs différents sur le papier de support ou au dos de la planche, et les grains abrasifs peuvent être distingués par des granularités différentes selon la taille : plus la taille des particules est grande, plus le grain abrasif est fin, donc l'effet de surface est meilleur."
				}
			},
			surfaceFinishColor: {
				title: 'Couleur de la finition de surface'
			},
			technicalDrawing: {
				title: 'Dessin technique',
				description:
					'Veuillez noter que votre fichier 3D et les spécifications de la pièce sélectionnées sur cet écran (par exemple, finition de surface) auront la priorité sur votre dessin technique. Assurez-vous que votre dessin technique est à jour.',
				uploadTechnicalDrawing: 'Télécharger le dessin technique'
			},
			threadsTappedHoles: {
				title: 'Filets et trous taraudés',
				description:
					"Veuillez spécifier si votre pièce a des filetages internes ou externes. PCBWay ne supportera aucun risque d'assemblage s'il s'agit d'un filetage non standard, sauf si toutes les pièces d'assemblage sont produites et assemblées ici.",
				question: "Vos pièces ont-elles besoin d'être taraudées ?"
			},
			inserts: {
				title: 'Inserts',
				description: 'Veuillez spécifier les inserts standard dans votre pièce'
			},
			partMarking: {
				title: 'Marquage de la pièce',
				description:
					'Veuillez indiquer clairement le contenu de la sérigraphie ou de la gravure laser dans le fichier CAO (DWG ou DXF), et un fichier graphique (Ai ou SVG) est également requis.'
			},
			silkScreen: {
				title: 'Sérigraphie'
			},
			laserEngraving: {
				title: 'Gravure laser'
			},
			partsAssembly: {
				title: 'Assemblage de pièces',
				description:
					"Veuillez spécifier les exigences d'assemblage. PCBWay ne supporte aucun risque d'assemblage si vous choisissez aucune exigence d'assemblage.",
				values: {
					assemblyTest: "Test d'assemblage",
					shipAssembly: "Expédier l'assemblage"
				}
			},
			printingRisk: {
				title: "Risque d'impression",
				description:
					"Le paramètre est coché par défaut. Vous pouvez le décocher et nous vous enverrons un courriel pour les problèmes lorsque la pièce présente un risque d'impression spécifique."
			},
			wallThicknessRisk: {
				title: "Risque d'épaisseur de paroi accepté",
				description:
					"Le client est informé que les parois fines conçues ne respectent pas la norme d'épaisseur de paroi, mais doit imprimer tel quel et prendre tous les risques."
			},
			printedThreadsRisk: {
				title: 'Risque de filets imprimés non standards accepté',
				description:
					"Le client est informé que les filetages conçus ne respectent pas la norme d'impression de filets, mais doit imprimer tel quel et prendre tous les risques."
			},
			productDescription: {
				title: 'Description du produit',
				description: '',
				descriptionDetail: {
					title1: 'Description du produit requise pour le dédouanement :',
					body1:
						'1. Se conformer aux principes du commerce international et fournir des descriptions de produits pour le dédouanement.',
					body2:
						"2. Veuillez sélectionner la description de produit correcte en fonction de l'utilisation réelle du produit. S'il n'y a pas d'élément correspondant, veuillez sélectionner Autre.",
					title2: 'Veuillez noter :',
					body3:
						"1. Il peut y avoir des droits d'importation et des taxes, et les taux de droits et de taxes applicables varient en fonction de la description des marchandises et des règlements d'importation des différents pays.",
					body4:
						"2. Les marchandises avec des descriptions de produits incorrectes ou peu claires peuvent être retenues par les douanes. Le client sera responsable des pénalités douanières résultant d'informations incorrectes fournies.",
					body5:
						'3. PCBWay ne changera pas les descriptions de produit fournies par le client, veuillez sélectionner avec soin.'
				},
				values: {
					printerEnclosure: "Boîtier de l'imprimante",
					inkCartridge: "Cartouche d'encre",
					motorcycleConnectorEnclosure: 'Boîtier de connecteur de moto',
					cncLatheReplacementArm: 'Bras de remplacement pour tour CNC',
					headband: 'Bandeau',
					wheelPlate: 'Plaque de roue',
					recorderEnclosure: "Boîtier d'enregistreur",
					compoundOpticalMicroscope: 'Microscope optique composé'
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder: "Remplissez ici toute exigence concernant la production, l'emballage ou l'expédition."
			}
		},

		injectionMolding: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			quantity: {
				title: 'Quantité de la première commande',
				error: 'La quantité doit être supérieure à 0'
			},
			minExpectedVolume: {
				title: 'Volume annuel minimum prévu'
			},
			maxExpectedVolume: {
				title: 'Volume annuel maximum prévu'
			},
			designUnits: {
				title: 'Unités de conception'
			},
			material: {
				title: 'Matériau',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			materialType: {
				title: 'Type de matériau',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			color: {
				title: 'Couleur'
			},
			spiFinish: {
				title: 'Finition SPI'
			},
			toolRequirements: {
				title: "Exigences en matière d'outils",
				description:
					'Veuillez fournir les exigences concernant le moule, telles que les exigences de surface, la résistance du moule, la taille de la machine, le nombre de cavités et les exigences de conception du moule, etc.'
			},
			molds: {
				title: 'Moules',
				description:
					"Nous garderons le moule pendant 2 ans. Vous pouvez continuer à commander des pièces jusqu'à la fin de la durée de vie du moule. Après l'expiration, le moule sera recyclé par défaut. Si vous devez que le moule vous soit envoyé, veuillez contacter le représentant commercial pour des informations sur l'expédition.",
				values: {
					keepMoldsFactory: "Garder les moules dans l'usine",
					moldsShipped: "J'ai besoin que les moules soient expédiés"
				}
			},
			surfaceFinish: {
				title: 'Finition de surface',
				sections: {},
				values: {},
				surfaceTreatment: {
					title: 'Introduction au traitement de surface',
					description:
						"Le ponçage consiste à utiliser de fines particules de sable abrasif pour frotter la surface du produit afin de produire un effet texturé diffus et non linéaire. Adhérer un grain abrasif différent au papier de support ou à l'arrière de la planche, et le grain abrasif peut être distingué par différentes granulométries selon la taille : plus la taille de la particule est grande, plus le grain abrasif est fin, donc l'effet de surface est meilleur."
				}
			},
			surfaceFinishColor: {
				title: 'Couleur de la finition de surface'
			},
			technicalDrawing: {
				title: 'Dessin technique',
				description:
					'Veuillez noter que votre fichier 3D et les spécifications de la pièce sélectionnées sur cet écran (par ex. finition de surface) auront priorité sur votre dessin technique. Assurez-vous que votre dessin technique est à jour.',
				uploadTechnicalDrawing: 'Télécharger le dessin technique'
			},
			threadsTappedHoles: {
				title: 'Filets et trous taraudés',
				description:
					"Veuillez préciser si votre pièce a des filetages internes ou externes. PCBWay ne supportera aucun risque d'assemblage si c'est un filetage non standard, à moins que toutes les pièces d'assemblage ne soient produites et assemblées ici.",
				question: 'Votre pièce a-t-elle besoin de filetages ?'
			},
			inserts: {
				title: 'Inserts',
				description: 'Veuillez préciser les inserts standards dans votre pièce'
			},
			tolerance: {
				title: 'Tolérance',
				description:
					"Les tolérances seront contrôlées avec l'ISO 2768-1. Pour d'autres tolérances plus strictes, un dessin technique sera requis pour indiquer les dimensions critiques.",
				noTolerance: 'Aucune tolérance stricte requise'
			},
			partMarking: {
				title: 'Marquage des pièces',
				description:
					'Veuillez marquer clairement le contenu de la sérigraphie ou du marquage laser dans le fichier CAD (DWG ou DXF), et un fichier graphique (Ai ou SVG) est également requis.'
			},
			silkScreen: {
				title: 'Sérigraphie'
			},
			laserEngraving: {
				title: 'Gravure laser'
			},
			partsAssembly: {
				title: 'Assemblage des pièces',
				description:
					"Veuillez préciser les exigences d'assemblage. PCBWay ne supportera aucun risque d'assemblage si vous choisissez « Pas d'exigence d'assemblage ».",
				values: {
					assemblyTest: "Test d'assemblage",
					shipAssembly: "Expédier l'assemblage"
				}
			},
			finishedAppearance: {
				title: 'Aspect fini',
				values: {
					standard: {
						title: 'Standard',
						description:
							'Traces de traitement normales ou rayures causées pendant la production, ou légères traces laissées après la finition de surface.'
					},
					premium: {
						title: 'Premium',
						description:
							"Exigences d'apparence plus élevées, surface propre et lisse sans défauts évidents. (Sauf pour les marques de rack d'anodisation inhérentes). Des photos seront envoyées pour confirmation avant l'expédition."
					}
				}
			},
			inspection: {
				title: 'Inspection',
				description: "Le rapport d'inspection ne sera pas envoyé avec vos pièces, sauf si vous en avez besoin.",
				values: {
					standardInspection: {
						title: 'Inspection standard (sans rapport)',
						description: [
							'Pas de frais supplémentaires',
							'PCBWay effectuera des inspections dimensionnelles et de caractéristiques de surface sur la base des dessins fournis par le client.'
						]
					},
					sourceMaterialCertification: {
						title: 'Certification de matériel source',
						description: ['Payer un supplément', 'Des dessins techniques en 2D sont requis.']
					}
				}
			},
			productDescription: {
				title: 'Description du produit',
				description: '',
				descriptionDetail: {
					title1: 'Description du produit requise pour le dédouanement :',
					body1:
						'1. Respecter les principes du commerce international et fournir des descriptions de produits pour le dédouanement.',
					body2:
						"2. Veuillez sélectionner la description de produit correcte en fonction de l'utilisation réelle du produit. S'il n'y a pas d'article correspondant, veuillez sélectionner Autre.",
					title2: 'Veuillez noter :',
					body3:
						"1. Il peut y avoir des droits et taxes d'importation, et les taux de droits et de taxes applicables varient en fonction de la description des marchandises et des réglementations d'importation de différents pays.",
					body4:
						"2. Les marchandises avec des descriptions de produits incorrectes ou peu claires peuvent être retenues par les douanes. Le client sera responsable des pénalités douanières résultant d'informations incorrectes fournies.",
					body5:
						'3. PCBWay ne changera pas les descriptions de produit fournies par le client, veuillez sélectionner soigneusement.'
				},
				values: {
					printerEnclosure: "Enveloppe de l'imprimante",
					inkCartridge: "Cartouche d'encre",
					motorcycleConnectorEnclosure: 'Enveloppe du connecteur de moto',
					cncLatheReplacementArm: 'Bras de remplacement de tour CNC',
					headband: 'Bandeau',
					wheelPlate: 'Plaque de roue',
					recorderEnclosure: 'Enveloppe du lecteur',
					compoundOpticalMicroscope: 'Microscope optique composé'
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder: "Remplissez ici toutes les exigences concernant la production, l'emballage ou l'expédition."
			}
		},

		vacuumCasting: {
			id: {
				title: 'ID du produit'
			},
			createdAt: {
				title: 'Créé le'
			},
			updatedAt: {
				title: 'Mis à jour le'
			},
			name: {
				title: 'Nom du produit',
				description: 'Veuillez entrer un nom pour votre produit',
				error: 'Le nom du produit est requis'
			},
			fileName: {
				title: 'Nom du fichier'
			},
			weight: {
				title: 'Poids'
			},
			initialPrice: {
				title: 'Prix initial'
			},
			finalPrice: {
				title: 'Prix final'
			},
			quantity: {
				title: 'Quantité'
			},
			designUnits: {
				title: 'Unités de conception'
			},
			material: {
				title: 'Matériau',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			materialType: {
				title: 'Type de matériau',
				values: {
					abs: 'ABS',
					pom: 'POM',
					nylon: 'Nylon',
					pvc: 'PVC',
					tpu: 'TPU'
				}
			},
			color: {
				title: 'Couleur'
			},
			surfaceFinish: {
				title: 'Finition de surface',
				sections: {
					beadBlast: 'Sablage',
					sprayPainting: 'Peinture au pistolet',
					detailSanding: 'Ponçage détaillé'
				},
				values: {
					beadBlast: 'Sablage',
					sprayPaintingMatt: 'Peinture au pistolet mate',
					sprayPaintingHighGloss: 'Peinture au pistolet brillante',
					sanding1000: 'Ponçage 1000'
				},
				surfaceTreatment: {
					title: 'Introduction au traitement de surface',
					description:
						"Le ponçage consiste à utiliser de fines particules de sable abrasif pour frotter la surface du produit afin de produire un effet de texture diffus et non linéaire. Collez différents grains abrasifs sur le papier de support ou la partie arrière de la planche, et le grain abrasif peut être distingué par différentes granularités en fonction de la taille : plus la taille de la particule est élevée, plus le grain abrasif est fin, donc l'effet de surface est meilleur."
				}
			},
			surfaceFinishColor: {
				title: 'Couleur de finition de surface'
			},
			technicalDrawing: {
				title: 'Dessin technique',
				description:
					'Veuillez noter que votre fichier 3D et les spécifications de la pièce sélectionnées sur cet écran (par exemple, finition de surface) auront priorité sur votre dessin technique. Veuillez vous assurer que votre dessin technique est à jour.',
				uploadTechnicalDrawing: 'Télécharger le dessin technique'
			},
			threadsTappedHoles: {
				title: 'Filets et trous filetés',
				description:
					"Veuillez spécifier si votre pièce a des filets internes ou externes. PCBWay ne supportera pas de risque d'assemblage s'il s'agit d'un filet non standard, à moins que toutes les pièces d'assemblage soient produites et assemblées ici.",
				question: 'Votre pièce a-t-elle besoin de tarauder des filets ?'
			},
			inserts: {
				title: 'Inserts',
				description: 'Veuillez spécifier les inserts standard dans votre pièce.'
			},
			tolerance: {
				title: 'Tolérance',
				description:
					"Les tolérances seront contrôlées selon l'ISO 2768-1. Pour d'autres tolérances plus strictes, un dessin technique sera requis pour indiquer les dimensions critiques.",
				noTolerance: 'Aucune tolérance plus stricte requise'
			},
			partMarking: {
				title: 'Marquage des pièces',
				description:
					'Veuillez marquer clairement le contenu de la sérigraphie ou du gravage laser dans le fichier CAO (DWG ou DXF), et un fichier graphique (Ai ou SVG) est également requis.'
			},
			silkScreen: {
				title: 'Sérigraphie'
			},
			laserEngraving: {
				title: 'Gravure laser'
			},
			partsAssembly: {
				title: 'Assemblage de pièces',
				description:
					"Veuillez spécifier les exigences d'assemblage. PCBWay ne supportera pas de risque d'assemblage si vous choisissez 'Pas d'exigence d'assemblage'.",
				values: {
					assemblyTest: "Test d'assemblage",
					shipAssembly: "Expédier l'assemblage"
				}
			},
			finishedAppearance: {
				title: 'Apparence finie',
				values: {
					standard: {
						title: 'Standard',
						description:
							'Traces de traitement normales ou rayures causées pendant la production, ou traces subtiles laissées après la finition de surface.'
					},
					premium: {
						title: 'Premium',
						description:
							"Exigences d'apparence plus élevées, surface propre et lisse sans défauts évidents. (À l'exception des marques de cadre d'anodisation inhérentes). Des photos seront envoyées pour confirmation avant l'expédition."
					}
				}
			},
			inspection: {
				title: 'Inspection',
				description: "Le rapport d'inspection ne sera pas envoyé avec vos pièces sauf si vous en avez besoin.",
				values: {
					standardInspection: {
						title: 'Inspection standard (sans rapport)',
						description: [
							'Aucun frais supplémentaire',
							'PCBWay effectuera les inspections de dimensions et de caractéristiques de surface basées sur les dessins fournis par le client.'
						]
					},
					sourceMaterialCertification: {
						title: 'Certification de matériau source',
						description: ['Payer un supplément', 'Des dessins techniques en 2D sont requis.']
					}
				}
			},
			productDescription: {
				title: 'Description du produit',
				description: '',
				descriptionDetail: {
					title1: 'Description du produit requise pour le dédouanement :',
					body1:
						'1. Se conformer aux principes du commerce international et fournir des descriptions de produits pour le dédouanement.',
					body2:
						"2. Veuillez sélectionner la description correcte du produit en fonction de l'utilisation réelle du produit. S'il n'y a pas d'article correspondant, sélectionnez 'Autre'.",
					title2: 'Veuillez noter :',
					body3:
						"1. Il peut y avoir des droits et des taxes à l'importation, et les taux de droits et de taxes applicables varient en fonction de la description des marchandises et des réglementations d'importation des différents pays.",
					body4:
						"2. Les marchandises avec des descriptions de produit incorrectes ou peu claires peuvent être retenues par les douanes. Le client sera responsable des pénalités douanières résultant d'informations incorrectes fournies.",
					body5:
						'3. PCBWay ne changera pas les descriptions de produits fournies par le client, veuillez sélectionner soigneusement.'
				},
				values: {
					printerEnclosure: "Enceinte de l'imprimante",
					inkCartridge: "Cartouche d'encre",
					motorcycleConnectorEnclosure: 'Enceinte du connecteur de motocyclette',
					cncLatheReplacementArm: 'Bras de remplacement pour tour CNC',
					headband: 'Bandeau',
					wheelPlate: 'Plaque de roue',
					recorderEnclosure: "Enceinte de l'enregistreur",
					compoundOpticalMicroscope: 'Microscope optique composé'
				}
			},
			specialRequests: {
				title: 'Autres demandes spéciales',
				placeholder: 'Remplissez ici toutes les exigences concernant la production, l’emballage ou l’expédition.'
			}
		}
	},

	services: {
		title: 'Produits et Services',
		subtitle: 'Technologies complètes de mesure et de test pour des applications industrielles avancées.',
		description:
			"Nous sommes un fournisseur leader de technologies avancées de mesure et de test, spécialisé dans la fourniture de solutions de haute précision répondant aux défis techniques complexes de divers secteurs. Notre portefeuille complet comprend des analyseurs de spectre de pointe, des équipements de test réseau, des outils d'étalonnage et des services techniques intégrés conçus pour répondre aux exigences les plus strictes en matière de performance et d'innovation. En combinant matériel sophistiqué, logiciel intelligent et support technique expert, nous permettons aux entreprises de repousser les limites de la recherche technologique, du développement et de l'assurance qualité.",

		subHeading1: 'Technologies de Mesure Innovantes',
		para1:
			"Nous fournissons des solutions de mesure haute performance qui stimulent le progrès technologique. Nos analyseurs de spectre avancés, équipements de test réseau et outils d'étalonnage sont conçus pour offrir une précision et une fiabilité inégalées. En combinant du matériel de pointe avec des logiciels sophistiqués, nous permettons aux ingénieurs et chercheurs d'atteindre des niveaux de performance et des analyses révolutionnaires.",
		subHeading2: 'Services Techniques Intégrés',
		para2:
			"Au-delà de la vente d'équipements, nous proposons des services techniques complets couvrant l’ensemble du cycle de vie du produit. Notre équipe d’experts fournit des services spécialisés tels que l’étalonnage, la réparation de précision, la consultation technique et le développement de solutions sur mesure. Nous veillons à ce que votre infrastructure de mesure reste à la pointe de la technologie, avec un support mondial et une certification traçable NIST garantissant les normes techniques les plus élevées.",

		explorePS: 'Découvrez nos Produits et Services',
		browseSolutions: 'Parcourez nos Solutions',
		browseCatalog: 'Consultez notre Catalogue',
		viewAllPS: 'Voir tous les Produits et Services',

		catalog: {
			title: 'Catalogue des Produits et Services',
			subtitle:
				'Une sélection complète de produits de haute qualité et de solutions sur mesure pour répondre à vos besoins.'
		},

		startingFrom: 'À partir de',
		getQuote: 'Obtenir un Devis',
		features: 'Caractéristiques',
		loginToGetQuote: 'Connectez-vous pour obtenir un devis',

		requestQuote: {
			title: 'Demander un Devis',
			company: 'Entreprise',
			testingRequirements: 'Exigences de Test',
			companyError: 'Veuillez entrer le nom de votre entreprise',
			firstNameError: 'Veuillez entrer votre prénom',
			lastNameError: 'Veuillez entrer votre nom',
			emailError: 'Veuillez entrer une adresse e-mail valide',
			phoneError: 'Veuillez entrer un numéro de téléphone valide',
			autPort: 'Port AUT',
			connectorType: 'Type de Connecteur',
			impedance: 'Impédance',
			gender: 'Genre',
			submittingRequest: 'Soumission de la Demande en cours',
			requestError: 'Échec de la soumission de la demande',
			requestSuccess: 'Votre demande a été soumise avec succès',
			serviceRequestNo: 'Numéro de Demande de Service',
			viewServiceRequests: 'Voir mes Demandes de Service'
		},

		sections: {
			oscilloscopes: {
				title: 'Oscilloscopes',
				subtitle: "Visualisez avec précision les formes d'onde électriques en toute simplicité.",

				specs: {
					title: 'Titre',
					category: 'Catégorie',
					categories: 'Catégories',
					bandwidth: 'Bande passante',
					maxMemoryDepth: 'Profondeur de mémoire maximale',
					maxSampleRate: "Taux d'échantillonnage maximal",
					type: 'Type',
					types: 'Types'
				},

				categories: {
					infiniiVision: 'Oscilloscopes InfiniiVision',
					realTime: 'Oscilloscopes en temps réel'
				},

				types: {
					realTime: 'Temps réel'
				},

				services: {
					HD304MSO: {
						title: 'Oscilloscope InfiniiVision HD304MSO : 4 canaux analogiques',
						subtitle:
							'La série HD3 offre une résolution impressionnante avec une haute précision, une mémoire profonde, quatre canaux analogiques et une toute nouvelle technologie personnalisée allant de 200 MHz à 1 GHz.'
					},
					DSOS804A: {
						title: 'Oscilloscope haute définition DSOS804A : 8 GHz, 4 canaux analogiques',
						subtitle:
							"Les oscilloscopes de la série DSOS804A disposent d'une bande passante de 8 GHz, d'un écran tactile capacitif XGA de 15” et d'un convertisseur analogique-numérique 10 bits."
					}
				}
			},

			networkAnalyzers: {
				title: 'Analyseurs de réseau',
				subtitle: 'Analysez et optimisez les performances réseau grâce à des données fiables.',

				specs: {
					title: 'Titre',
					category: 'Catégorie',
					categories: 'Catégories',
					builtInPorts: 'Ports intégrés',
					maxFrequency: 'Fréquence maximale',
					internalSources: 'Sources internes',
					vnaSeries: 'Série VNA',
					vnaType: 'Type de VNA',
					vnaTypes: 'Types de VNA'
				},

				categories: {
					ena: 'Analyseurs de réseau vectoriel ENA',
					pna: 'Analyseurs de réseau PNA'
				},

				vnaTypes: {
					benchtop: 'Banc de test'
				},

				services: {
					E5080B: {
						title: 'Analyseur de réseau vectoriel ENA E5080B',
						subtitle: "L'analyseur de réseau ENA le plus intégré et le plus flexible"
					},
					N5291A: {
						title: 'Système millimétrique PNA N5291A, 900 Hz à 120 GHz',
						subtitle: "Bénéficiez d'une polyvalence avec un analyseur de réseau large bande à deux ou quatre ports"
					}
				}
			},

			antennaTestSystems: {
				title: "Systèmes de test d'antenne",
				subtitle: 'Optimisez les performances des antennes grâce à des solutions avancées de test et de mesure.',

				specs: {
					title: 'Titre',
					category: 'Catégorie',
					categories: 'Catégories',
					frequency: 'Fréquence'
				},

				categories: {
					farField: 'Champ lointain',
					nearField: 'Champ proche',
					onChip: 'Sur puce'
				},

				services: {
					AP1: { title: 'Produit 1' },
					AP2: { title: 'Produit 2' },
					AP3: { title: 'Produit 3' },
					AP4: { title: 'Produit 4' }
				}
			},

			circuitTestPlatforms: {
				title: 'Plateformes de test de circuits mmWave/THz',
				subtitle:
					'Accélérez la conception et les tests de circuits mmWave/THz grâce à des solutions de mesure avancées.',

				specs: {
					title: 'Titre',
					category: 'Catégorie',
					categories: 'Catégories',
					frequency: 'Fréquence'
				},

				categories: {
					circuitTestPlatform: 'Plateforme de test de circuits mmWave/THz'
				},

				services: {
					CP1: { title: 'Produit 1' }
				}
			}
		}
	},

	serviceRequests: {
		title: 'Demandes de service',
		allServiceRequests: 'Toutes les demandes de service',
		fetchingServiceRequests: 'Récupération des demandes de service',
		noServiceRequests: 'Aucune demande de service trouvée',
		checkFilters: 'Vérifiez vos filtres ou commencez à explorer pour trouver ce dont vous avez besoin !',
		browseSolutions: 'Parcourir nos solutions',
		id: 'ID',
		createdBy: 'Créé par',
		createdAt: 'Créé le',
		updatedAt: 'Mis à jour le',
		service: 'Service',
		status: 'Statut',
		price: 'Prix',
		payNow: 'Payer maintenant',
		paymentSuccess: 'Paiement réussi',
		payment: {
			title: 'Détails du paiement',
			transactionId: 'ID de transaction',
			paymentTime: 'Heure de paiement',
			paymentMethod: 'Méthode de paiement',
			totalAmount: 'Montant total',
			failedToGenerateToken: 'Échec de la génération du jeton de paiement',
			failedToSubmit: 'Échec de la soumission du paiement',
			checkout: 'Paiement',
			amountToBePaid: 'Montant à payer',
			paymentSuccess: 'Paiement réussi',
			paymentTotal: 'Total du paiement',
			print: 'Imprimer',
			payNow: 'Payer maintenant',
			cancelPayment: 'Annuler le paiement'
		}
	},

	serviceStatus: {
		APPLICATION_RECEIVED: 'Demande reçue',
		IN_REVIEW: "En cours d'examen",
		WAITING_FOR_PAYMENT: 'En attente de paiement',
		TESTING_IN_PROGRESS: 'Test en cours',
		REPORT_RELEASED: 'Rapport publié',
		REJECTED: 'Rejeté'
	}
};
