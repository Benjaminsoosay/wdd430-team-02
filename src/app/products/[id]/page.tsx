// src/app/sellers/signup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SellerSignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
    description: '',
    phoneNumber: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/sellers/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessName: formData.businessName,
          email: formData.email,
          password: formData.password,
          description: formData.description,
          phoneNumber: formData.phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess('Seller account created successfully! Redirecting...');
        // Clear form
        setFormData({
          businessName: '',
          email: '',
          password: '',
          confirmPassword: '',
          description: '',
          phoneNumber: '',
        });
        // Redirect after 2 seconds
        setTimeout(() => {
          router.push('/sellers/dashboard');
        }, 2000);
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Become a Seller</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          ❌ {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          ✅ {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Business Name *"
          className="w-full p-2 border rounded"
          value={formData.businessName}
          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
          required
        />
        
        <input
          type="email"
          placeholder="Email *"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        
        <input
          type="password"
          placeholder="Password (min 6 characters) *"
          className="w-full p-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
          minLength={6}
        />
        
        <input
          type="password"
          placeholder="Confirm Password *"
          className="w-full p-2 border rounded"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
        />
        
        <textarea
          placeholder="Business Description"
          className="w-full p-2 border rounded"
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
        />
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Account...' : 'Sign Up as Seller'}
        </button>
      </form>
    </div>
  );
}