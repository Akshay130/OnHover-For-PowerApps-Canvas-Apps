import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class Onhoverv4 implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _notifyOutputChanged: () => void;
    private _container:HTMLDivElement;
    private _isHovered:boolean;
    private _isClicked:boolean;
    private _x:number;
    private _y:number;

    constructor() { }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._isClicked = false;
        this._notifyOutputChanged = notifyOutputChanged;
        this._container = container;
        this._container.style.width = context.parameters.CWidth.raw! + "px";
        this._container.style.height = context.parameters.CHeight.raw! + "px";
       
        this._container.addEventListener("mouseover", () => {
            this._isHovered = true;
            this._notifyOutputChanged();
        });

        this._container.addEventListener("mouseout", () => {
            this._isHovered = false;
            this._notifyOutputChanged();
        });

        this._container.addEventListener("mousedown", () => {
            this._isClicked = true; 
            this._notifyOutputChanged();
            
            document.addEventListener("mouseup", () => {
                this._isClicked = false; 
                this._notifyOutputChanged();
            });
        });

        this._container.addEventListener("mousemove", (event: MouseEvent) => {
            this._x = event.pageX; //- this._container.offsetLeft;
            this._y = event.pageY; //- this._container.offsetTop; 
            this._notifyOutputChanged();
        });
        
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {}

    public getOutputs(): IOutputs {return { 
        HoverToggle: this._isHovered, 
        ClickToggle: this._isClicked,
        X_coordinate: this._x,
        Y_coordinate: this._y,  
    } }

    public destroy(): void {}
}
