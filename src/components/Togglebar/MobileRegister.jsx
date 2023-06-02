import { Wrapper2 } from '../../pages/PageElement'
import { NavBtnLink } from '../Navbar/NavbarElements'
import { useState } from 'react'
import { Registration } from '../Registration/Registration'
import { TopBar } from '../TopBar/TopBar'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'


export const MobileRegister = () => {
    
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Wrapper2>
           <div data-aos="fade-left" className='mb-4' style={{width:'150px',margin:"0px auto",'backgroundColor': '#ff2162','color': '#fff', 'borderRadius': '20px',padding:"10px"}} onClick={setModalShow}>
          <NavBtnLink to="#">Registration</NavBtnLink>
         
        </div>
           <Registration show={modalShow} onHide={() => setModalShow(false)} />
    </Wrapper2>
    <Footer/>
   
    </>
  )
}
