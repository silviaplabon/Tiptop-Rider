import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import fakedata from '../../data/data.json';
import Map from '../../components/Map/Map'
import './Destination.css'
import DestinationView from '../DestinationView/DestinationView';
import Header from '../Header/Header';
import Direction from '../../components/Direction/Direction'

const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const  {carname} = useParams();


    const vehicle=fakedata.find(pd=>carname===pd.carname)

    const { register, handleSubmit, watch, errors } = useForm();
    let [searchData, setsearchData] = useState({});
    let onSubmit = data => { setsearchData(data) }

console.log(vehicle);

    return (
        <div className="destinationSection">
            <Header></Header>
            <hr className="hrStyle container" />
            <div className="row container m-auto">
                {
                    !searchData.pickfrom ?
                        <div className="col-md-4 col-sm-12  formshow card h-100 shadow-lg mt-5">
                            <form className="ship-form container mt-5 m-auto text-center " id="searchOption" onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group mt-2">
                                    <input name="pickfrom" className="form-control inputform" id="pickfrom" placeholder="From" ref={register({ required: true })} />
                                    {errors.pickfrom && <span className="error">Pick From is required</span>}
                                </div>
                                <div class="form-group mt-2 ">
                                    <input name="pickto" placeholder="To" id="pickto" className="form-control inputform " ref={register({ required: true })} />
                                    {errors.pickto && <span className="error">Pick To is required</span>}
                                </div>
                                <div class="form-group mt-2 ">
                                    <input name="deprature" placeholder="Deprature" id="deprature" className="form-control inputform" ref={register({ required: true })} type="date" />
                                    {errors.deprature && <span className="error">Deprature is required</span>}
                                </div>
                                <div class="form-group mt-2">
                                    <input name="return" placeholder="Return" id="return" className="form-control inputform" ref={register({ required: true })} type="date" />
                                    {errors.return && <span className="error">Return is required</span>}
                                </div>
                                <div class="form-group mt-2">
                                    <input name="name" placeholder="Name" id="inputName" className="form-control inputform" defaultValue={loggedInUser.displayName} ref={register({ required: true })} />
                                    {errors.name && <span className="error">Name is required</span>}
                                </div>
                                <div class="form-group mt-2">
                                    <input name="email" placeholder="Email" id="exampleInputEmail1" className="form-control inputform" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                                    {errors.email && <span className="error">Email is required</span>}
                                </div>
                                <div class="form-group mt-2">
                                    <input name="seat" placeholder="Seat" id="exampleInputEmail1" className="form-control inputform" ref={register({ required: true })} />
                                    {errors.seat && <span className="error">Seat Number  is required</span>}
                                </div>
                                <input type="submit" className="btn btn-primary w-100 mt-4 mb-4" />
                            </form>
                        </div>
                        :
                        <div id="searchdatashow" className="col-md-4 col-sm-12  card h-100 p-4 shadow-lg mt-5  " >
                            <div className=" row card-body text-white bg-warning  my-3 rounded-3">
                                <div className="timeline-area ps-2 col-md-12 row">
                                    <div class="col-md-7 ">
                                            <p className="fw-bold">From: {searchData?.pickfrom}</p>
                                            <p className="fw-bold">To: {searchData?.pickto}</p>
                                    </div>
                                    <div className="col-md-5">
                                         <p>Deprature: {searchData?.deprature}</p>
                                         <p>Return: {searchData?.return}</p>
                                    </div>   
                                </div>
                            </div>
                            <div className="row ms-1 ">
                                <div className="col-md-12 row destinationViewStyle shadow mt-2 p-1 card h-25">
                                    <DestinationView vehicle={vehicle} searchData={searchData}></DestinationView>
                                </div>
                                <div className="col-md-12 row destinationViewStyle card shadow mt-2 p-1 h-25">
                                    <DestinationView vehicle={vehicle} searchData={searchData}></DestinationView>
                                </div>
                                <div className="col-md-12 row destinationViewStyle shadow  card h-25 mt-2 p-1">
                                    <DestinationView vehicle={vehicle} searchData={searchData} ></DestinationView>
                                </div>
                            </div>
                        </div>
                }
                <div className="col-md-7 mt-5 container m-auto" id="">
                {!searchData.pickfrom ? <Map></Map>:<Direction searchData={searchData}></Direction>}
                </div>
            </div >
        </div>
    );
};

export default Destination;