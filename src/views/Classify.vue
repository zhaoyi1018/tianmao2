<template>
  <div class="classifyRouter">
    <!-- <span>分类</span>  -->
    <div class="top-table-zy">
      <div class="zy-my-return" @click="classifyBack">
        <img src="../images/return-grey-zy.png" />
      </div>

      <div
        class="input-div-zy"
        href="https://s.m.tmall.com/m/searchbar.htm?spm=a223u.11751606.search.d1"
      >
        <input
          type="text"
          class="input-zy"
          href="https://s.m.tmall.com/m/searchbar.htm?spm=a223u.11751606.search.d1"
        />
        <div>
          <a href="https://s.m.tmall.com/m/searchbar.htm?spm=a223u.11751606.search.d1">
            <div class="searchimg-zy">
              <img src="../images/search-zy.png" alt style="width:20px;height:20px" />
            </div>
            <div class="searchtext-zy">搜索商品/品牌</div>
          </a>
        </div>
      </div>
    </div>

    <!-- 左边列表 -->
    <div class="ul-div-zy">
      <table>
        <tr>
          <td :class="[componentName=='fashion-div'? 'active':'']">
            <div class="lx-td-zy" @click="componentName='fashion-div'">流行趋势</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='internal-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='internal-div'">天猫国际</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='girlclothes-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='girlclothes-div'">女装</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='girlshoes-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='girlshoes-div'">女鞋</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='boyclothes-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='boyclothes-div'">男装</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='boyshoes-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='boyshoes-div'">男鞋</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='phone-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='phone-div'">手机</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='digital-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='digital-div'">数码</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='electric-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='electric-div'">家电</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='beauty-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='beauty-div'">美妆</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='bag-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='bag-div'">箱包</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='sport-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='sport-div'">运动</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='foods-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='foods-div'">食品</div>
          </td>
        </tr>
        <tr>
          <td :class="[componentName=='fresh-div'? 'active2':'']">
            <div class="lx-td-zy" @click="componentName='fresh-div'">生鲜</div>
          </td>
        </tr>
      </table>

      <component :is="componentName"></component>
    </div>

    <!-- 右边 -->
  </div>
</template>

<script>
import fashion from "../components/Fashion.vue";
import internal from "../components/Internal.vue";
import girlclothes from "../components/GirlClothes.vue";
import girlshoes from "../components/GirlShoes.vue";
import boyclothes from "../components/BoyClothes.vue";
import boyshoes from "../components/BoyShoes.vue";
import phone from "../components/Phone.vue";
import digital from "../components/Digital.vue";
import electric from "../components/Electric.vue";
import beauty from "../components/Beauty.vue";
import bag from "../components/Bag.vue";
import sport from "../components/Sport.vue";
import foods from "../components/Foods.vue";
import fresh from "../components/Fresh.vue";

export default {
  data() {
    return {
      // 默认
      componentName: "fashion-div"
    };
  },

  components: {
    "fashion-div": fashion,
    "internal-div": internal,
    "girlclothes-div": girlclothes,
    "girlshoes-div": girlshoes,
    "boyclothes-div": boyclothes,
    "boyshoes-div": boyshoes,
    "phone-div": phone,
    "digital-div": digital,
    "electric-div": electric,
    "beauty-div": beauty,
    "bag-div": bag,
    "sport-div": sport,
    "foods-div": foods,
    "fresh-div": fresh
  },

  methods: {
    classifyBack() {
      this.$router.go(-1);
      this.$destroy(true);
    }
  }
};
</script>


<style scoped>
.classifyRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
}

.top-table-zy {
  width: 99%;
  height: 55px;
  margin-top: 30px;
  margin-left: 10px;
  /* border: 1px solid rgb(4, 0, 255); */
  position: fixed;
  align-items: center;
  background-color: #fff;
}

.top-table-zy img {
  width: 20px;
  height: 25px;
  /* border: 1px solid red; */
  margin-top: 15px;
}

.top-table-zy .return-zy img {
  margin-left: 20px;
  margin-top: 25px;
}

.input-div-zy {
  margin-top: -35px;
}

.input-zy {
  margin-left: 30px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 312px;
  height: 30px;
  border-radius: 1rem;
  /* background-color: #fff; */
  background-color: rgba(0, 0, 0, 0.05);
  line-height: 2rem;
}

.ul-div-zy {
  width: 69px;
  height: 720px;
  overflow: auto;
  margin-top: 100px;
  /* border: 1px solid green; */
}

.ul-div-zy table {
  width: 66px;
  height: 300px;
  font-size: 12px;
  /* border: 1px solid red; */
  border-collapse: collapse;
  background-color: #f7f7f7;
}

.ul-div-zy table tr td {
  width: 66px;
  height: 58px;
  /* border: 1px solid rgb(92, 52, 52); */
  border-bottom: 3px solid #fff;
}

.lx-td-zy {
  width: 35px;
  margin: 0 auto;
}

.right-div-zy {
  width: 80%;
  height: 700px;
  border: 1px solid red;
  margin-top: -700px;
  margin-left: 70px;
  overflow: auto;
}

.active {
  border-left: 3px solid #ff0036;
  color: #ff0036;
  background-color: #fff;
}

.active2 {
  border-left: 5px solid #ff0036;
  color: #ff0036;
  background-color: #fff;
}

.searchimg-zy {
  margin-top: -41px;
  margin-left: 40px;
}

.searchtext-zy {
  margin-top: -23px;
  margin-left: 60px;
  font-size: 14px;
  color: #999999;
}

/* .zy-my-return{
   border: 1px solid rgb(4, 0, 255); 
   width: 20px;
} */
</style>