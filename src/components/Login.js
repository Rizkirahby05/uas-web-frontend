import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2'; 

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        Swal.fire(
            'Sukses!',
            'Kamu berhasil login',
            'success'
          )
    }
  return (
    <div className="row">
      <div className="col-md-6">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Masuk
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
