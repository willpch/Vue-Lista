<template>
    <v-text-field
        clearable
        label="Adicionar Item"
        :rules="rules"
        v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask"
    >
    </v-text-field>

    <ListTasks />
</template>

<script setup>
    import { onMounted } from "vue";
    import ListTasks from "@/components/ListTasks.vue";
    import { useTaskStore } from "@/store/task";

    const taskStore = useTaskStore();
    const rules =
        [
            value => {
                if (!value || value.length >= 3) return true

                return 'Digite algum item com mais de 3 letras.'
            },
        ];

    onMounted(() => {
        taskStore.getTasks();
    })
</script>
