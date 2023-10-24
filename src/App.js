import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Content } from './components/Content';
import { Webapp } from './components/Webapp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Webapp></Webapp>
      <Projects></Projects>
      <Skills />
    </div>
  );
}

export default App;