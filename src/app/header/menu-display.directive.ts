import { Directive, ElementRef, HostListener, Input, OnInit, HostBinding, Renderer2 } from "@angular/core";
import { HeaderService } from "./header.service";
import { MenuCode } from "./models/menucode";

@Directive({
  selector:'[appPrivilageCheck]'
})

export class PrivilageCheckDirective implements OnInit{
    menuArray:MenuCode[]=[];
    menuInfo:MenuCode;
    @Input('appPrivilageCheck') privilage: string;

    constructor(private el: ElementRef,
        private renderer: Renderer2,
        private hdrService:HeaderService
        ) {

    }    
    ngOnInit(): void {
        this.BindPrivilages();
        this.CheckPrivilages();
    }

    CheckPrivilages(){
       
        //const menuStrArr = this.menuArray.map(r => r.ModuleCode);
        this.menuInfo=this.search(this.privilage,this.menuArray)
        
        if(this.menuInfo!==null)
        {
            this.renderer.setAttribute(this.el.nativeElement,'id',this.menuInfo.ModuleId.toString());
       
        }
        else{
            this.renderer.addClass(this.el.nativeElement,"hide")
        }
    }
    BindPrivilages(){
       
        var privilageList=JSON.parse(localStorage.getItem('UserPrivilages'));
        for(var i=0;i<privilageList.length;i++){
            let temp=new MenuCode(privilageList[i].ModuleId,privilageList[i].Code);
            this.menuArray.push(temp);
        }
        
    }
     search(nameKey:string, myArray:Array<MenuCode>){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].ModuleCode == nameKey) {
                return myArray[i];
            }
        }
        return null;
    }


}