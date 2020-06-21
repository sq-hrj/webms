<template>
  <div>
    <div class="links-head">
      <b class="i-left">友情链接-</b><b class="i-right">排名不分前后</b>
      <a href="">申请友链</a>
    </div>
    <div class="links-body">


    </div>
  </div>
</template>

<script>
  export default {
    name: "Links"
  }
</script>

<style scoped>
  body{
    left: 0;
    right: 0;
    text-align: center;
  }
  .links-head{
    width: 800px;
    height: 30px;
    border: 1px solid #d9d9d9;
  }
  .links-head a{
    float: right;
    text-decoration: none;
    font-size: 12px;
    padding-top: 5px;
    color: black;
  }
  .i-left{
    font-family: Arial;
  }
  .i-right{
    font-size: 12px;
    color: lightblue;
  }

  .links-body{
    width: 800px;
    height: 70px;
    border: 1px solid #d9d9d9;
    margin-top: 3px;



  }

</style>