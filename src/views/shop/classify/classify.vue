<template>
  <div class="classify">
    <div class="hea">
      <NavTop4 :title="classify.title" icon6="/shop" />
    </div>
    <div class="first">
      <!-- 分类 -->
      <div class="class1" @click="istrue=!istrue;istrue2=false;istrue3=false">
        <span v-if="!istrue">
          {{classify.title}}
          <i class="fa fa-caret-down"></i>
        </span>
        <span v-else class="ls">
          分类
          <i class="fa fa-caret-up"></i>
        </span>
      </div>

      <!-- 排序 -->
      <div class="rank" @click="istrue2=!istrue2;istrue=false;istrue3=false">
        <span v-if="!istrue2">
          排序
          <i class="fa fa-caret-down"></i>
        </span>
        <span v-else class="ls">
          排序
          <i class="fa fa-caret-up"></i>
        </span>
      </div>
      <!-- 筛选 -->
      <div class="screen" @click="istrue3=!istrue3 ;istrue2=false;istrue=false">
        <span v-if="!istrue3">
          筛选
          <i class="fa fa-caret-down"></i>
        </span>
        <span v-else class="ls">
          筛选
          <i class="fa fa-caret-up"></i>
        </span>
      </div>
    </div>
    <div class="bj2" v-if="istrue3||istrue2||istrue">
      <div class="classify-list" v-if="istrue">
        <div class="classify-name">
          <ul>
            <li
              :style="{background:alist.iscol?'white':'#f5f5f5'}"
              v-for="(alist, index) in shopAllList"
              :key="index"
              @click="show(alist)"
            >
              <span class="img-t">
                <img :src="(`${alist.image_url}`)" alt />
                {{alist.name}}
              </span>
              <span class="y">
                <span class="hs">{{alist.count}}</span>
                <i>></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="classify-classify">
          <ul v-if="istrue">
            <li
              v-for="(alist2, index) in classify2"
              :key="index"
              class="class2"
              @click="getshop(alist2)"
            >
              <span class="left">{{alist2.name}}</span>

              <span class="right">{{alist2.count}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="sort" v-show="istrue2">
        <ul class="sort-ul">
          <li @click="getsort('sort1');getsortshop(4)">
            <span>
              <svg viewBox="0 0 33 32" id="default">
                <path
                  fill="#3b87c8"
                  d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"
                />
              </svg>
            </span>
            <span :style="{color:sort.sort1?'#3190e8':''}">智能排序</span>
            <span>
              <i v-if="sort.sort1" class="fa fa-check fa-3x"></i>
            </span>
          </li>
          <li @click="getsort('sort2');getsortshop(5)">
            <span>
              <svg viewBox="0 0 32 32" id="distance">
                <path
                  fill="#2a9bd3"
                  d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"
                />
                <path
                  fill="#2a9bd3"
                  d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"
                />
              </svg>
            </span>
            <span :style="{color:sort.sort2?'#3190e8':''}">距离最近</span>
            <span>
              <i v-if="sort.sort2" class="fa fa-check fa-3x"></i>
            </span>
          </li>
          <li @click="getsort('sort3');getsortshop(6)">
            <span>
              <svg viewBox="0 0 23 32" id="hot">
                <path
                  fill="#f07373"
                  d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"
                />
              </svg>
            </span>
            <span :style="{color:sort.sort3?'#3190e8':''}">销量最高</span>
            <span>
              <i v-if="sort.sort3" class="fa fa-check fa-3x"></i>
            </span>
          </li>
          <li @click="getsort('sort4');getsortshop(1)">
            <span>
              <svg viewBox="0 0 32 32" id="price">
                <path
                  fill="#e6b61a"
                  d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
                />
                <path
                  fill="#e6b61a"
                  d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"
                />
              </svg>
            </span>
            <span :style="{color:sort.sort4?'#3190e8':''}">起送价最低</span>
            <span>
              <i v-if="sort.sort4" class="fa fa-check fa-3x"></i>
            </span>
          </li>
          <li @click="getsort('sort5');getsortshop(2)">
            <span>
              <svg viewBox="0 0 32 32" id="speed">
                <path
                  fill="#37c7b7"
                  d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
                />
                <path
                  fill="#37c7b7"
                  d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"
                />
              </svg>
            </span>
            <span :style="{color:sort.sort5?'#3190e8':''}">配送速度最快</span>
            <span>
              <i v-if="sort.sort5" class="fa fa-check fa-3x"></i>
            </span>
          </li>
          <li @click="getsort('sort6');getsortshop(3)">
            <span>
              <svg viewBox="0 0 33 32" id="rating">
                <path
                  fill="#eba53b"
                  d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"
                />
              </svg>
            </span>
            <span :style="{color:sort.sort6?'#3190e8':''}">平分最高</span>
            <span>
              <i v-if="sort.sort6" class="fa fa-check fa-3x"></i>
            </span>
          </li>
        </ul>
      </div>

      <div class="screen-list" v-if="istrue3">
        <ul>
          <li class="screen-li">
            <p>配送方式</p>
          </li>

          <li class="screen-li" @click="sx1=!sx1;getnum()">
            <span class="span11">
              <svg v-if="!sx1" viewBox="0 0 32 32" id="fengniao">
                <path
                  fill="#27a9e1"
                  d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"
                />
                <path
                  fill="#b8e5fa"
                  d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"
                />
                <path
                  fill="#0089cf"
                  d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"
                />
                <path
                  fill="#0089cf"
                  d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"
                />
                <path
                  fill="#0089cf"
                  d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"
                />
              </svg>
              <i v-else class="fa fa-check"></i>
              <span :style="{color:sx1?'#3190e8':'#666'}">蜂鸟专送</span>
            </span>
          </li>
          <li class="screen-li">
            <p>商家属性(可以多选)</p>
          </li>
          <li class="screen-li2">
            <dt @click="sx2=!sx2;getnum()">
              <span>
                <span v-if="!sx2" class="filter_icon" style="color: rgb(63, 189, 230)">品</span>
                <i v-else class="fa fa-check"></i>
              </span>
              <span :style="{color:sx2?'#3190e8':'#666'}">品牌商家</span>
            </dt>
            <dt @click="sx3=!sx3;getnum()">
              <span>
                <span
                  v-if="!sx3"
                  class="filter_icon"
                  style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);"
                >保</span>
                <i v-else class="fa fa-check"></i>
              </span>
              <span :style="{color:sx3?'#3190e8':'#666'}">外卖保</span>
            </dt>
            <dt @click="sx4=!sx4;getnum()">
              <span>
                <span
                  v-if="!sx4"
                  data-v-6cc1fce6
                  class="filter_icon"
                  style="color: rgb(87, 169, 255); border-color: rgb(87, 169, 255);"
                >准</span>
                <i v-else class="fa fa-check"></i>
              </span>
              <span :style="{color:sx4?'#3190e8':'#666'}">准时达</span>
            </dt>
            <dt @click="sx5=!sx5;getnum()">
              <span>
                <span
                  v-if="!sx5"
                  data-v-6cc1fce6
                  class="filter_icon"
                  style="color: rgb(232, 132, 45); border-color: rgb(232, 132, 45);"
                >新</span>
                <i v-else class="fa fa-check"></i>
              </span>
              <span :style="{color:sx5?'#3190e8':'#666'}">新店</span>
            </dt>
            <dt @click="sx6=!sx6;getnum()">
              <span>
                <span
                  v-if="!sx6"
                  data-v-6cc1fce6
                  class="filter_icon"
                  style="color: rgb(255, 78, 0); border-color: rgb(255, 78, 0);"
                >付</span>
                <i v-else class="fa fa-check"></i>
              </span>
              <span :style="{color:sx6?'#3190e8':'#666'}">在线支付</span>
            </dt>
            <dt @click="sx7=!sx7;getnum()">
              <span>
                <span
                  v-if="!sx7"
                  data-v-6cc1fce6
                  class="filter_icon"
                  style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);"
                >票</span>
                <i v-else class="fa fa-check"></i>
              </span>
              <span :style="{color:sx7?'#3190e8':'#666'}">开发票</span>
            </dt>
          </li>
          <li class="end">
            <button class="qk" @click="qknum()">清空</button>
            <button class="qr" @click="getqr()">
              确认
              <span v-if="num!=0">({{num}})</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="list" v-if="!false">
      <ul class="shopStoreList">
        <li v-for="(store,index) in shopStoreList" :key="index" @click="save(store)">
          <div class="storeIntroduce">
            <img :src="(`//elm.cangdu.org/img//${store.image_path}`)" alt />
            <p class="p1">
              <span class="tip">品牌</span>
              <span class="storeName">{{store.name}}</span>
              <span class="ticket">保准票</span>
            </p>

            <p class="p2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span class="mark">{{store.rating}}</span>
              <span class="amount">月售{{store.recent_order_num}}单</span>
              <span class="fengniao">{{store.delivery_mode.text}}</span>
              <span class="arrive">{{store.supports[1].name}}</span>
            </p>
            <span class="span1" :style="(`width:${(store.rating)/5*.97}rem`)">
              <p class="p2 p5">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </p>
            </span>

            <p>
              <span
                class="price"
              >￥{{store.float_minimum_order_amount}}起送/{{store.piecewise_agent_fee.tips}}</span>
              <span class="discount">{{store.distance}}/</span>
              <span class="time">{{store.order_lead_time}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "classify",
  data() {
    return {
      classify: {},
      classify2: {},
      lastalist: {},
      istrue: false,
      istrue2: false,
      istrue3: false,

      sort: {
        sort1: false,
        sort2: false,
        sort3: false,
        sort4: false,
        sort5: false,
        sort6: false
      },
      address: {},
      shopStoreList: {},
      shopAllList: {},
      sx1: false,
      sx2: false,
      sx3: false,
      sx4: false,
      sx5: false,
      sx6: false,
      sx7: false,
      num: 0
    };
  },
  components: {
    NavTop4
  },

  created() {
    this.getClassify();
    this.getShopStoreList();
    this.getShopAllList();
  },
  methods: {
    getClassify() {
      this.classify = JSON.parse(localStorage.getItem("classify"));
      this.address = JSON.parse(localStorage.getItem("address2"));
      console.log(this.address, this.classify);
    },
    //获取商店类表信息
    getShopStoreList() {
      this.$axios
        .get(
          `/shopping/restaurants?latitude=${this.address.latitude}&longitude=${this.address.longitude}`
        )
        .then(res => {
          console.log(res);
          this.shopStoreList = res.data;
        });
    },
    getShopAllList() {
      this.$axios.get(`/shopping/v2/restaurant/category`).then(res => {
        console.log(res.data);

        this.shopAllList = res.data;
        for (var i = 0; i < this.shopAllList.length; i++) {
          const a = this.shopAllList[i].image_url.split("");
          if (i != 7) {
            a.splice(1, 0, "/");
            a.splice(4, 0, "/");
            if (a.length == 37) {
              a.push(".png");
            } else {
              a.push(".jpeg");
            }
          }

          a.splice(0, 0, "https://fuss10.elemecdn.com/");
          this.shopAllList[i].image_url = a.join("");
          // console.log(this.shopAllList[i].image_url);
        }
      });
    },

    show(alist) {
      this.lastalist.iscol = false;
      this.lastalist = alist;

      this.classify2 = alist.sub_categories;
      alist.iscol = true;
    },
    getsort(num) {
      this.istrue = false;
      this.sort = {
        sort1: false,
        sort2: false,
        sort3: false,
        sort4: false,
        sort5: false,
        sort6: false
      };
      for (const key in this.sort) {
        if (num == key) {
          this.sort[key] = true;
        }
      }
      this.istrue2 = false;
    },
    getnum() {
      this.num = 0;
      if (this.sx1 == true) {
        this.num++;
      }
      if (this.sx2 == true) {
        this.num++;
      }
      if (this.sx3 == true) {
        this.num++;
      }
      if (this.sx4 == true) {
        this.num++;
      }
      if (this.sx5 == true) {
        this.num++;
      }
      if (this.sx6 == true) {
        this.num++;
      }
      if (this.sx7 == true) {
        this.num++;
      }
    },
    qknum() {
      this.sx1 = false;
      this.sx2 = false;
      this.sx3 = false;
      this.sx4 = false;
      this.sx5 = false;
      this.sx6 = false;
      this.sx7 = false;
      this.num = 0;
    },
    getshop(alist2) {
      console.log(alist2);
      this.$axios
        .get(
          `/shopping/restaurants?latitude=${this.address.latitude}&longitude=${this.address.longitude}&restaurant_category_id=${alist2.id}&limit=${alist2.count}`
        )
        .then(res => {
          this.istrue = false;
          this.shopStoreList = res.data;

          console.log(this.shopStoreList);
        });
    },
    getsortshop(num) {
      console.log(num);

      this.$axios
        .get(
          `/shopping/restaurants?latitude=${this.address.latitude}&longitude=${this.address.longitude}&order_by=${num}`
        )
        .then(res => {
          this.istrue2 = false;
          this.shopStoreList = res.data;

          console.log(this.shopStoreList);
        });
    },
    getqr() {
      this.istrue3 = false;
      var num = 0;
      const arr1 = [];
      const arr2 = [];
      if (this.sx6 == true) {
        arr2.push();
        num = 0;
        this.shopStoreList = {};
        return;
      } else if (this.sx5 == true) {
        arr2.push();
        num = 3;
      } else if (this.sx3 == true) {
        arr2.push(7);
        num = 5;
      } else if (this.sx4 == true) {
        arr2.push(9);
        num = 10;
      } else if (this.sx1 == true) {
        arr1.push(1);
        num = 15;
      } else if (this.sx2 == true) {
        arr2.push();
        num = 20;
      } else if (this.sx7 == true) {
        arr2.push(4);
        num = 20;
      }

      console.log(arr1, arr2);
      this.$axios
        .get(
          // `/shopping/restaurants?latitude=${this.address.latitude}&longitude=${this.address.longitude}&delivery_mode=${arr1}&support_ids=${arr2}`
          `/shopping/restaurants?latitude=${this.address.latitude}&longitude=${this.address.longitude}&limit=${num}`
        )
        .then(res => {
          console.log(res);

          this.shopStoreList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    save(store) {
      localStorage.setItem("oneStore", JSON.stringify(store));
      // console.log(localStorage.getItem("oneStore"));
      this.$router.push("/letsShop");
    }
  },

  computed: {}
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.classify {
  width: 100%;
  min-height: 12rem;
  overflow: hidden;
}
.hea {
  top: 0;
  position: fixed;
  width: 100%;
  height: 0.9rem;
  background-color: #3190e8;
  z-index: 4;
}
.bj2 {
  width: 100%;
  min-height: 12rem;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0rem;
  z-index: 2;
}
.first {
  font-size: 0.26rem;
  margin-top: 0.9rem;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e1e1e1;
  z-index: 3;
  position: fixed;
  background-color: white;
  padding-top: 0.1rem;
  /* top: 1rem; */
}
.first div {
  flex: 1;
  text-align: center;

  line-height: 0.3rem;
  margin: 0.2rem;
}
.rank {
  border-right: 1px solid #e1e1e1;
  border-left: 1px solid #e1e1e1;
}
.ls {
  color: #3190e8;
}
.class1 {
  height: 0.3rem;
  /* border: 1px solid red; */
}
.list {
  width: 100%;
  margin-top: 1.8rem;
}

.shopStoreList {
  width: 100%;
}
.shopStoreList li {
  width: 100%;
  height: 2rem;
  /* border: 1px solid red; */
  margin-top: 0.25rem;
  /* padding: 0.32rem; */

  border-bottom: 0.025rem solid #f1f1f1;
}
/* 店家 */
.storeIntroduce {
  position: absolute;
  width: 100%;
  background: #fff;
  padding: 0.1rem;
  /* border: 1px solid red; */
}
.storeIntroduce p {
  margin: 0rem 0 0.1rem 1.6rem;
  font-size: 0.25rem;
  /* border: 1px solid red; */
  /* text-align: center; */
}
.storeIntroduce img {
  width: 1.26rem;
  float: left;
  margin: 0.1rem;
}
.discount {
  color: #666;
}
.p1 {
  width: 78%;
  height: 0.5rem;
}
.span1 {
  width: 1rem;
  height: 0.36rem;
  position: absolute;
  top: 0.68rem;
  width: 1rem;
  margin-left: 0.115rem;
  height: 0.36rem;
  overflow: hidden;
}
.tip {
  position: relative;
  display: inline;
  height: 0.46rem;
  line-height: 0.46rem;
  font-size: 0.23rem;
  background: #ffd930;
  border-radius: 0.05rem;
  margin-right: 0.2rem;
  font-weight: 600;
  text-align: center;
  top: -0.12rem;
}

.p5 {
  display: inline-block;
  position: absolute;
  width: 1rem;
  height: 0.36rem;
  overflow: hidden;
  left: -1.6rem;
}
.p5 .fa-star {
  color: #ff9a0d;
  font-size: 0.2rem;
}
.storeName {
  display: inline-block;
  font-size: 0.27rem;
  font-weight: 600;
  /* margin-top: 0.1rem; */
  color: #333;

  overflow: hidden;
  text-overflow: ellipsis;
  width: 2.5rem;
  line-height: 0.46rem;
  height: 0.46rem;
}
.ticket {
  font-size: 0.2rem;
  color: #999;
  margin-left: 1.5rem;
  height: 0.46rem;
  line-height: 0.46rem;
  position: relative;
  top: -0.12rem;
  line-height: 0.46rem;
}

.fa-star {
  color: #d1d1d1;
  font-size: 0.2rem;
}
.mark {
  font-size: 0.2rem;
  color: #ff9a0d;
  /* border: 1px solid red; */
}
.mark {
  margin: 0 0.2rem;
}
.amount {
  font-size: 0.2rem;
  color: #666;
}
.fengniao {
  font-size: 0.2rem;
  background: #3190e8;
  color: #fff;
  border-radius: 0.05rem;
  padding: 0 0.05rem;
  margin: 0 0.05rem 0 1.3rem;
}
.arrive {
  font-size: 0.2rem;
  color: #3190e8;
  border: 1px solid #3190e8;
  border-radius: 0.05rem;
}
.price {
  color: #666;
}
.discount {
  margin-left: 1.2rem;
}
.time {
  color: #3190e8;
}
.classify-list,
.sort {
  z-index: 5;
  position: fixed;
  width: 100%;
  background-color: white;
  top: 1.73rem;
  display: flex;
  font-size: 0.24rem;
  height: 7.2rem;
  /* overflow: hidden; */
}
.screen-list {
  position: fixed;
  width: 100%;
  height: 5.4rem;
  background-color: white;
  top: 1.73rem;
  display: flex;
  font-size: 0.24rem;
  z-index: 5;
}
.classify-name {
  flex: 1;
  /* background-color: #f5f5f5; */
}
.classify-classify {
  flex: 1;
  height: 7.2rem;
  width: 100%;
  top: -1rem;
  /* border: 1px solid red; */
  /* overflow: hidden; */
  /* margin-top: -0.6rem; */
  z-index: 0;
  background-color: white;
  overflow: auto;
}
.classify-list li {
  list-style: none;
  height: 0.8rem;
  padding: 0 0.2rem;
  line-height: 0.8rem;
  color: #666;
  display: flex;
  align-content: space-around;
}
.classify-list li span {
  flex: 1;
}
.y {
  text-align: right;
}
.y .hs {
  background-color: #ccc;
  border-radius: 0.1rem;
  color: white;
  font-size: 0.22rem;
  margin-right: 0.05rem;
  /* border: 1px solid red; */
  line-height: 0.8rem;
  height: 0.8rem;
  padding: 0 0.04rem;
}
.y i {
  display: inline-block;
  color: #ccc;
  font-weight: 300;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.img-t img {
  width: 0.4rem;
  position: relative;
  top: -0.05rem;
  margin: 0 0.1rem;
}
.class2 {
  color: #666;

  border-bottom: 0.025rem solid #f1f1f1;
}
.class2 span {
  padding: 0 0.2rem;
}
.class2 .right {
  flex: 2;
  text-align: right;
}
.class2 .left {
  flex: 3;
}
/* 排序 */
.sort {
  color: #666;
  font-size: 0.25rem;
}
.sort ul {
  width: 100%;
}
.sort ul li {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #e4e4e4;
  line-height: 1.2rem;
  display: flex;
}
.sort-ul li span {
  flex: 1;
}
.sort-ul li span:nth-child(1) {
  flex: 2;
  text-align: center;
}
.sort-ul li span:nth-child(2) {
  flex: 20;
}
.sort-ul li span:nth-child(3) {
  flex: 3;
}
.sort-ul li span:nth-child(1) svg {
  width: 0.3rem;
  height: 0.3rem;
  line-height: 1.2rem;
  height: 1.2rem;
  /* font-size: 0.2rem; */
}
.sort-ul li span:nth-child(3) i {
  line-height: 1.2rem;
  height: 1.2rem;
  font-size: 0.3rem;
  color: #3190e8;
}
.screen-li {
  display: flex;
}
.screen-li dt {
  width: 2.2rem;
}
.screen-li span {
  float: left;
  width: 2.2rem;
  height: 0.64rem;
  line-height: 0.64rem;
  /* text-align: center; */
  /* border: 1px solid red; */
}
.screen-li p {
  height: 0.7rem;
  line-height: 0.7rem;
  margin-left: 0.2rem;
  /* border: 1px solid red; */
}

.screen-li span {
  margin: 0 0.1rem;
}
.screen-li svg,
.fa-check {
  padding: 0.1rem 0 0.1rem 0.1rem;
  height: 0.64rem;
  line-height: 0.64rem;
}
.span11 {
  display: flex;
  border: 1px solid #e1e1e1;
  border-radius: 0.1rem;
}
.span11 span {
  /* border: 1px solid red; */
  flex: 4;
}
.span11 svg,
.fa-check {
  margin-left: 0.35rem;
  flex: 1;
}
.fa-check {
  font-size: 0.3rem;
  line-height: 0.5rem;
  color: #3190e8;
}
.screen-li2 {
  width: 7.5rem;
}
.screen-li2 dt {
  float: left;
  width: 30%;
  border: 1px solid #eee;
  border-radius: 0.1rem;
  margin: 0.1rem 0.1rem;
  font-weight: 400;
  height: 0.64rem;
  line-height: 0.64rem;
  display: flex;
  position: relative;
}

.screen-li2 dt span:nth-child(1) i {
  margin-right: 0.8rem;
  line-height: 0.3rem;
  padding-right: 0.3rem;
  position: absolute;
  left: 0rem;
}
.screen-li2 dt span:nth-child(1) {
  flex: 1;
  text-align: right;
  padding-right: 0.1rem;
  padding-left: 0.1rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
  width: 0.8rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.1rem;
}
.screen-li2 dt span:nth-child(2) {
  flex: 2;
}
.filter_icon {
  border: 1px solid rgb(63, 189, 230);
  height: 0.5rem;
  width: 0.5rem;
  text-align: center;
  /* line-height: 0.6rem; */
}
.screen-li2 {
  margin-bottom: 0.3rem;
}
.end {
  width: 100%;
  height: 1.14rem;
  /* border: 1px solid red; */
  top: 4rem;
  position: absolute;
  background-color: #f5f5f5;
  display: flex;
  align-content: space-around;
}
.end button {
  flex: 1;
  list-style: none;
  margin: 0.1rem;
  border: none;
  border-radius: 0.1rem;
  font-size: 0.34rem;
}
button:focus {
  outline: none;
}
.qr {
  background-color: #56d176;
  border: 1px solid red;
  color: white;
}
.qk {
  background-color: white;
  color: #333;
}
</style>