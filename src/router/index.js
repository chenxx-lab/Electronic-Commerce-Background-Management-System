import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载方式引入
//登录模块
const Modal = () => import('../views/register_login/Modal')
const Message = () => import('../views/register_login/Message')
const PswSub = () => import('../views/register_login/PswSub')

const Content = () => import('../views/content/Content')
const Pay = () =>import('../views/content/carouselA/Pay')
const OrderForm = () =>import('../views/content/carouselA/OrderForm')
const CustomerService = () =>import('../views/content/carouselA/CustomerService')
const Manage = () => import('../views/content/carouselA/payChildren/Manage')
const NewUpdate = () => import('../views/content/carouselA/newUpdate/NewUpdate')

Vue.use(VueRouter)

const routes = [
			{
			     path: '/',
			     redirect:'/modal'
			},
			{
				path:'/modal',
				component:Modal
			},
			{
		         path:'/Content',
		         meta:{title:'首页'},
		         component:Content
		     },
			{
		         path:'/pay',
		         component:Pay,
		         meta:{title:'支付中心'},
		         children:[
		         {
		         	path:'',
		         	component:OrderForm
		         },
		         {
			       	path:'OrderForm',
			       	component:OrderForm
			     },
			     {
			       	path:'CustomerService',
			       	component:CustomerService
			      }
		         ]
             },
	        {
	           path:'/manage',
	           component:Manage
	        },
	        {
	           path:'/newUpdate',
	           component:NewUpdate
	        },
	        {
			     path: '/message',
			     component:Message
			},
			{
			     path: '/PswSub',
			     component:PswSub
			}
			      
			       
	
]













const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
