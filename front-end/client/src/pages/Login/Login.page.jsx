import React from "react";
import LoginContainer from "./Login.styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialFormState = {
    email: "",
    password: "",
  };

  const [form, setForm] = React.useState(initialFormState);

  const checkUser = async (name, password) => {
    try {
      const response = await fetch(`http://localhost:1337/login?name=${name}&password=${password}`);
      const user = await response.json();
      return user ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) return;
    if (await checkUser(form.username, form.password)) {
      setSessionToLocalStorage({
        username: form.username,
      });
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
    setForm(initialFormState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const setSessionToLocalStorage = (user) => {
    localStorage.setItem("session", JSON.stringify(user));
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
            <p className="mt-3">
              Test user:
              <br />
              <span><strong>username:</strong> admin   |      <strong>password:</strong>admin</span>
              <br />
            </p>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
