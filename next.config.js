// const fetch = require('isomorphic-unfetch')

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  
  basePath: '/platina-the-wolf',
  assetPrefix: '/platina-the-wolf/',
  imagesPublicPath: '/platina-the-wolf/_next/static/images/',
  // exportTrailingSlash: true,
  // exportPathMap: async function() {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/platina-the-wolf-and-the-heir-of-light': { page: '/platina-the-wolf-and-the-heir-of-light' }
  //   }
  //   // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  //   // const data = await res.json()
  //   // const shows = data.map(entry => entry.show)

  //   // shows.forEach(show => {
  //   //   paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } }
  //   // })

  //   return paths
  // }
}
