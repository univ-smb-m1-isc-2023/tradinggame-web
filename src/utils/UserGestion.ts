import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const base_url ="http://localhost:8080" //"https://tradinggame-api.oups.net";

const tokentmp = localStorage.getItem('token');
let token = ""
if (tokentmp) {
    token = tokentmp;
} 

const idUserTmp = localStorage.getItem('idUser')
export let idUser = -1;
if(idUserTmp){
    idUser = parseInt(idUserTmp)
}

export function setToken(newToken: string) {
    token = newToken;
}

export function userLogOut() {
    localStorage.setItem('token', "");
    localStorage.setItem('idUser', "-1")
}


export function setIdUser(id: number) {
    idUser = id;
}


export async function fetchWithToken(url: string, options: any) {

    options.headers.Authorization = `Bearer ${token}`; 
    const response = await fetch(url, options);
    if(!response.ok){
        userLogOut();
    }
    return response

}


export async function fetchWithTokenNoOption(url: string) {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await fetch(url, options);
    if(!response.ok){
        userLogOut();
    }
    return response;
}

export const axiosPostWithToken = async (url: string, data: any) => {
    // Définir les options avec le token d'authentification

    const options: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        // Effectuer la requête POST avec les données et les options
        const response = await axios.post(url, data, options);

        // Traiter la réponse
        console.log("Réponse de l'API:", response.data);

        // Retourner les données de réponse si nécessaire
        return response.data;
    } catch (error) {

        userLogOut();
        // Gérer les erreurs
        const axiosError = error as AxiosError;
        // Alert the entire response received from the server
        if (axiosError.response) {
        alert(JSON.stringify(axiosError.response.data)); // Alert the entire response object
        } else {
        console.error("Error:", axiosError.message); // Log any other type of error
        }
        // Optionally, you can re-throw the error to handle it further in the calling function
        throw error;
    }
};

export const axiosGetWithToken = async (url: string) => {
    // Définir les options avec le token d'authentification
    const options: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        // Effectuer la requête GET avec les options
        const response = await axios.get(url, options);

        // Traiter la réponse
        console.log("Réponse de l'API:", response.data);

        // Retourner les données de réponse si nécessaire
        return response.data;
    } catch (error) {
        userLogOut();
        // Gérer les erreurs
        console.error("Erreur lors de la requête GET:", error);

        // Retourner une erreur ou null en fonction de vos besoins
        return null;
    }
};