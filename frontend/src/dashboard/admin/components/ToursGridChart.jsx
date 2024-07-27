// import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Customers: 4,
    Amount: 10400,
  },
  {
    name: "February",
    Customers: 10,
    Amount: 35398,
  },
  {
    name: "March",
    Customers: 7,
    Amount: 9800,
  },
  {
    name: "April",
    Customers: 2,
    Amount: 9000,
  },
  {
    name: "May",
    Customers: 1,
    Amount: 4800,
  },
  {
    name: "June",
    Customers: 23,
    Amount: 30800,
  },
  {
    name: "July",
    Customers: 3,
    Amount: 4300,
  },
  {
    name: "August",
    Customers: 2,
    Amount: 9800,
  },
  {
    name: "september",
    Customers: 7,
    Amount: 13908,
  },
  {
    name: "October",
    Customers: 8,
    Amount: 14800,
  },
  {
    name: "November",
    Customers: 12,
    Amount: 30800,
  },
  {
    name: "December",
    Customers: 1,
    Amount: 4300,
  },
];

export default function ToursChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Bookings</strong>
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
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Amount" fill="#0ea5e9" />
            <Bar dataKey="Customers" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
