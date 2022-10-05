import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap/esm';
import Records from '../Nirbacitokhobor/Data.json';
import Records2 from '../Nirbacitokhobor/Data2.json';

const Orthouddug = () => {
    return (
        <Container style={{marginTop: '50px', backgroundColor:'#c5c2c2', borderRadius:'20px'}}>
        <Row>
            <Col xs={12} md={8} lg={8}>
                <h3 className='CardHeadline'>কৃষি অর্থনীতি</h3>
                <Row>
                    {
                        Records.map(({title,picture,des,id})=> {
                            return (


                                <Card key={id} style={{ width: '14rem', height: '18rem', margin: '10px' }}>
                                   
                                    <Card.Img className='image' variant="top" src={picture}   ></Card.Img>
                                    <Card.Body>
                                        <Card.Title className='newTitle'>{title}</Card.Title>
                                        <Card.Text className='newsSubTitle'>
                                            {des}
                                        </Card.Text>


                                    </Card.Body>
                                    
                                    

                                </Card>




                            )
                        })
                    }
                </Row>
            </Col>
            <Col xs={4} md={4} >
                <h3 className='CardHeadline'>কৃষি উদ্যোক্তা</h3>
                {Records2.map(({title,des,picture,id})=> {
                            return (
                    <Card style={{ width: '18rem' , marginTop: '10px' }}>
                       
                        <Card.Body>
                        
                            <Card.Title className='newTitle'>{title}</Card.Title>
                            
                            <Card.Text className='newsSubTitle'>
                                {des}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                            )
                })
                            }

            </Col>
        </Row>

    </Container>
    );
};

export default Orthouddug;