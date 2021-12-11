import { React } from 'react';
import './styles.scss';
import logo from '../../assets/img/logo/nu-logo.png';
import PasswordInput from '../../components/PasswordInput';

export default function Login() {
  return (
    <div id="content">
      <div className="login-modal">
        <div className="logo-container">
          <div className="logo-div">
            <img className="logo" src={logo} alt="Nu" />
          </div>
          <div className="text-area">
            <span className="text-logo">bank</span>
          </div>
        </div>
        <div className="login-text">
          <h2>Entre na sua conta</h2>
        </div>
        <div className="form-login">
          <form action="#">
            <input
              className="input"
              type="email"
              name="login"
              placeholder="CPF ou e-mail"
            />
            <PasswordInput />
          </form>
        </div>
      </div>
    </div>
  );
}
