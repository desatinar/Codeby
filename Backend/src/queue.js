import amqplib from "amqplib"
import dotenv from "dotenv"

dotenv.config()

export const connect = async () => {
  return amqplib.connect(process.env.AMQP_URL)
    .then(res => res.createChannel())
}

export const createQueue = (channel, queue) => {
  return new Promise((resolve, reject) => {
    try {
      channel.assertQueue(queue, { durable: true });
      resolve(channel)

    } catch (error) {
      reject(error)
    }
  });
}

export const sendToQueue = (queue, message) => {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
    .catch(err => console.log(err))
}

export const consume = (queue, callback) => {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.consume(queue, callback, {noAck: true}))
    .catch(err => console.log(err))
}