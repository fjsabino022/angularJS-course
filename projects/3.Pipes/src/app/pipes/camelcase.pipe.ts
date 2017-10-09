import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'camelcase'
})

export class CamelcasePipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase();
        const nombres: string[] = value.split(' ');

        if (todas) {
            // tslint:disable-next-line:forin
            for (const i in nombres) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }
        return nombres.join(' ');
    }
}
