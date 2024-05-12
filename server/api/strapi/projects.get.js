export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const strapiUrl = config.STRAPI_URL;
    const strapiToken = config.STRAPI_TOKEN;
    const response = await $fetch(`${strapiUrl}/api/portfolio-projects?filters[order][$gt]=0&populate[1]=miniature&sort[1]=order:desc&sort[2]=title`, {
        headers: {
            Authorization: `Bearer ${strapiToken}`,
        },
    });
    return response;
});
