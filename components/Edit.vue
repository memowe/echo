<template>
    <div id="edit">
        <textarea v-model="form" @keyup="update"></textarea>
        <div id="buttons">
            <router-link :to="{name: 'Show'}" title="Show">
                <i class="fas fa-eye"></i>
            </router-link>
            <i @click="share" class="fas fa-share-alt" title="Share"></i>
        </div>
        <div v-if="modal" @click.self="close" id="modal">
            <Sharing @done="close"/>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Edit',
    props: {md: ''},
    data: () => ({form: '', modal: false}),
    methods: {
        update() {this.$emit('update', this.form)},
        share() {this.modal = true},
        close() {this.modal = false},
    },
    created() {this.form = this.md},
    components: {Sharing: httpVueLoader('components/Sharing.vue')},
}
</script>

<style scoped>
#edit {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

#edit > textarea {
    flex: 1 0;
    width: 100%;
    background: #f0f0f0;
    margin: 1em 0;
    padding: .3em;
    max-height: 33%;
}
@media (max-width: 60rem) { #edit > textarea { max-height: 50% !important }}
@media (max-width: 30rem) { #edit > textarea { max-height: none !important }}

#edit > textarea:focus {
    background: #f8f8f8;
}

#edit > #buttons {
    flex: 0 0;
    margin-bottom: 3em
}
@media (max-width: 60rem) { #edit > #buttons {margin-bottom: 1em !important} }

#edit > #buttons > * {
    color: darkgray;
    text-decoration: none;
    margin: 0 .5em;
    cursor: pointer;
}
#edit > #buttons > *:hover,
#edit > #buttons > *:active {
    color: black;
}

#modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.4);
}

#modal > * {
    flex: 0 0 content;
    background-color: white;
    box-shadow: 0 .2em .5em black;
    padding: 1em;
}
</style>
