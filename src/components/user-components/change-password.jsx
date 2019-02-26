import './style.css';
import React, { Component }  from 'react';
import { Button, Form } from 'semantic-ui-react'

const ChangePassword = ({
    data,
    error,
    handleChange,
    switchMode,
    submitHandler,
    validation }) => {

    return (
        <Form className="user-container" >
        <Form.Field>
                <label>Old password</label>
                <input placeholder='Old password' type="password" value={data.oldPassword} name="oldPassword" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
                <label>New password</label>
                <input placeholder='New password' type="password" value={data.newPassword} name="newPassword" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
                <label>Confirm password</label>
                <input placeholder='Confirm password' type="password" value={data.confirmPassword} name="confirmPassword" onChange={handleChange} />
        </Form.Field>
            <Button type='submit' onClick={submitHandler} >Change password</Button>
            <Button type='submit' primary onClick={switchMode} >Go back</Button>
            <div className="error-message">{validation ? validation : error}</div>
        </Form>
    ); 
}

export default ChangePassword;