import React from "react";
import TransferContainer from "./Transfer.styles";
import { ImCross } from "react-icons/im";
import { useState } from "react"; 

const Transfer = ({ toggle }) => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  //////
  const transfer = () => {
    fetch('http://localhost:1337/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: inputValue })
    })
      .then(response => response.json())
      .then(data => setData(data));
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  /////

  return (
    <TransferContainer>
      <div className="modal animate__bounceIn animate__animated d-flex flex-column justify-content-center align-items-center">
        <div className="w-100 mb-3 d-flex justify-content-end">
          <ImCross className="cross" onClick={toggle} color="white" size={25} />
        </div>
        <div className="modal-content">
          <h3>ENTER THE AMOUNT</h3>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter the amount"
              aria-label="Enter the amount"
              aria-describedby="basic-addon2"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary" onClick={transfer}>Transfer</button>  
          </div>
        </div>
      </div>
    </TransferContainer>
  );
};

export default Transfer;
