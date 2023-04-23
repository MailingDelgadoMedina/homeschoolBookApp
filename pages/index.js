import Image from 'next/image'
import { Inter } from 'next/font/google'
import ".././configureAmplify"
import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { HeroLayout1 } from '@/ui-components'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className='bg-hscream'
    >
   
       
      <HeroLayout1 className='w-full'/>
   
   
     


    
    </main>
  )
}
