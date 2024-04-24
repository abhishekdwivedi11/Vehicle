import axios from 'axios'


const URL="http://localhost:9090/mechanic"

class MechanicFunctions
{

    getPendingWorks(mech) 
    {
       return axios.get(URL+'/pendingwork', {
         params: {
           mechName: mech
         }
       })
    }   
  
    getPartsList() 
    {
       return axios.get(URL+'/getparts')
    }   

    submitJobCard(jobid,body) 
    {
       return axios.post(URL+'/completed/'+jobid,body)
    }   

    getCountPending(mech) 
    {
       return axios.get(URL+'/pendingreq',{
         params: {
           mechName: mech
         }
       })
    } 
    getCountCompleted(mech) 
    {
       return axios.get(URL+'/completedreq',{
         params: {
           mechName: mech
         }
       })
    } 
   
}
export default new MechanicFunctions();