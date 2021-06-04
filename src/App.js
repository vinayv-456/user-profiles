import React,{ useEffect, useState } from "react"
import axiosInstance from './api/client'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './Home/Home'
import Users from './Users/users'

function App(props) {

  const [users, setUsers] = useState([]);

    useEffect(()=>{
        axiosInstance.get('https://panorbit.in/api/users.json')
        .then((resp)=>{
          console.log(resp.data?.users);
          setUsers(()=>resp.data?.users);
        })
    }, []);
    
    

  return (
    <Router>
      <div>
        <Route exact path='/' 
          render={(props) => (
            <Users {...props} users={users}/>
          )}
        />
        <Route path="/home/:id" 
          render={(props) => (
            <Home {...props} users={users}/>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
