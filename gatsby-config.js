module.exports = {
  siteMetadata: {
      title: `Miguel Ocaña`,
    siteUrl: `https://www.miguelocanaacosta.com`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet", 
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "markdown-pages",
        "path": `${__dirname}/src/markdown-pages/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'miguelocanaacosta',
        short_name: 'miguelocana',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    }
  ]
};