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
              <tr
                onClick={() => {
                  setId("0xfda5987db0a..");
                  toggle();
                }}
              >
                <td className="address">0xfda5987db0a..</td>
                <td className="balance">2456.8$</td>
                <td className="change increment">18%</td>
              </tr>
              <tr
                onClick={() => {
                  setId("0xfda5987db0a..");
                  toggle();
                }}
              >
                <td className="address">0xfda5987db0a..</td>
                <td className="balance">2456.8$</td>
                <td className="change increment">18%</td>
              </tr>
              <tr
                onClick={() => {
                  setId("0xfda5987db0a..");
                  toggle();
                }}
              >
                <td className="address">0xfda5987db0a..</td>
                <td className="balance">2456.8$</td>
                <td className="change increment">18%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </TopAzGainersContainer>
  );
};

export default TopAzGainers;
