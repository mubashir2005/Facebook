import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import Widgets from "./Widgets";
import Login from "./Login.jsx"
import {useStateValue} from "./StateProvider";

function App() {
  // eslint-disable-next-line no-unused-vars
  const value = useStateValue(); 
  const [{user},]

  return (
      //BEM naming convention
    <div className="app">

        {!user ? <Login/> : (
          <>
            <Header />


            <div className="app__body">

            <Sidebar />
            <Feed />
            <Widgets/>

            </div>
            </>
        )}




    </div>
  );
}

export default App;
