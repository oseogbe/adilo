<template>
    <div class="mt-4 mb-2">
        <div class="d-inline" v-for="item in links" :key="item.index">
            <span class="breadcrumb-item">{{ item }}</span>
            <svg
                v-if="links.indexOf(item) !== links.length - 1"
                class="mx-1" 
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 3.5L11 8.5L6 13.5"
                    stroke="#637C8E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        links: Array
    }
}
</script>

<style lang="scss" scoped>
    .breadcrumb-item {
        font-size: 14px;
        line-height: 26px;
        color: #637C8E;
    }
</style>