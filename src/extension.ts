import * as vscode from 'vscode';

import { helloWorld } from './functions';

// TODO: create clickable status bar item that shows the user their xp. 

// TODO: Link this to some kind of database that will be stored locally on a user's 
// machine that will pull all their info to be used instead of initializing everything at zero.

export function activate(context: vscode.ExtensionContext) {
	console.log('RPCode is now active!');
	vscode.window.createStatusBarItem();
	// Turning on xp tracking
	vscode.commands.registerCommand('rpcode.xpTrack', () => {
		let textChanges: string = "";	

		let ifStatements: number = 0;
		let forLoops: number = 0;
		let whileLoops: number = 0;

		let experiencePoints: number = 0;
		let currentLevel: number = 1;
		let experienceThresholds: Array<number> = [10, 20, 40, 80, 160, 320, 640, 1280, 2560];

		let regexIf: RegExp = new RegExp('if', 'g');
		let regexFor: RegExp = new RegExp('for', 'g');
		let regexWhile: RegExp = new RegExp('while', 'g');


		helloWorld(textChanges, ifStatements, forLoops, whileLoops, experiencePoints, currentLevel,
			 experienceThresholds, regexIf, regexFor, regexWhile);
	});
}

// this method is called when the extension is deactivated
export function deactivate() {}
