import '@/styles/globals.css'
import '../configureAmplify'
import MyNavBar from './myComponents/MyNavBar'
import MarketingFooter from '@/ui-components/MarketingFooter'



export default function App({ Component, pageProps }) {
  return (
  <div>


<MyNavBar/>
  <Component {...pageProps} />

<div className='fixed bottom-0 inset-x-0'>
  <MarketingFooter/>
</div>


  </div>

  )
}
