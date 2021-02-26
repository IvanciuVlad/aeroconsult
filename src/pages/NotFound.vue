<template>
  <div class="layout-content">
    <div class="content-section implementation">
      <base-card style="width: 25rem; margin-bottom: 2em">
        <template #title>
          <h2>404-Not Found</h2>
        </template>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
export default {
  components: {BaseCard}
}
</script>