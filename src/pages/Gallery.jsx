import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import Subtitle from './../shared/Subtitle'
import MasonryImageGallery from '../components/Image-gallery/MasonryImagesGallery'

const Gallery = () => {
  return (
    <section>
            <Container>
                <Row>
                    <Col lg='12'> 
                      <Subtitle subtitle={'Gallery'} />
                      <h2 className='gallery__title'>Visit our customer tour gallery</h2>
                    </Col>
                    <Col lg='12'>
                       <MasonryImageGallery />
                    </Col>
                </Row>
            </Container>
    </section>
  )
}

export default Gallery;