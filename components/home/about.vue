<script setup>
const props = defineProps({
    content: {
        type:Object,
        required:true
    }
});
const config = useRuntimeConfig();
const apiBaseUrl = config.public.STRAPI_URL;

</script>

<template>
    <section id="about" class="about">
        <div class="about__wrapper">
            <div class="about__portrait">
                <img
                    :src="apiBaseUrl + content.picture.data.attributes.formats.medium.url"
                    alt="Portrait de Lucie Levrard"
                />
            </div>
            <div class="about__text">
                <h2>{{ content.title }}</h2>
                <div class="about__description" v-html="$rcTranslator(content.description)"></div>
                <a
                    v-if="content.cv.data"
                    target="_blank"
                    :href="apiBaseUrl + content.cv.data.attributes.url"
                    class="about__cv"
                    >Télécharger mon CV</a
                >
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    background-color: var(--soft-aqua-800);
    padding: 64px 16px;
    position: relative;
    &__wrapper {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        max-width: var(--mini-container-width);
        margin: 0 auto;
        width: 100%;
        @media (min-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .about__portrait {
            grid-column: span 2;
            display: flex;
            justify-content: center;
            @media (min-width: 768px) {
                grid-column: span 1;
                align-items: center;
                justify-content: flex-end;
            }
            img {
                width: 100%;
                width: 264px;
                border-radius: 16px;
                mask-image: url("@/assets/mask/about.svg");
                mask-repeat: no-repeat;
                mask-position: center;
                mask-size: contain;
            }
        }
        .about__text {
            display: flex;
            flex-direction: column;
            gap: 16px;
            grid-column: span 2;
            @media (min-width: 768px) {
                grid-column: span 1;
            }
            h2 {
                font-size: 2rem;
                font-family: "TransformaSans", sans-serif;
                font-weight: 900;
                @media (min-width: 1024px) {
                    font-size: 4rem;
                }
            }
        }
    }
    &__description {
        :deep(p) {
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-bottom: 16px;
            @media (min-width: 1024px) {
                font-size: 1rem;
            }
        }
        :deep(strong) {
            font-weight: bold;
        }
        :deep(a) {
            color: var(--pale-yellow-50);
            text-decoration: underline;
            transition: 300ms ease;
        }
    }
    &__cv {
        background-color: var(--pale-yellow-base);
        display: flex;
        width: fit-content;
        padding: 12px 24px;
        font-size: 1rem;
        color: var(--soft-aqua-900);
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: 300ms ease;
        text-decoration: none;
        &:hover {
            background-color: var(--pale-yellow-50);
            color: var(--soft-aqua-900);
        }
    }
    
}
</style>
