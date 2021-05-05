import "./LoginForm.css";


const LoginForm = () => {
  return (
    <div className="login-form">
      <form>
        <label>Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <label>Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
