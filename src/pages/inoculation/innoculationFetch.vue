<template>

</template>

<script>
  import axios from 'axios';
    export default {
        name: "innoculationFetch",
      data()
      {
        return{

        }
      },
      methods:{
        getList()
        {
          this.$axios({
            methods:'post',
            url:"http://ck.hongbao19.net/admin/AuthRule/index",
            data:{limit:10,page:1},
            headers:{
              'token':"2f142cfe07c84c0aaca64ee54b463f65",
            }
          }).then((res)=>{
            console.log(res);
          }).catch((res)=>{
            console.log(res);
          })
        }
      },
      mounted()
      {
        this.getList();
      },
      created()
      {
        this.getList();
      }

    }
</script>

<style scoped>

</style>
