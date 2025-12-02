(function () {
  var config = window.HSL_CONFIG || {};

  var variant = config.variant || 'popup';  // NEW
  var placement = config.placement || 'bottom-right';
  var title = config.modal_title || 'අපේම මිනිසුන් වෙනුවෙන් ❤️';
  var bodyText =
    config.modal_body ||
    'ආපදා සහ අභියෝග හමුවේ පීඩාවට පත් අපේම සහෝදර ජනතාවට ශක්තියක් වන්න.';
  var targetSelector = config.target_selector || null; // for infeed/nav

  var positionStyle =
    placement === 'bottom-left' ? 'left: 25px;' : 'right: 25px;';

  // Google Font
  var fontLink = document.createElement('link');
  fontLink.href =
    'https://fonts.googleapis.com/css2?family=Noto+Serif+Sinhala:wght@100..900&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Base CSS + variants
  var style = document.createElement('style');
  style.innerHTML = `
    .sl-widget-font { font-family: "Noto Serif Sinhala", serif; }

    /* === SHARED BUTTON & COLORS === */
    .sl-cta-main {
      background: linear-gradient(180deg, #a31e45 0%, #5e0b24 100%);
      color: #fff;
      border-radius: 999px;
      padding: 10px 24px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      font-size: 14px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border: 2px solid #FFBE29;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.3);
      transition: all .25s ease;
    }
    .sl-cta-main:hover {
      transform: translateY(-2px);
      filter: brightness(1.08);
      box-shadow: 0 6px 20px rgba(141,21,58,.6);
    }
    .sl-cta-flag {
      height: 22px;
      width: auto;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,.5));
    }

    /* === POPUP MODAL (blog popup / current design) === */
    .sl-modal-overlay {
      display: none; position: fixed; inset: 0;
      background-color: rgba(40, 20, 20, 0.8); z-index: 100000;
      justify-content: center; align-items: center; padding: 20px;
      backdrop-filter: blur(5px);
    }
    .sl-modal-box {
      position: relative; background: #FFFDF8; width: 100%; max-width: 500px;
      border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      animation: slSlideUp 0.4s ease-out; border: 1px solid #D4AF37;
      display: flex; flex-direction: column;
    }
    @keyframes slSlideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .sl-close-btn {
      position: absolute; top: 10px; right: 10px;
      background-color: white; color: #5D4037; border: none;
      width: 35px; height: 35px; border-radius: 50%;
      font-size: 24px; font-weight: bold; cursor: pointer; z-index: 100;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2); transition: transform 0.2s ease;
      line-height: 1; padding-bottom: 2px;
    }
    .sl-close-btn:hover {
      background-color: #f0f0f0; transform: rotate(90deg); color: #ff0000;
    }
    .sl-hero-img {
      width: 100%; max-height: 280px; object-fit: cover; display: block;
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
    .sl-donate-btn-sm:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
    }

    /* === FLOATING BUTTON (used by float + popup variants) === */
    .sl-float-btn {
      position: fixed; bottom: 25px; ${positionStyle}
      z-index: 99999;
    }

    /* === HEADER BANNER === */
    .sl-header-banner {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: #1b0a10;
      border-bottom: 2px solid #FFBE29;
      box-shadow: 0 2px 8px rgba(0,0,0,.4);
    }
    .sl-header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      color: #ffe9d1;
      font-size: 14px;
    }
    .sl-header-text-main {
      font-weight: 700;
      margin-bottom: 2px;
    }
    .sl-header-text-sub {
      font-size: 12px;
      opacity: .85;
    }

    /* === SNACKBAR (bottom center) === */
    .sl-snackbar-wrap {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99999;
    }
    .sl-snackbar {
      background: #1f2933;
      color: #f9fafb;
      padding: 12px 18px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 8px 20px rgba(0,0,0,.6);
      font-size: 13px;
    }
    .sl-snackbar-title {
      font-weight: 700;
      margin-right: 4px;
    }
    .sl-snackbar-close {
      margin-left: 6px;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      opacity: .7;
    }

    /* === NAV BANNER (thin strip, like navigation menu) === */
    .sl-nav-banner {
      width: 100%;
      background: #2b1020;
      color: #ffe9d1;
      padding: 8px 16px;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      border-bottom: 1px solid #FFBE29;
    }

    /* === IN-FEED CARD === */
    .sl-infeed-card {
      background: #FFFDF8;
      border-radius: 16px;
      border: 1px solid #E6D5C3;
      padding: 18px 18px 16px 18px;
      margin: 24px 0;
      box-shadow: 0 12px 25px rgba(0,0,0,0.08);
      display: flex;
      gap: 14px;
      align-items: center;
    }
    .sl-infeed-flag-wrap {
      flex-shrink: 0;
    }
    .sl-infeed-title {
      font-size: 17px;
      font-weight: 700;
      color: #4A3B32;
      margin-bottom: 4px;
    }
    .sl-infeed-desc {
      font-size: 13px;
      color: #6D4C41;
      margin-bottom: 8px;
    }
  `;
  document.head.appendChild(style);

  function buildOptionsList() {
    return `
      <div class="sl-options-list">
        <div class="sl-option-item">
          <div class="sl-org-logo">🏛️</div>
          <div class="sl-org-details">
            <span class="sl-org-name">Donate.gov.lk</span>
            <span class="sl-org-desc">රාජ්‍ය දායකත්ව ද්වාරය</span>
          </div>
          <a href="https://donate.gov.lk/" target="_blank" class="sl-donate-btn-sm btn-gov">Donate</a>
        </div>
        <div class="sl-option-item">
          <div class="sl-org-logo">🌊</div>
          <div class="sl-org-details">
            <span class="sl-org-name">FloodSupport.org</span>
            <span class="sl-org-desc">ආපදා සහන සේවාවන්</span>
          </div>
          <a href="https://floodsupport.org/" target="_blank" class="sl-donate-btn-sm btn-flood">Support</a>
        </div>
      </div>
    `;
  }

  function buildPopupHTML() {
    return `
      <div class="sl-modal-overlay sl-widget-font" id="slModal">
        <div class="sl-modal-box">
          <button class="sl-close-btn" id="slCloseBtn">&times;</button>
          <div class="sl-modal-header">
            <h2 class="sl-title">${title}</h2>
            <p class="sl-desc">${bodyText}</p>
          </div>
          <img src="https://www.udrop.com/file/O4dQ/unnamed.jpg" alt="Sri Lanka Relief" class="sl-hero-img">
          ${buildOptionsList()}
        </div>
      </div>
    `;
  }

  function buildFloatButtonHTML() {
    return `
      <div class="sl-float-btn sl-widget-font" id="slTriggerBtn">
        <button class="sl-cta-main">
          <img class="sl-cta-flag" src="https://www.udrop.com/file/O4eb/sl_flag.svg" alt="Sri Lanka Flag">
          <span>HELP SRI LANKA</span>
        </button>
      </div>
    `;
  }

  function buildHeaderBannerHTML() {
    return `
      <div class="sl-header-banner sl-widget-font">
        <div class="sl-header-inner">
          <div>
            <div class="sl-header-text-main">${title}</div>
            <div class="sl-header-text-sub">${bodyText}</div>
          </div>
          <button class="sl-cta-main" id="slHeaderCta">
            <img class="sl-cta-flag" src="https://www.udrop.com/file/O4eb/sl_flag.svg" alt="">
            <span>Donate now</span>
          </button>
        </div>
      </div>
      ${buildPopupHTML()}
    `;
  }

  function buildSnackbarHTML() {
    return `
      <div class="sl-snackbar-wrap sl-widget-font" id="slSnackbar">
        <div class="sl-snackbar">
          <span class="sl-snackbar-title">${title}</span>
          <span>${bodyText}</span>
          <button class="sl-cta-main" id="slSnackCta">
            <span>Open</span>
          </button>
          <span class="sl-snackbar-close" id="slSnackClose">&times;</span>
        </div>
      </div>
      ${buildPopupHTML()}
    `;
  }

  function buildNavBannerHTML() {
    return `
      <div class="sl-nav-banner sl-widget-font">
        <span>${title} – ${bodyText}</span>
        <button class="sl-cta-main" id="slNavCta">
          <span>Help now</span>
        </button>
      </div>
      ${buildPopupHTML()}
    `;
  }

  function buildInfeedHTML() {
    return `
      <div class="sl-infeed-card sl-widget-font">
        <div class="sl-infeed-flag-wrap">
          <img class="sl-cta-flag" src="https://www.udrop.com/file/O4eb/sl_flag.svg" alt="">
        </div>
        <div style="flex:1">
          <div class="sl-infeed-title">${title}</div>
          <div class="sl-infeed-desc">${bodyText}</div>
          <button class="sl-cta-main" id="slInfeedCta">
            <span>Support Relief</span>
          </button>
        </div>
      </div>
      ${buildPopupHTML()}
    `;
  }

  function attachInfeed(html) {
    var target = targetSelector ? document.querySelector(targetSelector) : null;
    if (!target) {
      // fallback: append to body
      var container = document.createElement('div');
      container.innerHTML = html;
      document.body.appendChild(container);
      return container;
    }
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    target.appendChild(wrapper);
    return wrapper;
  }

  // build based on variant
  var container = document.createElement('div');
  var htmlToInsert = '';

  switch (variant) {
    case 'float':
      htmlToInsert = buildFloatButtonHTML() + buildPopupHTML();
      container.innerHTML = htmlToInsert;
      document.body.appendChild(container);
      break;
    case 'header':
      htmlToInsert = buildHeaderBannerHTML();
      container.innerHTML = htmlToInsert;
      document.body.insertBefore(container, document.body.firstChild);
      break;
    case 'snackbar':
      htmlToInsert = buildSnackbarHTML();
      container.innerHTML = htmlToInsert;
      document.body.appendChild(container);
      break;
    case 'nav':
      htmlToInsert = buildNavBannerHTML();
      // either inside specific element or top of body
      if (targetSelector) {
        attachInfeed(htmlToInsert);
      } else {
        container.innerHTML = htmlToInsert;
        document.body.insertBefore(container, document.body.firstChild);
      }
      break;
    case 'infeed':
      htmlToInsert = buildInfeedHTML();
      attachInfeed(htmlToInsert);
      break;
    case 'popup':
    default:
      htmlToInsert = buildFloatButtonHTML() + buildPopupHTML();
      container.innerHTML = htmlToInsert;
      document.body.appendChild(container);
      break;
  }

  // logic / event listeners (shared)
  function initLogic() {
    var modal = document.getElementById('slModal');
    var closeBtn = document.getElementById('slCloseBtn');
    var triggerBtn = document.getElementById('slTriggerBtn');
    var headerCta = document.getElementById('slHeaderCta');
    var snackCta = document.getElementById('slSnackCta');
    var snackClose = document.getElementById('slSnackClose');
    var navCta = document.getElementById('slNavCta');
    var infeedCta = document.getElementById('slInfeedCta');

    function openModal() {
      if (modal) modal.style.display = 'flex';
    }
    function closeModal() {
      if (modal) modal.style.display = 'none';
    }

    if (triggerBtn) triggerBtn.addEventListener('click', openModal);
    if (headerCta) headerCta.addEventListener('click', openModal);
    if (snackCta) snackCta.addEventListener('click', openModal);
    if (navCta) navCta.addEventListener('click', openModal);
    if (infeedCta) infeedCta.addEventListener('click', openModal);

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (snackClose) snackClose.addEventListener('click', function () {
      var wrap = document.getElementById('slSnackbar');
      if (wrap) wrap.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  initLogic();
})();
