# Portfolio Website
This is a personal portfolio website built from scratch using SvelteKit (with TypeScript), SCSS and Figma. The website demonstrates interactive features, smooth animations, and integration with Discord webhooks for direct notifications.

## Features
- Built with SvelteKit & TypeScript – Modern, reactive frontend framework with type safety.
- Typography - Used Google fonts serif, handwritten and sans-serif font families.
- SCSS Styling – Modular, maintainable styling with nested rules, functions and variables.
- SVG Integration – Imported and optimized SVG assets directly from Figmaand other sources
- Discord Webhook Integration – Receive notifications from portfolio interactions (e.g., contact form submissions).
- Lightweight & Component-Free – Simple structure with minimal overhead; everything is handwritten by taking inspiration and not relying on component libraries and pre-built components.
- Responsive Design – Works seamlessly on mobile, tablet, and desktop screens.
- Animations & Interactivity – Smooth SVG and UI animations to enhance user experience.

## Tech Stack
- SvelteKit (Meta framework)
- SCSS (CSS preprocessor)
- Figma (SVG)
- Discord webhook (Webhook linked to discord)
- Bun (Javascript and Typescript runtime and package manager)

## Screenshot
![App Screenshot](https://github.com/17anirudh/owl-svg/blob/main/portfolio%20screenshot.png?raw=true)

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Sveltekit guide
- Create Sveltekit project
```sh
# create a new project in the current directory with CLI friendly customization
bunx sv create
```
- Compile and view the project
```sh
# installs necessary packages
bun install
# opens project in a browser
bun run dev 
# opens project directly in a new browser tab
bun run dev --open
```
- After scripting, if you want to deploy, first add an adapter ![sveltekit-docs](https://svelte.dev/docs/kit/adapters)
```sh
#for e.g. we take vercel adapter
bun install -D @sveltejs/adapter-vercel
```
- To create a production version of your app:
```sh
bun run build
bun run preview
```

## Local Installation
```sh
git clone https://github.com/17anirudh/portfolio
bun install
bun run dev --open
```