import Banner from '@/components/Banner/Banner'
import WelcomeToUnico from '@/components/WelcomeToUnico/WelcomeToUnico'
import WhyChooseUnico from '@/components/WhyChooseUnico/WhyChooseUnico'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner/>
      <WelcomeToUnico/>
      <WhyChooseUnico/>
    </div>
  )
}
