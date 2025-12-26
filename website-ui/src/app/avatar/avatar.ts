import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = '24px' | '32px' | '40px' | '48px' | '64px' | '80px' | '120px';
export type AvatarType = 'Image' | 'Initials' | 'Icon';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.scss']
})
export class AvatarComponent {
  @Input() border: boolean = false;
  @Input() textEn: string = 'AB';
  @Input() type: AvatarType = 'Initials';
  @Input() square: boolean = false;
  @Input() size: AvatarSize = '32px';
  @Input() imageUrl?: string;

  get containerClasses(): string {
    const classes: string[] = ['avatar-container'];
    classes.push(`avatar-size-${this.size.replace('px', '')}`);
    return classes.join(' ');
  }

  get bgClasses(): string {
    const classes: string[] = ['avatar-bg'];
    
    if (this.type === 'Icon' || this.type === 'Initials') {
      classes.push('avatar-bg-neutral');
    } else {
      classes.push('avatar-bg-white');
    }

    if (this.square) {
      classes.push('avatar-bg-square');
    } else {
      classes.push('avatar-bg-round');
    }

    if (this.size === '120px') {
      classes.push('avatar-border-thick');
    } else {
      classes.push('avatar-border-thin');
    }

    return classes.join(' ');
  }

  get placeholderClasses(): string {
    const classes: string[] = ['avatar-placeholder'];
    
    const sizeNum = parseInt(this.size);
    if (sizeNum === 24) {
      classes.push('avatar-placeholder-24');
    } else if (sizeNum === 32) {
      classes.push('avatar-placeholder-32');
    } else if (sizeNum === 40) {
      classes.push('avatar-placeholder-40');
    } else if (sizeNum === 48 || sizeNum === 120) {
      classes.push('avatar-placeholder-48-120');
    } else if (sizeNum === 64) {
      classes.push('avatar-placeholder-64');
    } else if (sizeNum === 80) {
      classes.push('avatar-placeholder-80');
    }

    return classes.join(' ');
  }

  get textClasses(): string {
    const classes: string[] = ['avatar-text'];
    
    const sizeNum = parseInt(this.size);
    if (sizeNum === 24) {
      classes.push('avatar-text-2xs');
    } else if (sizeNum === 32) {
      classes.push('avatar-text-xs');
    } else if (sizeNum === 40) {
      classes.push('avatar-text-sm');
    } else if (sizeNum === 48) {
      classes.push('avatar-text-md');
    } else if (sizeNum === 64) {
      classes.push('avatar-text-xl');
    } else if (sizeNum === 80) {
      classes.push('avatar-text-display-sm');
    } else if (sizeNum === 120) {
      classes.push('avatar-text-display-md');
    }

    return classes.join(' ');
  }

  get ringClasses(): string {
    const classes: string[] = ['avatar-ring'];
    
    if (this.square) {
      classes.push('avatar-ring-square');
    } else {
      classes.push('avatar-ring-round');
    }

    if (this.size === '120px') {
      classes.push('avatar-ring-thick');
    } else {
      classes.push('avatar-ring-thin');
    }

    return classes.join(' ');
  }

  get imageClasses(): string {
    const classes: string[] = ['avatar-image'];
    
    if (this.square) {
      classes.push('avatar-image-square');
    } else {
      classes.push('avatar-image-round');
    }

    if (this.size === '120px') {
      classes.push('avatar-image-border-thick');
    } else {
      classes.push('avatar-image-border-thin');
    }

    return classes.join(' ');
  }

  get iconSize(): number {
    const sizeNum = parseInt(this.size);
    if (sizeNum === 24) return 16;
    if (sizeNum === 32) return 24;
    if (sizeNum === 40 || sizeNum === 48) return 24;
    if (sizeNum === 64) return 42;
    if (sizeNum === 80) return 68;
    if (sizeNum === 120) return 80;
    return 24;
  }
}

