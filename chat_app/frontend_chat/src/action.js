import {MESSAGE_RECEVIED} from './contant';

export const message_recevied=(message)=>({
    type:MESSAGE_RECEVIED,
    payload:message
})