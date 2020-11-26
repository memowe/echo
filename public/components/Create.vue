<template>
    <div id="create">
        <textarea v-model="form" @change="update"></textarea>
        <div id="buttons">
            <router-link :to="{name: 'Show'}" title="Show">
                <i class="fas fa-external-link-alt"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Create',
    props: {md: ''},
    data: () => ({form: ''}),
    methods: {
        update() {this.$emit('update', this.form)},
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
    align-items: center
}

#create > textarea {
    flex: 1 0;
    width: 100%;
    background: #f0f0f0;
    margin-bottom: 1em;
    padding: .3em;
    max-height: 33%;
}
@media (max-width: 60rem) { #create > textarea { max-height: 50% !important }}
@media (max-width: 30rem) { #create > textarea { max-height: 66% !important }}

#create > textarea:focus {
    background: #f8f8f8;
}

#create > #buttons {
    flex: 0 0;
    margin-bottom: 3em
}
@media (max-width: 60rem) { #create > #buttons {margin-bottom: 1em !important} }

#create > #buttons > a {
    color: darkgray;
    text-decoration: none;
}
#create > #buttons > a:hover,
#create > #buttons > a:active {
    color: black;
}
</style>