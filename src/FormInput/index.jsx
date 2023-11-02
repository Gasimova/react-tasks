import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './FormInput.module.css'

export const FormInput = ({type, placeholder , controlId, handleChange, name}) => {
    return (
        <>
            <Form.Group controlId={controlId}>
                <Form.Control onChange={handleChange} name={name} className={styles.formInput} type={type} placeholder={placeholder} />
            </Form.Group>
        </>
    )
}
