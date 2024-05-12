<script setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <header :class="`appHeader ${isMenuOpen ? 'open' : ''}`">
        <div class="appHeader__blur"></div>
        <div class="appHeader__wrapper">
            <div class="appHeader__left">
                <div @click="toggleMenu" class="appHeader__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <NuxtLink to="/">Lucie Levrard</NuxtLink>
            </div>

            <nav class="appHeader__right">
                <ul>
                    <li>
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="#skills">Compétences</a>
                    </li>
                    <li>
                        <a href="#projects">Expérience</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.appHeader {
    width: 100%;
    position: fixed;
    top: 0px;
    padding: 32px 16px 0px 16px;
    z-index: 1000;
    box-sizing: border-box;
    &__blur{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        backdrop-filter: blur(8px);
        mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%);
    }
    &__wrapper {
        background-color: var(--soft-aqua-900);
        max-width: var(--container-width);
        width: 100%;
        margin: 0 auto;
        padding: 16px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }
    &__burger {
        display: flex;
        flex-direction: column;
        @media (min-width: 768px) {
            display: none;
        }
        span {
            background-color: var(--pale-yellow-50);
            height: 2px;
            width: 24px;
            border-radius: 10px;
            margin: 2px 0;
        }
    }
    &__left {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
    &__right {
        width: 100%;
        transition: 300ms ease;
        overflow: hidden;
        opacity: 0;
        transform: translateY(-16px);
        max-height: 0px;
        @media (min-width: 768px) {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            opacity: 1;
            transform: none;
            max-height: 300px;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 24px;
            @media (min-width: 768px) {
                flex-direction: row;
            }
            li {
                list-style: none;
                a {
                    text-decoration: none;
                    font-size: 1rem;
                    color: var(--pale-yellow-50);
                    font-family: "quicksand", sans-serif;
                }
            }
        }
    }
}
.open.appHeader {
    .appHeader {
        &__right {
            padding-top: 32px;
            padding-bottom: 8px;
            height: auto;
            max-height: 300px;
            opacity: 1;
            transform: translateY(0);
        }
    }
}

a {
    font-family: "TransformaSans", sans-serif;
    font-weight: 900;
    font-size: 2rem;
    line-height: 2rem;
    padding-top: 8px;
    color: var(--pale-yellow-50);
    text-decoration: none;
    text-transform: lowercase;
}
</style>
