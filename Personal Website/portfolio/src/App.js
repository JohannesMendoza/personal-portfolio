import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import NavBar from './components/navbar'
import AboutMe from './components/aboutme'
import Body from './components/body'
import { HashLoader } from 'react-spinners';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rerender: false
    }
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  }
  render() {
    setTimeout(() => { this.setState({ loading: false }) }, 3000)
    //setTimeout(() => { this.forceUpdate() }, 4000)
    return (
      <div className="App">
        {
          this.state.loading ?
            <div><div className="loadingScreen"></div><HashLoader className="loading" css={{ backgroundColor: "#1D1D1D", zIndex: 102, position: "fixed", top: "50%", left: "50%", right: "50%", bottom: "50%", transform: "translate(-50%, -50%)" }} size={500} color={"#0059ff"} loading={this.state.loading} />><NavBar />
              <Header />
              <Body /></div> :
            <div><NavBar />
              <Header />
              <Body /></div>
        }
      </div>
    )
  }
}

export default App;
