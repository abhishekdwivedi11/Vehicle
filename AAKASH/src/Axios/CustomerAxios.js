import axios from 'axios'


const URL="http://localhost:9090/customer"

class CustomerFunctions
{

    addNewEnquiry(enquiry) 
    {
       return axios.post(URL+'/addenquiry',enquiry)
    }   

    viewEnquiry(id)
    {
        return axios.get(URL+'/viewenquiry'+'/'+id)
    }

    viewPreviousRecord(email){
        return axios.get(URL+'/previousrecord',{
            params: {
              email: email
            }
          })
    }

    addServiceRequest(request){
        return axios.post(URL+'/requestbycustomer',request)
    }

    getPreviousServiceRequests(id){
        return axios.get(URL+'/showpreviousrequest/'+id)
    }

    getCountOfRequest(custId){
        return axios.get(URL+'/countofrequest/'+custId)
    }

    getCountOfRepair(custId){
        return axios.get(URL+'/countofrepair/'+custId)
    }

    getCountOfEnquiry(custId){
        return axios.get(URL+'/countofenquiry/'+custId)
    }

}
export default new CustomerFunctions();