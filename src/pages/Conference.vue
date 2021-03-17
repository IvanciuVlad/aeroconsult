<template>
  <div>
    <the-header></the-header>

    <div class="testimonials section bg-light py-4" id="organizers_section">
      <h4 class="section-title text-center m-5">Urmarește orarul prezentărilor pentru a nu rata nicio companie</h4>

      <div class="container py-5">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe content="embed-responsive-item"
                  src="https://www.youtube.com/embed/live_stream?channel=UCTiCBSDISe28Ap1H5hKk5UA&autoplay=1"
                  allow="clipboard-write;" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";

export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped>
/*body > .el-container {
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
}*/
</style>