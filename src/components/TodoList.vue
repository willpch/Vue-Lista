<template>
    <v-text-field
        clearable
        label="Adicionar Item"
        v-model="task.title"
        @keyup.enter="addTask"
    >
    </v-text-field>

    <ListTasks :tasks="tasks"/>
</template>

<script setup>
    import ListTasks from "@/components/ListTasks.vue";

    import {ref} from 'vue';

    const tasks = ref([
        {
            title: "Estudar Vue",
            description: "Estudar Vue com Vuetify."
        },
        {
            title: "Ler a Documentacão",
            description: "Ler a Documentacão do Vuetify."
        }
    ]);

    const task = ref({
        title: "",
        description: ""
    });
    const addTask = () => {
        tasks.value.push({
            title: task.value.title,
            description: task.value.description
        });
        task.value = {
            title: "",
            description: ""
        }
    }
</script>
