const ages = [11, 14, 16, 13, 18];
const ages2 = [13, 24, 12, 25, 16];
const ages3 = [25, 24, 69, 34];
const allAges = ages.concat(ages2).concat(ages3);
//or
const allAges2 = [...ages,...ages2,...ages3];
console.log(allAges);
console.log(allAges2);


const business = 450;
const minister = 400;
const sochib = 500;

const maximum = Math.max(business, minister, sochib);

console.log(maximum);

//alternative

const business2 = 460;
const minister2 = 400;
const sochib2 = 500;

const takaPoisa = [460, 400, 500];
const maximumTaka = Math.max(...takaPoisa);
console.log(maximumTaka);