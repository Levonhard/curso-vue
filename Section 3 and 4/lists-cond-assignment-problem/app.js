const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            showList: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask)
        },
        showListToggle() {
            this.showList = !this.showList
        }
    }
})

app.mount('#assignment')