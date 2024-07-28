"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const Login = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push("/login/" + name)
  }
  return (
    <div>
      <h2 className='heading'>Login page</h2>
      <Link href='/'>Got to Home Page</Link><br /><br />
      <button onClick={() => navigate('loginStudent')}>Got to Student Login Page</button><br /><br />
      <button onClick={() => navigate('loginTeacher')}>Got to Teacher Login Page</button>
    </div>
  )
}

export default Login