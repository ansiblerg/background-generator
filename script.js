
function sayHello(){
	console.log("Hello");
}
function sing(song){
	console.log(song);
}
sing("laaaa deeee daaaaa");
function multiply(a,b){
	return a*b;
}
var Array = ["Beijing", "Shenzen","Hong Kong", "Shanghai", "Wuhan"];
function showCities(){
	var i=0;
	var n = Array.length;
	for( i=0; i<n;i++){
		document.write(Array[i] + "\n");
	}
}

/*for(var i in Array){
	document.write(i+" "+Array[i]);
}*/