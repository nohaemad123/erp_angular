import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { LayoutService } from '@shared/services/layout.service';
import { BreadCrumbItem } from '@shared/models';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MatIconModule,TranslocoModule,HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private _layoutService = inject(LayoutService);

  header={
    title:"dashboard.header.title",
    desc: "dashboard.header.desc",
    image:"assets/images/ui/user.svg"
  }
  
  sections = [
    {
      title:'sales',
      img:'',
      data:{
        title:'fiscal_period',
        dateFrom:new Date(),
        dateTo:new Date(),
        analytics:{
          amount:'+10',
          textAmount:'#0B8A00',
          percentage:'0',
        }
      }
    },
    {
      title:'purchase',
      img:'',
      data:{
        title:'fiscal_period',
        dateFrom:new Date(),
        dateTo:new Date(),
        analytics:{
          amount:'-1.1',
          textAmount:'#C10A0A',
          percentage:'5'
        }
      }
    },
    {
      title:'suppliers',
      img:'',
      data:{
        title:'fiscal_period',
        dateFrom:new Date(),
        dateTo:new Date(),
        analytics:{
          amount:'10',
          textAmount:'#0B8A00',
          percentage:'9'
        }
      }
    },
    {
      title:'clients',
      img:'',
      data:{
        title:'fiscal_period',
        dateFrom:new Date(),
        dateTo:new Date(),
        analytics:{
          amount:'10',
          textAmount:'#0B8A00',
          percentage:'9'
        }
      }
    }
  ]
  private BREADCRUMBS: BreadCrumbItem[] = [
    {
        name: 'Dashboard',
        link: '/Dashboard'
    },
    {
        name: 'Dashboard',
        link: ''
    }
];

  ngOnInit(): void {
    this._layoutService.breadCrumbSubj.next(this.BREADCRUMBS);

  }
}
