export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const strapiUrl = config.STRAPI_URL;
    const strapiToken = config.STRAPI_TOKEN;
    const response = await $fetch(`${strapiUrl}/api/portfolio-projects?populate[1]=miniature`, {
        headers: {
            Authorization: `Bearer ${strapiToken}`,
        },
    });
    return response;
});
