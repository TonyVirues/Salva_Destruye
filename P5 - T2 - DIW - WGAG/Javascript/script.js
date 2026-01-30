document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // 1. Al cargar: leer preferencia guardada o usar la del sistema
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Aplicar el tema al <html>
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    
    // Sincronizar el estado del botón visualmente
    if (toggle) {
        toggle.checked = savedTheme === 'dark';

        // 2. Escuchar el cambio en el switch
        toggle.addEventListener('change', () => {
            const newTheme = toggle.checked ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});