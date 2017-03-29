const nodemon = require('nodemon');
const config = require('../app/config');
const path = require("path");

let cwd = process.cwd();
const SSR = (process.env.SSR === 'true' || process.argv.includes('--ssr') || config.SSR);
const production = process.env.NODE_ENV === 'production' || process.argv.includes('--production')

const SERVER_DIR   = path.resolve(cwd ,'app/server');

try {
  process.chdir(SERVER_DIR);
}
catch (err) {
  console.log('chdir: ' + err);
}

let compilerOptions = JSON.stringify({
    target:"es6",
    noImplicitAny: false,
    module: "commonjs",
    allowJs: true
});
process.env.TS_NODE_COMPILER_OPTIONS = compilerOptions;
console.log(compilerOptions)
nodemon({
  script: 'app.ts',
  exec:`ts-node app.ts`,
  args:[
    SSR ? '--ssr' : '',
    production ? '--production' : ''
    ],
  ext: 'ts js json',
  watch:[
    
    '*.ts',
    'core/*.ts',
    'middleware/*.ts'
  ],
  ignore:[
     'static/*.*',
     'views/*.*',
     '*/*.test.ts',
     '**/*.test.ts',
    ]
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted');
});
