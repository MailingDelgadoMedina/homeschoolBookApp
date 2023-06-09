import Image from 'next/image'
import { Inter } from 'next/font/google'
import ".././configureAmplify"
import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { FAQItem, Features4x1, FeaturesText2x2, HeroLayout1 } from '@/ui-components'
import localFont from 'next/font/local'



const inter = Inter({ subsets: ['latin'] })
const minako = localFont({src: '/../public/Minako-Regular.woff2'})

export default function Home() {
  return (
    <main
      className='bg-hscream  min-h-full   flex flex-col '
    >
   

       <div className='z-10 border-8 my-14  border-hsorange'>
 <HeroLayout1 className='w-full'/>
       </div>

         <div className='z-0 p-10'>
   <Features4x1/>
     </div>


      <div className='border-hsorange border-8 pl-60  grid grid-cols-2   bg-hsbg w-fit h-fit text-hsorange p-12 mb-24'>
<div className=' pl-  mt-   content-center'>
  <Image
   src="https://res.cloudinary.com/programandoconmei/image/upload/v1682467175/Hackthon/bulbgear_bhacgj.gif"
   width={500}
    height={300}
  />


   
  
</div>


<div className='mt-24 ' >
      <h1 className="font-['minako'] text-4xl pb-8">
     Are you a parent seeking a reliable way to plan, organize, and track your special needs child's homeschooling journey?
      </h1>
         <p className='pb-10 text-hspink font-semibold text-lg'> <span className='text-hsgreen font-bold text-xl '> Homeschool Book </span> is here to support both students and their families, creating a seamless learning experience tailored to your unique needs.

Keep your homeschooling organized in one place. Get the tools you need to manage every aspect of homeschool teaching and learning. Take control of your homeschool. track progress, attendance, grades, & more!

Make this school year easier with our powerful application!</p>
<div className='pt-12 mb-10'>


  <Button
            onClick={() => router.push("/hsapp")}
            fontFamily="Minako"
            width="100%"
            height="unset"
            border="4px SOLID rgba(255,174,0,1)"
            borderRadius="25px"
            padding="4px 12px 4px 12px"
            shrink="0"
            size="large"
            isDisabled={false}
            color="#110038"
            backgroundColor="#57FF73"
            children="Get Started"
          
          ></Button>
       
</div>
</div>



 
      </div>
     
   

    
   
     


    
    </main>
  )
}
