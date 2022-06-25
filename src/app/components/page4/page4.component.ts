import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AdvancedCombatTechniques } from 'src/app/model/page4/advanced-combat-techniques'
import { LightsaberColor } from 'src/app/model/page4/lightsaber-color'
import { LightsaberDesign } from 'src/app/model/page4/lightsaber-design'
import { LightsaberForm } from 'src/app/model/page4/lightsaber-form'
import { LightsaberMods } from 'src/app/model/page4/lightsaber-mods'
import { Catagory } from 'src/app/model/shared/catagory'
import { PageComponent } from '../shared/page/page.component'

@Component({
  selector: 'app-page4',
  templateUrl: './../shared/page/page.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component extends PageComponent {
  public pageId: string = 'page4'
  catagories():Catagory[] {
    return [LightsaberColor, LightsaberDesign, LightsaberMods, LightsaberForm, AdvancedCombatTechniques]
  }
}
