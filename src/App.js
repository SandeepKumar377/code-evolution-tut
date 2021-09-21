import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Sandeep" heroName="Salman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Sendy" heroName="Ajay">
        <button>Action</button>
      </Greet >
      <Greet name="Deep" heroName="Sanjay"/>
      <Welcome name="Sandeep"  heroName="Salman"/>
      <Welcome name="Ajay" heroName="Ajay"/>
      <Welcome name="Sanjay" heroName="Sanjay"/>
      <Hello />
    </div>
  );
}

export default App;
