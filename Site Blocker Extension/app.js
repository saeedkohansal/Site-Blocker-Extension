// Get The URL
const site = window.location.hostname

// alert(site)

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.querySelector("html").append(custom_element)
}

// The Blacklist Or The Whitelist
const site_list = [
    "localhost", "127.0.0.1", "192.168.1.1",
    "google.com", "translate.google.com", "www.google.com",
    "javascript.info", "www.javascript.info",
    "wikipedia.org", "www.wikipedia.org",
    "youtube.com", "www.youtube.com",
    "apple.com", "www.apple.com"
]

/*
Check Current Site With The Sites In The List

Only Block From Blacklist
if (site_list.includes(site)) { }

Only Allow From Whitelist
if (!site_list.includes(site)) { }
*/

if (site_list.includes(site)) {
    // Remove All Lines From HTML Tag
    document.querySelector("html").innerHTML = ""

    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Aboreto");

        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

        * {
            user-select: none !important;
            pointer-events: none !important;
        }

        html {
            background-image: linear-gradient(to left, #92ffc0 10%, #002661 100%) !important;
        }

        #access-denied {
            font-family: "Aboreto";
            display: block !important;
            color: #fff;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
            font-weight: bold;
            z-index: 999999999999;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    Create_Custom_Element(
        "div",
        "id",
        "access-denied",
        `<i class="bi bi-exclamation-circle"></i> Access Denied`
    )
}