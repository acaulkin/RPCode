import * as vscode from 'vscode';
import { xpTrack, levelUp } from './xpSystem';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "rpcode" is now active!');
	
	// Turning on xp tracking
	let disposable = vscode.commands.registerCommand('rpcode.xpTrack', () => {
		// Display a message box to the user
		vscode.window.showInformationMessage(xpTrack());
		vscode.window.showInformationMessage(levelUp());
	});
	context.subscriptions.push(disposable);
}

// this method is called when the extension is deactivated
export function deactivate() {}
