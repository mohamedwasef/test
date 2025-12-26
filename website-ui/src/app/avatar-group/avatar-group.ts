import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, AvatarSize } from '../avatar/avatar';

export interface AvatarGroupMember {
  type: 'Image' | 'Initials' | 'Icon';
  imageUrl?: string;
  textEn?: string;
}

@Component({
  selector: 'app-avatar-group',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar-group.html',
  styleUrls: ['./avatar-group.scss']
})
export class AvatarGroupComponent {
  @Input() avatars: AvatarGroupMember[] = [];
  @Input() stacked: boolean = true;
  @Input() size: AvatarSize = '32px';
  @Input() maxDisplay: number = 5;
  @Input() square: boolean = false;

  get displayAvatars(): AvatarGroupMember[] {
    return this.avatars.slice(0, this.maxDisplay);
  }

  get remainingCount(): number {
    const remaining = this.avatars.length - this.maxDisplay;
    return remaining > 0 ? remaining : 0;
  }

  get hasRemaining(): boolean {
    return this.remainingCount > 0;
  }

  get containerClasses(): string {
    const classes: string[] = ['avatar-group'];
    
    if (this.stacked) {
      classes.push('avatar-group-stacked');
    } else {
      classes.push('avatar-group-unstacked');
    }

    return classes.join(' ');
  }

  get itemClasses(): string {
    const classes: string[] = ['avatar-group-item'];
    
    if (this.stacked) {
      classes.push('avatar-group-item-stacked');
    }

    return classes.join(' ');
  }

  get counterClasses(): string {
    return this.itemClasses;
  }
}

