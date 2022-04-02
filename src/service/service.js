import api from './api'
import axios from "axios";

export default class Service {
    _apiPlaceholderURI = api.apiPlaceholder

    getPhotos = async (albumId = 1) => {
        const response = await axios.get(`${this._apiPlaceholderURI}/photos?albumId=${albumId}`)

        return response.data
    }

    getPhoto = async (id) => {
        const response = await axios.get(`${this._apiPlaceholderURI}/photos?id=${id}`)

        return response.data
    }
}
