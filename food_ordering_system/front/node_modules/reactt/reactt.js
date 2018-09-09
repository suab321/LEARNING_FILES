var
  React= require( "react"),
  Jsx= require( "jsx-transpiler"),
  tt= require("tagged-template")

function Reactt( opts){
	opts= opts|| {}
	var
	  jsx= opts.jsx|| true
	function reactt(){
		var
		  src= tt.apply(null, arguments)
		  code= jsx ? Jsx.compile(src).code : src
		  el= eval(code)
		return el
	}
	if( opts instanceof Array){
		return reactt.apply(null, arguments)
	}
	return reactt
}

module.exports= Reactt
module.exports.default= Reactt
