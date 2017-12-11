export class Module{
    public ModuleId:number;
    public ParentId:number;
    public ActiveNode:string;
    public ModuleName:string;
    public Children:Module[];
    constructor(ModuleId:number,ParentId:number,ActiveNode:string,ModuleName:string,Children:Module[])
    {
        this.ModuleId=ModuleId;
        this.ParentId=ParentId;
        this.ActiveNode=ActiveNode;
        this.ModuleName=ModuleName;
        this.Children=Children;
    }
}