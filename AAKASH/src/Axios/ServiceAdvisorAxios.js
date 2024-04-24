import axios from 'axios'

const URL = 'http://localhost:9090/service'

class ServiceAdvFunctions {
  addNewJobCard(jobCard) {
    return axios.post(URL + '/add',jobCard)
  }

  getAllMechanics() {
    return axios.get(URL + '/fetchmechanic')
  }

  getAllRecentJobCards() {
    return axios.get(URL + '/fetchrecentjobs')
  }

  getAllJobCardsCount() {
    return axios.get(URL + '/counttotaljobs')
  }

  getAllFetchServiceRequest() {
    return axios.get(URL + '/getservicerequest')
  }
  

}
export default new ServiceAdvFunctions()
