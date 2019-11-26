import {useState} from 'react';

export const useInput = initial => {
    const [values, setValues] = useState(initial);

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
}