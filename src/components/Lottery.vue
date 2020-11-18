<template>
  <div>
    <carousel>
      <slide v-for="(lottery, index) in lotteries" v-bind:key="index">
        <div class="card-warp">
          <div class="card">
            <div class="card-front"></div>
            <div class="card-back">
              <span :style="'color:' + pokerStyle[index % 4].color"><strong>{{ lottery.name }}</strong></span>
              <img
                :src="pokerStyle[index % 4].link"
              />
              <span :style="'color:' + pokerStyle[index % 4].color"><strong>{{ lottery.name }}</strong></span>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { db } from "../firebaseDb";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      lotteries: [],
      pokerStyle: [
        {
          color: "red",
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Naipe_copas.png/103px-Naipe_copas.png",
        }, // 愛心
        {
          color: "red",
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Naipe_ouros.png/103px-Naipe_ouros.png",
        }, // 方塊
        {
          color: "black",
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/103px-SuitClubs.svg.png",
        }, // 梅花
        {
          color: "black",
          link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Naipe_espadas.png/103px-Naipe_espadas.png",
        }, // 黑桃
      ],
    };
  },
  created() {
    db.collection("lotteries").onSnapshot((snapshotChange) => {
      this.lotteries = [];
      snapshotChange.forEach((response) => {
        this.lotteries.push({
          key: response.id,
          name: response.data().name,
        });
      });
    });
  },
};
</script>

<style>
.card {
  width: 200px;
  height: 280px;
  /*preserve the back when fliping*/
  transform-style: preserve-3d;
  transition: 0.5s all ease;
  box-shadow: 0px 0px 10px rgba(10, 10, 0.8);
}

.card:hover {
  transform: rotateY(180deg);
}

.card-wrap {
  width: 200px;
  height: 280px;
  position: relative;
}

/*front card*/
.card-front {
  display: block;
  border-radius: 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  /*hide backface*/
  backface-visibility: hidden;
  color: #333;
  font-size: 1.5rem;
  background: url("https://preview.ibb.co/bF05wV/danask.png") center top repeat;
}

/*back card*/
.card-back {
  border-radius: 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  /*hide backface*/
  backface-visibility: hidden;
  color: #333;
  font-size: 1.5rem;
  transform: rotateY(180deg);
}

.card-back span:nth-of-type(1) {
  position: absolute;
  top: 5%;
  left: 5%;
}

.card-back img {
  position: relative;
  left: 25%;
  top: 25%;
  /*   transform:translate(-50%,-50%); */
}

.card-back span:nth-of-type(2) {
  position: absolute;
  right: 5%;
  bottom: 5%;
}
</style>