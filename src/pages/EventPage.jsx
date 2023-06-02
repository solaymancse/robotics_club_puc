import { Events } from '../components/Events/Events'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { TopBar } from '../components/TopBar/TopBar'
import { Wrapper2 } from './PageElement'

export const EventPage = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Wrapper2>
    <Events/>
    </Wrapper2>
    <Footer/>
    </>
  )
}
