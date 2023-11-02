import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ButtonDice } from '../Buttons'
import { DiceIcon } from '../DiceIcon'
import styles from './Dice.module.css'

export const Dice = () => {
    const data = {
        diceOne: 1,
        diceTwo: 1
    }
    const [loading, setLoading] = useState(false)
    const [dice, setDice] = useState(data)


    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setDice({
                diceOne: Math.floor(Math.random() * 6) + 1,
                diceTwo: Math.floor(Math.random() * 6) + 1,
            })
            setLoading(false)
        }, 500);

    }

    return (
        <div className={styles.diceBox}>
            <div className={styles.diceIconBox}>
                <DiceIcon number={dice.diceOne} />
                <DiceIcon number={dice.diceTwo} />
            </div>

            <ButtonDice handleClick={handleClick} loading={loading} text={loading ? 'Rolling...' : 'Roll Dice'} />
        </div>
    )
}
