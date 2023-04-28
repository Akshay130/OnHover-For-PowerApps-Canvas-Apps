/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    CHeight: ComponentFramework.PropertyTypes.StringProperty;
    CWidth: ComponentFramework.PropertyTypes.StringProperty;
    HoverToggle: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    ClickToggle: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    X_coordinate: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    Y_coordinate: ComponentFramework.PropertyTypes.DecimalNumberProperty;
}
export interface IOutputs {
    CHeight?: string;
    CWidth?: string;
    HoverToggle?: boolean;
    ClickToggle?: boolean;
    X_coordinate?: number;
    Y_coordinate?: number;
}
