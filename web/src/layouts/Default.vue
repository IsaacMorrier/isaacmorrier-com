<template>
    <div>
        <header class="header">
            <div class="header__left">
                <header-logo />
            </div>

            <div class="header__right">
                <toggle-theme />
            </div>
        </header>

        <main class="main">
            <transition name="fade" mode="out-in">
                <slot />
            </transition>
        </main>

        <footer>
            <p>© Isaac Morrier {{ new Date().getFullYear() }}</p>
        </footer>
    </div>
</template>

<script>
    import HeaderLogo from '~/components/HeaderLogo'
    import ToggleTheme from '~/components/ToggleTheme'

    export default {
        components: {
            HeaderLogo,
            ToggleTheme
        }
    }
</script>

<style>
    .fade-enter-active {
        transition: opacity .5s;
        transition-delay: .6s;
    }
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>