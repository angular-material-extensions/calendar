<p align="center">
  <img height="256px" width="256px" style="text-align: center;" 
  alt="angular-material-extensions' logo"
  src="https://cdn.rawgit.com/angular-material-extensions/calendar/master/assets/angular-material-extensions-logo.svg">
</p>

# calendar - angular responsive calendar built with material design for desktop and mobile

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fcalendar.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fcalendar)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/calendar)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/angular-material-extensions/calendar.svg?branch=master)](https://travis-ci.org/angular-material-extensions/calendar)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/calendar/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/calendar?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/calendar/status.svg)](https://david-dm.org/angular-material-extensions/calendar)
[![devDependency Status](https://david-dm.org/angular-material-extensions/calendar/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/calendar#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/calendar.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/calendar.svg?style=flat-square)](https://github.com/angular-material-extensions/calendar/blob/master/LICENSE)

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/password-strength/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Components](#components)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/calendar

## Dependencies
* [Angular](https://angular.io) developed and tested with `6.1.78`

---

<a name="peerDependencies"/>

## Requirements (peer dependencies):
- [angular animations v6.1.8](https://www.npmjs.com/package/@angular/animations)
- [angular forms v6.1.8](https://www.npmjs.com/package/@angular/forms)
- [angular cdk v6.4.7](https://www.npmjs.com/package/@angular/cdk)
- [angular material v6.4.7](https://www.npmjs.com/package/@angular/material)

- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

```bash
npm i @angular/cdk @angular/material @angular/animations @angular/forms 
```

or use `angular schematics` like e.g:

```bash
ng add @angular/material 
```

---


<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

<a name="additional-requirements-material-icons"/>

## Additional Requirements - Import the material design icons [learn more](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

- The easiest way to import material design icons is to provide a link in your `index.html` file like below:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- alternative solution:

1. Install of the official npm module of the material design icons

```bash
npm i -s material-design-icons
```

2. Import them in your `angular.json` file

```json
"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
```  


----

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/password-strength/getting-started)

Install above dependencies via *npm*. 

Now install `@angular-material-extensions/calendar` via:
```shell
npm install --save @angular-material-extensions/calendar
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/calendar`:
```js
map: {
  '@angular-material-extensions/calendar': 'node_modules/@angular-material-extensions/calendar/bundles/calendar.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatCalendarModule } from '@angular-material-extensions/calendar';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatCalendarModule .forRoot()`):
```js
import { MatCalendarModule } from '@angular-material-extensions/calendar';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatCalendarModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatCalendarModule `:

```js
import { MatCalendarModule } from '@angular-material-extensions/calendar';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatCalendarModule, ...], 
})
export class OtherModule {
}
```

## Usage


<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/calendar.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/calendar.git
```

- link the **@angular-material-extensions/calendar** package

```bash
$ gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/calendar.git)
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
4. Link the library `gulp link`
 5. Navigate to the demo app's directory
  - `cd demo`
  _ `npm i`
  _ `npm start`

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/calendar/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/calendar/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2018 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

