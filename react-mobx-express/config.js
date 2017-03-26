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
