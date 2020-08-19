<template>
  <div id="app">
    <!-- 天猫导航栏-->
    <div class="tm-header-lj">
      <div class="header-top-lj">
        <div :class="{'header-threeheng-lj':isThreeheng , 'header-threeheng-lj2':!isThreeheng}">
          <a
            href="https://www.tmall.com/wow/car/act/navtab?pos=5&acm=201803150.1003.2.3323494&scm=1003.2.201803150.OTHER_1523452695069_3323494#mui-nav-category"
          >
            <img src="../images/three-heng.png" alt />
          </a>
        </div>

        <div :class="{'header-tmall-lj':isTmall , 'header-tmall-lj2':!isTmall}">
          <img src="../images/TMALL-lj.png" alt />
        </div>

        <!-- 登录切换 -->
        <div @click="loginBtn">
          <div
            v-if="login==true"
            @click="enterBtn"
            :class="{'header-enter-lj':isEnter , 'header-enter-lj2':!isEnter}"
          >登录</div>
          <div
            v-if="login==false"
            :class="{'header-enter-lj':isEnter , 'header-enter-lj2':!isEnter}"
          >
            <img @click="shadeBtn" src="../images/user-lj.png" alt />
          </div>
        </div>
      </div>

      <div :class="{'tm-search-lj':isSearch , 'tm-search-lj2':!isSearch}">
        <div @click="searchBtn" :class="{'search-input-lj':isInput , 'search-input-lj2':!isInput}">
          <img src="../images/search-lj.png" alt />
          <span>搜索商品、品牌</span>
        </div>
      </div>
    </div>

    <!-- 天猫导航 -->
    <ul class="nav-ul-lj">
      <a
        href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"
      >
        <li class="nav-li-lj">
          <img src="../images/suning-lj.png" alt />
          <span>苏宁易购</span>
        </li>
      </a>

      <a
        href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"
      >
        <li class="nav-li-lj">
          <img src="../images/TMsupermarket-lj.png" alt />
          <span>天猫超市</span>
        </li>
      </a>

      <a href="https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?from=zebra:offline">
        <li class="nav-li-lj">
          <img src="../images/TMintrtnation-lj.png" alt />
          <span>天猫国际</span>
        </li>
      </a>

      <a
        href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4"
      >
        <li class="nav-li-lj">
          <img src="../images/efficinet-lj.png" alt />
          <span>聚划算</span>
        </li>
      </a>

      <li @click="classifyBtn" class="nav-li-lj">
        <img src="../images/classify-lj.png" alt />
        <span>分类</span>
      </li>
    </ul>

    <!-- 天猫轮播图 -->
    <div class="swipe-lj">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../images/swipeOne-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeTwo-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeThree-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeFour-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeFive-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeSix-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeSeven-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeEight-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeNine-lj.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../images/swipeTen-lj.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 天猫限时抢购 -->
    <div class="flashSale-lj">
      <ul class="flashSale-top-lj">
        <li class="flashSale-top-left-lj">
          <div class="top-left-text-lj">
            <span>限时抢购</span>
            <div class="top-left-time-lj">
              <div>00</div>:
              <div>00</div>:
              <div>00</div>
            </div>
          </div>
          <div class="top-left-img-lj">
            <img src="../images/flashSaleOne-lj.png" alt />
            <img src="../images/flashSaleTwo-lj.png" alt />
          </div>
          <div class="top-left-words-lj">
            <span>实惠好货</span>
            <span>限时特价</span>
          </div>
        </li>

        <li class="flashSale-top-right-lj">
          <div class="top-right-left-lj">
            <p>天猫好物</p>
            <img src="../images/flashSaleThree-lj.png" alt />
            <span>好货必买</span>
          </div>
          <div class="top-right-right-lj">
            <p></p>
            <img src="../images/flashSaleFour-lj.png" alt />
            <span>好货必买</span>
          </div>
        </li>
      </ul>

      <ul class="flashSale-bottom-lj">
        <li class="flashSale-bottom-left-lj">
          <div class="bottom-left-left-lj">
            <p>聚划算</p>
            <img src="../images/flashSaleFive-lj.png" alt />
            <span>大牌直降</span>
          </div>
          <div class="bottom-left-right-lj">
            <p></p>
            <img src="../images/flashSaleSix-lj.png" alt />
            <span>降价好货</span>
          </div>
        </li>
        <li class="flashSale-bottom-right-lj">
          <div class="bottom-right-left-lj">
            <p>天猫闪降</p>
            <img src="../images/flashSaleSeven-lj.png" alt />
            <span>已降50元</span>
          </div>
          <div class="bottom-right-right-lj">
            <p></p>
            <img src="../images/flashSaleEight-lj.png" alt />
            <span>已降36元</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 猜老子喜欢 -->
    <p class="guess-i-like-lj">猜你喜欢</p>
    <ul  class="guessLike-lj" >
      <li v-for="(item,index) in productList" @click="productBtn(index)" :key="index" class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img :src="item.images1" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>陌筱熙</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>{{item.text}}</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-posun-lj">破损包退</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>{{item.price}}</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      
      <!-- <li @click="productBtn(index)" class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/pro31-zy.jpg" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>比比赞</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>比比赞网红日式小圆饼干海盐味麦芽零食充饥小吃夜宵休闲食品100g</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">3元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>¥</span>
            <span>4.9</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Two -->
      <!-- <li @click="productBtn(index)" class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/pro31-zy.jpg" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>比比赞</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>比比赞网红日式小圆饼干海盐味麦芽零食充饥小吃夜宵休闲食品100g</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">3元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>¥</span>
            <span>4.9</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li @click="productBtn(index)" class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/pro21-zy.jpg" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>妙洁</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>妙洁一次性保鲜袋食品袋密实袋 抽取式 小号100只装25cm*17cm</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">10元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>¥</span>
            <span>3.5</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Three -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeThreeLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>Lining/李宁</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>李宁男鞋空袭珀之心高帮音速篮球鞋</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>399</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeThreeRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>rjkk</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>rjkk男cargo宽松w九分裤牛仔裤</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">10元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>359</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Four -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeFourLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>Easyrest/易瑞斯</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>办公室家用便携简易出租屋折叠床</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <span class="guessLike-li1-posun-lj">破损包退</span>
          <span class="guessLike-li1-juan-lj">20元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>249</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeFourRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>纳兰杜</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>ck 2020小宽带斜挎包小方包真皮包包</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>189</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Five -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeFiveLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>陌筱熙</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>春秋薄款短款卫衣女圆领2020年新款长袖韩版宽松春季上衣潮ins</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>44</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeFiveRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>AJKJ/安居空间</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>胡桃木沙发新中式贵妃农村全实木沙发组合客厅成套经济型家具套装</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <span class="guessLike-li1-juan-lj">100元券</span>
          <span class="guessLike-li1-posun-lj">送装入户</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>2180</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Six -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeSixLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>麦酷</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>超强淋浴大出水日本高压加压花酒</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-posun-lj">破损包退</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>18</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeSixRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>花清姿</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>法式轻婚纱2020新款气质新娘主纱抹胸拖尾星空女简约森系超仙梦幻</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>501</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Seven -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeSevenLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>亿琪之秀</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>ins宽松重工钉珠露肩黑色短袖t恤</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">5元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>74</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeSevenRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>Lining/李宁</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>李宁男2020 aban027音速低帮篮球鞋</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>268</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Eight -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeEightLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>凌智</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>阶梯架娃娃手办柜架陈列盲盒收纳盒</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">5元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>28</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeEightRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>Romon/罗蒙</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>罗蒙2020夏季修身直筒西裤休闲裤</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">10元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>149</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->

    <!-- Nine -->
      <!-- <li class="guessLike-li1-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeNineLeft-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>瑞泓祥</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>s925纯银蝴蝶结甜美可爱小清新耳钉</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
          <span class="guessLike-li1-juan-lj">3元券</span>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>25.7</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li>
      <li class="guessLike-li2-lj">
        <div class="guessLike-li1-img-lj">
          <img src="../images/guessLikeNineRight-lj.png" alt />
        </div>
        <div class="guessLike-li1-text1-lj">
          <span>蕾彩</span>
        </div>
        <div class="guessLike-li1-text2-lj">
          <span>蕾彩黑色长袖宽松大码连衣裙女中长款春季2020新款钉珠裙子31502</span>
        </div>
        <div class="guessLike-li1-text3-lj">
          <div class="guessLike-li1-tuihuo-lj">
            <img src="../images/tuihuo-lj.png" alt />
          </div>
        </div>
        <div class="guessLike-li1-price-lj">
          <div class="guessLike-li1-price1-lj">
            <span>￥</span>
            <span>388</span>
          </div>
          <div class="guessLike-li1-price2-lj">
            <span>看相似</span>
          </div>
        </div>
      </li> -->
    </ul>

    <!-- 点击回到TMD顶部 -->
    <transition name="fade">
      <div class="to-top-lj" v-show="show" @click="toTopBtn">
        <img
          src="//gw.alicdn.com/tfs/TB1GEyAqDtYBeNjy1XdXXXXyVXa-88-88.png_110x10000.jpg_.webp"
          alt
        />
      </div>
    </transition>

    <!-- 遮罩层 -->
    <div class="shadeShow-lj" v-if="shadeShow">
      <div class="shadeShow-sanjiaodiv-lj">
        <div class="shadeShow-sanjiao-lj"></div>
      </div>
      <div class="shadeShow-top-lj">
        <span>我的天猫</span>
        <img @click="closeShow" src="../images/close-lj.png" alt />
      </div>
      <div class="shadeShow-bottom-lj">
        <ul class="shadeShow-bottom-ul-lj">
          <li>
            <img src="../images/TMkehuduan-lj.png" alt />
            <span>天猫客户</span>
          </li>
          <li class="shadeShow-bottom-ul-li-lj">
            <img src="../images/xinrenyouli-lj.png" alt />
            <span>新人有礼</span>
          </li>
          <li @click="cartBtn" class="shadeShow-bottom-ul-li-lj">
            <img src="../images/shadow-cart-lj.png" alt />
            <span>购物车车</span>
          </li>
        </ul>
        <ul class="shadeShow-bottom-ul-lj">
          <li>
            <img src="../images/shoucangbaobei-lj.png" alt />
            <span>收藏宝贝</span>
          </li>
          <li class="shadeShow-bottom-ul-li-lj">
            <img src="../images/shoucangdianpu-lj.png" alt />
            <span>店铺收藏</span>
          </li>
          <li class="shadeShow-bottom-ul-li-lj">
            <img src="../images/quanbudingdan-lj.png" alt />
            <span>全部订单</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: false,
      isThreeheng: false,
      isEnter: false,
      isTmall: false,
      isSearch: false,
      isInput: false,
      login: true,
      shadeShow: false
    };
  },

  // 滚动条
  created() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  computed:{
    productList(){
      return this.$store.state.productList
    }
  },

  methods: {
    // 路由
    cartBtn() {
      this.$router.push("cartPath");
    },
    productBtn(index) {
      console.log(index)
      this.$router.push({
        path:"productPath",
        query: {
          num:index
        }
        });
    },
   
    classifyBtn() {
      this.$router.push("classifyPath");
    },
    enterBtn() {
      this.$router.push("enterPath");
    },
    searchBtn() {
      this.$router.push("searchPath");
    },

    // 监听滚动条事件
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 18) {
        this.isThreeheng = true;
        this.isEnter = true;
        this.isTmall = true;
        this.isSearch = true;
        this.isInput = true;
      } else {
        this.isThreeheng = false;
        this.isEnter = false;
        this.isTmall = false;
        this.isSearch = false;
        this.isInput = false;
      }

      // 控制回到顶部出现
      scrollTop > 288 ? (this.show = true) : (this.show = false);
    },

    // 点击回到TMD顶部按钮
    toTopBtn() {
      let top = document.documentElement.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 88;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 18);
    },

    // 登录切换
    loginBtn() {
      this.login = false;
    },

    // 遮罩层
    shadeBtn() {
      this.shadeShow = true;
    },
    
    closeShow() {
      this.shadeShow = false;
    }
  }
};
</script>

<style scoped>
/* 天猫导航栏头部 */
.tm-header-lj {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 0, 54);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9;
}

.header-top-lj {
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  transition: all 0.36s;
}

.header-threeheng-lj {
  margin-top: 2px;
  margin-left: 1px;
  transform: translateY(5px);
  transition: all 0.36s;
}

.header-threeheng-lj2 {
  margin-top: 2px;
  margin-left: 1px;
  transform: translateY(0px);
  transition: all 0.36s;
}

.header-tmall-lj {
  transition: all 0.36s;
  transform: scale(0) translateY(-50px);
  height: 0px;
}

.header-tmall-lj2 {
  transition: all 0.36s;
  transform: scale(1);
  height: 25px;
}

.header-tmall-lj img {
  width: 118.5px;
  height: 20.5px;
  margin-top: 2px;
  margin-left: 3px;
}

.header-tmall-lj2 img {
  width: 118.5px;
  height: 20.5px;
  margin-top: 2px;
  margin-left: 3px;
}

.header-enter-lj {
  font-size: 14px;
  margin-top: -1px;
  transition: all 0.36s;
  color: #fff;
  transform: translateY(4px);
}

.header-enter-lj2 {
  font-size: 14px;
  margin-top: -1px;
  transition: all 0.36s;
  color: #fff;
  transform: translateY(0px);
}

.tm-search-lj {
  padding: 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: rgb(255, 0, 54);
  transition: all 0.36s;
  height: 3px;
}

.tm-search-lj2 {
  padding: 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: rgb(255, 0, 54);
  transition: all 0.36s;
  height: 36px;
}

.search-input-lj {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #bbbbbb;
  transition: all 0.36s;
  transform: scaleX(0.8) translateY(-34px);
}

.search-input-lj2 {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #bbbbbb;
  transition: all 0.36s;
  transform: scaleX(1) translateY(0px);
}

.search-input-lj img {
  padding: 10px;
}

.search-input-lj2 img {
  padding: 10px;
}

/* 天猫导航 */
.nav-ul-lj {
  margin-top: 90px;
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
}

.nav-li-lj {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  height: 78px;
}

.nav-li-lj img {
  margin: 5px 11px 2px;
  width: 48px;
  height: 48px;
}

.nav-li-lj span {
  font-size: 13px;
  text-align: center;
  margin-top: 7px;
  color: black;
}

/* 轮播图 */
.swipe-lj {
  height: 132.25px;
  margin: 10px 11px;
}

.my-swipe .van-swipe-item {
  height: 132.25px;
  z-index: 0;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}

/* 天猫限时抢购 */
.flashSale-lj {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

/* top */
.flashSale-top-lj {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

.flashSale-top-left-lj {
  width: 172.5px;
  height: 128.5px;
  background: rgb(248, 248, 248);
  display: flex;
  flex-direction: column;
}

/* left */
.top-left-text-lj {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bolder;
  color: #202020;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 13px;
  align-items: center;
  line-height: 21px;
}

.top-left-time-lj {
  width: 68px;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.top-left-time-lj div {
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 4px;
  color: #fff;
  font-weight: lighter;
  font-size: 14px;
  text-align: center;
}

.top-left-img-lj {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  margin-left: 6px;
  margin-right: 6px;
  align-items: center;
}

.top-left-img-lj img {
  width: 77.5px;
  height: 77.5px;
}

.top-left-words-lj {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 17px;
  margin-right: 17px;
}

.top-left-words-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

/* right */
.flashSale-top-right-lj {
  width: 172.5px;
  height: 128.5px;
  background: rgb(248, 248, 248);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top-right-left-lj {
  display: flex;
  width: 77.5px;
  flex-direction: column;
  align-items: center;
  margin-left: 6px;
}

.top-right-left-lj p {
  font-size: 16px;
  font-weight: bolder;
  color: #202020;
  margin-top: 10px;
}

.top-right-left-lj img {
  width: 77.5px;
  height: 77.5px;
  margin-top: 2px;
}

.top-right-left-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

/*  */
.top-right-right-lj {
  display: flex;
  width: 77.5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.top-right-right-lj p {
  margin-top: 30px;
}

.top-right-right-lj img {
  width: 77.5px;
  height: 77.5px;
  margin-top: 2px;
}

.top-right-right-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

/* bottom */
.flashSale-bottom-lj {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: 6px;
}

.flashSale-bottom-left-lj {
  width: 172.5px;
  height: 128.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(248, 248, 248);
}

.flashSale-bottom-right-lj {
  width: 172.5px;
  height: 128.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(248, 248, 248);
}

/* left */
.bottom-left-left-lj {
  display: flex;
  width: 77.5px;
  flex-direction: column;
  align-items: center;
  margin-left: 6px;
}

.bottom-left-left-lj p {
  font-size: 16px;
  font-weight: bolder;
  color: #202020;
  margin-top: 10px;
}

.bottom-left-left-lj img {
  width: 77.5px;
  height: 77.5px;
  margin-top: 2px;
}

.bottom-left-left-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

.bottom-left-right-lj {
  display: flex;
  width: 77.5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.bottom-left-right-lj p {
  margin-top: 30px;
}

.bottom-left-right-lj img {
  width: 77.5px;
  height: 77.5px;
  margin-top: 2px;
}

.bottom-left-right-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

/* right */
.bottom-right-left-lj {
  display: flex;
  width: 77.5px;
  flex-direction: column;
  align-items: center;
  margin-left: 6px;
}

.bottom-right-left-lj p {
  font-size: 16px;
  font-weight: bolder;
  color: #202020;
  margin-top: 10px;
}

.bottom-right-left-lj img {
  width: 77.5px;
  height: 77.5px;
  margin-top: 2px;
}

.bottom-right-left-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

.bottom-right-right-lj {
  display: flex;
  width: 77.5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.bottom-right-right-lj p {
  margin-top: 30px;
}

.bottom-right-right-lj img {
  width: 77.5px;
  height: 77.5px;
  margin-top: 2px;
}

.bottom-right-right-lj span {
  font-size: 10px;
  width: 52px;
  height: 9px;
  padding: 1px;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #ff0036;
  color: #ff0036;
  line-height: 9px;
  text-align: center;
  margin-top: 2px;
}

/* 猜老子喜欢 */
.guess-i-like-lj {
  font-size: 18px;
  font-weight: bolder;
  line-height: 30px;
  color: #333333;
  height: 30px;
  margin-top: 12px;
  padding: 0 13px;
}

/*  */
.guessLike-lj {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  margin-left: 3px;
}

.guessLike-li1-lj {
  width: 170px;
  height: 265px;
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid rgb(237, 237, 237);
}

.guessLike-li1-img-lj {
  width: 140px;
  height: 138px;
  padding: 15px;
  background: rgb(247, 247, 247);
}

.guessLike-li1-lj img {
  width: 140px;
  height: 138px;
  border-radius: 2px;
}

.guessLike-li2-lj {
  width: 170px;
  height: 265px;
  border: 1px solid rgb(237, 237, 237);
}

.guessLike-li2-lj img {
  width: 100%;
  height: 100%;
}

.guessLike-li1-text1-lj {
  margin: -10px 10px;
}

.guessLike-li1-text1-lj span {
  background: #cda3b1;
  padding: 0 5px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
}

.guessLike-li1-text2-lj {
  width: 148px;
  height: 36px;
  margin: 12px 0 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.guessLike-li1-text2-lj span {
  color: #3e3e3e;
  font-size: 14px;
}

.guessLike-li1-text3-lj {
  height: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px 0 0 10px;
}

.guessLike-li1-tuihuo-lj {
  width: 73px;
  height: 14px;
}

.guessLike-li1-tuihuo-lj img {
  width: 100%;
  height: 100%;
}

.guessLike-li1-posun-lj {
  font-size: 12px;
  border: 1px solid #4a90e2;
  color: #4a90e2;
  width: 48px;
  height: 11px;
  text-align: center;
  line-height: 11px;
  padding-top: 1px;
  margin-left: 3px;
}

.guessLike-li1-price-lj {
  width: 170px;
  height: 30px;
  margin-top: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.guessLike-li1-price1-lj {
  line-height: 30px;
  padding-left: 10px;
  display: flex;
  justify-content: space-around;
}

.guessLike-li1-price1-lj span {
  font-size: 18px;
  color: #ff0000;
  font-weight: bolder;
}

.guessLike-li1-price2-lj {
  width: 36px;
  height: 23px;
  background: #ffe6e8;
  border-radius: 12px;
  padding: 0 9px;
  margin-right: 8px;
  margin-top: -4px;
}

.guessLike-li1-price2-lj span {
  font-size: 12px;
  color: #ff0036;
  line-height: 23px;
  text-align: center;
}

.guessLike-li1-juan-lj {
  font-size: 12px;
  border: 1px solid #ff0036;
  color: #ff0036;
  height: 10px;
  text-align: center;
  line-height: 10px;
  padding: 2px 2px 0 2px;
  margin-left: 3px;
}

/* 点击回到TMD顶部 */
.to-top-lj {
  position: fixed;
  bottom: 40px;
  right: 5px;
  z-index: 99;
}

.to-top-lj img {
  width: 44px;
  height: 44px;
}

.fade-enter-active {
  transform: translate(0px, 0px);
  transition: all 0.5s;
}

.fade-leave-active {
  transform: translate(0px, -44px);
  transition: all 0.5s;
}

.fade-enter {
  transform: translate(0px, 44px);
  opacity: 0;
}

.fade-leave-to {
  transform: translate(0px, 44px);
  opacity: 0;
}

/* 遮罩层 */
.shadeShow-lj {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.58);
  z-index: 999;
}

.shadeShow-sanjiaodiv-lj {
  height: 42px;
  display: flex;
  flex-direction: row-reverse;
}

.shadeShow-sanjiao-lj {
  width: 10px;
  height: 10px;
  background: #e5e5e5;
  transform: rotate(45deg);
  margin-top: 37px;
  margin-right: 18px;
}

.shadeShow-top-lj {
  height: 33px;
  background: #e5e5e5;
  display: flex;
  justify-content: space-between;
  padding-left: 9px;
  padding-right: 15px;
  align-items: center;
}

.shadeShow-top-lj span {
  color: #000;
  font-size: 14px;
  font-weight: bolder;
}

.shadeShow-top-lj img {
  width: 15px;
  height: 15px;
}

.shadeShow-bottom-lj {
  height: 214px;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
}

.shadeShow-bottom-ul-lj {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;
}

.shadeShow-bottom-ul-lj img {
  width: 30px;
  height: 30px;
}

.shadeShow-bottom-ul-lj li {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

.shadeShow-bottom-ul-li-lj {
  flex-grow: 1;
  flex-shrink: 1;
  border-left: 1px solid #e5e5e5;
}
</style>