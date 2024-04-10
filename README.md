# FOSS Toggle

Toggle between arbitrary collections of settings in VSCode; totally inspired by rebornix.toggle, but written FOSS from the ground-up.

# Usage

Add a keybinding similar to the following:

```json
{
  "key": "F3",
  "command": "foss-toggle.toggle",
  "when": "editorTextFocus",
  "args": {
    "id": "zoom",
    "value": [
      {
        "window.zoomLevel": 0,
      },
      {
        "window.zoomLevel": 3,
      }
    ]
  }
},
```

## Bonus

Combine this with an extension like multi-command for superpowers:

```json
"multiCommand.commands": [
  {
    "command": "multiCommand.togglePresentationMode",
    "sequence": [
      "workbench.action.togglePanel",
      "workbench.action.toggleSidebarVisibility",
      "workbench.action.toggleAuxiliaryBar",
      "workbench.action.toggleZenMode",
      {
        "command": "foss-toggle.toggle",
        "args": {
          "id": "toggle-presentation-mode",
          "value": [
            {
              "window.zoomLevel": 0,
              "editor.lineHeight": 14,
              "editor.rulers": [
                80
              ],
              "breadcrumbs.enabled": true,
              "workbench.statusBar.visible": true,
              "editor.guides.indentation": true,
              "workbench.editor.showIcons": true,
              "scm.diffDecorations": "all",
              "editor.glyphMargin": true,
              "workbench.activityBar.visible": true,
            },
            {
              "window.zoomLevel": 3,
              "editor.lineHeight": 18,
              "editor.rulers": [],
              "breadcrumbs.enabled": false,
              "workbench.statusBar.visible": false,
              "editor.guides.indentation": false,
              "workbench.editor.showIcons": false,
              "scm.diffDecorations": "none",
              "editor.glyphMargin": false,
              "workbench.activityBar.visible": false,
                "scrollbarSlider.background": "#9aa0",
                "scrollbarSlider.activeBackground": "#f000",
                "scrollbarSlider.hoverBackground": "#ff00",
                "editorOverviewRuler.border": "#ff00",
                "editorOverviewRuler.findMatchForeground": "#ff00",
                "editorOverviewRuler.rangeHighlightForeground": "#ff00",
                "editorOverviewRuler.selectionHighlightForeground": "#ff00",
                "editorOverviewRuler.wordHighlightForeground": "#ff00",
                "editorOverviewRuler.wordHighlightStrongForeground": "#ff00",
                "editorOverviewRuler.modifiedForeground": "#ff00",
                "editorOverviewRuler.addedForeground": "#ff00",
                "editorOverviewRuler.deletedForeground": "#ff00",
                "editorOverviewRuler.errorForeground": "#ff00",
                "editorOverviewRuler.warningForeground": "#ff00",
                "editorOverviewRuler.infoForeground": "#ff00",
                "editorOverviewRuler.bracketMatchForeground": "#ff00"
              }
            }
          ]
        }
      }
    ]
  }
]
```

# License

Distributed under the MIT License. See LICENSE.txt for more information.
