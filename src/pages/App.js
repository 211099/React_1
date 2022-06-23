import '../styles/App.css';
import Main from "../components/Main"
import Header from '../components/Header';


function App() {
  return (
    <>
    <div className='Container-App'>
      <div className='Container-Header-App'><Header/></div>
      <div className='Container-Main-App'><Main/></div>
    </div>
      
    </>
  );
}

export default App;
