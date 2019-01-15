<template>
    <a-card :bordered="false">
      <result :is-success="true" :description="description" :title="title">
        <template slot="action">
          <a-button type="primary">Back to List</a-button>
          <a-button style="margin-left: 8px">View Items</a-button>
          <a-button style="margin-left: 8px" @click="print">Print</a-button>
        </template>
        <div>
          <div style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px;">Project name</div>
          <detail-list size="small" style="max-width: 800px; margin-bottom: 8px">
            <detail-list-item term="Project ID">20180724089</detail-list-item>
            <detail-list-item term="Head">Qu Lili</detail-list-item>
            <detail-list-item term="Effective time">016-12-12 ~ 2017-12-12</detail-list-item>
          </detail-list>
          <a-steps :current="1" progressDot>
            <a-step title="Create a project">
              <a-step-item-group slot="description">
                <a-step-item title="Qu Lili" icon="dingding-o"/>
                <a-step-item title="2016-12-12 12:32"/>
              </a-step-item-group>
            </a-step>
            <a-step title="Department first Instance">
              <a-step-item-group slot="description">
                <a-step-item title="Zhou Maomau" icon="dingding-o" :iconStyle="{color: '#00A0E9'}"/>
                <a-step-item title="Hurry up." :titleStyle="{color: '#00A0E9'}"/>
              </a-step-item-group>
            </a-step>
            <a-step title="Financial Review"></a-step>
            <a-step title="Complete" ></a-step>
          </a-steps>
        </div>
      </result>
    </a-card>
</template>

<script>
import Result from '../../components/result/Result'
import DetailList from '../../components/tool/DetailList'
import AStepItem from '../../components/tool/AStepItem'

const AStepItemGroup = AStepItem.Group
const DetailListItem = DetailList.Item
export default {
  name: 'Success',
  components: {AStepItemGroup, AStepItem, DetailListItem, DetailList, Result},
  data () {
    return {
      title: 'Submit successfully',
      description: 'The submit results page is used to feed back the processing results of a series of operational tasks,\n' +
      ' If its just a simple operation, use the Message global prompt feedback.\n' +
      ' This text area can show simple additional instructions if there is a similar display\n' +
      ' The "document" requirement, the following gray area can render more complex content.'
    }
  },
  methods: {
    print () {
      window.print()
    }
  }
}
</script>

<style scoped>

</style>
