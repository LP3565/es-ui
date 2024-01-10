declare const _default: import("vue").DefineComponent<{
    readonly mold: import("../../utils/vue/props/types").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "error" | "info" | "fab", unknown, "default", boolean>;
    readonly type: import("../../utils/vue/props/types").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
    readonly size: import("../../utils/vue/props/types").EpPropFinalized<StringConstructor, "" | "default" | "large" | "small", never, "", false>;
    readonly disabled: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mold: import("../../utils/vue/props/types").EpPropFinalized<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "error" | "info" | "fab", unknown, "default", boolean>;
    readonly type: import("../../utils/vue/props/types").EpPropFinalized<StringConstructor, "button" | "submit" | "reset", unknown, "button", boolean>;
    readonly size: import("../../utils/vue/props/types").EpPropFinalized<StringConstructor, "" | "default" | "large" | "small", never, "", false>;
    readonly disabled: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    readonly type: import("../../utils/vue/props/types").EpPropMergeType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly mold: import("../../utils/vue/props/types").EpPropMergeType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "error" | "info" | "fab", unknown>;
    readonly disabled: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly size: import("../../utils/vue/props/types").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>;
}, {}>;
export default _default;
