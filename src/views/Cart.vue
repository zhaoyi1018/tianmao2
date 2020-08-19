<template>
  <div class="cartRouter">
    <div class="shop-cart">
      <div class="top">
        <div>
          <img src="../images/arrow-left-zd.png" alt @click="cartBack" />
        </div>
        <div class="shopping-car">
          <span>购物车({{cartList.length}})</span>
        </div>
        <div></div>
      </div>
    </div>

    <div v-for="(item,index) in cartList" :key="index">
      <div class="car-top">
        <div class="car-top-left">
          <label class="checkBox">
            <input
              type="checkbox"
              v-model="item.checked"
              @change="checkMe(index)"
            />
            <!-- <input
              type="checkbox"
              :id="item.supermarket"
              :checked="item.checked"
              @change="checkMe(index)"
            /> -->
          </label>
          <img src="../images/tianmao-zd.png" alt class="tm-logo" />
          <div class="shop-name">{{item.supermarket}}</div>
          
          <img src="../images/arrow-right-zd.png" alt class="arrow-right" />
        </div>
        <div class="edit" @click="edit(item,index)" v-if="item.show">编辑</div>
        <div class="edit" @click="edit(item,index)" v-else>完成</div>
      </div>
      <div class="car-bottom">
        <div class="car-bottom-l">
          <!-- <input
            type="checkbox"
            :id="item.supermarket"
            :checked="item.checked"
            @change="checkMe(index)"
          /> -->
          <input
              type="checkbox"
              v-model="item.checked"
              @change="checkMe(index)"
            />
        </div>

        <!-- 左移删除 -->
        <van-swipe-cell>
          <div class="car-bottom-r">
            <div class="car-bottom-r-b">
              <div>
                <img :src="item.images" alt class="image" />
              </div>
              <div>
                <div class="disc">
                  <span>{{item.text}}</span>
                </div>

                <div class="baojia">15天保价</div>
                <div class="price-wrap">
                  <div class="price">¥{{item.price}}</div>
                  <div class="count" >
                    <span class="minus" @click="minus(index)">-</span>
                    <span>{{item.num}}</span>
                    <span class="plus" @click="plus(index)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="del" />
          </template>
        </van-swipe-cell>

        <div v-if="item.cancel"></div>
        <div class="cancel" @click="del(index)" v-else>删除</div>
      </div>
    </div>

    <!-- 遮罩部分 -->
    <div class="overlay" v-if="overlayShow">
      <div class="overlay-content">受不了了,宝贝不能再减少了哦~</div>
    </div>

    <!-- 删除的遮罩部分 -->

    <div class="overlay" v-if="overlayShow2">
      <div class="overlay2-content">
        <div class="overlay2-content-sure">确定要删除这个宝贝吗?</div>
        <div class="cancel-sure">
          <div class="overlay2-content-cancel" @click="cancel2">取消</div>
          <div class="overlay2-content-cancel" @click="sure">确定</div>
        </div>
      </div>
    </div>

    <!-- 底部计算部分 -->
    <div class="count-wrap">
      <div class="count-l">
        <input type="checkbox" name="checkall"
         id="checkall2" :checked="isCheck" @change="allCheck()" />
        <label for="checkall2"></label>
        <span>全选</span>
      </div>

      <div class="total-r">
        <div>
          <span class="total-r-c">合计:</span>
          <span class="total-r-a">¥{{total}}</span>
          <span class="total-r-b">.00</span>
        </div>
        <div class="total">结算({{count}})</div>
      </div>
    </div>

    <!-- {{cartList}} -->

    <!-- 你可能还喜欢 -->
    <div class="youlike-wrap">
      <div class="youlike">
        <img src="../images/youlike-zd.png" alt />
      </div>
    </div>

    <div class="youlike-a">
      <div v-for="(item2,index2) in carList" :key="index2" class="youlike-b">
        <div class="youlike-content">
          <div class="youlike-content-img">
            <img :src="item2.img" />
          </div>
          <div class="youlike-text">{{item2.disc}}</div>
          <div class="youlike-price-people">
            <span class="youlike-price">¥ {{item2.price}}</span>
            <span class="youlike-people">{{item2.people}}人已购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  //  商品结算
  computed: {
    overlayShow(){
      return this.$store.state.overlayShow
    },
    show(){
      return this.$store.state.show
    },

    cancel(){
       return this.$store.state.cancel
    },

    checked(){
      //  return this.$store.state.checked
      console.log(this.$store.state.cartList[0].checked)
      return this.$store.state.cartList[0].checked
    },

    overlayShow2(){
       return this.$store.state.overlayShow2
    },

     isCheck(){
       return this.$store.state.isCheck
     },


    total() {
      var totalNum = 0;
      for (let i = 0; i < this.$store.state.cartList.length; i++) {
        // totalNum +=this.$store.state.cartList[i].price;
        if (this.$store.state.cartList[i].checked == true) {
          totalNum = totalNum + this.$store.state.cartList[i].price * this.$store.state.cartList[i].num;
        }
      }
      return totalNum;

      // if (totalNum == 0) {
      //   return 0.0;
      // } else {
      //   return totalNum;
      // }
    },

    count() {
      var count = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].checked == true) {
          count++;
        }
      }
      return count;
    },

    cartList() {
      return this.$store.state.cartList;
    },

  },

  data() {
    return {
      // overlayShow: false,
      // overlayShow2: false,
      // isCheck: false,
      // checked: "",
       index:0,
      carList: [
        {
          num: 1,
          supermarket: "嘉兴童车正品店",
          disc: "兰博基尼儿童电动车四轮遥控汽车男女宝宝超大玩具",
          img: require("../images/1-zd.png"),
          price: 1238,
          people: 41,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "智贝母婴专营店",
          disc: "智能机器狗遥控对话机器人女孩电子狗狗走路会叫电动儿童玩具男孩",
          img: require("../images/2-zd.png"),
          price: 126,
          people: 32,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "爱婴乐母婴专营店",
          disc: "儿童益智玩具小孩一至二岁3-5五4两三动脑宝宝智力开发多功能男孩",
          img: require("../images/3-zd.png"),
          price: 117,
          people: 435,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "知叶玩具专营店",
          disc: "三宝超变战陀新款男孩拉线战斗盘坨螺三星升级版合体陀螺玩具儿童",
          img: require("../images/4-zd.png"),
          price: 77,
          people: 63,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "建雄旗舰店",
          disc: "儿童决明子玩具沙池套装宝宝玩沙子挖沙家用室内围栏沙滩池沙池组",
          img: require("../images/5-zd.png"),
          price: 226,
          people: 55,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "美康村家居旗舰店",
          disc: "flynova自由航线会飞行指尖陀螺手指回旋悬浮黑科技玩具10岁以上",
          img: require("../images/6-zd.png"),
          price: 1238,
          people: 41,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "苏克母婴专营店",
          disc: "抖音猪小屁网红同款电动跳舞婴儿有声会动宝宝玩具男1岁2儿童女孩",
          img: require("../images/7-zd.png"),
          price: 28,
          people: 456,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "auby澳贝旗舰店",
          disc: "澳贝宝宝玩具手摇铃可安全水煮磨牙棒咬咬乐0-6个月婴儿牙胶",
          img: require("../images/8-zd.png"),
          price: 49,
          people: 435,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "科迈特旗舰店",
          disc: "哈哈舔舔汪智能玩具狗狗走路会叫机器狗电动小狗宠物毛绒仿真狗",
          img: require("../images/9-zd.png"),
          price: 298,
          people: 429,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "乐乐熊母婴专营店",
          disc: "婴儿玩具0到1岁半幼儿有声会动9个月3儿童8男孩6女宝宝益智早教",
          img: require("../images/10-zd.png"),
          price: 65,
          people: 466,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "琳蜜旗舰店",
          disc: "2020年夏季新款粉色短袖t恤女宽松韩版中长款半袖上衣女装ins潮桖",
          img: require("../images/11-zd.png"),
          price: 50,
          people: 55,
          show: true,
          cancel: true,
          checked: false
        },

        {
          num: 1,
          shopName: "安踏官方网店",
          disc: "安踏中国航天联名短袖2020夏新款运动半袖针织衫情侣t恤男女体恤",
          img: require("../images/12-zd.png"),
          price: 159,
          people: 223,
          show: true,
          cancel: true,
          checked: false
        }
      ],
      // show:true,
    
    };
  },
  methods: {
    cartBack() {
      this.$router.go(-1);
      this.$destroy(true);
    },

    minus(index){
      this.$store.commit("minusStore",index)
    },

    plus(index){
       
      this.$store.commit("plusStore",index);
     },

     edit(item,index){
        item.show = !item.show;
        item.cancel=!item.cancel
        console.log (index)
       
      // this.$store.commit("editStore",index);
     },

     del(index){
      this.$store.commit("delStore");
      this.index = index;
     },

     cancel2(){
      this.$store.commit("cancel2Store");
     },

     sure(state){
      this.$store.commit("sureStore",this.index);
     },

    //  total(state, index){
    //   this.$store.commit("totalStore");
    //  },

    //  count(state, index){
    //   this.$store.commit("countStore");
    //  },

     checkMe(index){
       console.log (index)
      this.$store.commit("checkMeStore",index);
     },

     allCheck(state, index){
      this.$store.commit("allCheckStore",index);
     },

    // 商品数量加减
    // minus(item, index) {
    //   if (item.num < 2) {
    //     let that = this;
    //     this.overlayShow = true;
    //     setTimeout(function() {
    //       that.overlayShow = false;
    //     }, 1800);
    //   } else {
    //     item.num--;
    //   }
    // },

    // plus(item, index) {
    //   item.num++;
    // },

    // edit(item, index) {
    //   item.show = !item.show;
    //   item.cancel = !item.cancel;
    // },

    // del(item, index) {
    //   this.overlayShow2 = true;
    // },

    // cancel2() {
    //   this.overlayShow2 = false;
    // },

    // sure(item, index) {
    //   this.carList.splice(index, 1);
    //   this.overlayShow2 = false;
    // },

    // 单选与全选
    // checkMe(index) {
    //   if (event.target.checked) {
    //     this.carList[index].checked = true;
    //   } else {
    //     this.carList[index].checked = false;
    //   }
    //   for (let i = 0; i < this.carList.length; i++) {
    //     if (this.carList[i].checked == false) {
    //       return (this.isCheck = false);
    //     }
    //   }
    //   this.isCheck = true;
    // },

    allCheck() {
      // if (e.target.checked) {
      //   this.isCheck = true;
      //   for (let i = 0; i < this.carList.length; i++) {
      //     this.carList[i].checked = true;
      //   }
      // } else {
      //   this.isCheck = false;
      //   for (let i = 0; i < this.carList.length; i++) {
      //     this.carList[i].checked = false;
      //   }
      // }
      this.$store.commit("allCheckStore",event)
    }
  }
};
</script>

<style scoped>
/* 复选框样式 */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background-color: #fff;
  -webkit-appearance: none;
  border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
}

input[type="checkbox"]:checked {
  background: url("../images/checkbox-zd.png") no-repeat center;
}
/* 删除的遮罩部分 */
.overlay2-content {
  width: 300px;
  height: 96px;
  display: flex;
  flex-direction: column;
  background-color: rgb(244, 244, 244);
  border-radius: 8px;
}

.overlay2-content-sure {
  width: 300px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel-sure {
  display: flex;
  flex-direction: row;
}
.overlay2-content-cancel {
  width: 150px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: rgb(95, 100, 108);
}

.cartRouter {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

/* 你可能还喜欢 */
.youlike-wrap {
  background-color: rgb(242, 242, 242);
  width: 100%;
}

.youlike-b {
  width: 180px;
  margin-right: 4px;
}

.youlike-a {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(242, 242, 242);
}
.youlike {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.youlike img {
  width: 180px;
  height: 22px;
}

.youlike-content {
  width: 170px;
  height: 280px;
  border-radius: 8px;
  margin-left: 7px;
  margin-top: 10px;

  background-color: rgb(255, 255, 255);
}

.youlike-content-img img {
  width: 170px;
  height: 180px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.youlike-price-people {
  margin-top: 8px;
  margin-left: 8px;
}

.youlike-price {
  color: rgb(255, 85, 0);
}

.youlike-people {
  font-size: 12px;
  margin-left: 5px;
  color: rgb(181, 181, 181);
}

.youlike-text {
  font-size: 14px;
  margin: 8px;
}

/* 底部计算部分 */
.count-wrap {
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  border-top: 1px solid #eee;
}

.count-l {
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.count-l span {
  margin-left: 8px;
}
.total-r {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}

.total-r-a {
  color: rgb(255, 85, 0);
  margin-left: 5px;
  font-size: 16px;
}

.total-r-b {
  color: rgb(255, 85, 0);
  font-size: 14px;
  margin-right: 10px;
}

.total-r-c {
  font-size: 14px;
}

.total {
  width: 115px;
  height: 55px;
  background-color: rgb(255, 85, 0);
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 遮罩部分 */
.overlay {
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  width: 230px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 15px 20px;
  color: #eee;
}

/* 头部 */
.top {
  width: 100%;
  height: 50px;
  border-bottom: 15px solid rgb(238, 238, 238);
  display: flex;
  align-items: center;
  justify-content: center;
}

.top div {
  flex: 1;
}

.shop-cart {
  width: 100%;
  padding: 10px auto;
  font-size: 18px;
}

.shopping-car {
  display: flex;
  align-items: center;
  justify-content: center;
}

.shop-cart img {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}

.car-top {
  display: flex;
  flex-direction: row;
  padding: 8px;
  text-align: center;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.shop-name {
  line-height: 35px;
  margin-left: 10px;
}

.tm-logo {
  width: 15px;
  height: 15px;
  margin-left: 8px;
}

.arrow-right {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.car-top-left {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}

.edit {
  margin-right: 8px;
}

/* 下部 */
.car-bottom {
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  border-bottom: 20px solid rgb(238, 238, 238);
  justify-content: space-between;
  position: relative;
}

.car-bottom-l {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.manjian {
  width: 45px;
  height: 15px;
}

.car-bottom-r-t {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin-top: 10px;
  justify-content: space-between;

  align-items: center;
}

.manjian-text {
  margin-left: 12px;
  margin-right: 90px;
}

.coudan {
  color: rgb(255, 85, 0);
  flex-shrink: 0;
}

.image {
  width: 110px;
  height: 110px;
}

.car-bottom-r-b {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.disc {
  font-size: 12px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.baojia {
  width: 52px;
  font-size: 12px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 1px;
  background-color: rgb(255, 80, 0);
  color: rgb(255, 244, 239);
}

.price {
  margin-left: 20px;
  margin-top: 20px;
  color: #ff6600;
}

.price-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.count {
  margin-right: 20px;
  margin-top: 16px;
}
.count span {
  margin-left: 20px;
}

.minus {
  font-size: 20px;
  font-weight: bold;
  color: rgb(189, 189, 189);
}

.plus {
  font-size: 20px;
  font-weight: bold;
  color: rgb(189, 189, 189);
}

.cancel {
  width: 58px;
  height: 134px;
  background-color: rgb(255, 85, 0);
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.van-button--danger {
  background: rgb(255, 85, 0);
  border: 0;
}
.delete-button {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>