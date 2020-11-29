export class DateService{
    isoDate(date: string): string{
        return `1970-01-01T${date}:00.000`;
    }
}
