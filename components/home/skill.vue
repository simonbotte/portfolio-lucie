<script setup>
const props = defineProps({
    title: String,
    image: String,
    description: String,
});
const config = useRuntimeConfig();
const apiBaseUrl = config.public.STRAPI_URL;
</script>

<template>
    <div class="skill">
        <figure>
            <img :src="apiBaseUrl + image" :alt="title" />
            <figcaption>
                <h3>{{ title }}</h3>
            </figcaption>
        </figure>
        <p v-if="description">{{ description }}</p>
    </div>
</template>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    // aspect-ratio: 1 / 1;
    background-color: var(--soft-aqua-800-80);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    padding: 32px 32px;
    &:nth-child(2n-1):last-child {
        grid-column: span 1;
        @media (min-width: 768px){
            grid-column: span 2;
        }
        
    }
    figure {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    img {
        width: 24px;
        height: 24px;
    }
    h3 {
        font-size: 1.25rem;
        font-family: "TransformaSans", sans-serif;
        text-align: center;
        font-weight: 700;
        padding-top: 2px;
        text-align: left;
        @media (min-width: 768px) {
            font-size: 1.5rem;
            padding-top: 4px;
        }
    }
    p{
        line-height: 1.25rem;
    }
}
</style>
