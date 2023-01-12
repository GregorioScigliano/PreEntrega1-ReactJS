import './App.css';
import './components/Titulo'
import './components/NavBar'
import './components/ItemListContainer';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import Titulo from './components/Titulo';

function App() {
  return (
    <body className="App">
        <Titulo></Titulo>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
    </body>
  );
}

export default App;
