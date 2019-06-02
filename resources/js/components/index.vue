<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> user table</div>
                    <div>

                    <!--<v-btn small color="error">Error</v-btn>-->
                    </div>

                    <div class="card-body">
                        <router-link :to="{ name: 'page1' }">page1</router-link>
                        <router-link :to="{ name: 'index'}">Customers</router-link>

                        <!--<router-link :to="{ name: 'page2' }">page2</router-link>-->
                        <!--<br>-->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
