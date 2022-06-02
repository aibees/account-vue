<script setup>
    import { useRouter } from 'vue-router'
    defineProps({
        msg: String,
        referrer: String
    })

    const router = useRouter();
    const to_the_back = function() {
        alert(referrer);
        useRouter().push(referrer);
    }

</script>

<template>
    <div id="header">
        <div class="header_div">
            <h4>{{ msg }}</h4>
        </div>
        <div class="header_div" >
            <a :href="`${referrer}`">뒤로</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #header {
        top:0px;
        display: flex;
        width: 100%;
        height: 40px;
        background-color: #f3f3f3;
        justify-content: space-between;

        .header_div {
            margin-left: 20px;
            margin-right: 20px;
            display: flex;
            align-items: center;

            a {
                cursor: pointer;
                text-decoration: none;
                color: black;
            }
        }
    }
</style>