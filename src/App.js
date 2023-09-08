import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Header></Header>
    </div>
  );
}

export default App;