/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s

 */

console.log(pyramid(3));

function pyramid(n) {
    const pyramid = [];
    for (let i = 1; i <= n; i++) {
        const pyramidLevel = [];
        for (let j = 0; j < i; j++) {
            pyramidLevel.push(1);
        }
        pyramid.push(pyramidLevel)
    }
    return pyramid;
}

/*

function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

 */