import { useState } from "react";
import Box from "./Box";

const RandomNumber = () => {
    const [randomNumber, setRandomNumber] = useState()

    const generateRandomNumber = () => {
        const generatedNumber = Math.floor(Math.random() * 100);
        setRandomNumber(generatedNumber)
    }

    return (
        <Box fontColor="#fff">
            <button onClick={generateRandomNumber}>
                Sortear número aleatório
            </button>
            <h3>O número aleatório é: {randomNumber}</h3>
        </Box>
    );
}

export default RandomNumber;