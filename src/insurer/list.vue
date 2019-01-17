// eslint space-before-function-paren: "off"
<template>
  <div>
    <a-table
      style="margin-bottom: 24px"
      :columns="columns"
      :dataSource="insurersList"
      :pagination="false"
    >
      <span slot="isActive" slot-scope="text, record">
        <a-tag v-if="isActive" color="#87d068">Active</a-tag>
        <a-tag v-if="!isActive" color="#f50">Active</a-tag>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Status',
    dataIndex: 'isActive',
    scopedSlots: { customRender: 'isActive' }
  }
]

const insurersList = [
  { code: 'IAG', name: 'IAG Insurance', isActive: true },
  { code: 'QBE', name: 'QBE Insurance', isActive: false }
]

export default {
  name: 'InsurerList',
  data() {
    return {
      columns,
      insurersList
    }
  }
}
</script>
