function tap(calc) {
  document.getElementById("inp").value += calc;
}
function eq() {
  let a = document.getElementById("inp");
  a.value = eval(a.value);
}

function clearAll(){
  let b = document.getElementById("inp");
  b.value = "";

}

function clear(){
  let c = document.getElementById("inp");
  c.value.slice() = "";
}

// =========================================================================

// bulb start
// let image = document.querySelector("#image");
// let btn = document.querySelector("button");
// let flag = 0;
// btn.addEventListener("click", function () {
//   if (flag === 0) {
//     image.src =
//       "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg";
//     flag = 1;
//   } else {
//     image.src =
//       "https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=";
//     flag = 0;
//   }
// });

// bulb end