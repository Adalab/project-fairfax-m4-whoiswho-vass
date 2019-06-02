import React from 'react';
import './Login.scss';
​
​
class Login extends React.Component {
  render() {
    const {changePassword, passwordState} = this.props;
    return(
        <div className="login__container">
          <img src="https://www.vass.es/wp-content/uploads/2018/04/logotipo-VASS.png" alt="logotipo VASS" className="logo__img"/>
          <div className="inputs__container">
            <label htmlFor="input__user" className="label__item label__user">Usuario</label>
            <input type="text" id="input__user" className="input__item input__user"/>
            <label htmlFor="input__password" className="label__item label__password">Contraseña</label>
            <input type={passwordState} id="input__password" className="input__item input__password"/>
            <i className={`fas fa-eye${passwordState === 'password' ? '' : '-slash'} `} onClick={changePassword}></i>
            <input type="submit" value="Entrar" className="input__submit"/>
          </div>
        </div>
    );
  }
}
​
export default Login;