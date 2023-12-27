const dialog = document.querySelector(".modal");

const showDialog = () => {
    dialog.showModal();
};

const closeDialog = () => {
    dialog.close();
};

const openModal = () => {};

const addItem = (event) => {
    if (event.target.classList.contains("add-item")) showDialog();
};

document.addEventListener("click", addItem);

let speechSpeed = 1.0;

const readText = () => {
    const content = document.getElementById("content").value;

    // Web Speech API를 지원하는지 확인
    if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = content;

        // 한국어로 읽도록 설정
        speech.lang = "ko-KR";

        // 읽기 속도 설정
        speech.rate = speechSpeed;

        // 읽기 시작
        window.speechSynthesis.speak(speech);
    } else {
        alert("죄송합니다. 읽기 기능을 사용하시려면 다른 브라우저를 이용해주세요.");
    }
};

const changeSpeed = (type) => {
    if (type === "increase") {
        speechSpeed += 0.1;
    } else if (type === "decrease") {
        speechSpeed -= 0.1;
    }

    // 최소 및 최대 속도 제한 (0.1에서 10까지)
    speechSpeed = Math.max(0.1, Math.min(10, speechSpeed));

    document.querySelector("h3").innerText = `읽기 속도: ${speechSpeed.toFixed(1)}`;
};

const itemList = document.querySelector(".read-list");

itemList.addEventListener("click", (event) => {
    const itemText = event.target.closest(".item__text ");
    itemText.classList.toggle("expanded");
});
