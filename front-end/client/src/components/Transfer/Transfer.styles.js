import styled from "styled-components";

const TransferContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }

  .modal {
    position: relative;
    width: 561px;
    height: 380px;
    background: #895ea3;
    //box-shadow: 10px 10px 40px 20px rgba(0, 0, 0, 0.25);
    //border-radius: 24px;

    border: 2px solid rgb(54, 17, 84, 0.5);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    padding: 0.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .modal-content {
      background-color: transparent;
      border: none;

      h3 {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        margin-bottom: 1rem;
        text-align: center;
      }

      input {
        background: #bca4c8;
        border-radius: 10px;
        padding: 1.5rem 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        margin-bottom: 1rem;
        outline: none;
        width: 300px !important;
        border: 3px solid rgb(54, 17, 84, 0.5);
        box-shadow: none;

        &::placeholder {
          color: #fff;
        }
      }

      button {
        background: linear-gradient(90deg, #9a0f63 0%, #751785 100%);
        border-radius: 16px;
        width: 300px !important;
        border: none;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: linear-gradient(90deg, #9a0f63 0%, #751785 100%);
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
`;

export default TransferContainer;
