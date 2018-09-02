 import Link from 'next/link';
 const Index=()=>{
	
	return(
		<div>
	
		<Link href='/Index'><button>Home</button></Link>
		<Link href='/A'><a> About</a></Link>
			<p>Hello World</p>
		<style jsx>{`
			div{
			text-align:center;
			background-color: red;
			}`}</style>
		</div>
		)
}
export default Index;