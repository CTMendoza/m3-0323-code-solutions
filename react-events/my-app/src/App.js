import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton onCustomClick={(text) => alert(`this is an alert for the ${text} button`)} text="Hello!" color= "#69DC9E" size={100}/>
      <CustomButton onCustomClick={(text) => alert(`this is an alert for the ${text} button`)} text="What's" color="#F42272" size={100} />
      <CustomButton onCustomClick={(text) => window.confirm(`this is a confirmation for the ${text} button`)} text="Up?" color="#C5D86D" size={100} />
    </div>
  );
}

export default App;
