
const initialstate={
	log:false
}

export const login=(state=initialstate,action={})=>{
	switch(action.type){
		case 'login':
			return Object.assign({},state,{log:action.payload})
		default:
			return initialstate
	}
}