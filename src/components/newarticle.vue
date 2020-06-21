<template>
  <div class="hot">
    <div class="hot-title">
      <img src="../../src/assets/img/icon/hot.png" alt="">最新文章
    </div>
    <div class="hot-detail">

      <div class="detail-img">
        <slot id="detail-img"><img src="../../src/assets/img/icon/hot.png" alt="" ></slot>
        <div class="detail-text">
          <slot> <p>111111111111</p></slot>
        </div>
        <div class="detail-te">
          <img src="../../src/assets/img/icon/time.png" alt=""> 2020-06-16
          <img src="../../src/assets/img/icon/eyes.png" alt="">     52
        </div>
      </div>


    </div>



  </div>
</template>

<script>
  export default {
    name: "newarticle"
  }
</script>

<style scoped>
  .hot{
    width: 300px;
    height: 420px;
    border: 2px solid #d8d8d8;
    border-radius: 10px;
  }
  .hot-title{
    font-size: 15px;
    border-bottom: 1px solid #d8d8d8;
  }
  .hot-title img{
    height: 15px;
    padding-top: 5px;
  }
  .hot-detail {
    height: 70px;
    border-bottom: 1px solid #d8d8d8;
  }
  .detail-text{
    width: 225px;
    position: relative;
    top: -75px;
    left: 70px;
    overflow: hidden;
  }
  .detail-img img{
    width: 50px;
    height: 50px;
    text-align: center;
    vertical-align: center;
    padding-top: 10px;
  }
  .detail-te{
    font-size: 15px;
    position: relative;
    top: -81px;
    left: 66px;
  }
  .detail-te img{
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }

</style>