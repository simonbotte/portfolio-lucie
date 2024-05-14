<script setup>
const apiUrl = `/api/strapi/home/`;
const { data } = await useFetch(apiUrl, {
    method: "GET",
});
const content = ref(data.value?.data.attributes);
const config = useRuntimeConfig();
const apiBaseUrl = config.public.STRAPI_URL;
useSeoMeta({
    title: content.value.metas.title,
    description: content.value.metas.description,
    url: "https://www.lucielvrd.fr",
    ogImage: apiBaseUrl + content.value.metas.image.data.attributes.url,
    ogSiteName: content.value.metas.title,
    ogType: "website",
    ogLocale: "fr_FR",
    ogUrl: "https://www.lucielvrd.fr",
    ogTitle: content.value.metas.title,
    ogDescription: content.value.metas.description,
    twitterCard: "summary_large_image",
    twitterSite: "@simonbotte",
    twitterCreator: "@simonbotte",
    twitterImage: apiBaseUrl + content.value.metas.image.data.attributes.url,
});
</script>

<template>
    <HomeHero :content="content.hero" />
    <HomeAbout :content="content.about" />
    <HomeSkills :content="content.skills" />
    <HomeProjects :content="content.projects" />
</template>

<style>
html {
    scroll-behavior: smooth;
}
</style>
