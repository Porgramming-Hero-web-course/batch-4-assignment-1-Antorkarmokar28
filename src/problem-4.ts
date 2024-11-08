{
    //
    type Circle = {
        shape: string;
        radius: number;
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (param: Shape): number => {
        if (param.shape === 'circle') {
            return Math.PI * param.radius * param.radius;
        }
        else if (param.shape === 'rectangle') {
            return param.width * param.height;
        };
    };

    //
}