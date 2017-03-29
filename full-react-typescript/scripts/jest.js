let jest = require("jest");
let child_process = require("child_process");
let config = require("../app/config");
let path = require("path");

//console.log(config)
let options = {
       transform: {
      "^.+\\.(ts|tsx)$": path.resolve(__dirname , './jest-preprocessor.js')
    },
    "collectCoverageFrom": [
      "**/*.{ts,tsx}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ],
    "roots": [
      config.paths.components
    ],
    "testMatch": [
      "**/app/components/**/*.test.ts?(x)",
      "**/__tests__/*.(ts|tsx|js)"
    ],
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "ts",
      "tsx"
    ],
    "unmockedModulePathPatterns": [
      "<rootDir>/node_modules/react",
      "<rootDir>/node_modules/react-dom",
      "<rootDir>/node_modules/fbjs",
      "<rootDir>/node_modules/enzyme",
      "<rootDir>/node_modules/react-addons-test-utils"
    ],
    coverageReporters:['html' , 'text']
}

jest.runCLI(options , config.paths.components , (e)=>{
    console.log(22,e)
})