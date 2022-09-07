const swiper = new Swiper('.js-slide-fullwidth', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  effects:"fade",

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, pagination: {
    el: ".swiper-pagination",
    clickable:true
  }

});

const featured = new Swiper('.js-slide-featured', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  effects: "fade",
  spaceBetween:40,

  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  }

});

const offer = new Swiper('.js-slide-offer', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  effects: "fade",
  spaceBetween:40,

  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  }

});

function compareNumbers(x, y) {
  console.log(x > y)
  if (x > y) {
    console.log("larger is ", x);
  }
  else if (x === y) {
    console.log("they are equal")
  }
  else {
    console.log("larger is ", y )
  }

}
//compareNumbers(1, 1);

function findNumber(a, b, c, d, e) {
  if (a > b && a > c && a > d && a > e) {
    console.log("a is найбільше", a)
  }
  else if (b > a && b > c && b > d && b > e) {
    console.log("b найбільше", b)
  }
  else if (c > a && c > b && c > d && c > e) {
    console.log("c найбільше", c)
  }
  else if (d > a && d > b && d > c && d > e) {
    console.log("d найбільше", d)
  }
  else {
    console.log("e найбільше", e)
  }
}
//findNumber(4, 7, 2, 8, 3);

let grates = 0;
let everage = 0;
let studentGrates = [["Tony", 96], ["Mary", 87], ["Igor", 30], ["Jack", 100]];
for (let i = 0; i < studentGrates.length; i++) {
  grates += studentGrates[i][1];
  everage = (grates / studentGrates.length);
}
console.log(grates, everage);
if (everage < 63) {
  console.log("FX");
}
else if (everage < 74) {
  console.log("D");
}
else if (everage < 82) {
  console.log("C");
}
else if (everage < 90) {
  console.log("B");
}
else {
  console.log("A");
}

// for (let x = 0; x <= 15; x++) {
//   // if (x === 0) {
//   //   console.log(x, " is even");
//   // }
//   if (x % 2 === 0) {
//     console.log(x, "is even");
//   }
//   else {
//     console.log(x, "is odd");
//   }
// }

function armstrong() {
  for (let i = 1; i < 10; ++i) {
    for (let t = 0; t < 10; ++t) {
      for (let h = 0; h < 10; ++h) {
        let cub = (Math.pow(i, 3) + Math.pow(t, 3) + Math.pow(h, 3));
        let sum = (i * 100 + t * 10 + h);
        if (cub === sum) {
          console.log(sum);
        }
        console.log(sum);
      }
    }
  }
}
//armstrong()


let addArray= function(newArray) {
  if (newArray.length === 1) {
    return newArray[0];
  }
  else {
    return newArray.pop() + addArray(newArray);
  }
}
console.log(addArray([61, 93, 35, 7, 1, 5]))
