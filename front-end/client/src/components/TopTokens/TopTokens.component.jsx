import React from "react";
import TopTokensContainer from "./TopTokens.styles";

const TopTokens = () => {
  return (
    <TopTokensContainer>
      <div className="top-tokens">
        <h5 className="text-center fw-bold text-light my-3">Top Tokens</h5>
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
    </TopTokensContainer>
  );
};

export default TopTokens;
