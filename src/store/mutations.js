/**
 * Created by newuser on 2017/9/19.
 */
import * as types from './mutation-types'

export default {
  [types.ADD_TRANSITION](state, {obj}) {
    obj.style.transition = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  [types.REMOVE_TRANSITION](state, {obj}) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  },
  [types.SET_TRANSLATE](state, {x, y, z, obj}) {
    obj.style.transform = `translate3d(${x},${y},${z})`
    obj.style.webkitTransform = `translate3d(${x},${y},${z})`
  },
  [types.SET_PAGES](state,{index,obj}){
    for(let i =0; i<obj.length; i++){
      obj[i].className = '';
    }
    let num = index
    if(index>=6){
      num=1
    }else if(index<=0){
      num = 5
    }
    obj[num -1].className = 'now'
  }
}
