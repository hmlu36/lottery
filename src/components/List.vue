<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>名稱</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="lotteries.length > 0">
          <tr v-for="lottery in lotteries" :key="lottery.key">
            <td>{{ lottery.name }}</td>
            <td class="d-flex justify-content-center">
              <router-link
                :to="{ name: 'edit', params: { id: lottery.key } }"
                class="btn btn-primary"
                >更新
              </router-link>
              <button
                @click.prevent="deleteLottery(lottery.key)"
                class="btn btn-danger"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="2">查無資料</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from '../firebaseDb';

export default {
  data() {
    return {
      lotteries: [],
    };
  },
  created() {
    this.getList();
    /*
    db.collection('lotteries').onSnapshot((snapshotChange) => {
        this.lotteries = [];
        snapshotChange.forEach((response) => {
            this.lotteries.push({
                key: response.id,
                name: response.data().name,
            })
        });
    })
    */
  },
  methods: {
    getList() {
      db.ref('lotteries').once('value', (snapshot) => {
        this.lotteries = [];
        snapshot.forEach((entry) => {
          this.lotteries.push({
            key: entry.key,
            name: entry.val(),
          });
        });
      });
    },
    deleteLottery(id) {
      if (window.confirm('確定要刪除?')) {
        db.ref('lotteries/' + id)
          .remove()
          .then(() => {
            alert('刪除成功!');
            setTimeout(() => {
              this.getList();
            }, 500);
          })
          .catch((error) => {
            console.log(error);
          });
        /*
        db.collection("lotteries").doc(id).delete().then(() => {
            console.log("刪除成功!");
        })
        .catch((error) => {
            console.error(error);
        })
        */
      }
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}

th {
  text-align: center;
  font-size: 20px;
}
</style>
