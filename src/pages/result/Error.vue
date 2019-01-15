<template>
    <a-card :bordered="false">
      <result style="margin-bottom: 16px; margin-top: 48px" :is-success="false" :title="title" :description="description">
        <template slot="action">
          <a-button type="primary" >Returns the modification</a-button>
        </template>
        <div>
          <div style="fontSize: 16px; color: rgba(0, 0, 0, 0.85); fontWeight: 500; marginBottom: 16px">
            The content you submitted has the following error:
          </div>
          <div style="margin-bottom: 16px">
            <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
            Your account has been frozen
            <a style="margin-left: 16px">Thaw immediately. <a-icon type="right" /></a>
          </div>
          <div>
            <a-icon type="close-circle-o" style="color: #f5222d; margin-right: 8px"/>
            Your account is not yet eligible to apply
            <a style="margin-left: 16px">Upgrade Now <a-icon type="right" /></a>
          </div>
        </div>
      </result>
    </a-card>
</template>

<script>
import Result from '../../components/result/Result'
export default {
  name: 'Error',
  components: {Result},
  data () {
    return {
      title: 'Submit failed',
      description: 'Please check and modify the following information before submitting it again.'
    }
  }
}
</script>

<style scoped>

</style>
