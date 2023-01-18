//Module to connect to the server
const net = require("net");

//returns an object that can be used to interact with the server. the object returned by connect() should be passed into setupInput()
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  //when the connection is first established letting us know that we have successfully connected to th game.
  conn.on("connect",() => {
    console.log("You are successfully connected to the game!");
    conn.write("Name: LEJ"); //establish name so other players can see it
  });



  //handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("Server Says:", data);
  });

  //interpret incoming data
  conn.setEncoding("utf8");

  return conn; //the object returned by connect() should be passed into setupInput()
};



//exports player connection
module.exports = {connect};

