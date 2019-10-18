/*

In this Kata, you will be given a series of times at which an alarm goes off.
Your task will be to determine the maximum time interval between alarms.
Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute.
The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.

solve(["23:00","04:22","18:05","06:24"]) == "11:40".
The max interval that the alarm will not go off is 11 hours and 40 minutes.

In the second example, the alarm goes off 4 times in a day.
More examples in test cases. Good luck!

 */

const ALARM_DURATION_SECONDS = 60;

//console.log(solve(["14:51"])); // "23:59"
console.log(solve(["23:00","04:22","18:05","06:24"])); // "11:40"
//let ret = solve([ '06:25', '14:51', '15:30', '15:34', '21:14' ]); // 09:10



function solve(arr){

    if (arr.length === 1) return secondsToTime((24*60*60)-ALARM_DURATION_SECONDS);

    const longestDif = arr.sort().reduce(function(longestTime, time, index) {
        let dif = (index === (arr.length-1)) ? timeDifInSeconds(time, arr[0], true) : timeDifInSeconds(time, arr[index+1])
        if (dif > longestTime)
            return dif;
        return longestTime;
    },0);

    return secondsToTime(longestDif-ALARM_DURATION_SECONDS);

    function timeDifInSeconds(start, end, newDay) {
        let timeStart = new Date("10/18/2019 " + start);
        let timeEnd = (newDay === true) ? new Date("10/19/2019 " + end) : new Date("10/18/2019 " + end);
        return Math.abs(timeEnd - timeStart) / 1000 ;
    }

    function secondsToTime(sec_num) {
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        return hours+':'+minutes;
    }
}
