import { _decorator, Component, Sprite, Material, Toggle, clamp, Slider, renderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mosaic')
export class mosaic extends Component {
    @property(Sprite)
    role:Sprite = null!;
    @property(Sprite)
    bg:Sprite = null!;
    @property(Toggle)
    toggle:Toggle = null!;

    private material:Material = null;
    private material2:Material = null;
    // private matInstance:renderer.MaterialInstance = null;

    start() {
        this.material = this.role.getMaterial(0);
        this.material2 = this.bg.getMaterial(0);
        // this.matInstance = this.role.getMaterialInstance(0)
    }

    setPixelCount(slide: Slider, type: 'x' | 'y') {
        //材质是共用的，以最后设置的为准
        this.material.setProperty(`${type}_count`, Math.floor(slide.progress * 1000));
        this.material2.setProperty(`${type}_count`, Math.floor(slide.progress * 100));
    }

    btnToggle() {
        // this.material._defines('USE_MASAIC', this.toggle.isChecked, 0, true);
        // this.material['USE_MASAIC'] = this.toggle.isChecked;
        // this.matInstance.recompileShaders({
        //     "USE_MASAIC":this.toggle.isChecked
        // },0)
    }
}

