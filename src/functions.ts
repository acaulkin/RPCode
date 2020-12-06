import * as vscode from 'vscode';

export function helloWorld(
	textChanges: string, ifStatements: number, forLoops: number, 
	whileLoops: number,experiencePoints: number, currentLevel: number, experienceThresholds: Array<number>, 
	regexIf: RegExp, regexFor: RegExp, regexWhile: RegExp) {
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
				vscode.window.setStatusBarMessage('+1 XP Gained!', 10000);
			}
			if ((textChanges.match(regexFor)||[]).length > forLoops) {
				forLoops = (textChanges.match(regexFor)||[]).length;
				experiencePoints += 5;
				vscode.window.setStatusBarMessage('+5 XP Gained!', 10000);
			}
			if ((textChanges.match(regexWhile)||[]).length > whileLoops) {
				whileLoops = (textChanges.match(regexFor)||[]).length;
				experiencePoints += 5;
				vscode.window.setStatusBarMessage('+5 XP Gained!', 10000);
			}

			// Level up check
			if (experiencePoints >= experienceThresholds[currentLevel]) {
				vscode.window.showInformationMessage(`Congratulations! You are now level: ${currentLevel}`);
				currentLevel += 1;
			}
		});
}