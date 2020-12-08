<template>
	<div id="app" class="defalut">
		<router-view v-if="isRouterAlive"/>
	</div>
</template>
<style lang="scss">
  #app {
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  @import '~/assets/scss/init.scss';
  @import '~/assets/scss/border.scss';
</style>
<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

