import logo from './logo.svg';
// import './App.scss';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import {
  BlockEditorKeyboardShortcuts,
  BlockEditorProvider,
  BlockList,
  BlockTools,
  BlockInspector,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor';
import { Popover, SlotFillProvider } from '@wordpress/components';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import '@wordpress/format-library';

function App() {
  const [ blocks, updateBlocks ] = useState( [] );

  return (
      <div className="playground">
        <ShortcutProvider>
          <SlotFillProvider>
            <BlockEditorProvider
                value={ blocks }
                onInput={ updateBlocks }
                onChange={ updateBlocks }
            >
              <div className="playground__sidebar">
                <BlockInspector />
              </div>
              <div className="playground__content">
                <BlockTools>
                  <div className="editor-styles-wrapper">
                    <BlockEditorKeyboardShortcuts.Register />
                    <WritingFlow>
                      <ObserveTyping>
                        <BlockList />
                      </ObserveTyping>
                    </WritingFlow>
                  </div>
                </BlockTools>
              </div>
              <Popover.Slot />
            </BlockEditorProvider>
          </SlotFillProvider>
        </ShortcutProvider>
      </div>
  )
}


export default App;
