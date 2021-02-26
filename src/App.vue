<template>
  <div>
    <the-header></the-header>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: 'App',
  components: {
    TheHeader
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/');
      }
    }
  }
}
</script>

<style lang="scss">
@import "./App.scss";
</style>
