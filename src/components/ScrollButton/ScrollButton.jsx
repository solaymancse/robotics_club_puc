import { Button } from './Elements'
import { IoIosArrowDropup } from 'react-icons/io';

export const ScrollButton = () => {
    const scrollTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior:'smooth',
        });
    }
  return (
    <Button>
        <IoIosArrowDropup size="40px" color="red" onClick={scrollTop}/>
    </Button>
  )
}
