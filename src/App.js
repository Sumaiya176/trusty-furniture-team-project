import logo from './logo.svg';
import './App.css';
import DemoProducts from './components/DemoProducts/DemoProducts';
import LatestBlog from './components/DemoProducts/LatestBlog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <DemoProducts></DemoProducts>
      <LatestBlog></LatestBlog>
      <Footer></Footer>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
