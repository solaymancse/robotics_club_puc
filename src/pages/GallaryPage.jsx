import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { PhotoGallary } from '../components/PhotoGallary/PhotoGallary'
import { TopBar } from '../components/TopBar/TopBar'
import { Wrapper2 } from './PageElement'

export const GallaryPage = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Wrapper2>
    <PhotoGallary/>
    </Wrapper2>
    <Footer/>
    </>
  )
}
