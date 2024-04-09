<template>
  <div class="app-container">
    <!-- <switch-roles @change="handleRolesChange" /> -->
    <el-button type="primary" @click="handleAddAdmin">添加管理员</el-button>

    <el-table :data="adminsList" style="width: 100%;margin-top:30px;" border>
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" label="用户名">
        <template slot-scope="scope">
          {{ scope.row.user }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="手机号码">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录时间">
        <template slot-scope="scope">
          {{ scope.row.loginTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录Ip">
        <template slot-scope="scope">
          {{ scope.row.loginIp }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog width="550px" :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改管理员':'添加管理员'">
      <el-form :model="admin" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="admin.name" placeholder="用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="admin.password" type="password" placeholder="密码" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="admin.phone" placeholder="手机号" />
        </el-form-item>
        <el-form-item label="省份">
          <el-select v-model="admin.province" placeholder="请选择">
            <el-option value="浙江省" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="admin.province" label="城市">
          <el-select v-model="admin.city" placeholder="请选择">
            <el-option value="宁波" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="admin.city" label="区/县">
          <el-select v-model="admin.district" placeholder="请选择">
            <el-option value="鄞州" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="admin.district" label="社区/街道">
          <el-select v-model="admin.community" placeholder="请选择">
            <el-option value="测试" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="admin.community" label="村/社区">
          <el-select v-model="admin.village" placeholder="请选择">
            <el-option value="测试" />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员类型">
          <el-radio-group v-model="admin.type">
            <el-radio :label="0">超级管理员</el-radio>
            <el-radio :label="1">其他管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="角色">
          <el-checkbox-group v-model="admin.checkList">
            <el-checkbox label="角色1" />
            <el-checkbox label="角色2" />
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmAdmin">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'PagePermission',
  data() {
    return {
      admin: {
        name: '',
        province: '',
        password: '',
        phone: '',
        type: 0,
        checkList: []
      },
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
    handleAddAdmin() {
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    confirmAdmin() {},
    handleEdit() {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.checkStrictly = true
    },
    handleDelete({ $index, row }) {
      this.$confirm('删除无法恢复，是否继续？', '提示', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          this.$message({
            type: 'success',
            message: 'Delete succed!'
          })
        })
        .catch(err => { console.error(err) })
    }
  }
}
</script>
