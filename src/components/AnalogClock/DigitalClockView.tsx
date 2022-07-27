import React from 'react';

export const DigitalClockView = ({date}: { date: Date }) => {
    return <span>Digital - {date.toLocaleTimeString()}</span>
}