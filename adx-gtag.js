// Google Analytics - GA4 tracking script
function initializeAnalytics() {
    // Replace with your GA4 Measurement ID
    const measurementId = 'G-XXXXXXXXXX';  // Use your own GA4 Measurement ID

    // Inject Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', measurementId);
    };
    document.head.appendChild(script);
}



// Google AdSense Script
function loadAds() {
    // AdSense ad unit 1
    const adUnit1 = `

    `;

    // AdSense ad unit 2
    const adUnit2 = `

    `;

    // Insert the ad units into the page
    document.getElementById('ad1').innerHTML = adUnit1;
    document.getElementById('ad2').innerHTML = adUnit2;
}
