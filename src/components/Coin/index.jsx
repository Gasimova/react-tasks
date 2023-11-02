import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ButtonDice } from '../Buttons'
import { Img } from '../Imgs'
import styles from './Coin.module.css'

export const Coin = () => {
    const [flip, setFlip] = useState(false)
    const [head, setHead] = useState(0)
    const [tail, setTail] = useState(0)

    const handleClick = () => {
        setFlip(()=>!flip)
        if (flip) {
            setHead(()=> head +1)
        }else{
            setTail(()=> tail +1)
        }
    }

    return (
        <div className={styles.coinBox}>
             <Img src={flip ? 'https://i.colnect.net/f/1547/112/20-Q%C9%99pik.jpg':'https://i.ucoin.net/coin/48/624/48624271-1/azerbaijan-20-qapik-2006.jpg' } alt={flip? 'head':'tail'} />
             <span> Out of  {head + tail} flips, there have been {head} heads and {tail} tails </span>
            <ButtonDice  handleClick={handleClick} text='Flip me'  />
        </div>
    )
}
