'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import profile from '../../public/vercel.svg'

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  }
  return ( 
    <main>
      <h1>raj</h1> 
      <Link href='/login'>Got to login Page</Link><br /><br />  
      <Link href='/about'>Got to about Page</Link><br /><br />
      <Link href='/productlist'>Got to Products List</Link><br /><br />
      <button onClick={() => navigate('/login')}>Got to login Page</button><br /><br />
      <button onClick={() => navigate('/about')}>Got to about Page</button><br /><br />
      <Image
      src={profile}
      alt='profile'
      />
    </main>
  ) 
}