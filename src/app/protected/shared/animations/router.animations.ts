import {
  animate,
  style,
  transition,
  trigger,
  group,
  query,
  animateChild,
} from '@angular/animations';

export const RouterAnimation = trigger('routeAnimations', [
  transition('products => addProducts', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('addProducts => products', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
