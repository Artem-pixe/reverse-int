module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
        n = String(n).split("").reverse();
        n = Number(n.join(""));

        return n;
    } else  { 
        n = String(n).split("").reverse();
        n = Number(n.join(""));

        return n;
    }
}

