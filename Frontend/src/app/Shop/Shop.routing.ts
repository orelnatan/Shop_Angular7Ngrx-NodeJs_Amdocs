import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/Home/Home.component';
import { ProductView } from './Pages/ProductView/ProductView.component';

const routes: Routes = [
  //  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: Home },
    { path: 'product-view', component: ProductView },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
  
export class ShopRoutingModule {}