import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import fakedata from '../../data/data.json';
import './Destination.css'
import DestinationView from '../DestinationView/DestinationView';
import Header from '../Header/Header';
const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let carname = useParams();

    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        setVehicle(fakedata.find(pd => carname === pd.carname));
    }, {})
    console.log(vehicle);
    const { register, handleSubmit, watch, errors } = useForm();
    let [searchData, setsearchData] = useState({});
    let onSubmit = data => { setsearchData(data) }
console.log(vehicle);

    return (
        <div className="container m-auto">
            <Header></Header>
            <hr className="hrStyle" />
            <div className="row">
                {
                    !searchData.pickfrom ?
                        <div className="col-md-4 formshow card h-100 shadow-lg mt-5">
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
                        <div id="searchdatashow" className="col-md-4  card h-100 p-4 shadow-lg mt-5  " >
                            <div className=" row card-body text-white bg-warning  my-3 rounded-3">
                                <div className="timeline-area ps-2 col-md-12">
                                    <h4>{searchData?.pickfrom}</h4>
                                    <h4>{searchData?.pickTo}</h4>
                                </div>
                                <p>Deprature: {searchData.deprature}</p>
                                <p>Return: {searchData.return}</p>
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
                {/* AIzaSyBXtJ8vnXNTmwDDgQw_q0_WlmUPP8cch9A */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496723.66068468!2d85.84616609221882!3d23.442075849009655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616220108015!5m2!1sen!2sbd"
                        className="w-100 "
                        title="bangladesh"
                        style={{ border: "0", height: "30rem" }}
                        loading="lazy"></iframe> 

                </div>
            </div >
        </div>
    );
};

export default Destination;