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
    returnTypeIsList?: boolean;
    returnTypeEntityProperty?: string;
    returnTypeAssignableTo?: string;
    properties?: Record<string, Record<string, PropertyData>>;
    onChange?: string;
    translations?: Record<string, string>;
    multiline?: boolean;
    setLabel?: boolean;
    isLinked?: boolean;
    isMetaData?: boolean;
    defaultType?: string;
    parameterIsList?: boolean;
    isPath?: string;
    pathType?: string;
    allowNonPersistableEntities?: boolean;
    entityProperty?: string;
    actionVariables?: Array<{
        key: string;
        type: string;
        caption: string;
    }>;
    category?: string;
}

export interface WidgetData {
    id: string;
    name: string;
    description?: string;
    pluginWidget?: boolean;
    offlineCapable?: boolean;
    mobile?: boolean;
    supportedPlatform?: string;
    needsEntityContext?: boolean;
    studioProCategory?: string;
    studioCategory?: string;
    helpUrl?: string;
    phonegap?: {
        enabled: boolean;
    };
    properties?: Record<string, Record<string, PropertyData | { type: string; category?: string }>>;
}

export interface YamlData {
    widget: WidgetData;
}
