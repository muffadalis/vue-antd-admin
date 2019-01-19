<template>
  <a-form @submit="handleSubmit" :autoFormCreate="(form) => this.form = form" class="form">
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="Warehouse Name"
          fieldDecoratorId="repository.name"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please enter the warehouse name', whitespace: true}]}"
        >
          <a-input placeholder="Please enter the warehouse name" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          label="Warehouse Domain Name"
          fieldDecoratorId="repository.domain"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please enter the warehouse domain name', whitespace: true}, {validator: validate}]}"
        >
          <a-input addonBefore="http://" addonAfter=".github.io" placeholder="Please enter"/>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 8, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="Warehouse Administrator"
          fieldDecoratorId="repository.manager"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select an administrator'}]}"
        >
          <a-select placeholder="Please select an administrator">
            <a-select-option value="Wang classmate">Wang classmate</a-select-option>
            <a-select-option value="Li classmate">Li classmate</a-select-option>
            <a-select-option value="Huang Classmate">Huang Classmate</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="Approving person"
          fieldDecoratorId="repository.auditor"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select an approver'}]}"
        >
          <a-select placeholder="Please select an approver">
            <a-select-option value="Wang Xiaoli">Wang Xiaoli</a-select-option>
            <a-select-option value="Li June">Li June</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
          label="Effective Date"
          fieldDecoratorId="repository.effectiveDate"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select an effective date'}]}"
        >
          <a-range-picker style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 8, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
          label="Warehouse Type"
          fieldDecoratorId="repository.type"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select a warehouse type'}]}"
        >
          <a-select placeholder="Please select a warehouse type">
            <a-select-option value="Public">Public</a-select-option>
            <a-select-option value="Private">Private</a-select-option>
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
  name: 'RepositoryForm',
  props: ['showSubmit'],
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    validate (rule, value, f) {
      if (value !== undefined && value !== 'iczer') {
        f('Input\'iczer\'Try it?')
      }
      f()
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
