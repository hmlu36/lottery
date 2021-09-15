<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">編輯獎品</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>獎品名稱</label>
          <input type="text" class="form-control" v-model="lottery" required />
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary btn-block"
            @click.prevent="onUpdateForm"
          >
            儲存
          </button>
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
      lottery: '',
    };
  },
  created() {
    db.ref(`lotteries/${this.$route.params.id}`).on('value', (snapshot) => {
      console.log(JSON.stringify(snapshot));
      this.lottery = snapshot.val();
    });
    /*
    let dbRef = db.collection("lotteries").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.lottery = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
      */
  },
  methods: {
    onUpdateForm() {
      console.log('submit');
      let updateEntry = {};
      updateEntry[this.$route.params.id] = this.lottery;

      db.ref('lotteries')
        .update(updateEntry)
        .then(() => {
          alert('更新成功!');
          setTimeout(() => {
            this.$router.push('/list');
          }, 500);
        })
        .catch((error) => {
          console.log(error);
        });
      /*
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
        */
    },
  },
};
</script>
