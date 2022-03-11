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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "markdown-pages",
        "path": `${__dirname}/src/markdown-pages/`
      }
    },
    "gatsby-transformer-remark"
]
};