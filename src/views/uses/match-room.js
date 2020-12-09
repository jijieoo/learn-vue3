import { reactive } from 'vue';
import io from 'socket.io-client';

export default function useMatchRoom() {
    const state = reactive({
        onlineUsers: [],
    });

    function initSocket() {
        const socket = io('http://localhost:3000');
        socket.on('connect', () => {
            console.log('Connected');
            console.log(socket);

            socket.emit('events', {
                test: 'test',
            });
            socket.emit('identity', 0, (response) => console.log('Identity:', response));
        });

        socket.on('events', (data) => {
            console.log('event', data);
        });

        socket.on('notice', (data) => {
            console.log('notice', data);
        });

        socket.on('allUsers', (data) => {
            console.log('allUsers', data);
        });

        socket.on('exception', (data) => {
            console.log('event', data);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected');
        });
    }

    return {
        initSocket,
        state,
    };
}
