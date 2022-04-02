import Service from "../../service/service";

const service = new Service()

const defaultState = {
    data: service.getPhoto
}

export const reducer = ( state = defaultState, action, id ) => {
    switch (action.type) {
        case "GET_DATA":
            return {...state}
        default :
            return state
    }
}
