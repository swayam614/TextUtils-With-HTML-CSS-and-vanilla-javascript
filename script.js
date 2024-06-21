document.addEventListener("DOMContentLoaded", function () {
    const myBox = document.getElementById("myBox");
    const convertToUpper = document.getElementById("convertToUpper");
    const convertToLower = document.getElementById("convertToLower");
    const clearText = document.getElementById("clearText");
    const speakText = document.getElementById("speakText");
    const copyText = document.getElementById("copyText");
    const removeExtraSpace = document.getElementById("removeExtraSpace");
    const findAndReplace = document.getElementById("findAndReplace");
    const findWord = document.getElementById("findWord");
    const replaceWord = document.getElementById("replaceWord");
    const wordCount = document.getElementById("wordCount");
    const charCount = document.getElementById("charCount");
    const readTime = document.getElementById("readTime");
    const preview = document.getElementById("previewTextarea");

    let text = "";


    function updatePreview() {
        const text = myBox.value;
        const formattedText = text.replace(/\n/g, "<br>");
        preview.innerHTML = formattedText.length > 0 ? formattedText : "Enter your text to preview";
    }

    
    myBox.addEventListener("input", updatePreview);

    myBox.addEventListener("input", function () {
        text = myBox.value;
        wordCount.textContent = text.split(" ").filter((element) => element.length !== 0).length;
        charCount.textContent = text.length;
        const readingTime = (1 / 125) * text.split(" ").length;
        const roundedReadingTime = readingTime.toFixed(2);
        readTime.textContent = text.length > 0 ? roundedReadingTime : "0.00";
        preview.textContent = text.length > 0 ? text : "Enter your text to preview";
    });

    convertToUpper.addEventListener("click", function () {
        text = text.toUpperCase();
        myBox.value = text;
        updatePreview();
    });

    convertToLower.addEventListener("click", function () {
        text = text.toLowerCase();
        myBox.value = text;
        updatePreview();
    });

    clearText.addEventListener("click", function () {
        text = "";
        myBox.value = text;
        updatePreview();
    });

    speakText.addEventListener("click", function () {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        updatePreview();
    });

    copyText.addEventListener("click", function () {
        myBox.select();
        document.execCommand("copy");
        
    });

        document.getElementById('convertToUpper').addEventListener('click', function() {
            const text = document.getElementById('myBox');
            text.value = text.value.toUpperCase();
        });
        
        document.getElementById('convertToLower').addEventListener('click', function() {
            const text = document.getElementById('myBox');
            text.value = text.value.toLowerCase();
        });
        
        document.getElementById('clearText').addEventListener('click', function() {
            const text = document.getElementById('myBox');
            text.value = '';
        });
        
        document.getElementById('speakText').addEventListener('click', function() {
            const text = document.getElementById('myBox').value;
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
        });
        
        document.getElementById('copyText').addEventListener('click', function() {
            const text = document.getElementById('myBox');
            text.select();
            navigator.clipboard.writeText(text.value);
        });
        
        document.getElementById('removeSpaces').addEventListener('click', function() {
            text = text.replace(/ +/g, ' '); 
            myBox.value = text;
            updatePreview();
            
        });
        
        document.getElementById('findAndReplace').addEventListener('click', function () {
            const text = document.getElementById('myBox').value;
            console.log(text);
            const findWord = document.getElementById('findWord').value;
            const replaceWord = document.getElementById('replaceWord').value;
            const newText = text.replace(new RegExp(findWord, 'g'), replaceWord);
            document.getElementById('myBox').value = newText;
            updatePreview();
        });
        
        
    });
    function formatAsPython(text) {
   
    const lines = text.split('\n');
    let formattedText = '';
    let currentIndentation = 0;

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine.endsWith(':')) {
   
            formattedText += ' '.repeat(currentIndentation) + trimmedLine + '\n';
            currentIndentation += 4;
        } 
        else if (trimmedLine === 'else:' || trimmedLine === 'elif:') {
            formattedText += ' '.repeat(currentIndentation - 4) + trimmedLine + '\n';
        } 
        else if (trimmedLine.startsWith('elif') || trimmedLine.startsWith('except')) {
            currentIndentation -= 4;
            formattedText += ' '.repeat(currentIndentation) + trimmedLine + '\n';
            currentIndentation += 4;
        } 
        else {
            formattedText += ' '.repeat(currentIndentation) + line + '\n';
        }
    }
    
    return formattedText;
}


const formatPythonButton = document.getElementById("formatPython");
formatPythonButton.addEventListener("click", function () {
    const myBox = document.getElementById("myBox");
    const text = myBox.value;
    const formattedText = formatAsPython(text);
    myBox.value = formattedText;
    
    function updatePreview2() {
        const text = myBox.value;
        const formattedText = formatAsPython(text); 
        preview.innerHTML = formattedText.length > 0 ? formattedText : "Enter your text to preview";
    }
    updatePreview2();
    
});
document.getElementById('searchType').addEventListener('change', function () {
    const searchType = this.value;
    const searchInput = document.getElementById('searchInput');

    if (searchType === 'char') {
        searchInput.style.display = 'block';
        document.getElementById('inputText').placeholder = 'Enter character';
    } else {
        searchInput.style.display = 'block';
        document.getElementById('inputText').placeholder = 'Enter word';
    }
});
document.getElementById('inputText').addEventListener('input', function () {
    const searchType = document.getElementById('searchType').value;
    const text = document.getElementById('myBox').value;
    const keyword = this.value;

    if (searchType === 'char') {
        const searchText = text;
        const regex = new RegExp(keyword, 'g');
        const highlightedText = searchText.replace(regex, match => `<mark class="highlighted">${match}</mark>`);
        document.getElementById('previewTextarea').innerHTML = highlightedText;
    } else {
        const searchText = text;
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        const highlightedText = searchText.replace(regex, match => `<mark class="highlighted">${match}</mark>`);
        document.getElementById('previewTextarea').innerHTML = highlightedText;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const myBox = document.getElementById("myBox");
    const preview = document.getElementById("previewTextarea");

    myBox.addEventListener("input", function () {
        const text = myBox.value;
        // Replace line breaks with <br> tags
        const formattedText = text.replace(/\n/g, "<br>");
        preview.innerHTML = formattedText.length > 0 ? formattedText : "Enter your text to preview";
    });
});
