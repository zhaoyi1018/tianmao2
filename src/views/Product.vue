<template>
  <div class="productRouter">
    <div class="top">
      <div v-if="show==true" class="white-zy">
        <table class="white-table">
          <tr>
            <td>
              <div>
                <img
                  src="../images/leftgrey.png"
                  style="width: 20px;height: 20px;"
                  alt
                  @click="productBack"
                />
              </div>
            </td>
            <td class="toptext-zy" @click="zyselect(1)" :class="{myActive:itemIndex==1}">商品</td>
            <td class="toptext-zy" @click="zyselect(2)" :class="{myActive:itemIndex==2}">评价</td>
            <td class="toptext-zy" @click="zyselect(3)" :class="{myActive:itemIndex==3}">详情</td>
            <td @click="cartBtn">
              <div>
                <img src="../images/cartgrey.png" style="width: 20px;height: 20px;" alt />
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div v-if="show==false" class="grey-zy">
        <table class="grey-div">
          <tr>
            <td>
              <div class="return-zy">
                <!-- 返回 -->
                <img
                  src="../images/transreturn.png"
                  alt
                  style="width: 20px;height: 24px;"
                  class="transreturn-img"
                  @click="productBack"
                />
              </div>
            </td>

            <td class="cart-td" @click="cartBtn">
              <!-- 购物车 -->
              <div class="cart-zy">
                <img
                  src="../images/cart-zy.png"
                  alt
                  style="width: 22px;height: 22px;"
                  class="cart-img"
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- 底部 -->
    <table class="end-table-zy">
      <tr>
        <td class="end-table-td1-zy">
          <div class="pro-bottom-div1">
            <img src="../images/store.png" alt class="pro-bottom-img1" />
          </div>
          <p class="storetext">店铺</p>
        </td>

        <td class="end-table-td1-zy">
          <div class="pro-bottom-div1">
            <img src="../images/collect.png" alt class="pro-bottom-img2" />
          </div>
          <p class="storetext">收藏</p>
        </td>

        <td class="end-table-td3-zy">
          <div class="storediv3">
            <p @click="addCart()">加入购物车</p>
          </div>
        </td>
      </tr>
    </table>

    <!-- 中间 -->
    <div class="middle-body-zy">
      <!-- 轮播图 -->
      <div class="myswiperdiv-zy">
        <van-swipe @change="onChange" class="my-swiper-zy">
          <van-swipe-item>
            <img class="img-swiper" :src="productList[page].images1" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-swiper" :src="productList[page].images2" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-swiper" :src="productList[page].images3" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-swiper" :src="productList[page].images4" alt />
          </van-swipe-item>

          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/4</div>
          </template>
        </van-swipe>
      </div>
      <br />
      <br />
      <br />

      <!-- ///// -->
      <div class="border">
        <table>
          <tr>
            <td>
              <span style="font-size:18px;color:#FF0036">¥</span>
            </td>
            <td>
              <span style="font-size:24px;color:#FF0036">{{productList[page].price}}</span>
            </td>
            <td>
              <div class="price-zy">超市推荐</div>
            </td>
          </tr>
        </table>
        <!-- 标题 -->
        <div class="middle-span-zy">{{productList[page].text}}</div>
        <table class="middle-table-zy">
          <tr>
            <td>满88包邮(21kg内)</td>
            <td>&nbsp;</td>
            <td>月销量2万+件</td>
            <td>&nbsp;</td>
            <td>江苏无锡</td>
          </tr>
        </table>
        <!-- 头像区域 -->
        <div class="tmheaddiv-zy">
          <div class="tmheaddiv-div">
            <div class="pinkimg-zy">
              <img src="../images/pink.jpg" alt class="tmheadimg" />
            </div>

            <div class="tmhead-span-div">
              <span class="tmhead-span">此商品活动中，请尽快购买！</span>
            </div>
          </div>
        </div>
        <!-- 促销 -->
        <table class="middle-table2-zy">
          <tr>
            <td style="color: #999999;font-size: 12px;">促销</td>
            <td style="color: #ff0036;font-size: 12px;">&nbsp;促销</td>
            <td style="font-size: 12px;">满2件，打9折</td>
            <td class="td-zy"></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td style="color: #ff0036;font-size: 12px;">&nbsp;积分</td>
            <td style="font-size: 12px;">购买可得2积分</td>
          </tr>
        </table>
        <div style="color: #999999;" class="right-click1-zy">
          <img src="../images/clickright.png" alt />
        </div>
        <!-- 物流 -->
        <table class="middle-table3-zy">
          <tr>
            <td style="color: #999999;font-size: 12px;">物流</td>
            <td style="font-size: 12px;">至沧浪区：30分钟内付款，预计6月29日送达，可选时间</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <img src="../images/tmzs.jpg" alt style="width:73px;height:14px" />
              <span style="color: #999999;font-size: 12px; ">&nbsp;天猫保障的配送服务</span>
            </td>
          </tr>
        </table>
        <!-- 服务 -->
        <table class="middle-table4-zy">
          <tr>
            <td style="font-size: 12px;color: #999999;">服务</td>
            <td style="font-size: 12px;">假一赔四</td>
            <td>.</td>
            <td style="font-size: 12px;">满88包邮</td>
            <td>.</td>
            <td style="font-size: 12px;">一站式购齐</td>
            <td>.</td>
            <td style="font-size: 12px;">破损包退</td>
            <td class="td2-zy">
              <div style="color: #999999;" class="right-click2-zy">
                <img src="../images/clickright.png" alt />
              </div>
            </td>
          </tr>
        </table>
        <div class="line-zy"></div>
        <!-- 参数 -->
        <table class="middle-table5-zy">
          <tr>
            <td style="font-size: 12px;color: #999999;">参数</td>
            <td style="font-size: 12px;">品牌</td>
            <td style="font-size: 12px;">型号...</td>
          </tr>
        </table>
        <div style="color: #999999;" class="right-click-zy">
          <img src="../images/clickright.png" alt />
        </div>
        <div class="line-zy"></div>
        <!-- 商品评价 -->
        <table class="pj-table-zy">
          <tr>
            <td style=" font-size: 14px; color: #666666;">商品评价（39920）</td>
            <td>
              <div style=" font-size: 13px;" class="pj-table-div2-zy">查看全部</div>
            </td>

            <td class="pj-table-td3-zy">
              <div style="width: 25px;">
                <img src="../images/checkall.png" alt class="checkallimg-zy" />
              </div>
            </td>
          </tr>
        </table>
        <!-- 物流快 ... -->
        <table class="wl-table-zy">
          <tr>
            <td class="wl-table-div0-zy"></td>
            <td>
              <div class="wl-table-div1-zy">物流快(90)</div>
            </td>
            <td>
              <div class="wl-table-div1-zy">性价比高(5)</div>
            </td>
            <td>
              <div class="wl-table-div1-zy">材质不错(5)</div>
            </td>
            <td>
              <div class="wl-table-div2-zy">材质一般(2)</div>
            </td>
            <td class="wl-table-div0-zy"></td>
          </tr>
        </table>
        <!-- 留言 -->
        <div>
          <div class="leave-img-zy">
            <img
              src="../images/orangehead.jpg"
              style="width: 25px; height: 25px; border-radius: 16px;"
            />
          </div>
          <div class="name-zy">t***6</div>
        </div>
        <br />
        <div class="leave-span2-zy">618促销囤货的，物品发货真的快，天猫值得信赖。</div>
        <div class="leave-date-zy">2020-06-17</div>
        <p class="long-line-zy"></p>
        <!-- 问大家 -->
        <table class="pj-table-zy">
          <tr>
            <td style=" font-size: 14px; color: #666666;">问大家（5）</td>
            <td>
              <div style=" font-size: 13px;" class="pj-table-div2-zy">打开APP查看全部</div>
            </td>
            <td class="pj-table-td3-zy">
              <div style="width: 25px;">
                <img src="../images/checkall.png" alt class="checkallimg-zy" />
              </div>
            </td>
          </tr>
        </table>
        <table class="pj-table-zy">
          <tr>
            <td style=" font-size: 12px; color: #051B28;">
              <span class="ask-zy">问</span>
              值得买吗？
            </td>
            <td>
              <div style="font-size: 12px;color: #999999;" class="pj-table-div2-zy">3个回答</div>
            </td>
            <td class="pj-table-td3-zy">
              <div style="width: 16px;"></div>
            </td>
          </tr>

          <tr>
            <td style="font-size: 12px; color: #051B28;">
              <span class="ask-zy">问</span>
              质量怎么样啊小伙伴们？
            </td>
            <td>
              <div style="font-size: 12px;color: #999999;" class="pj-table-div2-zy">3个回答</div>
            </td>
            <td class="pj-table-td3-zy">
              <div style="width: 16px;"></div>
            </td>
          </tr>
        </table>
        <div class="line-zy"></div>
        <!-- 天猫超市头像部分 -->
        <div class="shop-imgtext-zy">
          <div>
            <img src="../images/tmhead.jpg" alt style="width:45px;height:45px" />
          </div>
          <div class="shoptext-zy">
            <div>{{productList[page].supermarket}}</div>
            <div style="height:30px;border:1px solid transparent;margin-top:6px"></div>
          </div>
        </div>
        <table class="descripte-div-zy">
          <tr>
            <td>
              <span style=" font-size: 12px;color: #999999;">宝贝描述</span>
              <span style="font-size: 12px;color:#E13E4C">4.9</span>
              <div class="redtopimg-div-zy">
                <img src="../images/redtopimg-zy.png" alt style="width: 18px; height:15px" />
              </div>
            </td>

            <td>
              <span style=" font-size: 12px;color: #999999;">卖家服务</span>
              <span style="font-size: 12px;color:#E13E4C">4.9</span>
              <div class="redtopimg-div-zy">
                <img src="../images/redtopimg-zy.png" alt style="width: 18px; height:15px" />
              </div>
            </td>

            <td>
              <span style=" font-size: 12px;color: #999999;">物流服务</span>
              <span style="font-size: 12px;color:#E13E4C">4.9</span>
              <div class="redtopimg-div-zy">
                <img src="images/redtopimg-zy.png" alt style="width: 18px; height:15px" />
              </div>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <div class="enterstore-zy">进入店铺</div>
            </td>
            <td></td>
          </tr>
        </table>
        <!-- 详情 -->
        <div class="xq-box-zy">
          <table class="xq-div-zy">
            <tr>
              <td>
                <div class="xq-line-zy"></div>
              </td>
              <td style="font-size: 12px;color: #999999;">详情</td>
              <td>
                <div class="xq-line-zy"></div>
              </td>
            </tr>
          </table>
        </div>
        <div class="line-beforeimg-zy"></div>
        <!-- 详情图 -->
        <table>
          <tr>
            <img :src="productList[page].images21" alt class="myendimg-zy" />
          </tr>
          <tr>
            <img :src="productList[page].images22" alt class="myendimg1-zy" />
          </tr>
          <tr>
            <img :src="productList[page].images23" alt class="myendimg2-zy" />
          </tr>
        </table>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="shadow" v-show="newShadow">
      <div class="spaceShadow" @click="cancelBtn"></div>

      <div class="whitePart-zy">
        <img src="../images/shadowimg.jpg" alt class="shadowimg-zy" />
        <div class="shadowText-zy">
          <span style="font-size:15px;color:#FF0036">¥25.9</span>
          <br />
          <span>库存286件</span>
        </div>

        <img src="../images/close-zy.png" alt class="cancelBtn-zy" @click="cancelBtn" />

        <div class="shadowline-zy"></div>
        <p class="shadow-p-zy">配送区域(配送地可能会影响库存)</p>

        <table style="margin-left: 10px;">
          <tr>
            <td>
              <img src="../images/map-zy.png" alt />
            </td>
            <td style="font-size: 12px;">苏州市</td>
            <td style="font-size: 12px;">沧浪区</td>
            <td></td>
          </tr>
        </table>

        <p style="font-size: 12px;margin-left: 10px;margin-top: 10px;">23:00前付款，预计6月29日送达</p>
        <div class="shadowline-zy"></div>

        <table style class="numTable-zy">
          <tr>
            <td style="width: 280px;">购买数量</td>
            <td>
              <div class="numdiv" @click="proMinus(page)">-</div>
            </td>
            <td>
              <div class="numdiv">{{productList[page].num}}</div>
            </td>
            <td>
              <div class="numdiv" @click="proPlus(page)">+</div>
            </td>
          </tr>
        </table>

        <div class="shadowline-zy"></div>
      </div>
      <div class="sure—zy" @click="addCartlist(page)">确定</div>
    </div>

    <!-- 加入购物车成功遮罩层2 -->
    <div class="shadow2" v-show="newShadow2">
      <div class="shadow2-div">
        <!-- <img src="../images/cancel4-zy.png" alt @click="cancelBtn2" class="close2-zy" /> -->
        <div class="shadow2-text2">加入成功！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "",
      current: 0,
      // 遮罩层默认不可见
      newShadow: false,
      newShadow2: false,
      itemIndex: 1,
      showTop: true,
      checked:false,
      show: true,
      // 购买数量
      // num: 1,
    };
  },

  computed: {
    productList() {
      return this.$store.state.productList;
    },
    cartList() {
      return this.$store.state.cartList;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.page = this.$route.query.num;
  },

  methods: {
    cartBtn() {
      this.$router.push("cartPath");
    },
    // 定位
    zyselect(index) {
      this.itemIndex = index;

      if (index == 1) {
        document.querySelector(".myswiperdiv-zy").scrollIntoView(true);
      }

      if (index == 2) {
        document.querySelector(".pj-table-zy").scrollIntoView(true);
      }

      if (index == 3) {
        document.querySelector(".xq-box-zy").scrollIntoView(true);
      }
    },
    // 返回 按钮
    productBack() {
      this.$router.go(-1);
      this.$destroy(true);
      this.newShadow = false;
    },

    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 120) {
        this.show = true;
        // console.log(111);
      } else {
        this.show = false;
      }
    },

    onChange(index) {
      this.current = index;
      // console.log(this.currentex);
      this.newShadow = false;
    },

    addCart() {
      this.newShadow = true;
    },

    //遮罩层-取消
    cancelBtn() {
      this.newShadow = false;
    },

    // addCartlist(page){
    //   this.$store.commit("addCartstore",{
    //     price: this.productList[page].price,
    //     text: this.productList[page].text,
    //     images:this.productList[page].images1,
    //     num:this.productList[page].num,
    //     supermarket:this.productList[page].supermarket
    //   })
    // },
      // console.log(this.cartList);
    //遮罩层-取消2
    // cancelBtn2() {
    //   this.newShadow2 = false;
    // },

    // 确定
    addCartlist(page) {
      let that =this;
      this.$store.commit("addCartstore", {
        price: this.productList[page].price,
        text: this.productList[page].text,
        images: this.productList[page].images1,
        num: this.productList[page].num,
        supermarket:this.productList[page].supermarket,
        checked:this.checked
      });
      // console.log(this.cartList);
      // alert("添加成功！");
      this.newShadow = false;
      this.newShadow2 = true;
      
      setTimeout(function () {
          that.newShadow2 = false;
        }, 1000);
    },

    proMinus(page) {
      if (this.productList[page].num > 0) {
        this.productList[page].num--;
        if (this.productList[page].num == 0) {
          this.productList[page].num = 1;
        }
      }
    },
    proPlus(page) {
      this.productList[page].num++;
    }
  }
};
</script>



<style scoped>
.top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 999;
}

.border{
  border:6px solid transparent;
}

.white-zy {
  height: 44px;
  width: 100%;
  background: white;
  /* transition: all 3s; */
  color: #999999;
}

.white-table {
  /* border:5px solid rgb(235, 107, 107); */
  background: white;
  width: 100%;
  text-align: center;
  font-size: 13px;
  height: 48px;
}

.grey-zy {
  height: 50px;
  /* background: rgba(224, 223, 223, 0.6); */
  /* transition: all 3s; */
}

.grey-div {
  width: 95%;
}

.end {
  position: fixed;
  top: 762px;
  width: 100%;
  height: 50px;
  z-index: 999;
  background-color: rgb(253, 174, 27);
}

.mi {
  width: 100%;
  height: 750px;
  background-color: rgb(203, 243, 243);
  overflow: auto;
}

.mi2 {
  width: 90%;
  height: 950px;
  background-color: rgb(131, 243, 243);
  overflow: auto;
}

/* 头部块 */
.top-table-zy {
  height: 95px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  /* border:1px solid #ff9500; */
}

.top-table-zy img {
  width: 20px;
  height: 25px;
}

.top-table-zy div {
  width: 300px;
}

/* .top-table-zy .return-zy img {
  margin-left: 20px;
} */

/* 返回 */
.return-zy {
  /* border:1px solid rgba(100, 100, 100, 0.6);  */
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.4);
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-top: 3px;
}
/* 购物车块 */
.cart-zy {
  /* border:1px solid rgba(100, 100, 100, 0.6);  */
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.4);
  width: 32px;
  height: 32px;
  margin-left: 40px;
  margin-top: 3px;
}

.cart-td {
  /* border:1px solid rgba(100, 100, 100, 0.6);  */
  width: 70px;
}

.transreturn-img {
  margin-top: 3px;
  margin-left: 3px;
}

.cart-img {
  margin-top: 5px;
  margin-left: 4px;
}

.top-table-zy .search-zy img {
  width: 25px;
  margin-left: 10px;
}

.top-table-zy .toptext-zy {
  color: #999999;
  margin-left: 28px;
  margin-top: 20px;
  font-size: 13px;
  text-align: center;
  /* border:1px solid #ff9500; */
  height: 30px;
}

.edit-zy {
  margin-left: 50px;
}

.edit-zy img {
  width: 32px;
}

.shoppingcar-zy img {
  width: 28px;
}

/* .swiper-div-zy {
  height: 690px;
  overflow: auto;
} */
.swiper-img-zy {
  width: 100%;
  height: 361px;
  /* border: 1px solid red; */
  /* background-colorgb(150, 112, 112)70); */
}

/* 轮播图 */
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(100, 100, 100, 0.6);
  color: white;
  border-radius: 8px;
}

.custom-indicator2 {
  position: absolute;
  right: 5px;
  bottom: 35px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(100, 100, 100, 0.6);
  color: white;
  border-radius: 8px;
}

.myswiperdiv-zy {
  /* top: 300px; */
  /* border: 1px solid red; */
  width: 100%;
  height: 320px;
  position: relative;
  /* margin-top: 49px; */
}

.my-swiper-zy {
  width: 100%;
  height: 360px;
}

.img-swiper {
  width: 100%;
  height: 360px;
}

.middle-span-zy {
  color: #051b28;
  width: 95%;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
  display: flex;
  display: -webkit-flex;
}

/* 满88包邮 */
.middle-table-zy {
  width: 100%;
  /* margin-left: 5px; */
  color: #999999;
  font-size: 14px;
}

/* 头像 */
.tmheaddiv-div {
  margin-left: 5px;
  /* margin-top: 20px; */
}

.tmheaddiv-zy {
  width: 100%;
  height: 45px;
  background-color: rgb(252, 226, 226);
  margin-top: 5px;
}

.tmhead-span {
  color: #f10035;
  margin-left: 25px;
  margin-top: -10px;
}

.tmhead-span-div {
  margin-top: -28px;
  margin-left: 25px;
}

.tmheadimg {
  /* border: 1px solid rgb(99, 22, 243); */
  margin-top: 6px;
}

/* 促销 */
.middle-table2-zy tr td {
  border: 3px solid transparent;
}

.td-zy {
  width: 180px;
}

/* 物流 */
.middle-table3-zy tr td {
  border: 3px solid transparent;
}

/* 服务 */
.middle-table4-zy {
  /* border: 1px solid red; */
  width: 100%;
  /* text-align: center; */
  /* margin-left: 3px; */
}

.td2-zy {
  width: 30px;
}

.line-zy {
  width: 100%;
  height: 10px;
  /* border: 1px solid rgb(226, 214, 214); */
  background-color: #eee;
}

.middle-table5-zy {
  width: 100%;
  text-align: center;
  /* border: 3px solid transparent; */
  display: flex;
  display: -webkit-flex;
  /* margin-left: -3px; */
}

.middle-table5-zy tr td {
  border: 3px solid transparent;
}

.one-zy {
  /* width: 230px; */
  flex: 2 1 200px;
  border: 1px solid red;
}

.right-click-zy {
  width: 30px;
  flex: 1 0 30px;
  /* border: 1px solid green; */
  margin-top: -26px;
  float: right;
  /* margin-right: 0px; */
}

.right-click1-zy {
  width: 30px;
  flex: 1 0 30px;
  /* border: 1px solid green; */
  margin-top: -50px;
  float: right;
  margin-right: 0px;
}

.right-click2-zy {
  width: 10px;
  /* flex: 1 0 30px; */
  /* border: 1px solid green; */
  /* margin-top: -23px; */
  /* float: right;
  margin-right: 0px; */
}

/* 底部 */
/* 店铺 */
.storetext {
  font-size: 14px;
  color: #999999;
  text-align: center;
}

/* .end-table-zy tr td {
            border: 1px solid #ff9500;
        } */

.end-table-zy {
  /* border: 1px solid #ff9500; */
  width: 100%;
  /* ================================ */
  position: fixed;
  height: 50px;
  /* display: flex; */
  bottom: 0;
  z-index: 999;
  background-color: #fff;
}

.end-table-td1-zy {
  width: 15%;
}

.pro-bottom-img1 {
  width: 20px;
  height: 18px;
  /* margin-left: 17px; */
  margin: 0 auto;
}

/* 收藏 */
.pro-bottom-img2 {
  width: 22px;
  height: 22px;
}

.pro-bottom-div1 {
  margin: 0 auto;
  /* border: 1px solid #156df0; */
  width: 23px;
}

/* 加入购物车 */
.end-table-td3-zy {
  background-color: #ff9500;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
}

/* 中间可滚动部分 */
.middle-body-zy {
  /* border: 1px solid #156df0; */
  /* height: 713px; */
  overflow: auto;
  align-items: stretch;
  /* flex: 1; */
  /* max-width: 100%; */
}

/* 商品评价 */
.pj-table-zy {
  width: 100%;
}

/* .pj-table-zy tr td {
  border: 1px solid #156df0;
  background-color: gray;
} */

.checkallimg-zy {
  width: 10px;
  height: 15px;
  margin-top: 10px;
}

.pj-table-div2-zy {
  text-align: right;
  /* border: 1px solid #ff9500; */
  height: 20px;
  margin-top: 8px;
  color: #f10035;
}

.pj-table-td3-zy {
  width: 10px;
  /* margin: 0 auto; */
  /* border: 1px solid #ff9500; */
}

/* 物流 */
.wl-table-zy {
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* border: 3px solid #ff9500; */
  color: #666666;
  font-size: 13px;
  text-align: center;
  /* height: 23px; */
}

.wl-table-zy td {
  border: 3px solid transparent;
}

.wl-table-div1-zy {
  border: 1px solid #ffeeee;
  border-radius: 10px;
  background: #ffeeee;
  height: 23px;
  width: 76px;
  /* line-height: 1px; */
}

.wl-table-div2-zy {
  /* width: 10px; */
  /* border: 1px solid #ff9500; */
  border: 1px solid #ffeeee;
  border-radius: 10px;
  background: #f5f5f5;
  height: 23px;
  width: 78px;
}

/* .wl-table-div0-zy {
  width: 10px;
  border: 1px solid #ff9500;
} */

.name-zy {
  margin-top: -25px;
  margin-left: 50px;
  font-size: 12px;
  color: #999999;
}

/* .leave-img-zy {
  border:1px solid rgb(247, 141, 141);
  width: 25px;
  height: 25px;
  margin-left: 15px;
} */

.leave-span2-zy {
  color: #051b28;
  width: 100%;
  /* overflow: hidden; */
  margin-top: 5px;
  /* margin-left: 13px; */
  /* display: flex;
  display: -webkit-flex; */
  font-size: 13px;
  line-height: 15px;
}

.leave-date-zy {
  color: #999999;
  width: 100%;
  margin-top: 5px;
  /* margin-left: 13px; */
  display: flex;
  display: -webkit-flex;
  font-size: 12px;
  margin-top: 12px;
}

.long-line-zy {
  width: 95%;
  /* height: 0.5px; */
  background-color: #eee;
  border: 0.5px solid transparent;
  /* margin-left: 8px; */
  margin-top: 12px;
}

.ask-zy {
  border: 1px solid #ff5000;
  background: #ff7b3f;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  color: #fff;
}

/* 宝贝描述 */
.descripte-div-zy {
  /* border: 1px solid red; */
  width: 90%;
  margin-left: 30px;
  /* text-align: center; */
}

.shoptext-zy {
  margin-top: -50px;
  margin-left: 50px;
  /* border:1px solid red; */
}

.shop-imgtext-zy {
  margin-top: 10px;
  margin-left: 10px;
}

.redtopimg-div-zy {
  margin-top: -16px;
  margin-left: 65px;
  /* border:1px solid red; */
}

.enterstore-zy {
  border: 0.5px solid #f10035;
  width: 96px;
  height: 24px;
  text-align: center;
  line-height: 23px;
  border-radius: 12px;
  font-size: 13px;
  color: #f10035;
}

/* ------详情----- */
.xq-div-zy {
  width: 60%;
  margin-left: 30px;
  text-align: center;
  margin: 0 auto;
  margin-top: 7px;
}

/* .xq-div-zy td{
  border:1px solid red; 
} */
/* 线 */
.xq-line-zy {
  width: 60px;
  height: 0.5px;
  border: 0.5px solid #999999;
  background-color: #999999;
  margin: 0 auto;
}

.xq-box-zy {
  border: 1px solid transparent;
  height: 33px;
  background-color: #eee;
}

.double-zy {
  width: 100%;
  height: 48px;
  color: #051b28;
  font-size: 16px;
  text-align: center;
}

.line-beforeimg-zy {
  width: 100%;
  height: 18px;
  background-color: #eee;
}

.myendimg-zy {
  /* margin: 0 auto; */
  width: 100%;
  height: 280px;
}

.myendimg1-zy {
  /* margin: 0 auto; */
  width: 100%;
  height: 290px;
}

.myendimg2-zy {
  /* margin: 0 auto; */
  width: 100%;
  height: 380px;
}

.one-myendimg-zy {
  margin: 0 82px;
  /* margin: 0 auto; */
}

.price-zy {
  color: white;
  /* border: 1px solid #1b0e0f; */
  width: 50px;
  background-color: #fb6878;
  font-size: 12px;
}

.shadow {
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* background-color: grey; */
  top: 0;
  left: 0;
  bottom: 0;
  transition: all 3s;
  z-index: 1000;
}

.shadow2 {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  color: #f10035;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  /* background: rgba(0, 0, 0, 0.5); */
  top: 0;
  left: 0;
  /* bottom: 0; */
  height: 100%;
}

.shadow2-div {
  /* border: 1px solid rgb(237, 237, 243); */
  width: 90%;
  height: 200px;
  text-align: center;
  line-height: 100px;
  margin-top: -200px;
  margin-left: 18px;
  border-radius: 18px;
  background-color: #eee;
}

.spaceShadow {
  width: 100%;
  height: 160px;
  /* border: 1px solid red; */
  /* background-color: #eee; */
  transition: all 3s;
}

.spaceShadow2 {
  width: 100%;
  height: 40px;
  background: #f10035;
  /* border: 1px solid red; */
  /* background-color: #eee; */
}

.shadowimg-zy {
  margin-top: -50px;
  width: 100px;
  height: 100px;
  border: 2px solid white;
  border-radius: 5px;
  margin-left: 10px;
}

.shadowimg2-zy {
  /* margin-top: -20px; */
  width: 35px;
  height: 35px;
  /* border: 2px solid white; */
  border-radius: 5px;
  margin-left: 20px;
  /* margin-top: -20px; */
}

.shadow2-text2 {
  margin-top: 400px;
  line-height: 200px;
}

.cancelBtn-zy {
  float: right;
  margin-right: -230px;
  margin-top: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.close2-zy {
  width: 34px;
  height: 34px;
  margin-top: -15px;
  margin-left: 240px;
}

.whitePart-zy {
  background-color: #fff;
  height: 600px;
}

.sure—zy {
  color: white;
  border: 1px solid #f10035;
  background-color: #f10035;
  height: 50px;
  font-size: 15px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.shadowText-zy {
  font-size: 15px;
  color: #051b28;
  margin-top: 10px;
  float: right;
  margin-right: 180px;
}

.shadowline-zy {
  width: 350px;
  height: 0.2px;
  border: 0.2px solid #dad7d7;
  margin-left: 10px;
  margin-top: 10px;
}

.shadow-p-zy {
  margin-left: 10px;
  margin-top: 10px;
  color: #666666;
  font-size: 13px;
}

.hb-zy {
  border: 1px solid #f10035;
  background: #f10035;
  color: white;
  border-radius: 18px;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.numdiv {
  /* border: 1px solid #f10035; */
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #f5f5f5;
  font-weight: bold;
}

.numTable-zy {
  font-size: 13px;
  margin-left: 10px;
  margin-top: 10px;
  /* border: 1px solid #f10035; */
  width: 90%;
}

.myActive {
  border-bottom: 1px solid #f10035;
  color: #f10035 !important;
}

.trans-zy {
  width: 100%;
  position: absolute;
  z-index: 9999;
  text-align: center;
  border: 1px solid rgb(185, 160, 177);
  top: 0;
}

.transreturn-zy {
  border: 1px solid transparent;
  background: rgba(0, 0, 0, 0.5);
  width: 30px;
  height: 30px;
  border-radius: 18px;
}

.transreturnImg {
  width: 30px;
  height: 20px;
  margin-top: 5px;
}

.qqq {
  width: 300px;
  height: 200px;
}

.spacetrans-zy {
  width: 230px;
}
</style>
