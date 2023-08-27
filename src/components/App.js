import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

function App() {
  const [loading, setLoading] = useState(true);
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
   
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
       
        const firstNames = data.results.map((user) => user.name.first);
        setUserNames(firstNames);

      
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <div>
     
      {loading ? <div id="loading">Loading....</div> : <Users userNames={userNames} />}
    </div>
  );
}

export default App;
