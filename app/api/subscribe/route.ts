import { NextResponse } from 'next/server'

const MAILMODO_API_KEY = '9VEPHQH-VDRM93W-J034VJ1-MEKV4ZX'
const MAILMODO_API_ENDPOINT = 'https://api.mailmodo.com/api/v1/addToList'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const response = await fetch(MAILMODO_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'mmApiKey': MAILMODO_API_KEY
      },
      body: JSON.stringify({
        email,
        listName: 'Newsletter Subscribers', // Required field
        properties: {
          source: 'website',
          signup_date: new Date().toISOString()
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Mailmodo API error:', errorData)
      
      return NextResponse.json(
        { error: errorData.message || 'Failed to subscribe' },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Subscription successful:', data)

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
}