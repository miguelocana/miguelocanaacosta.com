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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-RBJ02SM4TY",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      },
    },
  ]
};