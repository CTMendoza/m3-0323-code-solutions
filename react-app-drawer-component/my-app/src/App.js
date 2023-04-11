import logo from './logo.svg';
import './App.css';
import AppDrawer from './AppDrawer';
import MenuHeader from './AppDrawer';
import ItemsList from './AppDrawer';

const menuItems = [
  {id: 0, name: 'About'},
  {id: 1, name: 'Get Started'},
  {id: 2, name: 'Sign In'}
]

const menuHeader= <MenuHeader/>
const itemList =<ItemsList  itemArray={menuItems}/>
function App() {
  return (
    <AppDrawer/>
  );
}

export default App;
