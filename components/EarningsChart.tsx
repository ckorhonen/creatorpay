'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', earnings: 1200 },
  { month: 'Feb', earnings: 1800 },
  { month: 'Mar', earnings: 2100 },
  { month: 'Apr', earnings: 2400 },
  { month: 'May', earnings: 2800 },
  { month: 'Jun', earnings: 3280 },
]

export default function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="month" 
          stroke="#64748b"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#64748b"
          style={{ fontSize: '12px' }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '14px',
          }}
          formatter={(value) => [`$${value}`, 'Earnings']}
        />
        <Line 
          type="monotone" 
          dataKey="earnings" 
          stroke="#0ea5e9" 
          strokeWidth={3}
          dot={{ fill: '#0ea5e9', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}