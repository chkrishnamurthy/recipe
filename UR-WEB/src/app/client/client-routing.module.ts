import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderviewComponent  } from '../client/headerview/headerview.component'
import { UploadviewComponent } from './uploadview/uploadview.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FooterComponent } from './footer/footer.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { ListviewComponent } from './listview/listview.component';
import { ProfileviewComponent } from './profileview/profileview.component';

const routes: Routes = [


  // { path : "headerview",component:HeaderviewComponent },
  // { path : "uploadview",component:UploadviewComponent }


  { path:'recipe', component:RecipeComponent,
  children:[{ path:"", component:HeaderviewComponent, outlet:"headerview" },
            { path:"", component:ListviewComponent, outlet:"middlecontent" },
            { path:"",  component:FooterComponent, outlet:"footer"  },
            { path:"uploadview",  component:UploadviewComponent, outlet:"middlecontent"  },
            { path:"detailview",  component:DetailviewComponent, outlet:"middlecontent"  },
            { path:"profileview",  component:ProfileviewComponent, outlet:"middlecontent"  }

          ]
 }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
