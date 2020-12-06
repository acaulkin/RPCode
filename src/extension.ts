import * as vscode from 'vscode';
// TODO: create clickable status bar item that shows the user their xp. 

// TODO: Link this to some kind of database that will be stored locally on a user's 
// machine that will pull all their info to be used instead of initializing everything at zero.

export function activate(context: vscode.ExtensionContext) {
	console.log('RPCode is now active!');
	vscode.window.createStatusBarItem();
	// Turning on xp tracking
	vscode.commands.registerCommand('rpcode.xpTrack', () => {

		let textChanges: string = "";		
		var ifStatements = 0;
		var forLoops = 0;
		var experiencePoints = 0;
		var currentLevel = 1;
		var experienceThresholds = [10, 20, 40, 80, 160, 320, 640, 1280, 2560];
		
		var regexIf = new RegExp('if', 'g');
		var regexFor = new RegExp('for', 'g');

		// Detecting change event in current editor
		vscode.workspace.onDidChangeTextDocument(changeEvent => {
			console.log(`File Changed: ${changeEvent.document.uri}`);
			for (const change of changeEvent.contentChanges) {
				textChanges = textChanges + change.text;	 
			}

			// Checking if there are any matches in regex statements, 
			// and awarding experience if there are
			if ((textChanges.match(regexIf)||[]).length > ifStatements) {
				ifStatements = (textChanges.match(regexIf)||[]).length;
				experiencePoints += 1;
				vscode.window.setStatusBarMessage('+1 XP Gained!', 5000);
			}
			if ((textChanges.match(regexFor)||[]).length > forLoops) {
				forLoops = (textChanges.match(regexFor)||[]).length;
				experiencePoints += 5;
				vscode.window.setStatusBarMessage('+5 XP Gained!', 5000);
			}

			// Level up check
			if (experiencePoints >= experienceThresholds[currentLevel - 1]) {
				vscode.window.showInformationMessage(`Congratulations! You are now level: ${currentLevel}`);
				currentLevel += 1;
			}
		});
	});
}

// this method is called when the extension is deactivated
export function deactivate() {}
