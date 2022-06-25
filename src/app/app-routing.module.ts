import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { Page1Component } from './components/page1/page1.component'
import { Page2Component } from './components/page2/page2.component'
import { Page3Component } from './components/page3/page3.component'
import { Page4Component } from './components/page4/page4.component'

const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
]

const options: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
