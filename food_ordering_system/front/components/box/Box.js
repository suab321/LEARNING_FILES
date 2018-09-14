import axios from 'axios'
const Box=(props)=>{

        const cart_save=()=>{axios.get('http://localhost:3002/cookie').
        then(response=>{
            console.log('yes')
            axios.put('http://localhost:3002/cart/add',{email:response.data,name:props.name,price:props.price,category:props.category,url:props.url})
        })
    }

    return(
        <div id='main' onClick={cart_save}>
        <div id='outer'>
        <div id='inner'>
        <img src={props.url} height="200px" width='200px'/>
       <p id='name'>{props.name}</p>
       <p>{props.category}</p>
        <p>{props.price}</p>
        </div>
        </div>
        <style jsx>{`

            #main{
                display:inline-block;
                padding-top:5px;
                margin-left:5px;
            }
            #inner{
                border:1px solid black;
                padding-top: 2px;
                width: 210px;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
                transition=transform 1s;
            }
            #inner:hover{
                transform:scale(1.1);
                
            }
            #inner:active{
                transform:scale(0.9)
            }
            #name{
                font:sans-serif;
                font-size: 1.5em;
            }
            
        `}
        </style>
        </div>
    )
}
export default Box