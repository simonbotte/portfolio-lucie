<script setup>
const props = defineProps({
    title: String,
    image: String,
});
const config = useRuntimeConfig();
const apiBaseUrl = config.public.STRAPI_URL;
</script>

<template>
    <figure class="skill">
        <img :src="apiBaseUrl + image" :alt="title" />
        <figcaption>{{ title }}</figcaption>
    </figure>
</template>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    aspect-ratio: 1 / 1;
    background-color: var(--soft-aqua-800);
    border-radius: 16px;
    padding: 16px;
    img {
        width: 32px;
        height: 32px;
        @media (min-width: 768px){
            width: 64px;
            height: 64px;
        }
    }
    figcaption {
        font-size: 1rem;
        text-align: center;
        @media (min-width: 768px){
            font-size: 1.25rem;
        }
    }
}
</style>
