import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderRFC from './components/HeaderRFC';
import BaiTapDanLayout from './components/BaiTapDanLayOut/BaiTapDanLayout';
import DataBinding from './components/DataBinding/DataBinding';
function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayout /> */}
      <DataBinding/>
    </div>
  );
}

export default App;
