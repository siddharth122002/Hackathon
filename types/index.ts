export interface CardData{
    _id:number,
    image:string,
    title:string,
    start:Date,
    end:Date,
    level:string
}
export interface Timer{
    days:number,
    hours:number,
    minutes:number,
    seconds:number
}
export interface filtering{
    all:boolean,
    active:boolean,
    upcoming:boolean,
    past:boolean,
    easy:boolean,
    medium:boolean,
    hard:boolean
}