/**
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */

/**
 * Highlights the panel being hovered over.
 * 
 * TODO: add to implementation so that hovering pops up window showing donors
 */

 panel.onmouseover = panel.onmouseout = handler;

 function handler(event) {
    if (event.type == 'mouseover') {
        event.target.style.background = 'pink';
    }
    if (event.type == 'mouseout') {
        event.target.style.background = 'white';
    }
 }
 
 function handler2() {
     document.find('.dropdown-menu').first().stop(true, true).slideDown();
 };
