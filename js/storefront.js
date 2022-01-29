let jquery = document.createElement("script");
jquery.type = "text/javascript";
jquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(s);

let PRODUCT_CARD_MAX_NAME_LENGTH = 40;
let ellipsis = "...";

// Add ellipsis for long products
$('.ins-component__title-inner').text((_, oldText) => {
    if (oldText.length > PRODUCT_CARD_MAX_NAME_LENGTH + ellipsis.length) {
        return oldText.slice(0, PRODUCT_CARD_MAX_NAME_LENGTH) + ellipsis;
    }

    return oldText;
});
