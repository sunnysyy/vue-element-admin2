<template>
  <el-row :gutter="40" class="panel-group">
    <div class="panel-title">经营概况</div>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-name">
          客户数
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-name">
          订单代办
        </div>
        <div class="card-panel-description">
          <span class="fl">待发货</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">待售后</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-name">
          订单统计
        </div>
        <div class="card-panel-description">
          <span class="fl">待付款</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">总数</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-name">
          商品数量
        </div>
        <div class="card-panel-description">
          <span class="fl">在售</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">下架</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-name">
          支付金额
        </div>
        <div class="card-panel-description">
          <span class="fl">今日</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">昨天</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-name">
          支付订单数
        </div>
        <div class="card-panel-description">
          <span class="fl">今日</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">昨天</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-name">
          支付人数
        </div>
        <div class="card-panel-description">
          <span class="fl">今日</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">昨天</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="8" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-name">
          客单价
        </div>
        <div class="card-panel-description">
          <span class="fl">今日</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
          <span class="column-box" />
          <span class="fl">昨天</span>
          <count-to :start-val="0" :end-val="812" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .panel-title {
    margin: 0 0 20px 20px;
  }

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    padding: 24px;
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      background: #f4516c;
      .card-panel-name, .card-panel-description {
        color: #fff;
      }
    }

    .card-panel-name {
      line-height: 18px;
      font-size: 16px;
      margin-bottom: 12px;
      text-align: center;
    }

    .card-panel-description {
      display: flex;
      justify-content: center;
      height: 24px;
      line-height: 24px;
      margin-top: 8px;
      font-size: 14px;

      .column-box {
        width: 2px;
        height: 24px;
        margin: 0 24px;
        background: #e6e6e6;
      }

      .card-panel-num {
        margin-left: 8px;
        float: right;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
