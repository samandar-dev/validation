let input1 = document.querySelector('#name');
let input2 = document.querySelector('#email');
let input3 = document.querySelector('.pass1');
let input4 = document.querySelector('.pass2');
let btn = document.querySelector('.btn')

let erTit1 = document.querySelector('#er-1')
let erTit2 = document.querySelector('#er-2')
let erTit3 = document.querySelector('#er-3')
let erTit4 = document.querySelector('#er-4')

let ch1 = document.querySelector('#ch-1')
let ch2 = document.querySelector('#ch-2')
let ch3 = document.querySelector('#ch-3')
let ch4 = document.querySelector('#ch-4')

// input1.addEventListener('click', fun);
// input2.addEventListener('click', pass);
input3.addEventListener('click', pass);
// input4.addEventListener('submit', pass);
btn.addEventListener('click', pass);


function email(e) {
  e.preventDefault();
  let m;
  m = input2.value;

  // try {
  if (m) {
    console.log(p, p2);
    ch2.classList.add('ch')
    input2.classList.add('v-inp');
    input2.classList.remove('er-inp');
    erTit2.classList.remove('er-blok');
    erTit2.textContent = "*Xato kiritingiz";
    // throw "";
  }
  else {
    ch2.classList.remove('ch')
    input2.classList.remove('v-inp');
    input2.classList.add('er-inp');
    erTit2.classList.add('er-blok');
    erTit2.textContent = "*Xato kiritingiz";
    console.log('no');
    // throw "*Xato kiritingiz";
  }
  // }
  // catch (e) {
  //   return e.textContent = ""
  // }
}



function pass(e) {
  e.preventDefault();
  let p, p2;
  p = input3.value;
  p2 = input4.value;



  // try {
  if (p === p2) {
    console.log(p, p2);
    ch3.classList.add('ch')
    ch4.classList.add('ch')
    input3.classList.add('v-inp');
    input4.classList.add('v-inp');
    erTit3.classList.remove('er-blok');
    erTit4.classList.remove('er-blok');
    // throw "";
  }
  // else if (p.length >= 8 && p2.lenght >= 8) {
  //   // throw "teng";
  // }
  else {
    ch3.classList.remove('ch')
    ch4.classList.remove('ch')
    input3.classList.remove('v-inp');
    input4.classList.remove('v-inp');
    input3.classList.add('er-inp');
    input4.classList.add('er-inp');
    erTit3.classList.add('er-blok');
    erTit4.classList.add('er-blok');
    erTit3.textContent = "*Xato kiritingiz";
    erTit4.textContent = "*Xato kiritingiz";
    console.log('no');
    // throw "*Xato kiritingiz";
  }
  // }
  // catch (e) {
  //   return e.textContent = ""
  // }
}

// function fun1() {
//   let a;
//   a = input1.value.split('');
//   console.log(a);

//   // try {
//   a.forEach(element => {
//     if (element == "") {
//       erTit1.textContent = '*Input bosh';
//       erTit1.classList.add('er-blok');
//       input1.classList.add('er-inp');
//     }
//     if (!isNaN(element)) {
//       erTit1.textContent = '*String kiriting';
//       erTit1.classList.add('er-blok');
//       input1.classList.add('er-inp');
//     }
//     if (element != "" && isNaN(element)) {
//       ch1.classList.add('ch')
//       erTit1.classList.remove('er-blok');
//       input1.classList.remove('er-inp');
//       input1.classList.add('v-inp');
//       erTit1.textContent = '';
//     }
//   });
//   // }
//   // catch (e) {
//   //   return e.message
//   // }



//   // let b;
//   // b = input2.value;

//   // try {
//   //   if (b == '') {
//   //     erTit1.textContent = '*Input bosh';
//   //     erTit1.classList.add('er-blok');
//   //     input1.classList.add('er-inp');
//   //   }
//   //   else {
//   //     ch1.classList.add('ch')
//   //     erTit1.classList.remove('er-blok');
//   //     input1.classList.remove('er-inp');
//   //   }
//   // }
//   // catch (e) {
//   //   return e.b
//   // }
// }

// function pass() {
//   // let p;
//   // p = input1.value.split('');
//   // console.log(p);

//   // try {
//   // p.forEach(element => {
//   //   if (element == "") {
//   //     erTit1.textContent = '*Input bosh';
//   //     erTit1.classList.add('er-blok');
//   //     input1.classList.add('er-inp');
//   //   }
//   //   if (!isNaN(element)) {
//   //     erTit1.textContent = '*String kiriting';
//   //     erTit1.classList.add('er-blok');
//   //     input1.classList.add('er-inp');
//   //   }
//   //   if (element != "" && isNaN(element)) {
//   //     ch1.classList.add('ch')
//   //     erTit1.classList.remove('er-blok');
//   //     input1.classList.remove('er-inp');
//   //     input1.classList.add('v-inp');
//   //     erTit1.textContent = '';
//   //   }
//   // });
//   // }
//   // catch (e) {
//   // return e.message
//   // }
// } pass()
