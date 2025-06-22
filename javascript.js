// Controles de acessibilidade
        document.getElementById('aumentarFonte').addEventListener('click', function() {
            const root = document.documentElement;
            let fontSize = parseFloat(getComputedStyle(root).getPropertyValue('--fonte-base'));
            root.style.setProperty('--fonte-base', (fontSize + 2) + 'px');
        });

        document.getElementById('diminuirFonte').addEventListener('click', function() {
            const root = document.documentElement;
            let fontSize = parseFloat(getComputedStyle(root).getPropertyValue('--fonte-base'));
            if (fontSize > 12) {
                root.style.setProperty('--fonte-base', (fontSize - 2) + 'px');
            }
        });

        document.getElementById('resetarFonte').addEventListener('click', function() {
            document.documentElement.style.setProperty('--fonte-base', '16px');
        });

        document.getElementById('modoEscuro').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            // Salva a preferência no localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('modoEscuro', 'ativado');
            } else {
                localStorage.setItem('modoEscuro', 'desativado');
            }
        });

        // Verifica preferência salva ao carregar a página
        if (localStorage.getItem('modoEscuro') === 'ativado') {
            document.body.classList.add('dark-mode');
        }

        // Menu flutuante
        const menu = document.getElementById('menu');
        const menuOffsetTop = menu.offsetTop;

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > menuOffsetTop) {
                menu.classList.add('fixo');
            } else {
                menu.classList.remove('fixo');
            }
        });

        // Controle do submenu de acessibilidade
        const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
        const submenuAcessibilidade = document.getElementById('submenu-acessibilidade');
        const containerAcessibilidade = document.getElementById('acessibilidade-container');

        botaoAcessibilidade.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            containerAcessibilidade.classList.toggle('aberto');
            submenuAcessibilidade.classList.toggle('mostrar');
        });

        // Impede que o clique dentro do submenu feche o menu
        submenuAcessibilidade.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Fechar o submenu ao clicar fora
        document.addEventListener('click', function() {
            containerAcessibilidade.classList.remove('aberto');
            submenuAcessibilidade.classList.remove('mostrar');
        });