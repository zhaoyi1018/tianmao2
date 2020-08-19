<template>
  <div class="searchRouter">
    <div class="search-bigDiv-lj">
      <div class="search-bigSmall-lj">
        <img src="../images/search-lj.png" alt />
        <input type="text" placeholder="搜索商品/店铺/品牌" />
      </div>
    </div>
    <div class="search-hotWords-lj">
      <ul class="search-ul-lj">
        <li>天猫精灵</li>
        <li>天猫</li>
      </ul>
      <ul class="search-ul-lj">
        <li>天猫魔盒</li>
        <li>天猫超市卡</li>
      </ul>
      <ul class="search-ul-lj">
        <li>天猫精灵智能音响</li>
        <li>天猫精灵X5</li>
      </ul>
      <ul class="search-ul-lj">
        <li>天猫魔屏</li>
        <li>天猫国际直营</li>
      </ul>
      <ul class="search-ul-lj">
        <li>天猫精灵cc10</li>
        <li>天猫养车</li>
      </ul>
    </div>
    <!-- <button @click="searchBack">返回</button> -->
  </div>
</template>


<script>
export default {
  // methods: {
  //   searchBack() {
  //     this.$router.go(-1);
  //   }
  // }
};
</script>


<style scoped>
.searchRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

.search-bigDiv-lj {
  background: #000;
  padding: 5px 9px 5px 9px;
}

.search-bigSmall-lj {
  height: 34px;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search-bigSmall-lj img {
  width: 20px;
  height: 20px;
  margin-left: 4px;
  margin-top: 2px;
}

.search-bigSmall-lj input {
  width: 318px;
  font-size: 14px;
  height: 24px;
  border: none;
  margin-left: 2px;
}

.search-hotWords-lj{
  padding: 0 10px;
  margin-top: 8px;
}

.search-ul-lj{
  display: flex;
  flex-direction: row;
  padding: 10px;  
  border-bottom: 1px solid #ececec;
}

.search-ul-lj li{
  width: 50%;
  line-height: 20px;
  font-size: 14px;
  color: #333;
}
</style>