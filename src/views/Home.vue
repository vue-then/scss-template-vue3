<template>
  <div class="home">
    
    scss-template-vue3
  </div>
</template>

<script>

  import { ref, onMounted} from 'vue'
  import useScreenData from '../hooks/useScreenData'

  export default {
    name: 'Home',
    setup () {
      const loading = ref(true)
      onMounted(()=>{
        setTimeout(()=>{
          loading.value = false
        },500)
      })
      const screenData = useScreenData();
      // console.log("screenData: ",screenData)
      return {
        loading,
        ...screenData,
        options:{
          xAxis: {
            data: ['a','b','c','d']
          },
          yAxis: {
          },
          series:[
            {
              name: 'sales',
              type: 'bar',
              data: [10,15,20,25]
            }
          ]
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .home{
    width: 100%;
    height: 100%;
    font-size: 48px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    

  }
  .loading-text{
    font-size: 20px;
    margin-top: 10px;
    color: #fff;
  }
</style>
