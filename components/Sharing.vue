<template>
    <div id="sharing-options">
        <div v-if="!success" @click="shareClipboard" class="sharing-option">
            <div class="sharing-button">
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="sharing-label">
                Copy to Clipboard
            </div>
        </div>
        <div v-else @click="done" class="sharing-option">
            <div class="sharing-button sharing-success">
                <i class="fas fa-check"></i>
            </div>
            <div class="sharing-label sharing-success">
                Success!
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Sharing',
    data: () => ({success: false}),
    computed: {
        url() {
            let code = this.$route.params.code
            let reso = this.$router.resolve({name: 'Show', params: {code: code}})
            return new URL(reso.href, window.location)
        }
    },
    methods: {
        async shareClipboard() {
            await this.$copyText(this.url)
            this.success = true
        },
        done() {
            this.$emit('done')
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

.sharing-success {
    color: green;
}
</style>
