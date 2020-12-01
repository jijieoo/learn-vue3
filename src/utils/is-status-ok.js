/**
 * 判断 status 是否返回为正确值
 * @param {Number} status Http status
 */
export default function isStatusOk(status = 0) {
    if (Number.isNaN(status)) return new TypeError('status expect number.');
    return Math.floor(status / 100) === 2;
}
