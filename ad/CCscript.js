document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const wordCount = document.getElementById('wordCount');
    const lineCount = document.getElementById('lineCount');
    const transformButtons = document.querySelectorAll('.btn-transform');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const clearBtn = document.getElementById('clearBtn');
    const toast = document.getElementById('toast');

    // Update stats on input
    textInput.addEventListener('input', updateStats);

    function updateStats() {
        const text = textInput.value;
        
        // Character count
        charCount.textContent = `${text.length} Characters`;

        // Word count
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        wordCount.textContent = `${words} Words`;

        // Line count
        const lines = text === '' ? 0 : text.split(/\r\n|\r|\n/).length;
        lineCount.textContent = `${lines} Lines`;
    }

    // Transform buttons event listeners
    transformButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const text = textInput.value;
            if (!text) return;

            let result = '';

            switch (action) {
                case 'sentence':
                    result = toSentenceCase(text);
                    break;
                case 'lower':
                    result = text.toLowerCase();
                    break;
                case 'upper':
                    result = text.toUpperCase();
                    break;
                case 'capitalized':
                    result = toCapitalizedCase(text);
                    break;
                case 'alternating':
                    result = toAlternatingCase(text);
                    break;
                case 'title':
                    result = toTitleCase(text);
                    break;
                case 'inverse':
                    result = toInverseCase(text);
                    break;
            }

            textInput.value = result;
            updateStats();
        });
    });

    // Transformation Functions
    function toSentenceCase(str) {
        return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
            return c.toUpperCase();
        });
    }

    function toCapitalizedCase(str) {
        return str.toLowerCase().replace(/\b\w/g, function(c) {
            return c.toUpperCase();
        });
    }

    function toAlternatingCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                result += str[i].toLowerCase();
            } else {
                result += str[i].toUpperCase();
            }
        }
        return result;
    }

    function toTitleCase(str) {
        const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of'];
        return str.toLowerCase().replace(/\w+/g, function(word, index) {
            if (index > 0 && minorWords.includes(word)) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
    }

    function toInverseCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (char === char.toUpperCase()) {
                result += char.toLowerCase();
            } else {
                result += char.toUpperCase();
            }
        }
        return result;
    }

    // Action Buttons
    copyBtn.addEventListener('click', () => {
        if (!textInput.value) return;
        
        navigator.clipboard.writeText(textInput.value).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    downloadBtn.addEventListener('click', () => {
        if (!textInput.value) return;
        
        const blob = new Blob([textInput.value], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted-text.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        updateStats();
        textInput.focus();
    });

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});
