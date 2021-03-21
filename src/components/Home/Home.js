import React, { useEffect, useState } from 'react';
import vehicleList from '../../data/data.json'
import Header from '../Header/Header';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <Header></Header>
            <div className="vehiclesContainer">
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4  container m-auto  ">
                    {
                        vehicleList.map(vehicle => <Vehicle vehicle={vehicle} key={vehicle.id} ></Vehicle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
