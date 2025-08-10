        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('hostingPopup');
            const closeBtn = document.getElementById('closePopup');
            
            // Set countdown end time (3 days from now for demo purposes)
            // Change this to your actual offer end date
            const countDownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
            
            // Update the countdown every 1 second
            const countdownFunction = setInterval(function() {
                // Get today's date and time
                const now = new Date().getTime();
                
                // Find the distance between now and the count down date
                const distance = countDownDate - now;
                
                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Display the result with animation
                animateValue("days", days);
                animateValue("hours", hours);
                animateValue("minutes", minutes);
                animateValue("seconds", seconds);
                
                // If the count down is finished, display some text
                if (distance < 0) {
                    clearInterval(countdownFunction);
                    document.getElementById("countdown").innerHTML = "<div class='countdown-block'><div class='countdown-value'>EXPIRED</div></div>";
                }
            }, 1000);
            
            // Function to animate the countdown values
            function animateValue(id, value) {
                const element = document.getElementById(id);
                const currentValue = parseInt(element.textContent);
                
                // Skip animation if values are the same
                if (currentValue === value) return;
                
                // Format value with leading zero
                const formattedValue = value < 10 ? "0" + value : value;
                
                // Add animation class
                element.style.transform = "scale(1.2)";
                element.style.transition = "transform 0.2s ease";
                
                // Update value
                element.textContent = formattedValue;
                
                // Reset animation
                setTimeout(function() {
                    element.style.transform = "scale(1)";
                }, 200);
            }
            
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
