import { request } from "./request"

export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.price = itemInfo.highPrice
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.desc = itemInfo.desc
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services

    }
}

export class ShopInfo {
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.logo = shopInfo.shopLogo
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods

    }
}

export class GoodsImage {
    constructor(desc, key, detailImage) {
        this.desc = desc
        this.key = key
        this.detailImage = detailImage
    }
}

export class Params {
    constructor(itemParams) {
        this.paramsRule = itemParams.rule.tables[0];
        this.paramsInfo = itemParams.info.set
    }
}