import React from 'react'
import { Alert } from 'react-bootstrap'

export const AlertBox = ({ data, show }) => {
    return (
        <>
            <Alert variant="success">
                <Alert.Heading></Alert.Heading>


                {
                    show ?
                        <div>
                            <p>Email: data.email</p>
                            <p>Password: data.Password</p>
                        </div> : ''
                }

            </Alert>
        </>
    )
}
