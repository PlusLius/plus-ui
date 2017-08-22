<template>
    <div>
        <Hello v-model="value"></Hello>
        <!-- <input type="checkbox" v-model="fullName"> -->
    </div>
</template>
<script>
import Hello from "./Hello"
export default {
  components:{
      Hello
  },
  data(){
      return{
          value:true
      }
  },
//   computed:{
//       fullName:{
//           get:function(){
//             return this.value
//           },
//           set:function(nowValue){
//               console.log(nowValue)
//           }
//       }
//   }
}
</script>

<style>

</style>
