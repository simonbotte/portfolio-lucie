<script setup>
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <section class="hero">
        <div class="hero__wrapper">
            <p>{{ content.title }}</p>
            <h1>Lucie Levrard</h1>
            <p>{{ content.job }}</p>
        </div>
        <div class="hero__blobs">
            <NuxtImg src="/blob/1.svg" alt="Blob" class="blob1" />
            <NuxtImg src="/blob/3.svg" alt="Blob" class="blob3" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    height: 100vh;
    min-height: 500px;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 16px;
        p {
            font-size: 1.5rem;
            padding: 0 16px;
            text-align: center;
            &:first-child {
                margin-bottom: 8px;
            }
        }
        h1 {
            font-size: 4rem;
            font-family: "pain-de-mie", sans-serif;
            text-align: center;
            @media (min-width: 1024px) {
                font-size: 5rem;
            }
        }
    }
    &__blobs {
        width: 0px;
    }
    .blob1 {
        position: absolute;
        top: 0;
        left: 36px;
        z-index: -1;
    }
    .blob3 {
        position: absolute;
        top: 30%;
        right: -36px;
        z-index: -1;
    }
}
</style>
