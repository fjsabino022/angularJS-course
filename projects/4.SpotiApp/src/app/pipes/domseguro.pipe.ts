import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanaticer: DomSanitizer) {
  }
  transform(value: string, url: string): SafeResourceUrl {
    return this._domSanaticer.bypassSecurityTrustResourceUrl(url + value);
  }
}
