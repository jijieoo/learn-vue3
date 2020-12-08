export default function useMatchRoom() {
    function initSocket() {
        const socket = new WebSocket('ws://localhost:3000', ['token=123;', 'id=444;']);

        socket.onopen = () => {
            console.log(socket);
            socket.send(
                JSON.stringify({
                    event: 'events',
                    data: 'test',
                }),
            );
        };

        socket.onmessage = (event) => {
            console.log(event);
        };
    }

    return {
        initSocket,
    };
}
