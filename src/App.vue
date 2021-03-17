<template>
  <div class="shards-app-promo-page&#45;&#45;1">

      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>


  </div>
</template>

<script>

export default {

}

</script>

<style lang="scss">

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: #17c671;
  border: 53px none #ffffff;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #14af64;
}

::-webkit-scrollbar-thumb:active {
  background: #1e7e34;
}

::-webkit-scrollbar-track {
  background: #5a6169;
  border: 0 none #ffffff;
  border-radius: 50px;
}

::-webkit-scrollbar-track:hover {
  background: #4e545b;
}

::-webkit-scrollbar-track:active {
  background: #545b62;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

.stripped-row:nth-of-type(even) {
  background-color: #f7f8fb;
}

.text-gold {
  color: #F4D03F;
}

.text-silver {
  color: #BDC3C7;
}

.text-green {
  color: #17c671;
}

.text-bronze {
  color: #E67E22
}

.border-gold {
  border: #F4D03F solid 5px;
}

.border-silver {
  border: #BDC3C7 solid 5px;
}

.border-bronze {
  border: #E67E22 solid 5px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  text-align: center;
}

.overlay > i {
  position: absolute;
  top: 45%;
}

.icon-number {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.grid-name {
  max-width: 200px;
}

.grid-logo {
  max-height: 50px;
  max-width: 200px;
}

.grid-link {
  max-width: 200px;
  word-break: break-all;
}

.landing-logo {
  height: 200px;
  background-repeat: no-repeat;;
  background-position: center;
  background-size: contain;
}

.landing-logo-container:hover .landing-logo {
  transform: scale(1.2);
  transition: all .5s;
}

@media only screen and (max-width: 992px) {
  .landing-logo {
    height: 100px;
    background-repeat: no-repeat;;
    background-position: center;
    background-size: contain;
  }
}

.company-description {
  overflow: auto;
  max-height: 250px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.reason_text {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

.main-section {
  background-color: #fff;
  padding: 35px 25px;
  border-radius: 20px;
  margin: auto;
}

.rating-part-left h1 {
  font-size: 75px;
  margin: 0;
}

.rating-part-left i {
  font-size: 22px;
  padding: 2px;
  color: #FDC91B;
}

.rating-part-left p {
  font-size: 18px;
  color: #504F55;
}

.rating-part-right i, .review-part-right i {
  font-size: 17px;
  padding: 2px 0;
  color: #FDC91B;
}

.progress {
  background: #f1f1f1;
  box-shadow: none;;
  border-radius: 0;
  margin: 8px 0;
}

.progress .progress-bar {
  background: #17c671;
}

.review-section {
  padding: 0 20px;
}

.review-part-right p {
  font-size: 18px;
  color: #919191;
}

.user-img-part {
  width: 15%;
  float: left;
}

.user-img {
  width: 48%;
  float: left;
  text-align: center;
  margin: 1px;
}

.user-text {
  float: left;
}

.user-text h4, .user-text p {
  margin: 0 0 5px 0;
}

.user-text p {
  font-size: 20px;
  font-weight: bold;
}

.fa-star, .fa-star-o, .fa-star-half-o {
  color: #FDC91B;
  font-size: 16px !important;
}

.comment {
  width: 83%;
  float: right;
}

.main-section-contact {
  padding: 15px;
}

.section-contact {
  border-radius: 15px;
  background-color: #fff;
}

.section-contact .fa {
  font-size: 17px;
  margin-right: 5px;
}

.section-contact:hover, .section-contact:hover.section-contact img {
  box-shadow: 1px 2px 24px 0 #000;
  transition: 0.5s;
}

.section-contact h1 {
  margin: 0;
  font-size: 24px;
  color: #17c671;
}

.section-contact p {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 18px;
  letter-spacing: 1px;
}

.section-contact img {
  width: 40%;
  height: auto;
  border-radius: 50%;
  margin: 20px 0 10px 0;
}

.user-detail {
  background-color: #fff;
  border-top: 1px solid #d2d2d2;
  padding: 5px 0;
  border-radius: 0 0 5px 5px;
}

.user-detail h2 {
  font-size: 15px;
  color: #a2a2a2;
  font-weight: 400;
}

.col-xs-15 {
  width: 20%;
  float: left;
}

body {
  background-color: #f1f1f1;
}

.ourTeam-heading {
  height: 200px;
  width: 100%;
  background-size: 100% 100%;
  background: linear-gradient(rgba(0, 0, 0, .10)) no-repeat;
}

.ourTeam-heading h1 {
  color: #fff;
  padding: 70px 0;
  font-weight: 900;
  z-index: 1;
}

.ourTeam-box {
  border-top: 6px solid #5DDDD3;
  background-color: #FFFFFF;
}

.section1 {
  padding: 30px 0 0 0;
}

.section1 img {
  border: 5px solid #5DDDD3;
  padding: 5px;
  border-radius: 50%;
  height: 170px;
  width: 170px;
}

.section2 h1 {
  font-size: 20px;
  color: #C1C1C1;
  margin: 0;
  border-bottom: 2px solid #5DDDD3;
  display: inline-block;
  padding: 10px 0;
}

.section2 p {
  background-color: #5DDDD3;
  display: inline-block;
  font-weight: bold;
  color: #fff;
  padding: 5px 15px;
  border-radius: 3px;
  margin-top: -20px;
}

.section2 span {
  color: #979597;
}

.section2 label {
  background-color: #5DDDD3;
  padding: 8px 10px 8px 10px;
  color: #fff;
  font-weight: normal;
  margin: 30px 0 35px 0;
  border-radius: 2px;
}

.section3 p {
  padding: 10px 15px 0 15px;
  font-size: 12px;
  color: #c3c9c9;
}

.section4 {
  padding: 10px 0 50px 0;
}

.section4 i {
  color: #fff;
  padding: 3px;
  border-radius: 2px;
  font-size: 12px;
  background-color: #5DDDD3;
  cursor: pointer;
}

.section-info {
  border-top: 6px solid #90DFAA;
}

.section-danger {
  border-top: 6px solid #FD8469;
}

.section-info .section1 img {
  border: 5px solid #90DFAA;
  padding: 5px;
}

.section-info .section2 p {
  background-color: #90DFAA;
  color: #fff;
}

.section-danger .section2 p {
  background-color: #FD8469;
  color: #fff;
}

.section-danger .section1 img {
  border: 5px solid #FD8469;
  padding: 5px;
}

.section-info .section4 i {
  background-color: #90DFAA;
}

.section-danger .section4 i {
  background-color: #FD8469;
}

.section-info .section2 h1 {
  border-bottom: 2px solid #90DFAA;
}

.section-danger .section2 h1 {
  border-bottom: 2px solid #FD8469;
}

@media (min-width: 768px) {
  .col-md-15 {
    width: 20%;
    flex: 0 0 20%;
    float: left;
  }
}

@media (min-width: 992px) {
  .col-lg-15 {
    width: 20%;
    flex: 0 0 20%;
    float: left;
  }
}
</style>
