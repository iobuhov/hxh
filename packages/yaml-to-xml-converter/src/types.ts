export interface PropertyData {
    type: string;
    caption: string;
    description?: string;
    default?: any;
    required?: boolean;
    isList?: boolean;
    dataSource?: string;
    enumerationValues?: Record<string, string>;
    selectionTypes?: string[];
    attributeTypes?: string[];
    associationTypes?: string[];
    returnType?: string;
    properties?: Record<string, Record<string, PropertyData>>;
    onChange?: string;
    translations?: Record<string, string>;
}

export interface WidgetData {
    id: string;
    name: string;
    description?: string;
    pluginWidget?: boolean;
    offlineCapable?: boolean;
    studioProCategory?: string;
    studioCategory?: string;
    helpUrl?: string;
    properties?: Record<string, Record<string, PropertyData>>;
}

export interface YamlData {
    widget: WidgetData;
}
