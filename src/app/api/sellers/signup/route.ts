import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo (will reset on server restart)
let sellers: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, email, password, description, phoneNumber } = body;

    console.log('Received signup request:', { businessName, email, description, phoneNumber });

    // Validate required fields
    const errors = [];
    if (!businessName) errors.push('Business name is required');
    if (!email) errors.push('Email is required');
    if (!password) errors.push('Password is required');
    if (password && password.length < 6) errors.push('Password must be at least 6 characters');

    if (errors.length > 0) {
      return NextResponse.json(
        { 
          success: false,
          message: errors.join('. ')
        },
        { status: 400 }
      );
    }

    // Check if seller already exists
    const existingSeller = sellers.find(s => s.email === email);
    if (existingSeller) {
      return NextResponse.json(
        { 
          success: false,
          message: 'A seller with this email already exists. Please use a different email.'
        },
        { status: 400 }
      );
    }

    // Create new seller (in real app, you'd hash the password and save to database)
    const newSeller = {
      id: 'seller_' + Date.now(),
      businessName,
      email,
      description: description || '',
      phoneNumber: phoneNumber || '',
      createdAt: new Date().toISOString(),
      // In real app, you would NEVER store password in plain text!
      // This is just for demo purposes
    };

    // Store seller (in memory for demo)
    sellers.push(newSeller);
    
    console.log('Seller created successfully:', newSeller);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Seller account created successfully! Welcome to Artisan Marketplace.',
      seller: newSeller
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      },
      { status: 500 }
    );
  }
}
