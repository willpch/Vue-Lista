<template>
    <v-row justify="center">
        <v-dialog
            v-model="taskStore.showDialogDelete"
            persistent
            width="auto"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Tem certeza que quer deletar?
                </v-card-title>
                <v-card-text>Esta ação não pode ser desfeita.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red-darken-1"
                        variant="elevated"
                        @click="taskStore.toggleDelete"
                    >
                        Não
                    </v-btn>
                    <v-btn
                        color="red-darken-1"
                        variant="outlined"
                        @click="taskStore.deleteTask"
                    >
                        Sim!
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script setup>
    import { useTaskStore } from "@/store/task";

    const taskStore = useTaskStore();
</script>
