import {getHomeGoods} from "./request";
// 请求多个数据
export function getDetail(iid){
  return  getHomeGoods({
    url:'/detail',
    params:{
      iid
    }
  })
}
// 热门推荐
export function _getRecommend() {
  return getHomeGoods({
    url: '/recommend'
  })
}
// constructor 属性返回对创建此对象的数组函数的引用。
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPriceL = itemInfo.highNowPrice;
    this.background = itemInfo.discountBgColor;

  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

