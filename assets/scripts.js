// Create blood drip effect
document.addEventListener('DOMContentLoaded', function() {
    const bloodDrip = document.getElementById('bloodDrip');
    const dripCount = 15;
    
    for (let i = 0; i < dripCount; i++) {
        const drip = document.createElement('div');
        drip.classList.add('drip');
        
        // Randomize position and animation
        const leftPosition = Math.random() * 100;
        const animationDuration = 8 + Math.random() * 10;
        const animationDelay = Math.random() * 15;
        
        drip.style.left = `${leftPosition}%`;
        drip.style.animationDuration = `${animationDuration}s`;
        drip.style.animationDelay = `${animationDelay}s`;
        
        // Randomize drip width and height
        const dripWidth = 1 + Math.random() * 3;
        const dripHeight = 30 + Math.random() * 70;
        
        drip.style.width = `${dripWidth}px`;
        drip.style.height = `${dripHeight}px`;
        
        bloodDrip.appendChild(drip);
    }
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.remove('pulse');
        });
        
        card.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.classList.add('pulse');
            }, 500);
        });
    });
});
