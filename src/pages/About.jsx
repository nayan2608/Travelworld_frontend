import React, { useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap';
import Subtitle from './../shared/Subtitle'

const About = () => {
 
  useEffect(()=> {
     window.scroll(0,0);
  },[])

  return (
    <section>
            <Container>
                <Row>
                    <Col lg='12'> 
                      <Subtitle subtitle={'About us'} />
                      <p className='about'>Since 1975, 'Travel World' has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world's marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs. </p>
                      <p className='about'>We're a worker-claimed travel organization secured by our qualities, trustworthiness, and commitment to client benefit. </p>
                      <p className='about'>Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched advantages. </p>
                      <p className='about'>Since 2009, our solid organizational culture and enthusiasm for our calling have brought about our being named one of the "Best Places To Work" in India County every year. Our administration is dynamic on different tourism warning sheets and panels for movement associations.</p>
                      <p className='about'>Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization rely on satisfying our customer's needs each day. That is additionally our guarantee. </p>
                    </Col>
                </Row>
            </Container>
    </section>
  )
}

export default About;