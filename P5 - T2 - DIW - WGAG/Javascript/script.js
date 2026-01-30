// document.addEventListener('DOMContentLoaded', () => {
//     const toggle = document.getElementById('darkModeToggle');
//     const htmlElement = document.documentElement;

//     // 1. Al cargar: leer preferencia guardada o usar la del sistema
//     const savedTheme = localStorage.getItem('theme') || 
//         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

//     // Aplicar el tema al <html>
//     htmlElement.setAttribute('data-bs-theme', savedTheme);
    
//     // Sincronizar el estado del botón visualmente
//     if (toggle) {
//         toggle.checked = savedTheme === 'dark';

//         // 2. Escuchar el cambio en el switch
//         toggle.addEventListener('change', () => {
//             const newTheme = toggle.checked ? 'dark' : 'light';
            
//             htmlElement.setAttribute('data-bs-theme', newTheme);
//             localStorage.setItem('theme', newTheme);
//         });
//     }
// });

//Código javascript de boostrap para cambiar el fondo.
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggle) toggle.checked = (theme === 'dark');
    };

    // 1. Detectar tema inicial
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Aplicamos el guardado o el del sistema
    applyTheme(savedTheme || systemTheme);

    // 2. Escuchar el click del usuario
    if (toggle) {
        toggle.addEventListener('change', () => {
            const newTheme = toggle.checked ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    // 3. Escuchar si el usuario cambia el tema en Windows/Mac mientras navega
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Solo si el usuario no ha elegido manualmente
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
});