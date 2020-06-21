<template>
  <div class="tabbar">
      <div class="card">
          <img src="@/assets/logo.png" alt="">
          <p>导航名字</p>
          <button class="btn">点击进入</button>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
          <p>导航名字</p>
          <button class="btn">点击进入</button>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
          <p>导航名字</p>
          <button class="btn">点击进入</button>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
          <p>导航名字</p>
          <button class="btn">点击进入</button>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
          <p>导航名字</p>
          <button class="btn">点击进入</button>
      </div>
  </div>    
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.tabbar{
    width: 860px;
    height: 100px;
    background-color: red;
    background-color: whitesmoke;
}
.card{
    width: 171px;
    height: 120px;
    background-color: white;
    border-right: 1px dashed;
    float: left;
    color: #000;
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
    border-right: 1px dashed;
    float: left;
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
    img{
        width: 25px;
        height: 25px;
        margin-top: 20px;
    }
    p{
        font-size: 13px;
    }
    p:hover{
        font-size: 13px;
        color: red;
    }
    .btn{
       width: 70px;
       height: 25px;
       margin-top: 30px;
       background-color: #2CDB87;
       border-color:#2CDB87 ;
       border-style:none ;
    }
}
.card:hover{
    width: 171px;
    height: 120px;
    background-color: white;
    border-right: 1px dashed;
    float: left;
    border-radius: 5px 5px 5px 5px;

    color: #000;
    img{
        width: 25px;
        height: 25px;
        margin-top: -20px;
        transition: 0.5s all;
    }
    .btn{
       width: 70px;
       height: 25px;
       margin-top: 10px;
       background-color: #2CDB87;
       border-color:#2CDB87 ;
       border-style:none ;
       transition: 1s all;
    }

    img{
        width: 25px;
        height: 25px;
        margin-top: -10px;
        transition: 0.5s all;
    }

}
</style>