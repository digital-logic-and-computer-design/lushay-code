// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as vscode from 'vscode';
import * as path from 'path';
import { existsSync, fstat, rm, rmSync, statSync } from 'fs';
import { ConstraintsEditor } from './panels/constraints-editor';
import { writeFileSync } from 'fs';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export async function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(ConstraintsEditor.register(context));
}
