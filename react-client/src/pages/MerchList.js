import React, { useState, useEffect } from 'react';
import axios from 'axios';

const imgUrl = "https://res.cloudinary.com/teepublic/image/private/s--0rDnt43t--/t_Preview/b_rgb:191919,c_limit,f_auto,h_313,q_90,w_313/v1543846349/production/designs/3643578_0";

const Merch = props => (
  <div className="col-6 col-md-3">
    <div>
      <img className="w-100" src={imgUrl} alt={props.merch.title} />
    </div>
    <div>{props.merch.title}</div>
    <div>{props.merch.price}</div>
  </div>
);

export default function MerchList() {
  const [merchlist, setMerchlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/merch')
      .then(response => {
        console.log(response.data);
        setMerchlist(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function merchList() {
    return merchlist.map(currentmerch => {
      return <Merch merch={currentmerch} key={currentmerch._id}/>;
    })
  }

  return (
    <div className="row">
      { merchList() }
    </div>
  );
}
