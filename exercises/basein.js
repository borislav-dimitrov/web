function Basein(inpt) {
  let volume = Number(inpt[0]); // x litra dokato se napalni baseina
  let p1 = Number(inpt[1]); // debit = x litri za 1 hr
  let p2 = Number(inpt[2]); // debit = x litri za 1 hr
  let hours_missing = Number(inpt[3]); // kolko chasa go e nqmalo rabotnika

  let p1_water = p1 * hours_missing; // traba 1 = x l za x chasa
  let p2_water = p2 * hours_missing; // traba 2 = x l za x chasa
  let p_total = p1_water + p2_water; // x L za x chasa ot 2te trabi
  let p1_water_perc = (p1_water / p_total) * 100;
  let p2_water_perc = (p2_water / p_total) * 100;
  let basin_filled_perc = (p_total / volume) * 100; // kolko e palen baseina v %

  console.log([p1_water_perc, p2_water_perc, basin_filled_perc]);
}

Basein([1000, 100, 120, 3]);
