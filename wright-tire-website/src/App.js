import logo from './logo.svg';
import './App.css';
import { WriteUpContainer } from './components/WriteUpContainer/WriteUpContainer';
import { WriteUpGlobalProvider } from './components/WriteUpGlobalContext/WriteUpGlobalContext';

function App() {
  return (
    <WriteUpGlobalProvider>
      <WriteUpContainer>

      </WriteUpContainer>
    </WriteUpGlobalProvider>

  );
}

export default App;
