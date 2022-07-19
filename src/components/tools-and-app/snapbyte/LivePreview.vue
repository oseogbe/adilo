<template>
    <main>
        <div class="overlay">
            <div class="live">
                <div class="on">
                    <img src="@icons/record-circle-red.svg" alt="record-circle-red">
                    <span>Live Preview</span>
                </div>
                <video id="screen" playsinline autoplay></video>
                <video id="camera" playsinline autoplay></video>
            </div>
            <button class="btn btn-blue" disabled>Start Recording</button>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            screenConstraints: {},
            cameraConstraints: {}
        }
    },
    methods: {
        // async recordScreen() {
        //     const stream = await navigator.mediaDevices.getDisplayMedia({
        //         video: { MediaSource: "screen" }
        //     })

        //     const recorder = new MediaRecorder(stream)

        //     const chunks = [];

        //     recorder.ondataavailable = e => chunks.push(e.data)
        //     recorder.start()

        //     recorder.onstop = e => {
        //         const completeBlob = new Blob(chunks, { type:chunks[0].type})
        //         video.src=URL.createObjectURL(completeBlob)
        //     }
        // },

        async startRecording() {
            const screen = document.querySelector('#screen')
            const camera = document.querySelector('#camera')

            try {
                screen.srcObject = Object.keys(this.screenConstraints).length != 0 ? 
                                        await navigator.mediaDevices.getDisplayMedia(this.screenConstraints) : null

                camera.srcObject = Object.keys(this.cameraConstraints).length != 0 ? 
                                        await navigator.mediaDevices.getUserMedia(this.cameraConstraints) : null

            } catch (e) {
                console.log(e.toString())
            }
        },

        stopRecording() {
            const video = document.querySelector('video')

            let tracks = video.srcObject.getTracks()

            tracks.forEach(track => track.stop())

            video.srcObject = null
        },
    },
    mounted() {
        if(this.$route.params.recordScreen == 'true') {
            this.screenConstraints.video = true
        }   
        
        if(this.$route.params.recordCamera == 'true') {
            this.cameraConstraints.video = true
        }

        if(this.$route.params.recordMic == 'true') {
            this.cameraConstraints.audio = { 
                echoCancellation: true, 
                noiseSuppression: true, 
                sampleRate: 44100 
            }
        }

        this.startRecording()
    }
}
</script>

<style lang="scss" scoped>
    .overlay {
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(117deg, rgba(13, 171, 216, 1) 0%, rgba(234, 250, 255, 1) 0%, rgba(211, 245, 254, 0.25) 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .live {
            width: 910px;
            height: 488px;
            background: #21455E;
            border: 1px solid #21455E;
            border-radius: 8px;
            position: relative;

            .on {
                font-size: 14px;
                line-height: 26px;
                color: #637C8E;
                margin-top: -35px;

                img {
                    margin-right: 5px;
                }
            }

            #screen {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                border-radius: 8px;
            }

            #camera {
                position: absolute;
                width: 180px;
                height: 140px;
                right: 0;
                bottom: 0;
            }
        }

        .btn {
            background: rgba(13, 171, 216, 0.25);
            margin-top: 68px;
            width: 234px;
            height: 63px;
            font-weight: 600px;
            font-size: 20px;
            line-height: 27px;
        }
    }
</style>