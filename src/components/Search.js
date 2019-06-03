import React from 'react';
import Detail from './Detail';
import PropTypes from 'prop-types';



class Search extends React.Component {
  render () {
    const { filterName, nameArr, collapsibleId, handleFilter, handleCollapsible } = this.props;
    if (filterName === '') {
      return (
        <div className="input__container">
          <label htmlFor="filterEmployee">Campo de búsqueda</label>
          <input
            onChange={handleFilter}
            name="filterEmployee"
            id="filterEmployee"
            type="text"
            />
        </div>
      );
    } else if (filterName === '*') {
      return (
        <div className="App">
          <label htmlFor="filterEmployee">Campo de búsqueda</label>
          <input
            onChange={handleFilter}
            name="filterEmployee"
            id="filterEmployee"
            type="text"
            />
          <ul className="employee__list">
            {nameArr.map(item => (
              <li key={item.id} className="employee__list--item">
                <div
                  className="item__container"
                  onClick={handleCollapsible}
                  id={item.id}
                  >
                  <h2 className="item__name">{item.givenName} {item.sn}</h2>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {collapsibleId === item.id ? <Detail /> : null}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="App">
          <label htmlFor="filterEmployee">Campo de búsqueda</label>
          <input
            onChange={handleFilter}
            name="filterEmployee"
            id="filterEmployee"
            type="text"
          />
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
                  onClick={handleCollapsible}
                  id={item.id}
                >
                  <h2 className="item__name">{item.givenName} {item.sn}</h2>
                  <i className="fas fa-chevron-down"></i>
                </div>
                  {collapsibleId === item.id ? <Detail /> : null}
                </li>
              ))}
          </ul>
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
}

export default Search;