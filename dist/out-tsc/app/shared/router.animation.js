"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
function moveIn() {
    return animations_1.trigger('moveIn', [
        animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%' })),
        animations_1.transition(':enter', [
            animations_1.style({ opacity: '0', transform: 'translateX(100px)' }),
            animations_1.animate('.6s ease-in-out', animations_1.style({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ opacity: '1', transform: 'translateX(0)' }),
            animations_1.animate('.6s ease-in-out', animations_1.style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
exports.moveIn = moveIn;
function fallIn() {
    return animations_1.trigger('fallIn', [
        animations_1.transition(':enter', [
            animations_1.style({ opacity: '0', transform: 'translateY(40px)' }),
            animations_1.animate('.6s ease-in-out', animations_1.style({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        animations_1.transition(':leave', [
            animations_1.style({ opacity: '1', transform: 'translateX(0)' }),
            animations_1.animate('.6s ease-in-out', animations_1.style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
exports.fallIn = fallIn;
//# sourceMappingURL=router.animation.js.map