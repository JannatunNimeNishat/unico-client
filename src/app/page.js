import AcademicsComponent from '@/components/AcademicsComponent/AcademicsComponent'
import Banner from '@/components/Banner/Banner'
import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import WelcomeToUnico from '@/components/WelcomeToUnico/WelcomeToUnico'
import WhyChooseUnico from '@/components/WhyChooseUnico/WhyChooseUnico'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner />
      <WelcomeToUnico />
      <WhyChooseUnico />
      <AcademicsComponent />
      <UpcomingEvents />
    </div>
  )
}
