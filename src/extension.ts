import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('RPCode is now active!');
	
	// Turning on xp tracking
	vscode.commands.registerCommand('rpcode.xpTrack', () => {
		// Detecting change event in current editor
		vscode.workspace.onDidChangeTextDocument(changeEvent => {
			console.log(`File Changed: ${changeEvent.document.uri}`);
			for (const change of changeEvent.contentChanges) {
				 console.log(change.text); 
			}
		});
	});
}

// this method is called when the extension is deactivated
export function deactivate() {}
