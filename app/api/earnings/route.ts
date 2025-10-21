import { NextRequest, NextResponse } from 'next/server'

// Get earnings data for dashboard
export async function GET(request: NextRequest) {
  try {
    // TODO: Fetch from database based on authenticated user
    // This is mock data for demo purposes
    
    const mockEarnings = {
      total: 12450,
      thisMonth: 3280,
      growth: 23.5,
      supporters: 156,
      byMethod: [
        { method: 'stripe', earnings: 8920, percentage: 71.7 },
        { method: 'paypal', earnings: 2340, percentage: 18.8 },
        { method: 'crypto', earnings: 1190, percentage: 9.5 },
      ],
      chartData: [
        { month: 'Jan', earnings: 1200 },
        { month: 'Feb', earnings: 1800 },
        { month: 'Mar', earnings: 2100 },
        { month: 'Apr', earnings: 2400 },
        { month: 'May', earnings: 2800 },
        { month: 'Jun', earnings: 3280 },
      ],
    }

    return NextResponse.json(mockEarnings)
  } catch (error) {
    console.error('Earnings fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch earnings' },
      { status: 500 }
    )
  }
}