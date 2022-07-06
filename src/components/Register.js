import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2'; 

const Register = () => {
  
  const onSubmit = (e) => {
    e.preventDefault();
    Swal.fire(
        'Sukses!',
        'Kamu berhasil mendaftar <br> Anda dapat membaca dan mendownload buku dengan gratis',
        'success'
      )
}
  return (
    <div className="row">
      <div className="col-md-6">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control type="text" placeholder="Nama Lengkap" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Np. Hp</Form.Label>
            <Form.Control type="text" placeholder="No. HP" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
            <Form.Label>Konfirmasi Password</Form.Label>
            <Form.Control type="password" placeholder="Konfirmasi Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
