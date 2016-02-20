var test = process.argv.slice(2)

var output = test.reduce(function(sum, val){
	return sum + parseInt(val);
}, 0)

console.log(output)