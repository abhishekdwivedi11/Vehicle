import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import DashNavbar from '../../../layout/DashNavbar';
import DashMenuBar from '../CustomerDashMenuBar';
import CustomerFunctions from '../../../../Axios/CustomerAxios';
import { useHistory } from 'react-router-dom';

const AddServiceReq = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const addRequest = (e) => {
    e.preventDefault();

    const vehicleNo = e.target.elements.vehicleNo.value;
    const model = e.target.elements.model.value;
    const mobNo = e.target.elements.mobNo.value;

    // Check if any field is blank
    if (!vehicleNo || !model || !mobNo) {
      setError('All fields are required.');
      return;
    }

    // Clear the error when all fields are non-empty
    setError('');

    const customer = sessionStorage.getItem('user');
    const temp = JSON.parse(customer);

    const body = {
      vehicleNumber: vehicleNo,
      custId: temp.id,
      customerName: temp.name,
      model: model,
      mobileNumber: mobNo,
    };

    CustomerFunctions.addServiceRequest(body)
      .then((res) => {
        console.log(res.data);
        history.push('customer-dash');
      })
      .catch((error) => {
        console.error('Error adding service request:', error);
        // Handle error - you can display an error message to the user
        setError('An error occurred while adding the service request. Please try again.');
      });
  };

  return (
    <div>
      <DashNavbar />
      <form onSubmit={addRequest}>
        <div className="py-5">
          <Row>
            <Col md={2}>
              <DashMenuBar />
            </Col>
            <Col md={10}>
              <h4 className="text-center">Add New Service Request</h4>
              <br />
              <br />
              {error && <div className="alert alert-danger">{error}</div>}
              <table className="table table-bordered border-dark table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Cust.Id</th>
                    <th scope="col" colSpan="2">
                      Vehicle Reg. No.
                    </th>
                    <th scope="col" colSpan="2">
                      Vehicle Model
                    </th>
                    <th scope="col" colSpan="3">
                      Customer Mobile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#</th>
                    <td colSpan="2">
                      <input name="vehicleNo" type="text" placeholder="Enter Vehicle Reg. No."></input>
                    </td>
                    <td colSpan="2">
                      <input name="model" type="text" placeholder="Enter Vehicle Model"></input>
                    </td>
                    <td colSpan="3">
                      <input name="mobNo" placeholder="Mobile number" type="text"></input>
                    </td>
                    <td colSpan="2">
                      <button
                        type="submit"
                        rel="tooltip"
                        className="btn btn-danger btn-round btn-just-icon btn-sm"
                        data-original-title=""
                        title="">
                        <i className="material-icons">Add Request</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default AddServiceReq;
