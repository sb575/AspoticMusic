import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'track-details/:_id',
    loadChildren: () => import('./tab2/track-details/track-details.module').then( m => m.TrackDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-track',
    loadChildren: () => import('./tab2/add-track/add-track.module').then( m => m.AddTrackPageModule)
  },
  {
    path: 'add-comment',
    loadChildren: () => import('./tab2/add-comment/add-comment.module').then( m => m.AddCommentPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./home/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'edit-track',
    loadChildren: () => import('./edit-track/edit-track.module').then( m => m.EditTrackPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
