import "../Dashboard";
import avatar from '../../../images/face1.jpg'
export const Tables = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">All Members</h4>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th> Avatar </th>
                        <th> Name </th>
                        <th> Department </th>
                        <th> Register Date</th>
                        <th> Status </th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={avatar}
                            class="me-2"
                            alt="image"
                          />{" "}
                          David Grey
                        </td>
                        <td> Fund is not recieved </td>
                      
                        <td> Dec 5, 2017 </td>
                        <td> WD-12345 </td>
                        <td>
                          <label class="badge badge-gradient-success">
                            DONE
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                             src={avatar}
                            class="me-2"
                            alt="image"
                          />{" "}
                          Stella Johnson
                        </td>
                        <td> High loading time </td>
                   
                        <td> Dec 12, 2017 </td>
                        <td> WD-12346 </td>
                        <td>
                          <label class="badge badge-gradient-warning">
                            PROGRESS
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                             src={avatar}
                            class="me-2"
                            alt="image"
                          />{" "}
                          Marina Michel
                        </td>
                        <td> Website down for one week </td>
                  
                        <td> Dec 16, 2017 </td>
                        <td> WD-12347 </td>
                        <td>
                          <label class="badge badge-gradient-info">
                            ON HOLD
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                             src={avatar}
                            class="me-2"
                            alt="image"
                          />{" "}
                          John Doe
                        </td>
                        <td> Loosing control on server </td>
                     
                        <td> Dec 3, 2017 </td>
                        <td> WD-12348 </td>
                        <td>
                          <label class="badge badge-gradient-danger">
                            REJECTED
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
