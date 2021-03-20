import React from 'react';
import { useHistory } from 'react-router';
import './Vehicle.css'

const Vehicle = (props) => {
    let history=useHistory();
    const { picture, carname,id } = props.vehicle;
    const handleDetails=(carname)=>{
         history.push(`/vehicle/${carname}`)
    }
    return (
        <div class="col mt-2" onClick={()=>handleDetails(carname)}>
            <div class="card h-100 vehicleCardStyle">
                <img src={picture} class="card-img-top h-75 w-75  pt-1 m-auto" alt="..." />
                <div class="card-body h-25 mb-1">
                    <h5 class="card-title text-center h5VehicleStyle ">{carname}</h5>
                </div>
            </div>
        </div>
    );
};

export default Vehicle;