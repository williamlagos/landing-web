import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import { Box, Image, Stack, Text, Heading, Meter, /* Collapsible, Button, */ ResponsiveContext } from 'grommet'
import Countdown from '../components/Countdown'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import Container from '../components/Container'
import Background from '../assets/img/backgrounds/bg-01.png'
import MohubLogo from '../assets/img/mohub_white.png'
// import landing01 from "../assets/img/video.png";
// import testimonial from "../assets/img/testimonial.png"
import shield from '../assets/img/shield.png'
import bulb from '../assets/img/bulb.png'
import lock from '../assets/img/lock.png'
// import gray from "../assets/img/gray.png"
import card from '../assets/img/card.png'
import sperry from '../assets/img/sperry.png'
import gift from '../assets/img/gift.png'
import bag from '../assets/img/bag.png'
import champ from '../assets/img/champ.png'
// import minus from '../assets/img/minus.png'
// import plus from '../assets/img/plus.png'
// import box1 from "../assets/img/box.png"
import triangle from '../assets/img/triangle.png'

/* const parallaxBackground = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}; */
if (typeof (window) === 'undefined') {
  global.window = {
    location: {
      search: ''
    }
  }
}

class SalesPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: window.location.search.slice(1).split('&')[0].split('=')[1] || '',
      toggledModal: false,
      collapsed1: false,
      collapsed2: false,
      collapsed3: false,
      collapsed4: false,
      collapsed5: false,
      collapsed6: false
    }
  }

  async timer (id) {
    // const res = await fetch(`https://www.mohub.com.br/wp-json/wp/v2/users/?slug=${id}`)
    // const lead = await res.json()
    const day = 1000 * 60 * 60 * 24
    const today = new Date()
    // const createdDay = new Date(lead.createdAt)
    const createdDay = new Date()
    const result = Math.round(today.getTime() - createdDay.getTime()) / (day)
    return result.toFixed(0)
  }

  async componentDidMount () {
    if (this.state.id.length === 0) {
      window.location = '/'
    } else {
      const response = await fetch('https://mohub.com.br/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: 'william', password: 'OSZiSE!FcK!YARL7N3oOPaih' })
      })
      const res = await response.json()
      // console.log(res)
      const rawResponse = await fetch(`https://mohub.com.br/wp-json/wp/v2/users/?slug=${this.state.id}&context=edit`, {
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
    /* const id = window.location.search.slice(1).split('&')[0].split('=')[1]
    if (id == null) {
      // window.location = '/';
    } else {
      const step = await this.timer(id)
      this.setState({ step })
      if (step <= 7) {
        // Videos page
        // window.location = '/videos'
      } else if (step >= 15) {
        // Blacklisted
        // window.location = '/'
      }
    } */
  }

  toggleModal (event) {
    event.preventDefault()
    this.setState({ toggledModal: true })
  }

  dismissModal () {
    this.setState({ toggledModal: false })
  }

  switchCollapsible1 () {
    this.setState({ collapsed1: !this.state.collapsed1 })
  }

  switchCollapsible2 () {
    this.setState({ collapsed2: !this.state.collapsed2 })
  }

  switchCollapsible3 () {
    this.setState({ collapsed3: !this.state.collapsed3 })
  }

  switchCollapsible4 () {
    this.setState({ collapsed4: !this.state.collapsed4 })
  }

  switchCollapsible5 () {
    this.setState({ collapsed5: !this.state.collapsed5 })
  }

  switchCollapsible6 () {
    this.setState({ collapsed6: !this.state.collapsed6 })
  }

  render () {
    const siteTitle = 'MoHub'
    return (
      <Layout>
        <Helmet title={siteTitle}>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
          <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"/>
        </Helmet>
        <Box id="cover2" justify="between" background={`url(${Background})`} fill={true}>
          <Container>
            <div className="row">
              <div className="offset-by-one ten columns">
                <div className="center spacing">
                  <img src={MohubLogo} alt="mohub logo"/>
                </div>
                <br/>
                <div className="white">
                  {/* <img className="fluid" src={landing01} alt="video 1"/> */}
                  <iframe title="embed1" id="ytplayer" type="text/html" width="100%" height="400"
                    src="http://www.youtube.com/embed/1_wVhO7OWTw/?autoplay=0"
                    frameBorder="0"/>
                  <br/>
                  <h5 className="center"> Falta pouco tempo para o carrinho fechar:</h5>
                  <div><Countdown/></div>
                  <Box align="center" pad="medium">
                    <br/>
                    <a className="btn" href="#investment" >
                              &nbsp; Fazer parte da MoHub
                    </a>
                  </Box>
                </div>
              </div>
            </div>
            {/* <div className="row top">
              <div className="four columns">
                <Image fit="contain" width="100%" src={testimonial}/>
                <iframe title="embed2" id="ytplayer" type="text/html" width="100%" height="200"
                  src="http://www.youtube.com/embed/u4tq9Ef5czw/?autoplay=0"
                  frameBorder="0"/>
              </div>
              <div className="four columns">
                <iframe title="embed3" id="ytplayer" type="text/html" width="100%" height="200"
                  src="http://www.youtube.com/embed/WVQe1ZE7FtU/?autoplay=0"
                  frameBorder="0"/>
              </div>
              <div className="four columns">
                <iframe title="embed4" id="ytplayer" type="text/html" width="100%" height="200"
                  src="http://www.youtube.com/embed/2Hjodq3JdoI/?autoplay=0"
                  frameBorder="0"/>
              </div>
              <div style={{ marginLeft: '0' }} className="four columns">
                <iframe title="embed5" id="ytplayer" type="text/html" width="100%" height="200"
                  src="http://www.youtube.com/embed/vB5nTx5fUXM/?autoplay=0"
                  frameBorder="0"/>
              </div>
              <div className="four columns">
                <iframe title="embed6" id="ytplayer" type="text/html" width="100%" height="200"
                  src="http://www.youtube.com/embed/Ei0no8s84EM/?autoplay=0"
                  frameBorder="0"/>
              </div>
              <div className="four columns">
                <iframe title="embed7" id="ytplayer" type="text/html" width="100%" height="200"
                  src="http://www.youtube.com/embed/fD41AwgC_xM/?autoplay=0"
                  frameBorder="0"/>
              </div>
          </div> */}
          </Container>
          <Box margin="large"></Box>
          <Box className="founder" margin={{ vertical: 'medium' }} height="large">
            <Stack anchor="bottom">
              <div className="row apresentation">
                <div className="six columns founder-left hidden-mobile">
                  <Heading level={2} margin={{ left: '20%', top: '330px' }} color="white">Sobre o <br/>Fundador</Heading>
                </div>
                <div className="six columns founder-right  hidden-mobile">
                  <Box margin={{ left: '195px' }} pad={{ top: '30px', right: '20px' }}>
                    <Heading level={1} color="white">Matheus <br/>Sperry</Heading>
                    <Text size="small" color="white">
                      Olá! Eu sou o Matheus Sperry, sou formado em engenharia civil pela PUCRS e pela ENISE (França), com certificação em urbanismo pela IHS (Holanda).
                      Eu deixei tudo isso de lado porque eu tenho a missão de ajudar o máximo de pessoas a usar todo o seu potencial para iniciar o próprio negócio e alcançar liberdade financeira, tempo livre e qualidade de vida.
                      Vamos juntos nessa!
                    </Text>
                  </Box>
                </div>
              </div>
              <Image className="the-founder" src={sperry}/>
            </Stack>
            <Box pad="large" className="founder-bottom hidden-desktop">
              <Heading level={1} color="white">Matheus <br/>Sperry</Heading>
              <Text size="small" color="white">
                  Olá! Eu sou o Matheus Sperry, sou formado em engenharia civil pela PUCRS e pela ENISE (França), com certificação em urbanismo pela IHS (Holanda).
                  Eu deixei tudo isso de lado porque eu tenho a missão de ajudar o máximo de pessoas a usar todo o seu potencial para iniciar o próprio negócio e alcançar liberdade financeira, tempo livre e qualidade de vida.
                  Vamos juntos nessa!
              </Text>
            </Box>
          </Box>
          <Box margin="large"/>
          <Container>
            <ResponsiveContext.Consumer>
              {(size) => (
                <Box id="shadow" align="center" pad="large" margin={{ vertical: 'medium' }}>
                  <Box direction="row-responsive" gap="medium">
                    <Box align="center">
                      <Image size={size} src={lock}/>
                      <Heading margin={size} size={size} textAlign="center" level={4}>Acesso Imediato</Heading>
                    </Box>
                    <Box align="center">
                      <Image size={size} src={bulb}/>
                      <Heading margin={size} size={size} textAlign="center" level={4}>Mentoria Exclusiva</Heading>
                    </Box>
                    <Box align="center">
                      <Image fit="contain" src={shield}/>
                      <Heading margin={size} size={size} textAlign="center" level={4}>Investimento 100% seguro</Heading>
                    </Box>
                  </Box>
                  <br/>
                  <Box margin={size}>
                    <a className="btn" href="#investment" >
                        &nbsp; Fazer parte da MoHub
                    </a>
                  </Box>
                </Box>
              )}
            </ResponsiveContext.Consumer>
            <Box id="sales" margin={{ vertical: 'medium' }}>
              <Heading level={2} className="uppercase">O que você ganha ao entrar para a MoHub?</Heading>
              <div className="row">
                <Stack className="six columns blue" anchor="top-left">
                  <Heading className="title" level={2}>O Seu Ponto de Partida</Heading>
                  <Box pad={{ vertical: '36px' }} className="blue-gradient">
                    <Heading textAlign="center" level={3}>Box 1</Heading>
                  </Box>
                  <Box className="text">
                    <Text size="small">
                        Análise sobre a sua situação pessoal e financeira atual.
                    </Text>
                  </Box>
                  <Box margin={{ left: '20px', top: '220px' }} anchor="center">
                    <Heading className="risked" level={1}>
                        R$ 199,97
                    </Heading>
                  </Box>
                </Stack>
                <Stack className="six columns running" anchor="top-left">
                  <Heading className="title" level={2}>O seu destino</Heading>
                  <Box pad={{ vertical: '36px' }} className="blue-gradient">
                    <Heading textAlign="center" level={3}>Box 2</Heading>
                  </Box>
                  <Box className="text">
                    <Text size="small">
                        Ferramentas práticas para te ajudar a definir qual a direção que você deve seguir.
                    </Text>
                  </Box>
                  <Box margin={{ left: '20px', top: '220px' }} anchor="center">
                    <Heading className="risked" level={1}>
                        R$ 399,97
                    </Heading>
                  </Box>
                </Stack>
              </div>
              <div className="row" style={{ marginTop: '40px' }}>
                <Stack className="twelve columns mountain" anchor="top-left">
                  <Box pad={{ vertical: '36px' }} className="blue-gradient">
                    <Heading textAlign="center" level={3}>Box 3</Heading>
                  </Box>
                  <Box className="text" width="70%">
                    <Heading level={2}>De Onde Vem o Dinheiro</Heading>
                    <Text size="small">
                        De onde vem o dinheiro? O que é dinheiro? Nesse módulo vamos mostrar chaves que podem te ajudar a ser mais próspero.
                    </Text>
                  </Box>
                  <Box margin={{ left: '220px', top: '260px' }} anchor="center">
                    <Heading className="risked" level={1}>
                        R$ 199,97
                    </Heading>
                  </Box>
                </Stack>
              </div>
              <div className="row" style={{ margin: '20px 0px' }}>
                <Stack className="four columns blue-high" anchor="top-left">
                  <Box pad={{ vertical: '36px' }} className="blue-gradient">
                    <Heading textAlign="center" level={3}>Box 4</Heading>
                  </Box>
                  <Box className="title-under">
                    <Heading level={2}>MoBot</Heading>
                    <Text size="small">
                        Apresentação do robô que vai te acompanhar no caminho da prosperidade. O MoBot otimiza operações de marketing te dando mais tempo para focar no que é mais importante.
                    </Text>
                  </Box>
                  <Box margin={{ left: '20px', top: '450px' }} anchor="center">
                    <Heading className="risked" level={2}>
                        R$ 1.999,97
                    </Heading>
                  </Box>
                </Stack>
                <Stack className="four columns blue-high" anchor="top-left">
                  <Box pad={{ vertical: '36px' }} className="blue-gradient">
                    <Heading textAlign="center" level={3}>Box 5</Heading>
                  </Box>
                  <Box className="title-under">
                    <Heading level={2}>Escola de Negócios</Heading>
                    <Text size="small">
                        Escola com o ensino prático das habilidades necessárias para a criação do seu próprio negócio.
                        Não se trata de faculdade, porque faculdade é teórico, aqui se bota a mão na massa!
                    </Text>
                  </Box>
                  <Box margin={{ left: '20px', top: '450px' }} anchor="center">
                    <Heading className="risked" level={2}>
                        R$ 999,97
                    </Heading>
                  </Box>
                </Stack>
                <Stack className="four columns blue-high" anchor="top-left">
                  <Box pad={{ vertical: '36px' }} className="blue-gradient">
                    <Heading textAlign="center" level={3}>Box 6</Heading>
                  </Box>
                  <Box className="title-under">
                    <Heading level={2}>O Seu Próprio Negócio</Heading>
                    <Text size="small">
                        O seu objetivo final deve ser construir o seu próprio negócio, porque nele que você colocará sua paixão e o seu sonho.
                        Vamos te ajudar a dar esse passo na sua vida para que entendas que não estás sozinho.
                    </Text>
                  </Box>
                  <Box margin={{ left: '20px', top: '450px' }} anchor="center">
                    <Heading className="risked" level={2}>
                        R$ 999,97
                    </Heading>
                  </Box>
                </Stack>
              </div>
            </Box>
            <ResponsiveContext.Consumer>
              {(size) => (
                <>
                  <Box pad="medium" direction={size === 'small' ? 'column' : 'row'} background="#42434e" fill="horizontal">
                    <Box className={size === 'small' ? 'bottom-gradient' : 'right-gradient'} alignSelf="center" pad="medium" basis="30%">
                      <Image margin="medium" fit="contain" src={gift}/>
                      <Heading textAlign="center">2 BÔNUS</Heading>
                      <Heading textAlign="center" className="risked" level={2}>
                        R$ 399,94
                      </Heading>
                    </Box>
                    <Box alignSelf="center" basis="70%">
                      <Box alignSelf="center" direction="column">
                        <Box alignSelf="center" basis="30%">
                          <Image margin="small" fit="contain" src={champ}/>
                          <Heading textAlign="center" level={2}>Bônus 1</Heading>
                        </Box>
                        <Box pad="medium" basis="70%">
                          <Heading level={2} textAlign="center">Como Sair das Dívidas</Heading>
                          <Text size="small" textAlign="center">
                            Às vezes nos colocamos em situações indevidas. Vamos explorar soluções para corrigir essas situações para estarmos limpos.
                          </Text>
                        </Box>
                      </Box>
                      <Box alignSelf="center" direction="column">
                        <Box alignSelf="center" basis="30%">
                          <Image margin="small" fit="contain" src={bag}/>
                          <Heading textAlign="center" level={2}>Bônus 2</Heading>
                        </Box>
                        <Box pad="medium" basis="70%">
                          <Heading level={2} textAlign="center">Dicas de Renda Extra</Heading>
                          <Text size="small" textAlign="center">
                            Nesse bônus vamos te mostrar outras formas de se fazer renda, porque depender de uma só renda é um grande risco.
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box margin="medium"></Box>
                </>
              )}
            </ResponsiveContext.Consumer>
          </Container>
          <Container>
            <div className="row top">
              <div className="twelve columns center">
                <Heading>PESSOAS JÁ INDICADAS</Heading>
                <Meter
                  size='large'
                  values={[{
                    value: 10,
                    label: 'one',
                    onClick: () => {}
                  }]}
                  thickness='large'
                  aria-label="meter"
                  round
                />
              </div>
            </div>
            <Box margin='large'/>
          </Container>
          {/* <Image margin={{ "vertical": "medium" }} src={box1}/> */}
          <Box id="investment" direction="row" justify="center" className="cover2" fill={true}>
            <ResponsiveContext.Consumer>
              {(size) => (
                <Box background="white" alignSelf="start" basis={size === 'small' ? '1' : '1/3'}>
                  <Box className="blue-bar" background="#0266ae" pad={{ top: '15px' }}>
                    <Stack anchor="bottom">
                      <Heading textAlign="center" level={2}>MELHOR INVESTIMENTO</Heading>
                      <Image margin={{ bottom: '-20px' }} src={triangle}/>
                    </Stack>
                  </Box>
                  <Box pad="large">
                    <Heading textAlign="center" level={2}>Plataforma Mohub</Heading>
                    <Text textAlign="center">Todos os 6 boxes</Text>
                    <Text textAlign="center">Todos os 2 bônus</Text>
                    <Text textAlign="center">6h de consultoria online</Text>
                    <Text textAlign="center">Mohub bot</Text>
                    <Box border={{ color: '#e1e1e7' }} margin="small"/>
                    <Heading textAlign="center" color="#0266ae">R$ 55,00</Heading>
                    <a className="btn btn-block" href="#investment">
                      Fazer parte da MoHub
                    </a>
                    <br/>
                    <Image fit="contain" src={card}/>
                  </Box>
                </Box>
              )}
            </ResponsiveContext.Consumer>
          </Box>
          {/* <Container>
            <Box margin="medium"></Box>
            <Box>
              <Heading>PERGUNTAS FREQUENTES</Heading>
              <Stack className="stack" anchor="right">
                <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible1()} label='Será que isso funciona pra mim?'/>
                <Image className="gray-symbol" onClick={(e) => this.switchCollapsible1()} pad="medium" size="contain" src={this.state.collapsed1 ? minus : plus}/>
              </Stack>
              <Collapsible direction="vertical" open={this.state.collapsed1}>
                <Box pad="medium" background="#e1e1e7">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                  </Text>
                </Box>
              </Collapsible>
              <Stack className="stack" anchor="right">
                <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible2()} label='Como terei acesso aos Boxes?'/>
                <Image className="gray-symbol" onClick={(e) => this.switchCollapsible2()} pad="medium" size="contain" src={this.state.collapsed2 ? minus : plus}/>
              </Stack>
              <Collapsible direction="vertical" open={this.state.collapsed2}>
                <Box pad="medium" background="#e1e1e7">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                  </Text>
                </Box>
              </Collapsible>
              <Stack className="stack" anchor="right">
                <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible3()} label='Há algum custo de renovação ou pagamento mensal?'/>
                <Image className="gray-symbol" onClick={(e) => this.switchCollapsible3()} pad="medium" size="contain" src={this.state.collapsed3 ? minus : plus}/>
              </Stack>
              <Collapsible direction="vertical" open={this.state.collapsed3}>
                <Box pad="medium" background="#e1e1e7">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                  </Text>
                </Box>
              </Collapsible>
              <Stack className="stack" anchor="right">
                <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible4()} label='O conteúdo da Mohub é todo em vídeo?'/>
                <Image className="gray-symbol" onClick={(e) => this.switchCollapsible4()} pad="medium" size="contain" src={this.state.collapsed4 ? minus : plus}/>
              </Stack>
              <Collapsible direction="vertical" open={this.state.collapsed4}>
                <Box pad="medium" background="#e1e1e7">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                  </Text>
                </Box>
              </Collapsible>
              <Stack className="stack" anchor="right">
                <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible5()} label='Quando os boxes serão liberados?'/>
                <Image className="gray-symbol" onClick={(e) => this.switchCollapsible5()} pad="medium" size="contain" src={this.state.collapsed5 ? minus : plus}/>
              </Stack>
              <Collapsible direction="vertical" open={this.state.collapsed5}>
                <Box pad="medium" background="#e1e1e7">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                  </Text>
                </Box>
              </Collapsible>
              <Stack className="stack" anchor="right">
                <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible6()} label='Por que Mohub?'/>
                <Image className="gray-symbol" onClick={(e) => this.switchCollapsible6()} pad="medium" size="contain" src={this.state.collapsed6 ? minus : plus}/>
              </Stack>
              <Collapsible direction="vertical" open={this.state.collapsed6}>
                <Box pad="medium" background="#e1e1e7">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                  </Text>
                </Box>
              </Collapsible>
            </Box>
            <ResponsiveContext.Consumer>
              {(size) => (
                <Box id="shadow" align="center" pad="large" margin={{ vertical: 'medium' }}>
                  <Box direction="row-responsive" gap="medium">
                    <Box align="center">
                      <Image size={size} src={lock}/>
                      <Heading margin={size} size={size} textAlign="center" level={4}>Acesso Imediato</Heading>
                    </Box>
                    <Box align="center">
                      <Image size={size} src={bulb}/>
                      <Heading margin={size} size={size} textAlign="center" level={4}>Mentoria Exclusiva</Heading>
                    </Box>
                    <Box align="center">
                      <Image fit="contain" src={shield}/>
                      <Heading margin={size} size={size} textAlign="center" level={4}>Investimento 100% seguro</Heading>
                    </Box>
                  </Box>
                  <br/>
                  <Box margin={size}>
                    <a className="btn" href="#investment" >
                        &nbsp; Fazer parte da MoHub
                    </a>
                  </Box>
                </Box>
              )}
            </ResponsiveContext.Consumer>
          </Container> */}
          <Box><Footer/></Box>
        </Box>
      </Layout>
    )
  }
}

export default SalesPage
