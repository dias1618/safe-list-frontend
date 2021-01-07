import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
const download = require('downloadjs');

export class GenerateReport{

    private pdfDoc;
    private pages:any[];
    private index;
    private width;
    private height;
    private altura;
    private contagemLinhas;

    async init(){
        this.pdfDoc  = await PDFDocument.create();
        this.index = 0;
        this.pages[this.index] = this.pdfDoc.addPage();
        const { width, height } = this.pages[this.index].getSize();
        this.width = width;
        this.height = height;
        this.altura = this.height - 50;
        this.contagemLinhas = 0;
        
    }

    async addTitle(titulo:string, options:{fontSize:number}){
        const helviticaBoldFont = await this.pdfDoc.embedFont(StandardFonts.HelveticaBold)
        this.pages[this.index].drawText(titulo, {
            x: 20,
            y: this.setAltura(20),
            size: options.fontSize,
            font: helviticaBoldFont,
        })
    }

    async addSubtitle(subtitulo:string, options:{fontSize:number}){
        const helviticaFont = await this.pdfDoc.embedFont(StandardFonts.Helvetica)
        this.pages[this.index].drawText(subtitulo, {
            x: 20,
            y: this.setAltura(50),
            size: options.fontSize,
            font: helviticaFont,
        })
    }

    async addLine(line:string, options:{fontSize:number, margin:number}){
        const timesRomanFont = await this.pdfDoc.embedFont(StandardFonts.TimesRoman)
        this.pages[this.index].drawText(line, {
            x: options.margin,
            y: this.setAltura(20),
            size: options.fontSize,
            font: timesRomanFont,
        })
    }

    async addRow(options:{text?:string, fontSize?:number, margin?:number, checkbox?:boolean}[]){
        const timesRomanFont = await this.pdfDoc.embedFont(StandardFonts.TimesRoman);
        let alturaRow:number = this.setAltura(20);
        for(let option of options){
            if(!option.checkbox)
                this.pages[this.index].drawText(option.text, {
                    x: option.margin,
                    y: alturaRow,
                    size: option.fontSize,
                    font: timesRomanFont,
                })
            else{
                let form = this.pdfDoc.getForm();
                let presenca = form.createCheckBox(option.text)
                presenca.addToPage(this.pages[this.index], { x: option.margin, y: alturaRow, width: 10, height: 10 })
            }
        }
        this.contagemLinhas++;

        if(this.contagemLinhas > 30){
            this.index++;
            this.pages[this.index] = this.pdfDoc.addPage();
            this.altura = this.height - 50;
            this.contagemLinhas = 0;
        }
        
    }

    async downloadFile(fileName:string){
        const pdfBytes = await this.pdfDoc.save()
        download(pdfBytes, `${fileName}.pdf`, "application/pdf");
    }

    private calcAlignCenter(titulo:string, fontSize:number):number{
        return this.width/2 - (titulo.length/2 * (fontSize/2-1));
    }

    private setAltura(espacamento:number):number{
        let atual = this.altura;
        this.altura -= espacamento;
        return atual;
    }

}