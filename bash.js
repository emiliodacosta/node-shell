// Solution Review Video https://www.youtube.com/watch?v=v_lhkZ849jk&feature=youtu.be

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var arr = cmd.split(" ");
  if(arr.length>1) cmd = arr[0];

  console.log(arr);

  if(cmd==="pwd" || cmd==="ls"){
    commands[cmd]()
  }else if (cmd==="cat" || cmd==="head" || cmd==="tail"){
      commands[cmd](arr[1])
  }else if(cmd==="date"){
    process.stdout.write(Date());
  }else {
    process.stdout.write('You typed: ' + cmd);
  }
process.stdout.write('\nprompt > ');
});


var commands = require('./command.js');



// console.log(process.cwd())
