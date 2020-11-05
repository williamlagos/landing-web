import React from 'react'
import MohubGray from '../assets/img/mohub_gray.png'

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="copyright"> © MoHub. Todos os direitos reservados. </div>
          <div> <img className="copyright-logo" alt="Copyright Logo" src={MohubGray}/> </div>
        </div>
      </footer>
    )
  }
}

export default Footer
