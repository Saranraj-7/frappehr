import React from 'react'
import Button from '../Components/Button/Button';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/login');
    }
    return (
        <>
        <Row>
            <Col className='d-flex justify-content-between'> 
            <div>Dashboard
            </div>
            <div>
                <Button onClick={handleClick} className='btn btn-danger' label='Logout'/>
            </div>
            </Col>
            </Row>
        </>
    )
}

export default Dashboard;