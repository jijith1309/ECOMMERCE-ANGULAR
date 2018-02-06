import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ProductMenuComponent } from "./product-menu/product-menu.component";
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { PrivilageCheckDirective } from "./menu-display.directive";
import { HeaderService } from "./header.service";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app.routing.module";




@NgModule({
    declarations:[
        HeaderComponent,
        ProductMenuComponent,
        TreeViewComponent,
        PrivilageCheckDirective
    ],
    exports:[
        HeaderComponent,
        ProductMenuComponent,
        AppRoutingModule
    ],
    imports:[
        CommonModule,
        AppRoutingModule
        
    ],
    providers:[
        HeaderService,
    ]
})
export class HeaderModule{}