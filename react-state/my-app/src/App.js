import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text='Some button' color ='#F72585' />
      <ToggleButton text='Another button' color='#6A8E7F' />
      <ToggleButton text='Again, some button' color='#E29578' />
    </div>
  );
}

export default App;
