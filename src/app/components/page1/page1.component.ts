import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Gender } from 'src/app/model/page1/gender'
import { Rank } from 'src/app/model/page1/rank'
import { Species } from 'src/app/model/page1/species'
import { Catagory } from 'src/app/model/shared/catagory'
import { PageComponent } from '../shared/page/page.component'

@Component({
  selector: 'app-page1',
  templateUrl: './../shared/page/page.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component extends PageComponent  {
  readonly pageId: string = 'page1'
  catagories():Catagory[] {
    return [Rank, Species, Gender]
  }
}
