<template>
  <div class="activate clearfix">
<span class="fontReg regshequ-weijihuo"></span>
    <h2 class="tips">激活邮件已发送至您的注册邮箱<br/>请前往邮箱查看邮件并完成激活！</h2>
    <span class="fontReg regshequ-jihuo"></span>

  </div>
</template>

<script>
    export default {
        name: "Activate",
      methods: {

      }

    }
</script>

<style scoped>
  .activate {
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: url("../assets/images/acti.jpg");
    background-size: cover;
    position: absolute;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    overflow: hidden;
  }
  .regshequ-weijihuo{
    font-size: 100px;
    position: absolute;
    color: #4ab6ff;
    left:17%;
    top:30%;

  }
  .regshequ-jihuo{
    font-size: 100px;
    position: absolute;
    color: #4ab6ff;
    left:77%;
    top:30%;
  }
  .tips{
    color: rgba(239, 255, 255, 0.75);
font-size: 50px;
    margin-top: 14.6%;
    font-family: '华文新魏 Bold', '华文新魏 Regular', '华文新魏';
  }

</style>
