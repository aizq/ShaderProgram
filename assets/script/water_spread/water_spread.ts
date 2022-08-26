import { _decorator, Component, Sprite, Material, EventTouch, NodeEventType, UITransform, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('water_spread')
export class water_spread extends Component {
    @property(Sprite)
    bg:Sprite = null!;

    private material:Material = null;

    private waveOffset: number = 0.0;

    start() {
        this.material = this.bg.getMaterial(0);
        this.bg.node.on(NodeEventType.TOUCH_END, this.touchStartEvent, this)
    }

    touchStartEvent(evt: EventTouch) {
        let pos = evt.getLocation();
        let temp:Vec2 = new Vec2(pos.x/this.bg.node.getComponent(UITransform).width, 
            (this.bg.node.getComponent(UITransform).height-pos.y)/this.bg.node.getComponent(UITransform).height);
        this.material.setProperty('center', temp);
        this.waveOffset = 0.0;
    }

    update(dt:number){
        if (this.waveOffset > 2.0) return;

        this.waveOffset += dt;
        this.material.setProperty('wave_offset', this.waveOffset);
    }
}

