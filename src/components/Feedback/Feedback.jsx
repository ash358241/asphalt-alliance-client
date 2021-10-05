import React from 'react';
import Items from './Items';
import './Feedback.css'

const Feedback = ({feedback:{name, address, email, txtMsg}}) => {
    return (
        <div className="feedback">
         <Items>
             <h4>{name}</h4>
             <h5>{address}</h5>
             <p>{txtMsg}</p>
         </Items>
      </div>
    );
};

export default Feedback;