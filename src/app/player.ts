export class Player{
    name:String|null = null;
    winRate:number|null = null;
    ranking:number|null = null;

    constructor(name: string | null = null, winRate: number | null = null, ranking: number | null = null) {
        this.name = name;
        this.winRate = winRate;
        this.ranking = ranking;
      }
}