function taggedTemplate( strs){
	var out= []
	for(var i= 0; i< strs.length; ++i){
		var
		  str= strs[i],
		  val= arguments[i+1]
		if(str){
			out.push(str)
		}
		if(val){
			out.push(val.toString())
		}
	}
	return out.join("")
}

module.exports= taggedTemplate
