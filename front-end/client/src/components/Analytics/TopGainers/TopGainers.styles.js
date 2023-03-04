import styled from "styled-components";

const TopGainersContainer = styled.div`
  background: rgb(54, 17, 84, 0.5);
  border: 1px solid rgb(54, 17, 84, 0.5);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  svg {
    cursor: pointer;
    &:hover {
      transition: all 0.3s;
      path {
        transition: all 0.3s;
        fill: red;
      }
    }
  }

  .data-table {
    h6 {
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
    }
    .box {
      background: #8d60b1;
      border-radius: 20px;
      padding: 1rem;
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      border: 1px solid rgb(54, 17, 84, 0.5);
    }
  }

  .increment {
    color: lime;
  }

  .decrement {
    color: red;
  }

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
          cursor: pointer;
        }
      }
    }
  }
`;

export default TopGainersContainer;
