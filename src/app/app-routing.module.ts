import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { TablesComponent } from './components/tables/tables.component';
import { RecentlyDeletedTasksComponent } from './components/recently-deleted-tasks/recently-deleted-tasks.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path:'home',component:TodosComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'table',component:TablesComponent},
  {path:'recentlyDeletedTasks',component:RecentlyDeletedTasksComponent},
  {path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
