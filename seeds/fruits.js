exports.seed = async function(knex) {
  // .del() clears out our rows
  // .truncate does more that .del(), like resetting the autoincrementing ID
  await knex("fruits").truncate()

	await knex("fruits").insert([
		{ name: "dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red" },
		{ name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
		{ name: "rambutan", avgWeightOz: 1.1, delicious: true, color: "pink" },
		{ name: "lingonberry", avgWeightOz: 0.01, delicious: true, color: "red" },
		{ name: "golden gooseberry", avgWeightOz: 0.02, delicious: false, color: "yellow" },
	])
  
};


// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
