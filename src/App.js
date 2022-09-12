import './App.css';
import  Search  from './Search';

function App() {
  return ( 
   <>
    <div className="App">
      <header>
        <h3> Books with Hooks</h3>  
        <ul className="menu">
          <li>Home</li>
          <li>Search</li>
          </ul>
      </header>
  <Search/>
</div>
   </>
  );
}

export default App;
