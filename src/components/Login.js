import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      }
    };

    this.valueInputEmail = '';
    this.valueInputPassword = '';

    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputEmail(event) {
    this.valueInputEmail = event.currentTarget.value;
    this.setState({
      user: {
        email: this.valueInputEmail,
        password: this.valueInputPassword
      }
    });
  }

  handleInputPassword(event) {
    this.valueInputPassword = event.currentTarget.value;
    this.setState({
      user: {
        email: this.valueInputEmail,
        password: this.valueInputPassword
      }
    });
  }

  onSubmit = event => {
    event.preventDefault();
    fetch('https://whoiswho.vass.es/api/users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  render() {
    const { changePassword, passwordState } = this.props;
    return (
      <React.Fragment>
        <header className="login__header">
          <h1 className="login__title">VASS</h1>
        </header>
        <form className="login__container" onSubmit={this.onSubmit}>
          <div className="inputs__container">
            <label htmlFor="input__user" className="label__item label__user">
              Usuario
            </label>
            <input
              type="text"
              id="input__user"
              className="input__item input__user"
              onChange={this.handleInputEmail}
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
                onChange={this.handleInputPassword}
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
