import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipe1"
})
export class Pipe1Pipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const result =
      value.length > args[0] ? value.substring(0, args[0]) + "..." : value;
    console.log(value, args);
    return result;
  }
}
