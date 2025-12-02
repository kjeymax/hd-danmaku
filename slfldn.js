
<script>
    
    (function() {
    // 1. Google Fonts Link ඇතුළත් කිරීම
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+Sinhala:wght@100..900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // 2. CSS Styles ඇතුළත් කිරීම
    const style = document.createElement('style');
    style.innerHTML = `
        .sl-widget-font { font-family: "Noto Serif Sinhala", serif; }
        
        /* Floating Button */
        .sl-float-btn {
            position: fixed; bottom: 25px; right: 25px;
            background: linear-gradient(180deg, #a31e45 0%, #5e0b24 100%);
            color: white; padding: 10px 24px; border-radius: 50px;
            border: 2px solid #FFBE29;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.3);
            cursor: pointer; z-index: 99999; display: flex; align-items: center; gap: 12px;
            transition: all 0.3s ease;
        }
        .sl-float-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(141, 21, 58, 0.6), inset 0 1px 1px rgba(255,255,255,0.4);
            filter: brightness(1.1);
        }
        .sl-float-text {
            font-weight: 800; color: #FFFFFF; font-size: 15px; letter-spacing: 1px;
            text-transform: uppercase; text-shadow: 0 2px 4px rgba(0,0,0,0.7);
            line-height: 1; margin-top: 2px;
        }

        /* Modal Overlay */
        .sl-modal-overlay {
            display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(40, 20, 20, 0.8); z-index: 100000;
            justify-content: center; align-items: center; padding: 20px;
            backdrop-filter: blur(5px);
        }

        /* Modal Box */
        .sl-modal-box {
            position: relative; background: #FFFDF8; width: 100%; max-width: 500px;
            border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            animation: slSlideUp 0.4s ease-out; border: 1px solid #D4AF37;
            display: flex; flex-direction: column;
        }
        @keyframes slSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        /* Close Button */
        .sl-close-btn {
            position: absolute; top: 10px; right: 10px;
            background-color: white; color: #5D4037; border: none;
            width: 32px; height: 32px; border-radius: 50%;
            font-size: 20px; font-weight: bold; cursor: pointer; z-index: 100;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: transform 0.2s ease; line-height: 1;
        }
        .sl-close-btn:hover { background-color: #f0f0f0; transform: rotate(90deg); color: #ff0000; }

        /* Content Styles */
        .sl-hero-img {
            width: 100%; height: auto; max-height: 280px; object-fit: cover; display: block;
            border-bottom: 4px solid #FFBE29; margin-bottom: 25px;
        }
        .sl-modal-header { padding: 25px; text-align: center; }
        .sl-title { font-size: 24px; font-weight: 700; color: #4A3B32; margin-bottom: 10px; }
        .sl-desc { font-size: 15px; color: #6D4C41; line-height: 1.5; }
        .sl-options-list { padding: 0 25px 25px 25px; }
        .sl-option-item {
            display: flex; align-items: center; background: #fff; padding: 12px 15px;
            border-radius: 10px; margin-bottom: 10px; border: 1px solid #E6D5C3;
            transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .sl-option-item:hover {
            background: #FFF8F0; border-color: #FFBE29; transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .sl-org-logo { font-size: 24px; margin-right: 15px; }
        .sl-org-details { flex: 1; }
        .sl-org-name { font-weight: 700; color: #3E2723; font-size: 16px; display: block; }
        .sl-org-desc { font-size: 12px; color: #8D6E63; }
        .sl-donate-btn-sm {
            padding: 8px 18px; border-radius: 6px; text-decoration: none; font-weight: 700;
            font-size: 14px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .btn-gov { background: linear-gradient(180deg, #a31e45 0%, #8D153A 100%); border: 1px solid #700f2d; }
        .btn-flood { background: linear-gradient(180deg, #F59E0B 0%, #D97706 100%); border: 1px solid #b45309; }
        .sl-donate-btn-sm:hover { filter: brightness(1.1); transform: translateY(-1px); box-shadow: 0 3px 6px rgba(0,0,0,0.3); }
    `;
    document.head.appendChild(style);

    // 3. HTML Structure එක නිර්මාණය කිරීම
    const widgetHTML = `
        <div class="sl-float-btn sl-widget-font" id="slTriggerBtn">
            <img src="https://www.udrop.com/file/O4eb/sl_flag.svg" alt="Sri Lanka Flag" style="height: 22px; width: auto; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.5));">
            <span class="sl-float-text">HELP SRI LANKA</span>
        </div>

        <div class="sl-modal-overlay sl-widget-font" id="slModal">
            <div class="sl-modal-box">
                <button class="sl-close-btn" id="slCloseBtn">&times;</button>
                <div class="sl-modal-header">
                    <h2 class="sl-title">අපේම මිනිසුන් වෙනුවෙන් ❤️</h2>
                    <p class="sl-desc">ආපදා සහ අභියෝග හමුවේ පීඩාවට පත් අපේම සහෝදර ජනතාවට ශක්තියක් වන්න.</p>
                </div>
                <img src="https://www.udrop.com/file/O4dQ/unnamed.jpg" alt="Sri Lanka Relief" class="sl-hero-img">
                <div class="sl-options-list">
                    <div class="sl-option-item">
                        <div class="sl-org-logo">🏛️</div>
                        <div class="sl-org-details"><span class="sl-org-name">Donate.gov.lk</span><span class="sl-org-desc">රාජ්‍ය දායකත්ව ද්වාරය</span></div>
                        <a href="https://donate.gov.lk/" target="_blank" class="sl-donate-btn-sm btn-gov">Donate</a>
                    </div>
                    <div class="sl-option-item">
                        <div class="sl-org-logo">🌊</div>
                        <div class="sl-org-details"><span class="sl-org-name">FloodSupport.org</span><span class="sl-org-desc">ආපදා සහන සේවාවන්</span></div>
                        <a href="https://floodsupport.org/" target="_blank" class="sl-donate-btn-sm btn-flood">Support</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = widgetHTML;
    document.body.appendChild(widgetContainer);

    // 4. Logic (ක්‍රියාකාරීත්වය)
    const modal = document.getElementById('slModal');
    const triggerBtn = document.getElementById('slTriggerBtn');
    const closeBtn = document.getElementById('slCloseBtn');

    triggerBtn.onclick = function() { modal.style.display = 'flex'; };
    closeBtn.onclick = function() { modal.style.display = 'none'; };
    window.onclick = function(event) { if (event.target == modal) { modal.style.display = 'none'; } };

})();
</script>
