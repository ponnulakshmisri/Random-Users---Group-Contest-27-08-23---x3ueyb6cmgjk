import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";


const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    console.clear();

    function dataExtracting(data) {
        let extracted = data.map((item)=> {
            return item;
        })
        setItems(extracted);
    }
    
    useEffect(() => {
        let url = "https://randomuser.me/api/?results=10";
        
        setTimeout(()=> {
            setLoading(true);
        }, 3000)

        fetch(url).then(data=>data.json()).then(data=>{            
            dataExtracting(data.results);
        })


    }, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;
