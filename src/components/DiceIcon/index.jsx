import React from 'react'
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function renderSwitch(number) {
    let color = `#1e8986c4`
    switch (number) {
        case 1: {
            return <FontAwesomeIcon icon={faDiceOne} size={`6x`} color={color} />;
        }
        case 2: {
            return <FontAwesomeIcon icon={faDiceTwo} size={`6x`} color={color} />;
        }
        case 3: {
            return <FontAwesomeIcon icon={faDiceThree} size={`6x`} color={color} />
        }
        case 4: {
            return <FontAwesomeIcon icon={faDiceFour} size={`6x`} color={color} />;
        }
        case 5: {
            return <FontAwesomeIcon icon={faDiceFive} size={`6x`} color={color} />;
        }
        case 6: {
            return <FontAwesomeIcon icon={faDiceSix} size={`6x`} color={color} />;
        }
        default: {
            throw Error(`Unexpected value: ${number}`);
        }
    }
  }

export const DiceIcon = ({ number }) => {
   return (
    <>
     { renderSwitch(number)}
    </>
   )
}

