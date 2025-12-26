import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, AvatarSize } from '../avatar/avatar';
import { AvatarGroupComponent, AvatarGroupMember } from '../avatar-group/avatar-group';

@Component({
  selector: 'app-avatar-showcase',
  standalone: true,
  imports: [CommonModule, AvatarComponent, AvatarGroupComponent],
  templateUrl: './avatar-showcase.html',
  styleUrls: ['./avatar-showcase.scss']
})
export class AvatarShowcaseComponent {
  sizes: AvatarSize[] = ['24px', '32px', '40px', '48px', '64px', '80px', '120px'];
  
  sampleImageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop';

  // Avatar Group sample data
  sampleAvatars: AvatarGroupMember[] = [
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop' },
  ];

  largeGroupAvatars: AvatarGroupMember[] = [
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop' },
    { type: 'Initials', textEn: 'JD' },
    { type: 'Initials', textEn: 'KL' },
    { type: 'Initials', textEn: 'MN' },
  ];

  mixedAvatars: AvatarGroupMember[] = [
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop' },
    { type: 'Initials', textEn: 'JD' },
    { type: 'Icon' },
    { type: 'Image', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop' },
  ];
}

