export class Quote {
  constructor(public id:number,public quoting:string, public author:string, public submitter:string, public upVote:number, public downVote:number, public time:number, public highest:boolean){
    this.upVote = 0;
    this.downVote = 0;
    this.time=0;
    this.highest= false;
  }
}
