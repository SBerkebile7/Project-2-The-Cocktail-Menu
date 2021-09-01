const { Post } = require('../models');

const postdata = [
    {
        title: 'Margarita',
        post_content: `The margarita is the most popular cocktail in America. It’s also the most popular cocktail in every major U.S. market except Chicago, where margaritas are strangely not even in the top 5. What’s even more remarkable is that margaritas cost almost 50 cents more than the national average cocktail price of $9 and they’re still the most popular cocktail. Bartenders can’t afford not to know how to make margaritas at the drop of a hat. Especially during afternoons and early evenings, when margaritas are most popular. They're also the perfect chance to try and upsell a customer.
        
        Margarita Ingredients
        2 oz. tequila
        1 oz. Cointreau
        1 oz. lime juice
        1 lime slice
        1 pinch salt (for salted rim)
        How to Make a Margarita
        Create salted rim (coat rim of glass with salt) and fill with ice
        Add tequila, Cointreau, lime juice, and ice to a shaker. Shake.
        Strain into glass
        Garnish with lime slice
        Tips for Making a Margarita
        Shake, never stir, a margarita
        Always use 100% agave tequila`,
        user_id: 1
    },
    {
        title: 'Martini',
        post_content: `Martinis are probably the easiest cocktail to make in the whole wide world. They definitely deserve a spot in our easy, basic cocktails section. If not for one thing: they’re ridiculously popular. They are the 2nd most popular drink in the U.S. behind the margarita. They’re also most frequently enjoyed at night. That says a lot about the martini. Gin is included in some aphrodisiac drinks, after all. Since its invention in 1863, it’s held a sort of effortless mystique perfectly at home when darkness falls. Learn to make a perfect one.

        Martini Ingredients
        3 oz. gin
        1.5 oz. dry vermouth
        1 speared olive or lemon twist
        How to Make a Martini
        Pour gin and vermouth into a mixer with ice cubes, stir
        Strain into a chilled martini glass
        Garnish with an olive or lemon twist
        Tips for Making a Martini
        Chill some martini glasses in a freezer to make sure you have properly chilled glasses ready to go
        Stir for 30 seconds
        Cut the lemon twist over the martini glass, to capture any falling zest
        `,
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
