//Import actions here
import {general as generalActions} from '../actions'



let generalBehavior = (socket) =>{
  socket.on('stats',(data)=>{
    console.log('Receiving new stats:',data)
    generalActions.changeName('NEWNAME')
  })
  socket.on('alert',(data)=>{
    console.log('Receiving alerts:',data)
  })
  return socket
}

export {
  generalBehavior
}
