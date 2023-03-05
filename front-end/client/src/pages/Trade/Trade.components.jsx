import React, {useEffect} from "react";
import TradeContainer from "./Trade.styles";
import { TbArrowsUpDown } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


const Trade = () => {
  const navigate = useNavigate();

  const checkSession = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (!session) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:1337/top_tokens")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [scoin, setScoin] = React.useState(null);
  const handleSelect = (e) => {
    setScoin(e.target.value);
  };
  console.log(scoin);

  const [amount, setAmount] = React.useState(null);
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

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
                  onChange={handleAmount}
                  value={amount && amount}
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

                  value={scoin && amount / (12.05 * scoin)}
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    padding: "0.5rem",
                  }}
                  className="form-control"
                  aria-label="Enter the amount"
                  aria-describedby="basic-addon2"
                  disabled={true}
                />
              </div>

              <div className="d-flex justify-content-center align-items-center my-3">
              <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                  <option selected>Select the coin to trade with</option>
                  {data && data.map((coin) => <option value={coin.current_price}>{coin.name}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TradeContainer>
  );
};

export default Trade;
