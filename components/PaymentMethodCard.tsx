'use client'

type PaymentMethod = {
  id: number
  name: string
  status: 'active' | 'pending' | 'inactive'
  earnings: number
  icon: string
}

export default function PaymentMethodCard({ method }: { method: PaymentMethod }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'stripe':
        return (
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-indigo-600">S</span>
          </div>
        )
      case 'paypal':
        return (
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-blue-600">P</span>
          </div>
        )
      case 'crypto':
        return (
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-orange-600">₿</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors">
      <div className="flex items-center space-x-3">
        {getIcon(method.icon)}
        <div>
          <div className="font-semibold text-slate-900">{method.name}</div>
          <div className="text-sm text-slate-600">${method.earnings.toLocaleString()}</div>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(method.status)}`}>
        {method.status}
      </span>
    </div>
  )
}