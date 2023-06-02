import { Notice } from '../components/Notice/Notice'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { TopBar } from '../components/TopBar/TopBar'

export const NoticePage = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Notice/>
    <Footer/>
    </>
  )
}