import styled from "styled-components";

const TradeContainer = styled.div`
  .trade {
    //background: #895ea3;
    //box-shadow: 10px 10px 40px 20px rgba(0, 0, 0, 0.25);
    //border-radius: 24px;
    padding: 0.5rem 2rem 2rem 2rem;
    background: rgb(54, 17, 84, 0.5);
    border: 1px solid rgb(54, 17, 84, 0.5);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 1rem;
      text-align: center;
    }

    input {
      background: #bca4c8;
      border: 3px solid rgb(54, 17, 84, 0.5);
      border-radius: 10px;
      padding: 1.5rem 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      outline: none;
      width: 300px !important;
      text-align: center;
      box-shadow: none;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      background: linear-gradient(90deg, #9a0f63 0%, #751785 100%);
      border: 2px solid #fff;
      padding: 1.5rem;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: linear-gradient(90deg, #9a0f63 0%, #751785 100%);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

export default TradeContainer;
