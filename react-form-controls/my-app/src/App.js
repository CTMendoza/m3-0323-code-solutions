import logo from './logo.svg';
import './App.css';
import UncontrolledForm  from './RegistrationFormUncontrolled';
import ControlledForm from './ResgistrationFormControlled';

function App() {
  return (
    <div className="App">
      <h1>Uncontrolled Form</h1>
      <UncontrolledForm/>
      <h1>Controlled Form</h1>
      <ControlledForm/>
    </div>
  );
}

export default App;
