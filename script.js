let noResponses = [
    {
        question: "Pls? 🥺",
        options: ["Sige na nga", "Ayoko"],
        img: "6254609c996571a1488e46d1cc702bb5.jpg"
    },
    {
        question: "Sure ka na ba? 🥺👉👈",
        options: ["wla lng tlga akong choice", "kulit!"],
        img: "746d22074e490050b11dd15c43b5cb96.jpg"
    },
    {
        question: "Last chance, promise! 🥺",
        options: ["tigas nang mukha", "Hindi talaga"],
        img: "8248857610db7251980522a5656b8009.jpg"
    },
    {
        question: "Tigas namn ng damdamin mo 🥺💔",
        options: ["kapal nang bagang", "No is no!"],
        img: "c664add2a9b3b05118dcb453c7a6d177.jpg"
    },
    {
        question: "Awa nalang tlga...",
        options: ["Fine...", "Hindi pa rin"],
        img: "d4248382b71ea3da1f3fa07f8844fe39.jpg"
    }
];

let currentStep = 0;

function yesClick() {
    document.getElementById("question").innerText = "wih 👉👈😊";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "May awa ka pala?";
    document.getElementById("option1").innerText = "Yes!!";
    document.getElementById("option2").innerText = "Oo naman!";
}

function noClick() {
    currentStep = 0;
    showNextNoResponse();
}

function showNextNoResponse() {
    if (currentStep < noResponses.length) {
        document.getElementById("question").style.display = "none";
        document.getElementById("buttons").style.display = "none";
        document.getElementById("follow-up").style.display = "block";
        document.getElementById("follow-up-question").innerText = noResponses[currentStep].question;
        document.getElementById("option1").innerText = noResponses[currentStep].options[0];
        document.getElementById("option2").innerText = noResponses[currentStep].options[1];

        let catImg = document.getElementById("cat-img");
        catImg.src = noResponses[currentStep].img;
        catImg.style.display = "block";
    } else {
        document.getElementById("follow-up").style.display = "none";
        document.getElementById("cat-img").src = "d4248382b71ea3da1f3fa07f8844fe39.jpg"; // Pinaka sad na cat
        document.getElementById("cat-img").style.display = "block";
    }
}

function option1Click() {
    alert("Yes!,nahabag kadin");
    document.getElementById("follow-up").style.display = "none";
    document.getElementById("cat-img").style.display = "none";
}

function option2Click() {
    currentStep++;
    showNextNoResponse();
}
