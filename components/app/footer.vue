import { NuxtLink } from '#build/components';
<template>
    <footer class="appFooter">
        <div class="appFooter__wrapper">
            <div class="appFooter__left">
                <p>Lucie Levrard</p>
            </div>

            <div class="appFooter__right">
                <p>Contactez-moi</p>
                <a class="appFooter__mail" href="mailto:hey@lucielvrd.fr">hey@lucielvrd.fr</a>
                <NuxtLink class="appFooter__legal" to="/mentions-legales">Mentions légales</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.appFooter {
    background-color: var(--soft-aqua-900);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    &__wrapper {
        max-width: var(--container-width);
        width: 100%;
        padding: 24px 16px;
        border-radius: 16px 16px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__left {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        p {
            font-family: "TransformaSans", sans-serif;
            font-size: 2rem;
            font-weight: 900;
            line-height: 2rem;
            text-transform: lowercase;
        }
    }
    &__right {
        width: 100%;
        transition: 300ms ease;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        p {
            font-family: "TransformaSans", sans-serif;
            font-size: 2rem;
            font-weight: 900;
            line-height: 2rem;
        }
    }
    &__mail {
        text-decoration: none;
        font-size: 1rem;
        color: var(--pale-yellow-50);
    }
    &__legal {
        font-size: 0.75rem;
        text-decoration: none;
        color: var(--pale-yellow-50);
        margin-top: 8px;
    }
}
</style>
