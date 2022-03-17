export class Construction {
  // {"id":1,"material":"Plastic","trade":"Carpenter","cost_code":"1-550 - Vehicular Access and Parking","price":2015,"active":true}
  [key: string]: string | number | boolean;
  id: number = 0;
  material: string = "Plastic";
  trade: string = "Carpenter";
  cost_code: string = "1-550 - Vehicular Access and Parking";
  price: number = 0;
  active: boolean = false;
}
