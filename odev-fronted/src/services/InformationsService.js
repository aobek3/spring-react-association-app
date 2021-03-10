import axios from 'axios';

const INFORMATION_API_BASE_URL = "http://localhost:8080/api/v1/Informations";

class InformationsService {

    getinformations(){
        return axios.get(INFORMATION_API_BASE_URL);
    }

    createinformation(information){
        return axios.post(INFORMATION_API_BASE_URL, information);
    }

    getinformationById(informationId){
        return axios.get(INFORMATION_API_BASE_URL + '/' + informationId);
    }

    updateinformation(information, informationId){
        return axios.put(INFORMATION_API_BASE_URL + '/' + informationId, information);
    }

    deleteinformation(informationId){
        return axios.delete(INFORMATION_API_BASE_URL + '/' + informationId);
    }
}

export default new InformationsService()