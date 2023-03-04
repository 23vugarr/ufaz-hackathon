import React from "react";
import TopGainersContainer from "./TopGainers.styles";
import { ImCross } from "react-icons/im";

const Details = ({ id, toggle, data }) => {
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center pt-3">
        <ImCross className="me-3" color="#fff" onClick={toggle} size={20} />
      </div>
      <h3 className="text-center fw-bold text-light my-3 pb-2">Polygon</h3>
      <hr />
      <div className="row data-table pb-4 pt-2">
        <div className="col-4 d-flex flex-column align-items-center">
          <h6>Price</h6>
          <div className="box mt-2">14.5$</div>
        </div>
        <div className="col-4 d-flex flex-column align-items-center">
          <h6>Market Cap</h6>
          <div className="box mt-2">123M</div>
        </div>
        <div className="col-4 d-flex flex-column align-items-center">
          <h6>Change 24h</h6>
          <div className="box mt-2">18%</div>
        </div>
      </div>
    </div>
  );
};

const TopGainers = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  const toggle = () => {
    setShowDetails(!showDetails);
  };
  return (
    <TopGainersContainer>
      {showDetails ? (
        <Details toggle={toggle} />
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
              <tr onClick={toggle}>
                <td className="address">Polygon</td>
                <td className="balance">2456.8$</td>
                <td className="change increment">18%</td>
              </tr>
              <tr onClick={toggle}>
                <td className="address">Polygon</td>
                <td className="balance">2456.8$</td>
                <td className="change decrement">-18%</td>
              </tr>
              <tr onClick={toggle}>
                <td className="address">Polygon</td>
                <td className="balance">2456.8$</td>
                <td className="change increment">18%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </TopGainersContainer>
  );
};

export default TopGainers;
