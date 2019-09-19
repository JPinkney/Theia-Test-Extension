/********************************************************************************
 * Copyright (C) 2019 Red Hat and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { LanguagesMainImpl } from '@theia/plugin-ext/lib/main/browser/languages-main';
import { injectable, postConstruct } from 'inversify';
import { LanguagesInfo } from '@theia/plugin-ext/lib/common/plugin-api-rpc';
import { SerializedDocumentFilter } from '@theia/plugin-ext/lib/common/plugin-api-rpc-model';
import * as theia from '@theia/plugin';

export enum FeatureEnum {
    Completion = 'Completion',
    Definition = 'Definition',
    Declaration = 'Declaration',
    Reference = 'Reference',
    SignatureHelp = 'SignatureHelp',
    Implementation = 'Implementation',
    TypeDefinition = 'TypeDefinition',
    Hover = 'Hover',
    DocumentHighlight = 'DocumentHighlight',
    WorkspaceSymbol = 'WorkspaceSymbol',
    DocumentLink = 'DocumentLink',
    CodeLens = 'CodeLens',
    DocumentSymbol = 'Outline',
    DocumentFormatting = 'DocumentFormatting',
    RangeFormatting = 'RangeFormatting',
    OnTypeFormatting = 'OnTypeFormatting',
    FoldingRange = 'FoldingRange',
    DocumentColor = 'DocumentColor',
    QuickFix = 'QuickFix',
    Rename = 'Rename'
}

@injectable()
export class LanguagesMainPluginMetrics extends LanguagesMainImpl {

    // Map of vscode extension id's to the feature to the handle
    protected extensionIDToExtensionFeatureMap = new Map<string, Map<FeatureEnum, number>>();

    @postConstruct()
    protected init(): void {
        setInterval(() => {
            console.log(this.extensionIDToExtensionFeatureMap);
        }, 10000);
    }

    $registerCompletionSupport(handle: number, languageInfo: LanguagesInfo,
        selector: SerializedDocumentFilter[], triggerCharacters: string[], supportsResolveDetails: boolean): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Completion, handle);
        super.$registerCompletionSupport(handle, languageInfo, selector, triggerCharacters, supportsResolveDetails);
    }

    $registerDefinitionProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Definition, handle);
        super.$registerDefinitionProvider(handle, languageInfo, selector);
    }

    $registerDeclarationProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Declaration, handle);
        super.$registerDeclarationProvider(handle, languageInfo, selector);
    }

    $registerReferenceProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Reference, handle);
        super.$registerReferenceProvider(handle, languageInfo, selector);
    }

    $registerSignatureHelpProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[], metadata: theia.SignatureHelpProviderMetadata): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.SignatureHelp, handle);
        super.$registerSignatureHelpProvider(handle, languageInfo, selector, metadata);
    }

    $registerImplementationProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Implementation, handle);
        super.$registerImplementationProvider(handle, languageInfo, selector);
    }

    $registerTypeDefinitionProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.TypeDefinition, handle);
        super.$registerTypeDefinitionProvider(handle, languageInfo, selector);
    }

    $registerHoverProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Hover, handle);
        super.$registerHoverProvider(handle, languageInfo, selector);
    }

    $registerDocumentHighlightProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.DocumentHighlight, handle);
        super.$registerDocumentHighlightProvider(handle, languageInfo, selector);
    }

    $registerWorkspaceSymbolProvider(handle: number, languageInfo: LanguagesInfo): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.WorkspaceSymbol, handle);
        super.$registerWorkspaceSymbolProvider(handle, languageInfo);
    }

    $registerDocumentLinkProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.DocumentLink, handle);
        super.$registerDocumentLinkProvider(handle, languageInfo, selector);
    }

    $registerCodeLensSupport(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[], eventHandle: number): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.CodeLens, handle);
        super.$registerCodeLensSupport(handle, languageInfo, selector, eventHandle);
    }

    $registerOutlineSupport(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.DocumentSymbol, handle);
        super.$registerOutlineSupport(handle, languageInfo, selector);
    }

    $registerDocumentFormattingSupport(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.DocumentFormatting, handle);
        super.$registerDocumentFormattingSupport(handle, languageInfo, selector);
    }

    $registerRangeFormattingProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.RangeFormatting, handle);
        super.$registerRangeFormattingProvider(handle, languageInfo, selector);
    }

    $registerOnTypeFormattingProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[], autoFormatTriggerCharacters: string[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.OnTypeFormatting, handle);
        super.$registerOnTypeFormattingProvider(handle, languageInfo, selector, autoFormatTriggerCharacters);
    }

    $registerFoldingRangeProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.FoldingRange, handle);
        super.$registerFoldingRangeProvider(handle, languageInfo, selector);
    }

    $registerDocumentColorProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.DocumentColor, handle);
        super.$registerDocumentColorProvider(handle, languageInfo, selector);
    }

    $registerQuickFixProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[], codeActionKinds?: string[]): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.QuickFix, handle);
        super.$registerQuickFixProvider(handle, languageInfo, selector);
    }

    $registerRenameProvider(handle: number, languageInfo: LanguagesInfo, selector: SerializedDocumentFilter[], supportsResolveLocation: boolean): void {
        this.registerPluginWithFeatureHandle(languageInfo.pluginName, FeatureEnum.Rename, handle);
        super.$registerRenameProvider(handle, languageInfo, selector, supportsResolveLocation);
    }

    private registerPluginWithFeatureHandle(pluginID: string, feature: FeatureEnum, handle: number): void {
        const handleToExtensionFeature = this.extensionIDToExtensionFeatureMap.get(pluginID);
        if (!handleToExtensionFeature) {
            this.extensionIDToExtensionFeatureMap.set(pluginID, new Map().set(feature, handle));
        } else {
            handleToExtensionFeature.set(feature, handle);
        }
    }
}
