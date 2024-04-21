<script setup>
const props = defineProps({
    project: Object,
});
const config = useRuntimeConfig();
const apiBaseUrl = config.public.STRAPI_URL;
</script>

<template>
    <div class="project">
        <div class="project__miniature">
            <img :src="apiBaseUrl + project.miniature.data.attributes.formats.medium.url" alt="miniature" />
        </div>
        <div class="project__content">
            <h3 class="project__title">{{ project.title }}</h3>
            <p class="project__type">{{ project.type }}</p>
            <p class="project__shortDescription">{{ project.short_description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project {
    position: relative;
    overflow: hidden;
    &__miniature {
        position: absolute;
        z-index: 1;
        height: 100%;
        width: 100%;
        overflow: hidden;
        img {
            width: 100%;
            border-radius: 16px;
            height: 100%;
            object-fit: cover;
            transition: filter 0.3s;
        }
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background: linear-gradient(
                0deg,
                rgba(47, 81, 78, 0.5) 0%,
                rgba(47, 81, 78, 0.5) 30%,
                rgba(47, 81, 78, 0) 60%
            );
            backdrop-filter: blur(8px);
            mask: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 50%);

            @media (min-width: 768px) {
                background: linear-gradient(
                    0deg,
                    rgba(47, 81, 78, 0.5) 0%,
                    rgba(47, 81, 78, 0.5) 40%,
                    rgba(47, 81, 78, 0) 50%
                );
                backdrop-filter: blur(8px);
                mask: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 50%);
            }
        }
    }
    &:hover {
        img {
            filter: brightness(1.3);
        }
    }
    &__content {
        padding: 16px;
        position: relative;
        z-index: 2;
        padding-top: 250px;
    }
    &__title {
        font-size: 1.5rem;
        font-family: "pain-de-mie", sans-serif;
        text-align: center;
        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }
    &__type {
        font-size: 0.75rem;
        opacity: 0.8;
        text-align: center;
        font-family: "quicksand", sans-serif;
        @media (min-width: 768px) {
            font-size: 0.875rem;
        }
    }
    &__shortDescription {
        font-size: 0.75rem;
        font-family: "quicksand", sans-serif;
        line-height: 1rem;
        text-align: center;
        margin-top: 8px;
        @media (min-width: 768px) {
            font-size: 0.875rem;
        }
    }
}
</style>
