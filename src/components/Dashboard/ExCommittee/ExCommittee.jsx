import { Link } from 'react-router-dom'
import { Wrapper,Left,Container} from '../Event/EventElements'
import {Right,Card} from './CommitteeElements'
import {GrAddCircle} from 'react-icons/gr'
import face from '../../../images/face1.jpg'
import { AiFillEdit } from 'react-icons/ai'

export const ExCommittee = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form>
                  <Wrapper>
                 <Container>
                 <Left>
                  <p>Session</p>
                  <input type="text" />
                  <Link to="/dashboard/new-committee"><GrAddCircle size="24px" background='#10CEB1'/></Link>
                 </Left>
                   <Right>
                    <Card>
                      <img src={face} alt="" />
                      <p>Tuton Chandra Mallick</p>
                      <p>Chief Advisor</p>
                      <p>Associate Professor, Department of EEE</p>
                      <AiFillEdit/>

                    </Card>
                    <Card>
                      <img src={face} alt="" />
                      <p>Tuton Chandra Mallick</p>
                      <p>Chief Advisor</p>
                      <p>Associate Professor, Department of EEE</p>
                      <AiFillEdit/>

                    </Card>
                    <Card>
                      <img src={face} alt="" />
                      <p>Tuton Chandra Mallick</p>
                      <p>Chief Advisor</p>
                      <p>Associate Professor, Department of EEE</p>
                      <AiFillEdit/>

                    </Card>
                    <Card>
                      <img src={face} alt="" />
                      <p>Tuton Chandra Mallick</p>
                      <p>Chief Advisor</p>
                      <p>Associate Professor, Department of EEE</p>
                      <AiFillEdit/>

                    </Card>
                   </Right>
                 </Container>
                  </Wrapper>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
