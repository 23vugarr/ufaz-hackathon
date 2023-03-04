import React from "react";
import TopGainersContainer from "./TopGainers.styles";
import { ImCross } from "react-icons/im";

const Details = ({ id, toggle, data1 }) => {

  const data2 = data1.filter((item) => item.symbol === id)[0];

  return (    
    <div>
      <div className="d-flex justify-content-end align-items-center pt-3">
        <ImCross className="me-3" color="#fff" onClick={toggle} size={20} />
      </div>
      <h3 className="text-center fw-bold text-light my-3 pb-2">{data2.name}</h3>
      <hr />
      <div className="row data-table pb-4 pt-2">
        <div className="col-4 d-flex flex-column align-items-center">
          <h6>Price</h6>
          <div className="box mt-2">{data2.current_price.toFixed(2)}$</div>
        </div>
        <div className="col-4 d-flex flex-column align-items-center">
          <h6>Market Cap</h6>
          <div className="box mt-2">{data2.market_cap.toFixed(0)}</div>
        </div>
        <div className="col-4 d-flex flex-column align-items-center">
          <h6>Change 24h</h6>
          <div className="box mt-2">{data2.price_change_24h.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};


const TopGainers = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [id, setId] = React.useState(null);

  const toggle = (id) => {
    setShowDetails(!showDetails);
    setId(id);
  };

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:1337/tokens_gainers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <TopGainersContainer>
      {showDetails ? (
        <Details id={id} data1={data} toggle={toggle} />
      ) : (
        <div>
          <h5 className="text-center fw-bold text-light my-3">Top Gainers</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>

              {data &&
                data.slice(0, 8).map((item) => (
                  <tr onClick={() => toggle(item.symbol)}>
                    <td className="address">{item.name}</td>
                    <td className="balance">{item.current_price}</td>
                    <td className="change increment">{item.price_change_24h}%</td>
                  </tr>
              ))}

            </tbody>
          </table>
        </div>
      )}
    </TopGainersContainer>
  );
};

export default TopGainers;
