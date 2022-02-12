import logo from './logo.svg';
import './App.css';
import { WriteUpContainer } from './components/WriteUpContainer/WriteUpContainer';
import { WriteUpListProvider } from './components/WriteUpListContext/WriteUpListContext';
import { WriteUpActiveProvider } from './components/WriteUpActiveContext/WriteUpActiveContext';

function App() {
  return (
    <WriteUpListProvider>
      <WriteUpActiveProvider>
        <WriteUpContainer>

        </WriteUpContainer>
      </WriteUpActiveProvider>
    </WriteUpListProvider>

  );
}

export default App;
