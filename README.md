# The Remix Alliance

### Icons

Icons are apparently complicated and opinionated. This project uses `@unplugin/unplugin-icons`, which combines two nice tools:

- `unplugin`, which allows you to write build plugins for any frontend build system
- `Iconify`, which allows you to use any of the many, many icon packs out there in a shared syntax/format

Unfortunately, Iconify wants you to get the icons from their API, but I'd rather just have the SVGs locally. In order to add a new icon to the project, it's quite easy:

1. Go to the [Iconify sets](https://icon-sets.iconify.design/)
2. Click a set (currently Bootstrap Icons is installed, at least)
3. Find your set's abbreviation in the URL - Bootstrap Icons is `bi`
4. Find your icon's name - for example, `terminal-dash`.
5. Import with `import MyIcon from "~icons/bi/terminal-dash";`
6. Render like a React component - `<MyIcon />`.

(Tip: if you click an icon, a modal will show up. Click the dropdown labeled `Icon: ` and pick the second from the bottom option, e.g. `bi/terminal-dash`. this should help with copy-pasting a bit.)

If you want to add a new icon set that isn't downloaded, simply run `pnpm add -D @iconify-json/<abbreviation>`. All icons from all sets totals ~120MB and I didn't want to add all of them when we don't use that many.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
