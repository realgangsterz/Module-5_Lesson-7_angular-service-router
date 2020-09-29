import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {TimelinesComponent} from './timelines/timelines.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
    children: [{
      path: ':id',
      component: DictionaryComponent
    }]
  },
  {
    path: 'timelines',
    component: TimelinesComponent,
    children: [{
      path: ':id',
      component: TimelinesComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
