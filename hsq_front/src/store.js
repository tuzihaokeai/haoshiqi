import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);  
import priceFilter from "./priceFilter";
const store= new Vuex.Store({
//con
	state:{
		datalist:[] ,//定义组件中的"状态"
		titletext:""
	},
   
	actions:{
		ADD_ITEM_ACTION:(store,data)=>{
			//对于这个数据进行二次加工，或者是根据这个数据去后台请求数据

			//console.log(data)
			//提交到mutation 
			store.commit("ADD_ITEM_MUTATION",data);
			
		}
	},

	mutations:{

		ADD_ITEM_MUTATION:(state,data)=>{
			//操作state-》增加数据
			state.datalist=data.info.list;
			state.titletext=data.title;

				state.datalist.map(item=>
					item.price=priceFilter(item.price)
					)

				console.log(state.datalist);
	
		}
	},

	getters:{
		//可以过滤,
		
		//共享计算属性
		complete:(state)=>{
			
			return state.datalist;
			
		},
		uncomplete:(state)=>{
			
			return state.datalist.filter(item=>item.marked==false).length;
		}
	}

})


export default store;