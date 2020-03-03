import {request} from './request.js'

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newprice = itemInfo.price
      this.oldprice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
  }
}

export class GoodsParam{
  constructor(info,rule) {
      //有些images可能没有值,所以做一层判断
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
  }
}
