document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", function() {
        const yourName = document.getElementById("yourName").value;
        const crushName = document.getElementById("crushName").value;
        const status = document.querySelector('input[name="status"]:checked').value;

        if (status === "Single") {
            document.getElementById("resultText").textContent = `Hey, ${yourName}, first go get a partner and come!`;
        } else {
            const pickupLines = [
                "Are you a magician? Because whenever I look at you, everyone else disappears.",
                "Do you have a map? Because I just got lost in your eyes.",
                "Is your name Wi-Fi? Because I'm really feeling a connection.",
                "Are you a campfire? Because you're hot and I want s'more.",
                "Do you believe in love at first sight, or should I walk by again?",
                "Is your name Google? Because you have everything I've been searching for.",
                "Are you a bank loan? Because you have my interest.",
                "Do you have a name, or can I call you mine?",
                "Is your dad a baker? Because you're a cutie pie!",
                "Are you made of copper and tellurium? Because you're Cu-Te.",
                "If you were a vegetable, you'd be a cute-cumber!",
                "Can you take a picture with me? I want to prove to my friends that angels are real.",
                "Are you French? Because Eiffel for you.",
                "I must be a snowflake because I've fallen for you.",
                "Do you have a sunburn, or are you always this hot?",
                "Is your name Ariel? Because we mermaid for each other.",
                "Are you a time traveler? Because I can see you in my future.",
                "I'm not a photographer, but I can definitely picture us together.",
                "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
                "Is there an airport nearby, or is that just my heart taking off?",
                "Can I follow you home? Because my parents always told me to follow my dreams.",
                "Is your name Honey? Because you're so sweet.",
                "Do you have a quarter? I want to call my mom and tell her I met the love of my life.",
                "If you were a cat, you'd be purr-fect.",
                "Do you have a name, or can I call you mine?",
                "Is your name Cinderella? Because your smile is magical.",
                "Do you have a name, or can I call you mine?",
                "Are you Australian? Because when I look at you, I feel like I'm down under.",
                "Do you come with coffee? Because you're brewing up some strong feelings in me.",
                "If beauty were time, you'd be an eternity.",
                "Is your name Autumn? Because you're a real beauty.",
                "Are you a parking ticket? Because you have 'fine' written all over you.",
                "Do you have a map? I just got lost in your eyes.",
                "Is your name Wi-Fi? Because I'm really feeling a connection.",
                "Do you believe in love at first sight, or should I walk by again?",
                "Is your name Google? Because you have everything I've been searching for.",
                "Are you a bank loan? Because you have my interest.",
                "Do you have a name, or can I call you mine?",
                "Is your dad a baker? Because you're a cutie pie!",
                "Are you made of copper and tellurium? Because you're Cu-Te.",
                "If you were a vegetable, you'd be a cute-cumber!",
                "Can you take a picture with me? I want to prove to my friends that angels are real.",
                "Are you French? Because Eiffel for you.",
                "I must be a snowflake because I've fallen for you.",
                "Do you have a sunburn, or are you always this hot?",
                "Is your name Ariel? Because we mermaid for each other.",
                "Are you a time traveler? Because I can see you in my future.",
                "I'm not a photographer, but I can definitely picture us together.",
                "Do you have a name, or can I call you mine?",
                "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
                "Is there an airport nearby, or is that just my heart taking off?",
                "Can I follow you home? Because my parents always told me to follow my dreams.",
                "Is your name Honey? Because you're so sweet.",
                "Do you have a quarter? I want to call my mom and tell her I met the love of my life.",
                "If you were a cat, you'd be purr-fect.",
                "Do you have a name, or can I call you mine?",
                "Is your name Cinderella? Because your smile is magical.",
                "Do you have a name, or can I call you mine?",
                "Are you Australian? Because when I look at you, I feel like I'm down under.",
                "Do you come with coffee? Because you're brewing up some strong feelings in me.",
                "If beauty were time, you'd be an eternity.",
                "Is your name Autumn? Because you're a real beauty.",
                "Are you a parking ticket? Because you have 'fine' written all over you.",
                "Do you have a map? I just got lost in your eyes.",
                "Is your name Wi-Fi? Because I'm really feeling a connection.",
                "Do you believe in love at first sight, or should I walk by again?",
                "Is your name Google? Because you have everything I've been searching for.",
                "Are you a bank loan? Because you have my interest.",
                "Do you have a name, or can I call you mine?",
                "Is your dad a baker? Because you're a cutie pie!",
                "Are you made of copper and tellurium? Because you're Cu-Te.",
                "If you were a vegetable, you'd be a cute-cumber!",
                "Can you take a picture with me? I want to prove to my friends that angels are real.",
                "Are you French? Because Eiffel for you.",
                "I must be a snowflake because I've fallen for you.",
                "Do you have a sunburn, or are you always this hot?",
                "Is your name Ariel? Because we mermaid for each other.",
                "Are you a time traveler? Because I can see you in my future.",
                "I'm not a photographer, but I can definitely picture us together.",
                "Do you have a name, or can I call you mine?",
                "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
                "Is there an airport nearby, or is that just my heart taking off?",
                "Can I follow you home? Because my parents always told me to follow my dreams.",
                "Is your name Honey? Because you're so sweet.",
                "Do you have a quarter? I want to call my mom and tell her I met the love of my life.",
                "If you were a cat, you'd be purr-fect.",
                "Do you have a name, or can I call you mine?",
                "Is your name Cinderella? Because your smile is magical.",
                "Do you have a name, or can I call you mine?",
                "Are you Australian? Because when I look at you, I feel like I'm down under.",
                "Do you come with coffee? Because you're brewing up some strong feelings in me.",
                "If beauty were time, you'd be an eternity.",
                "உங்கள் கை கனமாகத் தெரிகிறது – நான் அதை உங்களுக்காகப் பிடிக்கலாமா?",
                "நீங்கள் நேரப் பயணியா? ஏனென்றால் நான் உன்னை என் எதிர்காலத்தில் பார்க்கிறேன்",
                "உங்கள் பெயர் எனக்குத் தெரியாது, ஆனால் அது உங்களைப் போலவே அழகாக இருக்கிறது என்று நான் நம்புகிறேன்",
                " நான் உன்னை அறிந்தால் மட்டுமே நீ இன்னும் அழகாக இருக்க முடியும் என்று நினைக்கிறேன்"
                
            ];

            const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
            document.getElementById("resultText").textContent = `Hey, my dear ${crushName}, ${randomLine}`;
        }
    });
});
