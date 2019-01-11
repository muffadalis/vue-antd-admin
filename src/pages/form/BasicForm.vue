<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form>
      <a-form-item
        label="Title"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
      >
        <a-input placeholder="Give the target a name." />
      </a-form-item>
      <a-form-item
        label="Starting and ending dates"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
      >
        <a-range-picker style="width: 100%" />
      </a-form-item>
      <a-form-item
        label="Target description"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
      >
        <a-textarea rows="4" placeholder="Please enter your phased work target"/>
      </a-form-item>
      <a-form-item
        label="Metrics"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
      >
        <a-textarea rows="4" placeholder="Please enter a measure"/>
      </a-form-item>
      <a-form-item
        label="Customer"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
        :required="false"
      >
        <a-input placeholder="Please describe the customer you are serving, the internal customer directly @Name/Work number"/>
      </a-form-item>
      <a-form-item
        label="Invitation to review people"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
        :required="false"
      >
        <a-input placeholder="Please directly @Name/work number, can be invited up to 5 人"/>
      </a-form-item>
      <a-form-item
        label="Weight"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
        :required="false"
      >
        <a-input-number :min="0" :max="100"/>
        <span>%</span>
      </a-form-item>
      <a-form-item
        label="Target Disclosure"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 10}"
        :required="false"
        help="Customers, invitees are shared by default"
      >
        <a-radio-group v-model="value">
          <a-radio :value="1">Public</a-radio>
          <a-radio :value="2">Partially public</a-radio>
          <a-radio :value="3">Not public</a-radio>
        </a-radio-group>
        <a-form-item>
          <a-select mode="multiple" v-if="value === 2">
            <a-select-option value="4">Same thing I</a-select-option>
            <a-select-option value="5">Colleague II</a-select-option>
            <a-select-option value="6">Colleagues three</a-select-option>
          </a-select>
        </a-form-item>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 10, offset: 7}">
        <a-button type="primary">Submit</a-button>
        <a-button style="margin-left: 8px">Save</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BasicForm',
  data () {
    return {
      desc: 'Form pages are used to collect or validate information from users, and underlying forms are common in form scenarios where there are fewer data items.',
      value: 1
    }
  }
}
</script>

<style scoped>

</style>
