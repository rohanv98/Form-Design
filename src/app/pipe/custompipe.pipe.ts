import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "custompipe"
})
export class CustompipePipe implements PipeTransform {
  // transform(value: any, arg?: any): any {
  //   return arg === "" ? value : value.filter(el => el.title=== arg);
  // }

  transform(value: any, arg?: any): any {
    return arg === undefined
      ? value
      : value.filter(
          el => el.title.toLowerCase().indexOf(arg.toLowerCase()) !== -1
        );
  }
}
