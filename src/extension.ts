import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('自动保存插件已激活');

	const interval = 5 * 60 * 1000;
	setInterval(() => {
		vscode.workspace.saveAll().then(() => {
			console.log('所有文件已自动保存');
		});
	}, interval);
}

export function deactivate() {
	console.log('自动保存插件已停用');
}