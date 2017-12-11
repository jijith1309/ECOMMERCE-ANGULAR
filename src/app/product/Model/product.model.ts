


export class Product{
    public Id:number;
    public name:string;
    public description:string;
    public imagePath:string[];
    public cost:number;
    constructor(ID:number,name:string,desc:string,imgPath:string[],pdtcost:number)
    {
        this.Id=ID;
        this.name=name;
        this.imagePath=imgPath;
        this.description=desc;
        this.imagePath=imgPath;
        this.cost=pdtcost;
    }
}