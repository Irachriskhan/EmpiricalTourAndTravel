import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'kacyiru',
        Registers: 4000,
        Donates: 2400
    },
    {
        name: 'CHIK',
        Registers: 3000,
        Donates: 1398
    },
    {
        name: 'MUHIMA',
        Registers: 2000,
        Donates: 9800
    },
    {
        name: 'BUTARE',
        Registers: 2780,
        Donates: 3908
    },
    {
        name: 'REMERA',
        Registers: 1890,
        Donates: 4800
    },
    {
        name: 'BUGESERA',
        Registers: 2390,
        Donates: 3800
    },
    {
        name: 'RULINDO',
        Registers: 3490,
        Donates: 4300
    },
    {
        name: 'KARONGI',
        Registers: 2000,
        Donates: 9800
    },
    {
        name: 'KIBUNGO',
        Registers: 2780,
        Donates: 3908
    },
    {
        name: 'CHIB',
        Registers: 1890,
        Donates: 4800
    },
    {
        name: 'RBC',
        Registers: 2390,
        Donates: 3800
    },
    {
        name: 'NDERA',
        Registers: 3490,
        Donates: 4300
    }
];

export default function DonationChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Booking</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Donates" fill="#0ea5e9" />
                        <Bar dataKey="Registers" fill="#ea580c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
