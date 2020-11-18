<template >
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">新增獎品</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>獎品名稱</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="lottery.name"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">新增</button>
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
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("lotteries")
        .add(this.lottery)
        .then(() => {
          alert("新增成功!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

