<script setup>
const props = defineProps({
    content: Object,
});

const skills = ref([]);
const { data } = await useFetch("/api/strapi/skills/");
skills.value = data.value.data;
</script>

<template>
    <section id="skills" class="skills">
        <div class="skills__wrapper">
            <h2>{{content.title}}</h2>
            <div class="skills__list">
                <HomeSkill
                    v-for="skill in skills"
                    :key="skill.id"
                    :title="skill.attributes.name"
                    :image="skill.attributes.icon.data.attributes.url"
                    :description="skill.attributes.description"
                />
            </div>
            <AppWire class="skills__wire"></AppWire>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.skills {
    padding: 64px 16px;
    &__wrapper {
        max-width: 400px;
        position: relative;
        margin: 0 auto;
        @media (min-width: 768px){
            max-width: var(--mini-container-width);
        }
        h2 {
            font-size: 2rem;
            font-family: "TransformaSans", sans-serif;
            text-align: center;
            font-weight: 900;
            @media (min-width: 1024px){
                font-size: 4rem;
            }
        }
    }
    &__list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 32px;
        margin-top: 32px;
        position: relative;
        z-index: 1;
        @media (min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
    }
    &__wire {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
    }
}
</style>
