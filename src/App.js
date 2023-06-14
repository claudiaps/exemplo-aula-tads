import './App.css';
import List from './components/List';
import FormattedText from './components/FormattedText';
import Card from './components/Card';

const list1 = ["Primeiro item", "Segundo item", "Terceiro item", "Quarto item"]
const list2 = ["Banana", "Tomate"]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Card bgColor="#f2f">
          <p>Texto passado por children</p>
          <FormattedText label="Nome" value="Claudia"/>
        </Card>
        <List items={list1}/>
        <List items={list2}/>
        <FormattedText label="Idade" value={25}/>
      </header>
    </div>
  );
}

export default App;
