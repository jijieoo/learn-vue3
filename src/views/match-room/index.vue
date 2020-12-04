<template>
    Match Room
    <el-button @click="send">SEND</el-button>
</template>

<script>
import { ElButton } from 'element-plus';
import { io } from 'socket.io-client';

export default {
    components: {
        ElButton,
    },
    methods: {
        send() {

        },
    },
    mounted() {
        console.log(io);
        const socket = io('http://localhost:3000');

        console.log(socket);
        socket.on('connect', () => {
            console.log('Connected');

            socket.emit('events', {
                test: 'test',
            });
            socket.emit('identity', 0, (response) => console.log('Identity:', response));
        });
        socket.on('events', (data) => {
            console.log('event', data);
        });
        socket.on('exception', (data) => {
            console.log('event', data);
        });
        socket.on('disconnect', () => {
            console.log('Disconnected');
        });
    },
};
</script>
