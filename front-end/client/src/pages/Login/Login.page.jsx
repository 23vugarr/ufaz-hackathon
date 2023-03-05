import React from "react";
import LoginContainer from "./Login.styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialFormState = {
    email: "",
    password: "",
  };

  const users = [
    {
      username: "test",
      password: "12345",
    },
  ];

  const [form, setForm] = React.useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  
  const checkUser = (name, password) => {
    const user = users.find((user) => user.username === name);
    if (user && user.password === password) {
      return true;
    }
    return false;
  };

  const setSessionToLocalStorage = (user) => {
    localStorage.setItem("session", JSON.stringify(user));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) return;
    if (checkUser(form.username, form.password)) {
      setSessionToLocalStorage({
        username: form.username,
        password: form.password,
      });
      navigate("/");
    }
    setForm(initialFormState);
  };

  return (
    <LoginContainer>
      <div className="login-container">
        <div className="login-form">
          <h1 className="text-center mb-5">Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={form.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                name="password"
                value={form.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
