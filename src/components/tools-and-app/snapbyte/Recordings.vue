<template>
    <div class="content">
        <div v-if="!recordings.length">
            <div class="first-record">
                <img src="/images/file-saver.jpg" alt="file-saver">
                <h3>Say hello to the world!</h3>
                <p>Record your first video/audio and share it what your team, friends, <br>followers and customers.</p>
                <div>
                    <button class="btn btn-red">
                        <img src="@icons/record-circle.svg" alt="record-circle">
                        Start Recording
                    </button>
                    <button class="btn btn-blue">
                        <img src="@icons/camera-video.svg" alt="camera-video">
                        New Request
                    </button>
                </div>
            </div>
            <div class="download">
                <img src="/images/adilo-preview.jpg" alt="adilo-preview">
                <div>
                    <h3>Want more controls & better quality recording?</h3>
                    <button class="btn btn-blue mt-3">
                        Download the desktop recorder
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <table class="table">
                <thead>
                    <tr>
                        <th>Recordings</th>
                        <th>Title</th>
                        <th>Views</th>
                        <th>Size</th>
                        <th>Last Modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(record, index) in recordings" :key="index">
                        <td>
                            <div class="thumbnail-box">
                                <img :src="record.thumbnail" alt="video thumbnail">
                            </div>
                        </td>
                        <td>
                            <h6>{{ record.name }}</h6>
                            <p>{{ record.description }}</p>
                        </td>
                        <td>{{ record.views }}</td>
                        <td>{{ record.size }}</td>
                        <td>{{ record.last_modified }}</td>
                        <td>
                            <img 
                                src="@icons/three-dots.svg" 
                                class="three-dots" 
                                alt="three-dots" 
                                @click="showModal = true"
                            >
                            <!-- Modal -->
                            <NewRecording v-show="showModal" @close="showModal = false" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NewRecording from './NewRecording.vue';

export default {
    components: {
        NewRecording
    },
    props: {
        recordings: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showModal: false
        }
    },
}
</script>

<style lang="scss" scoped>
    .content {
        margin-top: 30px;
        padding-left: 8.3rem;
        padding-right: 8.6rem;
        padding-bottom: 8.75rem;

        .first-record {
            height: 540px;
            background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='38' ry='38' stroke='%23333' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 38px;
            border-color: #A3BAC6 !important;
            padding-top: 105px;
            text-align: center;

            h3 {
                margin-top: 50px;
                font-size: 22px;
                line-height: 33px;
            }

            p {
                font-size: 14px;
                line-height: 20px;
                color: #637C8E;
            }  

            div {
                margin-top: 30px;
            }
        }

        .download {
            display: flex;
            margin-top: 42px;

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 80px;
                padding-right: 60px;

                h3 {
                    font-size: 22px;
                    line-height: 33px;
                    color: #21455E;
                }

                .btn {
                    margin-left: 0;
                    width: 70%;
                }
            }
        }

        .table {
            color: #21455E;
            border-collapse: inherit;

            thead {
                tr {
                    th {
                        font-size: 18px;
                        font-weight: 600;
                        padding: 10px 0 30px;
                        border-bottom: none;
                    }
                }
            }

            tbody {
                tr {
                    td {
                        padding: 0.5rem 0;
                        height: 100px;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 26px;
                        border-bottom: none;

                        h6 {
                            font-size: 14px;
                            line-height: 21px;
                        }

                        p {
                            font-size: 12px;
                            line-height: 18px;
                            color: #A3BAC6;
                        }

                        .thumbnail-box {
                            width: 120px;
                            height: 65px;

                            img {
                                width: 100%;
                                object-fit: cover;
                                border-radius: 6px;
                            }
                        }

                        .three-dots {
                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
</style>