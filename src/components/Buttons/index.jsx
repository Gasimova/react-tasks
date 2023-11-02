import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Buttons.module.css'

export const ButtonDice = ({handleClick, loading, text}) => {
  return (
    <>
        <Button className={styles.diceBtn}  disabled={loading} onClick={handleClick}> {text} </Button>
    </>
  )
}
