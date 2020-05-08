import { useState, useEffect } from 'react';
import moment from 'moment'

function useClock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const time = moment().format('LT')
            setTimeString(time)
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);
    
    return { timeString }
}

export default useClock;