import React, { useState } from 'react';
import CustomInput from '../Components/Input/CustomInput';
import { Container, Col, Row, Form } from 'react-bootstrap';
import '../Assets/Css/Style.css';
import frappelogo from '../Assets/Images/frappehr.png';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Organisation = () => {

    const inputs = [
        { label: "Company Name" },
        { label: "Company Abbreviation" },
        { label: "Industry" },
        { label: "Number of employees" },
        { label: "Your Designation" },
        { label: "Phone Number" },
        { label: "Your Language" },
        { label: "Time Zone" },
        { label: "Currency", type: "currency" },
        { label: "Financial Year Begins On", type: "date" }
    ];

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return (
        <div className='signup-body '>
            <div className='d-flex justify-content-center'>
                <img src={frappelogo} className="mb-4 frappr-logo mt-4" />
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center signup-body vh-100'>
                    <Container >
                        <Row className="justify-content-center">

                            <Col className='card' xs={12} sm={10} md={8} lg={6} xl={6}>
                                <div className='card-body '>
                                    <Row>
                                        {inputs.map(input =>
                                            <Col xs={12}>
                                                <CustomInput label={input.label} type={input.type} required />
                                            </Col>
                                        )}
                                    </Row>
                                    <Button type='button'  className='btn btn-dark mt-2 w-100' label="Create Account" />

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Form>
        </div>
    );
}

export default Organisation;
