import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-gopicraft-story',
  imports: [NgOptimizedImage, RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gopicraft.html',
  styleUrl: './gopicraft.css',
})
export class GopicraftStoryComponent {}
