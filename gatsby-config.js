module.exports = {
  siteMetadata: {
    siteUrl: `https://www.lovandwar.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            `Feature-Policy: accelerometer 'none';ambient-light-sensor 'none';autoplay 'none';camera 'none';encrypted-media 'none';fullscreen 'none';geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';picture-in-picture 'none';speaker 'none';vr 'none';`,
            `Referrer-Policy: no-referrer`
          ]
        }
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
