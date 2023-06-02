import { SeminerWorkshop } from '../components/SeminerWorkshop/SeminerWorkshop'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { TopBar } from '../components/TopBar/TopBar'

export const SeminerPage = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <SeminerWorkshop/>
    <Footer/>
    </>
  )
}