<script setup>
const apiUrl = `/api/strapi/legals/`;
const { data: legalsData } = await useFetch(apiUrl, {
    method: "GET",
});
const data = ref(legalsData.value?.data.attributes);
const config = useRuntimeConfig();
const apiBaseUrl = config.public.STRAPI_URL;
useSeoMeta({
    title: data.value.metas.title,
    description: data.value.metas.description,
    url: "https://www.lucielvrd.fr",
    ogImage: apiBaseUrl + data.value.metas.image.data.attributes.url,
    ogSiteName: data.value.metas.title,
    ogType: "website",
    ogLocale: "fr_FR",
    ogUrl: "https://www.lucielvrd.fr",
    ogTitle: data.value.metas.title,
    ogDescription: data.value.metas.description,
    twitterCard: "summary_large_image",
    twitterSite: "@simonbotte",
    twitterCreator: "@simonbotte",
    twitterImage: apiBaseUrl + data.value.metas.image.data.attributes.url,
});
</script>

<template>
    <section class="legals">
        <div class="legals__wrapper">
            <h1 class="legals__title">{{ data.title }}</h1>
            <div class="legals__content" v-html="$rcTranslator(data.content)"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.legals {
    padding: 128px 16px 64px 16px;
    &__wrapper {
        max-width: 760px;
        margin: 0 auto;
        h1 {
            font-size: 4rem;
            font-family: "TransformaSans", sans-serif;
            text-align: center;
            font-weight: 900;
        }
    }
    &__content {
        margin-top: 32px;
        :deep(h2) {
            font-size: 2rem;
            font-family: "TransformaSans", sans-serif;
            font-weight: 900;
            margin-bottom: 8px;
        }
        :deep(ul) {
            margin-bottom: 32px;
        }
        :deep(a) {
            color: var(--soft-aqua-900);
            text-decoration: underline;
        }
    }
}
</style>
