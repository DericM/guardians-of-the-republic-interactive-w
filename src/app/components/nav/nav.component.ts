import { Component, OnInit } from '@angular/core'
import { Gender } from 'src/app/model/page1/gender'
import { Rank } from 'src/app/model/page1/rank'
import { Species } from 'src/app/model/page1/species'
import { Complications } from 'src/app/model/page2/complications'
import { Homeworld } from 'src/app/model/page2/homeworld'
import { Origin } from 'src/app/model/page2/origin'
import { Perks } from 'src/app/model/page2/perks'
import { AdvancedForcePowers } from 'src/app/model/page3/advanced-force-powers'
import { Archetype } from 'src/app/model/page3/archetype'
import { BasicForcePowers } from 'src/app/model/page3/basic-force-powers'
import { View } from 'src/app/model/page3/view'
import { AdvancedCombatTechniques } from 'src/app/model/page4/advanced-combat-techniques'
import { LightsaberColor } from 'src/app/model/page4/lightsaber-color'
import { LightsaberDesign } from 'src/app/model/page4/lightsaber-design'
import { LightsaberForm } from 'src/app/model/page4/lightsaber-form'
import { LightsaberMods } from 'src/app/model/page4/lightsaber-mods'
import { Catagory } from 'src/app/model/shared/catagory'

interface NavGroup {
  label:string
  open:boolean,
  catagories:Catagory[],
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  nav:NavGroup[] = [
    {label:'page1', open:false, catagories:[Rank, Species, Gender] },
    {label:'page2', open:false, catagories:[Origin, Homeworld, Perks, Complications] },
    {label:'page3', open:false, catagories:[View, Archetype, BasicForcePowers, AdvancedForcePowers] },
    {label:'page4', open:false, catagories:[LightsaberColor, LightsaberDesign, LightsaberMods, LightsaberForm, AdvancedCombatTechniques] },
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  toggle(label:string){
    for(let n of this.nav){
      if(n.label != label)
        n.open = false
    }
    console.log("toggle")
  }

}
