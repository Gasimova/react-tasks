import React, { useState } from 'react'
import styles from './Colors.module.css'
import { SingleColorBox } from './SingleColorBox'

export const ColorBox = () => {
    const colors = ['red', 'blue', 'purple', 'yellow', 'green', 'orange', 'black', 'gray', 'pink', 'brown', 'maroon', 'turquoise']

    return (
        <div className={styles.colorBox}>
            {
                colors.map((color) => {
                    return <SingleColorBox background={color} key={color} colors={colors} />
                })
            }
        </div>
    )
}
