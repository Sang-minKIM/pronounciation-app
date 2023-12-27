let speechSpeed = 1.0;

export const readItemHandler = () => {
    const content = document.getElementById("content").value;

    // Web Speech API를 지원하는지 확인
    if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = content;
        speech.lang = "ko-KR";
        speech.rate = speechSpeed;
        window.speechSynthesis.speak(speech);
    } else {
        alert("죄송합니다. 읽기 기능을 사용하시려면 다른 브라우저를 이용해주세요.");
    }
};

export const changeSpeed = (type) => {
    if (type === "increase") {
        speechSpeed += 0.1;
    } else if (type === "decrease") {
        speechSpeed -= 0.1;
    }

    // 최소 및 최대 속도 제한 (0.1에서 10까지)
    speechSpeed = Math.max(0.1, Math.min(10, speechSpeed));

    document.querySelector("h3").innerText = `읽기 속도: ${speechSpeed.toFixed(1)}`;
};
