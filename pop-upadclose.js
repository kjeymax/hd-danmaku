document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('adPopup');
    const closeBtn = document.getElementById('closePopup');
    const skipButton = document.getElementById('skipButton');
    const countdownElement = document.getElementById('countdown');
    const adContainer = document.getElementById('adContainer');
    
    let countdown = 10;
    let countdownInterval;
    let popupClosed = false;
    
    // Function to load the ad script
    function loadAdScript() {
        const adDiv = document.createElement('div');
        adDiv.id = 'ad-wrapper';
        
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.text = `
            atOptions = {
                'key' : 'd66d81ed239ad2dd473115c64be0a8e8',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        `;
        
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = 'https://atecomprisedispel.com/jr5y0xrjj?key=28a024cba570da0bce2522216cfa0208';
        
        adDiv.appendChild(script1);
        adDiv.appendChild(script2);
        adContainer.appendChild(adDiv);
        
        script2.onload = function() {
            monitorPopupClosure();
        };
    }
    
    // Monitor popup closure attempts
    function monitorPopupClosure() {
        const monitorInterval = setInterval(function() {
            if (!popup.classList.contains('active') && !popupClosed) {
                popup.classList.add('active');
            }
            if (countdown <= -20) {
                clearInterval(monitorInterval);
            }
        }, 1000);
    }
    
    // Show pop-up after 3 seconds
    setTimeout(function() {
        popup.classList.add('active');
        loadAdScript();
        startCountdown();
    }, 3000);
    
    // Start countdown timer
    function startCountdown() {
        countdownInterval = setInterval(function() {
            countdown--;
            countdownElement.textContent = countdown > 0 ? countdown : 0;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                skipButton.disabled = false;
                skipButton.textContent = "Close Ad";
            }
        }, 1000);
    }
    
    // Close pop-up when clicking the X button (opens ad)
    closeBtn.addEventListener('click', function() {
        window.open('https://atecomprisedispel.com/jr5y0xrjj?key=28a024cba570da0bce2522216cfa0208', '_blank');
        closePopup();
    });
    
    // Close pop-up when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            window.open('https://atecomprisedispel.com/jr5y0xrjj?key=28a024cba570da0bce2522216cfa0208', '_blank');
            closePopup();
        }
    });
    
    // Close pop-up when clicking the skip button
    skipButton.addEventListener('click', function() {
        if (!skipButton.disabled) {
            closePopup();
        }
    });
    
    // Function to close the popup
    function closePopup() {
        popup.classList.remove('active');
        clearInterval(countdownInterval);
        popupClosed = true;
    }
    
    // Cookie functions
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
    
    // Limit pop-up frequency
    if (getCookie('adPopupShown') !== 'true') {
        setCookie('adPopupShown', 'true', 1);
    }
});
