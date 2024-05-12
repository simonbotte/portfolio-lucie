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
}
</style>
