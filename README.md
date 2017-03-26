##Starter kits
here i include basic starter kits for various apps

***
### react-mobx-express

This boiler-plate is the bare miniumim basics of a basic-medium sized react application.


**Dependencies**

* webpack 2
  * sass loader
  * style loader
  * babel-loader

* express
  * isomorphic middleware
  * configable middleware manager
* browser-sync
* nodemon
* react
* react-dom
* react-router

**Useage**

**Clone** react-mobx-express
```
git clone -b master --depth 1 https://github.com/Echo-Peak/starter-kits react-mobx-express
cd react-mobx-express  && git filter-branch --prune-empty --subdirectory-filter react-mobx-express HEAD
```

installation `npm i`

`npm run dev` will run the application in development mode

`npm run dev:iso` will run the application in sever-side-rendering mode

`npm run build` will build the application for production & run it

`npm run app` will just run the backend in normal mode(development)

`npm run app:iso` same as `app` but in isomorphic mode
***
