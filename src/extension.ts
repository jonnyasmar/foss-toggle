import * as vscode from 'vscode';

interface ToggleArgs {
  id: string;
  value: Array<Record<string, any>>;
}

let toggleCache: Record<string, number> = {};

function shallowEqual(object1: Record<string, any>, object2: Record<string, any>): boolean {
  const keys1 = Object.keys(object1);
  if (keys1.length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

async function toggleConfiguration(args: ToggleArgs): Promise<void> {
  if (!args?.id || !args.value?.length) {
    vscode.window.showErrorMessage('Invalid args.');
    return;
  }

  const workspaceConfig = vscode.workspace.getConfiguration();
  const allKeys = new Set<string>(args.value.flatMap(Object.keys));

  let currentIndex = toggleCache[args.id] ?? args.value.findIndex(config =>
    shallowEqual(config, Object.fromEntries([...allKeys].map(key => [key, workspaceConfig.get(key)])))
  );

  const nextIndex = (currentIndex + 1) % args.value.length;
  toggleCache[args.id] = nextIndex;

  const nextConfig = args.value[nextIndex];
  for (const [key, value] of Object.entries(nextConfig)) {
    await workspaceConfig.update(key, value, true);
  }
}

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('foss-toggle.toggle', toggleConfiguration);
  context.subscriptions.push(disposable);
}

export function deactivate(): void { }
