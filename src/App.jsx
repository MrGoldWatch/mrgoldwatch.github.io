import React, { Component } from 'react'
import Navigation from './components/navigation2';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
// import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
// import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Redbubble from './components/redbubble';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    console.log("This is a Test");
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Features data={this.state.landingPageData.Features} />
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Redbubble/> 
        {/*<Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
