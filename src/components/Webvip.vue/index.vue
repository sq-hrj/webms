<template>
<div class="mod">
  <div class="box">
    <div class="hd">
      <span class="txt">
        本站最新会员
        <hr>
      </span>
    </div>
    <div class="main">
      <img
        class="largeIcon"
        src="@/assets/logo.png"
        alt="largeIcon"
      />
      <img
        class="largeIcon"
        src="@/assets/logo.png"
   alt="largeIcon_2"
      />
      <img
        class="largeIcon"
        src="@/assets/logo.png"
        alt="largeIcon_3"
      />
      <img
        class="largeIcon"
        src="@/assets/logo.png"   alt="largeIcon_4"
      />
      <img
        class="largeIcon"
        src="@/assets/logo.png"     
        alt="largeIcon_5"
      />
      <img
        class="largeIcon"
        src="@/assets/logo.png"     
        alt="largeIcon_6"
      />
     <img
        class="largeIcon"
        src="@/assets/logo.png"
        alt="largeIcon_6"
      />
     <img class="largeIcon" src="@/assets/logo.png" alt="largeIcon_6" />
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.mod {
  width: 860px;
  height: 150px;
  box-shadow: 5px 5px 5px #888888;
  position: relative;
}
.mod .box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: whitesmoke;
  width: 860px;
  height: 150px;
  border-radius:5px 5px 5px 5px;border:1px solid white;
}
.mod .hd {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  width: 704px;
  height: 23px;
}
.mod .txt {
  margin-top: -4px;
  max-width: 637px;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 15px;
  color: #a35e63;
  font-size: 13px;
  font-weight: 600;
}
.mod .main {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 18px;
  width: 655px;
  height: 66px;
}
.largeIcon{
flex: 1;
width: 50px;
height: 66px;
border-radius: 50%;
}
.largeIcon:hover{
flex: 1;
width: 55px;
height: 71px;
border-radius: 50%;
transition: 1s all;
}
</style>