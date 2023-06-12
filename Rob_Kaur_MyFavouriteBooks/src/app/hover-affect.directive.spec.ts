import { ElementRef } from '@angular/core';
import { HoverAffectDirective } from './hover-affect.directive';

describe('HoverAffectDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: {} // Mock the native element
    };

    const directive = new HoverAffectDirective(elementRefMock as ElementRef<any>);
    expect(directive).toBeTruthy();
  });
});
