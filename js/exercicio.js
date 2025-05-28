       // Menu toggle functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');

        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && event.target !== menuToggle) {
                sidebar.classList.remove('active');
            }
        });

        // Navigation functionality for both desktop and mobile
        function setActiveNavItem(navType) {
            // Update desktop nav
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.dataset.nav === navType) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Update mobile nav
            document.querySelectorAll('.mobile-nav-item').forEach(item => {
                if (item.dataset.nav === navType) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        // Add click event to desktop nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                const navType = this.dataset.nav;
                setActiveNavItem(navType);
                sidebar.classList.remove('active'); // Close sidebar on mobile
            });
        });

        // Add click event to mobile nav items
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.addEventListener('click', function() {
                const navType = this.dataset.nav;
                setActiveNavItem(navType);
            });
        });

        // Button functionality
        document.querySelector('.btn').addEventListener('click', function() {
            alert('Iniciando exercício de hoje!');
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('active');
            }
        });