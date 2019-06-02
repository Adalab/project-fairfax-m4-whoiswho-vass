import React from 'react';

class Login extends React.Component {
  render() {
    const { changePassword, passwordState } = this.props;
    return (
      <React.Fragment>
        <h1 className="login__logo">Aquí va el logo</h1>
        <div className="inputs__container">
          <label htmlFor="input__user" className="input__user">
            Usuario
          </label>
          <input type="text" id="input__user" className="input__user" />
          <label htmlFor="input__password" className="input__password">
            Contraseña
          </label>
          <input
            type={passwordState}
            id="input__password"
            className="input__password"
          />
          <i class="fas fa-eye" onClick={changePassword} />
          <input type="submit" value="Entrar" className="input__submit" />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
