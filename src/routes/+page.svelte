<script lang="ts">
	import { Metadata } from "$lib";
	import { IconButton, TextBlock } from "fluent-svelte";
	import { links } from "$data/links";
	let { twitter, github, reddit } = links;
</script>

<Metadata title="Dongle • Home" />

<div id="hero-section-container">
	<div id="hero-section">
		<img
			draggable={false}
			class="hero-image"
			src="https://avatars.githubusercontent.com/dongle-the-gadget"
			alt="Dongle's profile"
		/>
		<div class="hero-contents">
			<TextBlock variant="titleLarge">Dongle</TextBlock>
			<TextBlock>
				Software development hobbyist. Makes a mess of stuff that
				sometimes works.
				</TextBlock>
			<div class="social-media-list">
				<IconButton
					class="iconButtonPad"
					title="X/Twitter"
					href="https://x.com/{twitter}"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xml:space="preserve"
						viewBox="0 0 24 24"
					>
						<path
							d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
						/>
					</svg>
				</IconButton>
				<IconButton
					class="iconButtonPad"
					title="Reddit"
					href="https://reddit.com/user/{reddit}"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="114.1 119.2 113.8 102"
					>
						<path
							d="M227.9,170.9c0-6.9-5.6-12.5-12.5-12.5c-3.4,0-6.4,1.3-8.6,3.5c-8.5-6.1-20.3-10.1-33.3-10.6l5.7-26.7    l18.5,3.9c0.2,4.7,4.1,8.5,8.9,8.5c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9c-3.5,0-6.5,2-7.9,5l-20.7-4.4c-0.6-0.1-1.2,0-1.7,0.3    c-0.5,0.3-0.8,0.8-1,1.4l-6.3,29.8c-13.3,0.4-25.2,4.3-33.8,10.6c-2.2-2.1-5.3-3.5-8.6-3.5c-6.9,0-12.5,5.6-12.5,12.5    c0,5.1,3,9.4,7.4,11.4c-0.2,1.2-0.3,2.5-0.3,3.8c0,19.2,22.3,34.7,49.9,34.7s49.9-15.5,49.9-34.7c0-1.3-0.1-2.5-0.3-3.7    C224.8,180.4,227.9,176,227.9,170.9z M142.4,179.8c0-4.9,4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9c0,4.9-4,8.9-8.9,8.9    C146.4,188.7,142.4,184.7,142.4,179.8z M192.1,203.3c-6.1,6.1-17.7,6.5-21.1,6.5c-3.4,0-15.1-0.5-21.1-6.5c-0.9-0.9-0.9-2.4,0-3.3    c0.9-0.9,2.4-0.9,3.3,0c3.8,3.8,12,5.2,17.9,5.2s14-1.4,17.9-5.2c0.9-0.9,2.4-0.9,3.3,0C193,201,193,202.4,192.1,203.3z     M190.5,188.7c-4.9,0-8.9-4-8.9-8.9c0-4.9,4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9C199.4,184.7,195.4,188.7,190.5,188.7z"
						/>
					</svg>
				</IconButton>
				<IconButton
					class="iconButtonPad"
					title="GitHub"
					href="https://github.com/{github}"
					target="_blank"
				>
					<svg
						viewBox="0 0 1024 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
							transform="scale(64)"
						/>
					</svg>
				</IconButton>
			</div>
		</div>
	</div>	
</div>

<style lang="scss">
	@use "src/styles/pages/home";
</style>
