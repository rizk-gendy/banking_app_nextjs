'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnurtChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        labels: ['Bank 1', 'Bank 2', 'Bank 3'],
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3750],
                backgroundColor: [
                    '#0747b6',
                    '#2265d8',
                    '#2f91fa'

                ]
            },

        ],

    };
    return (
        <div>
            <Doughnut

                data={data}
                options={{
                    cutout: '60%',
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default DoughnurtChart