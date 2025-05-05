const btnno = document.getElementById("no");
const btnyes = document.getElementById("yes");
btnno.onmousemove = () =>{
    const x = window.innerWidth;
    const y = window.innerHeight;

    const randomx = Math.floor(Math.random() * (x-100));
    const randomy = Math.floor(Math.random() * (y-50));

    btnno.style.left = `${randomx}px`;
    btnno.style.top = `${randomy}px`;

    btnyes.onclick = () =>{
        window.open("https://youtu.be/NwFVSclD_uc?si=OF42kg4pdCmuAbpH","_self");
    }
}