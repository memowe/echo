<template>
    <div id="sharing-options">
        <div @click="shareClipboard" class="sharing-option">
            <div class="sharing-button">
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="sharing-label">
                Copy to Clipboard
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Sharing',
    computed: {
        url() {
            let code = this.$route.params.code
            let reso = this.$router.resolve({name: 'Show', params: {code: code}})
            return new URL(reso.href, window.location)
        }
    },
    methods: {
        shareClipboard() {
            this.$copyText(this.url)
        }
    }
}
</script>

<style scoped>
#sharing-options {
    display: flex;
}

.sharing-option {
    width: 6em;
    height: 6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.sharing-otion > * {
    flex: 0 0 content;
}

.sharing-button {
    font-size: 2em;
}

.sharing-label {
    text-align: center;
}
</style>
