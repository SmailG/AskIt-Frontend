import './style.css';
import React, { Component }  from 'react';
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react'

const AuthForm = ({
    mode,
    switchMode,
    submitHandler,
    handleChange,
    authData,
    error }) => {

const loginForm = (
        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' value={authData.userName} name="userName" onChange={handleChange} />
             </Form.Field>
        <Form.Field>
                <label>Password</label>
                <input placeholder='Password' value={authData.password} type="password" name="password" onChange={handleChange} />
            </Form.Field>
        <Form.Field>
            <span>No account ? To register click <a className="register-button" onClick={switchMode}>here</a></span>
        </Form.Field>
            <Button type='submit' onClick={submitHandler} >Login</Button>
            <div className="error-message">{error}</div>
        </Form>
    );

    const registerForm = (
        <Form>
        <Form.Field>
                <label>Email</label>
                <input placeholder='Email' value={authData.email} name="email" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
                <label>Username</label>
                <input placeholder='Username' value={authData.userName} name="userName" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
                <label>Password</label>
                <input placeholder='Password' value={authData.password} type="password" name="password" onChange={handleChange} />
            </Form.Field>
        <Form.Field>
            <span>If you already have an account click <a className="register-button" onClick={switchMode}>here</a></span>
        </Form.Field>
            <Button type='submit' onClick={submitHandler} >Register</Button>
            <div className="error-message">{error}</div>
        </Form>
    ); 


    return mode === 'login' ? loginForm : registerForm;
}

export default AuthForm;