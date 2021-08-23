import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container className="footer" fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        nicholas coursel-stoll
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        this site was created by nicholas coursel-stoll, 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;