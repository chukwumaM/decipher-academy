'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: form.get('username'), password: form.get('password') })
    });
    if (res.ok) router.push('/admin');
    else setError('Invalid credentials');
  }

  return (
    <div className="container narrow">
      <h1>Admin Login</h1>
      <form className="checkout" onSubmit={submit}>
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
