let responsiveActiveElements = [];
const responsiveMatch = window.matchMedia("(hover: hover)");

function ResponsiveActiveElement(element) {
    this.element = element;
    this.clickEvent = () => {
        showElement(this.element, !isElementShowing(this.element));
        for (const rElement of responsiveActiveElements) {
            if (rElement == this) {
                continue;
            }
            showElement(rElement.element, false);
        }
    };
}

function activateResponsiveActiveElementClickEvent(responsiveActiveElement, activate) {
    if (activate) {
        responsiveActiveElement.element.addEventListener("click", responsiveActiveElement.clickEvent);
    } else {
        responsiveActiveElement.element.removeEventListener("click", responsiveActiveElement.clickEvent);
    }
}

function initResponsive() {
    for (const element of document.querySelectorAll("[--data-responsive-activator]")) {
        responsiveActiveElements.push(new ResponsiveActiveElement(element));
    }
    if (!responsiveMatch.matches) {
        activateResponsiveActiveElements(true);
    }
    responsiveMatch.onchange = (e) => {
        if (e.matches) {
            activateResponsiveActiveElements(false);
        } else {
            activateResponsiveActiveElements(true);
        }
    };
}

function activateResponsiveActiveElements(activate) {
    if (activate) {
        for (const rElement of responsiveActiveElements) {
            activateResponsiveActiveElementClickEvent(rElement, true);
        }
    } else {
        for (const rElement of responsiveActiveElements) {
            activateResponsiveActiveElementClickEvent(rElement, false);
        }
    }
}