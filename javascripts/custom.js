document.addEventListener("DOMContentLoaded", function() {
    const headerInner = document.querySelector('.md-header__inner');
    if (headerInner) {
        // 1. Remove any existing logo or title elements injected by the theme
        const existingLogo = headerInner.querySelector('.md-logo');
        const existingTitle = headerInner.querySelector('.md-header__title');
        if (existingLogo) existingLogo.remove();
        if (existingTitle) existingTitle.remove();

        // 2. Build the Logo + ./mogsec container
        const logoContainer = document.createElement('a');
        logoContainer.href = '/';
        logoContainer.className = 'md-header__button md-logo';
        // Logo is 42px height, ./mogsec text has the 'brand-text' class for CSS styling
        logoContainer.innerHTML = '<img src="./assets/Mogsec_Icon_Dark.svg" style="height: 42px; display: inline-block; vertical-align: middle;"> ' +
                                  '<span class="brand-text">./mogsec</span>';
        
        // 3. Build the Email Icon
        const mailBtn = document.createElement('a');
        mailBtn.href = 'mailto:contact@mogsec.com';
        mailBtn.className = 'md-header__button md-icon custom-mail-icon';
        mailBtn.title = 'Contact Mogsec';
        mailBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0-8 5-8-5h16m0 12H4V8l8 5 8-5v10Z"/></svg>';
        
        // 4. Inject into the header
        headerInner.prepend(logoContainer);
        headerInner.appendChild(mailBtn);
    }
});
