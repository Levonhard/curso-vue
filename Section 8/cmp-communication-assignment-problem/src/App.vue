<template>
    <section>
        <header>
            <h1>Practice: Props & Custom Events</h1>
        </header>
        <div id="components">
            <user-data @add-user="addUser" />
            <ul>
                <active-user
                    v-for="user in users"
                    :key="user.id"
                    :id="user.id"
                    :user-name="user.name"
                    :user-age="user.age"
                />
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        addUser(name, age) {
            const newUser = {
                id: name + age,
                name: name,
                age: age
            };
            this.users.push(newUser)
        }
    }
}
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
}

#app header {
    text-align: center;
}

#app #components {
    display: flex;
}

#app #components>ul {
    margin: 0;
}

#app input,
#app button {
    border: 1px solid black;
    border-radius: 3px;
}
</style>