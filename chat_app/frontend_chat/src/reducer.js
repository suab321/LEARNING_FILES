import { MESSAGE_RECEVIED } from "./contant";

const initialState={
    messages:{}
}

export const message=(state=initialState,action={})=>{
    switch(action.type){
        case MESSAGE_RECEVIED:
            return Object.assign({},state,{messages:action.payload})
    }
}