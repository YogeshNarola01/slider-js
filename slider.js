let slides = document.querySelectorAll(".slide");
cnt = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${cnt * 100}%)`
    })
}

const goNext = () => {
    cnt--;
    if (cnt < 0) {
        cnt = slides.length - 1;
    }
    slideImage();
}

const goPrev = () => {
    cnt++;
    if (cnt >= slides.length) {
        cnt = 0;
    }
    slideImage();
}
console.log(slides);

// slide1

let slides1 = document.querySelectorAll(".slide1");
let cnt1 = 0;
console.log(slides1);
slides1.forEach((slide1, index) => {
    slide1.style.left = `${index * 100}%`
});

const slideImage1 = () => {
    slides1.forEach((slide1) => {
        slide1.style.transform = `translateX(-${cnt1 * 100}%)`
    })
}

const goNext1 = () => {
    cnt1--;
    if (cnt1 < 0) {
        cnt1 = slides1.length - 1;
    }
    slideImage1();
}
const goPrev1 = () => {
    cnt1++;
    if (cnt1 >= slides1.length) {
        cnt1 = 0;
    }
    slideImage1();
}

//slide2
let slides2 = document.querySelectorAll(".slide2");
let cnt2 = 0;
slides2.forEach((slide2,index) => {
    slide2.style.left = `${index*100}%`
})

const slideImage2 = () => {
    slides2.forEach((slide2) => {
        slide2.style.transform = `translateX(-${cnt2*100}%)`
    })
}

const goNext2 = () => {
    cnt2--;
    if(cnt2 < 0){
        cnt2 = slides2.length -1 ;
    }
    slideImage2();
}

const goPrev2 = () =>{
    cnt2++;
    if(cnt2 >= slides2.length){
        cnt2 = 0;
    }
    slideImage2();
}

