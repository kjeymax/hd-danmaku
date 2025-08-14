    <script>
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
                // Create a container for the ad
                const adDiv = document.createElement('div');
                adDiv.id = 'ad-wrapper';
                
                // Create the first script tag
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
                
                // Create the second script tag
                const script2 = document.createElement('script');
                script2.type = 'text/javascript';
                script2.src = 'https://hushclosing.com/dy6fmr72?key=aa516ec777ff333a89904f0a5ff57eb3';
                
                // Add scripts to the ad container
                adDiv.appendChild(script1);
                adDiv.appendChild(script2);
                adContainer.appendChild(adDiv);
                
                // Prevent scripts from closing the popup
                script2.onload = function() {
                    // Monitor for attempts to close the popup
                    monitorPopupClosure();
                };
            }
            
            // Function to monitor and prevent popup closure
            function monitorPopupClosure() {
                // Check if popup is still active every second
                const monitorInterval = setInterval(function() {
                    if (!popup.classList.contains('active') && !popupClosed) {
                        // If popup was closed externally, reopen it
                        popup.classList.add('active');
                    }
                    
                    // Stop monitoring after 30 seconds
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
            
            // Close pop-up when clicking the X button
            closeBtn.addEventListener('click', function() {
                openAdInNewTab();
            });
            
            // Close pop-up when clicking outside the container
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    openAdInNewTab();
                }
            });
            
            // Close pop-up when clicking the skip button
            skipButton.addEventListener('click', function() {
                if (!skipButton.disabled) {
                    openAdInNewTab();
                }
            });
            
            // Function to open ad in new tab
            function openAdInNewTab() {
                window.open('https://hushclosing.com/dy6fmr72?key=aa516ec777ff333a89904f0a5ff57eb3', '_blank');
            }
            
            // Cookie functions to limit pop-up frequency
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
                for(let i = 0; i < ca.length; i++) {
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
            
            // Check if user has seen the pop-up in the last 24 hours
            if (getCookie('adPopupShown') !== 'true') {
                // Don't automatically show the popup here, we'll handle it after 3 seconds
                setCookie('adPopupShown', 'true', 1);
            }
        });
