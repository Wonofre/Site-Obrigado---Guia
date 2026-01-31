// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(error => {
            console.log('SW registration failed:', error);
        });
    });
}

// Track download clicks
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            console.log('📥 Download iniciado:', new Date().toLocaleString('pt-BR'));
        });
    }
});

console.log('🎉 Site Obrigado carregado!');
