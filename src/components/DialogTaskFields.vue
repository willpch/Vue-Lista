<template>
    <v-row justify="center">
        <v-dialog
            v-model="props.dialog"
            persistent
            min-width="400"
            max-width="600"
        >
<!--            <template v-slot:activator="{ props }">-->
<!--                <v-btn-->
<!--                    color="primary"-->
<!--                    v-bind="props"-->
<!--                >-->
<!--                    Open Dialog-->
<!--                </v-btn>-->
<!--            </template>-->
            <v-card>
                <v-card-title class="text-h5">
                    Editar item
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="props.task.title"
                        label="Título"
                    ></v-text-field>
                    <v-text-field
                        v-model="props.task.description"
                        label="Descrição"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green-darken-1"
                        variant="text"
                        @click="$emit('toggle')"
                    >
                        Pronto
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        dialog: Boolean,
        task: Object
    })
</script>
