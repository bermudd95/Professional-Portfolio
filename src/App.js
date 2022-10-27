import './App.css';
import Header from './Components/Header';
import Description from './Components/Description';
import Projects from './Components/Projects';
import ContactPage from './Components/Contact-page';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='bg-secondary'>
      <Header/> 
      <Description id="description" />
      <Projects id="work" />
      <ContactPage id="contact" />
      <Footer/>
    </div>
  );
}

export default App;
