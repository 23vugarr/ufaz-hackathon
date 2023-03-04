import styled from "styled-components";

const DashboardContainer = styled.div`
  .increment {
    color: lime;
  }

  .decrement {
    color: red;
  }

  .user-balance {
    background: rgb(54, 17, 84, 0.5);
    border: 1px solid rgb(54, 17, 84, 0.5);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    .footer {
      background-color: white;
      border-radius: 0 0 10px 10px;

      button {
        background: linear-gradient(
          90deg,
          hsla(225, 40%, 54%, 1) 0%,
          hsla(284, 75%, 54%, 1) 100%
        );
        border: none;
        border-radius: 10px;
        color: white;
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: linear-gradient(
            90deg,
            hsla(225, 40%, 54%, 1) 0%,
            hsla(284, 75%, 54%, 1) 100%
          );

          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  .user-info {
    background: rgb(54, 17, 84, 0.5);
    border: 1px solid rgb(54, 17, 84, 0.5);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      margin: 1rem 0;
      text-align: center;
    }
  }

  .az-gainers {
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

  .top-gainers {
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

export default DashboardContainer;
