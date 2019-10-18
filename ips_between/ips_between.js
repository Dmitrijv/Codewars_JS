

console.log(ips_between("10.0.0.0", "10.0.0.50")); //   50
//ips_between("10.0.0.0", "10.0.1.0"); //  256
//ips_between("20.0.0.10", "20.0.1.0"); //  246

function ips_between(start, end) {

    start = start.split(".");
    return end.split(".").reduce(function(range, value, index) {
        return range + ((end[index] - start[index]) * ( Math.pow(256, (3-index))));
    }, 0);

}