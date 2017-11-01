/**
 * Created by newuser on 2017/9/19.
 */
import * as types from '../mutation-types'
const state = {
  index: 0,
  timer: 0,
  length: 0,
  startX: 0,
  moveX: 0,
  distanceX: 0,
  isMove:false
}

const mutations = {
  [types.RECEIVE_LENGTH](state, length) {
    state.length = length;
  },
}


// 计时器开始轮播图
const actions = {
  startHeaderTransition({commit, state}, obj) {
    clearInterval(state.timer)
    console.log(obj)
    state.timer = setInterval(() => {
      state.index++
      commit(types.ADD_TRANSITION, {obj})
      let offsetX = -state.index * screen.width + 'px'
      commit(types.SET_TRANSLATE, {x: offsetX, y: 0, z: 0, obj})
    }, 1500)
      obj.addEventListener('touchstart',function (e) {
        clearInterval(state.timer)
        state.startX = e.touches[0].clientX;
      })
      obj.addEventListener('touchmove',function (evt) {
        state.moveX = evt.touches[0].clientX;
        state.distanceX = state.moveX - state.startX;
        let translateX = -state.index *screen.width + state.distanceX +'px'
        state.isMove = true;
        commit(types.REMOVE_TRANSITION,{obj})
        commit(types.SET_TRANSLATE, {x: translateX, y: 0, z: 0, obj})
      })
      obj.addEventListener('touchend',function () {
        if(Math.abs(state.distanceX) > screen.width/25 && state.isMove){
          if(state.distanceX >0){
            state.index--
          } else{
            state.index++
            console.log(state.index)
          }
        }
        let offsetX = -state.index * screen.width + 'px'
        commit(types.ADD_TRANSITION, {obj})
        commit(types.SET_TRANSLATE, {x: offsetX, y: 0, z: 0, obj})
        state.startX= 0;
        state.moveX = 0;
        state.distanceX = 0;
        state.isMove =false;
        state.timer = setInterval(() => {
          state.index++
          commit(types.ADD_TRANSITION, {obj})
          let offsetX = -state.index * screen.width + 'px'
          commit(types.SET_TRANSLATE, {x: offsetX, y: 0, z: 0, obj})
        }, 1500)
        if( state.index<0){
          state.index=4
        }
        if(state.index >=5){
          state.index=0
        }

      })
    }

}

export default {
  state,
  mutations,
  actions
}
