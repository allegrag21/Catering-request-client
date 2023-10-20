import axios from 'axios';

const CLIENT_BASE_API_URL = 'http://localhost:8080/api/v1/CateringRequest';


export function getAllClients(){
    return axios.get(CLIENT_BASE_API_URL);
}

export function createClient(client){
    return axios.post(CLIENT_BASE_API_URL,);
}

export function getById(id){
    return axios.get(`${CLIENT_BASE_API_URL}/${id}`);
}

export function updateClient(id, client){
    return axios.put(`${CLIENT_BASE_API_URL}/${id}`, client);
}

export function deleteClient(id){
    return axios.delete(`${CLIENT_BASE_API_URL}/${id}`);
}