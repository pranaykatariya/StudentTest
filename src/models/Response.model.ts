export class Response {
    public correctOption: string;
    public checkedOption: string;

    constructor( correctOption: string,checkedOption: string)
    {        
        this.correctOption = correctOption;
        this.checkedOption = checkedOption;
    }
}