// stdin object will allow us to listen for keyboard input and react to it.
const setupInput = () => {
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
};

module.exports = {setupInput};