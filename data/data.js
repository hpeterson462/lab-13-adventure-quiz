const monsters = {
    id: 'monsters',
    title: 'A Cave of Trolls',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
    You enter a dark forest and find a cave to shelter in for the night. But it is already occupied by
    three, large trolls! And they look hungry. What do you do?
    `,
    choices: [{
        id: 'beg',
        description: 'Beg for your life.',
        result: `
        Knowing that trolls are not too bright, you offer to go buy them all
        turkey dinners from the Prancing Pony. They give you 35 gold for meals
        that will never be delivered. I hope you can live with yourself.  
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'attack',
        description: 'Attack!',
        result: `
        Brandishing your sword you let out a warrior's cry and charge into the trolls
        hacking and slashing. Before long you stand panting gazing across the bodies of
        your vanquished foes. The bad news is you take 30 hp damage. The good news is you
        find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'lead-them',
        description: 'Lead them into the morning light.',
        result: `
        You lead them into the rising dawn and they turn to stone! A mysterious wizard appears in the morning rays of sunlight. You feel much better and you gain 20hp.`,
        hp: 20,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Problem Dragon',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.jpg',
    description: `
        You travel to a nearby town you have heard is being
        terrorized by a dragon. Sure enough, as you rent a room
        in a local inn, you go outside and see Smaug about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of Laketown!',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'CHAAARRRGGGE!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and Laketown has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate Bard the Bowman.',
        result: `
            You notice a stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass, you steady your aim and let one fly. Amazingly,
            you pierce the dragon between its scales! You kill the dragon instantly. The villagers declare you their hero and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    description: `
        As you enter the dragon's chamber, you notice three chests before you.
        Just as you start to imagine the wealth, thirteen dwarves appear at the doorway. They cry out! And rush forwards. In the confusion, they yell something about heirlooms and family trees. They try to take the treasure! You'll need to make a run for it, but you have time to open one chest before you take off. Which one do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped! You take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you from a beautiful jewel. You gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters,
    treasure,
    dragon
];

export default quests;