//fonts
import '@fontsource/rubik';
import '@fontsource/epilogue';

//typewritter effect
export function typeWritter(word: string, element: string, speed: number = 150) {
    return new Promise((resolve) => {
        const dot = document.querySelector("span#red-dot");
        let index: number = 0;
        const text: HTMLElement = document.querySelector(`#${element}`);
        let interval_timer = setInterval(() => {
            if (index < word.length) {
                text.innerHTML += word.charAt(index);
                index++;
            }else {
                if (element === 'third-line') dot.classList.toggle('hidden');
                clearInterval(interval_timer);
                resolve(1000);
            }
        }, speed);
    })
}