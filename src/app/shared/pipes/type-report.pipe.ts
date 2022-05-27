import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeReport'
})
export class TypeReportPipe implements PipeTransform {

  transform(value: string): string | undefined {
    if(value == 'previous-report') return 'Reporte previo';
    else if(value == 'posterior-report') return 'Reporte posterior';
    return undefined;
  }

}
