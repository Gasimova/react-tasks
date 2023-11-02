import React, { useState } from 'react'
import { Form , Button, Alert} from 'react-bootstrap'
import { FormInput } from '../../FormInput'
import { AlertBox } from '../Alerts'
import { ButtonDice } from '../Buttons'
import styles from './FormData.module.css'

export const FormData = () => {
    const [data, setData]  = useState({email:"", password:""})
    const [show, setShow]  = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        const callBack = (prev) => {
            const newData = { ...prev, [name]: value }
            return newData
        }
        setData(callBack)
        setShow(false)
    }

    const handleClick =()=>{
        setShow(true)
    }

    return (
        <div className={styles.formBox}>
            <Form >
                <FormInput type='email' name='email' handleChange={handleChange} placeholder='Enter email' controlId='formBasicEmail' />
                <FormInput type='password' name='password' handleChange={handleChange} placeholder='Enter password' controlId='formBasicPassword' />
                <ButtonDice handleClick={handleClick} text='Submit' />
                
            </Form>
            {
                    show ? <AlertBox variant="success" data={data} show={show} /> : ''
            }
        </div>
    )
}
