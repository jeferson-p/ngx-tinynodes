import { ToolSettings } from '@editorjs/editorjs';
import { BasePlugin } from '../lib/types/plugins';
import { EditorJSConfig } from '../lib/types/config';

export class TestClass {
  constructor() {}
  render() {
    return document.createElement('div');
  }
}

export class MockPlugin implements BasePlugin {
  public plugin(): ToolSettings {
    return { class: TestClass };
  }
  shortcut() {
    return 'test-shortcut';
  }
}

export class MockEditorJS {
  blocks: any;
  saver: any;
  version: string;
  destroy: () => void;

  constructor(private config: EditorJSConfig) {
    this.version = 'test';

    this.destroy = () => {};

    this.blocks = {
      clear: () => {},
      render: () => {}
    };

    this.saver = {
      save: (): Promise<any> => {
        return Promise.resolve({
          time: Date.now(),
          version: 'test',
          blocks: []
        });
      }
    };
    (config as any).onReady();
  }
}