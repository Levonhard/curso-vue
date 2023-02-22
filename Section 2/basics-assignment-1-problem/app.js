const app = Vue.createApp({
    data() {
        return {
            name: 'Leonardo Rodrigues',
            age: 29,
            imageURL: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait_square.jpg',
        }
    },
    methods: {
        favoriteNumber() {
            return Math.random()
        }
    }
})

app.mount("#assignment")