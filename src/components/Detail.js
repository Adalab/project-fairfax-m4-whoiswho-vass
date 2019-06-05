import React from 'react';

class Detail extends React.Component {
  render() {
    const { detailArr } = this.props;
    return (
      <React.Fragment>
        <div className="employee__detail">
          <div className="city">
            <p className="employee__detail--company">
              Empresa:{' '}
              <span className="employee__detail--company-span employee__detail-marg">
                {detailArr.company}
              </span>
            </p>
            <p className="employee__detail--region">
              Región:{' '}
              <span className="employee__detail--region-span employee__detail-marg">
                {detailArr.physicalDeliveryOfficeName}
              </span>
            </p>
          </div>
          <div className="contact">
            <p className="employee__detail--email">
              Email:{' '}
              <a
                className="employee__detail--email-link"
                href={`mailto:${detailArr.mail}`}
              >
                {detailArr.mail}
              </a>
            </p>
            <p className="employee__detail--phone">
              Tlf:{' '}
              <a
                className="employee__detail--phone-link"
                href={`tel:${detailArr.telephoneNumber}`}
              >
                {detailArr.telephoneNumber}
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
