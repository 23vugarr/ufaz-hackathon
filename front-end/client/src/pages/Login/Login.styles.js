import styled from "styled-components";

const LoginContainer = styled.div`
  background: rgb(54, 17, 84, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(54, 17, 84, 0.5);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }

  form {
    input {
      background: #bca4c8;
      border-radius: 10px;
      padding: 0.9rem 2rem;
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

    label {
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
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
`;

export default LoginContainer;
