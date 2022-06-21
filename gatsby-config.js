module.exports = {
  siteMetadata: {
      title: `Miguel Ocaña`,
      description:
        `A simple portfolio based on Github's styles built by Miguel Ocaña.`,
      siteUrl: `https://miguelocanaacosta.com`,
      author: {
        name: `Miguel Ocaña`,
        summary: `a software developer/bioinformatician who builds all kinds of applications`
      }
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RBJ02SM4TY", // Google Analytics / GA
        ],
      },
      pluginConfig: {
        head: true
      },
    }
  ]
};