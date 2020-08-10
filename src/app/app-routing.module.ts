import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostContainerComponent } from './components/pages/post-container/post-container.component';


const routes: Routes = [
  { path: '', component: PostContainerComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
