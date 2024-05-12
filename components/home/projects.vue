<script setup>
const props = defineProps({
    content: Object,
});
const projects = ref([]);
const professionalProjects = ref([]);
const schoolProjects = ref([]);
const { data } = await useFetch("/api/strapi/projects/");
projects.value = data.value.data;
professionalProjects.value = projects.value.filter((project) => project.attributes.category === "professional");
schoolProjects.value = projects.value.filter((project) => project.attributes.category === "school");
</script>

<template>
    <section class="projects">
        <div class="projects__wrapper">
            <div v-if="professionalProjects.length > 0" class="projects__category">
                <h2>{{content.professionalTitle}}</h2>
                <div class="projects__list">
                    <HomeProject
                        v-for="project in professionalProjects"
                        :key="project.id"
                        :project="project.attributes"
                    />
                </div>
            </div>
            
            <div v-if="schoolProjects.length > 0" class="projects__category">
                <h2>{{content.schoolTitle}}</h2>
                <div class="projects__list">
                    <HomeProject v-for="project in schoolProjects" :key="project.id" :project="project.attributes" />
                </div>
            </div>

            
            <div class="hero__blobs">
                <NuxtImg src="/blob/2.svg" alt="Blob" class="blob2" />
                <NuxtImg src="/blob/3.svg" alt="Blob" class="blob3" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.projects {
    padding: 64px 16px;

    &__wrapper {
        position: relative;
        max-width: var(--container-width);
        margin: 0 auto;
        width: 100%;
        h2 {
            font-size: 2rem;
            font-family: "pain-de-mie", sans-serif;
            text-align: center;
            @media (min-width: 1024px) {
                font-size: 4rem;
            }
        }
    }
    &__list {
        display: grid;
        grid-template-columns: 1fr;

        gap: 16px;
        margin-top: 32px;
        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1024px) {
            gap: 32px;
        }
    }
    &__category {
        margin-bottom: 64px;
    }
    .blob2 {
        position: absolute;
        top: 0;
        left: 0px;
        z-index: -1;
        rotate: 280deg;
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
    .blob3 {
        position: absolute;
        bottom: 0;
        translate: 0 40%;
        right: 0px;
        z-index: -1;
        rotate: 280deg;
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
}
</style>
