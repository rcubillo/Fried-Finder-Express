// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// ```

var friendsData = [
	{
		name: "Carlos",
		photo: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg",
		scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
	},
	{
		name: "Carmela",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVAyIV7x-6OYC8OzI0QCeJ8yvW72Jj74-XNFn77fsrOq5u0iGhA",
		scores: [2, 5, 4, 1, 2, 3, 3, 2, 3, 3]
	},
	{
		name: "Daniel",
		photo: "https://learn.g2crowd.com/hubfs/Team%20Photos/Research/pszakiel.jpg",
		scores: [1, 1, 5, 3, 3, 5, 1, 2, 3, 4]
	},
	{
		name: "Julio",
		photo: "https://www.personalcaredentistry.com/wp-content/uploads/2015/11/iStock_000048749682_Large-smiling-young-man.jpg",
		scores: [3, 1, 3, 5, 2, 3, 2, 2, 5, 5]
	},
	{
		name: "Felipe Rodriguez",
		photo: "https://previews.123rf.com/images/sebra/sebra1505/sebra150500004/39553764-young-sad-man-crying.jpg",
		scores: [3, 1, 4, 4, 2, 4, 2, 5, 1, 3]
	},
	{
		name: "Rosalba Cordero",
		photo: "http://www.noticias-frescas.com/thumb/5/46891.jpg",
		scores: [5, 1, 5, 4, 5, 3, 5, 5, 5, 3]
	}
];

//Exporting the object with all data.
module.exports = friendsData;