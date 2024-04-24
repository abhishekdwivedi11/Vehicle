import axios from 'axios'


const URL="http://localhost:9090/user"

class UserFunctions
{

    login(UserEmailPass) 
    {
       return axios.post(URL+'/login',UserEmailPass)
    }   

    registerCustomer(User)
    {
        return axios.post(URL+'/customerregister',User)
    }

    registerMechanic(User)
    {
        return axios.post(URL+'/mechanicregister',User)
    }

    registerServiceAdvisor(User)
    {
        return axios.post(URL+'/serviceregister',User)
    }

    registerAdmin(User)
    {
        return axios.post(URL+'/adminregister',User)
    }

    changePassword(UserEmailPass)
    {
        return axios.post(URL+'/changepassword',UserEmailPass)
    }

}
export default new UserFunctions();