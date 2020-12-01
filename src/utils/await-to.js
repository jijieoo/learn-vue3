export default function to(promise) {
    if (!(promise instanceof Promise)) return new TypeError('Except Promise');
    return promise.then((data) => [null, data]).catch((err) => [err, null]);
}
