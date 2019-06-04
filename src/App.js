import React from 'react';
import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import { Route, Switch } from 'react-router-dom';

const employeeArr = [
  {
    givenName: 'Pedro Javier',
    sn: 'Perez Mora',
    sAMAccountName: 'pedro.perez'
  },
  {
    givenName: 'Francisco Javier',
    sn: 'Pérez García',
    sAMAccountName: 'javier.perezgarcia'
  },
  {
    givenName: 'Javier',
    sn: 'Perez Alonso',
    sAMAccountName: 'javier.perez'
  },
  {
    givenName: 'Javier',
    sn: 'Perez Gonzalo',
    sAMAccountName: 'javier.pgonzalo'
  },
  {
    givenName: 'Juan Javier',
    sn: 'Perez Ruiz',
    sAMAccountName: 'juan.perez'
  },
  {
    givenName: 'Javier',
    sn: 'Perez Garcia',
    sAMAccountName: 'jperez'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      nameArr: [],
      filterName: '',
      collapsibleId: null,
      loginPassword: 'password'
    };

    this.valueInputEmail = '';
    this.valueInputPassword = '';

    this.handleFilter = this.handleFilter.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const newArr = employeeArr.map((item, index) => {
      return { ...item, id: index };
    });
    this.setState({ nameArr: newArr });
  }

  handleFilter(event) {
    const currentValue = event.currentTarget.value;
    this.setState({ filterName: currentValue, collapsibleId: null });
  }

  handleCollapsible(event) {
    const newCollapsibleId = event.currentTarget.id;
    this.setState(prevState => {
      if (parseInt(newCollapsibleId) === prevState.collapsibleId) {
        return { collapsibleId: null };
      } else {
        return { collapsibleId: parseInt(newCollapsibleId) };
      }
    });
  }

  handlePassword() {
    this.setState(prevState => ({
      loginPassword:
        prevState.loginPassword === 'password' ? 'text' : 'password'
    }));
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
      .then(data => {
        const dataToken = data.user.token;
        return fetch('https://whoiswho.vass.es/api/employees?cn=Samuel', {
          method: 'GET',
          headers: {
            Authorization: `Token ${dataToken}`
          }
        })
          .then(response => response.json())
          .then(dota => console.log(dota));
      });
  };

  render() {
    const { nameArr, filterName, collapsibleId, loginPassword } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Login
              changePassword={this.handlePassword}
              passwordState={loginPassword}
              handleInputEmail={this.handleInputEmail}
              handleInputPassword={this.handleInputPassword}
              onSubmit={this.onSubmit}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              filterName={filterName}
              nameArr={nameArr}
              collapsibleId={collapsibleId}
              handleFilter={this.handleFilter}
              handleCollapsible={this.handleCollapsible}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
