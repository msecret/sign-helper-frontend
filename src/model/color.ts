
class Hex {
  private hex : string = "#000000";

  constructor(hex : string) {
    this.hex = (hex.toString().length == 6) ?
      "#"+hex : (hex.toString().length == 7) ?
        hex : null;
  }

  public toString() : string {
    return this.hex;
  }

}

export class Color {
  private hex : Hex;

  constructor(color : (string | Hex)) {
    let hex : Hex;

    if (color instanceof Hex) {
      hex = color;
    } else {
      hex = new Hex(color);
    }

    this.hex = hex;
  }
}
