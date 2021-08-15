/**
 * @description hoverbar 配置
 * @author wangfupeng
 */
import { IDomEditor } from '@wangeditor/core';
export declare function genDefaultHoverbarKeys(): {
    desc: string;
    match: (editor: IDomEditor, n: any) => boolean;
    menuKeys: string[];
}[];
export declare function genSimpleHoverbarKeys(): {
    desc: string;
    match: (editor: IDomEditor, n: any) => boolean;
    menuKeys: string[];
}[];
