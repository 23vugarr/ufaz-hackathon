import React from "react";
import TradeContainer from "./Trade.styles";
import { TbArrowsUpDown } from "react-icons/tb";

const Trade = () => {
  return (
    <TradeContainer>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="trade py-4">
              <h3>AZERCELLCOIN</h3>
              <div className="d-flex justify-content-center align-items-center my-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter the amount"
                  aria-label="Enter the amount"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center my-3">
                <button className="btn btn-primary">
                  <TbArrowsUpDown size={30} color="#fff" />
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3">
                <input
                  type="text"
                  value={0}
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                  className="form-control"
                  placeholder="Enter the amount"
                  aria-label="Enter the amount"
                  aria-describedby="basic-addon2"
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TradeContainer>
  );
};

export default Trade;
