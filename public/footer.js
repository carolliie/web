function createFooter() {
    const currentYear = new Date().getFullYear();

    const footerYear = document.getElementById("footer-year");
    
    footerYear.innerHTML = `© ${currentYear} Carile, Inc.`;

    return footerYear;
}

const footerSpan = createFooter();

document.getElementById('footer-year').appendChild(footerSpan);