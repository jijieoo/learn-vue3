<template>
    Match Room
</template>

<script>
import { onMounted } from 'vue';
import useMatchRoom from '../uses/match-room';

export default {
    setup() {
        const { initSocket } = useMatchRoom();

        onMounted(() => {
            initSocket();
        });
    },
};
</script>
