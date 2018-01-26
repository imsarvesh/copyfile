var fs = require('fs');
 
fs.readFile('output.txt', 'utf8', function(err, contents) {
    var allfiles = contents.split('\n');
	for(var i = 0; i < allfiles.length; i ++){
		var data = '\n\n\n\n*******************************\n' + allfiles[i] + '\n*******************************\n\n\n';
		try{
			data += fs.readFileSync(allfiles[i].replace('\r', ''));
			fs.appendFileSync('message.txt', data, 'utf8');
		} catch(e){
			
		}
	}

});
 
console.log('after calling readFile');