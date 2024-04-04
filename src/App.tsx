import React from 'react';
import DashboardIndexPage from './dashboard/components/pages/DashboardIndexPage';
import NavBar from './common/components/molecules/Navbar';
import { Route, Routes } from 'react-router-dom';
import TableIndexPage from './table/components/pages/TableIndexPage';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className='container'>
        <Routes>
          <Route path="/" element={<DashboardIndexPage/>} />
          <Route path="/table" element={<TableIndexPage/>} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
