import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

document.addEventListener("DOMContentLoaded", () => {
    new KeenSlider(".slider-one", {
        loop: true,
        breakpoints: {
            "(min-width: 320px)": {
                slides: { perView: 2, spacing: 16 }
            },
            "(min-width: 768px)": {
                slides: { perView: 3, spacing: 16 }
            },
            "(min-width: 1280px)": {
                slides: { perView: 5, spacing: 16 }
            }
        },
        created(s) {
            setInterval(() => s.next(), 2500); // auto-scroll every 2.5s
        }
    });

    new KeenSlider(".slider-two", {
        loop: true,
        breakpoints: {
            "(min-width: 320px)": {
                slides: { perView: 2, spacing: 16 }
            },
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 16 }
            }
        },
        created(s) {
            setInterval(() => s.next(), 2500); // auto-scroll every 2.5s
        }
    });
});