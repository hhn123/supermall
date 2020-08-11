import { ADDCOUNT , ADDCART } from './mutation-types'
export default  {
  [ADDCOUNT](state,payload){
    payload.count ++;
  },
  [ADDCART](state , payload){
    payload.isChecked=false; //添加点击选中未选中的判断参数
    state.cartList.push(payload);
    console.log(state.cartList);
  }
}
