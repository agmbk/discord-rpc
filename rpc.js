require('dotenv').config();
const {Client} = require('discord-rpc');

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

async function connect() {
    try {
        const rpc = new Client({transport: 'ipc'});
        await (async () => {
            rpc.on('connected', async () => {
                console.log('RPC status started');
                status(rpc);
            });
            rpc.on('disconnected', async () => {
                console.log('RPC status ended');
                await connect();
            });
            setTimeout(() => {
                throw new Error;
            }, 3e6);
            await rpc.connect(process.env.CLIENT_ID);
        })();
    } catch (e) {
        return setTimeout(() => connect(), 5000);
    }
}

function status(client_rpc) {
    function setActivity() {
        client_rpc.setActivity({
                state: rpc_emojis.random() + 'My life - Solo',
                partySize: 1,
                partyMax: 1,
                details: rpc_status.random(),
                startTimestamp: new Date().setHours(0, 0, 0, 0),
                // endTimestamp: Date.now() + 1337,
                largeImageKey: 'd12-world',
                largeImageText: 'Take over the world',
                buttons: [{
                    label: 'My server',
                    url: invite_url,
                }, {
                    label: 'My last project',
                    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                }],
                instance: true,
            },
        );
    }

    setActivity();
    return setInterval(() => setActivity(), 10000);
}

const invite_url = 'https://discord.gg/7rHY2sMevU';

const rpc_status = [
    'meeting new people',
    'making new friends',
    '🏖️procrastinating',
    '💻programming',
    'playing Minecraft',
    'looking for techies',
    'wasting time on YouTube',
    'dying',
    'Ol\' English - The Game',
    'Ready or Not',
    'Is my life',
    'installing updates',
    'having moodswings',
    'coding the next billion 💲 app',
    'writing status for you to read',
    'time travelling',
    'rest again peacefully',
    'only god can judge me',
    'that\'s the way I am',
    'can\'t be touched',
    'me against the world',
    'even the genius ask questions',
    'Looking for a better computer',
    'Contemplating on why Edge exists',
    '🕵stalking you',
    'Being a Linux advocate',
    'Cursing about JavaScript',
    '₿ mining bitcoins',
    'Being 🅣 🅞 🅚 🅐#9652',
    '💻₵ØĐɆ',
    '👀I see YOU reading this',
    '🏃‍♂doing sports',
    'Without a doubt undoubtedly',
];

const rpc_emojis = [
    '💻',
    '👨‍💻️',
    '📺',
    '🏋️',
    '🏖️',
];

connect().then(() => {
});
