import {
  animate,
  state,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

export const ModalAnimation = trigger('modalAnimation', [
  state(
    'in',
    style({
      transform: 'none',
      opacity: 1,
    })
  ),
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    group([
      animate(
        '1s  ease',
        style({
          transform: 'none',
        })
      ),
      animate(
        '0.3s ease',
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '0.5s ease',
        style({
          transform: 'translateY(100%)',
        })
      ),
      animate(
        '0.5s 0.2s ease',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
]);
