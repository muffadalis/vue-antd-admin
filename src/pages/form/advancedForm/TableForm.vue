<template>
  <form :autoFormCreate="(form) => this.form = form">
    <a-table
      :columns="columns"
      :dataSource="dataSource"
      :pagination="false"
    >
      <template  v-for="(col, i) in ['name', 'workId', 'department']" :slot="col" slot-scope="text, record, index">
          <a-input
            :key="col"
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            :placeholder="columns[i].title"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{text}}</template>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <template v-if="record.editable">
          <span v-if="record.isNew">
            <a @click="saveRow(record.key)">Add to</a>
            <a-divider type="vertical" />
            <a-popconfirm title="Do you want to delete this row?" @confirm="remove(record.key)">
              <a>Delete</a>
            </a-popconfirm>
          </span>
            <span v-else>
            <a @click="saveRow(record.key)">Save</a>
            <a-divider type="vertical" />
            <a @click="cancle(record.key)">Cancel</a>
          </span>
        </template>
        <span v-else>
          <a @click="toggle(record.key)">Edit</a>
          <a-divider type="vertical" />
          <a-popconfirm title="Do you want to delete this row?" @confirm="remove(record.key)">
            <a>Delete</a>
          </a-popconfirm>
        </span>
      </template>
    </a-table>
    <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMeber">New members</a-button>
  </form>
</template>

<script>
const columns = [
  {
    title: 'Name of member',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Work No.',
    dataIndex: 'workId',
    key: 'workId',
    width: '20%',
    scopedSlots: { customRender: 'workId' }
  },
  {
    title: 'Affiliated Departments',
    dataIndex: 'department',
    key: 'department',
    width: '40%',
    scopedSlots: { customRender: 'department' }
  },
  {
    title: 'Operation',
    key: 'action',
    scopedSlots: { customRender: 'operation' }
  }
]

const dataSource = [
  {
    key: '1',
    name: 'Xiao ming',
    workId: '001',
    editable: false,
    department: 'Administration Dept.'
  },
  {
    key: '2',
    name: 'Lily',
    workId: '002',
    editable: false,
    department: 'It Dept.'
  },
  {
    key: '3',
    name: 'Wang Xiaoshuai',
    workId: '003',
    editable: false,
    department: 'Finance Dept.'
  }
]

export default {
  name: 'TableForm',
  data () {
    return {
      columns,
      dataSource
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
    },
    newMeber () {
      this.dataSource.push({
        key: '99',
        name: '',
        workId: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.dataSource.filter(item => item.key !== key)
      this.dataSource = newData
    },
    saveRow (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = false
      target.isNew = false
    },
    toggle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = !target.editable
    },
    getRowByKey (key, newData) {
      const data = this.dataSource
      return (newData || data).filter(item => item.key === key)[0]
    },
    cancle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = false
    },
    handleChange (value, key, column) {
      const newData = [...this.dataSource]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.dataSource = newData
      }
    }
  }
}
</script>

<style scoped>

</style>
