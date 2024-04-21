export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const strapiUrl = config.STRAPI_URL;
    const strapiToken = config.STRAPI_TOKEN;
    const response = await $fetch(`${strapiUrl}/api/portfolio-home?populate[1]=hero&populate[2]=about&populate[3]=about.picture&populate[4]=about.cv&populate[5]=skills&populate[6]=projects&populate[7]=metas&populate[8]=metas.image`, {
        headers: {
            Authorization: `Bearer ${strapiToken}`,
        },
    });
    return response
});
