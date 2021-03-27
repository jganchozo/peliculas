import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string, size: string = 'w500'): string {

    if (!value) {
      return './assets/no-image-banner.jpg';
    }

    const url_image = `${URL}/${size}${value}`

    return url_image;
  }

}
