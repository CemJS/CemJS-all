
declare namespace front {

    type AnyObj = {
        [key: string]: any
    }

    type ListenerObj = {
        type: String;
        fn(obj: AnyObj): void;
    }

    type Static_ = {
        setInterval: Number
        setTimeout: Number
        name: String
        [key: string]: any
    }

    type Events_ = {
        [key: string]: any
    }

    type Variable_ = {
        [key: string]: any
    }

    type Listener_ = {
        start?(e: any): void;
        finish?(e: any): void;
        clickAny?(e: any): void;
        keydownAny?(e: any): void;
        keyupAny?(e: any): void;
        scrollAny?(e: any): void;
    }

    type Fn_ = {
        init(index?: Number): void;
        link(e: any): void;
        linkChange(link: String, data?: any): void;
        initAll(): void;
        initOne(name: String, data: front.AnyObj, ifOpen?: any): void;
        initAuto(key: any, fn?: any): void;
        clearData(): void;
        event(url: String, Listener: ListenerObj[]): any;
        log(...params: any): void;
    }

    type Front = {
        Static: Static_;
        Variable: Variable_;
        Ref: AnyObj;
        Func: AnyObj;
        Fn: Fn_;
        Services: AnyObj;
        Events: AnyObj;
        listener: Listener_;
        func: any;
        loader(): void;
        display(): void;
        destroy?(): void;
        degubStatic: boolean;
        InitIgnore: string[];
        InitAll: string[];
    }
}



declare const front: front.Front
declare const Static: front.Static_
declare const Ref: front.AnyObj
declare const Func: front.AnyObj
declare const Fn: front.Fn_
declare const Events: front.AnyObj

interface jsxResult {
    tag: String,
    data: any,
    children: any[]
}

interface Configs {
    cemjs: any
    pages: any
    frontends: any
    services: any
}

export declare function Cemjsx(tag: String, data: any, ...children: any[]): jsxResult
export declare function initProject(configs: Configs): void
export { Static, Ref, front, Func, Fn, Events }