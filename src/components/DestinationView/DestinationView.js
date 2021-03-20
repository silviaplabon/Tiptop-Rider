import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './DestinationView.css'
const DestinationView = (props) => {
    const { carname, picture,id } = props.vehicle;

    const {seat}=props.searchData;
    let ticketprice;
    const motorbike=Math.floor((Math.random() * 20) + 10);
    const boat=Math.floor((Math.random() * 20) + 20);
    const doubledecker=Math.floor((Math.random() * 10 ) + 10);
    const bullettrain= Math.floor((Math.random() * 1) + 25);
    if(id===19981){ ticketprice=motorbike*seat}
    else if(id===19982){ ticketprice=boat*seat}
    else if(id===19983){ ticketprice=doubledecker*seat}
    else { ticketprice=bullettrain*seat}
    return (
        <>
            <div className="cardStyle card  ">
                <img src={picture} className="w-100 h-100" />
            </div>
            <div className="cardStyle card nameStyle ">
                <h6>{carname}</h6>
            </div>
            <div className="cardStyle card">
                <h6><FontAwesomeIcon className="" icon={faUserFriends} /> {seat}</h6>
            </div>
            <div className="cardStyle card">
                <h6>{ticketprice}</h6>
            </div>
        </>
    );
};

export default DestinationView;