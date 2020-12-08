export default class WebSocketClient extends WebSocket {
    constructor(url = '') {
        const protocols = '123';
        super(url, protocols);
    }
}
