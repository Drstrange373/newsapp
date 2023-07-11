// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News   from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEW_API

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />

          <NavBar/>
          <Routes>
            <Route exact path='/'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='home' country={'in'} category={'general'}/>} />
            <Route exact path='/genral'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='genral' country={'in'} category={'general'}/>} />
            <Route exact path='/science'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='science' country={'in'} category={'science'}/>} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='business' country={'in'} category={'business'}/>} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='entertainment' country={'in'} category={'entertainment'}/>} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='health' country={'in'} category={'health'}/>} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='sports' country={'in'} category={'sports'}/>} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pagesize={5} key='technology' country={'in'} category={'technology'}/>} />
          </Routes>
    
      </Router>
      </>
    )
  }
}
