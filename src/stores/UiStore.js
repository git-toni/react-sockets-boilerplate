import {observable,  computed} from 'mobx';

class UiStore{
  @observable mainName = 'Username'
  @observable errors = []
  //@observable notifications = []
  //@observable loading = null
  //@observable modal = null


  get asJS(){
    return { 
    }
  }

}
const ui = new UiStore()

export default ui
