<template>
  <div class="page">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>下一页</button>
    <button>尾页</button>
    共32页
  </div>
  
</template>

<script>
  export default {
    name: "Page"
  }
</script>

<style scoped>
  .page{
    width: 100%;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    font-size: 10px;
    color:gray;



  }
  .page button{
    border-radius: 6px;
    background: white;
    border: 1px solid gray;
    height: auto;
    width: auto;
    margin:3px 5px 0px;

  }
  .page p{


  }
</style>