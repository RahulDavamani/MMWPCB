<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="Download Center"
		description="Explore our collection of publicly available documents and download what you need effortlessly."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Download Center</h1>
			<p class="text-gray-600 mb-4">
				Access the technical documentation for our products and service through the centralized Download Center. Here,
				you can easily find and download the latest datasheets and specification files in PDF format.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<a href="/download-center/pcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						PCB Process Capacity
					</a>
				</li>
				<li>
					<a href="/download-center/fpcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						FPCB Process Capacity
					</a>
				</li>
				<li>
					<a href="/download-center/metal-3d-printing-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Metal 3D Printing Capacity
					</a>
				</li>
				<li>
					<a
						href="/download-center/non-metal-3d-printing-capacity.pdf"
						class="btn btn-sm text-base btn-link p-0"
						download
					>
						Non-Metal 3D Printing Capacity
					</a>
				</li>
			</ul>
			<p class="text-gray-600 mb-4">
				<b>Note:</b> All files are provided free of charge for technical reference. For further assistance, contact our support
				team.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="下载中心"
		description="浏览我们公开提供的文档集合，轻松获取所需资料。"
		button={{ title: '立即报价并在线下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">下载中心</h1>
			<p class="text-gray-600 mb-4">
				通过集中式下载中心获取我们产品与服务的技术文档。在这里，您可以轻松查找并下载最新的数据表和规格文件（PDF 格式）。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<a href="/download-center/pcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						PCB 工艺能力
					</a>
				</li>
				<li>
					<a href="/download-center/fpcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						FPCB 工艺能力
					</a>
				</li>
				<li>
					<a href="/download-center/metal-3d-printing-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						金属 3D 打印能力
					</a>
				</li>
				<li>
					<a
						href="/download-center/non-metal-3d-printing-capacity.pdf"
						class="btn btn-sm text-base btn-link p-0"
						download
					>
						非金属 3D 打印能力
					</a>
				</li>
			</ul>
			<p class="text-gray-600 mb-4">
				<b>注意：</b>所有文件均免费提供作技术参考使用。如需进一步帮助，请联系技术支持团队。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Centre de Téléchargement"
		description="Parcourez notre collection de documents publics et téléchargez facilement ce dont vous avez besoin."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Centre de Téléchargement</h1>
			<p class="text-gray-600 mb-4">
				Accédez à la documentation technique de nos produits et services via notre centre de téléchargement centralisé.
				Ici, vous pouvez facilement trouver et télécharger les dernières fiches techniques et fichiers de spécifications
				au format PDF.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<a href="/download-center/pcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Capacité du procédé PCB
					</a>
				</li>
				<li>
					<a href="/download-center/fpcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Capacité du procédé FPCB
					</a>
				</li>
				<li>
					<a href="/download-center/metal-3d-printing-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Capacité d'impression 3D métal
					</a>
				</li>
				<li>
					<a
						href="/download-center/non-metal-3d-printing-capacity.pdf"
						class="btn btn-sm text-base btn-link p-0"
						download
					>
						Capacité d'impression 3D non métallique
					</a>
				</li>
			</ul>
			<p class="text-gray-600 mb-4">
				<b>Remarque :</b> Tous les fichiers sont fournis gratuitement à titre de référence technique. Pour toute assistance
				supplémentaire, veuillez contacter notre équipe de support.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Centro de Descargas"
		description="Explora nuestra colección de documentos públicos y descarga fácilmente lo que necesites."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Centro de Descargas</h1>
			<p class="text-gray-600 mb-4">
				Accede a la documentación técnica de nuestros productos y servicios a través del Centro de Descargas. Aquí
				puedes encontrar y descargar fácilmente las últimas hojas de datos y archivos de especificaciones en formato
				PDF.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<a href="/download-center/pcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Capacidad del proceso PCB
					</a>
				</li>
				<li>
					<a href="/download-center/fpcb-process-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Capacidad del proceso FPCB
					</a>
				</li>
				<li>
					<a href="/download-center/metal-3d-printing-capacity.pdf" class="btn btn-sm text-base btn-link p-0" download>
						Capacidad de impresión 3D metálica
					</a>
				</li>
				<li>
					<a
						href="/download-center/non-metal-3d-printing-capacity.pdf"
						class="btn btn-sm text-base btn-link p-0"
						download
					>
						Capacidad de impresión 3D no metálica
					</a>
				</li>
			</ul>
			<p class="text-gray-600 mb-4">
				<b>Nota:</b> Todos los archivos se proporcionan de forma gratuita como referencia técnica. Para más ayuda, contacta
				con nuestro equipo de soporte.
			</p>
		</div>
	</Layout>
{/if}
