import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      <ClassClick />
      {/* <Counter/> */}

      {/* <Message /> */}

      {/* <Greet name="Sandeep" heroName="Salman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Sendy" heroName="Ajay">
        <button>Action</button>
      </Greet > */}
      {/* <Welcome name="Sandeep"  heroName="Salman"/> */}
      {/* <Greet name="Deep" heroName="Sanjay"/>
      <Welcome name="Ajay" heroName="Ajay"/>
      <Welcome name="Sanjay" heroName="Sanjay"/>
      <Hello /> */}
    </div>
  );
}

export default App;
