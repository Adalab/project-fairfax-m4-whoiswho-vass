import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    const {
      handleInputEmail,
      handleInputPassword,
      onSubmit,
      changePassword,
      passwordState
    } = this.props;
    return (
      <React.Fragment>
        <header className="login__header">
          <h1 className="login__title">VASS</h1>
        </header>
        <form className="login__container" onSubmit={onSubmit}>
          <div className="inputs__container">
            <label htmlFor="input__user" className="label__item label__user">
              Usuario
            </label>
            <input
              type="text"
              id="input__user"
              className="input__item input__user"
              onChange={handleInputEmail}
            />
            <label
              htmlFor="input__password"
              className="label__item label__password"
            >
              Contraseña
            </label>
            <div className="password__container">
              <input
                type={passwordState}
                id="input__password"
                className="input__item input__password"
                onChange={handleInputPassword}
              />
              <i
                className={`eye fas fa-eye${
                  passwordState === 'password' ? '' : '-slash'
                }`}
                onClick={changePassword}
              />
            </div>
            <input type="submit" value="Entrar" className="input__submit" />
            {/* <Link to="/search" className="input__submit--link">
              
            </Link> */}
          </div>
        </form>
        <div className="who__container">
          <h2 className="who__title">
            <span className="who__span">Who</span>{' '}
            <span className="is__span">is</span>{' '}
            <span className="who__span">Who</span>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  changePassword: PropTypes.func.isRequired,
  passwordState: PropTypes.string.isRequired
};

export default Login;
