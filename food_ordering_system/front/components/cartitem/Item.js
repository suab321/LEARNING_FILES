

const Item=(props)=>{
    return(
        <div id='main'>
            <img src={props.url} height='20px' width='20px'/>
            <p>{props.name}</p>
            <button>Remove Item</button>
            <style jsx>
            {`#main{
            }`}
            </style>
        </div>
    )
}
export default Item