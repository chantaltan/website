import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Amazon from '../assets/images/companies/amazon.svg';
import Avantstay from '../assets/images/companies/avantstay.svg';
import Blizzard from '../assets/images/companies/blizzard.svg';
import CacheCDS from '../assets/images/companies/cache_cds.svg';
import Facebook from '../assets/images/companies/facebook.svg';
import GreenDot from '../assets/images/companies/green_dot.svg';
import IBM from '../assets/images/companies/ibm.svg';
import ImpactHK from '../assets/images/companies/impact_hk.svg';
import Microsoft from '../assets/images/companies/microsoft.svg';
import PPG from '../assets/images/companies/ppg.svg';
import Stripe from '../assets/images/companies/stripe.svg';

const companyData = [
  {
    logo: Amazon,
    link: 'https://www.amazon.com/',
  },
  {
    logo: Avantstay,
    link: 'https://avantstay.com/',
  },
  {
    logo: Blizzard,
    link: 'https://www.blizzard.com/',
  },
  {
    logo: CacheCDS,
    link: 'https://www.cachecds.com/',
  },
  {
    logo: Facebook,
    link: 'https://www.facebook.com/',
  },
  {
    logo: GreenDot,
    link: 'https://www.greendot.com/',
  },
  {
    logo: IBM,
    link: 'https://www.ibm.com/us-en/',
  },
  {
    logo: ImpactHK,
    link: 'https://impacthk.org/',
  },
  {
    logo: Microsoft,
    link: 'https://www.microsoft.com/',
  },
  {
    logo: PPG,
    link: 'http://corporate.ppg.com/Home.aspx',
  },
  {
    logo: Stripe,
    link: 'https://stripe.com/',
  },
];

export default function WhereWeveBeen() {
  const companyLinks = companyData.map((item) => (
    <a className="company-link" href={item.link} key={JSON.stringify(item)}>
      <Fade>
        <Image className="company-img" src={item.logo} />
      </Fade>
    </a>
  ));
  return (
    <div className="container-fluid py-5 where-weve-been">
      <Container className="py-5">
        <Row className="title">
          <Col>
            <h1>Where We&#39;ve Been</h1>
          </Col>
        </Row>
        <Row>
          <div className="company-container">{companyLinks}</div>
        </Row>
      </Container>
    </div>
  );
}
