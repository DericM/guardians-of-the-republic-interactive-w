import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AdvancedForcePowers } from 'src/app/model/page3/advanced-force-powers'
import { Archetype } from 'src/app/model/page3/archetype'
import { BasicForcePowers } from 'src/app/model/page3/basic-force-powers'
import { View } from 'src/app/model/page3/view'
import { Catagory } from 'src/app/model/shared/catagory'
import { PageComponent } from '../shared/page/page.component'

@Component({
  selector: 'app-page3',
  templateUrl: './../shared/page/page.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component extends PageComponent {
  public pageId: string = 'page3'
  catagories():Catagory[] {
    return [View, Archetype, BasicForcePowers, AdvancedForcePowers]
  }
}
