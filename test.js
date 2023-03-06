// AdventJS reto 1
// const gifts = ['uno', 'dos', 'tres'];

// function wrapping(gifts) {
//     const wrap = (gift)=>{
//         const  asterisco = '*'.repeat(gift.length + 2)
//         return `${asterisco}\n*${gift}*\n${asterisco}`

//     }
//     return gifts.map(wrap)
// }

// const wrapped = wrapping(gifts)

// console.log(wrapped);

// AdventJS reto 2

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

function countHours(year, holidays) {
  holidays.map((holiday) => {
    const date = new Date(`${holiday}, ${year}`);
    const datenums = date.getDay();
    if (datenums > 0 && datenums < 6);
    return datenums;
  });
}

const extraHours = countHours(year, holidays);

console.log(extraHours);
