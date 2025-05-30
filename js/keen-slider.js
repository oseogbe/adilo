import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

document.addEventListener("DOMContentLoaded", () => {
    new KeenSlider(".slider-one", {
        loop: true,
        slides: {
            perView: 5,
            spacing: 16,
        },
        created(s) {
            setInterval(() => s.next(), 2500); // auto-scroll every 2.5s
        }
    });

    new KeenSlider(".slider-two", {
        loop: true,
        slides: {
            perView: 6,
            spacing: 16,
        },
        created(s) {
            setInterval(() => s.next(), 2500); // auto-scroll every 2.5s
        }
    });
});