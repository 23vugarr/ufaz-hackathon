import React from "react";
import TransferContainer from "./Transfer.styles";
import { ImCross } from "react-icons/im";

const Transfer = ({ toggle }) => {
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
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary ">Transfer</button>
          </div>
        </div>
      </div>
    </TransferContainer>
  );
};

export default Transfer;
