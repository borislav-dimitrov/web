function main(input) {
  // Definitions
  let width = Number(input[0]) * 100;
  let height = Number(input[1]) * 100;
  let corridor_height = 100;
  let workplace_w = 120;
  let workpalce_h = 70;
  let door_lost_workplace = 1;
  let katedra_lost_workplace = 2;
  let lost_workplaces = door_lost_workplace + katedra_lost_workplace;

  // Solution
  let useable_height = height - corridor_height;
  let workplaces_per_col = Math.floor(useable_height / workpalce_h);
  let workplaces_per_row = Math.floor(width / workplace_w);
  let total_workplaces =
    workplaces_per_col * workplaces_per_row - lost_workplaces;

  console.log(total_workplaces);
}

main(["15", "8.9"]);
main(["8.4", "5.2"]);
