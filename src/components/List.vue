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
                <tbody>
                    <tr v-for="lottery in lotteries" :key="lottery.key">
                        <td>{{ lottery.name }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: lottery.key }}" class="btn btn-primary">更新
                            </router-link>
                            <button @click.prevent="deleteLottery(lottery.key)" class="btn btn-danger">刪除</button>
                        </td>
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
                lotteries: []
            }
        },
        created() {
            db.collection('lotteries').onSnapshot((snapshotChange) => {
                this.lotteries = [];
                snapshotChange.forEach((response) => {
                    this.lotteries.push({
                        key: response.id,
                        name: response.data().name,
                    })
                });
            })
        },
        methods: {
            deleteLottery(id){
              if (window.confirm("確定要刪除?")) {
                db.collection("lotteries").doc(id).delete().then(() => {
                    console.log("刪除成功!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
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