<p align="center">
	<img src="https://enginelandteam.github.io/dist/assets/image/EL.png" width="40%"/>
</p>

# SYNERGIA START LAND - SVELTE - WEBPACK - BOOTSTRAP

## Init

<!-- Acciones -->

### Acciones

- Creamos y accedemos a carpeta SynergiaStartLand
- Extendemos Svelte a partir de un Template
- Requerimos dependencias
- Ejecutamos Site
- Inicializamos Git
- Adaptamos .gitignore

<!-- Acciones -->

<!-- Command -->

### Command

```
mkdir SynergiaStartLand && cd SynergiaStartLand
degit sveltejs/template SynergiaStartLand
npm install
npm run dev
git init

git add .
git commit -m "Init"
```

<!-- Command -->

---

## Estructura

<!-- Acciones -->

### Acciones

- Estructuramos Carpetas

<!-- Acciones -->

<!-- Command -->

### Command

```
git commit -m "Estructura"
```

<!-- Command -->

---

## Dependencias Svelte

<!-- Acciones -->

### Acciones

- Requerimos Svelte
- Instalamos dependencias svelte
- Instalamos dependencias babel

- Descargamos y actualizamos dependencias
- Configuramos Package.json

**_Svelte_**

svelte@latest
svelte-loader

**_Babel_**

@babel/core
babel-loader
@babel/polyfill **
@babel/preset-env **

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -S svelte@latest
npm i -D svelte-loader
*npm i -D svelte@latest svelte-loader*

npm i -D @babel/core
npm i -D babel-loader
npm i -D @babel/polyfill
npm i -D @babel/preset-env
*npm i -D @babel/core babel-loader @babel/polyfill @babel/preset-env*

npm install
npm run dev

git commit -m "Dependencias Svelte"
```

<!-- Command -->

---

## Dependencias WebPack

<!-- Acciones -->

### Acciones

- Instalamos dependencias webpack

**_Webpack_**

webpack _core _
webpack-cli _core _
webpack-dev-server _core _

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -D webpack
npm i -D webpack-cli
npm i -D webpack-dev-server
*npm i -D webpack webpack-cli webpack-dev-server*

git commit -m "Dependencias WebPack"
```

<!-- Command -->

---

## Dependencias Complementarias

<!-- Acciones -->

### Acciones

- Instalamos dependencias html

**_Core_**

- bootstrap
- jquery
- @popperjs/core
- popper.js
- themify-icons
- @fortawesome/fontawesome-free

**_Loader_**

- Css-loader
- Style-loader

- url-loaderfile-loader.\_
- sass-loader
- node-sass
- file-loader

**_Plugin_**

- extract-text-webpack-plugin
- mini-css-extract-plugin
- html-webpack-plugin

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -D bootstrap@latest
npm i -D jquery@latest
npm i -D @popperjs/core
npm i -D popper.js
npm i -D @icon/themify-icons
npm i -D @fortawesome/fontawesome-free
*npm i -D bootstrap@latest jquery@latest @popperjs/core popper.js @icon/themify-icons @fortawesome/fontawesome-free*

npm i -D html-loader
npm i -D css-loader
npm i -D style-loader
npm i -D node-sass
npm i -D sass-loader
*npm i -D html-loader css-loader style-loader node-sass sass-loader*

npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D file-loader
npm i -D babel-minify-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D optimize-css-assets-webpack-plugin
npm i -D clean-webpack-plugin
*npm i -D html-webpack-plugin mini-css-extract-plugin file-loader babel-minify-webpack-plugin copy-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin*

*npm i -D html-webpack-plugin bootstrap@latest @fortawesome/fontawesome-free css-loader sass-loader node-sass style-loader
mini-css-extract-plugin file-loader babel-minify-webpack-plugin copy-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin*

git commit -m "Dependencias Complementarias"

```

<!-- Command -->

---

## WebPack.Init

<!-- Acciones -->

### Acciones

- Incluimos el comando vinculado a webpack.init en package.json
- Adaptamos Webpack/Webpack.init como la opcion inicial para copiar dependencias a public

<!-- Acciones -->

<!-- Command -->

### Command

```
npm run init

git commit -m "WebPack.Init"

```

<!-- Command -->

---

## Uninstall Rollup

<!-- Acciones -->

### Acciones

- Retiramos dependencias de rollup
- Eliminamos archivo de configuracion de rollup

**Rollup**
rollup
rollup-plugin-svelte
@rollup/plugin-commonjs
@rollup/plugin-node-resolve
rollup-plugin-livereload
rollup-plugin-terser
rollup-plugin-css-only
sirv-cli

<!-- Acciones -->

<!-- Command -->

### Command

```
npm uninstall rollup
npm uninstall rollup-plugin-svelte
npm uninstall @rollup/plugin-commonjs
npm uninstall @rollup/plugin-node-resolve
npm uninstall rollup-plugin-livereload
npm uninstall rollup-plugin-terser
npm uninstall rollup-plugin-css-only
npm uninstall sirv-cli
*npm uninstall rollup rollup-plugin-svelte @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-livereload rollup-plugin-terser rollup-plugin-css-only sirv-cli*

git commit -m "Uninstall Rollup"

```

<!-- Command -->

---

## WebPack Config

<!-- Acciones -->

### Acciones

- Incluimos el comando vinculado a webpack.dev en package.json
- Incluimos el comando vinculado a webpack.config en package.json
- Adaptamos webpack.config.js
- Reorganizamos archivos y carpetas

<!-- Acciones -->

<!-- Command -->

### Command

```
git commit -m "Webpack Config"

```

<!-- Command -->

---
