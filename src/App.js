import './App.css';
import CounterTwo from './components/CounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';
// import PortalDemo from './components/PortalDemo';
// import ForwardParentInputRef from './components/ForwardParentInputRef';
// import FocusInput from './components/FocusInput';
// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import Table from './components/Table';
// import FragmentDemo from './components/FragmentDemo';
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import InlineCSS from './components/InlineCSS';
// import StyleSheet from './components/StyleSheet';
// import NameList from './components/NameList';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import Welcome from './components/Welcome';
// import './appStyle.css';
// import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">

      <CounterTwo render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />
      <CounterTwo render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} />

      {/* <User render={(islogedIn) => islogedIn ? 'Sandeep' : 'Guest'} />
      <HoverCounterTwo />
      <ClickCounterTwo /> */}

      {/* <ClickCounter name="Sandeep" />
      <HoverCounter name="Sandeep" /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <ForwardParentInputRef /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp/> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Message</h1>
      <h1 className={styles.success}>Message</h1> */}
      {/* <InlineCSS /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter/> */}
      {/* <EventBind /> */}
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
