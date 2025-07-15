const sobre = document.getElementById('sobre');
const perfil = document.querySelector('.perfil');
const footerLink = document.querySelector('footer a');

function setBodyBg(color) {
    document.body.style.backgroundColor = color;
}

function setFooterLinkBg(color) {
    if (footerLink) {
        footerLink.style.backgroundColor = color;
    }
}

if (sobre) {
    sobre.addEventListener('mouseenter', () => {
        setBodyBg('#8C99AD');
        setFooterLinkBg('#647da3');
    });
    sobre.addEventListener('mouseleave', () => {
        setBodyBg('');
        setFooterLinkBg('');
    });
}

if (perfil) {
    perfil.addEventListener('mouseenter', () => {
        setBodyBg('#C9B495');
    });
    perfil.addEventListener('mouseleave', () => {
        setBodyBg('');
    });
}