<template>
    <div id="show">
        <div id="markdown" v-html="html"></div>
        <div id="buttons">
            <router-link :to="{name: 'Edit'}" title="Edit">
                <i class="fas fa-edit"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Show',
    props: {md: ''},
    computed: {
        html() {
            const sd = new showdown.Converter();
            return sd.makeHtml(this.md);
        }
    }
}
</script>

<style scoped>
#show {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#show > #markdown {
    flex: 0 0 content;
    height: auto; /* Workaround for flex-basis content */
    background: #f0f0f0;
    max-height: 90%;
    overflow-y: auto;
    margin: 3em 0 1em;
    padding: .5em 2em;
    line-height: 1.5em;
    font-size: 1.2rem;
    font-family: sans-serif;
}
@media (max-width: 60rem) {
    #show > #markdown {
        margin: 1em 0 1em !important;
        padding: 0 1em !important;
    }
}

#show > #buttons {
    flex: 0 0;
    margin-bottom: 3em;
}
@media (max-width: 60rem) { #show > #buttons {margin-bottom: 1em !important} }

#show > #buttons > a {
    color: lightgrey;
    text-decoration: none;
}
#show > #buttons > a:hover,
#show > #buttons > a:active {
    color: darkgrey;
}
</style>
