module.exports = {
  pwd: function(param){
    process.stdout.write(process.cwd());
  },
  ls: function(param){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
})
      process.stdout.write("prompt > ");
});
  },
  cat: function(param){
    // process.stdout.write('filename > ');
    // process.stdin.on('filename', function (filename) {
    //   var fileString = filename.toString().trim();

    fs.readFile(param, 'utf8', function(err, data){
      if (err) throw err;
      process.stdout.write('OK: ' + param);
      console.log(data)
    })
  },
  head: function(param){

    var fileContents = this.cat(param);
    fs.readFile(param, 'utf8', function(err, data){
      if (err) throw err;
      // fileContents = data;
    });
    console.log(fileContents);

    var fileContArr = fileContents.split("/n");
    for(var i = 0; i < 10; i++){
      var lineReader = require('readline').createInterface({
        input: fs.createReadStream(fileContArr[i])
      });

      lineReader.on('line', function (line) {
        // for(var lineCount = 0; lineCount<10; lineCount++){
          console.log(line);
        // }
      });
    }

  },
  tail: function(param){

  }

}
  var fs = require('fs');
