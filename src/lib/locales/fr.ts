import type { Lang } from './en';

export const fr: Lang = {
	common: {
		login: 'Connexion',
		or: 'Ou',
		yes: 'Oui',
		no: 'Non',
		none: 'Aucun',
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
			silverWhite: 'Blanc argenté',
			silverGray: 'Gris argenté',
			metallic: 'Métallique',
			copper: 'Cuivre',
			darkBlack: 'Noir foncé',
			transparent: 'Transparent'
		},
		typeHere: 'Tapez ici...',
		select: 'Sélectionner',
		warning: 'Avertissement',
		error: 'Erreur',
		retry: 'Réessayer',
		moreDetails: 'Plus de détails',
		home: 'Accueil',
		add: 'Ajouter',
		edit: 'Modifier',
		save: 'Enregistrer',
		cancel: 'Annuler',
		close: 'Fermer',
		remove: 'Supprimer',
		reset: 'Réinitialiser',
		upload: 'Télécharger'
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
		products: 'Produits et capacités',
		whyUs: 'Pourquoi nous ?',
		support: 'Support',
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
			profile: 'Profil',
			settings: 'Paramètres',
			logout: 'Déconnexion'
		}
	},

	login: {
		pageTitle: 'Connexion',
		signIn: 'Se connecter',
		rememberMe: 'Se souvenir de moi',
		forgotPassword: 'Mot de passe oublié ?',
		dontHaveAccount: "Vous n'avez pas de compte ?",
		signInGoogle: 'Se connecter avec Google'
	},

	register: {
		pageTitle: 'Inscription',
		signUp: "S'inscrire",
		confirmPassword: 'Confirmer le mot de passe',
		iAgree: "J'accepte de m'inscrire",
		alreadyHaveAccount: 'Vous avez déjà un compte ?',
		signInGoogle: 'Se connecter avec Google'
	},

	profile: {
		pageTitle: 'Profil',
		myProfile: 'Mon profil',
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
		quoteNow: 'Obtenez un devis'
	},

	products: {
		standardPcb: 'PCB standard',
		advancedPcb: 'PCB avancé',
		flexiblePcb: 'PCB flexible',
		rigidFlex: 'Rigide-Flexible',
		assembly: 'Assemblage',
		stencil: 'Gabarit SMD',
		cnc: 'Usinage CNC',
		sheetMetal: 'Tôlerie',
		threePrinting: 'Impression 3D',
		injectionMolding: 'Moulage par injection',
		vacuumCasting: 'Moulage sous vide'
	},

	instantQuote: {
		pageTitle: 'Devis instantané',
		specification: 'Spécifications',

		upsertProduct: {
			uploadingFiles: 'Téléchargement de fichiers',
			savingCart: 'Enregistrement dans le panier',
			addingOrder: 'Ajout à la commande',
			updatingProduct: 'Mise à jour des spécifications du produit',
			uploadFileError: 'Échec du téléchargement du fichier',
			saveCartError: "Échec de l'enregistrement dans le panier",
			addOrderError: "Échec de l'ajout à la commande",
			updateProductError: 'Échec de la mise à jour du produit',
			saveCartSuccess: 'Produit enregistré dans le panier',
			addOrderSuccess: 'Produit ajouté à la commande',
			updateProductSuccess: 'Produit mis à jour avec succès'
		},

		pricing: {
			title: 'Tarification et temps de fabrication',
			weight: 'Poids',
			buildTime: 'Temps de fabrication',
			chargeDetails: 'Détails des frais',
			total: 'Total',
			saveProduct: 'Enregistrer le produit',
			saveToCart: 'Enregistrer dans le panier',
			addToOrder: 'Ajouter à la commande'
		},

		fileDrop: {
			dragDrop: 'Faites glisser et déposez vos fichiers ici ou cliquez pour télécharger',
			onlyAccepts20: 'Accepte uniquement zip ou rar | Taille max du fichier : 20 Mo',
			onlyAccepts200: 'Accepte uniquement zip ou rar | Taille max du fichier : 200 Mo',
			fileUploaded: 'Fichier téléchargé avec succès',
			downloadFile: 'Télécharger le fichier'
		},

		gerberFile: {
			title: 'Fichier Gerber',
			description: "Veuillez télécharger le fichier Gerber pour votre produit (n'accepte que .zip, .rar)"
		},

		designFile: {
			title: 'Fichier de conception',
			description: "Veuillez télécharger le fichier de conception pour votre produit (n'accepte que .zip, .rar)"
		}
	},

	shipping: {
		shippingEstimate: 'Estimation des frais de port',
		shippingInfo: "Informations sur l'expédition",
		selectShippingMethod: "Sélectionner la méthode d'expédition",
		shippingTo: 'Expédition vers',
		selectCountry: 'Sélectionner le pays',
		shippingMethod: "Méthode d'expédition",
		price: 'Prix',
		deliveryTime: 'Temps de livraison',
		restriction: 'Restriction',
		country: 'Pays',
		method: 'Méthode',
		weight: 'Poids',
		shippingCost: 'Frais de port',
		updatingShipping: "Mise à jour de la méthode d'expédition",
		updateShippingError: "Échec de la mise à jour des informations d'expédition",
		updateShippingSuccess: "Informations d'expédition mises à jour avec succès"
	},

	orders: {
		pageTitle: 'Mes commandes',
		viewCart: 'Voir le panier',
		orderId: 'Numéro de commande',
		createdDate: 'Date de création',
		status: 'Statut',
		itemsCount: "Nombre d'articles",
		viewDetails: 'Voir les détails'
	},

	order: {
		pageTitle: 'Commande',
		allOrders: 'Toutes les commandes',
		myCart: 'Mon panier',
		orderId: 'Numéro de commande',

		submitReview: {
			noProducts: 'Aucun produit dans le panier',
			shippingError: "Informations d'expédition non fournies",
			deliveryError: 'Adresse de livraison non fournie',
			filesNotUploaded: 'Fichiers du produit non téléchargés',
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

		orderMessage: {
			review: {
				title: 'Votre commande a été soumise pour examen',
				button: "Annuler l'examen"
			},
			rejected: {
				title: 'Votre examen de commande a été rejeté',
				description: "Vérifiez les messages d'examen pour plus de détails",
				button: 'Soumettre à nouveau pour examen'
			},
			approved: {
				title: 'Votre examen de commande a été approuvé',
				description: 'Vérifiez les prix mis à jour et procédez au paiement',
				button: 'Continuer au paiement'
			},
			confirmed: {
				title: 'Paiement réussi !',
				description: 'Votre commande est confirmée et est en cours de traitement'
			},
			fabrication: {
				title: 'Fabrication en cours',
				description: "Vérifiez l'état de progression de chaque produit"
			},
			delivery: {
				title: 'Livraison en cours',
				description: 'Votre commande est en route',
				button: 'Suivre la livraison'
			},
			completed: {
				title: 'Commande complétée !',
				description: 'Merci pour votre achat'
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
			gerberFile: 'Fichier Gerber',
			quotePrice: 'Prix du devis',
			finalPrice: 'Prix final',
			details: 'Détails',
			edit: 'Modifier',
			notUploaded: 'Non téléchargé',
			viewProgress: "Voir l'avancement",
			productDetails: {
				title: 'Détails du produit',
				failedToFetch: 'Échec de la récupération des détails du produit'
			},
			fabrication: {
				title: 'Fabrication',
				fabricationProgress: 'Progression de la fabrication',
				notStarted: 'Fabrication non commencée',
				completed: 'Fabrication terminée'
			}
		},

		reviewMessages: {
			title: "Messages d'examen",
			failedToSend: "Échec de l'envoi du message",
			noMessages: 'Aucun message pour le moment',
			conversationClosed: 'Cette conversation est fermée'
		},

		orderSummary: {
			title: 'Résumé de la commande',
			itemsCost: 'Coût des articles',
			shippingCost: 'Frais de port',
			discount: 'Remise',
			taxes: 'Impôts',
			orderTotal: 'Total de la commande',
			estDeliveryDate: 'Date de livraison estimée',
			estDeliveryDateDesc:
				"La date d'expédition estimée est calculée en fonction de l'article avec le temps de fabrication le plus long dans votre commande. Veuillez noter que cette date est à titre indicatif seulement. Si votre commande nécessite une confirmation, la date d'expédition peut être prolongée.",
			weight: 'Poids',
			weightDesc:
				"Le poids ici est calculé en fonction de la plus grande valeur entre le poids brut et le poids volumétrique, qui est estimé pour référence. Si le poids réel diffère de l'estimation, les frais de port peuvent être ajustés en conséquence.",
			submitOrderForReview: 'Soumettre la commande pour examen',
			saveOrder: 'Enregistrer la commande'
		},

		payment: {
			title: 'Détails du paiement',
			transactionId: 'ID de transaction',
			paymentTime: 'Temps de paiement',
			paymentMethod: 'Méthode de paiement',
			totalAmount: 'Montant total',
			failedToGenerateToken: 'Échec de la génération du jeton de paiement',
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
				'Cette action supprimera définitivement la commande et toutes ses informations associées. Cela ne peut pas être annulé, veuillez donc procéder avec prudence.',
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
		SAVED: 'Enregistré comme brouillon',
		REVIEW: 'En révision',
		REJECTED: 'Révision rejetée',
		APPROVED: 'Révision approuvée',
		PAYMENT: 'Paiement',
		CONFIRMED: 'Commande confirmée',
		FABRICATION: 'En fabrication',
		DELIVERY: 'Expédition et livraison',
		COMPLETED: 'Commande terminée',
		CANCELLED: 'Commande annulée',
		REFUNDED: 'Remboursé'
	},

	support: {
		title: 'Support',
		sections: {
			myOrders: {
				title: 'Mes commandes',
				subsections: {
					ordering: {
						title: 'Passer des commandes',
						questions: [
							{
								title: 'Comment passer des commandes pour PCB et assemblage PCB ?',
								contents: [
									[
										'Acheter des PCB sur',
										'MMWPCB.com',
										'est facile et pratique. En quelques étapes, vous pouvez profiter de services de prototypage PCB abordables mais de haute qualité.'
									],
									['"Vidéo":', "Comment passer une commande en ligne sur PCBWay ? Un guide vidéo d'une minute."],
									['Étape "1": Cliquez sur le type de service que vous souhaitez. Par "exemple": PCB.'],
									[
										'Sélectionnez et remplissez les spécifications, puis cliquez sur le bouton "Calculer" pour continuer.'
									]
								]
							},
							{
								title: "Comment passer une commande d'assemblage PCB (demande) ?",
								contents: [
									[
										'Un autre article de mise à jour (2022-02-25):',
										"Comment télécharger la demande d'assemblage PCB (PCBA)"
									],
									["Il y a 3 façons de passer une commande d'assemblage PCB."],
									["1. Passer des commandes d'assemblage PCB avec la commande PCB."],
									[
										'Vous pouvez cliquer sur le ',
										'Devis instantané PCB',
										"barre de navigation pour entrer, après avoir passé les commandes PCB, sélectionnez l'assemblage pour remplir vos paramètres de service d'assemblage. Cliquez sur Calculer pour sélectionner le prix, Ajouter au panier et télécharger des fichiers."
									]
								]
							},
							{
								title: 'Comment passer une commande CNC ?',
								contents: [
									[
										"En plus des services de fabrication de PCB, PCBWay propose également des services d'usinage CNC, d'impression 3D, de fabrication de tôles, de moulage par injection et de moulage sous vide. Lorsque vous accédez au site Web de PCBWay puis cliquez sur la section \"CNC/impression 3D\", vous pouvez voir les cinq pages de devis disponibles ici. Les processus de commande des cinq services sont essentiellement les mêmes, sauf pour certains paramètres sélectionnés. Commençons donc par le processus de commande de l'usinage CNC !"
									]
								]
							}
						]
					},
					leadTime: {
						title: 'Délai de livraison',
						questions: [
							{
								title: "Comment vérifier le temps d'achèvement estimé ?",
								contents: [
									['Avant le paiement'],
									[
										'Dans la liste "En attente de paiement", cliquez sur le titre du produit ou sur "Voir les détails" pour faire apparaître la boîte d\'informations détaillées du produit.'
									],
									[
										"Dans cette boîte, vous trouverez le temps d'achèvement estimé, comme indiqué dans l'image ci-dessous."
									]
								]
							},
							{
								title: "Politique de combinaison des commandes, d'expédition et de paiement",
								contents: [
									['Un paiement, une expédition !'],
									[
										"1. L'objectif de la combinaison de commandes est d'économiser sur les frais d'expédition. Si votre emploi du temps pour vos PCB n'est pas serré, combinez vos commandes et expédiez-les ensemble."
									],
									[
										"2. En combinant toutes ces commandes en un groupe et en payant maintenant, vous confirmez que toutes ces commandes seront expédiées ensemble autour de [xx-xx-xx]. C'est la date à laquelle nous pouvons terminer votre dernière commande PCB dans ce groupe de commandes, et nous pourrions avoir besoin de temps supplémentaire pour que la société de messagerie (aucun service le dimanche) prenne votre colis."
									]
								]
							},
							{
								title: 'Quand la commande express sera-t-elle produite ?',
								contents: [
									[
										"Depuis le lancement du service express 24 heures de MMWPCB, il a apporté de nombreux avantages aux clients ayant souvent des projets PCB urgents à l'ordre du jour. Cependant, il a également entraîné des plaintes de clients dont les commandes sont retardées. En raison de la nature particulière des commandes urgentes, les plaintes de ces clients sont particulièrement critiques. Les données montrent que la plupart des « retards » étaient causés par des malentendus concernant le service express de 24 heures."
									],
									[
										"1. Tout d'abord, définissons le service express de 24 heures de MMWPCB. L'intervalle de temps va du début de la production à l'achèvement de la production. Il est important de noter que ce temps n'est pas calculé à partir du moment de votre paiement."
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
										"Chacun de nos représentants commerciaux a été formé professionnellement. S'il y a des lacunes, nous espérons que vous pourrez donner des suggestions et des corrections."
									],
									[
										"Si vous n'êtes pas satisfait de votre représentant commercial, veuillez envoyer vos questions à service@mmwpcb.com pour demander un remplacement."
									]
								]
							},
							{
								title:
									"Comment trouver mon commercial pour obtenir de l'aide concernant un problème de PCB ou de PCBA ?",
								contents: [
									[
										'Si vous avez des questions, veuillez contacter votre représentant commercial ou utiliser le chat en ligne. Vous pouvez trouver leurs coordonnées de la manière suivante :'
									],
									[
										"1. Dans le coin supérieur droit de votre page d'accueil ou derrière le numéro de commande, comme l'indiquent les cases rouges sur l'image ci-dessous ;"
									],
									['2. Dans votre panier ou votre liste de commandes ;']
								]
							},
							{
								title: 'Que faire si le représentant commercial ou le service après-vente ne répond pas ?',
								contents: [
									[
										"1. Cela peut être dû au système anti-spam, ce qui a entraîné le blocage ou l'envoi de l'e-mail dans le dossier des spams. Veuillez faire un suivi proactif."
									],
									[
										"2. S'ils n'ont pas répondu dans un délai raisonnable et que vous avez des questions concernant une commande, vous pouvez :"
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
										"1. Cliquez sur Rejoindre sur la page d'accueil ou en haut à droite de n'importe quelle page PCBWay."
									],
									[
										'2. Entrez votre adresse e-mail et définissez et confirmez votre mot de passe, puis commencez à acheter !'
									],
									[
										'"Remarque": Veuillez vous assurer que vous entrez la bonne adresse e-mail, notre système ne reconnaît actuellement que les caractères de l\'alphabet anglais.'
									]
								]
							},
							{
								title: "Mon compte n'est pas disponible. Que puis-je faire ?",
								contents: [
									['Il existe de nombreuses raisons pour lesquelles votre compte peut être indisponible, telles que :'],
									[
										'1. Auto-désactivation. Dans ce cas, nous vous suggérons de créer un nouveau compte ou de contacter un représentant du service/vente.'
									],
									["2. Désactivé en raison d'une violation des règles commerciales"]
								]
							},
							{
								title: 'Puis-je devenir un distributeur de MMWPCB ?',
								contents: [
									[
										'Vous pouvez visiter vos coordonnées soumises par',
										'Devenir notre distributeur',
										'et nous vous contacterons pour une coopération.'
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
									['"Remarque": Nous ne recommandons pas de changer votre adresse e-mail trop souvent.']
								]
							},
							{
								title: 'Comment changer mon adresse e-mail ?',
								contents: [
									[
										"Les clients ayant une adresse e-mail incorrecte ou n'ayant pas reçu l'e-mail de vérification peuvent soumettre une demande de changement d'e-mail via le formulaire \"Demande de changement d'e-mail\". Le client doit remplir la nouvelle adresse e-mail et justifier le changement."
									],
									['Voici les "étapes" spécifiques :'],
									['Étape "1": Paramètres du compte -> Changer d\'e-mail']
								]
							},
							{
								title: 'Comment puis-je utiliser mon adresse e-mail pour un nouveau compte PCBWay ?',
								contents: [
									[
										'Si vous avez plusieurs comptes PCBWay et que vous souhaitez lier une adresse e-mail existante à votre nouveau compte, vous devez :'
									],
									[
										"1. Changer d'abord l'adresse e-mail de votre ancien compte. Pour le moment, chaque compte PCBWay ne peut être lié qu'à une seule adresse e-mail unique."
									],
									[
										"2. Après avoir mis à jour avec succès l'adresse de votre compte existant, vous pouvez lier votre nouveau compte à l'autre adresse e-mail."
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
										"Le club des membres MMWPCB a 6 niveaux - V0, V1, V2, V3, V4, V5. Le niveau auquel vous appartenez détermine les avantages et privilèges auxquels vous avez droit. Tous les acheteurs reçoivent automatiquement un niveau d'adhésion dès qu'ils remplissent les conditions minimales (voir le tableau ci-dessous)."
									],
									[
										'Détails des "avantages":',
										'Membre V0 : 0% de réduction',
										'Membre V1 : 1% de réduction',
										'Membre V2 : 2% de réduction',
										'Membre V3 : 3% de réduction'
									]
								]
							},
							{
								title: 'Quels sont les privilèges du club des membres MMWPCB ?',
								contents: [
									[
										"Le club des membres MMWPCB a 6 niveaux - V0, V1, V2, V3, V4, V5. Le niveau auquel vous appartenez détermine les avantages et privilèges auxquels vous avez droit. Tous les acheteurs reçoivent automatiquement un niveau d'adhésion dès qu'ils remplissent les conditions minimales (voir le tableau ci-dessous)."
									],
									[
										'Détails des "avantages":',
										'Membre V0 : 0% de réduction',
										'Membre V1 : 1% de réduction',
										'Membre V2 : 2% de réduction',
										'Membre V3 : 3% de réduction'
									]
								]
							},
							{
								title: "Mes points de récompense n'ont pas été ajoutés à mon compte. Que puis-je faire ?",
								contents: [
									[
										'Pour une présentation détaillée des points et des fèves PCBWay et comment les gagner, veuillez cliquer sur',
										'Présentation détaillée des points et des fèves PCBWay',
										'pour en savoir plus.'
									],
									[
										'Si les points n\'ont pas encore été attribués à votre compte, cela peut être dû à l\'une des "raisons" suivantes :'
									],
									[
										"1. La commande n'est pas dans un statut terminé. Veuillez vérifier le statut de votre commande, car les points pour passer des commandes ne sont attribués qu'une fois la commande terminée."
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
