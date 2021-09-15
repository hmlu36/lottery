<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">新增獎品</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>獎品名稱</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="lottery"
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
import { db } from '../firebaseDb';

export default {
  data() {
    return {
      lottery: ""
    };
  },
  methods: {
    onFormSubmit() {
      db.ref(`/lotteries`)
        .push(this.lottery)
        .then(() => {
          alert('建立成功');
          this.lottery = "";
        })
        .catch(() => {
          alert('伺服器發生錯誤，請稍後再試');
        });
      /*
      db.collection("lotteries")
        .add(this.lottery)
        .then(() => {
          alert("新增成功!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
        */
    },
    _uuid() {
      let d = Date.now();
      if (
        typeof performance !== 'undefined' &&
        typeof performance.now === 'function'
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      });
    },
  },
};
</script>
