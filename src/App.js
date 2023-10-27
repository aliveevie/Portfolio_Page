import './App.css';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Content } from './components/Content';
import { Webapp } from './components/Webapp';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Achievement } from './components/Achievement';



function App() {

  
  return (
    <div className="App">
        <Header/>
        <Content></Content>
        <Services/>
        <Webapp/>
        <Projects/>
        <Achievement />
        <Skills/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;