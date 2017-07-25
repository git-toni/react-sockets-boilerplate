import { action } from 'mobx';
import { ui } from '../stores'


const actions ={
  @action changeName(name){
    console.log('changing name')
    ui.mainName = name
  },
}

export default actions
