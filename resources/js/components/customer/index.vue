<template>

    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">phone</th>
                <th scope="col">name</th>
                <th scope="col">balance</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="(user,index) in users">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.phone }}</td>
            </tr>
            </tbody>

        </table>
        <!--<input type="text" v-model="newuser.name" placeholder="name">-->
        <!--<input type="text" v-model="newuser.age" placeholder="age">-->
        <!--<input type="text" v-model="newuser.phone" placeholder="phone">-->
        <!--<button type="button" class="btn btn-success" @click="add">insert</button>-->
        <!--<br>-->
        <!--<div v-show="active">-->
            <!--<input class="name" type="text" v-model="record.name">-->
            <!--<input class="age" type="text" v-model="record.age">-->
            <!--<input class="phone" type="text" v-model="record.phone">-->
            <!--<button type="button" @click="doEdit(record)" class="btn btn-success">edit</button>-->


        <!--</div>-->

    </div>

</template>

<script>
    export default {
        name: "index",
        data() {
            let Sampleusers= [{
                id: 1,
                name: 'mozh',
                age: '20',
                phone: '12'
            },
                {
                    id: 2,
                    name: 'ali',
                    age: '23',
                    phone: '123'
                },
                {
                    id: 3,
                    name: 'saa',
                    age: '21',
                    phone: '124'
                }];
            return {
                active: false,
                newuser: {id: Sampleusers, name: '', age: '', phone: ''},
                users :Sampleusers,
            }
        },
    }
</script>
