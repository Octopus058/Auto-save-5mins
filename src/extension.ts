import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	process.stdout.write('Auto save activated.\n');

	const interval = 5 * 60 * 1000;
	setInterval(() => {
		vscode.workspace.saveAll().then(() => {
			process.stdout.write('All saved!\n');
		});
	}, interval);
}

export function deactivate() {
	process.stdout.write('Auto save deactivated.\n');
}