<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://use.typekit.net/job1kkm.css",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
        },
        {
            rel: "manifest",
            href: "/site.webmanifest",
        },
        {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#e1e634",
        },
    ],
    meta: [
        {
            name: "msapplication-TileColor",
            content: "#00aba9",
        },
        {
            name: "theme-color",
            content: "#ffffff",
        },
    ],
    htmlAttrs: {
        lang: "fr",
    },
});
</script>

<template>
    <AppHeader />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <AppFooter />
</template>
