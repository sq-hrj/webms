<template>
  <div id="main">
      <div class="head">

      </div>
      <div class="contain">
          <div class="left">
            <div class="vip">
                <webvip/>
            </div>
            <div class="sjwz">

            </div>
            <div class="dh">
                <tabar/>
            </div>
            <div class="card">

            </div>
            <div class="pagelist">

            </div>
            <div class="tag">
                <div class="taglist">

                </div>
                <div class="taglist">
                    
                </div>
                <div class="taglist">
                    
                </div>
                <div class="taglist">
                    
                </div>
            </div>
          </div>
          <div class="right">
              <div class="user">

              </div>
              <div class="zxwz">

              </div>
              <div class="rmwz">

              </div>
              <div class="zxpl">
                  <commentsright/>
              </div>
          </div>
          <div class="foot">

          </div>
      </div>
  </div>
</template>
<script>
import webvip from '../components/Webvip.vue/index'
import tabar from '../components/Tabar/tabar.vue'
import commentsright from '../components/Comments/commentsright.vue'
export default {
    name:'index',
    components:{
        webvip,
        tabar,
        commentsright
    }
}
</script>
<style lang="scss" scoped>
*{
      padding: 0;
      margin: 0;
}

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  width: 100%;
  height: 100%;
  clear: both;
}
.head{
    width: 100%;
    height: 80px;
    background-color: red;
    box-shadow: 5px 5px 5px #888888;
}
.contain{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    margin-top: 10px;
    clear: both;
    box-shadow: 5px 5px 5px #888888;
}
.left{
    width: 65%;
    height: 100%;
    float: left;
    text-align: center;
    box-shadow: 5px 5px 5px #888888;
}
.right{
    width: 30%;
    height: 100%;
    margin-left: 70%;
    text-align: center;
    box-shadow: 5px 5px 5px #888888;
}
.vip{
    width: 100%;
    height: 150px;
    box-shadow: 5px 5px 5px #888888;
}
.sjwz{
    width: 100%;
    height: 400px;
    background-color:black;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.dh{
    width: 100%;
    height: 120px;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.card{
    width: 100%;
    height: 250px;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.pagelist{
    width: 100%;
    height: 50px;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.tag{
    width: 100%;
    height: 100%;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.taglist{
    width: 45%;
    height: 250px;
    background-color: black;
    float: left;
    margin-left: 3%;
    margin-top: 5px;
    box-shadow: 5px 5px 5px #888888;
}
.user{
    width: 100%;
    height: 350px;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.zxwz{
    width: 100%;
    height: 450px;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.rmwz{
    width: 100%;
    height: 450px;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.zxpl{
    width: 100%;
    height: 500px;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
.foot{
    width: 100%;
    height: 250px;
    background-color: red;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #888888;
}
</style>
