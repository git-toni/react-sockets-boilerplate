import {generalBehavior} from './behaviors'
import {SOCKET_URL} from '../config'
import R from 'ramda'

const io = require('socket.io-client')
let socket = io(SOCKET_URL)
let behaviors = R.pipe(generalBehavior)

export default  behaviors(socket)
//export default  socket
