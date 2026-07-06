// let user = {};
// [user.name, user.surname] = "John Smith".split(' ')

// console.log(user.name)
// console.log(user.surname)

// console.log("John Smith".split(' ').reverse().toString())

// let {width, title,height  } = { title: "Menu", height: 200, width: 100 }

// console.log(width)
// console.log(height)
// console.log(title)


let options = {
  title: "My menu",
  width: 123,
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100, //Значения по умолчанию
  height: h = 200, 
  items: [item1, item2]
  }) {
  console.log( `${title} ${w} ${h}` ); 
  console.log( item1 );
  console.log( item2 ); 
}

showMenu(options);