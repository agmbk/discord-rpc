const RPC = require( 'discord-rpc' );
const dotenv = require( 'dotenv' );


dotenv.config();
const client_rpc = new RPC.Client( {transport: 'ipc'} );
const invite_url = 'https://discord.gg/7rHY2sMevU';
Array.prototype.random = function () {
	return this[Math.floor( (Math.random() * this.length) )];
};

(async () => {
	client_rpc.on( 'connected', async () => {
		console.log( 'RPC status started' );
		status( client_rpc );
	} );
	setTimeout( () => {throw new Error;}, 3e6 );
	await client_rpc.connect( process.env.CLIENT_ID );
})().then();

function status(client_rpc) {
	function setActivity() {
		client_rpc.setActivity( {
				state: rpc_emojis.random() + 'My life - Solo',
				partySize: 1,
				partyMax: 1,
				details: rpc_status.random(),
				startTimestamp: new Date().setHours( 0, 0, 0, 0 ),
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
	return setInterval( () => setActivity(), 10000 );
}

const rpc_status = [
	'meeting new people',
	'making new friends',
	'🏖️procrastinating',
	'💻programming',
	'playing Minecraft',
	'looking for techies',
	'wasting time on YouTube',
	'dying',
	'installing updates',
	'having moodswings',
	'coding the next billion 💲 app',
	'writing status for you to read',
	'time travelling',
	'rest again peacefully',
	'me against the world',
	'only god can judge me',
	'that\'s the way I am',
	'can\'t be touched',
	'me against the world',
	'even the genius ask questions',
	'looking for a better computer',
	'contemplating on why Edge exists',
	'🕵stalking you',
	'being a Linux advocate',
	'cursing about JavaScript',
	'₿ mining bitcoins',
	'being 🅣 🅞 🅚 🅐#9652',
	'💻₵ØĐɆ',
	'👀I see YOU reading this',
	'🏃‍♂doing sports',
	'without a doubt undoubtedly',
];

const rpc_emojis = [
	'💻',
	'👨‍💻️',
	'📺',
	'🏋️',
	'🏖️',
];
