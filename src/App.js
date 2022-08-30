import React from 'react';
import UserDetails from './Components/UserDetails';
import Header from './Components/Header';
import Skills from './Components/Skills';
import About from './Components/About';
import Protfolio from './Components/Portfolio';
import Footer from './Components/Footer';

class App extends React.Component{

	render(){
		return(
    <>
      <Header/>
      <About/>
      <Skills/>
      <Protfolio/>
      <Footer email="mohamedgyaseen@gmail.com" number="01020624331"/>
		</>
		)
	}
}

export default App;