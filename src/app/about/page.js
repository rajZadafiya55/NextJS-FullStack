"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const about = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className='heading'>about page</h1>
            <button onClick={() => router.push('/')}>Got to Home Page</button>
            <br /><br />
            <Link href='/about/aboutCollege'>Got to About College Page</Link><br /><br/>
            <Link href='/about/aboutStudent'>Got to About Student Page</Link><br />
        </div>
    )
}

export default about