<template>
  <div>

    <router-link tag="div" to="/firstpage">
      <header1 :title="innaddressTitle" :textDes="textDes"></header1>

    </router-link>

    <div class="addreDiv1">


      <router-link tag="div" to="/toggleAddress2" class="innDiv">
            <div class="par1">
                      <span class="par1sp">
                        <img src="@/pages/homepage/h-36.png" alt="">
                        <h3>武汉市第三医院(光谷院区)</h3>
                      </span>
              <span class="par2sp">湖北省-武汉市-洪山区关山大道120号</span>
            </div>
            <div class="par2">
          <img src="@/pages/homepage/h-37.png" alt="">
        </div>
      </router-link>


      <div class="mapInnerD">
        <el-amap vid="amapDemo" :center="center"  :zoom="zoom" :plugin="plugin" class="amap-demo" style="height:700px;">

        </el-amap>

      </div>


    </div>
  </div>

</template>


<script>
  import header1 from "@/components/common/header1.vue"
  export default {
    name: "inoculationAddress2",
    data()
    {
      let self=this;
      return{
        innaddressTitle:"接种单位",
        textDes:"查找",
        zoom:16,
        center:[121.59996,31.197646],
        plugin:[{
          pName:'Geolocation',
          events:{
            init(o)
            {
              o.getCurrentPosition((status,result)=>{
                if(result&&result.position)
                {
                  self.lng=result.position.lng;
                  self.lat=result.position.lat;
                  self.center=[self.lng,self.lat];
                  self.loaded=true;
                  self.$nextTick();
                }


              })
            }
          }
        }]


      }
    },
    components:{
      header1
    }
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .addreDiv1
  {
    width:100%;
    height:100%;
  }
  .innDiv
  {
    width:94%;
    height:86px;
    border-radius:5px;
    background:#fff;
    margin:8px auto;
    border-radius:5px;
  }
  div.par1
  {
    width:70%;
    height:86px;
    float:left;
    text-align:left;
  }

  div.par2
  {
    width:30%;
    height:86px;
    text-align:left;
    font-size:14px;
    float:left;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .par2 img
  {
    width:22px;
    height:22px;
  }

  .par1sp img
  {
    margin-top:10px;
    display:inline-block;
    vertical-align:middle;
    width:11px;
    height:14px;
  }
  .par1sp h3
  {
    display:inline-block;
    margin-top:10px;
    vertical-align:middle;
  }
  .par1sp
  {
    display:inline-block;
    margin-top:0px;
    margin-left:10px;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .par2sp
  {
    font-size:14px;
    display:inline-block;
    margin-top:10px;
    margin-left:10px;
    color:rgba(0,0,0,0.36);
  }

</style>
