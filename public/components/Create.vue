<template>
    <div id="create">
        <textarea v-model="form" @change="update"></textarea>
        <button @click="create">Create content!</button>
    </div>
</template>

<script>
module.exports = {
    name: 'Create',
    props: {md: ''},
    data: () => ({form: ''}),
    methods: {
        update() {this.$emit('update', this.form)},
        create() {this.$emit('create')},
    },
    created() {this.form = this.md}
}
</script>

<style scoped>
#create {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#create > textarea {
    flex: 1 0;
    width: 100%;
    background: #f0f0f0;
    padding: .3em;
    max-height: 33%;
}
@media (max-width: 60rem) { #create > textarea { max-height: 50% !important }}
@media (max-width: 30rem) { #create > textarea { max-height: 66% !important }}

#create > textarea:focus {
    background: #f8f8f8;
}

#create > button {
    flex: 0 0;
    width: 100%;
    max-width: 20rem;
    margin: 1em 0;
    padding: .5em;
}
</style>