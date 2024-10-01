import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStopAndReset = () => {
        setIsRunning(false); 
        setCount(0); 
    };

    const handleStart = () => {
        setCount(0); 
        setIsRunning(true); 
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contador: {count}</h1>
            {isRunning ? (
                <button onClick={handleStopAndReset} style={styles.button}>
                    Parar
                </button>
            ) : (
                <button onClick={handleStart} style={styles.button}>
                    Iniciar
                </button>
            )}
        </div>
    );
};


const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '2px solid pink',
        borderRadius: '10px',
        backgroundColor: '#ffe6f2',
        width: '300px',
        margin: '0 auto',
    },
    title: {
        fontSize: '24px',
        color: '#ff66b3',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#ff66b3',
        color: 'white',
        cursor: 'pointer',
        margin: '5px',
    },
};

export default Counter;