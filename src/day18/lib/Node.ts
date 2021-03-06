export interface Node {
    parentNode:Node|null;
    depth(): number;
    toString(): string;
    tree(): Node;
    inOrder():Node[];
    shouldExplode():Boolean;
    shouldSplit():Boolean;
    explode():void;
    split():void;
    replaceChild(oldChild:Node, newChild:Node):void;
    magnitude():number;
}