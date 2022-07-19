<template>
    <div class="record-menu">
        <breadcrumb :links="links"></breadcrumb>

        <div class="d-flex justify-content-between">
            <h1>My Recordings <span>{{ recordings }}</span></h1>

            <div>
                <button class="btn btn-order-by-date">
                    <img src="@icons/arrow-down-up.svg" alt="arrow-down-up">
                    By Date
                </button>
                <button class="btn btn-filter">
                    <img src="@icons/funnel.svg" alt="funnel">
                    Add Filter
                </button>
                <button class="btn btn-blue">
                    <img src="@icons/camera-video.svg" alt="camera-video">
                    New Request
                </button>
                <button class="btn btn-red" @click="showModal = true">
                    <img src="@icons/record-circle.svg" alt="record-circle">
                    Start Recording
                </button>
            </div>
        </div>
        
        <!-- Modal -->
        <NewRecording v-show="showModal" @close="showModal = false" />
    </div>
</template>

<script>
import Breadcrumb from "../../Breadcrumb.vue";
import NewRecording from './NewRecording.vue';

export default {
    props: {
        recordings: {
            type: Number,
            required: true
        }
    },
    components: {
        Breadcrumb,
        NewRecording
    },
    data() {
        return {
            'links': [
                'Snapbyte',
                'My Recordings'
            ],
            showModal: false
        }
    },
    methods: {
        record() {
            this.$router.push({ 
                path: '/live-preview', 
                params: { 
                    type: 'snapbyte',
                    recordScreen: true,
                    recordCamera: true,
                    recordMic: true, 
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .record-menu {
        width: 100%;
        padding-left: 8.3rem;
        padding-right: 8.6rem;

        h1 {
            font-size: 24px;

            span {
                margin-left: 1rem;
                font-weight: 600;
                line-height: 35px;
                color: #637C8E;
            }
        }
    }

    
</style>