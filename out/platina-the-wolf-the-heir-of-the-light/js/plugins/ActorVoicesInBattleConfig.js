Fogo.ActorVoicesInBattle.Config = // <= Do Not Touch This Line
{
	// You must create a new folder inside of your SE Audio folder and name it
	// Whatever you decided to call it just below
	FOLDER_DIRECTORY_NAME: "Battle_Voices",


	// This Event Switch when turned on will mute the voice being played.
	// They will still play, you just won't hear them
	//
	// If you leave the event switch id as zero, that means you can NEVER turn off the
	// Battle Voices
	EVENT_SWITCH_ID: 0,


	// If your actor has been inflicted with any of these states, they will have their
	// voices muted until it is cured.
	// State No.4 by default is the Silence state, which is a reasonable for muting
	// you. you can add more states after it by adding another ID number and a comma
	//
	// If you do not want any state to mute you, simply erase everything inside the square brackets
	SILENCE_STATES: [ ],


	// Here you can choose the Skills which your Actor Voices will not play for.
	// By default, Skills 1-7 are skills which are used with certain commands.
	// Some of those commands have their own specific Actor Voice, such as Attacking
	// or Escaping, as such it is advisable to input the Skill ID referring to those
	// commands in this option.
	// If you are using the Default Skillset, you can leave this option as is.
	// However if you're using custom skills, please make sure they're not being
	// omitted inside of this option.
	//
	// You may also use this option to stop custom skills from having voices if you'd
	// prefer.
	SKILLS_NOT_TO_PLAY_VOICE_FOR: [ 1, 2, 3, 4, 5, 6, 7, ],


	// If you've been playing and noticed that battle voices tend to happen a bit too often
	// for your liking, you may use this Option to decrease the frequency in which they will
	// say general things (like attacking, using items, etc). Non-general voices (such as
	// specific skills) will still play whenever they are used.
	//
	// This works as a percentage out of 100.
	VOICE_FREQUENCY: 100,


	// If an attack has multiple hits, do you want the actor in question to keep
	// screaming battle cries for each hit?
	PLAY_MULTIPLE_VOICES_FOR_MULTIPLE_HITS: true,


	//=============================================================================
	//    Battle Start Voices
	//-----------------------------------------------------------------------------
	//   The Editable Parts Below will only be said when a battle starts
	//=============================================================================

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * TOO MANY ENEMIES?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	TOO_MANY_ENEMIES: { // <= Do Not Touch This Line

		// If The enemy troop in battle has this many MORE members than you do,
		// an actor will say something about how you are outnumbered
		ratio: 2,


		// "SE Filename", Volume, Pitch, Frames_to_Wait,
		//       Repeat if you want more voices

		// What Actor One Will Say
		1: [
			"Too_Many_Enemies_1", 100, 100, 0,
			"Too_Many_Enemies_2", 100, 100, 0,
		],

		
		// What Actor Two Will Say
		2: [
			"Too_Many_Enemies_1", 100, 100, 0,
			"Too_Many_Enemies_2", 100, 100, 0,
			"Too_Many_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Too_Many_Enemies_1", 100, 100, 0,
			"Too_Many_Enemies_2", 100, 100, 0,
			"Too_Many_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Too_Many_Enemies_1", 100, 100, 0,
			"Too_Many_Enemies_2", 100, 100, 0,
			"Too_Many_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Too_Many_Enemies_1", 100, 100, 0,
			"Too_Many_Enemies_2", 100, 100, 0,
			"Too_Many_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Too_many_enemies_1", 100, 100, 0,
			"Too_many_enemies_2", 100, 100, 0,
			"Too_many_enemies_3", 100, 100, 0,
		],



	// You Add more voices for actors by doing the same as the above and modifying
	// the number to match the actor id (ie. Terence by default is Actor 3).
	// If you skip an actor, then no voice will be played for them.

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * PARTY NEEDS HEALING?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, PARTY_NEEDS_HEALING : { // <= Do Not Touch This Line

		// If party total HP is below this Ratio, an Actor will say something about it
		// This Ratio is a percentage, so by default if your total party hp is below
		// 40%, then an actor may mention that everyone is hurt
		ratio: 40 ,


		// What Actor one Will Say
		1: [
			"Party_Needs_Healing_1", 100, 100, 0,
			"Party_Needs_Healing_2", 100, 100, 0,
		],
		
		
		// What Actor Two Will Say
		2: [
			"Party_Needs_Healing_1", 100, 100, 0,
			"Party_Needs_Healing_2", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Party_Needs_Healing_1", 100, 100, 0,
			"Party_Needs_Healing_2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Party_Needs_Healing_1", 100, 100, 0,
			"Party_Needs_Healing_2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Party_Needs_Healing_1", 100, 100, 0,
			"Party_Needs_Healing_2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Party_Needs_healing_1", 100, 100, 0,
			"Party_Needs_Healing_2", 100, 100, 0,
			"Dialogue_3", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * VERY WEAK ENEMIES?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                    
	}, VERY_WEAK_ENEMIES : { // <= Do Not Touch This Line

		// Your stats are always 100%, so if the enemy troop stats are below
		// the editable ratio below; that means they are considered VERY WEAK.
		// By default this is 40%.
		ratio: 40,


		// What Actor One Will Say
		1: [
			"Very_Weak_Enemies_1", 100, 100, 0,
			"Very_Weak_Enemies_2", 100, 100, 0,
			"Very_Weak_Enemies_3", 100, 100, 0,
		],


		// What Actor Two Will Say
		2: [
			"Very_Weak_Enemies_1", 100, 100, 0,
			"Very_Weak_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Very_Weak_Enemies_1", 100, 100, 0,
			"Very_Weak_Enemies_2", 100, 100, 0,
			"Very_Weak_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Very_Weak_Enemies_1", 100, 100, 0,
			"Very_Weak_Enemies_2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Very_Weak_Enemies_1", 100, 100, 0,
			"Very_Weak_Enemies_2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Very_weak_enemies_1", 100, 100, 0,
			"Very_weak_enemies_2", 100, 100, 0,
			"Very_weak_enemies_3", 100, 100, 0,
			"Diolague_4", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WEAK ENEMIES?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, WEAK_ENEMIES : { // <= Do Not Touch This Line

		// Same as Very Weak Enemies, but should be higher
		ratio: 100,


		// What Actor One Will Say
		1: [
			"Weak_Enemies_1", 100, 100, 0,
			"Weak_Enemies_2", 100, 100, 0,
			"Weak_Enemies_3", 100, 100, 0,
		],


		// What Actor Two Will Say
		2: [
			"Weak_Enemies_1", 100, 100, 0,
			"Weak_Enemies_2", 100, 100, 0,
			"Weak_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Weak_Enemies_1", 100, 100, 0,
			"Weak_Enemies_2", 100, 100, 0,
			"Weak_Enemies_3", 100, 100, 0,
			"Dialogue_5", 100, 100, 0,
			
		],
		
		
		// What Actor four Will Say
		4: [
			"Weak_Enemies_1", 100, 100, 0,
			"Weak_Enemies_2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Weak_Enemies_1", 100, 100, 0,
			"Weak_Enemies_2", 100, 100, 0,
			"Weak_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Weak_Enemies_1", 100, 100, 0,
			"Dialogue_1", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * EQUAL ENEMIES?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, EQUAL_ENEMIES : { // <= Do Not Touch This Line

		// There is no Ratio for Equal Enemies

		// What Actor One Will Say
		1: [
			"P1_Equal_Enemies_1", 100, 100, 0,
			"P1_Equal_Enemies_2", 100, 100, 0,
			"P1_Equal_Enemies_3", 100, 100, 0,
		],


		// What Actor Two Will Say
		2: [
			"Equal_Enemies_1", 100, 100, 0,
			"Equal_Enemies_2", 100, 100, 0,
			"Equal_Enemies_3", 100, 100, 0,
			"Dialogue_4", 100, 100, 0,
			"Dialogue_5", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Equal_Enemies_1", 100, 100, 0,
			"Equal_Enemies_2", 100, 100, 0,
			"Equal_Enemies_3", 100, 100, 0,
			"Dialogue_2", 100, 100, 0,
			"Dialogue_4", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Equal_Enemies_1", 100, 100, 0,
			"Equal_Enemies_2", 100, 100, 0,
			"Equal_Enemies_3", 100, 100, 0,
			
		],
		
		
		// What Actor five Will Say
		5: [
			"Equal_Enemies_1", 100, 100, 0,
			"Equal_Enemies_2", 100, 100, 0,
			"Equal_Enemies_3", 100, 100, 0,
			"Dialogue_2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Equal_Enemies_1", 100, 100, 0,
			"Equal_Enemies_2", 100, 100, 0,
			"Equal_Enemies_3", 100, 100, 0,
			"Dialogue_2", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * STRONG ENEMIES?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, STRONG_ENEMIES : { // <= Do Not Touch This Line

		// If your stats are 100% and the enemy is 120%, they are 20% stronger than you
		ratio: 120,

		// What Actor One Will Say
		1: [
			"Strong_Enemies_1", 100, 100, 0,
			"Strong_Enemies_2", 100, 100, 0,
			"Strong_Enemies_3", 100, 100, 0,
			"Dialogue_3", 100, 100, 0,
		],


		// What Actor Two Will Say
		2: [
			"Strong_Enemies_1", 100, 100, 0,
			"Strong_Enemies_2", 100, 100, 0,
			"Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Strong_Enemies_1", 100, 100, 0,
			"Strong_Enemies_2", 100, 100, 0,
			"Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Strong_Enemies_1", 100, 100, 0,
			"Strong_Enemies_2", 100, 100, 0,
			"Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Strong_Enemies_1", 100, 100, 0,
			"Strong_Enemies_2", 100, 100, 0,
			"Strong_Enemies_3", 100, 100, 0,
			"Dialogue_4", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Strong_enemies_1", 100, 100, 0,
			"Strong_enemies_2", 100, 100, 0,
			"Strong_enemies_3", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * VERY STRONG ENEMIES?
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, VERY_STRONG_ENEMIES : { // <= Do Not Touch This Line

		// Same as Strong Enemies, but should be higher
		ratio: 160,


		// What Actor One Will Say
		1: [
			"Very_Strong_Enemies_1", 100, 100, 0,
			"Very_Strong_Enemies_2", 100, 100, 0,
			"Very_Strong_Enemies_3", 100, 100, 0,
		],


		// What Actor Two Will Say
		2: [
			"Very_Strong_Enemies_1", 100, 100, 0,
			"Very_Strong_Enemies_2", 100, 100, 0,
			"Very_Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Very_Strong_Enemies_1", 100, 100, 0,
			"Very_Strong_Enemies_2", 100, 100, 0,
			"Very_Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Very_Strong_Enemies_1", 100, 100, 0,
			"Very_Strong_Enemies_2", 100, 100, 0,
			"Very_Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Very_Strong_Enemies_1", 100, 100, 0,
			"Very_Strong_Enemies_2", 100, 100, 0,
			"Very_Strong_Enemies_3", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Very_strong_enemies_1", 100, 100, 0,
			"Very_strong_enemies_2", 100, 100, 0,
			"Very_strong_enemies_1", 100, 100, 0,
		],




	//=============================================================================
	//    Battle Skills/Items Voices
	//-----------------------------------------------------------------------------
	//   These are generic things that your actors will say when using an skill/item
	//   in battle. You can use note tags on specific skills/items, this is
	//   just for the more generic skill/items (meaning your actor will always say something).
	//=============================================================================

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN USING AN ITEM
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, USING_ITEMS: { // <= Do Not Touch This Line

		// What Actor One Will Say when using an generic item
		1: [
			"P1_Using_An_Item_1", 100, 100, 10,    // Waits 10 frames before applying item effects
			"P1_Using_An_Item_2", 100, 100, 10,    // Waits 10 frames before applying item effects
			"P1_Using_An_Item_3", 100, 100, 10,    // Waits 10 frames before applying item effects
		],  

		// What Actor Two Will Say when using an generic item
		2: [
			"Using_An_Item_1", 100, 100, 10,
			"Using_An_Item_2", 100, 100, 10,
			"Using_An_Item_3", 100, 100, 10,
			
		],
		
		
		// What Actor Three Will Say
		3: [
			"Using_An_Item_1", 100, 100, 10,
			"Using_An_Item_2", 100, 100, 10,
			"Using_An_Item_3", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Using_An_Item_1", 100, 100, 10,
			"Using_An_Item_2", 100, 100, 10,
			"Using_An_Item_3", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Using_An_Item_1", 100, 100, 10,
			"Using_An_Item_2", 100, 100, 10,
			"Using_An_Item_3", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Using_an_item_2", 100, 100, 10,
			"Using_an_item_3", 100, 100, 10,
		],

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN USING A SKILL
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, USING_SKILLS: { // <= Do Not Touch This Line

		// What Actor One Will Say when using a generic skill
		1: [
			//"Using Generic Skill01", 100, 100, 0,
		],  


		// What Actor Two Will Say when using a generic skill
		2: [
			//"Using Generic Skill01", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],


	//=============================================================================
	//    Battle Voices
	//-----------------------------------------------------------------------------
	//   These voices are heard throughout the battle, such as when attacking,
	//   using a skill or taking damage, etc
	//=============================================================================

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR IS ATTACKING
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, ACTOR_ATTACKING: { // <= Do Not Touch This Line

		// What Actor One Will Say when Normal Attacking
		1: [
			//"Attack01", 100, 100, 0,
		],

		// What Actor Two Will Say when Normal Attacking
		2: [
			//"Attack01", 100, 100, 0,
			//"Attack02", 100, 100, 0,
			//"Attack03", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR MISSED THE ENEMY
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, MISSED_ENEMY: { // <= Do Not Touch This Line

		// What Actor One Will Say when they missed the enemy
		1: [
			"P1_Missed_An_Enemy_1", 100, 100, 0,
			"P1_Missed_An_Enemy_2", 100, 100, 0,
		],
		
		
		// What Actor Two Will Say
		2: [
			"Missed_An_Enemy_1", 100, 100, 0,
			"Missed_An_Enemy_2", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Missed_An_Enemy_1", 100, 100, 0,
			"Missed_An_Enemy_2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Missed_Enemy_1", 100, 100, 0,
			"Missed_Enemy_2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Missed_An_Enemy_1", 100, 100, 0,
			"Missed_An_Enemy_2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Missed_enemy_1", 100, 100, 0,
			"Missed_enemy_2", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR EVADED ENEMY ATTACK
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, DODGED_ENEMY: { // <= Do Not Touch This Line

		// What Actor One Will Say when they evaded an enemy attack
		1: [
			"P1_Dodged_an_Enemy_1", 100, 100, 0,
			"P1_Dodged_an_Enemy_2", 100, 100, 0,
		],
		
		
		2: [
			"Dodged_an_Enemy_1", 100, 100, 0,
			"Dodged_an_Enemy_2", 100, 100, 0,
		],
		
		
		3: [
			"Dodged_an_Enemy_1", 100, 100, 0,
			"Dodged_an_Enemy_2", 100, 100, 0,
		],
		
		
		4: [
			"Dodged_an_Enemy_1", 100, 100, 0,
			"Dodged_an_Enemy_2", 100, 100, 0,
		],
		
		
		5: [
			"Dodged_an_Enemy_1", 100, 100, 0,
			"Dodged_an_Enemy_2", 100, 100, 0,
		],
		
		
		6: [
			"Dodged_an_enemy_1", 100, 100, 0,
			"Dodged_an_enemy_2", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR TAKES LITTLE DAMAGE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, LITTLE_DAMAGE: { // <= Do Not Touch This Line

		// Percentage of Health that must be lost from an individual attack for these
		// to be played
		ratio: 15 ,


		// What Actor One Will Say when Hurt this much
		1: [
			"10", 100, 100, 10,
			//"Little Damage2", 100, 100, 10,
			//"Little Damage3", 100, 100, 10,
		],


		// What Actor Two Will Say when Hurt this much
		2: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Little_damage", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR TAKES SIGNIFICANT DAMAGE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, SIGNIFICANT_DAMAGE: { // <= Do Not Touch This Line

		// Percentage of Health that must be lost from an individual attack for these
		// to be played
		ratio: 35 ,
	 
		// What Actor One Will Say when Hurt this much
		1: [
			"Significant_Damage", 100, 100, 10,
			//"Significant Damage2", 100, 100, 10,
			//"Significant Damage3", 100, 100, 10,
		],


		// What Actor Two Will Say when Hurt this much
		2: [
			"Significant_Damage", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Significant_Damage", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Significant_Damage", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Significant_Damage", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"significant_damage", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR TAKES HEAVY DAMAGE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, HEAVY_DAMAGE: { // <= Do Not Touch This Line

		// Percentage of Health that must be lost from an individual attack for these
		// to be played
		ratio: 50 ,
	 
		// What Actor One Will Say when Hurt this much
		1: [
			"P1_Major_Damage", 100, 100, 10,
			//"Heavy Damage2", 100, 100, 10,
			//"Heavy Damage3", 100, 100, 10,
		],


		// What Actor Two Will Say when Hurt this much
		2: [
			"Major_Damage", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Major_Damage", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Major_Damage", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Major_Damage", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Major_damage", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR TAKES MASSIVE DAMAGE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, MASSIVE_DAMAGE: { // <= Do Not Touch This Line

		// Percentage of Health that must be lost from an individual attack for these
		// to be played
		ratio: 65 ,


		// What Actor One Will Say when Hurt this much
		1: [
			"Massive_Damage", 100, 100, 10,
		],



		// What Actor Two Will Say when Hurt this much
		2: [
			"Massive_Damage", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Massive_Damage", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Massive_Damage", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Massive_Damage", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Massive_damage", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR TAKES DAMAGE, BUT NOTHING THEY CAN'T SHRUG OFF
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, DEFAULT_DAMAGE: { // <= Do Not Touch This Line


		// What Actor One Will Say when Hurt in battle
		1: [
			"10", 100, 100, 10,
		],

		// What Actor Two Will Say when Hurt in battle
		2: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Little_Damage", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Little_damage", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR HAS THEIR HP OR MP RESTORED, EITHER BY ITEMS OR MAGIC
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, HP_MP_RESTORE: { // <= Do Not Touch This Line

		// Allowed to speak if this actor healed themself?
		self_heal_speak:  false ,
		
	 
		// What Actor One Will Say when Healed in battle
		1: [
			"P1_Healed_HP_or_MP", 100, 100, 10,
		],


		// What Actor Two Will Say when Healed in battle
		2: [
			"Healed_HP_or_MP", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Healed_HP_or_MP", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Healed_HP_or_MP", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Healed_HP_or_MP", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Healed_HP_or_MP", 100, 100, 10,
		],



	//=============================================================================
	//    Death & Revive Voices
	//-----------------------------------------------------------------------------
	//   These voices are heard when an actor is knockout in battle or when they
	//   are revived in battle either via magic or items
	//=============================================================================

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR HAS JUST BEEN KO'D IN BATTLE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Voices to play when an actor dies
	}, DEATH_VOICE: { // <= Do Not Touch This Line


		// What Actor One Will Say when they die
		1: [
			"P1_Killed_in_Battle_1", 100, 100, 10,
			"P1_Killed_in_Battle_2", 100, 100, 10,
			"P1_Killed_in_Battle_3", 100, 100, 10,
		],


		// What Actor Two Will Say when they die
		2: [
			"Killed_in_Battle_1", 100, 100, 10,
			"Killed_in_Battle_2", 100, 100, 10,
			"Killed_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Killed_in_Battle_1", 100, 100, 10,
			"Killed_in_Battle_2", 100, 100, 10,
			"Killed_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Killed_in_Battle_1", 100, 100, 10,
			"Killed_in_Battle_2", 100, 100, 10,
			"Killed_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Killed_in_Battle_1", 100, 100, 10,
			"Killed_in_Battle_2", 100, 100, 10,
			"Killed_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"killed_in_battle_1", 100, 100, 10,
			"killed_in_battle_2", 100, 100, 10,
			"killed_in_battle_3", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ACTOR HAS JUST BEEN REVIVED IN BATTLE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, REVIVED_VOICE: { // <= Do Not Touch This Line


		// What Actor One Will Say when Revived in battle
		1: [
			"Revived_in_Battle_1", 100, 100, 10,
			"Revived_in_Battle_2", 100, 100, 10,
			"Revived_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor Two Will Say
		2: [
			"Revived_in_Battle_1", 100, 100, 10,
			"Revived_in_Battle_2", 100, 100, 10,
			"Revived_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Revived_in_Battle_1", 100, 100, 10,
			"Revived_in_Battle_2", 100, 100, 10,
			"Revived_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Revived_in_Battle_1", 100, 100, 10,
			"Revived_in_Battle_2", 100, 100, 10,
			"Revived_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Revived_in_Battle_1", 100, 100, 10,
			"Revived_in_Battle_2", 100, 100, 10,
			"Revived_in_Battle_3", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"Revived_in_battle_1", 100, 100, 10,
			"Revived_in_battle_2", 100, 100, 10,
			"Revived_in_battle_3", 100, 100, 10,
		],



	//=============================================================================
	//    Escape Voices
	//-----------------------------------------------------------------------------
	//   These voices are heard when you are attempting to escape from battle and
	//   includes: Escape Attempt Voices, Escape Success Voices & Escape Failure Voices.
	//   An Actor will be chosen at random to speak when an Escape Attempt is performed
	//=============================================================================

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ATTEMPTING TO ESCAPE FROM BATTLE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, ESCAPE_ATTEMPT_VOICE: { // <= Do Not Touch This Line


		// What Actor One Will Say when they attempt to escape battle
		1: [
			"P1_Escape_Attempt_1", 100, 100, 10,
			"Escape_Attempt_2", 100, 100, 10,
			//"Escape Attempt3", 100, 100, 10,
		],


		// What Actor Two Will Say when they attempt to escape battle
		2: [
			"Escape_Attempt_1", 100, 100, 10,
			"Escape_Attempt_1", 100, 100, 10,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Escape_Attempt_1", 100, 100, 10,
			"Escape_Attempt_1", 100, 100, 10,
		],
		
		
		// What Actor four Will Say
		4: [
			"Escape_Attempt_1", 100, 100, 10,
			"Escape_Attempt_1", 100, 100, 10,
		],
		
		
		// What Actor five Will Say
		5: [
			"Escape_Attempt_1", 100, 100, 10,
			"Escape_Attempt_1", 100, 100, 10,
		],
		
		
		// What Actor six Will Say
		6: [
			"escape_attempt_1", 100, 100, 10,
			"escape_attempt_2", 100, 100, 10,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ESCAPE IS SUCCESSFUL
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, SUCCESSFUL_ESCAPE: { // <= Do Not Touch This Line


		// What Actor One Will Say when they successfully escape from battle
		1: [
			//"Successful Escape1", 100, 100, 0,
		],


		// What Actor Two Will Say when they successfully escape from battle
		2: [
			//"Successful Escape1", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN ESCAPE WAS A FAILURE
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, FAILED_ESCAPE: { // <= Do Not Touch This Line


		// What Actor One Will Say when they fail to escape from battle
		1: [
			//"Failed Escape1", 100, 100, 0,
		],


		// What Actor Two Will Say when they fail to escape from battle
		2: [
			//"Failed Escape1", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],



	//=============================================================================
	//    Battle Victory Voices
	//-----------------------------------------------------------------------------
	//   These voices are heard when you are victorious in battle, this includes:
	//   Tough Battle Voices, Long Battle Voices, Quick Battle Voices, Level Up Voices
	//=============================================================================

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN BATTLE TOOK ITS TOLL ON YOUR PARTY
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, THAT_WAS_TOUGH: { // <= Do Not Touch This Line

		// By default this is 50%, so if you win a battle with 50% LESS HP than what
		// you went in with, these voices will play
		ratio: 50 ,


		// What Actor One Will Say when this occurs
		1: [
			"Battle_took_toll_on_party", 100, 100, 0,
		],


		// What Actor Two Will Say when this occurs
		2: [
			"Battle_took_toll_on_party", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Battle_took_toll_on_party", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Battle_took_toll_on_party", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Battle_took_toll_on_party", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Battle_took_toll_on_party", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN BATTLE DIDN'T TAKE VERY LONG
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, THAT_WAS_EASY: { // <= Do Not Touch This Line


		// By default this is 3, so if a battle took three turns or less,
		// the following voices will play
		ratio: 3 ,


		// What Actor One Will Say when a battle didn't take too long
		1: [
			"Battle_didnt_take_very_long_1", 100, 100, 0,
		],


		// What Actor Two Will Say when a battle didn't take too long
		2: [
			"Battle_didnt_take_very_long_1", 100, 100, 0,
			"Battle_didnt_take_very_long_2", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Battle_didnt_take_very_long_1", 100, 100, 0,
			"Battle_didnt_take_very_long_2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Battle_didnt_take_very_long_1", 100, 100, 0,
			"Battle_didnt_take_very_long_2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Battle_didnt_take_very_long_1", 100, 100, 0,
			"Battle_didnt_take_very_long_2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"battle_didnt_take_long_1", 100, 100, 0,
			"battle_didnt_take_long_2", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN BATTLE TOOK A VERY LONG TIME
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, BATTLE_TOOK_AGES: { // <= Do Not Touch This Line

		// By default this is 15, so it means the battle needs to have
		// taken 15 turns or more for the following voices to be played
		ratio: 15 ,


		// What Actor one Will Say
		1: [
			"Battle_took_ages", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor Two Will Say when battle took a long time
		2: [
			"Battle_took_ages", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Battle_took_ages", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Battle_took_ages", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Battle_took_ages", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"Battle_took_ages", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * WHEN VICTORY LEADS TO LEVEL UP
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, LEVELUP_VICTORY: { // <= Do Not Touch This Line

		// You MUST use the wait frame timer (last number per voice) per voice as
		// appropriate. Due to RPGMaker liking to make everyone level up at the same
		// time, the wait timer is the only way to stop everyone who just leveled up
		// from talking at once.


		// What Actor One Will Say when LevelUp Occurs
		1: [
			//"", 100, 100, 120,
		],

		// What Actor Two Will Say when LevelUp Occurs
		2: [
			//"Normal Victory1", 100, 100, 120,
		],
		
		
		// What Actor Three Will Say
		3: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			//"Encounter Too Many Enemies1", 100, 100, 0,
			//"Encounter Too Many Enemies2", 100, 100, 0,
		],


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// * NORMAL VICTORY
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}, NORMAL_VICTORY: { // <= Do Not Touch This Line

		// This is what your actors will say normally if the aboves are not met

		// What Actor One Will Say when a battle resulted in victory
		1: [
			"P1_Battle_Victory_Normal", 100, 100, 0,
		],


		// What Actor Two Will Say when a battle resulted in victory
		2: [
			"Battle_Victory_Normal", 100, 100, 0,
		],
		
		
		// What Actor Three Will Say
		3: [
			"Battle_Victory_Normal", 100, 100, 0,
		],
		
		
		// What Actor four Will Say
		4: [
			"Battle_Victory_Normal", 100, 100, 0,
		],
		
		
		// What Actor five Will Say
		5: [
			"Battle_Victory_Normal", 100, 100, 0,
		],
		
		
		// What Actor six Will Say
		6: [
			"battle_didnt_take_long_2", 100, 100, 0,
		],
	}
}