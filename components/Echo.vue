<template>
    <div id="echo">
        <router-view :md="md" @update="update"/>
    </div>
</template>

<script>
module.exports = {
    name: 'Echo',
    data: () => ({md: ''}),
    methods: {
        
        // En- and decoding the markdown content
        encode: md => btoa(md),
        decode: enc => atob(typeof enc === 'string' ? enc : ''),

        // Read markdown content from URL
        read() {
            const code = this.$route.params.code;
            return this.decode(code);
        },

        // Sync markdown content with URL
        sync() {
            this.md = this.read();
        },

        // Go to an echo page with the current content
        goto(name) {
            router.push({name: name, params: {
                code: this.encode(this.md),
            }}).catch(e => {
                if (e.name !== 'NavigationDuplicated') {
                    throw e;
                }
            });
        },

        // Update markdown from child component event
        update(md) {
            this.md = md;
            this.goto('Edit');
        },
    },
    created() {this.sync()},
    watch: {$route() {this.sync()}},
}
</script>

<style>
html, body {margin: 0; padding: 0}
</style>

<style scoped>
#echo {
    height: 100vh;
    max-width: 50rem;
    width: calc(25% + 20rem);
    margin: 0 auto;
}
@media (max-width: 30rem) { #echo {width: 90% !important} }
</style>