import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var  isfirst =true;
export default new Vuex.Store({
  state: {
    bgcMark:"home",
    username:'Login',
    maxpage:0,
    whichPage:1,
    videoObj:[]
  },
  mutations: {
    getUserName(state,e){
      state.username = e;
    },
    changeBgc(state,e){
      state.bgcMark =e;
    },
    getVideoObj(state,e){
      console.log("哪一页:"+state.whichPage);
      state.videoObj[state.whichPage-1]=e;
      /*__________________________________________________*/
       // cleanUndefined

      if(isfirst == true){
        for(let i=0 ;i<=state.maxpage-1;++i){
          if(state.videoObj[i]===undefined){
            state.videoObj[i]=[];
          }
        }
        isfirst =false
      }
      /*__________________________________________________*/
/*      let A=[[{a:'1'},{b:'2'}],[{a:'1'},{b:'2'}]];
      console.log(JSON.stringify(A));*/
         window.localStorage.setItem(`${state.whichPage-1}`,JSON.stringify(e));
         window.localStorage.removeItem('loglevel:webpack-dev-server');

    },
    getMaxPage(state,e){
      state.maxpage = e;
    },
    getwhichPage(state,e){
      state.whichPage =e;
    }
  },
  actions: {
  },
  modules: {
  }
})
