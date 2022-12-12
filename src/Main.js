import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './App';
// import Tournament from './components/tournament';
// import Pitch from './components/pitch';
// import Test from './components/video';


function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<App/>}></Route>
      {/*<Route path="/dev"><Test/></Route>*/}
      {/*<Route path="/pitch"><Pitch/></Route>*/}
    </Routes>
  );
}

export default Main;
