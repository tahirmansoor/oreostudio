import logo from './logo.svg';
import './App.css';
import AppRouter from './Config/Router';
import Slider from './Containers/Slider';
import AboutUs from './Containers/About';
import Services from './Containers/Services';
import Apps from './Containers/Apps';
import RecentProjects from './Containers/RecentProjects';
import Footer from './Containers/Footer';
import Estate from './Containers/Estate';
import Prac from './Containers/Prac';



function App() {
  return (
      <>  
            <AppRouter /> 
            <Slider />
            <AboutUs name="tahir mans" />
            <Services />
            <Apps />  
            <Estate />
            <RecentProjects />     
            <Footer />
            <Prac name='ABOUT THE VALUE' />         
      </>

  );

}

export default App;
