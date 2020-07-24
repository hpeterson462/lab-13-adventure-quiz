// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderSection } from '../quest/quest-utils.js';

const test = QUnit.test;

test('render quest to page', (expect) => {

    const quest = {
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
            result: `You lead them into the rising dawn and they turn to stone!
                However, as you make your way out the door, a giant spider descends and take a bite of flesh,
                causing 50 hp damage.
            `,
            hp: -50,
            gold: 0
        }]
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<section><div>A Cave of Trolls</div><img src="monsters.jpg">< form ><div>You enter a dark forest and find a cave to shelter in for the night. But it is already occupied by three, large trolls! And they look hungry. What do you do?</div><label><div>Beg for your life.</div><input type="radio" name="choices" value="beg"></label>< label ><div>Attack!</div><input type="radio" name="choices" value="attack"></label ><label>< div > Lead them into the morning light.</div><input type="radio" name="choices" value="lead-them"></label><button>Submit</button></form ></section > '.replace(/\s/g, '');

    //Act 
    // Call the function you're testing and set the result to a const
    const element = renderSection(quest);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(element.outerHTML.replace(/\s/g, ''), expected);
});
