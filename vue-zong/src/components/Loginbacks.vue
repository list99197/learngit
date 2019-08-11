<template>
  <div class="two">
    <el-select v-model="college" @change="choseCollege" placeholder="所属学院" class="college-in" style="width: 128%;margin-left: -18.5%" clearable><i slot="prefix" class="fontReg regxueyuan"></i></el-select>
    <el-option v-for="item in ccollege"
               :key="item.id"
               :lable="item.value"
               :value="item.id"
    ></el-option>

    <el-select v-model="dept_name" placeholder="组织名称" class="dept-in" style="width: 128%;margin-left: -17%" clearable><i slot="prefix" class="fontReg regbumen"></i></el-select>
    <el-option v-for="item in deptname1"
               :key="item.id"
               :lable="item.value"
               :value="item.id"
    ></el-option>
    </div>
</template>

<script>
    export default {
        name: "Loginbacks",
      data(){
      return{
        collegeDataJson:'C:\\Users\\lenovo\\vue-zong\\static\\json\\collegeData.json',
          college:'',
        dept_name:'',
        ccollege:'',
        cdeptname:'',
        deptname1:[]
      }
    }  ,
    methods:{
      getCollegeData:function(){
        var that = this
        axios.get("static/json/collegeData.json").then(response=>{
          if (response.status==200) {
            var ress = response.data
            that.ccollege = []
            that.cdeptname = []
            // 数据分类
            for (var item in ress) {
              if (item.match(/0000$/)) {//学院
                that.ccollege.push({id: item, value: ress[item], children: []})
              } else if (item.match(/00$/)) {//组织
                that.cdeptname.push({id: item, value: ress[item], children: []})
              }
            }
            // 分类组织
            for (var index in that.ccollege) {
              for (var index1 in that.cdeptname) {
                if (that.ccollege[index].id.slice(0, 1) === that.cdeptname[index1].id.slice(0, 1)) {
                  that.ccollege[index].children.push(that.cdeptname[index1])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },

      choseCollege:function(e) {
        for (var index2 in this.ccollege) {
          if (e === this.ccollege[index2].id) {
            this.deptname1 = this.ccollege[index2].children
            user.dept_name = this.ccollege[index2].children[0].value
          }
        }
      },
      mounted(){
        this.getCollegeData()
      }
    }
    }
</script>

<style scoped>

</style>
