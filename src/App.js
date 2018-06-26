import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Education from './Components/Education'
import Work from './Components/Work'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

import 'react-image-gallery/styles/css/image-gallery.css'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        foo : 'bar',
        resumeData:{}
      }

  }
  getResumeData(){
    $.ajax({
        url:'resumeData.json',
        dataType: 'json',
        cache: false,
        success: function(data){
          // console.log('json', data.portfolio.projects)
          this.setState({resumeData: data});
        }.bind(this),
        error: function (xhr, status, err) {
            console.log(err);
        }
    })
  }
  componentDidMount(){
    this.getResumeData();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <Header data={this.state.resumeData.main}/>
            <About data={this.state.resumeData.main}/>
            <Work data={this.state.resumeData.resume}/>
            <Education data={this.state.resumeData.resume}/>
            <Portfolio data={this.state.resumeData.portfolio}/>
            <Contact data={this.state.resumeData.main}/>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
