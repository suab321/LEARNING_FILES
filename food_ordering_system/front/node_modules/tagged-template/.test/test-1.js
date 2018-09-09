var
  tape= require("tape"),
  tt= require("..")

tape("can template", ( t)=>{
	var w= "world"
	t.equal( tt`hello ${w}`, "hello world")
	t.equal( tt`hello ${w.substring(0,3)+'m'}`, "hello worm")
	t.end()
})
