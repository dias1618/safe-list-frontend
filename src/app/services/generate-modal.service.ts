import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class GenerateModal{

    constructor(
        public dialog: MatDialog
    ) { }

    generate(options:{component:any, width?:string, height?:string, afterClose?:Function, data?:any}){
        const dialogRef = this.dialog.open(options.component, {
            width: (options.width ? options.width : '440px'),
            height: (options.height ? options.height : '280px'),
            panelClass: 'app-modal',
            data: options.data
        });
      
        dialogRef.afterClosed().subscribe(result => {
            if(result)
              options.afterClose(result);
        });
    }

}