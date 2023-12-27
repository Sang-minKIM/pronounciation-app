let speechSpeed = 1.0;

export const readItemHandler = (target) => {
    const listItem = target.closest(".item");
    const sentence = listItem.querySelector(".item__text").textContent;

    // Web Speech API를 지원하는지 확인
    if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = sentence;
        speech.lang = "ko-KR";
        speech.rate = speechSpeed;
        window.speechSynthesis.speak(speech);
    } else {
        alert("죄송합니다. 읽기 기능을 사용하시려면 다른 브라우저를 이용해주세요.");
    }
};

export const changeSpeedHandler = (target) => {
    if (target.classList[0] === "menu__speed--high") {
        speechSpeed += 0.1;
    } else if (target.classList[0] === "menu__speed--low") {
        speechSpeed -= 0.1;
    }

    // 최소 및 최대 속도 제한 (0.1에서 10까지)
    speechSpeed = Math.max(0.1, Math.min(10, speechSpeed));

    document.querySelector(".menu__speed__text").innerText = `읽기 속도: ${speechSpeed.toFixed(1)}`;
};
