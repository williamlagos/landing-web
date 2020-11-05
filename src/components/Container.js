import React from 'react'
import PropTypes from 'prop-types'

class Container extends React.Component {
  render () {
    const { children } = this.props
    return (<div className="container">{children}</div>)
  }
}

Container.propTypes = {
  children: PropTypes.object
}

export default Container
