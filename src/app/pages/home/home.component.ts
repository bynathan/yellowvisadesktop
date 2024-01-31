import { Component, EventEmitter, Input, OnInit, Output, ElementRef, HostListener, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private elementRef: ElementRef) {}

  @ViewChild('scrolling') myDivRef!: ElementRef;

  isDragging = false;
  startX: number = 0;
  startScrollLeft: number = 0;

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startScrollLeft = this.myDivRef.nativeElement.scrollLeft;
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      const deltaX = event.clientX - this.startX;
      this.myDivRef.nativeElement.scrollLeft = this.startScrollLeft - deltaX;
    }
  }

  onMouseUp(event: MouseEvent): void {
    this.isDragging = false;
  }

  @HostListener('window:mouseup')
  onGlobalMouseUp(): void {
    this.isDragging = false;
  }
}
