import React from 'react';

const arrDetail = [
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Francisco Javier Pérez García,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Francisco Javier Pérez García',
    mail: 'aranzazunarvaez@gmail.com'
  }
];

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
                  <h2 className="item__name">

                    {item.givenName} {item.sn}
                  </h2>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {collapsibleId === item.id
                  ? arrDetail.map((item, index) => (
                    <div className="employee__detail" key={index}>
                        <p className="employee__detail--company">Empresa: <span className="employee__detail--company-span">{item.company}</span></p>
                        <p className="employee__detail--region">Región: <span className="employee__detail--region-span">{item.physicalDeliveryOfficeName}</span></p>
                        <p className="employee__detail--email">
                          Email: <a className="employee__detail--email-link" href={`mailto:${item.mail}`}>{item.mail}</a>
                        </p>
                        <p className="employee__detail--phone">
                          Tlf: <a className="employee__detail--phone-link" href={`tel:${item.telephoneNumber}`}>
                            {item.telephoneNumber}
                          </a>
                        </p>
                      </div>
                    ))
                    : null}
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
                  <h2 className="item__name">

                    {item.givenName} {item.sn}
                  </h2>
                  <i className="fas fa-chevron-down"></i>
                </div>
                  {collapsibleId === item.id
                    ? arrDetail.map((item, index) => (
                        <div className="employee__detail" key={index}>
                          <p className="employee__detail--company">Empresa: <span className="employee__detail--company-span">{item.company}</span></p>
                          <p className="employee__detail--region">Región: <span className="employee__detail--region-span">{item.physicalDeliveryOfficeName}</span></p>
                          <p className="employee__detail--email">
                            Email: <a className="employee__detail--email-link" href={`mailto:${item.mail}`}>{item.mail}</a>
                          </p>
                          <p className="employee__detail--phone">
                            Tlf: <a className="employee__detail--phone-link" href={`tel:${item.telephoneNumber}`}>
                              {item.telephoneNumber}
                            </a>
                          </p>
                        </div>
                      ))
                    : null}
                </li>
              ))}
          </ul>
        </div>
      );
    }
  }
}

export default Search;