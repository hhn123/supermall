import { ADDCOUNT , ADDCART } from './mutation-types'
export default  {
  addCart(context,payload ){
    // payload添加的新商品
    // 遍历数据的多种写法
    // 第一种写法
    // let oldProduct=null;
    // for (let item of state.cartList){
    //    if(item.iid==payload.iid){
    //      oldProduct=item;
    //      // console.log(state.cartList);
    //    }
    // }
    // 判断oldProduct 数据属性
    // if(oldProduct){
    //   oldProduct.count += 1;
    // }else {
    //   payload.count=1;
    //   state.cartList.push(payload)
    // }
    // 第二种写法
    // let index = state.cartList.indexOf(payload);
    // if( index === -1 ){ //如果要检索的字符串值没有出现 则返回-1
    //   let oldProduct= state.cartList[index];
    //   oldProduct.count+=1;
    // }else {
    //   payload.count=1;
    //   state.cartList.push(payload);
    // }
    // 第三种写法
    //查找 之前数组中是否有该商品
    //参数 item 参数就是 state.cartList 自己本身
    return new Promise((resolve,reject) =>{
      let oldProduct = context.state.cartList.find((item)=>{
        return item.iid === payload.iid
      })

      if(oldProduct){
        context.commit(ADDCOUNT,oldProduct);
        resolve('数量添加成功');
      }else {
        payload.count = 1;
        context.commit(ADDCART,payload);
        resolve('添加购物车成功');
      }
    })

  }
}
