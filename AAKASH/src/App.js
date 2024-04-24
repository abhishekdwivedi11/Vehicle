import React from 'react'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Customer from './components/pages/Customer'
import ServiceAdvisor from './components/pages/ServiceAdvisor'
import Mechanic from './components/pages/Mechanic'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Feedback from './components/pages/Feedback'

import Login from './components/pages/Login'
import MechanicDash from './components/pages/Dashboard/MechanicDash'
import CustomerDash from './components/pages/Dashboard/CustomerDash'
import AdminDash from './components/pages/Dashboard/AdminDash'
import ServiceAdvDash from './components/pages/Dashboard/ServiceAdvDash'

import AddParts from './components/pages/Dashboard/MechanicFunc/AddParts'

import AddServiceReq from './components/pages/Dashboard/CustomerFunc/addServiceReq'
import enquiryStatus from './components/pages/Dashboard/CustomerFunc/enquiryStatus'
import NewEnquiry from './components/pages/Dashboard/CustomerFunc/newEnquiry'
import viewServiceHistory from './components/pages/Dashboard/CustomerFunc/viewServiceHistory'
import PreviousRequest from './components/pages/Dashboard/CustomerFunc/PreviousServiceRequest'

import ViewCustomerEnq from './components/pages/Dashboard/AdminFunc/ViewCustomerEnq'
import ViewCustomerServiceReq from './components/pages/Dashboard/AdminFunc/ViewCustomerServiceReq'
import AddNewAdmin from './components/pages/Dashboard/AdminFunc/AddNewAdmin'
import ViewMechanics from './components/pages/Dashboard/AdminFunc/ViewMechanics'
import ViewServiceAdvisor from './components/pages/Dashboard/AdminFunc/ViewServiceAdv'
import PendingMechReq from './components/pages/Dashboard/AdminFunc/PendingMechReq'

import MyProfile from './components/pages/Dashboard/AdminFunc/MyProfile'

import ChangePassword from './components/pages/Dashboard/AdminFunc/ChangePassword'
import AddJobCards from './components/pages/Dashboard/ServiceAdvFunc/AddjobCards'
import FetchJobCards from './components/pages/Dashboard/ServiceAdvFunc/FetchJobCards'
import MechanicShowPage from './components/pages/MechanicShowPage'
import FetchServiceRequest from './components/pages/Dashboard/ServiceAdvFunc/FetchServiceReqest'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/service-advisor" component={ServiceAdvisor} />
          <Route exact path="/mechanic" component={Mechanic} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/feedback" component={Feedback} /> 

          <Route exact path="/mechanic-show" component={MechanicShowPage} />


          <Route exact path="/admin-dash" component={AdminDash} />
          <Route exact path="/mechanic-dash" component={MechanicDash} />
          <Route exact path="/customer-dash" component={CustomerDash} />
          <Route exact path="/serviceadvisor-dash" component={ServiceAdvDash} />

          <Route exact path="/add-parts" component={AddParts} />

          <Route exact path="/add-service-req" component={AddServiceReq} />
          <Route exact path="/enquiry-status" component={enquiryStatus} />
          <Route exact path="/new-enquiry" component={NewEnquiry} />
          <Route exact path="/previous-request" component={PreviousRequest} />
          <Route exact path="/service-history" component={viewServiceHistory} />

          <Route exact path="/myprofile" component={MyProfile} />

          <Route exact path="/change-password" component={ChangePassword} />

          <Route exact path="/view-customer-enq" component={ViewCustomerEnq} />
          <Route exact path="/view-mechanics" component={ViewMechanics} />
          <Route exact path="/add-new-admin" component={AddNewAdmin} />
          <Route
            exact
            path="/pending-mechanic-req"
            component={PendingMechReq}
          />
          <Route
            exact
            path="/view-service-advisor"
            component={ViewServiceAdvisor}
          />
          <Route
            exact
            path="/view-customer-service-req"
            component={ViewCustomerServiceReq}
          />

          <Route exact path="/add-job-cards" component={AddJobCards} />
          <Route exact path="/fetch-job-cards" component={FetchJobCards} />
          <Route exact path="/fetch-service-request" component={FetchServiceRequest} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
