<template>
  <div>
    <a-card class="card" title="Warehouse Management" :bordered="false">
      <repository-form ref="repository" :showSubmit="false" />
    </a-card>
    <a-card class="card" title="Task management" :bordered="false">
      <task-form ref="task" :showSubmit="false" />
    </a-card>
    <a-card title="User management" :bordered="false">
      <table-form />
    </a-card>
    <footer-tool-bar>
      <a-button type="primary" @click="validate" :loading="loading">Submit</a-button>
    </footer-tool-bar>
  </div>
</template>

<script>
import RepositoryForm from './RepositoryForm'
import TaskForm from './TaskForm'
import TableForm from './TableForm'
import FooterToolBar from '../../../components/tool/FooterToolBar'

export default {
  name: 'AdvancedForm',
  components: {FooterToolBar, TableForm, TaskForm, RepositoryForm},
  data () {
    return {
      desc: 'Advanced form found in a large amount of disposable input and submit data.',
      loading: false
    }
  },
  methods: {
    validate () {
      this.$refs.repository.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
      this.$refs.task.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .card{
    margin-bottom: 24px;
  }
</style>
