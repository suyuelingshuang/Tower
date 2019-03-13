<template>
    <div>
        <div class="header">
            <router-view></router-view>
        </div>
        <div class="foot">
            <div class="foot-list">
                <router-link to="/home" class="foot-title">我的</router-link>
                <router-link to="/project" class="foot-title">项目</router-link>
                <router-link to="/dynamic" class="foot-title">动态</router-link>
                <router-link to="/notice" class="foot-title">通知</router-link>
                <router-link to="/team" class="foot-title">团队</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>