import Vue from "vue";
import VueRouter from 'vue-router';

import Index from "./components/index.vue";
import List from "./components/list.vue"
import Category from "./components/category.vue";
import Shopcar from "./components/shopcar.vue";
import Wode from "./components/wode.vue";
import Mine from "./components/mine.vue";
import UserInfo from "./components/userinfo.vue";
import Detail from "./components/detail.vue";
import CategoryList from "./components/categorylist.vue";
import CategoryDetail from "./components/categorydetail.vue";
import CategoryDetail2 from "./components/categorydetail2.vue";
import Search from "./components/search.vue";
import Login from "./components/login.vue";

Vue.use(VueRouter);
const routes = [
	{
		path:"/index",
		redirect:"/index/list",
		component:Index,
		children:[
			{path:"list",component:List},
			{path:"detail/:id",name:"detail",component:Detail},
			{path:"search",component:Search}
		]
	},
	{
		path:"/category",
		redirect:"/category/categorylist",
		component:Category,
		children:[
			{path:"categorydetail/:searchItem",name:"categorydetail",component:CategoryDetail},
			{path:"categorydetail2",component:CategoryDetail2},
			{path:"categorylist",component:CategoryList},
			{path:"detail/:id",name:"detail",component:Detail},
			{path:"search",component:Search}
		]
	},
	{path:"/shopcar",component:Shopcar},
	{
		path:"/wode",
		component:Wode,
		redirect:"/wode/mine",
		children:[
			{path:"mine",component:Mine},
			{path:"userinfo",component:UserInfo},
			{path:"login",component:Login}
		]
	},
	{path:"*",redirect:"/index"}
]

const router = new VueRouter({
	routes,
	mode:"history"
})
export default router