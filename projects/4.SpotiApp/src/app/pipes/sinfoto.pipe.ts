import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  nofoto: string = 'assets/images/noimage.png';

  transform(value: any): string {
    if (!value) {
      return this.nofoto;
    }

    return (value.length > 0) ? value[1].url : this.nofoto;
  }

}
