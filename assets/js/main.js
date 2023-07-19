"use strict";

//# DOM II

//# Level_1_2

const examples = document.querySelectorAll(".example");
const exampleBtn = document.querySelector(".btn");

const changeBgc = () => {
  examples.forEach((example) => {
    example.classList.toggle("bgc");
  });
};

exampleBtn.addEventListener("click", changeBgc);

//# Level_1_3

const myList = document.querySelector("#my_list");
const output = document.querySelector("output");

const untenBtn = document.querySelectorAll(".unten button");
console.log(untenBtn);

untenBtn.forEach((button, i) => {
  switch (i) {
    case 0:
      button.addEventListener("click", () => {
        output.textContent = myList.firstElementChild.textContent;
      });
      break;
    case 1:
      button.addEventListener("click", () => {
        output.textContent = myList.lastElementChild.textContent;
      });
      break;
    case 2:
      button.addEventListener("click", () => {
        output.textContent = myList.firstElementChild.nextElementSibling.textContent;
      });
      break;
    case 3:
      button.addEventListener("click", () => {
        output.textContent = myList.lastElementChild.previousElementSibling.textContent;
      });
      break;
  }
});

//# Level_2_1 / 2_3

const changeMeBtn = document.querySelector("#navChange");

const listContainer = document.querySelector(".listContainer");

changeMeBtn.addEventListener("click", () => {
  listContainer.firstElementChild.firstElementChild.textContent = listContainer.firstElementChild.textContent
    .split("")
    .reverse()
    .join("");
  listContainer.firstElementChild.style.backgroundColor = "peachpuff";
  listContainer.firstElementChild.firstElementChild.style.color = "black";
  listContainer.firstElementChild.nextElementSibling.style.backgroundColor = "#f6c89f";
  listContainer.firstElementChild.nextElementSibling.firstElementChild.style.color = "#666";
  listContainer.lastElementChild.style.backgroundColor = "#4b8e8d";
  listContainer.lastElementChild.firstElementChild.style.color = "#666";
});

//# Level_2_2

const form1 = document.querySelector("#form1");
const firstnameInput = document.querySelector("#vorname");
const lastnameInput = document.querySelector("#nachname");
const countrySelect = document.querySelector("#land");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    `Vorname ist: ${firstnameInput.value} Nachname ist: ${lastnameInput.value} Land ist: ${countrySelect.value}`
  );
});

//# Level_2_6

let data = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5616/3744",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5616/3744",
  },
  {
    id: "10",
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/6J--NXulQCs",
    download_url: "https://picsum.photos/id/10/2500/1667",
  },
  {
    id: "100",
    author: "Tina Rataj",
    width: 2500,
    height: 1656,
    url: "https://unsplash.com/photos/pwaaqfoMibI",
    download_url: "https://picsum.photos/id/100/2500/1656",
  },
  {
    id: "1000",
    author: "Lukas Budimaier",
    width: 5626,
    height: 3635,
    url: "https://unsplash.com/photos/6cY-FvMlmkQ",
    download_url: "https://picsum.photos/id/1000/5626/3635",
  },
  {
    id: "1001",
    author: "Danielle MacInnes",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/1DkWWN1dr-s",
    download_url: "https://picsum.photos/id/1001/5616/3744",
  },
  {
    id: "1002",
    author: "NASA",
    width: 4312,
    height: 2868,
    url: "https://unsplash.com/photos/6-jTZysYY_U",
    download_url: "https://picsum.photos/id/1002/4312/2868",
  },
  {
    id: "1003",
    author: "E+N Photographies",
    width: 1181,
    height: 1772,
    url: "https://unsplash.com/photos/GYumuBnTqKc",
    download_url: "https://picsum.photos/id/1003/1181/1772",
  },
  {
    id: "1004",
    author: "Greg Rakozy",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/SSxIGsySh8o",
    download_url: "https://picsum.photos/id/1004/5616/3744",
  },
  {
    id: "1005",
    author: "Matthew Wiebe",
    width: 5760,
    height: 3840,
    url: "https://unsplash.com/photos/tBtuxtLvAZs",
    download_url: "https://picsum.photos/id/1005/5760/3840",
  },
  {
    id: "1006",
    author: "Vladimir Kudinov",
    width: 3000,
    height: 2000,
    url: "https://unsplash.com/photos/-wWRHIUklxM",
    download_url: "https://picsum.photos/id/1006/3000/2000",
  },
  {
    id: "1008",
    author: "Benjamin Combs",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/5L4XAgMSno0",
    download_url: "https://picsum.photos/id/1008/5616/3744",
  },
  {
    id: "1009",
    author: "Christopher Campbell",
    width: 5000,
    height: 7502,
    url: "https://unsplash.com/photos/CMWRIzyMKZk",
    download_url: "https://picsum.photos/id/1009/5000/7502",
  },
  {
    id: "101",
    author: "Christian Bardenhorst",
    width: 2621,
    height: 1747,
    url: "https://unsplash.com/photos/8lMhzUjD1Wk",
    download_url: "https://picsum.photos/id/101/2621/1747",
  },
  {
    id: "1010",
    author: "Samantha Sophia",
    width: 5184,
    height: 3456,
    url: "https://unsplash.com/photos/NaWKMlp3tVs",
    download_url: "https://picsum.photos/id/1010/5184/3456",
  },
  {
    id: "1011",
    author: "Roberto Nickson",
    width: 5472,
    height: 3648,
    url: "https://unsplash.com/photos/7BjmDICVloE",
    download_url: "https://picsum.photos/id/1011/5472/3648",
  },
  {
    id: "1012",
    author: "Scott Webb",
    width: 3973,
    height: 2639,
    url: "https://unsplash.com/photos/uAgLGG1WBd4",
    download_url: "https://picsum.photos/id/1012/3973/2639",
  },
  {
    id: "1013",
    author: "Cayton Heath",
    width: 4256,
    height: 2832,
    url: "https://unsplash.com/photos/D8LcRLwZyPs",
    download_url: "https://picsum.photos/id/1013/4256/2832",
  },
  {
    id: "1014",
    author: "Oscar Keys",
    width: 6016,
    height: 4000,
    url: "https://unsplash.com/photos/AmPRUnRb6N0",
    download_url: "https://picsum.photos/id/1014/6016/4000",
  },
  {
    id: "1015",
    author: "Alexey Topolyanskiy",
    width: 6000,
    height: 4000,
    url: "https://unsplash.com/photos/-oWyJoSqBRM",
    download_url: "https://picsum.photos/id/1015/6000/4000",
  },
  {
    id: "1016",
    author: "Philippe Wuyts",
    width: 3844,
    height: 2563,
    url: "https://unsplash.com/photos/_h7aBovKia4",
    download_url: "https://picsum.photos/id/1016/3844/2563",
  },
  {
    id: "1018",
    author: "Andrew Ridley",
    width: 3914,
    height: 2935,
    url: "https://unsplash.com/photos/Kt5hRENuotI",
    download_url: "https://picsum.photos/id/1018/3914/2935",
  },
  {
    id: "1019",
    author: "Patrick Fore",
    width: 5472,
    height: 3648,
    url: "https://unsplash.com/photos/V6s1cmE39XM",
    download_url: "https://picsum.photos/id/1019/5472/3648",
  },
  {
    id: "102",
    author: "Ben Moore",
    width: 4320,
    height: 3240,
    url: "https://unsplash.com/photos/pJILiyPdrXI",
    download_url: "https://picsum.photos/id/102/4320/3240",
  },
  {
    id: "1020",
    author: "Adam Willoughby-Knox",
    width: 4288,
    height: 2848,
    url: "https://unsplash.com/photos/_snqARKTgoc",
    download_url: "https://picsum.photos/id/1020/4288/2848",
  },
  {
    id: "1021",
    author: "Frances Gunn",
    width: 2048,
    height: 1206,
    url: "https://unsplash.com/photos/8BmNurlVR6M",
    download_url: "https://picsum.photos/id/1021/2048/1206",
  },
  {
    id: "1022",
    author: "Vashishtha Jogi",
    width: 6000,
    height: 3376,
    url: "https://unsplash.com/photos/bClr95glx6k",
    download_url: "https://picsum.photos/id/1022/6000/3376",
  },
  {
    id: "1023",
    author: "William Hook",
    width: 3955,
    height: 2094,
    url: "https://unsplash.com/photos/93Ep1dhTd2s",
    download_url: "https://picsum.photos/id/1023/3955/2094",
  },
  {
    id: "1024",
    author: "Мартин Тасев",
    width: 1920,
    height: 1280,
    url: "https://unsplash.com/photos/7ALI0RYyq6s",
    download_url: "https://picsum.photos/id/1024/1920/1280",
  },
  {
    id: "1025",
    author: "Matthew Wiebe",
    width: 4951,
    height: 3301,
    url: "https://unsplash.com/photos/U5rMrSI7Pn4",
    download_url: "https://picsum.photos/id/1025/4951/3301",
  },
];

// {
//   id: "0",
//   author: "Alejandro Escamilla",
//   width: 5616,
//   height: 3744,
//   url: "https://unsplash.com/photos/yC-Yzbqy7PY",
//   download_url: "https://picsum.photos/id/0/5616/3744"
// }

const imgBtn = document.querySelector(".img_btn");
const imgOutput = document.querySelector(".img_output");

imgBtn.addEventListener("click", () => {
  imgOutput.textContent = "";
  const randomNumber = Math.floor(Math.random() * data.length);
  console.log(data[randomNumber].url);
  imgOutput.insertAdjacentHTML("beforeend", `<img src="${data[randomNumber].download_url}">`);
});

//# Level_2_7

const addElementsBtn = document.querySelector(".add_elements");
const umwickelnDiv = document.querySelector(".umwickeln");
let counter = 0;

addElementsBtn.addEventListener("click", () => {
  let html = "";
  if (counter % 10 === 0) {
    html = `
    <div class="rechteck weiss">${counter}</div>
    `;
  } else {
    html = `
    <div class="rechteck">${counter}</div>
    `;
  }

  umwickelnDiv.insertAdjacentHTML("beforeend", html);
  counter++;
});

//# Level_2_8

const listInput = document.querySelector("#userinput");
const saveBtn = document.querySelector("#enter");
const einkaufsliste = document.querySelector(".einkaufsliste");
console.log(document.querySelector(".level_2_8 form"));

saveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  einkaufsliste.insertAdjacentHTML("beforeend", `<li>${listInput.value}</li>`);
});

//# Level_2_10

const buttons_2_10 = document.querySelectorAll(".level_2_10 button");
const styleElement = document.querySelector("#element h1");

buttons_2_10.forEach((button, i) => {
  switch (i) {
    case 0:
      button.addEventListener("click", () => {
        styleElement.removeAttribute("class");
        styleElement.classList.add("small");
      });
      break;
    case 1:
      button.addEventListener("click", () => {
        styleElement.removeAttribute("class");
        styleElement.classList.add("middle");
      });
      break;
    case 2:
      button.addEventListener("click", () => {
        styleElement.removeAttribute("class");
        styleElement.classList.add("big_crazy");
      });
      break;
  }
});
