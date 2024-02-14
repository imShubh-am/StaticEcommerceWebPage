import './App.css';
import NavigatinBar from './Components/Navbar'
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavigatinBar/>
      <HomePage/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
