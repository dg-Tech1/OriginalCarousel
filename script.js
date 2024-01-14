        const container = document.querySelector('.carousel-container');
        const slides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('#prev');
        const nextButton = document.querySelector('#next');

        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i >= index && i < index + 2 ? 'block' : 'none';
            });
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= 2;
                showSlide(currentIndex);
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 2) {
                currentIndex += 2;
                showSlide(currentIndex);
            }
        });

        showSlide(currentIndex);
