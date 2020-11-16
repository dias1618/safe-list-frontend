export class TratamentoErroService{
    messageErro(error){
        if(error.response)
            return error.response.data.message;
        else 
            return error.message
    }
}