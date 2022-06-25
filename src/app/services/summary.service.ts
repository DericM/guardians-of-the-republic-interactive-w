import { Injectable } from '@angular/core'
import { combineLatest, Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'
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
import { SummaryEntry } from 'src/app/model/shared/catagory'

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  summary:Subject<SummaryEntry[]>

  constructor() {
    this.summary = new Subject()
    const sources = [
      Rank.getSummary(),
      Species.getSummary(),
      Gender.getSummary(),
      Origin.getSummary(),
      Homeworld.getSummary(),
      Perks.getSummary(),
      Complications.getSummary(),
      View.getSummary(),
      Archetype.getSummary(),
      BasicForcePowers.getSummary(),
      AdvancedForcePowers.getSummary(),
    ]
    combineLatest(sources).subscribe(arr => {
      var newSummary: SummaryEntry[] = []
      newSummary = newSummary.concat(...arr)
      console.log('combineLatest:',newSummary)
      this.summary.next(newSummary)
    })
  }

  getSummary():Observable<SummaryEntry[]>{
    return this.summary.asObservable()
  }

  getTotalPoints():Observable<number> {
    const initial:SummaryEntry = {
      'catagory': 'total',
      'choice': '-',
      'points': 0,
    }
    return this.summary.pipe(map(array =>
      array.reduce((a, b) => {
        const c = { ...initial }
        c.points = a.points + b.points
        return c
      }, initial).points
    ))
  }
}
