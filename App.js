import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <h1>VOSBESOINS-SERVICES</h1>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Votre Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Votre message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    <h6>VOS BESOINS NOS MISSIONS</h6>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
