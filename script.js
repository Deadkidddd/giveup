//types text
document.getElementById("cult_1_screen").innerHTML = "Cult 1";
document.getElementById("cult_2_screen").innerHTML = "Cult 2";
document.getElementById("home_btn").innerHTML = "Home";
document.getElementById("conclusion_btn").innerHTML = "conclusion";

//buttons for screen switches
document.getElementById("conclusion_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "conclusion.html"; }, 1000);
};

document.getElementById("home_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "index.html"; }, 1000);
};

document.getElementById("cult_1_screen").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "cult1description.html"; }, 1000);
}

document.getElementById("cult_2_screen").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "cult2description.html"; }, 1000);
}

//transition between screens animation
let glitched_cat = document.getElementById("glitched_cat");
let body_glitch = document.getElementById("body");

function glitch(){
  if(glitched_cat) {
    glitched_cat.style.animation = "glitched_cat_animation 1s infinite";
  }
}

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("cat_slideshow");
  if(slides.length === 0) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

let dropdownMenu = document.getElementById("dropdown");
let background = document.getElementById("background");

function showDropdown() {
  if(dropdownMenu && background) {
    dropdownMenu.style.display = "block";
    background.style.display = "block";
  }
}

// Add dropdown triggers only if elements exist
let catSlides = document.getElementsByClassName("cat_slideshow");
for(let i = 0; i < catSlides.length; i++) {
  catSlides[i].onclick = showDropdown;
}

// Initialize page-specific elements
function initCult1Page() {
  let member1 = document.getElementById("member_1");
  let leaders1 = document.getElementById("leaders_1");
  let ends1 = document.getElementById("ends_1");

  if(member1) member1.onclick = () => document.getElementById("member_1_p").style.display = "block";
  if(leaders1) leaders1.onclick = () => document.getElementById("leaders_1_p").style.display = "block";
  if(ends1) ends1.onclick = () => document.getElementById("ends_1_p").style.display = "block";
}

function initCult2Page() {
  let member2 = document.getElementById("member_2");
  let leaders2 = document.getElementById("leaders_2");
  let ends2 = document.getElementById("ends_2");

  if(member2) member2.onclick = () => document.getElementById("member_2_p").style.display = "block";
  if(leaders2) leaders2.onclick = () => document.getElementById("leaders_2_p").style.display = "block";
  if(ends2) ends2.onclick = () => document.getElementById("ends_2_p").style.display = "block";
}

function initConclusionPage() {
  let sources = document.getElementById("sources");
  if(sources) {
    sources.onclick = () => document.getElementById("sources_list").style.display = "block";
  }
}

// Initialize based on current page
if(window.location.pathname.includes("cult1description")) {
  initCult1Page();
} else if(window.location.pathname.includes("cult2description")) {
  initCult2Page();
} else if(window.location.pathname.includes("conclusion")) {
  initConclusionPage();
}

//img popup code to make people go insane(I am not mentally sanios)
//definitions
let img_1 = document.getElementById("first_img");
let img_2 = document.getElementById("second_img");
let img_3 = document.getElementById("third_img");
let img_4 = document.getElementById("fourth_img");
let img_5 = document.getElementById("fifth_img");
let img_6 = document.getElementById("six_image");
let img_7 = document.getElementById("seven_img");
let img_8 = document.getElementById("eight_img");
let img_9 = document.getElementById("nine_img");
let img_10 = document.getElementById("ten_img");
let img_11 = document.getElementById("eleven_img");
let img_12 = document.getElementById("twelve_img");
let img_13 = document.getElementById("thirteen_img");
let img_14 = document.getElementById("fourteen_img");
let img_15 = document.getElementById("fifteen_img");

let sources = document.getElementById("sources");
//functions
//idk i gave up on life
time = 200;

function img_1_popup(){
  setTimeout(function() {img_1.style.display = "block";}, time+1808);
}

function img_2_popup(){
  setTimeout(function() {img_2.style.animation = "glitch_in .1s 2";}, time+1820);
  setTimeout(function() {img_2.style.opacity = "3%";}, time+1820);
  setTimeout(function() {img_2.style.opacity = "5%";}, time+1821);
  setTimeout(function() {img_2.style.animation = "fadein 4s 1";}, time+1822);
  setTimeout(function() {img_2.style.opacity = "100";}, time+1822)
  setTimeout(function() {img_2.style.display = "block";}, time+1822);
}

function img_3_popup(){
  setTimeout(function() {img_3.style.animation = "fadein 2s 1";}, 3500);
  setTimeout(function() {img_3.style.display = "block";}, 4000);
  setTimeout(function() {img_3.style.opacity = "80%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "90%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "99%";}, 4100);
}

function img_4_popup(){
  setTimeout(function() {img_4.style.display = "block";}, time+2000);
}
function img_5_popup(){
  setTimeout(function() {img_5.style.display = "block";}, 2004);
  setTimeout(function() {img_5.style.animation = "glitch_in 2s 2";}, 2004);
  setTimeout(function() {img_5.style.zIndex = "13";}, 2004);
}
function img_6_popup(){
  setTimeout(function() { img_6.style.display = "block";}, time);
  setTimeout(function() { img_6.style.animation = "glitch_in 1s 2";}, time);
  setTimeout(function() {img_6.style.animation = "fadeout 4s 1";}, 2000);
  setTimeout(function() {img_6.style.width = "20%";}, 2002);
  setTimeout(function() {img_6.style.height = "20%";}, 2002);
  setTimeout(function() {img_6.style.animation = "fadein 4s 1";}, 2002);
}
function img_7_popup(){
  setTimeout(function() {img_7.style.display = "block";}, 2004);
  setTimeout(function() {img_7.style.opacity = "10%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "20%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "40%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "50%";}, 2004)
}
function img_8_popup(){
  setTimeout(function() {img_8.style.display = "block";}, 2003);
}
function img_9_popup(){
  setTimeout(function() {img_9.style.display = "block";}, 2004);
}
function img_11_popup(){
  setTimeout(function() {img_11.style.display = "block";}, time+300);
  setTimeout(function() {img_11.style.animation = "fadein 2s 1";}, time+300);
}
function img_13_popup(){
  setTimeout(function() {img_13.style.animation = "jumpscare 2s 1";}, 2004);
  setTimeout(function() {img_13.style.display = "block";}, 2004);
  setTimeout(function() {img_13.style.animation = "fade_out 3s 1";}, 2020);
  setTimeout(function() {img_13.style.opacity = "80%";}, 2022);
}
function img_14_popup(){
  setTimeout(function() {img_14.style.animation = "fadein 2s 1";}, 2021);
  setTimeout(function() {img_14.style.display = "block";}, 2021);
}
function img_15_popup(){
  setTimeout(function() {img_15.style.display = "block";}, 2004);
  setTimeout(function() {img_15.style.opacity = "80%";}, 2004);
}

sources.onclick = 
  function(){
    img_1_popup();
    img_2_popup();
    img_3_popup();
    img_4_popup();
    img_5_popup();
    img_6_popup();
    img_7_popup();
    img_8_popup();
    img_9_popup();
    img_11_popup();
    img_13_popup();
    img_14_popup();
    img_15_popup();
  }
  //Aventy and Ratio popups
  /*setTimeout(function() { img_6.style.display = "block";}, time);
  setTimeout(function() { img_6.style.animation = "glitch_in 1s 2";}, time);
  */
  /*setTimeout(function() {img_11.style.display = "block";}, time+300);
  setTimeout(function() {img_11.style.animation = "fadein 2s 1";}, time+300);
  //setTimeout(function() {img_4.style.display = "block";}, time+2000);
  //setTimeout(function() {img_6.style.animation = "fadeout 4s 1";}, 2000);
  setTimeout(function() {img_11.style.animation = "fadeout 4s 1";}, 2000);
  setTimeout(function() {img_11.style.display = "none";}, 2004);
  /*setTimeout(function() {img_5.style.display = "block";}, 2004);
  setTimeout(function() {img_5.style.animation = "glitch_in 2s 2";}, 2004);
  setTimeout(function() {img_5.style.zIndex = "13";}, 2004);
  */
  //setTimeout(function() {img_9.style.display = "block";}, 2004);
  /*setTimeout(function() {img_7.style.display = "block";}, 2004);
  setTimeout(function() {img_7.style.opacity = "10%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "20%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "40%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "50%";}, 2004)
  /*setTimeout(function() {img_6.style.width = "20%";}, 2002);
  setTimeout(function() {img_6.style.height = "20%";}, 2002);
  setTimeout(function() {img_6.style.animation = "fadein 4s 1";}, 2002);
  */
  //setTimeout(function() {img_8.style.display = "block";}, 2003);
  //setTimeout(function() {img_13.style.animation = "jumpscare 2s 1";}, 2004);
  //setTimeout(function() {img_13.style.display = "block";}, 2004);
  //setTimeout(function() {img_15.style.display = "block";}, 2004);
  //setTimeout(function() {img_15.style.opacity = "80%";}, 2004);
  //setTimeout(function() {img_1.style.display = "block";}, 2008)
  //setTimeout(function() {img_13.style.animation = "fade_out 3s 1";}, 2020);
  //setTimeout(function() {img_2.style.animation = "glitch_in .1s 2";}, 2020);
  //setTimeout(function() {img_2.style.opacity = "3%";}, 2020);
  /*setTimeout(function() {img_14.style.animation = "fadein 2s 1";}, 2021);
  setTimeout(function() {img_14.style.display = "block";}, 2021);
  /*setTimeout(function() {img_2.style.opacity = "5%";}, 2021);
  setTimeout(function() {img_2.style.animation = "fadein 4s 1";}, 2022);
  setTimeout(function() {img_2.style.opacity = "100";}, 2022)
  setTimeout(function() {img_2.style.display = "block";}, 2022);
  */
  //setTimeout(function() {img_13.style.opacity = "80%";}, 2022);
  

/*setTimeout(function() {img_3.style.animation = "fadein 2s 1";}, 3500);
  setTimeout(function() {img_3.style.display = "block";}, 4000);
  setTimeout(function() {img_3.style.opacity = "80%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "90%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "99%";}, 4100);
*/

