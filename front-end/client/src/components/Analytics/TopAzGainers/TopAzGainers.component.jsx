import React from "react";
import TopAzGainersContainer from "./TopAzGainers.styles";

import { ImCross } from "react-icons/im";

const Details = ({ id, toggle }) => {
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center pt-3">
        <ImCross className="me-3" color="#fff" onClick={toggle} size={20} />
      </div>
      <h5 className="text-center fw-bold text-light my-3">{id}</h5>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Amount</th>
            <th>Time</th>
            <th>B/S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="address">BTC</td>
            <td className="balance">28.3$</td>
            <td className="minute">3 min. ago</td>
            <td className="change decrement">Sell</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TopAzGainers = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [id, setId] = React.useState("");

  const toggle = () => {
    setShowDetails(!showDetails);
  };

  const [data, setData] = React.useState([['12355241...', '0x1a4c1d3d7...'], ['5006581...', '0xf89ebfa5538...'], ['236748...', '0xf708e154069...'], ['3324...', '0xbd2b92bf7b3...'], ['23747...', 'oxb2b92bf7b...']]);
  React.useEffect(() => {
    fetch("https://localhost:1337/top_addresses")
      .then((res) => {res.json(); console.log(res.json());})
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <TopAzGainersContainer>
      {showDetails ? (
        <Details id={id} toggle={toggle} />
      ) : (
        <div>
          <h5 className="text-center fw-bold text-light my-3">
            Top Azerbaijani Gainers
          </h5>
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Balance</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {data && data.slice(0, 5).map((item) => (
                <tr onClick={() => {
                  setId(item.symbol);
                  toggle();
                }}>
                  <td className="address">{item[1]}</td>
                  <td className="balance">{item[0]}</td>
                  <td className="change increment">23%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </TopAzGainersContainer>
  );
};

export default TopAzGainers;
