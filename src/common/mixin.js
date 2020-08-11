import {BACKTOP_DISTANCE} from 'common/const'
import BackTop from 'components/common/backTop/BackTop'

export const BackTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    clickBack(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    fromBackTop(position){
      this.isShowBackTop= - (position.y)  > BACKTOP_DISTANCE
    }
  }
}
