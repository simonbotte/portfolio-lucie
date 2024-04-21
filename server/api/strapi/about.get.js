export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const strapiUrl = config.STRAPI_URL;
    const strapiToken = config.STRAPI_TOKEN;
    const response = await $fetch(`${strapiUrl}/api/portfolio-about?populate[1]=picture&populate[2]=description&populate[3]=cv`, {
        headers: {
            Authorization: `Bearer ${strapiToken}`,
        },
    });
    return response
});
