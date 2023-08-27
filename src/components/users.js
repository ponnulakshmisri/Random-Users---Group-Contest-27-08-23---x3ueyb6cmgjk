import React from "react";

function Users({ isLoading, items }) {
    console.clear();


    return (
        <div className="Users">
        {!isLoading ?
            (<div id="loading">
                "Loading...."
            </div>)        
        :(
            items.map((user, index)=>(
                <div key={index} className="user">
                    {user.name.first}
                </div>
            ))
        )}
        </div>
        );
}

export default Users;
