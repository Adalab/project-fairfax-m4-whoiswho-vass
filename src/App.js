import React from 'react';
import './App.css';

const employeeArr = [
  {
      "givenName": "Pedro Javier",
      "sn": "Perez Mora",
      "sAMAccountName": "pedro.perez"
  },
  {
      "givenName": "Francisco Javier",
      "sn": "Pérez García",
      "sAMAccountName": "javier.perezgarcia"
  },
  {
      "givenName": "Javier",
      "sn": "Perez Alonso",
      "sAMAccountName": "javier.perez"
  },
  {
      "givenName": "Javier",
      "sn": "Perez Gonzalo",
      "sAMAccountName": "javier.pgonzalo"
  },
  {
      "givenName": "Juan Javier",
      "sn": "Perez Ruiz",
      "sAMAccountName": "juan.perez"
  },
  {
      "givenName": "Javier",
      "sn": "Perez Garcia",
      "sAMAccountName": "jperez"
  }
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="employee__list">
          {employeeArr
            .map(item => 
              <li className="employee__list--item">{item.givenName} {item.sn}</li>
              )
          }  
        </ul>
      </div>
    );
  }
}

export default App;
