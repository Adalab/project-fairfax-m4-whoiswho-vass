import React from 'react';
import Detail from './Detail';
import PropTypes from 'prop-types';
import logout from '../images/Salir.png';

class Search extends React.Component {
  // componentDidMount() {
  //   this.props.onSubmit();
  // }
  render() {
    const { filterName, nameArr, collapsibleId, handleFilter } = this.props;
    console.log('---->', nameArr);
    console.log('---->', filterName);
    if (filterName === '') {
      return (
        <div className="main__container">
          <div className="input__container">
            <label className="label__input" htmlFor="filterEmployee">
              Campo de búsqueda
            </label>
            <div className="search">
              <input
                onChange={handleFilter}
                className="input"
                name="filterEmployee"
                id="filterEmployee"
                type="text"
              />
              <i className="fas fa-search" />
            </div>
          </div>
        </div>
      );
    } else if (filterName === '*') {
      return (
        <div className="app__who-is-who">
          <header className="list__header">
            <h1 className="list__title">VASS</h1>
            <div className="logout__container">
              <a className="link__logout" href="#">
                <p className="logout">Salir</p>
                <img className="logout-arrow" src={logout} alt="" />
              </a>
            </div>
          </header>
          <div className="main__container">
            <div className="input__container">
              <label className="label__input" htmlFor="filterEmployee">
                Campo de búsqueda
              </label>
              <div className="search">
                <input
                  onChange={handleFilter}
                  className="input"
                  name="filterEmployee"
                  id="filterEmployee"
                  type="text"
                />
                <i className="fas fa-search" />
              </div>
            </div>
            <div className="list__container">
              <ul className="employee__list">
                {nameArr.map(item => (
                  <li key={item.id} className="employee__list--item">
                    <div
                      className="item__container"
                      onClick={this.handleCollapsible}
                      id={item.id}
                    >
                      <h2 className="item__name">
                        {item.givenName} {item.sn}
                      </h2>
                      <i className="fas fa-chevron-down" />
                    </div>
                    {collapsibleId === item.id ? (
                      <Detail collapsibleId={collapsibleId} />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main__container">
          <div className="input__container">
            <label className="label__input" htmlFor="filterEmployee">
              Campo de búsqueda
            </label>
            <div className="search">
              <input
                onChange={handleFilter}
                className="input"
                name="filterEmployee"
                id="filterEmployee"
                type="text"
              />
              <i className="fas fa-search" />
            </div>
          </div>
          <div className="list__container">
            <ul className="employee__list">
              {nameArr
                .filter(item =>
                  `${item.givenName} ${item.sn}`
                    .toLocaleLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .includes(
                      filterName
                        .toLocaleLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                    )
                )
                .map(item => (
                  <li key={item.id} className="employee__list--item">
                    <div
                      className="item__container"
                      onClick={this.handleCollapsible}
                      id={item.id}
                    >
                      <h2 className="item__name">
                        {item.givenName} {item.sn}
                      </h2>
                      <i className="fas fa-chevron-down" />
                    </div>
                    {collapsibleId === item.id ? (
                      <Detail collapsibleId={collapsibleId} />
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
  collapsibleId: PropTypes.number,
  handleFilter: PropTypes.func.isRequired,
  handleCollapsible: PropTypes.func.isRequired
};

export default Search;
