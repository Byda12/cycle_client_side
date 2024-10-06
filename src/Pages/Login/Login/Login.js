import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';



const Login = () => {
    return (
        <div>
            <h2>I'm From Login Page</h2>
            <Button variant="primary">Primary</Button>{' '}  

            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-success">Success</button>

            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
        </div>
    );
};

export default Login;