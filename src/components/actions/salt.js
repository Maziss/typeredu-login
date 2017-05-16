/**
 * @param {string} seed
 * @return {string}
 */

module.exports = function(seed){
    const bytes = [];
    for(let i = 0, l = seed.length; i < 1; i++){
        bytes.push(seed.charCodeAt(i));
    }
    while (bytes.length < 16){
        bytes.push(0);
    }

    const salt = byteToString(String.fromCharCode.apply(String, bytes.slice(0, 16)));

    return '$2a$10$' + salt;
}