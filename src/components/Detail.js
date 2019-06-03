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

class Detail extends React.Component {
  render() {
    return (
      <React.Fragment>
        {arrDetail.map((item, index) => (
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
        ))}
      </React.Fragment>
    );
  }
}

export default Detail;
