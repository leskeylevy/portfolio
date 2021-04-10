import { ElementRef, EventEmitter, Input, Output, Directive } from '@angular/core';
import { TimelineMax } from 'gsap';

@Directive()
export class CoreAnimationDirective {
    @Input() duration = 1;
    @Input() delay = 0;

    // tslint:disable-next-line: no-output-native
    @Output() complete: EventEmitter<null> = new EventEmitter();
    @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
    protected timeline: TimelineMax;

    constructor(protected element: ElementRef) {
        this.timeline = new TimelineMax({
            onComplete: _ => this.complete.emit(),
            onReverseComplete: _ => this.reverseComplete.emit(),
            paused: true,
            reversed: true
        });
    }

    protected animateIn()  {
        if (this.timeline.isActive()) {
            this.timeline.kill();
        }
        this.timeline.play();
    }
}
