import React from 'react';
import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      nameArr: [],
      detailArr: [],
      filterName: '',
      collapsibleId: null,
      eyePassword: 'password',
      token: JSON.parse(localStorage.getItem('token')) || '',
      isAuthenticated: false,
      isErrorVisible: false,
      isErrorVisibleSearch: false
    };

    this.valueInputEmail = '';
    this.valueInputPassword = '';

    this.handleFilter = this.handleFilter.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
    this.handleEyePassword = this.handleEyePassword.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getUserDetail = this.getUserDetail.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleFilter(event) {
    const currentValue = event.currentTarget.value;
    this.setState({ filterName: currentValue, collapsibleId: null });
    if (currentValue.length >= 3) {
      this.getUsers(currentValue);
    }
  }

  handleCollapsible(event) {
    const newCollapsibleId = event.currentTarget.id;
    this.setState(prevState => {
      if (newCollapsibleId === prevState.collapsibleId) {
        return { collapsibleId: null };
      } else {
        return { collapsibleId: newCollapsibleId };
      }
    });
    this.getUserDetail(newCollapsibleId);
  }

  handleEyePassword() {
    this.setState(prevState => ({
      eyePassword: prevState.eyePassword === 'password' ? 'text' : 'password'
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
        if (dataToken !== '') {
          this.setState({ isAuthenticated: true, token: dataToken });
          localStorage.setItem('token', JSON.stringify(dataToken));
        }
      })
      .catch(error => this.setState({ isErrorVisible: true }));
  };

  getUsers(filterName) {
    fetch(`https://whoiswho.vass.es/api/employees?cn=${filterName}`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${this.state.token}`,
        'content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(users => this.setState({ nameArr: users, isErrorVisibleSearch: false }))
      .catch(error => 
        this.setState({isErrorVisibleSearch: true, nameArr: []})
      );
  }

  handleLogout() {
    this.setState({
      user: {
        email: '',
        password: ''
      },
      nameArr: [],
      detailArr: [],
      filterName: '',
      collapsibleId: null,
      eyePassword: 'password',
      token:'',
      isAuthenticated: false,
      isErrorVisible: false,
      isErrorVisibleSearch: false
    });
    localStorage.removeItem('token');
  }

  getUserDetail(collapsibleId) {
    fetch(`https://whoiswho.vass.es/api/employees/${collapsibleId}`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
      .then(response => response.json())
      .then(userDetail => this.setState({ detailArr: userDetail }));
  }

  render() {
    const {
      nameArr,
      filterName,
      eyePassword,
      collapsibleId,
      detailArr,
      isErrorVisible,
      isErrorVisibleSearch
    } = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            this.state.isAuthenticated === true ? (
              <Redirect from="/" to="/search" />
            ) : (
              <Login
                handleEyePassword={this.handleEyePassword}
                eyePassword={eyePassword}
                handleInputEmail={this.handleInputEmail}
                handleInputPassword={this.handleInputPassword}
                onSubmit={this.onSubmit}
                isErrorVisible={isErrorVisible}
              />
            )
          }
        />
        <Route
          path="/search"
          render={() =>
            this.state.token === '' ? (
              <Redirect from="/search" to="/" />
            ) : (
              <Search
                filterName={filterName}
                nameArr={nameArr}
                handleFilter={this.handleFilter}
                handleCollapsible={this.handleCollapsible}
                collapsibleId={collapsibleId}
                detailArr={detailArr}
                isErrorVisibleSearch={isErrorVisibleSearch}
                handleLogout={this.handleLogout}
              />
            )
          }
        />
      </Switch>
    );
  }
}

export default App;
