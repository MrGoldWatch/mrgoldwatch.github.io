import React, {useCallback, useEffect, useState} from "react";
import Navigation from './components/navigation2';
import Header from './components/header';
import About from './components/about';
import JsonData from './data.json';
import Features from './components/features';
// import Services from './components/services';
// import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
// import Team from './components/Team';
import Contact from './components/contact';
// import Redbubble from './components/redbubble';


function App() {
  const [landingPageData, setData] = useState([]);

  const getData = useCallback(() => {
    setData(JsonData)
  }, []);

  useEffect(() => {
    getData()
  }, [getData]);

  return (
    <div>
      <Navigation/>
      <Header data={landingPageData.Header}/>
      <About data={landingPageData.About}/>
      <Features data={landingPageData.Features} />
      {/* <Services data={this.state.landingPageData.Services} /> */}
      {/*<Gallery /> */}
      <Testimonials data={landingPageData.Testimonials} />
      {/*<Redbubble/>*/}
      {/*<Team data={this.state.landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default App;
