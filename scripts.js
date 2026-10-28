
const categories = document.querySelectorAll(".category");
const recipesScreen = document.querySelector("#recipes");
const recipesTitle = document.querySelector("#recipes-title");
const recipesDescription = document.querySelector("#recipes-description");
const backButton = document.querySelector("#back-button");
const favoritesButton = document.querySelector("#favorites-button");

// ==============================
// SOUPS ♡
// ==============================

const soupRecipes = [
    {
        name: "Chicken Broth",
        category: "soups",
        image: "https://cdn.sanity.io/images/dmulwxbh/production/9afba942c8cf366d06dc2940a90a68316830dc66-1024x1024.jpg",
        time: "1 hour 15 minutes",
        ingredients: [
            "500 g chicken",
            "2 carrots",
            "1 onion",
            "2 litres water",
            "Salt and black pepper",
            "Fresh dill"
        ],
        steps: [
            "Put the chicken in a large pot and add water.",
            "Bring to a boil and carefully remove any foam.",
            "Peel the carrots and onion, then add them to the pot.",
            "Simmer gently until the chicken is fully cooked.",
            "Season with salt and pepper.",
            "Add fresh dill before serving."
        ]
    },
    {
        name: "Borscht",
        category: "soups",
        image: "https://food-culture-winnipeg.netlify.app/assets/borscht.png",
        time: "1 hour 30 minutes",
        ingredients: [
            "2 medium beetroots",
            "2 potatoes",
            "1 carrot",
            "1 onion",
            "200 g cabbage",
            "1 tablespoon tomato paste",
            "1.5 litres broth",
            "Salt and pepper",
            "Sour cream"
        ],
        steps: [
            "Peel and grate the beetroots and carrot.",
            "Chop the onion, potatoes and cabbage.",
            "Cook the onion and carrot in a little oil.",
            "Add the beetroot and tomato paste.",
            "Pour in the broth.",
            "Add the potatoes and cabbage.",
            "Simmer until all the vegetables are soft.",
            "Season to taste and serve with sour cream."
        ]
    },
    {
        name: "Cheese Soup",
        category: "soups",
        image: "https://cdn.santa.lv/media/2024/10/6/square/b63e218c1e5c.jpg",
        time: "35 minutes",
        ingredients: [
            "200 g processed cheese",
            "3 potatoes",
            "1 carrot",
            "1 onion",
            "1 litre broth",
            "Salt and black pepper",
            "Fresh herbs"
        ],
        steps: [
            "Peel and chop the potatoes, carrot and onion.",
            "Bring the broth to a boil in a pot.",
            "Add the vegetables and cook until soft.",
            "Add the processed cheese in small pieces.",
            "Stir until the cheese melts into the soup.",
            "Season to taste and serve with fresh herbs."
        ]
    }
];

// ==============================
// SALADS ♡
// ==============================

const saladRecipes = [
    {
        name: "Tomato Cheese Salad",
        category: "salads",
        image: "https://img.pikbest.com/backgrounds/20260212/fresh-caprese-salad-with-tomatoes-mozzarella-and-basil-on-a-wooden-rustic-surface_15913475.jpg%21w700wp",
        time: "10 minutes",
        ingredients: [
            "3 ripe tomatoes",
            "100 g hard cheese",
            "2 tablespoons mayonnaise",
            "1 garlic clove (optional)",
            "Salt and black pepper"
        ],
        steps: [
            "Wash the tomatoes and cut them into small pieces.",
            "Grate the cheese.",
            "If you like garlic, peel and finely grate the garlic clove.",
            "Put the tomatoes and cheese in a bowl.",
            "Add mayonnaise and garlic, then mix gently.",
            "Season with salt and pepper. Serve fresh."
        ]
    },
    {
        name: "Caesar Salad",
        category: "salads",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
        time: "25 minutes",
        ingredients: [
            "1 chicken breast",
            "1 romaine lettuce",
            "40 g parmesan cheese",
            "1 cup croutons",
            "2 tablespoons Caesar dressing",
            "Olive oil, salt and pepper"
        ],
        steps: [
            "Season the chicken with salt and pepper.",
            "Cook the chicken in a pan with olive oil until fully cooked.",
            "Let the chicken rest, then slice it.",
            "Wash and chop the lettuce.",
            "Place the lettuce and chicken in a large bowl.",
            "Add the croutons, parmesan and Caesar dressing.",
            "Toss gently and serve."
        ]
    },
    {
        name: "Greek Salad",
        category: "salads",
        image: "https://www.orthomol.com/cdn/ernaehrung/lebensmittel/kraeuter/oregano/oregano-mittelmeerdiaet.jpg?cb=1768996285&h=1755&m=.jpg&q=100&w=2340&x=jpeg",
        time: "15 minutes",
        ingredients: [
            "3 tomatoes",
            "1 cucumber",
            "150 g feta cheese",
            "Half a red onion",
            "A handful of olives",
            "2 tablespoons olive oil",
            "Dried oregano"
        ],
        steps: [
            "Wash the tomatoes and cucumber.",
            "Cut the tomatoes and cucumber into bite-sized pieces.",
            "Slice the red onion thinly.",
            "Place the vegetables and olives in a bowl.",
            "Add the feta cheese.",
            "Drizzle with olive oil and sprinkle with oregano.",
            "Mix gently and serve."
        ]
    },
    {
        name: "Tomato Cucumber Salad",
        category: "salads",
        image: "https://d26z5keclpxl8.cloudfront.net/web-dist/fotos/productos/1295/galeria/2716/jpg/queso_chacra_2100_600x600.jpg",
        time: "10 minutes",
        ingredients: [
            "3 tomatoes",
            "1 cucumber",
            "Half an onion (optional)",
            "Fresh dill or parsley",
            "1 tablespoon olive oil",
            "Salt and black pepper"
        ],
        steps: [
            "Wash the tomatoes and cucumber.",
            "Cut them into small pieces.",
            "Slice the onion thinly, if using.",
            "Chop the fresh herbs.",
            "Mix everything in a bowl.",
            "Add olive oil, salt and pepper.",
            "Mix and serve immediately."
        ]
    },
    {
        name: "Belochka Salad",
        category: "salads",
        image: "https://images.news.ru/2025/06/10/jNsOk9KSnWQCkEf9Cn4jJXc4kMuoXIMs21w3xeQv_1200.png",
        time: "15 minutes",
        ingredients: [
            "2 processed cheese portions",
            "3 boiled eggs",
            "2 garlic cloves",
            "3 tablespoons mayonnaise",
            "Salt and black pepper"
        ],
        steps: [
            "Boil the eggs and let them cool.",
            "Peel the eggs and grate them.",
            "Grate the processed cheese.",
            "Peel and finely grate the garlic.",
            "Mix the eggs, cheese and garlic in a bowl.",
            "Add mayonnaise and mix well.",
            "Season to taste and serve chilled."
        ]
    },
    {
        name: "Crab Stick Salad",
        category: "salads",
        image: "https://tasteit.com/uploads/recipes/0/96.jpg",
        time: "20 minutes",
        ingredients: [
            "200 g crab sticks",
            "3 boiled eggs",
            "150 g sweetcorn",
            "1 cucumber",
            "3 tablespoons mayonnaise",
            "Salt and black pepper"
        ],
        steps: [
            "Boil the eggs and let them cool.",
            "Cut the crab sticks into small pieces.",
            "Peel the eggs and cut them into cubes.",
            "Wash and dice the cucumber.",
            "Drain the sweetcorn.",
            "Mix everything in a bowl.",
            "Add mayonnaise, season to taste and chill before serving."
        ]
    }
];

// ==============================
// MEAT ♡
// ==============================

const meatRecipes = [
    {
        name: "Homemade Cutlets",
        category: "meat",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
        time: "40 minutes",
        ingredients: [
            "500 g minced meat",
            "1 onion",
            "1 egg",
            "3 tablespoons breadcrumbs",
            "Salt and black pepper",
            "2 tablespoons oil"
        ],
        steps: [
            "Finely chop or grate the onion.",
            "Mix the minced meat, onion, egg and breadcrumbs.",
            "Add salt and black pepper.",
            "Shape the mixture into patties.",
            "Heat the oil in a frying pan.",
            "Fry the patties on both sides until golden and cooked through."
        ]
    },
    {
        name: "Braised Meat",
        category: "meat",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
        time: "1 hour 30 minutes",
        ingredients: [
            "600 g beef or pork",
            "1 onion",
            "2 carrots",
            "400 ml broth or water",
            "1 tablespoon tomato paste",
            "1 tablespoon oil",
            "Salt and black pepper"
        ],
        steps: [
            "Cut the meat into bite-sized pieces.",
            "Chop the onion and carrots.",
            "Heat the oil in a pot and brown the meat.",
            "Add the onion and carrots.",
            "Stir in the tomato paste.",
            "Pour in the broth or water.",
            "Cover and simmer gently until the meat is tender.",
            "Season with salt and pepper before serving."
        ]
    },
    {
        name: "Breaded Chops",
        category: "meat",
        image: "https://www.culinaryhill.com/wp-content/uploads/2021/08/Pork-Schnitzel-Culinary-Hill-LR-05-edited.jpg",
        time: "30 minutes",
        ingredients: [
            "500 g pork or chicken fillets",
            "1 egg",
            "4 tablespoons flour",
            "5 tablespoons breadcrumbs",
            "Salt and black pepper",
            "Oil for frying"
        ],
        steps: [
            "Cut the meat into slices.",
            "Place each slice between two sheets of baking paper and gently flatten it.",
            "Season with salt and pepper.",
            "Prepare three plates: flour, beaten egg and breadcrumbs.",
            "Coat each piece in flour, egg and breadcrumbs.",
            "Heat oil in a frying pan.",
            "Fry until golden and fully cooked inside."
        ]
    },
    {
        name: "Chicken Nuggets",
        category: "meat",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800",
        time: "30 minutes",
        ingredients: [
            "500 g chicken breast",
            "1 egg",
            "4 tablespoons flour",
            "100 g breadcrumbs",
            "Salt and paprika",
            "Oil for cooking"
        ],
        steps: [
            "Cut the chicken into small pieces.",
            "Season with salt and paprika.",
            "Put flour, beaten egg and breadcrumbs into separate bowls.",
            "Coat each chicken piece in flour, egg and breadcrumbs.",
            "Place the nuggets on a baking tray with baking paper and lightly brush with oil.",
            "Bake at 200°C until golden and fully cooked, turning halfway through.",
            "Serve with your favourite sauce."
        ]
    },
    {
        name: "Oven-Roasted Chicken",
        category: "meat",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
        time: "1 hour 20 minutes",
        ingredients: [
            "1 whole chicken, about 1.5 kg",
            "2 tablespoons olive oil",
            "3 garlic cloves",
            "1 teaspoon paprika",
            "1 teaspoon dried herbs",
            "Salt and black pepper",
            "Potatoes, optional"
        ],
        steps: [
            "Preheat the oven to 200°C.",
            "Pat the chicken dry with paper towels.",
            "Mix the oil, crushed garlic, paprika, herbs, salt and pepper.",
            "Rub the mixture over the chicken.",
            "Place the chicken in a roasting dish.",
            "Roast until golden and fully cooked, usually around 70–90 minutes depending on its size.",
            "Check that the thickest part reaches 75°C.",
            "Rest for 10 minutes before carving and serving."
        ]
    }
];


const sideDishRecipes = [
    {
        name: "Mashed Potatoes",
        category: "side-dishes",
        image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/cream_mashed_potato.jpg",
        time: "30 min",
        ingredients: [
            "6 potatoes",
            "50 g butter",
            "100 ml milk",
            "Salt to taste"
        ],
        steps: [
            "Peel and cut the potatoes into pieces.",
            "Boil them in salted water for 20 minutes, until soft.",
            "Drain the water.",
            "Add butter and warm milk.",
            "Mash until smooth and creamy. Add salt to taste."
        ]
    },
    {
        name: "Country-Style Potatoes",
        category: "side-dishes",
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=800",
        time: "45 min",
        ingredients: [
            "5 potatoes",
            "2 tablespoons oil",
            "1 teaspoon paprika",
            "1 teaspoon garlic powder",
            "Salt and black pepper"
        ],
        steps: [
            "Preheat the oven to 200°C.",
            "Wash the potatoes and cut them into wedges.",
            "Mix the potatoes with oil, paprika, garlic powder, salt and pepper.",
            "Place them on a baking tray in one layer.",
            "Bake for 35–45 minutes until golden and crispy."
        ]
    },
    {
        name: "Fried Potatoes",
        category: "side-dishes",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800",
        time: "30 min",
        ingredients: [
            "5 potatoes",
            "1 onion",
            "2 tablespoons oil",
            "Salt and black pepper"
        ],
        steps: [
            "Peel the potatoes and cut them into thin slices.",
            "Heat the oil in a frying pan.",
            "Add the potatoes and fry over medium heat.",
            "Cut the onion and add it to the pan.",
            "Fry until the potatoes are golden and cooked through.",
            "Season with salt and pepper before serving."
        ]
    },
    {
        name: "Pasta",
        category: "side-dishes",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
        time: "15 min",
        ingredients: [
            "200 g pasta",
            "Water",
            "Salt",
            "1 tablespoon butter"
        ],
        steps: [
            "Bring a saucepan of salted water to a boil.",
            "Add the pasta.",
            "Cook according to the instructions on the package.",
            "Drain the water carefully.",
            "Add butter and mix well.",
            "Serve warm."
        ]
    },
    {
        name: "Rice",
        category: "side-dishes",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800",
        time: "20 min",
        ingredients: [
            "200 g rice",
            "400 ml water",
            "Salt to taste"
        ],
        steps: [
            "Rinse the rice with cold water.",
            "Put the rice, water and salt in a saucepan.",
            "Bring to a boil.",
            "Cover with a lid and cook over low heat for 15–20 minutes, or according to the package instructions.",
            "Let the rice rest for 5 minutes.",
            "Fluff with a fork and serve."
        ]
    }
];


const sweetRecipes = [
    {
        name: "Tiramisu",
        category: "sweet",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
        time: "30 min + chilling",
        ingredients: [
            "250 g mascarpone",
            "200 ml whipping cream",
            "80 g sugar",
            "200 g ladyfinger biscuits",
            "200 ml strong coffee, cooled",
            "Cocoa powder for dusting"
        ],
        steps: [
            "Prepare the coffee and let it cool completely.",
            "Whip the cream with the sugar until soft peaks form.",
            "Gently mix the mascarpone until smooth.",
            "Fold the whipped cream into the mascarpone.",
            "Quickly dip each ladyfinger into the cooled coffee.",
            "Arrange a layer of biscuits in a dish.",
            "Spread half of the cream mixture over the biscuits.",
            "Add another layer of coffee-dipped biscuits and the remaining cream.",
            "Cover and refrigerate for at least 4 hours.",
            "Dust with cocoa powder before serving."
        ]
    },

    {
        name: "Pancakes",
        category: "sweet",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
        time: "25 min",
        ingredients: [
            "200 g flour",
            "2 eggs",
            "300 ml milk",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "A pinch of salt",
            "Butter or oil for frying"
        ],
        steps: [
            "Whisk the eggs, milk and sugar in a bowl.",
            "Add the flour, baking powder and salt.",
            "Mix until the batter is smooth.",
            "Heat a lightly greased frying pan over medium heat.",
            "Pour a small amount of batter into the pan.",
            "Cook until bubbles appear, then flip the pancake.",
            "Cook the other side until golden.",
            "Serve with berries, jam, honey or chocolate."
        ]
    },
    {
        name: "Chocolate Brownies",
        category: "sweet",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
        escription: "Rich, fudgy chocolate brownies with a soft center.",
        ingredients: [
            "200 g dark chocolate",
            "150 g butter",
            "150 g sugar",
            "3 eggs",
            "100 g flour",
            "2 tbsp cocoa powder"
        ],
        steps: [
            "Preheat the oven to 180°C.",
            "Melt the chocolate and butter together.",
            "Mix in the sugar and eggs.",
            "Add the flour and cocoa powder. Stir until smooth.",
            "Pour into a lined baking pan.",
            "Bake for 25–30 minutes and let cool before cutting."
        ]
    },


];


const savoryRecipes = [
    {
        name: "Draniki",
        category: "savory",
        image: "https://images.silpo.ua/v2/products/640x640/webp/5398c3d0-64e7-41b4-ad89-4ca66187b153.jpg",
        ingredients: [
            "5 potatoes",
            "1 egg",
            "2 tablespoons flour",
            "1 small onion",
            "Salt and black pepper",
            "Oil for frying",
            "Sour cream for serving"
        ],
        steps: [
            "Peel and grate the potatoes and onion.",
            "Squeeze out excess liquid.",
            "Add the egg, flour, salt and pepper.",
            "Mix everything together.",
            "Heat oil in a frying pan.",
            "Spoon the mixture into the pan and flatten slightly.",
            "Fry on both sides until golden and cooked through.",
            "Serve hot with sour cream."
        ]
    },
    {
        name: "Fried Eggs with Bacon",
        category: "savory",
        image: "https://images.pexels.com/photos/5894551/pexels-photo-5894551.jpeg",
        time: "15 min",
        ingredients: [
            "2 eggs",
            "3–4 strips of bacon",
            "Salt",
            "Black pepper",
            "A little oil, if needed"
        ],
        steps: [
            "Heat a frying pan over medium heat.",
            "Fry the bacon until golden and crispy.",
            "Remove some excess fat if needed.",
            "Crack the eggs into the pan.",
            "Cook until the egg whites are set.",
            "Season with salt and pepper.",
            "Serve warm."
        ]
    },
    {
        name: "Ham and Cheese Omelette",
        category: "savory",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
        time: "15 min",
        ingredients: [
            "3 eggs",
            "50 ml milk",
            "50 g ham",
            "50 g grated cheese",
            "Salt and black pepper",
            "1 teaspoon butter"
        ],
        steps: [
            "Beat the eggs with milk, salt and pepper.",
            "Cut the ham into small pieces.",
            "Melt the butter in a frying pan.",
            "Pour the egg mixture into the pan.",
            "Add the ham and grated cheese.",
            "Cook over low heat until the eggs are set.",
            "Fold the omelette in half and serve."
        ]
    },
    {
        name: "Mini Pizzas",
        category: "savory",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
        time: "30 min",
        ingredients: [
            "1 pack of ready-made pizza dough",
            "100 g tomato sauce",
            "150 g grated mozzarella",
            "100 g ham or pepperoni",
            "Oregano to taste"
        ],
        steps: [
            "Preheat the oven according to the dough package instructions.",
            "Cut the dough into small circles.",
            "Place the circles on a baking tray.",
            "Spread tomato sauce over each piece.",
            "Add cheese and your chosen toppings.",
            "Sprinkle with oregano.",
            "Bake according to the dough instructions until golden and cooked through."
        ]
    },
    {
        name: "Lasagna",
        category: "savory",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800",
        time: "1 hour",
        ingredients: [
            "9–12 lasagna sheets",
            "400 g minced beef",
            "1 onion",
            "400 g chopped tomatoes",
            "2 tablespoons tomato paste",
            "200 g grated mozzarella",
            "400 ml milk",
            "30 g butter",
            "2 tablespoons flour",
            "Salt and black pepper",
            "Italian herbs"
        ],
        steps: [
            "Preheat the oven to 180°C.",
            "Chop the onion and fry it in a pan.",
            "Add the minced beef and cook until browned.",
            "Add the chopped tomatoes, tomato paste, salt, pepper and herbs.",
            "Simmer the meat sauce for 10–15 minutes.",
            "For the white sauce, melt the butter in a saucepan.",
            "Stir in the flour, then gradually add the milk while whisking.",
            "Cook until the sauce thickens.",
            "Spread a little meat sauce in a baking dish.",
            "Add lasagna sheets, meat sauce, white sauce and cheese in layers.",
            "Repeat the layers and finish with cheese.",
            "Bake for 35–45 minutes, or according to the pasta package instructions.",
            "Let the lasagna rest for 10 minutes before serving."
        ]
    },
    {
    name: "Classic Pancakes",
    category: "sweet",
    image: "https://lesbonnesrecettes.fr/images/seo/recette/crepes-gourmandes-de-gervaise-la-sirene-la-recette-parfaite-487.webp",
    description: "Thin, soft homemade pancakes, perfect with jam, honey or condensed milk.",
    ingredients: [
        "500 ml milk",
        "2 eggs",
        "200 g flour",
        "2 tbsp sugar",
        "1 pinch of salt",
        "2 tbsp vegetable oil"
    ],
    instructions: [
        "Whisk the eggs with sugar and salt.",
        "Add the milk and mix well.",
        "Gradually add the flour and whisk until smooth.",
        "Stir in the vegetable oil.",
        "Heat a lightly oiled frying pan.",
        "Pour in a thin layer of batter.",
        "Fry on both sides until golden."
    ]
}
];




// ==============================
// ALL RECIPES ♡
// ==============================

const allRecipes = [
    ...soupRecipes,
    ...saladRecipes,
    ...meatRecipes,
    ...sideDishRecipes,
    ...sweetRecipes,
    ...savoryRecipes
];

// ==============================
// FAVORITES ♡
// ==============================

let favorites = JSON.parse(
    localStorage.getItem("kitchenFavorites") || "[]"
);

let currentCategory = "soups";

function saveFavorites() {
    localStorage.setItem(
        "kitchenFavorites",
        JSON.stringify(favorites)
    );
}

function toggleFavorite(recipeName) {
    if (favorites.includes(recipeName)) {
        favorites = favorites.filter(function(name) {
            return name !== recipeName;
        });
    } else {
        favorites.push(recipeName);
    }

    saveFavorites();
}

// ==============================
// SHOW RECIPE CARDS ♡
// ==============================

function showRecipeCards(recipes, heading) {
    recipesTitle.textContent = heading;
    recipesDescription.innerHTML = "";

    const intro = document.createElement("p");
    intro.textContent = "Choose something delicious ♡";
    recipesDescription.appendChild(intro);

    if (recipes.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No recipes here yet ♡";
        recipesDescription.appendChild(message);
        return;
    }

    const grid = document.createElement("div");
    grid.className = "recipe-grid";

    recipes.forEach(function(recipe) {
        const card = document.createElement("div");
        card.className = "recipe-card";

        // Favorite heart
        const heart = document.createElement("button");
        heart.className = "favorite-button";
        heart.textContent = favorites.includes(recipe.name) ? "♥" : "♡";
        heart.title = "Add to favorites";
        heart.setAttribute("aria-label", "Toggle favorite");

        if (favorites.includes(recipe.name)) {
            heart.classList.add("is-favorite");
        }

        heart.addEventListener("click", function() {
            toggleFavorite(recipe.name);

            if (currentCategory === "favorites") {
                showFavorites();
            } else {
                showRecipeCards(recipes, heading);
            }
        });

        // Recipe image and name
        const openButton = document.createElement("button");
        openButton.className = "recipe-open";

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;
        img.loading = "lazy";

        const name = document.createElement("span");
        name.textContent = recipe.name;

        const time = document.createElement("small");
        time.textContent = "♡ " + recipe.time;

        openButton.appendChild(img);
        openButton.appendChild(name);
        openButton.appendChild(time);

        openButton.addEventListener("click", function() {
            showFullRecipe(recipe.name);
        });

        card.appendChild(heart);
        card.appendChild(openButton);
        grid.appendChild(card);
    });

    recipesDescription.appendChild(grid);
}

// ==============================
// OPEN A RECIPE CATEGORY ♡
// ==============================

function showCategoryRecipes(categoryName) {
    const recipes = allRecipes.filter(function(recipe) {
        return recipe.category === categoryName;
    });

    const headings = {
        soups: "Our Soups ♡",
        salads: "Fresh Salads ♡",
        meat: "Meat Recipes ♡",
        "side-dishes": "Side Dishes ♡",
        savory: "Savory Recipes ♡",
        sweet: "Sweet Recipes ♡"
    };

    showRecipeCards(
        recipes,
        headings[categoryName] || "Our Recipes ♡"
    );
}

function showSoupRecipes() {
    showCategoryRecipes("soups");
}

function showSaladRecipes() {
    showCategoryRecipes("salads");
}

function showFavorites() {
    const favoriteRecipes = allRecipes.filter(function(recipe) {
        return favorites.includes(recipe.name);
    });

    showRecipeCards(favoriteRecipes, "Your Favorites ♡");
}

// ==============================
// SHOW A FULL RECIPE ♡
// ==============================

function showFullRecipe(recipeName) {
    const recipe = allRecipes.find(function(item) {
        return item.name === recipeName;
    });

    if (!recipe) return;

    recipesTitle.textContent = recipe.name;
    recipesDescription.innerHTML = "";

    const container = document.createElement("div");
    container.className = "full-recipe";

    // Favorite button
    const favoriteButton = document.createElement("button");
    favoriteButton.className = "favorite-button";

    function updateFavoriteButton() {
        const isFavorite = favorites.includes(recipe.name);

        favoriteButton.textContent = isFavorite
            ? "♥ Remove from favorites"
            : "♡ Add to favorites";

        favoriteButton.classList.toggle("is-favorite", isFavorite);
    }

    updateFavoriteButton();

    favoriteButton.addEventListener("click", function() {
        toggleFavorite(recipe.name);
        updateFavoriteButton();
    });

    // Cooking time
    const time = document.createElement("p");
    time.className = "cooking-time";
    time.textContent = "♡ Cooking time: " + recipe.time;

    // Ingredients
    const ingredientsTitle = document.createElement("h3");
    ingredientsTitle.textContent = "Ingredients";

    const ingredientsList = document.createElement("ul");

    recipe.ingredients.forEach(function(ingredient) {
        const item = document.createElement("li");
        item.textContent = ingredient;
        ingredientsList.appendChild(item);
    });

    // Instructions
    const stepsTitle = document.createElement("h3");
    stepsTitle.textContent = "How to make it";

    const stepsList = document.createElement("ol");

    recipe.steps.forEach(function(step) {
        const item = document.createElement("li");
        item.textContent = step;
        stepsList.appendChild(item);
    });

    // Back button
    const recipeBackButton = document.createElement("button");
    recipeBackButton.textContent = "← Back to recipes";

    recipeBackButton.addEventListener("click", function() {
        if (currentCategory === "favorites") {
            showFavorites();
        } else {
            showCategoryRecipes(currentCategory);
        }
    });

    container.appendChild(favoriteButton);
    container.appendChild(time);
    container.appendChild(ingredientsTitle);
    container.appendChild(ingredientsList);
    container.appendChild(stepsTitle);
    container.appendChild(stepsList);
    container.appendChild(recipeBackButton);

    recipesDescription.appendChild(container);
}

// ==============================
// CATEGORY NAVIGATION ♡
// ==============================

function openCategory(categoryName) {
    currentCategory = categoryName;

    categories.forEach(function(category) {
        category.hidden = true;
    });

    recipesScreen.hidden = false;

    if (categoryName === "favorites") {
        showFavorites();
    } else {
        showCategoryRecipes(categoryName);
    }

    recipesScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Category buttons
categories.forEach(function(category) {
    const button = category.querySelector("button");

    if (button) {
        button.addEventListener("click", function() {
            openCategory(category.dataset.category);
        });
    }
});

// Favorites button
favoritesButton.addEventListener("click", function() {
    openCategory("favorites");
});

// Back to categories
backButton.addEventListener("click", function() {
    recipesScreen.hidden = true;

    categories.forEach(function(category) {
        category.hidden = false;
    });

    currentCategory = "soups";

    document.querySelector(".site-header").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
