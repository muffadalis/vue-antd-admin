<template>
  <span class="header-search">
    <a-icon type="search" class="search-icon" @click="enterSearchMode"/>
    <a-auto-complete
      ref="input"
      :dataSource="dataSource"
      :class="['search-input', searchMode ? 'enter' : 'leave']"
      placeholder="In-Station search"
      @blur="leaveSearchMode"
    >
    </a-auto-complete>
  </span>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data () {
    return {
      dataSource: ['Option One', 'Option two'],
      searchMode: false
    }
  },
  methods: {
    enterSearchMode () {
      this.searchMode = true
      setTimeout(() => this.$refs.input.focus(), 300)
    },
    leaveSearchMode () {
      this.searchMode = false
    }
  }
}
</script>

<style lang="less">
  .header-search{
    .search-icon{
      font-size: 16px;
      cursor: pointer;
    }
    .search-input{
      border: 0;
      border-bottom: 1px rgba(3, 5, 6, 0.23) solid;
      transition: width 0.3s ease-in-out;
      input{
        border: 0;
        box-shadow: 0 0 0 0;
      }
      &.leave{
        width: 0px;
        input{
          display: none;
        }
      }
      &.enter{
        width: 200px;
        input:focus{
          box-shadow: 0 0 0 0;
        }
      }
    }
  }
</style>
