EC.addEvent("beforeinit",function(){
	cmd.output=true;
},true);
EC.addEvent("inited",function(p){
	p.core.COL.Debug.on();
});
EC.addEvent("pluginsloaded",function(p){
	p.EC.debug=true;
	console_output=true;
});