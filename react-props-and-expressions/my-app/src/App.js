import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton
      text = "I"
      color = 'blue'
      widthSize = {300}

      />
      <CustomButton
      text = "know"
      color = 'red'
      widthSize = {300}
       />
      <CustomButton
      text = "React!"
      color = 'green'
      widthSize = {300}

      />
    </div>
 );
}

export default App;
