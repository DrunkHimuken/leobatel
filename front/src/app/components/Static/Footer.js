import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LEOBatelLogo from '../../../images/LEOBatelLogoPB.png'
import { Row, Col, Container } from 'reactstrap'
import { withRouter } from 'react-router-dom'


const CopyRight = styled.div`
  background-color: #f2f3f4;
  text-align: center;
  padding: 20px 0;
  font-size: 12px;

  img {
    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  svg{
    margin: 0 10px;
    cursor: pointer;
    opacity: 0.7;

    :hover{
      opacity: 1;
    }
  }
`
const SocialLink = styled.a`
  color: unset;
  :hover{
    color: unset;
  }
`


class Footer extends Component {

  goLogin = () => {
    const { props } = this
    props.history.push('/login')
  }

  render() {
    return (
      <footer>
          <CopyRight>
            <Container>
              <Row>
                <Col lg={{ offset: 2, size: 3 }} sm="12">
                  <img src={LEOBatelLogo} alt="Logo Leo Batel" height="170" onClick={this.goLogin}/>
                </Col>
                <Col lg="4" sm="12" className="margin-auto">
                    <SocialLink href='http://facebook.com/leoclubebatel' target='_blank'>
                      <FontAwesomeIcon icon={['fab', 'facebook']}  size='3x'/>
                    </SocialLink>
                    <SocialLink href='http://instagram.com/leoclubebatel' target='_blank'>
                      <FontAwesomeIcon icon={['fab', 'instagram']} size='3x'/>
                    </SocialLink>
                    <SocialLink href='http://linkedin.com/company/leoclubebatel' target='_blank'>
                      <FontAwesomeIcon icon={['fab', 'linkedin']}  size='3x'/>
                    </SocialLink>
                    <br/><br/>
                    Copyright © 2018 - LEO Clube de Curitiba Batel <br/>
                    Todos os direitos reservados.
                </Col>
              </Row>  
            </Container>
          </CopyRight>
      </footer>
    );
  }
}

export default withRouter(Footer);
