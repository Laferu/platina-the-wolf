//=============================================================================
// Hirion - Swim
// Version 1.3
// Created: 2017-09-01
// Updated: 2018-07-12
// by Nicke
//=============================================================================

//=============================================================================
// * Hirion - Swim plugin.
//=============================================================================

//=============================================================================
 /*:
 * @author Nicke
 * @plugindesc Hirion - Swim. (v1.3) 
 *
 * @param Main Settings
 * @default
 *
 * @param Enable Switch
 * @parent Main Settings
 * @type switch
 * @desc Enable/disable switch for swimming. Not in use if set to 0.
 * Default 0
 * @default 0
 *
 * @param Terrain Tag
 * @parent Main Settings
 * @type number
 * @max 7
 * @min 0
 * @desc The terrian tag for swimming. (0-7)
 * Default: 1
 * @default 1
 *
 * @param Splash Animation
 * @parent Main Settings
 * @type animation
 * @desc Animation to be played when entering water.
 * Default: 0
 * @default 0
 *
 * @param Required Item
 * @parent Main Settings
 * @type armor
 * @desc Optional. Required item to swim.
 * Default: 0
 * @default 0
 *
 * @param Graphic
 * @parent Main Settings
 * @type file
 * @desc Player swimming graphics.
 * @default
 * @require 1
 *
 * @param Swim Damage
 * @default
 *
 * @param Damage
 * @parent Swim Damage
 * @type boolean
 * @on Damage
 * @off No Damage
 * @desc Do you wish to have damage when trying to swim without required item?
 * @default true
 *
 * @param Gameover Damage
 * @parent Swim Damage
 * @type boolean
 * @on Gameover
 * @off No gameover
 * @desc Set this to true if you want gameover when taking damage.
 * @default false
 *
 * @param Formula
 * @parent Swim Damage
 * @type text
 * @desc The damage formula.
 * Default: 10% of leader's max HP.
 * @default $gameParty.leader().mhp * 0.10
 *
 * @param Character Effects
 * @default
 *
 * @param Fade
 * @parent Character Effects
 * @type boolean
 * @on Fade
 * @off No Fade
 * @desc Character fade?
 * @default true
 *
 * @param Fade Time
 * @parent Character Effects
 * @type number
 * @desc Fade time.
 * @default 60
 *
 * @param Blink
 * @parent Character Effects
 * @type boolean
 * @on Blink
 * @off No Blink
 * @desc Character blink?
 * @default true
 *
 * @param Blink Time
 * @parent Character Effects
 * @type number
 * @desc Blink time.
 * @default 20
 *
 * @help
 * ============================================================================
 * Hirion - Swim System.
 * ============================================================================
 * Required plugin(s):
 * Hirion Core. 
 * This plugin will not work without the Core plugin. Please put this plugin
 * below the core.
 *
 * Works with:
 * This plugin works with Moghunter Chrono (Mainly in ABS mode). 
 * You will not be able to use any tool if character is swimming.
 *
 * ============================================================================
 * How to use...
 * ============================================================================
 * A swimming system for the party leader on the map.
 * To use this plugin you need to setup a terrian tag for swimming.
 * Default terrian tag is id 1.
 *
 * Note: *** Does not work with followers yet. ***
 *
 * ============================================================================
 * -- Main Settings --
 * ============================================================================
 * Enable Switch:
 * Use this switch to enable/disable swimming.
 * Not in use if set to none.
 *
 * Terrian Tag (required): 
 * Set this to the terrian tag you want for swimming.
 *
 * Required item: 
 * If you want a required item to be used in order to swim simply change 
 * the Required Item to the item you want.
 *
 * Splash Animation:
 * Splash animation to be played when trying to swim.
 *
 * Graphic:
 * Use this to change the swim graphic. The file should be in img/characters folder.
 *
 * ============================================================================
 * -- Swim Damage (optional) --
 * ============================================================================
 * Damage:
 * Choose if you want the player to take damage when trying to swim without 
 * the required item.
 *
 * Damage Gameover:
 * Set this to true if you wish to enable gameover when swimming.
 * When HP is at 0.
 *
 * Formula:
 * Default damage formula is 10% of the party leader's max HP. 
 * Use this to setup a custom one.
 *
 * ============================================================================
 * -- Character Effects (optional) --
 * ============================================================================
 * Fade: 
 * Choose if the character should fade in/out if swimming failed.
 * Custom time available.
 *
 * Blink:
 * Should the character blink when taking damage.
 * Custom time available.
 *
 * ============================================================================
 * -- Plugin Commands (ingame usage) --
 * ============================================================================
 * H_Swim?
 * This will return true or false based on player swimming.
 * 
 * H_ReqId?
 * Returns a true/false value based on if player have swim item equipped.
 * 
 * ============================================================================
 * Version List:
 * ============================================================================
 * Version 1.0: 
 * Released first version of the plugin.
 *
 * Version 1.1:
 * Added "Unable to find swim graphic" error message if swim graphic is not set or found.
 * Added a plugin command to check if swimming.
 * Fixed support for latest RPG Maker MV update version 1.5.1. Blink effect was
 * not working as intended.
 *
 * Version 1.2:
 * Small update to add debug mode and cleaned up the code a bit.
 *
 * Version 1.3:
 * Updated to work with RPG Maker 1.6+ versions.
 *
 */
//=============================================================================

"use strict";

(function($) {

	//=============================================================================
	// * Main
	//=============================================================================
	// Check if Hirion System Core version 1.1 is installed properly.
	try {
		if (typeof HirionSystem === 'undefined') {
			throw new Error("Please install the latest version of Hirion Core to use this plugin.");
		} else {
			if (HirionSystem.Core.version < 1.1) {
				throw new Error("You are using a old version of " + HirionSystem.Core.name + ". Please install version 1.1 or later to use this plugin.");
			}
		}
		if (Utils.RPGMAKER_VERSION !== "1.5.1" && Utils.RPGMAKER_VERSION !== "1.5.2" 
			&& Utils.RPGMAKER_VERSION !== "1.6.0" && Utils.RPGMAKER_VERSION !== "1.6.1") {
			throw new Error("Please update RPG Maker MV to version 1.5+ to use this plugin.");
		}
	} catch (err) {
		return console.warn("Hirion Swim: " + err.message);
	}
	
	// Define Hirion Swim system properies. 
	HirionSystem.Swim = {
		name: "Hirion Swim",
	    version: 1.3,
	};


  	//=============================================================================
  	// * Plugin parameters
  	//=============================================================================
  	// Main parameters.
  	HirionSystem.Swim.Switch = HirionSystem.parameter(HirionSystem.Swim.name, "Enable Switch", "Hirion_Swim", "Enable Switch", "Number");
  	HirionSystem.Swim.TerrainTag = HirionSystem.parameter(HirionSystem.Swim.name, "Terrian Tag", "Hirion_Swim", "Terrain Tag", "Number");
  	HirionSystem.Swim.Splash = HirionSystem.parameter(HirionSystem.Swim.name, "Splash Animation", "Hirion_Swim", "Splash Animation", "Number");
  	HirionSystem.Swim.ReqItem = HirionSystem.parameter(HirionSystem.Swim.name, "Required Swim Item", "Hirion_Swim", "Required Item", "Number");
	HirionSystem.Swim.Graphic = HirionSystem.parameter(HirionSystem.Swim.name, "Swim Graphic", "Hirion_Swim", "Graphic", "String");

  	// Damage parameters.
  	HirionSystem.Swim.DmgEnabled = HirionSystem.parameter(HirionSystem.Swim.name, "Damage", "Hirion_Swim", "Damage", "Boolean");
  	HirionSystem.Swim.DmgGameover = HirionSystem.parameter(HirionSystem.Swim.name, "Gameover Damage", "Hirion_Swim", "Gameover Damage", "Boolean");
  	HirionSystem.Swim.DmgFormula = HirionSystem.parameter(HirionSystem.Swim.name, "Damage Forumla", "Hirion_Swim", "Formula", "String");

  	// Character Effect parameters.
  	HirionSystem.Swim.CharFade = HirionSystem.parameter(HirionSystem.Swim.name, "Fade", "Hirion_Swim", "Fade", "Boolean");
  	HirionSystem.Swim.CharFadeTime = HirionSystem.parameter(HirionSystem.Swim.name, "Fade Time", "Hirion_Swim", "Fade Time", "Number");
  	HirionSystem.Swim.CharBlink = HirionSystem.parameter(HirionSystem.Swim.name, "Blink", "Hirion_Swim", "Blink", "Boolean");
  	HirionSystem.Swim.CharBlinkTime = HirionSystem.parameter(HirionSystem.Swim.name, "Blink Time", "Hirion_Swim", "Blink Time", "Number");

	//=============================================================================
	// * Define aliases.
	//=============================================================================
	let _Hirion_Swim_Game_Player_refresh = Game_Player.prototype.refresh;
	let _Hirion_Swim_Game_Player_update = Game_Player.prototype.update;
	let _Hirion_Swim_Game_Actor_checkFloorEffect = Game_Actor.prototype.checkFloorEffect;
	let _Hirion_Swim_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

	//=============================================================================
	// * Game Player
	//=============================================================================
	if (Imported.MOG_ChronoEngine) { 
	  	Game_Player.prototype.refresh = function() {
	  		// Method to refresh the player.
		    this.hirionGroupTerrainTags(this._hirionTerrainTag, HirionSystem.Swim.TerrainTag);
		    _Hirion_Swim_Game_Player_refresh.call(this);
		};
	}

	Game_Player.prototype.hirionReqItem = function() {
		// Method for plugin command to return a true/false value based on if player have swim item equipped.
		if (this._hirionPlayerReqItem == 0) return false;
		return this._hirionPlayerReqItem;
	};

	//=============================================================================
	// * Game Actor
	//=============================================================================
	Game_Actor.prototype.checkFloorEffect = function() {
		// Method to check floor effect on actor. If swimming terrain tag is equal to player setup swimming effect.
	    if ($gamePlayer.isOnHirionTerrainType(HirionSystem.Swim.TerrainTag)) {
			if ($gameSwitches.value(HirionSystem.Swim.Switch) || HirionSystem.Swim.Switch == 0) {
				try {
					if (HirionSystem.Swim.Graphic == "" || HirionSystem.Swim.Graphic == undefined ) {
						throw new Error("Unable to find Swim Graphic: " + "\"" + HirionSystem.Swim.Graphic + "\"");
					}
				} catch (err) {
					console.error(HirionSystem.Swim.name + ": " + err.message);
					return;
				}
				if (!$gamePlayer.isSwimming()) {	
					$gamePlayer.hirionTerrainEffect(
					"Swimming",
					HirionSystem.Swim.TerrainTag, 
					HirionSystem.Swim.ReqItem, 
					HirionSystem.Swim.Splash,
					HirionSystem.Swim.Graphic, 
					HirionSystem.Swim.DmgEnabled,
					HirionSystem.Swim.DmgGameover, 
					HirionSystem.Swim.DmgFormula, 
					HirionSystem.Swim.CharFade,
					HirionSystem.Swim.CharFadeTime,
					HirionSystem.Swim.CharBlink,
					HirionSystem.Swim.CharBlinkTime);
				} 
			}
	    } else {
	    	$gamePlayer._hirionPlayerOldSwimX = $gamePlayer._x;
			$gamePlayer._hirionPlayerOldSwimY = $gamePlayer._y;
			if ($gamePlayer.isSwimming()) {		
				
				$gamePlayer.hirionTerrainEffectAnim(HirionSystem.Swim.Splash);
				$gameParty.leader().setCharacterImage($gamePlayer._hirionPlayerOldGfx, 0);
				$gamePlayer.refresh();
				$gamePlayer._hirionPlayerEffectSwim = false;
				if (Imported.MOG_ChronoEngine) $gamePlayer.moghunterABSTools(true);
			}
	    }
	    _Hirion_Swim_Game_Actor_checkFloorEffect.call(this);
	};	

	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		// Method for plugin commands.
		_Hirion_Swim_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === 'H_Swim?') $gamePlayer.isSwimming();
		if (command === 'H_ReqId?') $gamePlayer.hirionReqItem();
	};

})();