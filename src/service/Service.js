import axios from 'axios'

const apiClient= axios.create({
	baseURL: 'http://localhost:8000/api',
	withCredentials: false,
	headers:{
		Accept: 'application/json',
		'Content-type':'application/json'
	}
})
export default{
	getItems(){
		return apiClient.get('/items')
	},
	getItemDetail(id){
		return apiClient.get('/items/'+id)
	},
	getBrands(){
		return apiClient.get('/brands')
	},
	getCategories(){
		return apiClient.get('/categories')
	},
	getSubcategories(){
		return apiClient.get('/subcategories')
	},
	login(email, password){
    return apiClient.post('/login',{email,password})
  },
   getUser(token){
    apiClient.defaults.headers.common['Authorization'] = 'Bearer '+token
    return apiClient.get('/user')
  },
  order(ls,notes,user_id){
  	return apiClient.post('/orders',{ls,notes,user_id})
  }

}