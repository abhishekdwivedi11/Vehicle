import axios from 'axios'


const URL="http://localhost:9090/admin"

class AdminFunctions
{

    getPendingMechanic() 
    {
       return axios.get(URL+'/pendingapproval')
    }   

    getAllServiceAdvisors(){
        return axios.get(URL+'/fetchserviceadvisor')
    }

    getAllMechanics(){
        return axios.get(URL+'/fetchmechanics')
    }

    getAllCustomers(){
        return axios.get(URL+'/fetchcustomers')
    }
    

    updateMechanicStatus(id){
        return axios.post(URL+'/updatemechanicstatus/'+id)
    }

    getAllCustomersEnquiry(){
        return axios.get(URL+'/getcustomerenquiry')
    }

    setEnquiryResponse(enq){
         return axios.post(URL+'/setenquiryresponse',enq)
    }

    getAllServiceRequest(){
        return axios.get(URL+'/getservicerequest')
    }
    
    setServiceRequestResponse(serviceRequest)
    {
        return axios.post(URL+'/setserviceresponse',serviceRequest) 
    }

    getCountMechanic(){
        return axios.get(URL+'/countmechanic')
    }

    getCountServiceAdvisor(){
        return axios.get(URL+'/countserviceadvisor')
    }

    getCountCustomers(){
        return axios.get(URL+'/countcustomer')
    }

    getCountEnquiry(){
        return axios.get(URL+'/countenquiry')
    }
}
export default new AdminFunctions();