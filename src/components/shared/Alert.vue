<template>
    <div class="alert-notification">
        <v-alert class="animate__animated animate__pulse"
            :type="alertStore.type"
            :title="alertStore.title"
            :text="alertStore.text"
            closable
        >
        </v-alert>
    </div>
</template>

<script setup>
    import { useAlertStore } from "@/store/alert";
    const alertStore = useAlertStore();
</script>

<style scoped>
    .alert-notification{
        position: fixed;
        z-index: 1;
        bottom: 50px;
        width: 100%;
        padding: 0 25% 0 25%;
    }
</style>
