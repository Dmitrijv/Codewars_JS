/*

    Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

    For example:

    nextSmaller(21) // 12
    nextSmaller(531) // 513
    nextSmaller(2071) // 2017

    Return -1 when there is no smaller number that contains the same digits.
    Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

    nextSmaller(9) == -1
    nextSmaller(111) == -1
    nextSmaller(135) == -1
    nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

    Some tests will include very large numbers.
    Test data only employs positive integers.

    https://codereview.stackexchange.com/questions/200617/python-function-to-find-the-next-smaller-number-with-same-set-of-digits

 */

//console.log(nextSmaller(544)); // 1249753
//console.log("expected: ", 454);

//console.log("got", nextSmaller(1721128));
//console.log("expected: ", 1718221);

//console.log("got", nextSmaller(5857));
//console.log("expected: ", 5785);

function nextSmaller(n) {

    console.log(n)

    n = n.toString();
    if (n.length === 1) return -1;

    const chars = n.split("");

    if (n.length === 2) {
        let reverse = reverseString(chars.join(""));
        reverse = trimZeroes(reverse);
        if (reverse.length < n.length) return -1
        reverse = Number(reverse);
        return (reverse < n) ? reverse : -1;
    }

    // all characters are the same
    if (chars.every(char => char === chars[0]) === true) return -1;

    // start from the last digit and find a digit that is not decreasing or equal
    let tailStart;
    let point;
    let tailDigits = [];
    let prefix = [];

    for (let i = chars.length - 1; i > 0; i--) {

        if (!chars[i - 1]) return -1;

        const digit = Number(chars[i]);
        const previousDigit = Number(chars[i - 1]);

        if (previousDigit > digit) {

            tailStart = i;
            console.log({ tailStart });

            prefix = chars.slice(0, tailStart);
            console.log({ prefix });

            tailDigits = chars.slice(tailStart, chars.length);
            console.log({ tailDigits });

            point = Number(chars[i - 1]);
            console.log({ point });

            let replaced = false;
            let target = point - 1;
            console.log({ target });
            while (replaced === false && target >= 0) {

                //for (let index = 0; index < tailDigits.length ; index++) {
                for (let index = 0; index < tailDigits.length; index++) {

                    const element = Number(tailDigits[index]);
                    console.log({ element, target, replaced });

                    if (element === target) {
                        prefix[prefix.length - 1] = tailDigits[index];
                        tailDigits[index] = point + "";
                        console.log("replaced", element, " with ", target);
                        replaced = true;
                        console.log({ tailDigits });
                    }

                    if (replaced === true) break;

                }

                target--;
                console.log("--- new while ---");
                if (replaced === true) break;

            }

            tail = tailDigits.sort(function (a, b) { return Number(b) - Number(a) }).join("");
            break;

        }
    }

    console.log({ prefix, tail });
    let num = prefix.join("") + tail;
    num = trimZeroes(num);

    if (num.length !== chars.length) return -1;
    num = Number(num);

    return (num < n) ? num : -1

    function trimZeroes(str) {
        while (str[0] === "0")
            str = str.slice(1, str.length)
        return str;
    }

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

}