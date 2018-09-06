<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/calendar/master/demo/src/assets/logo.svg">
</p>

# calendar - angular responsive calendar built with material design for desktop and mobile

[![npm version](https://badge.fury.io/js/calendar.svg)](https://badge.fury.io/js/calendar),
[![Build Status](https://travis-ci.org/angular-material-extensions/calendar.svg?branch=master)](https://travis-ci.org/angular-material-extensions/calendar)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/calendar/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/calendar?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/calendar/status.svg)](https://david-dm.org/angular-material-extensions/calendar)
[![devDependency Status](https://david-dm.org/angular-material-extensions/calendar/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/calendar#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/calendar.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/calendar

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
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
import { LibModule } from '@angular-material-extensions/calendar';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@angular-material-extensions/calendar';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from '@angular-material-extensions/calendar';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

