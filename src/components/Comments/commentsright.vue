<template>
  <div class="box">
      <div class="head"><h3>最新评论</h3></div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>
      <div class="card">
          <img src="@/assets/logo.png" alt="">
            <p>sdasddasd</p>
      </div>       
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.box{
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 5px 5px 5px 5px;
    text-align: left;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
    border-radius: 5px 5px 5px 5px;
    text-align: left;

    .head{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-left: 30px;
    }
    .card{
        width: 80%;
        height: 50px;
        background-color: white;
        margin-top: 12px;
        margin-left: 30px;
        img{
            width: 35px;
            height: 35px;
            margin-top: 20px;
            float: left;
        }
        p{
            color: #999;
            position: relative;
            display: inline-block;
            padding: 1px 1px 1px 10px;
            width: 80%;
            border: solid #dfdfdf 1px;
            word-wrap: break-word;
            background: #fcfcfc;
            border-radius: 18px;
            height: 40px;
            line-height: 40px;
            transform:rotate(360deg) ;
        }
        p:hover{
            color: red;
            position: relative;
            display: inline-block;
            padding: 1px 1px 1px 10px;
            width: 85%;
            border: solid #dfdfdf 1px;
            word-wrap: break-word;
            background: #fcfcfc;
            border-radius: 18px;
            height: 40px;
            line-height: 40px;
            transition: 0.5s ease-in-out;
        }
                    img:hover{
            width: 35px;
            height: 35px;
            margin-top: 20px;
            float: left;
            transform: rotate(360deg);
            transition: 1s all;
            }
        
    }
}
</style>