import React from 'react';
import Detail from './Detail';
import PropTypes from 'prop-types';
import logout from '../images/Salir.png';

class Search extends React.Component {
  render() {
    const {
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
            <div className="logout__container">
              <p className="logout">Salir</p>
              <img className="logout__arrow" src={logout} alt="" />
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
        </div>
      );
    } else {
      return (
        <div className="main__container">
          <header className="list__header">
            <h1 className="list__tittle">VASS</h1>
            <div className="logout__container">
              <p className="logout">Salir</p>
              <img className="logout__arrow" src={logout} alt="" />
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
          <div className="list__container">
            <ul className="employee__list">
              {nameArr
                // .filter(item =>
                //   `${item.givenName} ${item.sn}`
                //     .toLocaleLowerCase()
                //     .normalize('NFD')
                //     .replace(/[\u0300-\u036f]/g, '')
                //     .includes(
                //       filterName
                //         .toLocaleLowerCase()
                //         .normalize('NFD')
                //         .replace(/[\u0300-\u036f]/g, '')
                //     )
                // )
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
  collapsibleId: PropTypes.string
};

export default Search;
