export class DiasSemanaEnum{

    private diasSemana:string[] = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ]

    public getWeekDay(dayWeek:number){
        return this.diasSemana[dayWeek];
    }

}
