import React, { useState } from "react";
import DashboardContainer from "./Dashboard.styles";
import Transfer from "../../components/Transfer/Transfer.component";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const toggleTransfer = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      {toggle && <Transfer toggle={toggleTransfer} />}
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <div className="user-info">
              <h1 className="fw-bold">Welcome, Murad</h1>
            </div>
            <div className="user-balance mt-3 pt-5">
              <h3 className="text-center fw-bold  text-light mb-3">
                Your Balance
              </h3>
              <h4 className="text-center text-light">1.05 Azercell coin</h4>
              <h4 className="text-center text-light">~</h4>
              <h4 className="text-center text-light fw-bold">5.56 AZN</h4>
              <div className="footer py-4 mt-4 d-flex justify-content-around">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/trade")}
                >
                  Trade Now
                </button>
                <button className="btn btn-primary" onClick={toggleTransfer}>
                  Transfer
                </button>
              </div>
            </div>
            <div className="az-gainers mt-3 d-flex flex-column justify-content-center align-items-center">
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
                  <tr>
                    <td className="address">0xfda5987db0a..</td>
                    <td className="balance">2456.8$</td>
                    <td className="change increment">18%</td>
                  </tr>
                  <tr>
                    <td className="address">0xfda5987db0a..</td>
                    <td className="balance">2456.8$</td>
                    <td className="change increment">18%</td>
                  </tr>
                  <tr>
                    <td className="address">0xfda5987db0a..</td>
                    <td className="balance">2456.8$</td>
                    <td className="change increment">18%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="top-gainers d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-center fw-bold text-light my-3">
                Top Gainers
              </h5>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="address">Polygon</td>
                    <td className="balance">2456.8$</td>
                    <td className="change increment">18%</td>
                  </tr>
                  <tr>
                    <td className="address">Polygon</td>
                    <td className="balance">2456.8$</td>
                    <td className="change decrement">-18%</td>
                  </tr>
                  <tr>
                    <td className="address">Polygon</td>
                    <td className="balance">2456.8$</td>
                    <td className="change increment">18%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="top-tokens">
              <h5 className="text-center fw-bold text-light my-3">
                Top Tokens
              </h5>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="address">Polygon</td>
                    <td className="balance">2456.8$</td>
                  </tr>
                  <tr>
                    <td className="address">Polygon</td>
                    <td className="balance">2456.8$</td>
                  </tr>
                  <tr>
                    <td className="address">Polygon</td>
                    <td className="balance">2456.8$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
