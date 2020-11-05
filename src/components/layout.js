import React, { Component } from 'react'
import { Grommet, ResponsiveContext } from 'grommet'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../assets/css/normalize.css'
import '../assets/css/skeleton.css'
import './layout.css'

class Template extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    /* this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100); */
  }

  componentWillUnmount () {
    /* if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    } */
  }

  render () {
    const { children } = this.props
    return (
      <Grommet full={true}>
        <ResponsiveContext.Consumer>
          {() => children}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

Template.propTypes = {
  children: PropTypes.array
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: 'INCREMENT' }) }
}

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template)

export default Layout
