import * as vscode from 'vscode';
import { User } from './xpSystem';

var user:User = new User();

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "rpcode" is now active!');
	
	// Turning on xp tracking
	let disposable = vscode.commands.registerCommand('rpcode.xpTrack', () => {
		// Display a message box to the user
		vscode.window.showInformationMessage(user.xpTrack());
		vscode.window.showInformationMessage(user.levelUp());
	});
	context.subscriptions.push(disposable);
}

// this method is called when the extension is deactivated
export function deactivate() {}
