import Image from 'next/image'
import { Inter } from 'next/font/google'
import ".././configureAmplify"
import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { Features4x1, FeaturesText2x2, HeroLayout1 } from '@/ui-components'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className='bg-hscream max-w-full max-h-screen flex flex-col '
    >
   

       <div className='z-10'>
 <HeroLayout1 className='w-full'/>
       </div>
     
     <div className='z-0'>
   <Features4x1/>
     </div>

   
     


    
    </main>
  )
}
