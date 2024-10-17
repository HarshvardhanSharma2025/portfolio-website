import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from './components/Header';
import SideIcons from './components/SideIcons';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="full-body">
      <Header></Header>
      <Introduction></Introduction>
      <SideIcons></SideIcons>
    </div>
  );
}

export default App;
