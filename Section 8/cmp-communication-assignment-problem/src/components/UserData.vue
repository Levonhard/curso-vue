<template>
    <form @submit.prevent="submitUserData">
        <div>
            <div>
                <label>Name</label>
                <input type="text" v-model="enteredUserName">
            </div>
            <div>
                <label>Age</label>
                <input type="number" v-model="enteredUserAge">
            </div>
            <button>Add</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            enteredUserName: '',
            enteredUserAge: ''
        }
    },
    methods: {
        submitUserData() {
            this.$emit(
                'add-user',
                this.enteredUserName,
                this.enteredUserAge
            )
        }
    }
}
</script>

<style>
input {
    padding: 5px 0;
}

button {
    background-color: aquamarine;
    padding: 3px 0;
}

form {
    margin: 0 5px;
    padding: 5px;
}

form>div {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 5px;
}

form div>div {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
}

form button {
    width: 100%;
    margin: 5px 0;
}
</style>