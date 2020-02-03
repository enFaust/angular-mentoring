import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MenuItem} from 'primeng/api';
import {MenuService} from "../../service/menu/menu.service";
import {filter} from 'rxjs/operators';
import {isNullOrUndefined} from "util";
import {BreadcrumbService} from "angular-crumbs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(private router: Router,private activatedRoute:ActivatedRoute, private  menuService: MenuService) {
    this.menu = menuService.getMenu();
    this.listenRouting()
  }

  ngOnInit() {
  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this.router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        target = this.menu;
        this.breadcrumbList.length = 0;
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          target = target.find(page => page.path.slice(2) === router);
          this.breadcrumbList.push({
            name: target.name,
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });

          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });
      }
    });
  }
}
