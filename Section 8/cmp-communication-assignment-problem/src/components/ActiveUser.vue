<template>
    <ul class="user-box">
        <li>
            <h2><span>Name:</span> {{ userName }}</h2>
        </li>
        <li>
            <h3><span>Age:</span> {{ userAge }}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        userAge: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
span {
    color: aqua;
}

.user-box {
    list-style-type: none;
    min-width: 300px;
    padding: 5px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
}

li:nth-child(1) {
    border-bottom: 1px dashed black;
}
</style>