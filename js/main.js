const app = document.getElementById('typewriter');

const typewriter = new typewriter(app, {
    loop: true,
    delay: 200
});

typewriter
 .typeString('MIRADAS CON AMOR')
 .pauseFor(500)
 .start();