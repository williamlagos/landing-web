import React from "react"
import Layout from "../components/layout.js"

class Main extends React.Component {
  render() {
    const flex = {
      height: "100%",
      width:  "100%",
      alignItems: "center",
      display: "flex"
    }
    return (
      <Layout>
        <div className="row" style={flex}>
          {/*<h1>Efforia Cloud</h1>*/}
        </div>
      </Layout>
    )
  }
}

export default Main
