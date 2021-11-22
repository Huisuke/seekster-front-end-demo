import React from 'react';

import MainNavbar from './components/navbars/main-navbar';
import SubNavbar from './components/navbars/sub-navbar';
import Home from './Pages/home';
import CreateItem from './Pages/create-item';
import DeleteItem from './Pages/delete-item';
import EditItem from './Pages/edit-item';

import {
  BrowserRouter,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";

import './App.css';
import ListItem from './Pages/list-item';

const routes = [{
  path: '/create',
  label: 'Create Item',
  component: 'CreateItem'
},{
  path: '/edit',
  label: 'Edit Item',
  component: 'EditItem'
},{
  path: '/delete',
  label: 'Delete Item',
  component: 'DeleteItem'
},{
  path: '/users',
  label: 'ItemList',
  component: 'ItemList'
}];

function App() {

  return (
    <div className="App">
      <BrowserRouter>      
        <MainNavbar label={'seekster'} />
        <SubNavbar routes={routes} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/delete" element={<DeleteItem />} />
          <Route path="/edit" element={<EditItem />} />
          <Route path="/users" element={<ListItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
