import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  transition('void => *', [
    animate('0.2s ease', keyframes([
      style({
        transform: 'translateX(-200px) scale3d(0.4, 0.4, 0.4)',
        offset: 0
      }),
      style({
        transform: 'translateX(0px) rotate(-90deg) scale3d(0.5, 0.5, 0.5)',
        offset: 0.25
      }),
      style({
        transform: 'translateX(-200px) rotate(90deg) translateY(0) scale3d(0.6, 0.6, 0.6)',
        offset: 0.5
      }),
      style({
        transform: 'translateX(-100px) rotate(135deg) translateY(0) scale3d(0.6, 0.6, 0.6)',
        offset: 0.75
      }),
      style({
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ]),
])




