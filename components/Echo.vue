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
        
        // Zip and base64-encode markdown string
        encode(md) {
            const charCodes = new TextEncoder().encode(md);
            const zipped    = pako.deflate(new Uint8Array(charCodes));
            const binString = String.fromCharCode(...zipped);
            return btoa(binString);
        },

        // Decode zipped and base64'ed markdown string
        decode(base64) {
            try {
                const binString = atob(base64);
                const zipped    = binString.split('').map(b => b.charCodeAt(0));
                const charCodes = pako.inflate(zipped);
                return new TextDecoder().decode(charCodes);
            } catch (e) {
                console.log(`Couldn't decode '${base64}'`);
                router.push('/'); // "Reboot"
            }
        },

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
h1, h2, h3, h4, h5, h6 {line-height: 1.2em}
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
