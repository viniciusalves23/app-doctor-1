const amqp = require("amqplib");

const URI = "admin:admin@localhost";

const createConnectionAmqp = async () => {
  const connection = await amqp.connect("amqp://" + URI);
  console.log("Rabbitmq connectado com sucesso");
  return connection;
};

module.exports = createConnectionAmqp;
