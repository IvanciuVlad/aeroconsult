<template>
<!--  <el-container>
    <el-main>

      <el-card shadow="always" :body-style="{ padding: '5px' }">
        <iframe width="560" height="315"
                src="https://www.youtube.com/embed/live_stream?channel=UCTiCBSDISe28Ap1H5hKk5UA&autoplay=1"
                allow="clipboard-write;" allowfullscreen></iframe>
        <div class="bottom-video-card">
          <span>Watch our current livestream?</span>
        </div>
      </el-card>

    </el-main>
  </el-container>-->

  <base-card>
    <iframe width="560" height="315"
            src="https://www.youtube.com/embed/live_stream?channel=UCTiCBSDISe28Ap1H5hKk5UA&autoplay=1"
            allow="clipboard-write;" allowfullscreen></iframe>

    <div class="bottom-video-card">
      <span>Watch our current livestream?</span>
    </div>
  </base-card>

</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
export default {
  components: {BaseCard}
}
</script>

<style scoped>
body > .el-container {
  margin-bottom: 40px;
}

.bottom-video-card {
  margin-top: 13px;
  font-size: 24px;
  line-height: 18px;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>