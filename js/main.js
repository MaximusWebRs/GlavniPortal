function showElement(element, show) {
    if (show) {
        element.classList.add("active");
        element.classList.remove("inactive");
    } else {
        element.classList.add("inactive");
        element.classList.remove("active");
    }
}

function isElementShowing(element) {
    if (element.classList.contains("active")) {
        return true;
    }
    return false;
}