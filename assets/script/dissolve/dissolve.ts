import { _decorator, Component, Sprite, Material, Toggle, clamp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dissolve')
export class dissolve extends Component {
    @property(Sprite)
    man:Sprite = null!;
    @property(Toggle)
    toggle:Toggle = null!;


    private fadevalue:number = 0; //溶解值 0-1
    private material:Material = null;

    start() {
        this.material = this.man.getMaterial(0);
    }

    update(deltaTime: number) {
        if (this.toggle.isChecked) {
            this.fadevalue += deltaTime*0.4
        } else {
            this.fadevalue -= deltaTime*0.4
        }
        this.fadevalue = clamp(this.fadevalue, 0, 1);
        this.material.setProperty('fadevalue', this.fadevalue);
    }
}

