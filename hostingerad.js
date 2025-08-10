        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('hostingPopup');
            const closeBtn = document.getElementById('closePopup');
            
            // Show pop-up after 5 seconds
            setTimeout(function() {
                popup.classList.add('active');
            }, 5000);
            
            // Close pop-up when clicking the X button
            closeBtn.addEventListener('click', function() {
                popup.classList.remove('active');
            });
            
            // Close pop-up when clicking outside the container
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    popup.classList.remove('active');
                }
            });
            
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
            
            // Check if user has seen the pop-up in the last 7 days
            if (getCookie('hostingPopupShown') !== 'true') {
                setTimeout(function() {
                    popup.classList.add('active');
                    setCookie('hostingPopupShown', 'true', 7);
                }, 5000);
            }
            
            // Optional: Show pop-up again when user tries to leave the page
            document.addEventListener('mouseleave', function(e) {
                if (e.clientY < 0 && getCookie('exitHostingPopupShown') !== 'true') {
                    popup.classList.add('active');
                    setCookie('exitHostingPopupShown', 'true', 7);
                }
            });
        });
