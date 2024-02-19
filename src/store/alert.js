import { defineStore } from "pinia";

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
        type: "",
        title: "",
        text: ""
    }),
    actions: {
        notifyAlert() {
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000)
        },
        notifyAlertCreated() {
            this.type = "success";
            this.title = "Sucesso!";
            this.text = "Item criado.";
            this.notifyAlert();
        },
        notifyAlertDeleted() {
            this.type = "warning";
            this.title = "Aviso!";
            this.text = "Item deletado.";
            this.notifyAlert();
        },
        notifyAlertUpdated() {
            this.type = "info";
            this.title = "Ok!";
            this.text = "Item Editado.";
            this.notifyAlert();
        }
    }
})
