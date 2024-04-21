export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const strapiUrl = config.STRAPI_URL;
    const strapiToken = config.STRAPI_TOKEN;
    const response = await $fetch(`${strapiUrl}/api/portfolio-legal?populate[1]=metas&populate[2]=metas.image`, {
        headers: {
            Authorization: `Bearer ${strapiToken}`,
        },
    });
    return response;
});
