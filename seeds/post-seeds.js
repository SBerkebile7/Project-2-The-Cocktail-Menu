const { Post } = require('../models');

const postdata = [
    {
        title: 'Margarita.',
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
    },
    {
        title: 'Old Fashioned',
        post_content: `The old fashioned is the original cocktail. There was a time when there weren’t thousands of cocktails. There was just one cocktail. And it was defined in 1806 as “a potent concoction of spirits, bitters, water, and sugar.” If you had spirits, bitters, water, and sugar, you could make the cocktail. Make it with bourbon, brandy, or rye, it didn't matter. It was a simpler time. Of course, it wasn’t called an old fashioned back then. It was only after the invention of hundreds of new cocktails that the drinking community looked back at the original recipe with nostalgia. “Give me a cocktail,” they’d say. “What kind?” the barkeep would ask. “One of those old fashioned ones.” 

        Old Fashioned Ingredients
        1.5 oz. bourbon whiskey
        1 sugar cube
        2 dashes Angostura bitters
        1 teaspoon water
        1 orange slice or cherry
        How to Make an Old Fashioned
        Place sugar cube in old fashioned glass and cover in bitters
        Add a teaspoon of water, muddle until sugar cube dissolved
        Fill glass with ice, add whiskey
        Garnish with orange slice or cherry
        Tips for Making an Old Fashioned
        The traditional recipe calls for bourbon, but rye whiskey, scotch, and brandy are popular substitutes for those who want less of the vanilla and caramel notes bourbon is known for
        If sugar cubes aren’t handy or there’s no time or space to muddle, .75 oz. simple syrup can replace the sugar cube
        `,
        user_id: 4
    },
    {
        title: 'Mimosa',
        post_content: `The mimosa is the 4th most popular cocktail in the U.S. It’s, unsurprisingly, most popular during the morning and afternoon. It’s said that a bartender at the Ritz in Paris invented the mimosa in 1925. It’s also said that it was invented around the turn of the 20th century in the Mediterranean. Though, that’s maybe doing some disservice to the Spaniards who have been drinking orange juice and sparkling wine for centuries. Who can really say where these things come from? It gets its name from the yellow-flowering mimosa plant. That we do know. If you have a brunch service, expect to go through many wine bottle sizes or cases of wine on this cocktail.

        Mimosa Ingredients
        2.5 oz. Champagne or sparkling wine
        2.5 oz. orange juice
        1 orange slice
        How to Make a Mimosa
        Pour Champagne in Champagne flute
        Add orange juice
        Garnish with orange slice
        Tips for Making a Mimosa
        Use a dry sparkling wine with sweeter fresh-squeezed orange juice and a sweeter sparkling wine with tart orange juice from concentrate
        If you’re making pitchers of mimosas, don’t pre-mix it too far in advance or you’ll lose the carbonation; 10-15 minutes before serving is about as far in advance as is ideal
        `,
        user_id: 1 
    },
    {
        title: 'Moscow Mule',
        post_content: `The Moscow Mule is the 5th most popular cocktail in the good ol’ U.S.A. That was surprising to us because Moscow Mules require a set of hardware that a lot of popular cocktails don’t. To serve a Moscow Mule properly, you need chilled mugs of copper. Either every bar across the country has those or they’re not serving Moscow Mules in copper mugs. Either way, it’s okay. We’re not the Moscow Mule police. Enjoy as you would enjoy, for the Moscow Mule is enjoyable if it's anything.

        Moscow Mule Ingredients
        4 oz. ginger beer
        1.5 oz. vodka
        1 teaspoon lime juice
        1 lime slice
        How to Make a Moscow Mule
        Combine ginger beer and vodka in a highball glass full of ice
        Add lime juice, stir
        Garnish with lime slice
        Tips for Making a Moscow Mule
        Choose a spicy, extra-gingery ginger beer to avoid the feeling of a vodka ginger ale
        Serve the drink in a chilled copper mug
        `,
        user_id: 3
    },
    {
        title: 'Cosmopolitan',
        post_content: `The cosmopolitan is credited to Toby Cecchini of Manhattan’s The Odeon restaurant in 1987. In the grand scheme of cocktails, the cosmo is young. There is a similar recipe from the 1930s that calls for gin, Cointreau, lemon juice, and raspberry syrup. Like most cocktails, there are multiple sources claiming multiple creation stories. What we do know is that it gained popularity like mad in the 1990s on the back of Carrie Bradshaw and now single-handedly represents a certain type of social sophistication.

        Cosmopolitan Ingredients
        1.5 oz. vodka
        1 oz cranberry juice
        .5 oz. Cointreau
        .5 oz. fresh lime juice
        1 lime or lemon wheel
        How to Make a Cosmopolitan
        Pour vodka, cranberry juice, Cointreau, and lime juice into a shaker with ice cubes, shake
        Strain into cocktail glass
        Garnish with lime or lemon wheel
        Tips for Making a Cosmopolitan
        Cut the lemon twist over the cocktail glass to capture any falling zest
        Shake vigorously until the shaker is so cold your hands sting
        `,
        user_id: 2
    },
    {
        title: 'Bloody Mary',
        post_content: `The origin of the name Bloody Mary, like the drink’s origins, are murky. Queen Mary I of England, Hollywood star Mary Pickford, the girlfriend of the owner of a bar called Bucket of Blood. All potential origins for the name. It’s hard to say how this cocktail got its name. So let’s just appreciate it for what it is: a cool name.

        The Blood Mary is a concept at this point. Like a sandwich or a taco. There isn’t a single recipe, but some general rules to follow when making one. But whatever recipe you end up with, you’ll have a classic fall cocktail on your hands. The Bloody Mary recipe here is very simple, yet very delicious. 
        
        Bloody Mary Ingredients
        2 oz. vodka
        6 oz. tomato juice
        1 tablespoon ground horseradish
        2 dashes hot sauce
        2 dashes Worcestershire sauce
        1 pinch celery salt
        1 pinch ground black pepper
        1 lemon slice
        1 celery stalk
        2 speared green olives
        How to Make a Bloody Mary
        Coat the rim of a highball glass with celery salt, fill with with ice
        Squeeze juice of lemon slice into shaker, add vodka, tomato juice, horseradish, hot sauce, worcestershire sauce, and black pepper and shake with ice
        Strain shaker into highball glass
        Garnish with a celery stalk and green olive spear
        Tips for Making a Bloody Mary
        Any hot sauce can be used, though Tabasco is the traditional choice
        Anything goes with garnishes: meat sticks, pickled vegetables, cheese
        Serve with a sidecar of beer for best possible guest experience
        `,
        user_id: 1
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
