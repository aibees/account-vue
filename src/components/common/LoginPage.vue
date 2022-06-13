<template>
    <div class="login">
        <div class="login_banner">
            <img src="@/assets/login_banner_.png">
            <h2>AIBEES 자산관리시스템</h2>
        </div>
        <div class="login_main">
            <div class="login_main_input">
                <div class="tag">
                    <font-awesome-icon id="icon" icon="at" />
                </div>
                <input id="login_input_email" v-model="input_email" placeholder=" Email ID"/>
            </div>
            
            <div class="login_main_input">
                <div class="tag">
                    <font-awesome-icon id="icon" icon="lock" />
                </div>
                <input id="login_input_password" v-model="input_password" type="password" placeholder=" Password"/>
            </div>

            <div class="login_forgot">
                <a>Forgot Password?</a>
            </div>
            <div class="login_button">
                <button v-on:click="access_login()">  Login  </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const props = defineProps({
        input_email: String,
        input_password: String
    })

    var input_email = ref("")
    var input_password = ref("")

    var access_login = function() {
        alert("LOGIN -> " + input_email.value + " / " + input_password.value);

        router.push('/');

    }
</script>

<style lang="scss" scoped>
    @import "@@/common/login.scss";
</style>