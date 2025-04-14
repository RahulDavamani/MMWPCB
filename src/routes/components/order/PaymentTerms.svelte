<script lang="ts">
	import { i18n } from '../../../stores/i18n.store';
</script>

<div class="space-y-2">
	{#if $i18n.language === 'en'}
		<h2 class="text-xl font-bold">1. Full Payment in Advance</h2>
		<p>
			Customers must pay 100% of the total amount in advance after order confirmation. Production will only commence
			after we confirm that the payment has been received. Before full payment is confirmed, the order will remain in a
			"Review Approved - waiting for payment " status and will not be scheduled for production.
		</p>
		<h2 class="text-xl font-bold">2. Payment Methods</h2>
		<p>We accept payment via credit card and PayPal.</p>
		<h2 class="text-xl font-bold">3. Payment Risk Liability</h2>
		<div>
			<div>
				(1)If the customer encounters technical issues with the payment platform, delays in bank processing, or fund
				freezes, resulting in a situation where the customer has been charged but we have not received the funds, any
				related losses and processing fees will be borne by the customer.
			</div>
			<div>
				(2) The customer must independently file a claim with the issuing bank or PayPal to recover the funds. We will
				only assist by providing necessary information such as the order number.
			</div>
			<div>
				(3) The production process will only begin after our account confirms receipt of the full payment. Notifications
				of "Payment Successful" from the payment platform will not be accepted as proof of receipt. The customer cannot
				request early production based on the claim of " payment deducted ".
			</div>
		</div>
		<h2 class="text-xl font-bold">4. Payment Deadline</h2>
		<p>
			The customer must complete the payment within 10 business days after order confirmation. If payment is not made by
			the deadline, we reserve the right to cancel the order or adjust the price.
		</p>
		<h2 class="text-xl font-bold">5. Production Notification</h2>
		<p>Once payment is confirmed, we will notify the customer via email with the estimated delivery time.</p>
		<b>We reserve the right to interpret and revise this policy.</b>
	{:else if $i18n.language === 'zh'}
		<h2 class="text-xl font-bold">1. 全额预付款</h2>
		<p>
			客户在订单确认后必须预付100%的总金额。只有在我们确认收到款项后，才会开始生产。在确认收到全额付款之前，订单将保持在“审核通过
			- 等待付款”状态，无法排入生产计划。
		</p>

		<h2 class="text-xl font-bold">2. 支付方式</h2>
		<p>我们接受信用卡和 PayPal 支付。</p>

		<h2 class="text-xl font-bold">3. 支付风险责任</h2>
		<div>
			<div>
				(1)
				如果客户因支付平台技术问题、银行处理延迟或资金冻结等原因，导致已扣款但我们未收到款项，相关损失及手续费由客户自行承担。
			</div>
			<div>(2) 客户必须自行向发卡银行或 PayPal 提出索赔以追回资金。我们仅提供订单编号等必要信息协助处理。</div>
			<div>
				(3)
				只有在我们账户确认收到全额款项后，生产流程才会启动。支付平台显示的“支付成功”提示不视为我们收到款项的凭证。客户不得以“已扣款”为由要求提前生产。
			</div>
		</div>

		<h2 class="text-xl font-bold">4. 支付期限</h2>
		<p>客户必须在订单确认后的10个工作日内完成付款。若未按时付款，我们有权取消订单或调整价格。</p>

		<h2 class="text-xl font-bold">5. 生产通知</h2>
		<p>付款确认后，我们将通过电子邮件通知客户预计交付时间。</p>

		<b>我们保留对本政策的最终解释权和修改权。</b>
	{:else if $i18n.language === 'fr'}
		<h2 class="text-xl font-bold">1. Paiement intégral à l'avance</h2>
		<p>
			Les clients doivent payer 100 % du montant total à l'avance après la confirmation de la commande. La production ne
			commencera qu'après confirmation de la réception du paiement. Avant la confirmation du paiement complet, la
			commande restera au statut "Examen approuvé - en attente de paiement" et ne sera pas programmée pour la
			production.
		</p>

		<h2 class="text-xl font-bold">2. Moyens de paiement</h2>
		<p>Nous acceptons les paiements par carte de crédit et PayPal.</p>

		<h2 class="text-xl font-bold">3. Responsabilité en cas de problème de paiement</h2>
		<div>
			<div>
				(1) Si le client rencontre des problèmes techniques avec la plateforme de paiement, des retards de traitement
				bancaire ou des blocages de fonds, entraînant un débit sans réception des fonds de notre part, toutes pertes ou
				frais seront à la charge du client.
			</div>
			<div>
				(2) Le client doit contacter lui-même la banque émettrice ou PayPal pour récupérer les fonds. Nous fournirons
				uniquement les informations nécessaires telles que le numéro de commande pour l’assister.
			</div>
			<div>
				(3) Le processus de production ne commencera qu'une fois le paiement reçu sur notre compte. Les notifications de
				"paiement réussi" de la plateforme ne seront pas considérées comme une preuve de réception. Le client ne peut
				pas demander un démarrage anticipé de la production sous prétexte que le paiement a été débité.
			</div>
		</div>

		<h2 class="text-xl font-bold">4. Délai de paiement</h2>
		<p>
			Le client doit effectuer le paiement dans les 10 jours ouvrables suivant la confirmation de la commande. En cas de
			non-paiement dans les délais, nous nous réservons le droit d’annuler la commande ou de réviser le prix.
		</p>

		<h2 class="text-xl font-bold">5. Notification de production</h2>
		<p>Une fois le paiement confirmé, nous informerons le client par e-mail du délai de livraison estimé.</p>

		<b>Nous nous réservons le droit d’interpréter et de modifier cette politique.</b>
	{:else}
		<h2 class="text-xl font-bold">1. Pago completo por adelantado</h2>
		<p>
			Los clientes deben pagar el 100% del monto total por adelantado después de la confirmación del pedido. La
			producción solo comenzará una vez que confirmemos la recepción del pago. Antes de la confirmación del pago
			completo, el pedido permanecerá en estado "Revisión aprobada - en espera de pago" y no será programado para
			producción.
		</p>

		<h2 class="text-xl font-bold">2. Métodos de pago</h2>
		<p>Aceptamos pagos con tarjeta de crédito y PayPal.</p>

		<h2 class="text-xl font-bold">3. Responsabilidad por riesgos de pago</h2>
		<div>
			<div>
				(1) Si el cliente experimenta problemas técnicos con la plataforma de pago, demoras bancarias o congelamiento de
				fondos que resulten en un cobro sin que hayamos recibido los fondos, cualquier pérdida y tarifa relacionada
				correrá por cuenta del cliente.
			</div>
			<div>
				(2) El cliente debe presentar una reclamación directamente con el banco emisor o PayPal para recuperar los
				fondos. Nosotros solo brindaremos información necesaria como el número de pedido.
			</div>
			<div>
				(3) El proceso de producción comenzará únicamente después de que confirmemos la recepción total del pago en
				nuestra cuenta. Las notificaciones de "Pago exitoso" de la plataforma de pago no serán aceptadas como prueba. El
				cliente no puede solicitar producción anticipada alegando "pago descontado".
			</div>
		</div>

		<h2 class="text-xl font-bold">4. Plazo de pago</h2>
		<p>
			El cliente debe completar el pago dentro de los 10 días hábiles posteriores a la confirmación del pedido. Si no se
			realiza el pago en el plazo, nos reservamos el derecho de cancelar el pedido o ajustar el precio.
		</p>

		<h2 class="text-xl font-bold">5. Notificación de producción</h2>
		<p>
			Una vez confirmado el pago, notificaremos al cliente por correo electrónico con el tiempo estimado de entrega.
		</p>

		<b>Nos reservamos el derecho de interpretar y modificar esta política.</b>
	{/if}
</div>
