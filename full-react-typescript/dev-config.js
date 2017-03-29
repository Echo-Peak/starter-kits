module.exports = {
  default_env:'development',
  use:'main',
  ports:{
    dev:3000,
    http:6400
  },
  static:'./app/built',
  src:'./app/src',
  server:'./app/built',
  jest:{
    collectCoverageFrom:["**/*.{js,jsx}", "!**/node_modules/**", "!**/vendor/**"],
    moduleNameMapper:{
      
    }
  },
  entry:path.resolve(__dirname ,'app/core/entry.tsx'),
  webpack:{
    vendors:[
      'react',
      'react-dom',
      'react-router',
      'mobx',
      'mobx-react'

    ]
  }
}
