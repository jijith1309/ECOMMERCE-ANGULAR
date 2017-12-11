export class Seller{
    public Id:number;
    public name:string;
    public Address:string;
   
    constructor(ID:number,name:string,add:string)
    {
        this.Id=ID;
        this.name=name;
        this.Address=add;
    }
}