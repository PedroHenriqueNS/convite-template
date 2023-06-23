import React, { useEffect } from 'react';

const Snowflakes = () => {
    useEffect(() => {
        // Function to generate snowflakes
        const generateSnowflakes = () => {
            const snowflakesContainer = document.querySelector('.snowContainer');

            // Determine the number of snowflakes you want
            const numSnowflakes: number = 1000;

            for (let i = 0; i < numSnowflakes; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflakeTop';
                snowflake.innerHTML = ''; // Use any snowflake character you prefer

                // Set initial position and animation
                const initialOffset = Math.random() * 100;
                const initialOpacity = Math.random();
                const initialSize = Math.random() * 3;
                const animationDuration = Math.random() * 5 + 5;

                snowflake.style.left = `${Math.random() * 100}vw`;
                snowflake.style.top = `${getRandomValue()}vh`;
                snowflake.style.opacity = initialOpacity.toString();
                // snowflake.style.transform = `scale(${initialSize}) translate(${initialOffset}vw, 0)`;

                snowflake.style.animationDuration = `${animationDuration}s`;
                snowflake.style.animationTimingFunction = 'ease-in';
                snowflake.style.animationIterationCount = 'infinite';
                snowflake.style.animationName = 'snowflake-fall';

                snowflakesContainer!.appendChild(snowflake);
            }
        };

        // Call the function to generate snowflakes
        generateSnowflakes();
    }, []);

    function getRandomValue() {
        // Gera um número aleatório entre 0 e 1
        const random = Math.random();

        // Calcula o valor baseado na probabilidade desejada
        const value = random * random * random * (30 - (-5)) + (-5);

        // Arredonda o valor para um número inteiro
        return Math.round(value);
    }

    return <div className="snowContainer"></div>;
};

export default Snowflakes;
