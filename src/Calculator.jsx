import React, { useState } from 'react';

const AgeCalculator = () => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const handleCalculate = () => {
        if (dateOfBirth) {
            const calculatedAge = calculateAge(dateOfBirth);
            setAge(calculatedAge);
        }
    };

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '50px',
                    backgroundColor: '#cacfd2 ',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
                }}>
                <h1>Age Calculator</h1>
                <hr />
                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '15px',
                        border: '1px solid #ccc'
                        , backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                />
                <br />
                <button onClick={handleCalculate}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        marginTop: '10px',
                        borderRadius: '15px',
                        border: 'none',
                        backgroundColor: '#d0d3d4',
                        color: 'white',
                        cursor: 'pointer'
                    }}>
                    Know your Age
                </button>
                {age !== null && (
                    <div style={{ marginTop: '20px' }}>
                        <h1>Your age is {age}</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgeCalculator;
