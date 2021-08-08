import logo from './logo.svg';
import './App.css';
import ChildComponent from './child.js';

function App() {
  return (
    <div>
      <h1>안녕하세요!</h1>
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </div>
  );
}

export default App;
