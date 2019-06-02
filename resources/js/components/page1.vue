<template>

    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">phone</th>
                <th scope="col">setting</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user,index) in users">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.phone }}</td>
                <td>
                    <button type="button" class="btn btn-danger" @click="remv(index)">delete</button>
                    <button type="button" class="btn btn-warning" @click="edit(user)">edit</button>
                </td>
            </tr>
            </tbody>

        </table>
        <input type="text" v-model="newuser.name" placeholder="name">
        <input type="text" v-model="newuser.age" placeholder="age">
        <input type="text" v-model="newuser.phone" placeholder="phone">
        <button type="button" class="btn btn-success" @click="add">insert</button>
        <br>
        <div v-show="active">
                <input class="name" type="text" v-model="record.name">
                <input class="age" type="text" v-model="record.age">
                <input class="phone" type="text" v-model="record.phone">
                <button type="button" @click="doEdit(record)" class="btn btn-success">edit</button>


        </div>
        <v-alert
                :value="true"
                type="success"
        >
            This is a success alert.
        </v-alert>

    </div>

</template>

<script>

    export default {
        name: "Page1",
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
                cache: {},
                record: {},
                active: false,
                newuser: {id: Sampleusers.length+1, name: '', age: '', phone: ''},
                users :Sampleusers,
            }
        },
        methods: {
            add() {
                if (this.newuser.name != '') {
                    this.users.push(this.newuser);
                    let length = this.users.length;
                    this.newuser = {id: ++length, name: '', age: '', phone: ''};
                }
            },
            remv(index) {
                this.users.splice(index, 1);
            },
            doEdit: function (record) {
                var index = _.indexOf(this.users, this.cache);
                this.users.splice(index, 1, record);
            },
            edit: function (record) {
                this.active = true;
                this.record = _.cloneDeep(record);
                this.cache = record;
            }
        }
    }
</script>
