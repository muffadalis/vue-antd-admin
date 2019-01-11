<template>
  <div>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <head-info title="I'll do it." content="8 Tasks" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="Average task processing time of the week" content="32 minutes" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="Number of tasks completed this week" content="24个"/>
        </a-col>
      </a-row>
    </a-card>
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="Standard List"
    >
      <div slot="extra">
        <a-radio-group>
          <a-radio-button>All</a-radio-button>
          <a-radio-button>In the middle of the</a-radio-button>
          <a-radio-button>Waiting in</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>
      <a-button type="dashed" style="width: 100%" icon="plus">Add to</a-button>
      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
        <a-list-item :key="i" v-for="i in 5">
          <a-list-item-meta
            description="It's an inner thing, They can't reach it, they can't touch it."
          >
            <a-avatar slot="avatar" size="large" shape="square" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>
            <a slot="title">Alipay</a>
          </a-list-item-meta>
          <div slot="actions">
            <a>Edit</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item><a>Edit</a></a-menu-item>
                <a-menu-item><a>Delete</a></a-menu-item>
              </a-menu>
              <a>More<a-icon type="down"/></a>
            </a-dropdown>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Owner</span>
              <p>Shaoxiao</p>
            </div>
            <div class="list-content-item">
              <span>Start time</span>
              <p>2018-07-26 22:44</p>
            </div>
            <div class="list-content-item">
              <a-progress :percent="80" style="width: 180px" />
            </div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '../../components/tool/HeadInfo'
export default {
  name: 'StandardList',
  components: {HeadInfo}
}
</script>

<style lang="less" scoped>
  .ant-avatar-lg{
    width: 48px;
    height: 48px;
    line-height: 48px;
  }
  .list-content-item{
    color: rgba(0,0,0,.45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 40px;
    span{
      line-height: 20px;
    }
    p{
      margin-top: 4px;
      margin-bottom: 0;
      line-height: 22px;
    }
  }
</style>
