import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Kuldeep" heroName="Batman">
        {/* <p>
          This is children props
        </p> */}
      </Greet>
      <Greet name="Bala" heroName="Wanda">
        <button>Action</button>
      </Greet>
      <Greet name="Shivani" heroName="Wonder Woman"></Greet>
      <Welcome name="Kuldeep" heroName="Batman"></Welcome>
      <Welcome name="Bala" heroName="Wanda"></Welcome>
      <Welcome name="Shivani" heroName="Wonder Woman"></Welcome>
      <Hello></Hello>
    </div>
  );
}

export default App;
