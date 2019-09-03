<template>
    <div class="boutiqueActivity-container">

        <div class="boutiqueActivity-item">
            <img src="./activityandprojectImages/ic_activity_recycler_icon1.png" alt="">
            <div class="state">
                <img src="./activityandprojectImages/ic_activity_now.png" alt="">
            </div>
        </div>

        <div class="boutiqueActivity-item">
            <img src="./activityandprojectImages/ic_activity_recycler_icon1.png" alt="">
            <div class="state">
                <img src="./activityandprojectImages/ic_activity_now.png" alt="">
            </div>
        </div>

        <div class="boutiqueActivity-item">
            <img src="./activityandprojectImages/ic_activity_recycler_icon1.png" alt="">
            <div class="state">
                <img src="./activityandprojectImages/ic_activity_old.png" alt="">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'boutiqueActivity'
}
</script>

<style lang="less">
    .boutiqueActivity-container{
        padding: 12px;
        .boutiqueActivity-item{
            width: 100%;
            position: relative;
            margin-top: 11px;
            img{
                width: 100%;
                display: block;
            }
            .state{
                width: 78px;
                height: 24px;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
       
    
</style>
