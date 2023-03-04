import React from "react";
import AnalyticsContainer from "./Analytics.styles";
import TopAzGainers from "../../components/Analytics/TopAzGainers/TopAzGainers.component";
import TopGainers from "../../components/Analytics/TopGainers/TopGainers.component";
import TopTokens from "../../components/TopTokens/TopTokens.component";

const Analytics = () => {
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
