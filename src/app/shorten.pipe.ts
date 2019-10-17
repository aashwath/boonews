import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, args?: number) {
    return value.length > args ? `${value.substr(0, args)}...` : value;
  }
}
