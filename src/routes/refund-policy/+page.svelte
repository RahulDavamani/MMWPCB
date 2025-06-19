<script lang="ts">
	import { i18n } from '../../stores/i18n.store';
	import Layout from '../components/layout/Layout.svelte';
</script>

{#if $i18n.language === 'en'}
	<Layout pageTitle="Refund Policy">
		<h1 class="text-5xl font-bold">Refund Policy</h1>
		<div class="divider" />
		<div class="space-y-2">
			<p>Last updated: October 31, 2024</p>
			<h2 class="text-xl font-bold">1. Customer Order Cancellation</h2>
			<p>
				Before the production : Customers may apply for a full refund but must bear any administrative fees, bank
				charges, third-party payment platform fees, and exchange rate differences (if applicable). After the production
				: Due to the allocation of production resources, payments made will not be refunded.
			</p>
			<h2 class="text-xl font-bold">2. Delays/Cancellations Due to Our Responsibility</h2>
			<p>
				If we are unable to fulfill the order due to our reasons (e.g., material shortages, equipment failure, etc.),
				customers may apply for a full refund if the production has not yet started. If production has already begun,
				relevant costs (administrative fees, bank charges, third-party payment platform fees, exchange rate differences
				(if applicable), engineering fees, material wastage, etc.) will be deducted based on the actual progress, and
				the remaining balance will be refunded.
			</p>
			<h2 class="text-xl font-bold">3. Force Majeure</h2>
			<p>
				In cases of natural disasters, wars, or other force majeure events that prevent order completion, both parties
				will negotiate a refund or postponement arrangement.
			</p>
			<h2 class="text-xl font-bold">4. Returns Due to Quality Issues</h2>
			<div>
				If our inspection confirms that the product does not meet specifications, the customer may choose:
				<div>(1) Free reproduction and prioritized delivery; or</div>
				<div>(2) A partial refund based on the defect ratio</div>
				Return requests must be submitted within 3 business days after receipt of the goods, and relevant evidence must be
				provided. The customer shall bear the shipping costs incurred due to the return. We reserve the right to interpret
				and revise this policy.
			</div>
			<h2 class="text-xl font-bold">5. Quality Issues Due to Shipping</h2>
			<p>
				Once the goods are signed for, we take no responsibility. If obvious damage to the package is found before
				signing, please return it to the courier service company immediately. For quality issues caused during shipping,
				we will only assist in filing a claim with the courier service company and will not accept any related
				liability.
			</p>
			<h2 class="text-xl font-bold">6. Refund Process</h2>
			<p>
				Refund requests must be submitted under the relevant order on the website. We will complete the review and
				refund the amount to the original payment account within 15 business days
			</p>
			<h2 class="text-xl font-bold">7. Refund-Related Cost Responsibilities</h2>
			<div>
				<div>
					(1) Handling Fees: If an order is canceled or returned due to customer’s reasons, the customer will be
					responsible for all related transaction costs, including bank handling fees and third-party payment platform
					fees. We reserve the right to deduct these fees from the refund amount.
				</div>
				<div>
					(2) Exchange Rate Difference: If the refund involves currency exchange (e.g., the payment currency differs
					from the refund currency), the customer will be responsible for the exchange rate difference (based on the
					actual rate of the receiving bank or third-party payment platform on the day of the refund), and we will not
					be liable for losses due to exchange rate fluctuations.
				</div>
				<div>
					(3) Net Refund Amount Description: The final refund amount will be the net amount after deducting the
					following costs:
				</div>
				<div>A. Actual production costs incurred (e.g., material procurement, engineering costs, etc.);</div>
				<div>B. Bank charges and third-party payment platform fees;</div>
				<div>C. Exchange rate differences (if applicable).</div>
			</div>
			<b>We reserve the right to interpret and revise this policy.</b>
			<h3 class="text-xl font-bold">Contact Us</h3>
			<p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
			<ul class="list-disc pl-6">
				<li>By email: mmwpcb@velenova.com.hk</li>
			</ul>
		</div>
	</Layout>
{:else if $i18n.language === 'zh'}
	<Layout pageTitle="退款政策">
		<h1 class="text-5xl font-bold">退款政策</h1>
		<div class="divider" />
		<div class="space-y-2">
			<p>最后更新：2024年10月31日</p>
			<h2 class="text-xl font-bold">1. 客户订单取消</h2>
			<p>
				生产前：客户可以申请全额退款，但需承担行政费用、银行手续费、第三方支付平台手续费及汇率差异（如适用）。<br />
				生产后：由于生产资源已被分配，已支付款项将不予退还。
			</p>
			<h2 class="text-xl font-bold">2. 因我方原因造成的延迟/取消</h2>
			<p>
				如果由于我方原因（如材料短缺、设备故障等）无法完成订单，且生产尚未开始，客户可申请全额退款。<br />
				如已开始生产，将根据实际进度扣除相关费用（行政费用、银行手续费、第三方支付平台费用、汇率差异（如适用）、工程费用、材料浪费等），剩余部分予以退款。
			</p>
			<h2 class="text-xl font-bold">3. 不可抗力</h2>
			<p>如因自然灾害、战争或其他不可抗力事件导致无法完成订单，双方将协商退款或延期处理方案。</p>
			<h2 class="text-xl font-bold">4. 因质量问题的退货</h2>
			<div>
				经我方检验确认产品不符合规格时，客户可选择：
				<div>(1) 免费重制并优先发货；或</div>
				<div>(2) 按缺陷比例部分退款。</div>
				退货申请须在收到货物后3个工作日内提交，并提供相关证据。退货产生的运费由客户承担。我们保留对本政策的解释与修改权利。
			</div>
			<h2 class="text-xl font-bold">5. 因运输导致的质量问题</h2>
			<p>
				货物签收后，我方不承担任何责任。若在签收前发现包裹明显损坏，请立即退还给快递公司。<br />
				因运输导致的质量问题，我们仅协助向快递公司提出索赔，不承担任何相关责任。
			</p>
			<h2 class="text-xl font-bold">6. 退款流程</h2>
			<p>退款申请需在官网相应订单下提交。我们将在15个工作日内完成审核并将退款退回至原支付账户。</p>
			<h2 class="text-xl font-bold">7. 退款相关费用责任</h2>
			<div>
				<div>
					(1)
					手续费：如因客户原因取消或退货，客户需承担所有相关交易费用，包括银行手续费及第三方支付平台费用。我们保留从退款金额中扣除相关费用的权利。
				</div>
				<div>
					(2)
					汇率差异：如退款涉及货币兑换（如支付货币与退款货币不一致），客户需承担汇率差异（根据退款当日收款银行或第三方支付平台的实际汇率），我方不对汇率波动产生的损失承担责任。
				</div>
				<div>(3) 净退款金额说明：最终退款金额为扣除以下费用后的净额：</div>
				<div>A. 已发生的实际生产成本（如材料采购、工程费用等）；</div>
				<div>B. 银行费用及第三方支付平台手续费；</div>
				<div>C. 汇率差异（如适用）。</div>
			</div>
			<b>我们保留对本政策的解释与修改权利。</b>
			<h3 class="text-xl font-bold">联系我们</h3>
			<p>如您对我们的退换货政策有任何疑问，请联系我们：</p>
			<ul class="list-disc pl-6">
				<li>邮箱：support@mmwpcb.com</li>
			</ul>
		</div>
	</Layout>
{:else if $i18n.language === 'fr'}
	<Layout pageTitle="Politique de Remboursement">
		<h1 class="text-5xl font-bold">Politique de Remboursement</h1>
		<div class="divider" />
		<div class="space-y-2">
			<p>Dernière mise à jour : 31 octobre 2024</p>
			<h2 class="text-xl font-bold">1. Annulation de Commande par le Client</h2>
			<p>
				Avant la production : les clients peuvent demander un remboursement complet, mais doivent supporter les frais
				administratifs, bancaires, de plateforme de paiement tierce et les différences de taux de change (le cas
				échéant).<br />
				Après la production : en raison de l’allocation des ressources, aucun remboursement ne sera effectué.
			</p>
			<h2 class="text-xl font-bold">2. Retards/Annulations de Notre Fait</h2>
			<p>
				Si nous ne pouvons pas exécuter la commande pour des raisons internes (p. ex. : pénurie de matériaux, panne
				d'équipement), un remboursement complet peut être demandé si la production n'a pas encore commencé.<br />
				Si la production a débuté, les frais engagés (frais administratifs, bancaires, plateforme de paiement, taux de change,
				frais d'ingénierie, pertes de matériaux, etc.) seront déduits et le reste remboursé.
			</p>
			<h2 class="text-xl font-bold">3. Force Majeure</h2>
			<p>
				En cas de catastrophes naturelles, guerres ou autres cas de force majeure empêchant l’exécution de la commande,
				les deux parties conviendront d’un remboursement ou d’un report.
			</p>
			<h2 class="text-xl font-bold">4. Retours pour Problèmes de Qualité</h2>
			<div>
				Si notre inspection confirme que le produit ne respecte pas les spécifications, le client peut choisir :
				<div>(1) Une reproduction gratuite avec livraison prioritaire ; ou</div>
				<div>(2) Un remboursement partiel selon le taux de défaut.</div>
				Les demandes doivent être faites dans les 3 jours ouvrables suivant la réception, avec preuves à l’appui. Les frais
				de retour sont à la charge du client. Nous nous réservons le droit d'interpréter et de modifier cette politique.
			</div>
			<h2 class="text-xl font-bold">5. Problèmes de Qualité dus au Transport</h2>
			<p>
				Une fois le colis signé, nous déclinons toute responsabilité. Si le colis est endommagé avant la signature,
				veuillez le retourner immédiatement au transporteur.<br />
				En cas de dommages dus au transport, nous vous assisterons pour déposer une réclamation, mais n'assumerons aucune
				responsabilité.
			</p>
			<h2 class="text-xl font-bold">6. Processus de Remboursement</h2>
			<p>
				Les demandes doivent être soumises via la commande concernée sur notre site. Le remboursement sera traité sous
				15 jours ouvrables vers le compte de paiement initial.
			</p>
			<h2 class="text-xl font-bold">7. Frais Liés au Remboursement</h2>
			<div>
				<div>
					(1) Frais de traitement : en cas d’annulation ou de retour à l’initiative du client, celui-ci supportera tous
					les frais liés (frais bancaires, frais de plateforme). Nous pouvons les déduire du montant remboursé.
				</div>
				<div>
					(2) Différences de taux de change : si le remboursement implique un échange de devise, la perte liée au taux
					de change sera à la charge du client. Nous ne couvrons pas ces variations.
				</div>
				<div>(3) Montant net remboursé : il correspondra à la somme après déduction :</div>
				<div>A. Des coûts de production réels engagés (achat matériaux, ingénierie, etc.) ;</div>
				<div>B. Des frais bancaires et de plateforme de paiement ;</div>
				<div>C. Des différences de taux de change (le cas échéant).</div>
			</div>
			<b>Nous nous réservons le droit d'interpréter et de réviser cette politique.</b>
			<h3 class="text-xl font-bold">Contactez-nous</h3>
			<p>Pour toute question concernant notre politique de retour et de remboursement, veuillez nous contacter :</p>
			<ul class="list-disc pl-6">
				<li>Par e-mail : support@mmwpcb.com</li>
			</ul>
		</div>
	</Layout>
{:else}
	<Layout pageTitle="Política de Reembolsos">
		<h1 class="text-5xl font-bold">Política de Reembolsos</h1>
		<div class="divider" />
		<div class="space-y-2">
			<p>Última actualización: 31 de octubre de 2024</p>
			<h2 class="text-xl font-bold">1. Cancelación del Pedido por Parte del Cliente</h2>
			<p>
				Antes de la producción: los clientes pueden solicitar un reembolso completo, pero deberán asumir los gastos
				administrativos, comisiones bancarias, tarifas de plataformas de pago de terceros y diferencias de tipo de
				cambio (si corresponde).<br />
				Después de la producción: debido al uso de recursos de producción, no se realizarán reembolsos.
			</p>
			<h2 class="text-xl font-bold">2. Retrasos/Cancelaciones por Nuestra Responsabilidad</h2>
			<p>
				Si no podemos cumplir con el pedido por causas internas (por ejemplo, escasez de materiales, fallos técnicos),
				el cliente puede solicitar un reembolso completo si la producción aún no ha comenzado.<br />
				Si la producción ya ha comenzado, se deducirán los costos correspondientes (gastos administrativos, bancarios, tarifas
				de terceros, diferencias de tipo de cambio, costos de ingeniería, desperdicio de materiales, etc.) y se reembolsará
				el saldo restante.
			</p>
			<h2 class="text-xl font-bold">3. Fuerza Mayor</h2>
			<p>
				En casos de desastres naturales, guerras u otros eventos de fuerza mayor que impidan completar el pedido, ambas
				partes negociarán un reembolso o una reprogramación.
			</p>
			<h2 class="text-xl font-bold">4. Devoluciones por Problemas de Calidad</h2>
			<div>
				Si nuestra inspección confirma que el producto no cumple con las especificaciones, el cliente puede elegir:
				<div>(1) Reproducción gratuita con entrega prioritaria; o</div>
				<div>(2) Reembolso parcial según el porcentaje de defectos.</div>
				Las solicitudes deben presentarse dentro de los 3 días hábiles después de recibir el producto, con pruebas correspondientes.
				El cliente asumirá los costos de envío por la devolución. Nos reservamos el derecho de interpretar y modificar esta
				política.
			</div>
			<h2 class="text-xl font-bold">5. Problemas de Calidad por Envío</h2>
			<p>
				Una vez firmado el recibo del paquete, no asumimos ninguna responsabilidad. Si se detectan daños antes de
				firmar, devuelva el paquete al servicio de mensajería inmediatamente.<br />
				Por daños causados durante el envío, solo ayudaremos a presentar un reclamo ante la empresa de mensajería, sin asumir
				responsabilidades.
			</p>
			<h2 class="text-xl font-bold">6. Proceso de Reembolso</h2>
			<p>
				Las solicitudes de reembolso deben hacerse desde el pedido correspondiente en el sitio web. Revisaremos la
				solicitud y procesaremos el reembolso dentro de los 15 días hábiles a la cuenta original de pago.
			</p>
			<h2 class="text-xl font-bold">7. Costos Relacionados al Reembolso</h2>
			<div>
				<div>
					(1) Tarifas de gestión: si el pedido se cancela o devuelve por razones del cliente, este asumirá todos los
					costos de transacción, incluyendo tarifas bancarias y de plataformas de pago. Nos reservamos el derecho de
					deducir estos costos del reembolso.
				</div>
				<div>
					(2) Diferencias de tipo de cambio: si el reembolso implica cambio de divisas, el cliente asumirá la diferencia
					basada en la tasa del banco o plataforma correspondiente en el día del reembolso. No cubrimos pérdidas por
					fluctuaciones del tipo de cambio.
				</div>
				<div>(3) Monto neto reembolsado: el importe final será el monto neto después de deducir:</div>
				<div>A. Costos reales de producción (materiales, ingeniería, etc.);</div>
				<div>B. Comisiones bancarias y de plataformas de pago;</div>
				<div>C. Diferencias de tipo de cambio (si aplica).</div>
			</div>
			<b>Nos reservamos el derecho de interpretar y modificar esta política.</b>
			<h3 class="text-xl font-bold">Contáctanos</h3>
			<p>Si tienes alguna duda sobre nuestra política de devoluciones y reembolsos, contáctanos:</p>
			<ul class="list-disc pl-6">
				<li>Por correo electrónico: support@mmwpcb.com</li>
			</ul>
		</div>
	</Layout>
{/if}
