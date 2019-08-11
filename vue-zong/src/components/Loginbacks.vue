<template>
  <div>
  <img src="../assets/tutou.jpg">
  <h2 class="tips">激活邮件已发送至您的注册邮箱<br/>请前往邮箱查看邮件并完成激活！<br/>激活成功后将自动跳转登录页面</h2>
  </div>
</template>

<script>
    export default {
        name: "Loginbacks",
      data(){
      return{

      }
    }  ,
    methods:{
      getData: function () {
        this.$message.error("该邮箱尚未注册或者(激活码错误或者已经超时，请重新注册)！");
        setTimeout(()=>{this.$router.push('/loginbacks/helloWorld')},2000)

      }
    }
      ,created:function(){
        this.getData()
      }
    }
</script>

<style scoped>
.tips{
  top: 20%;
}
</style>
