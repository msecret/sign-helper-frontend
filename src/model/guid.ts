

export class Guid {
  private str : string;

  constructor(str : string) {
    this.str = str;
  }

  toString() {
    return this.str;
  }

  static getNewGuid() {
    // your favourite guid generation function could go here
    // ex: http://stackoverflow.com/a/8809472/188246
    let d = new Date().getTime();
    const guidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return new Guid(guidStr);
  }
}
