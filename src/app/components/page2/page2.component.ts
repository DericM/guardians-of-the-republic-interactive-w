import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Complications } from 'src/app/model/page2/complications'
import { Homeworld } from 'src/app/model/page2/homeworld'
import { Origin } from 'src/app/model/page2/origin'
import { Perks } from 'src/app/model/page2/perks'
import { Catagory } from 'src/app/model/shared/catagory'
import { PageComponent } from '../shared/page/page.component'

@Component({
  selector: 'app-page2',
  templateUrl: './../shared/page/page.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component extends PageComponent {
  readonly pageId: string = 'page2'
  catagories():Catagory[] {
    return [Origin, Homeworld, Perks, Complications]
  }
}
