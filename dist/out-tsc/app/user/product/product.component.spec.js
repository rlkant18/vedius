"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var product_component_1 = require("./product.component");
describe('productComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [product_component_1.productComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(product_component_1.productComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
var figure = $('.video').hover(hoverVideo, hideVideo);
function hoverVideo(e) {
    $('video', this)
        .get(0)
        .play();
}
function hideVideo(e) {
    $('video', this)
        .get(0)
        .pause();
}
//# sourceMappingURL=product.component.spec.js.map