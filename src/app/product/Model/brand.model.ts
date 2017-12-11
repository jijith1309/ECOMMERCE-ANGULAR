export class Brand{
    public Id:number;
    public name:string;
    public description:string;
   
    constructor(ID:number,name:string,desc:string)
    {
        this.Id=ID;
        this.name=name;
        this.description=desc;
    }
}