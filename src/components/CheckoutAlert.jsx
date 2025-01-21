import { useState } from 'react';
import { useNavigate } from "react-router";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function CheckoutAlert(props) {

    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        props.onHide()
        navigate(`/`)
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Alert show={show} variant="success" className='w-100'>
                <Alert.Heading>La orden se proceso correctamente </Alert.Heading>
                <hr />
                <p>
                    Codigo de orden:  {props.id}
                </p>
                <hr />
                <div className="d-flex justify-content-end w-100">
                    <Button onClick={handleClick} variant="outline-success">Close</Button>
                </div>
            </Alert>
        </Modal>
    )
}

export default CheckoutAlert