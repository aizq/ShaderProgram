import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('rotationNode')
export class rotationNode extends Component {
    @property({ type: Vec3 })
    rotationSpeed:Vec3 = new Vec3(0,0,0)

    start() {

    }

    update(deltaTime: number) {
        let euler = this.node.eulerAngles;
        let rx = (euler.x + deltaTime * this.rotationSpeed.x) % 360;
        let ry = (euler.y + deltaTime * this.rotationSpeed.y) % 360;
        let rz = (euler.z + deltaTime * this.rotationSpeed.z) % 360;
        this.node.setRotationFromEuler(rx,ry,rz);
    }
}

