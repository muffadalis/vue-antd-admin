<template>
  <a-form @submit="handleSubmit" :autoFormCreate="(form) => this.form = form" class="form">
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="Task Name"
          fieldDecoratorId="task.name"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please enter a task name', whitespace: true}]}"
        >
          <a-input placeholder="Please enter a task name" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          label="Task description"
          fieldDecoratorId="task.description"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please enter a task description', whitespace: true}]}"
        >
          <a-input placeholder="Please enter a task description"/>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 8, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="Executor."
          fieldDecoratorId="task.executor"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select the executor.'}]}"
        >
          <a-select placeholder="Please select the executor.">
            <a-select-option value="Huang Lili">Huang Lili</a-select-option>
            <a-select-option value="Li Dao">Li Dao</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="Responsible person"
          fieldDecoratorId="task.manager"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select the person responsible'}]}"
        >
          <a-select placeholder="Please select the person responsible">
            <a-select-option value="Wang wei">Wang wei</a-select-option>
            <a-select-option value="Yazida">Yazida</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          label="Reminder Time"
          fieldDecoratorId="task.time"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select a reminder time'}]}"
        >
          <a-time-picker style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 8, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="Task type"
          fieldDecoratorId="task.type"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select a task type'}]}"
        >
          <a-select placeholder="Please select a task type">
            <a-select-option value="Timed execution">Timed execution</a-select-option>
            <a-select-option value="Cycle execution">Cycle execution</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit" >Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'TaskForm',
  props: ['showSubmit'],
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .form{
    .form-row{
      margin: 0 -8px
    }
    .ant-col-md-12,
    .ant-col-sm-24,
    .ant-col-lg-6,
    .ant-col-lg-8,
    .ant-col-lg-10,
    .ant-col-xl-8,
    .ant-col-xl-6{
      padding: 0 8px
    }
  }
</style>
