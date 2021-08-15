/**
 * @description 获取编辑器默认配置
 * @author wangfupeng
 */
export declare function getDefaultEditorConfig(): {
    hoverbarKeys: {
        desc: string;
        match: (editor: import("@wangeditor/core").IDomEditor, n: any) => boolean;
        menuKeys: string[];
    }[];
};
export declare function getSimpleEditorConfig(): {
    hoverbarKeys: {
        desc: string;
        match: (editor: import("@wangeditor/core").IDomEditor, n: any) => boolean;
        menuKeys: string[];
    }[];
};
export declare function getDefaultToolbarConfig(): {
    toolbarKeys: (string | {
        key: string;
        title: string;
        iconSvg: string;
        menuKeys: string[];
    })[];
};
export declare function getSimpleToolbarConfig(): {
    toolbarKeys: (string | {
        key: string;
        title: string;
        iconSvg: string;
        menuKeys: string[];
    })[];
};
