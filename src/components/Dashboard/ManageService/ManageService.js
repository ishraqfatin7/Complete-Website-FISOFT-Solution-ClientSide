import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [totalServices, setTotalServices] = useState([]);
    const [ isDeleted, setIsDeleted] = useState(false);
    console.log(totalServices);
    useEffect(() => {
        fetch('https://glacial-anchorage-43619.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTotalServices(data))
    }, [isDeleted])
    const handleDelete = (id) =>{
        fetch(`https://glacial-anchorage-43619.herokuapp.com/deleteProduct/${id}`,{
        method: 'DELETE',
        headers : { 
            'Content-Type': 'application/json'
           }
        })
        .then(res => console.log(res))
        .then(data => setIsDeleted(data));
    }
    return (
        <div>
            <div class="jumbotron">
                <h1 className="display-4">Manage Your Services Here</h1>
                <p className="lead">From Inventory</p>
                <hr className="my-4" />
                <p>Total Services : </p>
                {totalServices.map(data => (
                   <ul key ={data._id}> <li>{data.name} 
                   <br></br>
                    Price: {data.price}
                    <br/>
                    <button onClick={()=> handleDelete(data._id)} className="btn btn-danger">Delete Item</button>
                   </li></ul>
                ))}

                <p className="lead">
                    
                </p>
            </div>
        </div>
    );
};

export default ManageService;