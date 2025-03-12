import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <Router>

        <Header/>

         


   
        <Footer/>

     </Router>



    </div>
  );
}

export default App;
