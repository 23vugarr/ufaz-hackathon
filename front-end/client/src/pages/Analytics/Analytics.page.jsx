import React, {useEffect} from "react";
import AnalyticsContainer from "./Analytics.styles";
import TopAzGainers from "../../components/Analytics/TopAzGainers/TopAzGainers.component";
import TopGainers from "../../components/Analytics/TopGainers/TopGainers.component";
import TopTokens from "../../components/TopTokens/TopTokens.component";
import { useNavigate } from "react-router-dom";


const Analytics = () => {
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
  return (
    <AnalyticsContainer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <TopAzGainers />
          </div>
          <div className="col-4">
            <TopGainers />
          </div>
          <div className="col-4">
            <TopTokens />
          </div>
        </div>
      </div>
    </AnalyticsContainer>
  );
};

export default Analytics;
