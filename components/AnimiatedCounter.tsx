'use client';

import React from 'react'
import CountUp from 'react-countup';

const AnimiatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp
            decimal=","
            prefix="$"
            end={amount}
            duration={2.75}
            decimals={2}

            />
        </div>
    )
}

export default AnimiatedCounter