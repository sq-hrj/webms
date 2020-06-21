<template>
  <div class="copyright">
    <div class="copyright-head">
      <a href="">网站地图</a> |
      <a href="">文章存档</a> |
      <a href="">Sitemap</a> |
      <a href="">站长统计</a>
    </div>

    <div class="copyright-body">
      <slot id="copyright"></slot>Copyright @ 2019-2020 | sq-jc |   <slot id="city"></slot>
      闽ICP备16041314号 |      <slot id="govment"></slot>闽公网安备 370602000858号 <br>
      本站资源仅供用于学习和交流，请遵循相关法律法规，本站一切资源不代表本站立场，如有侵权，不妥请联系本站删除

    </div>

  </div>
</template>

<script>
  export default {
    name: "copyright"
  }
</script>

<style scoped>
.copyright{
  background-color: #d5d5d5;
  width: 100%;
  height: 80px;
  font-size: 15px;
}
  .copyright-head{
    text-align: center;

  }
  .copyright-head a{
    text-decoration: none;
    color: black;

  }
  .copyright-body{
    text-align: center;
  }
</style>