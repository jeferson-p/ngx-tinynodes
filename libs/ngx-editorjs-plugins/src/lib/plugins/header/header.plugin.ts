import { Injectable } from '@angular/core';
import Header from '@editorjs/header';
import { ToolSettings } from '@editorjs/editorjs';
import { BasePlugin } from '../../types/plugins';

/**
 * m
 */
@Injectable()
export class PluginHeader implements BasePlugin {
  /**
   * Returns the plugin settings
   */
  public plugin(): ToolSettings {
    return Header;
  }
}