import React from 'react';

const arrDetail = [
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Pedro Javier Perez Mora,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Pedro Javier Perez Mora',
    mail: 'pedro.perez@gmail.com'
  },
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Francisco Javier Pérez García,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Francisco Javier Pérez García',
    mail: 'javier.perezgarcia@gmail.com'
  },
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Javier Perez Alonso,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Javier Perez Alonso',
    mail: 'javier.perez@gmail.com'
  },
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Javier Perez Gonzalo,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Javier Perez Gonzalo',
    mail: 'javier.pgonzalo@gmail.com'
  },
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Juan Javier Perez Ruiz,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Juan Javier Perez Ruiz',
    mail: 'juan.perez@gmail.com'
  },
  {
    physicalDeliveryOfficeName: 'Madrid',
    telephoneNumber: '662025543',
    distinguishedName:
      'CN=Javier Perez Garcia,OU=Tailor-Made Solutions,OU=Delivery,OU=Vass Madrid,OU=VASS,DC=VASS,DC=INET',
    department: 'EST SOL,PROC&INT.MAD',
    company: 'VASS',
    name: 'Javier Perez Garcia',
    mail: 'jperez@gmail.com'
  }
];

class Detail extends React.Component {
  render() {
    const { collapsibleId } = this.props;
    return (
      <React.Fragment>
          <div className="employee__detail">
            <p className="employee__detail--company">Empresa: <span className="employee__detail--company-span">{arrDetail[collapsibleId].company}</span></p>
            <p className="employee__detail--region">Región: <span className="employee__detail--region-span">{arrDetail[collapsibleId].physicalDeliveryOfficeName}</span></p>
            <p className="employee__detail--email">
              Email: <a className="employee__detail--email-link" href={`mailto:${arrDetail[collapsibleId].mail}`}>{arrDetail[collapsibleId].mail}</a>
            </p>
            <p className="employee__detail--phone">
              Tlf: <a className="employee__detail--phone-link" href={`tel:${arrDetail[collapsibleId].telephoneNumber}`}>
                {arrDetail[collapsibleId].telephoneNumber}
              </a>
            </p>
          </div>
      </React.Fragment>
    );
  }
}

export default Detail;
