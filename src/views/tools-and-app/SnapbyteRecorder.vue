<template>
    <main>
        <Sidebar />
        <div class="content">
            <RecordMenu :recordings="recordings.length" />
            <Recordings :recordings="recordings" />
        </div>
    </main>
</template>

<script>
import Sidebar from '@/components/tools-and-app/snapbyte/RecordSidebar.vue'
import RecordMenu from '@/components/tools-and-app/snapbyte/RecordMenu.vue'
import Recordings from '@/components/tools-and-app/snapbyte/Recordings.vue'

export default {
    name: 'Snapbyte',
    components: {
        Sidebar,
        RecordMenu,
        Recordings
    },
    data() {
        return {
            recordings: [
                {
                    'thumbnail': '/images/thumbnail-1.jpg',
                    'name': 'Getting it right the first time',
                    'description': 'The video description for getting it right the first time.',
                    'views': 588,
                    'size': '12800 KB',
                    'duration': '12:30',
                    'last_modified': '3 months ago',
                },
                {
                    'thumbnail': '/images/thumbnail-2.jpg',
                    'name': 'Getting it right the second time',
                    'description': 'The video description for getting it right the second time.',
                    'views': 324,
                    'size': '10564 KB',
                    'duration': '10:18',
                    'last_modified': '3 months ago',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .content {
        width: 100%;
    }
</style>