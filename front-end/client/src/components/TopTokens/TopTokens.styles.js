import styled from "styled-components";

const TopTokensContainer = styled.div`
  .top-tokens {
    background: rgb(54, 17, 84, 0.5);
    border: 1px solid rgb(54, 17, 84, 0.5);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    table {
      border-collapse: collapse;
      width: 100%;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      text-align: left;
      border-radius: 0 0 10px 10px;
      overflow: hidden;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border: 1px solid rgb(54, 17, 84, 0.5);
      thead {
        tr {
          th {
            background-color: rgb(54, 17, 84, 0.5);
            padding: 1rem;
          }
        }
      }

      tbody {
        tr {
          &:nth-child(even) {
            background-color: rgb(54, 17, 84, 0.5);
          }

          td {
            padding: 1rem;
          }
        }
      }
    }
  }
`;

export default TopTokensContainer;
