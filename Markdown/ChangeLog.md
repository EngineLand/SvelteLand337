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
