<template>
    <div class="overlay">
        <div class="rec-modal">
            <div class="rec-modal-header">
                <h5 class="rec-modal-title">New Recording</h5>
                <button type="button" @click="$emit('close')">
                    <span>&times;</span>
                </button>
            </div>
            <hr>
            <div class="rec-modal-body">
                <p>Save the recording in</p>
                <v-select
                    v-model="project"
                    :options="projects"
                    :reduce="(item) => item.name"
                    label="name"
                    placeholder="Select a project"
                />
                <div class="rec-actions">
                    <div class="action">
                        <h6>Record screen</h6>
                        <Toggle
                            v-model="recordScreen"
                        />
                    </div>
                    <div class="action">
                        <h6>Record camera</h6>
                        <Toggle
                            v-model="recordCamera"
                        />
                    </div>
                    <div class="action">
                        <h6>Record mic</h6>
                        <Toggle
                            v-model="recordMic"
                        />
                    </div>
                </div>
            </div>
            <div class="rec-modal-footer">
                <button class="btn btn-blue" @click="record">Start Recording</button>
            </div>
        </div>
    </div>
</template>

<script>
import Toggle from '@vueform/toggle'
import LivePreview from './LivePreview.vue'

export default {
    components: {
        Toggle,
        LivePreview
    },
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            projects: [
                {
                    name: "Build Spotify clone with Vue.js"
                },
                {
                    name: "Learn Inertia.js with Laravel 9 & Vue 3"
                },
                {
                    name: "How to make a parallax webpage"
                },
            ],
            project: null,
            recordScreen: true,
            recordCamera: true,
            recordMic: false,
            showLive: false,
        };
    },
    methods: {
        record() {
            this.$router.replace({
                name: 'LivePreview', 
                params: {
                    project: this.project, 
                    recordScreen: this.recordScreen,
                    recordCamera: this.recordCamera,
                    recordMic: this.recordMic,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;

        .rec-modal {
            width: 457px;
            height: 486px;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);

            .rec-modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 19px 38px 0;
                
                .rec-modal-title {
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 33px;
                    color: #000000;
                }

                button {
                    border: none;
                    background: none;
                    font-size: 40px;
                }
            }
        }

        .rec-modal-body {
            padding: 0 38px;

            p {
                font-size: 16px;
                line-height: 25px;
                font-weight: 300;
                color: #000000;
            }

            .rec-actions {
                padding-top: 44px;

                .action {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 14px;

                    h6 {
                        font-size: 18px;
                        line-height: 27px;
                        font-weight: 500;
                    }
                }
            }
        }
        .rec-modal-footer {
            padding: 19px 38px;
            text-align: center;

            button {
                width: 289px;
                height: 51px;
                margin-left: 0;
                font-size: 18px;
                line-height: 27px;
            }
        }
    }
</style>

<style src="@vueform/toggle/themes/default.css"></style>