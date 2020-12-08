<template>
  <div class="about container">
    <h1>This is a login page</h1>
    <div class="row">
      <div class="col-md-12">
        <b-card no-body class="overflow-hidden justify-content-center">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Login Form">
                <b-card-text>
                  <p v-if="error" class="text-danger">{{errMsg}}</p>
                  <form @submit.prevent="login">
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                      <input type="submit" class="btn btn-success btn-block" value="login">
                    </div>
                  </form>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Service from '@/service/Service.js'
  export default{
    data(){
      return {
        error:false,
        errMsg:'',
        email: "",
        password: ""
      }
    },
    methods:{
      login(){
        let email = this.email
        let password = this.password
        Service.login(email,password)
              .then(response => {
                //console.log(response.data)
                this.$store.dispatch('storeToken',response.data.access_token)
                this.$store.dispatch('getUser')
                this.$router.push('/item')
              })
              .catch(err=>{
                console.log(err)
                this.error=true
                this.errMsg="Email and password invalid user."
              })
      }
    }
  }
</script>

<style type="text/css">
  
</style>