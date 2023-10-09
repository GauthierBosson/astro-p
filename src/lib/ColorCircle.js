class ColorCircle {
    constructor(color, position) {
        this.createCircle(color, position);
    }

    createCircle(color, position) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = color;
        circle.style.width = '200px';
        circle.style.height = '150px';
        circle.style.borderRadius = '50%';
        circle.style.filter = 'blur(150px)';
        circle.style.position = 'absolute';
        circle.style.top = `${position.top}px`;
        circle.style.left = `${position.left}px`;
        circle.setAttribute('aria-hidden', 'true');
        this.animateCircle(circle);
        this.insertCircle(circle);
    }

    getRandomColor() {
        const colors = ['red', 'blue', 'violet'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    insertCircle(circle) {
        const container = document.querySelector('.circle-container');
        container.appendChild(circle);
    }

    animateCircle(circle) {
        const duration = 10;

        // keyframes should start and end at the same place to create a seamless animation
        const keyframes = [
            { transform: 'scale(0.7)', opacity: 0.8 },
            { transform: 'scale(0.9)', opacity: 1 },
            { transform: 'scale(0.7)', opacity: 0.8 }
        ];

        const options = {
            duration: duration * 1000,
            iterations: Infinity
        };
        circle.animate(keyframes, options);
    }
}

const circle = new ColorCircle('red', { top: 70, left: 0});
const circle2 = new ColorCircle('blue', { top: 70, left: 150});
const circle3 = new ColorCircle('violet', { top: 70, left: 400});