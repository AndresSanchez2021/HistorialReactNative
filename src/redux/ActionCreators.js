
import { ADD_TO_HISTORIAL, HISTORIAL_LOADING, HISTORIAL_FAILED } from "./actions"
const baseUrl = 'https://api.jsonbin.io/v3/b'
const urlHistoria = '/637bd3a00e6a79321e50569a'






export const getHistoria = (pedidos)=>(
    {
        type:ADD_TO_HISTORIAL,
        payload:pedidos
    }
)

export const loadingHistoria = (pedidos)=>(
    {
        type:ADD_TO_HISTORIAL,
    }
)
export const failedHistoria = (pedidos)=>(
    {
        type:ADD_TO_HISTORIAL,
        payload:pedidos
    }
)





export const fetchHistoria = () => (dispatch) => {
    dispatch(loadingHistoria(true));                              

    return fetch(baseUrl + 'urlHistoria')
        .then(response=>{
            if(response.ok){
                return response
            }else{
                var error = new Error('Error' + response.status +': ' + response.statusText) /* creamos un objeto error y luego le mandamos el esaje errorr */
                error.response = response;
                throw error;
            }
        },
        error =>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(Historias => dispatch(getHistoria(Historias))) // al aprecer el dispache pone en este caso los dishes en la redux store 
        .catch(error => dispatch(failedHistoria(error.message)))
}