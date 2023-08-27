import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then((response)=>response.json())
        .then((data)=>{
            const firstname=data.results.map((user)=>user.name.first);
            setItems(firstname);
            setTimeout(()=>{
                setLoading(false);
            },3000);
        });
    }, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;
