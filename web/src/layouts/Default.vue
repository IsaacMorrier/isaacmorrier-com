<template>
    <div>
        <header class="grid-container">
            <div class="row grid-padding">
                <div class="col-2 hidden-lg-down">back</div>
                <div class="col-7 col-lg-3">
                    <header-logo />
                </div>

                <div class="col-2 col-offset-3 col-lg-offset-5">
                    <g-link to="/info">info</g-link>
                    <!-- <toggle-theme /> -->
                </div>
            </div>
        </header>

        <main class="main">
            <transition name="fade" mode="out-in">
                <slot />
            </transition>
        </main>

        <footer class="grid-container">
            <div class="row grid-padding">
                <div class="col-12">
                    <p>© Isaac Morrier {{ new Date().getFullYear() }}</p>
                </div>
                    
            </div>
        </footer>
    </div>
</template>

<script>
    import HeaderLogo from '~/components/HeaderLogo'
    // import ToggleTheme from '~/components/ToggleTheme'

    export default {
        components: {
            HeaderLogo,
            // ToggleTheme
        }
    }
</script>

<style>
    .fade-enter-active {
        transition: opacity .5s;
    }
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>