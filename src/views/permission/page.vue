<template>
  <div class="app-container">
    <!-- <switch-roles @change="handleRolesChange" /> -->
    <el-button type="primary" @click="handleAddAdmin">添加管理员</el-button>

    <el-table :data="adminsList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="用户名" width="220">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="手机号码">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录时间">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录Ip">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'PagePermission',
  data() {
    return {
      adminsList: [],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  // components: { SwitchRoles },
  methods: {
    // handleRolesChange() {
    //   this.$router.push({ path: '/permission/index?' + +new Date() })
    // }
    handleAddAdmin() {},
    handleEdit() {},
    handleDelete() {}
  }
}
</script>
