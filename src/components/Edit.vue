<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">編輯獎品</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="lottery.name"
            required
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      lottery: {},
    };
  },
  created() {
    let dbRef = db.collection("lotteries").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.lottery = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("lotteries")
        .doc(this.$route.params.id)
        .update(this.lottery)
        .then(() => {
          console.log("更新成功!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>