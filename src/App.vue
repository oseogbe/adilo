<template>
  <div>
    <Header></Header>
    
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
  }

  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }

  main {
    display: flex;
    position: relative;
    top: 90px;
  }

  .btn {
    border-radius: 28px;
    font-size: 14px;
    line-height: 21px;
    margin-left: 12px;
    padding: 8px 20px;

    &.btn-order-by-date,
    &.btn-filter {
      border: 1px solid #E2E5ED;
      color: #637C8E;
    }

    &.btn-blue {
      background: #0DABD8;
      color: #FFFFFF;
    }

    &.btn-red {
      background: #EF5350;
      color: #FFFFFF;
    }
  }
</style>
