import React, { useState, useEffect } from "react";
import axios from 'axios';

function TableComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async() => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        }
        catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }
    };
    getData();
    },[]);

    if(loading) {
        <p>Loading...</p>
    }

    if(error){
        <p>Error: {error.message}</p>
    }

    if(!data){
        <p>No data!</p>
    }

    return(
        <div>
            <table border='1' cellPadding='10'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default TableComponent;