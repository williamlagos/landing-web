import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from "gatsby"
import { Box } from 'grommet'

import Layout from '../components/layout'
// import Countdown from '../components/Countdown';
import Footer from '../components/Footer'

// import landing01 from "../assets/img/video.png";
import landinglogo from '../assets/img/landing_white.png'
import Background from '../assets/img/backgrounds/bg-01.png'

if (typeof (window) === 'undefined') {
  global.window = {
    location: {
      search: ''
    }
  }
}

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: window.location.search.slice(1).split('&')[0].split('=')[1] || ''
    }
  }

  async componentDidMount () {
    if (this.state.id.length === 0) {
      window.location = '/'
    } else {
      const response = await fetch('https://landing.com.br/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: 'william', password: 'OSZiSE!FcK!YARL7N3oOPaih' })
      })
      const res = await response.json()
      // console.log(res)
      const rawResponse = await fetch(`https://landing.com.br/wp-json/wp/v2/users/?slug=${this.state.id}&context=edit`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${res.token}`
        }
      })
      const users = await rawResponse.json()
      if (users.length === 0) {
        window.location = '/'
      } else {
        const u = users[0]
        console.log(u)
      }
    }
    /* const id = this.state.id
    if (id == null) {
      // window.location = '/'
    } else {
      console.log(window.localStorage.getItem(id))
    } */
  }

  render () {
    const siteTitle = 'Landing'
    // const title = "Landing";
    // const summary = "Uma post teste para o Mohub";
    // const url = "https://www.facebook.com/somoslanding/videos/2562218477149895/";
    // const image = "https://efforia.ams3.digitaloceanspaces.com/fretefacil/5b75d00d5ab5c60da7116276_bg.png"
    /* &p[images][0]=${image}' */
    // let shareUrl = `http://www.facebook.com/sharer.php?s=100&p[title]=${title}&p[summary]=${summary}&p[url]=${url},'sharer','toolbar=0,status=0,width=580,height=325`;
    // const shareUrl = `https://www.facebook.com/sharer.php?u=${url}`

    return (
      <Layout>
        <Helmet title={siteTitle}>
          <script src="//widget.manychat.com/665860060544739.js" async="async"></script>
          <meta property="og:description" content="Your entertaining and descriptive copy here, if your meta description is good, use it." />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
          <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"/>
        </Helmet>
        <Box id="cover" justify="between" background={`url(${Background})`} fill={true}>
          <div className="page">
            <div className="container">
              <div className="row">
                <div className="offset-by-one ten columns">
                  <div className="center spacing">
                    <img src={landinglogo} alt="landing logo"/>
                  </div>
                  <div className="white">
                    <div className="red">Importante! Siga as instruções abaixo</div>
                    {/* <div className="fluid video-container">
                      <iframe title="embed1" id="ytplayer" className="main-player" type="text/html" width="100%" height="100%"
                        src="http://www.youtube.com/embed/fa5p19APgd8/?autoplay=0"
                        frameBorder="0"/>
                    </div> */}
                    {/* <div style={{ minHeight: '100px' }}></div> */}
                    <div className="row top">
                      <h1 className="two columns big">1</h1>
                      <div className="ten columns">
                        <h4 className="uppercase">Ative a notificação via Facebook</h4>
                        <p>Clique abaixo e cadastre-se para receber os avisos das aulas e atualizações do Workshop diretamente no seu Facebook Messenger.</p>
                        <div style={{ display: 'flex' }} className="mcwidget-embed" data-widget-id="6962601"></div>
                        {/* <a id="fb-share"
                                        className="btn-facebook"
                                        style={{ textDecoration: 'none' }}
                                        type="icon_link"
                                        onClick={() => window.open(shareUrl)}
                                        href="javascript: void(0)">
                                        <i class="fab fa-facebook-square"></i>
                                        &nbsp; Ative seu Facebook
                                      </a> */}
                      </div>
                    </div>
                    <hr/>
                    <div className="row top big-bottom">
                      <h1 className="two columns big">2</h1>
                      <div className="ten columns">
                        <h4 className="uppercase">Confirme o seu e-mail</h4>
                        <p>Clique abaixo e cadastre-se para receber os avisos das aulas e atualizações do Workshop diretamente no seu e-mail correspondente.</p>
                        <div className="buttons">
                          <a href="https://www.outlook.com/" target="_blank" rel="noopener noreferrer" className="btn-mail outlook">Outlook</a>
                          <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="btn-mail gmail">Gmail</a>
                          <a href="https://mail.yahoo.com/" target="_blank" rel="noopener noreferrer" className="btn-mail yahoo">Yahoo</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </Box>
      </Layout>
    )
  }
}

export default IndexPage
