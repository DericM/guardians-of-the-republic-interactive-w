import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { SummaryEntry } from 'src/app/model/shared/catagory'
import { SummaryService } from 'src/app/services/summary.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  displayedColumns: string[] = ['catagory', 'choice', 'points']
  dataSource: Observable<SummaryEntry[]>
  total:Observable<number>

  constructor(private summaryService: SummaryService) {
    this.dataSource = this.summaryService.getSummary()
    this.total = this.summaryService.getTotalPoints()
  }

  ngOnInit(): void {

  }

}
