import './bootstrap';
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import.meta.glob([
    '../images/**',
    '../fonts/**',
    '../plugins/**',
]);

import { initFlowbite } from 'flowbite'
window._initFlowbite = initFlowbite
