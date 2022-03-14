module.exports = {
  siteMetadata: {
      title: `Miguel Ocaña`,
      description:
        `Miguel Ocaña is a software developer/bioinformatician who builds all kinds of applications`,
      siteUrl: `https://miguelocanaacosta.com`,
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet", 
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
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
    },

  ]
};