        // Pop-up functionality
        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('amazonPopup');
            const closeBtn = document.getElementById('closePopup');
            
            // Show pop-up after 3 seconds
            setTimeout(function() {
                popup.classList.add('active');
            }, 3000);
            
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
            
            // Optional: Show pop-up again after 24 hours
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
            if (getCookie('popupShown') !== 'true') {
                setTimeout(function() {
                    popup.classList.add('active');
                    setCookie('popupShown', 'true', 1);
                }, 3000);
            }
        });
