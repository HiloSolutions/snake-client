let connection;
// stdin object will allow us to listen for keyboard input and react to it.

const setupInput = (conn) => {
//allows func to accept an object that lets you interact with the server.
  connection = conn;
  const stdin = process.stdin; //The stdin property of the process object is a Readable Stream. It uses on() function to listen for the event.
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //register an event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'c') {
    connection.write("Say: cod");
  }
  if (key === 'v') {
    connection.write("Say: vid");
  }
  if (key === 'b') {
    connection.write("Say: bud");
  }
};


module.exports = {setupInput};