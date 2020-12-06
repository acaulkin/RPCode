import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "rpcode" is now active!');
	
	// Turning on xp tracking
	vscode.commands.registerCommand('rpcode.xpTrack', () => {


		// Detecting change event in current editor
		vscode.workspace.onDidChangeTextDocument(changeEvent => {
			// Outputting what file is changed in the debug console
			console.log(`File Changed: ${changeEvent.document.uri}`);
			for (const change of changeEvent.contentChanges) {
				// Output Text being added/changed in the debug console
				 console.log(change.text); 
			}
		});
		

	});
}

// this method is called when the extension is deactivated
export function deactivate() {}
