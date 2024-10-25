const btn = document.querySelector(".btn button"); 
const email = document.querySelector("#iEmail");
const pass = document.querySelector("#iPass");

btn.addEventListener("click", () => {
    if (email.value === "" || pass.value === "") {
        btn.innerText = "Pehle data bhar";
        btn.value = "Pehle data bhar";
        btn.style.backgroundColor = "Red";
        btn.style.color = "white";
    } else {
        btn.innerText = "Ha ab thik hai";
        btn.value = "ha ab thik hai";
        btn.style.backgroundColor = "Green";
        btn.style.color = "white";
    };
})