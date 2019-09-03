<template>
    <div class="mybabyAdd-container">
        <ul class="list">
            <li class="item" v-for="section in sectionList">
              <mt-cell-swipe
                :right="[
                    {
                        content: '删除',
                        style: { background: '#ff7900', color: '#fff'},
                        handler: () => deleteSection(section.PartId)
                    }
                ]">
                <p class="section">{{section.PartName}}</p>
                <p class="teacher">{{section.TeacherName}}</p>
              </mt-cell-swipe>
            </li>
          </ul>
    </div>
</template>

<script>
export default {
    name:'mybabyAdd',
    data () {
        return {
            sectionList:[
            {"PartId":"1","PartName":"数学","TeacherName":"张三" },
            {"PartId":"2","PartName":"英语","TeacherName":"刘涛" },
            {"PartId":"3", "PartName":"语文","TeacherName":"李四"}
          ]
        }
    },
    methods:{
        deleteSection(index)
        {
          this.sectionList.splice(index,1);
        }
      }
}
</script>