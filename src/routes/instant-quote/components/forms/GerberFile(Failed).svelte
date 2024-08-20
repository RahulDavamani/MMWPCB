<script lang="ts">
	import JSZip from 'jszip';
	import { parse } from '@tracespace/parser';
	import { plot } from '@tracespace/plotter';
	import { render as renderer } from '@tracespace/renderer';

	let fileInput: HTMLInputElement | null = null;
	let images: any[] = [];
	let fullImage: any | undefined;

	function triggerFileInput(): void {
		if (fileInput) {
			fileInput.click();
		}
	}

	async function handleFileChange(event: Event): Promise<void> {
		const target = event.target as HTMLInputElement;
		const file = target.files ? target.files[0] : null;

		if (file) {
			const zip = new JSZip();
			const content = await file.arrayBuffer();
			const zipContent = await zip.loadAsync(content);
			const fileNames = Object.keys(zipContent.files).filter((fileName) =>
				fileName.toLowerCase().match(/\.(gbl|gtl|gbs|gts|gko|gbo|gto|gbp|gtp|drl)$/)
			);

			let datas = [];
			for (const fileName of fileNames) {
				const data = await zipContent.file(fileName)?.async('string');
				if (!data) return;
				datas.push(data);
				const image = renderer(plot(parse(data)));
				images = [...images, image];
			}
			fullImage = renderer(plot(parse(datas.join('\n'))));
		}
	}
</script>

<button on:click={triggerFileInput}>Upload Gerber File</button>
<input type="file" bind:this={fileInput} on:change={handleFileChange} accept="" style="display: none" />

<!-- {#each images as image}
	{@html `
      <svg xmlns="${image.properties.xmlns}" xmlns:xlink="${image.properties.xmlnsXLink}"
         version="${image.properties.version}"
         stroke-linecap="${image.properties.strokeLineCap}"
         stroke-linejoin="${image.properties.strokeLineJoin}"
         stroke-width="${image.properties.strokeWidth}"
         fill-rule="${image.properties.fillRule}"
         clip-rule="${image.properties.clipRule}"
         fill="${image.properties.fill}"
         stroke="${image.properties.stroke}"
         viewBox="${image.properties.viewBox}"
         width="${image.properties.width}"
         height="${image.properties.height}">
      ${image.children
				.map((child) => {
					// Assuming children is an array of elements or strings
					if (typeof child === 'string') {
						return child;
					}
					return `<${child.tagName} ${Object.entries(child.properties)
						.map(([key, value]) => `${key}="${value}"`)
						.join(' ')}
            ${child.children
							.map((c) =>
								typeof c === 'string'
									? c
									: `<${c.tagName} ${Object.entries(c.properties)
											.map(([key, value]) => `${key}="${value}"`)
											.join(' ')}
            ${c.children.map((cc) => (typeof cc === 'string' ? cc : `</${cc.tagName}>`)).join('')}
            </${c.tagName}>`
							)
							.join('')}
            </${child.tagName}>`;
				})
				.join('')}
      </svg>`}
{/each} -->

{#if fullImage}
	{@html `
   <svg xmlns="${fullImage.properties.xmlns}" xmlns:xlink="${fullImage.properties.xmlnsXLink}"
      version="${fullImage.properties.version}"
      stroke-linecap="${fullImage.properties.strokeLineCap}"
      stroke-linejoin="${fullImage.properties.strokeLineJoin}"
      stroke-width="${fullImage.properties.strokeWidth}"
      fill-rule="${fullImage.properties.fillRule}"
      clip-rule="${fullImage.properties.clipRule}"
      fill="${fullImage.properties.fill}"
      stroke="${fullImage.properties.stroke}"
      viewBox="${fullImage.properties.viewBox}"
      width="${fullImage.properties.width}"
      height="${fullImage.properties.height}">
   ${fullImage.children
			.map((child) => {
				// Assuming children is an array of elements or strings
				if (typeof child === 'string') {
					return child;
				}
				return `<${child.tagName} ${Object.entries(child.properties)
					.map(([key, value]) => `${key}="${value}"`)
					.join(' ')}
         ${child.children
						.map((c) =>
							typeof c === 'string'
								? c
								: `<${c.tagName} ${Object.entries(c.properties)
										.map(([key, value]) => `${key}="${value}"`)
										.join(' ')}
         ${c.children.map((cc) => (typeof cc === 'string' ? cc : `</${cc.tagName}>`)).join('')}
         </${c.tagName}>`
						)
						.join('')}
         </${child.tagName}>`;
			})
			.join('')}
   </svg>`}
{/if}
