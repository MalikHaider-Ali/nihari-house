import { supabase } from './supabase'

export type OrderData = {
  customerName:    string
  customerPhone:   string
  customerAddress: string
  deliveryType:    'delivery' | 'pickup'
  items:           { id: string; name: string; price: number; qty: number }[]
  subtotal:        number
  deliveryFee:     number
  total:           number
  paymentMethod:   'cash' | 'easypaisa' | 'jazzcash'
}

export function generateOrderNumber(): string {
  const year   = new Date().getFullYear()
  const random = Math.floor(1000 + Math.random() * 9000)
  return `NH-${year}-${random}`
}

export async function createOrder(data: OrderData) {
  const orderNumber = generateOrderNumber()

  const { data: order, error } = await supabase
    .from('orders')
    .insert([
      {
        order_number:     orderNumber,
        customer_name:    data.customerName,
        customer_phone:   data.customerPhone,
        customer_address: data.customerAddress,
        delivery_type:    data.deliveryType,
        items:            data.items,
        subtotal:         data.subtotal,
        delivery_fee:     data.deliveryFee,
        total:            data.total,
        payment_method:   data.paymentMethod,
        status:           'pending',
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error creating order:', error)
    throw error
  }

  return { order, orderNumber }
}

export async function getOrderByNumber(orderNumber: string) {
  const clean = orderNumber.replace('#', '').trim().toUpperCase()

  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .ilike('order_number', clean)
    .single()

  if (error) {
    console.error('Error fetching order:', error)
    return null
  }

  return data
}