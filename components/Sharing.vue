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
    methods: {
        shareClipboard() {
            // TODO
            console.log('shareClipboard')
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
