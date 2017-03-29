
let production = process.env.NODE_ENV === 'production' || process.argv.includes('--production');

let compilerOptions = {
    "target":"es6",
    "outDir": __dirname,
    "sourceMap": production,
    "noImplicitAny": true,
    "module": "commonjs",
    "allowJs": true
}
require('ts-node').register({
    project:false,
    compilerOptions:compilerOptions
});
let server = require("../app/server/app");
