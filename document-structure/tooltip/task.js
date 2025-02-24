'use strict';

const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
hasTooltip.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const existingTooltip = document.querySelector('.tooltip_active');

        if (!element.dataset.tooltipText) {
            element.dataset.tooltipText = element.getAttribute('title');
            element.removeAttribute('title');
        }

        if (existingTooltip) {
            if (existingTooltip.previousElementSibling === element) {
                existingTooltip.classList.remove('tooltip_active');
                return;
            }
            existingTooltip.classList.remove('tooltip_active');
        }
        const tooltipText = element.dataset.tooltipText;
        const rect = element.getBoundingClientRect();
        let tooltipStyle = `position: absolute;`;
        const position = element.dataset.position || 'bottom';

        if (position === 'top') {
            tooltipStyle += `left: ${rect.left + window.scrollX}px; top: ${rect.top + window.scrollY - 30}px;`;
        } else if (position === 'bottom') {
            tooltipStyle += `left: ${rect.left + window.scrollX}px; top: ${rect.bottom + window.scrollY}`;
        } else if (position === 'left') {
            tooltipStyle += `left: ${rect.left + window.scrollX - 8}px; top: ${rect.top + window.scrollY -5}px; transform: translateX(-100%)`;
        } else if (position === 'right') {
            tooltipStyle += `left: ${rect.right + window.scrollX + 8}px; top: ${rect.top + window.scrollY - 5}px;`;
        }
        element.insertAdjacentHTML("afterend",
            `<div class='tooltip tooltip_active' style='${tooltipStyle}'>
                    ${tooltipText}
            </div>`
        );
    });
});
