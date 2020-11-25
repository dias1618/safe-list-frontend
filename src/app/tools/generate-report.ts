import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
const download = require('downloadjs');

export class GenerateReport{

    private pdfDoc;
    private page;
    private width;
    private height;
    private altura;

    async init(){
        this.pdfDoc  = await PDFDocument.create();
        this.page    = this.pdfDoc.addPage();
        const { width, height } = this.page.getSize();
        this.width = width;
        this.height = height;
        this.altura = this.height - 50;
    }

    async addTitle(titulo:string, options:{fontSize:number}){
        const helviticaBoldFont = await this.pdfDoc.embedFont(StandardFonts.HelveticaBold)
        this.page.drawText(titulo, {
            x: 20,
            y: this.setAltura(20),
            size: options.fontSize,
            font: helviticaBoldFont,
        })
    }

    async addSubtitle(subtitulo:string, options:{fontSize:number}){
        const helviticaFont = await this.pdfDoc.embedFont(StandardFonts.Helvetica)
        this.page.drawText(subtitulo, {
            x: 20,
            y: this.setAltura(50),
            size: options.fontSize,
            font: helviticaFont,
        })
    }

    async addLine(line:string, options:{fontSize:number, margin:number}){
        const timesRomanFont = await this.pdfDoc.embedFont(StandardFonts.TimesRoman)
        this.page.drawText(line, {
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
                this.page.drawText(option.text, {
                    x: option.margin,
                    y: alturaRow,
                    size: option.fontSize,
                    font: timesRomanFont,
                })
            else{
                let form = this.pdfDoc.getForm();
                let presenca = form.createCheckBox(`participante.presenca${option.text}`)
                presenca.addToPage(this.page, { x: option.margin, y: alturaRow, width: 10, height: 10 })
            }
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