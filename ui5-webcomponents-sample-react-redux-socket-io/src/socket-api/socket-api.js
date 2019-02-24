
import openSocket from 'socket.io-client';
var socket = openSocket('http://localhost:8000');

export default socket;

export function socket_init(){
    console.log('connected to socket')
}