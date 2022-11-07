import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import  { Level }  from 'level'
import { useEffect } from 'react'

// Create a database

// Add an entry with key 'a' and value 1
// Create a database
export const db = new Level('./db', { valueEncoding: 'json' })
const createuser = async () => {
  const user1 = {
    username: 'muser1',
    password: 'mpassword1',
    isblock: false,
  }
  const user2 = {
    username: 'muser2',
    password: 'mpassword2',
    isblock: false,
  }
  const user3 = {
    username: 'muser3',
    password: 'mpassword3',
    isblock: true,
  }
   await db.put('muser1', JSON.stringify(user1));
   await db.put('muser2', JSON.stringify(user2));
   await db.put('muser3', JSON.stringify(user3));
 }
  const getuser = async () => {
    const value = await db.get('muser1');
    console.log(value);
    return JSON.parse(value);
  }
const Main =  async () => {
  await createuser();
  await getuser()
}
export default function App({ Component, pageProps }: AppProps) {
  
  Main()
  return <Component {...pageProps} />
}
