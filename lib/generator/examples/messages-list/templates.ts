import { Import, TemplatesBuilder } from "../../src";
import { PluginContextDefinition, PluginContextFlatDefinition } from "./context";
import { PluginOptions } from "./plugin";

export type PluginTemplatesRegistry = {
  main: { file: PluginContextFlatDefinition['file'], imports: Import[], messages: PluginContextDefinition['messages'][] },
  listType: { messages: PluginContextDefinition['messages'][] },
}

export const registerPluginTemplates: TemplatesBuilder<PluginOptions, PluginTemplatesRegistry> = (t) => {
  t.register('main', ({ file, imports, messages }) => `
    ${t.renderHeader(file.desc)}

    ${t.renderImports(imports)}

    ${t.render('listType', { messages })} 
  `)

  t.register('listType', ({ messages }) => `
    type Messages = {
      ${messages.map(message => `'${message.path}': ${message.thing.usagename}`)}
    }
  `)
}