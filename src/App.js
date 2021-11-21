import Header from './components/headers/header';
import SideBar from './components/navigations/sidebar';

import './App.css';

const itemList = [{
  path: '/create',
  label: 'Create Item',
  component: 'CreateItem'
},{
  path: '/update',
  label: 'Update Item',
  component: 'UpdateItem'
},{
  path: '/delete',
  label: 'Delete Item',
  component: 'DeleteItem'
},{
  path: '/home',
  label: 'ItemList',
  component: 'ItemList'
}];

function App() {

  return (
    <div className="App">
      <Header label={'seekster'} />
      <SideBar itemList={itemList} />
    </div>
  );
}

export default App;
