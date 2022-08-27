import { _decorator, Component, Sprite, Material, EventTouch, NodeEventType, UITransform, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('circle_head')
export class circle_head extends Component {
    @property(Sprite)
    bg:Sprite = null!;

    private material:Material = null;

    start() {
        this.material = this.bg.getMaterial(0);
        this.material.setProperty('center', new Vec2(0.5,0.5));
        this.material.setProperty('wh_ratio', this.bg.getComponent(UITransform).width/this.bg.getComponent(UITransform).height);
        this.material.setProperty('radius', 0.4);
        this.material.setProperty('blur', 0.01);
    }
}

