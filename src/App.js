import React from 'react';
import './App.css';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArr: [],
      filterName: '',
      collapsibleId: null
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }

  componentDidMount() {
    const newArr = employeeArr.map((item, index) => {
      return { ...item, id: index };
    });
    this.setState({ nameArr: newArr });
  }

  handleFilter(event) {
    const currentValue = event.currentTarget.value;
    this.setState({ filterName: currentValue });
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

  render() {
    const { nameArr, filterName, collapsibleId } = this.state;
    if (filterName === '') {
      return (
        <div className="input__container">
          <label htmlFor="filterEmployee">Campo de búsqueda</label>
          <input
            onChange={this.handleFilter}
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
            onChange={this.handleFilter}
            name="filterEmployee"
            id="filterEmployee"
            type="text"
          />
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
                  <i className="fas fa-chevron-down"></i>
                </div>
                {collapsibleId === item.id
                  ? arrDetail.map((item, index) => (
                      <div className="employee__detail" key={index}>
                        <p>Empresa: {item.company}</p>
                        <p>Región: {item.physicalDeliveryOfficeName}</p>
                        <p>
                          Email: <a href={`mailto:${item.mail}`}>{item.mail}</a>
                        </p>
                        <p>
                          Tlf:
                          <a href={`tel:+34${item.telephoneNumber}`}>
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
            onChange={this.handleFilter}
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
                  onClick={this.handleCollapsible}
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
                          <p>Empresa: {item.company}</p>
                          <p>Región: {item.physicalDeliveryOfficeName}</p>
                          <p>
                            Email:
                            <a href={`mailto:${item.mail}`}>{item.mail}</a>
                          </p>
                          <p>
                            Tlf:
                            <a href={`tel:${item.telephoneNumber}`}>
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

export default App;
