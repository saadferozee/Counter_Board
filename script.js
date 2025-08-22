function countUp () {
    const y = document.getElementById('now');
    const z = document.getElementById('next');

    y.innerText = parseInt(y.innerText) + 1;
    z.innerText = parseInt(y.innerText) + 1;
}

function countDown () {
    const y = document.getElementById('now');
    const z = document.getElementById('next');

    y.innerText = parseInt(y.innerText) - 1;
    z.innerText = parseInt(y.innerText) + 1;
}

function reset () {
    const y = document.getElementById('now');
    const z = document.getElementById('next');

    y.innerText = parseInt('00');
    z.innerText = parseInt(y.innerText) + 1;
}