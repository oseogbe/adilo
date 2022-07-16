<template>
    <main>
        <div class="overlay">
            <div class="live">
                <div class="on">
                    <img src="@icons/record-circle-red.svg" alt="record-circle-red">
                    Live Preview
                </div>
            </div>
            <button class="btn btn-blue">Start Recording</button>
        </div>
    </main>
</template>

<script>
export default {

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

        .on {
            font-size: 14px;
            line-height: 26px;
            color: #637C8E;
            margin-top: -35px;

            img {
                margin-right: 3px;
            }
        }

        .live {
            width: 910px;
            height: 488px;
            background: #21455E;
            border-radius: 8px;
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