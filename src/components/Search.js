import React from 'react';
import Detail from './Detail';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      user,
      filterName,
      nameArr,
      handleFilter,
      collapsibleId,
      handleCollapsible,
      detailArr,
      isErrorVisibleSearch,
      handleLogout
    } = this.props;

    if (filterName === '') {
      return (
        <div className="main__container">
          <header className="list__header">
            <h1 className="list__tittle">VASS</h1>
            <div className="user__container">
              <i className="far fa-user" />
              <p className="user__text">{`Hola, ${user.email}`}</p>
            </div>
            <div className="logout__container">
              <p className="logout" onClick={handleLogout}>
                Salir
              </p>
              <i
                className="fas fa-sign-out-alt logout__arrow"
                onClick={handleLogout}
              />
            </div>
          </header>
          <div className="input__container">
            <label className="label__input" htmlFor="filterEmployee">
              Campo de búsqueda
            </label>
            <div className="search">
              <input
                onChange={handleFilter}
                className="input__search"
                name="filterEmployee"
                id="filterEmployee"
                type="text"
                value={filterName}
              />
              <i className="fas fa-search" />
            </div>
          </div>
          <div className="who__container--search">
            <h2 className="who__title--search">
              <span className="who__span--search">Who</span>{' '}
              <span className="is__span--search">is</span>{' '}
              <span className="who__span--search">Who</span>
            </h2>
          </div>
          <footer className="login__footer--search">
            VASS - Copyright © 2019 Todos los derechos reservados
          </footer>
        </div>
      );
    } else {
      return (
        <div className="main__container">
          <header className="list__header">
            <h1 className="list__tittle">VASS</h1>
            <div className="user__container">
              <i className="far fa-user" />
              <p className="user__text">{`Hola, ${user.email}`}</p>
            </div>
            <div className="logout__container">
              <p className="logout" onClick={handleLogout}>
                Salir
              </p>
              <i
                className="fas fa-sign-out-alt logout__arrow"
                onClick={handleLogout}
              />
            </div>
          </header>
          <div className="input__container">
            <label className="label__input" htmlFor="filterEmployee">
              Campo de búsqueda
            </label>
            <div className="search">
              <input
                onChange={handleFilter}
                className="input__search"
                name="filterEmployee"
                id="filterEmployee"
                type="text"
                value={filterName}
              />
              <i className="fas fa-search" />
            </div>
            {isErrorVisibleSearch ? (
              <p className="error__message--search">
                {' '}
                <i className="fas fa-exclamation-circle" /> No hay ningún
                resultado que coincida con la búsqueda.
              </p>
            ) : null}
          </div>
          <div className={`list__container ${nameArr.length === 0 ? 'hidden' : ''}`}>
            <ul className="employee__list">
              {nameArr
                .map(item => (
                  <li
                    key={item.sAMAccountName}
                    className="employee__list--item"
                  >
                    <div
                      className="item__container"
                      onClick={handleCollapsible}
                      id={item.sAMAccountName}
                    >
                      <h2 className="item__name">
                        {item.givenName} {item.sn}
                      </h2>
                      <i
                        className={`fas fa-chevron-down ${
                          collapsibleId === item.sAMAccountName
                            ? 'upside-down'
                            : null
                        }`}
                      />
                    </div>
                    {collapsibleId === item.sAMAccountName ? (
                      <Detail
                        collapsibleId={collapsibleId}
                        detailArr={detailArr}
                      />
                    ) : null}
                  </li>
                ))}
            </ul>
          </div>
          <div className="who__container--search">
            <h2 className="who__title--search">
              <span className="who__span--search">Who</span>{' '}
              <span className="is__span--search">is</span>{' '}
              <span className="who__span--search">Who</span>
            </h2>
          </div>
          <footer className="login__footer--search">
            VASS - Copyright © 2019 Todos los derechos reservados
          </footer>
        </div>
      );
    }
  }
}

Search.propTypes = {
  filterName: PropTypes.string,
  nameArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleCollapsible: PropTypes.func.isRequired,
  collapsibleId: PropTypes.string,
  isErrorVisibleSearch: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default Search;
