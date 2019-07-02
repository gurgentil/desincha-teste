<template>
    <header class="fixed top-0 inset-x-0 z-50 px-8 py-2 navigation" :class="{ 'bg-green-900 shadow-lg': show }">
        <div class="container mx-auto flex items-center justify-end">
            <h1 class="mr-auto mr-4">
                <a href="#">
                    <img class="max-w-full h-auto" src="images/logo.png" alt="Desinchá">
                </a>
            </h1>

            <a class="p-1 mr-4" href="#">
                <img src="images/shopping-bag.png" alt="Sacola de compras">
            </a>

            <button class="p-1 cursor-pointer" type="button">
                <img src="images/menu.png" alt="Menu">
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },

        mounted () {
            window.addEventListener('scroll', this.onScroll);

            this.onScroll();
        },
        
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll);
        },
        
        methods: {
            onScroll () {
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollPosition > 100) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            }
        }
    };
</script>

<style scoped>
    .navigation {
        transition: background ease-in-out 0.1s;
    }
</style>