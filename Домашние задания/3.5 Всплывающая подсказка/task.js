document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltipElement = document.getElementById('tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', event => {
            event.preventDefault();
            const activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip) activeTooltip.classList.remove('tooltip_active');
            const tooltipText = tooltip.getAttribute('title');
            tooltipElement.innerText = tooltipText;
            const rect = tooltip.getBoundingClientRect();
            tooltipElement.style.left = `${rect.left + window.scrollX}px`;
            tooltipElement.style.top = `${rect.bottom + window.scrollY + 5}px`;
            tooltipElement.classList.add('tooltip_active');
        });
    });
    document.addEventListener('click', event => {
        if (!event.target.classList.contains('has-tooltip') && !tooltipElement.contains(event.target)) {
            tooltipElement.classList.remove('tooltip_active');
        }
    });
});
