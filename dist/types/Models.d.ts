export interface PicaioResponse<T> {
    payload: Array<PicaioResource<T>> | null;
    errors: Array<PicaioError> | null;
    actions: Array<PicaioAction> | null;
    meta: object | null;
}
export interface PicaioResource<T = any> {
    name: string;
    uuid: string;
    attributes: T | null;
    links: Array<PicaioLink> | null;
    actions: Array<PicaioAction> | null;
}
export interface PicaioError {
    error_id: string;
    code: string;
    label: string;
    meta: object | null;
}
export interface PicaioAction {
    name: string;
    method: string;
    href: string;
    display_as: string;
    label: string;
    fields: Array<object> | null;
}
export interface PicaioLink {
    url: string;
    display_as: string;
    label: string;
}
