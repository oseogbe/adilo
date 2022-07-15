<template>
    <div class="sidebar">
        <div class="d-grid gap-4">
            <button class="btn btn-1">
                <img src="@icons/video-player.svg" alt="video-player">
                <span>My Recordings</span>
            </button>
            <button class="btn btn-2">
                <img src="@icons/share.svg" alt="requested">
                <span>Requested</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        min-width: 306px;
        background: rgba(235, 242, 246, 0.3);
        padding: 38px 12px 38px 18px;
        border-right: 2px solid rgba(33, 69, 94, 0.3);

        .btn {
            border-radius: 10px;
            font-weight: 300;
            font-size: 16px;
            line-height: 25px;
            color: #21455E;
            text-align: left;
            height: 53px;

            img {
                margin-left: 40px;
                margin-right: 14px;
            }

            &:focus {
                outline: 0;
                box-shadow: none;
            }
        }

        .btn-1 {
            background: #E2E5ED ;
            border: 1px solid #0DABD838;
        }
    }

    
</style>