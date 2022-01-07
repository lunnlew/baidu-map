import { BMapGL } from "typings";
const CustomPolyline = function (this: any) {
    let points = arguments[0] as BMapGL.Point[];
    let options = arguments[1] || {} as BMapGL.PolylineOptions

    options = Object.assign({}, {
        arrowLength: 15,
        arrowAngle: 25,
        arrowWidth: 1,
        arrowPadding: 20,
        arrowHeadlen: 10,
        arrowColor: '#FFF',
        strokeColor: '#000',
        strokeWeight: 5,
        strokeOpacity: 1,
        strokeStyle: 'solid',
        lineCap: 'round',
        lineJoin: 'round',
    }, options)

    this._map = null as any;
    this._canvas = null as any;
    this._ctx = null as any;
    this.zIndex = options.zIndex || 0;
    /**
     * 隐藏
     */
    this.hide = function () {
        if (this._canvas) {
            this._canvas.style.display = 'none';
        }
    };
    /**
     * 显示
     */
    this.show = function () {
        if (this._canvas) {
            this._canvas.style.display = 'block';
        }
    };
    /**
     * 调整大小
     */
    this.adjustSize = function () {
        if (this._map && this._canvas) {
            let size = this._map.getSize();
            let canvas = this._canvas;
            canvas.width = size.width;
            canvas.height = size.height;
            canvas.style.width = canvas.width + 'px';
            canvas.style.height = canvas.height + 'px';
        }
    }
    /**
     * 调整缩放
     */
    this.adjustRatio = function (ctx: CanvasRenderingContext2D & {
        backingStorePixelRatio?: number;
        webkitBackingStorePixelRatio?: number;
        mozBackingStorePixelRatio?: number;
        msBackingStorePixelRatio?: number;
        oBackingStorePixelRatio?: number;
    } | null) {
        if (!ctx) return;
        var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
        var canvasWidth = ctx.canvas.width;
        var canvasHeight = ctx.canvas.height;
        ctx.canvas.width = canvasWidth * pixelRatio;
        ctx.canvas.height = canvasHeight * pixelRatio;
        ctx.canvas.style.width = canvasWidth + 'px';
        ctx.canvas.style.height = canvasHeight + 'px';
        ctx.scale(pixelRatio, pixelRatio);
    }

    /**
     * 绘制
     */
    this.draw = function () {
        if (this._map && this._canvas) {
            this._draw()
        }
    }
    this._draw = function () {
        let ctx = this._ctx
        let pixel_points = points.map(point => ({
            pixel: this._map.pointToOverlayPixel(point)
        }));
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (pixel_points.length < 2) return;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = options.strokeWeight;
        if (options.strokeStyle == 'dash') {
            ctx.setLineDash([5, 5]);
        }
        ctx.strokeStyle = options.strokeColor;
        ctx.globalAlpha = options.strokeOpacity;
        ctx.lineCap = options.lineCap as any;
        ctx.lineJoin = options.lineJoin as any;
        ctx.moveTo(pixel_points[0].pixel.x, pixel_points[0].pixel.y);
        for (let i = 1; i < pixel_points.length; i++) {
            ctx.lineTo(pixel_points[i].pixel.x, pixel_points[i].pixel.y);
        }
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        this.drawArrow(ctx, pixel_points);
    }
    this.drawArrow = function (ctx: any, pixel_points: string | any[]) {
        for (let i = 1; i < pixel_points.length; i++) {
            let line_len = Math.sqrt(Math.pow(pixel_points[i].pixel.x - pixel_points[i - 1].pixel.x, 2) + Math.pow(pixel_points[i].pixel.y - pixel_points[i - 1].pixel.y, 2));
            let padding = options.arrowPadding
            let unit_len = options.arrowLength + padding;
            let k = (pixel_points[i].pixel.y - pixel_points[i - 1].pixel.y) / (pixel_points[i].pixel.x - pixel_points[i - 1].pixel.x);
            let p = pixel_points[i].pixel.x - pixel_points[i - 1].pixel.x
            let unit_x_len = Math.sqrt(Math.pow(unit_len, 2) / (1 + Math.pow(k, 2)))
            let unit_y_len = k * unit_x_len
            let padding_x = Math.sqrt(Math.pow(padding, 2) / (1 + Math.pow(k, 2)))
            let padding_y = k * padding_x
            let count = Math.floor((line_len + padding) / unit_len);
            for (let j = 1; j <= count; j++) {
                let diff_start_x = unit_x_len * (j - 1)
                let diff_start_y = unit_y_len * (j - 1)
                let diff_end_x = unit_x_len * j - padding_x
                let diff_end_y = unit_y_len * j - padding_y
                if (p < 0) {
                    diff_start_x = -diff_start_x
                    diff_start_y = -diff_start_y
                    diff_end_x = -diff_end_x
                    diff_end_y = -diff_end_y
                }
                this._drawArrow(ctx,
                    pixel_points[i - 1].pixel.x + diff_start_x,
                    pixel_points[i - 1].pixel.y + diff_start_y,
                    pixel_points[i - 1].pixel.x + diff_end_x,
                    pixel_points[i - 1].pixel.y + diff_end_y,
                    options.arrowAngle,
                    options.arrowHeadlen,
                    options.arrowWidth,
                    options.arrowColor
                );
            }
        }
    }
    /**
     * @param ctx  Canvas绘图环境
     * @param fromX 
     * @param fromY 起点坐标
     * @param toX 
     * @param toY 终点坐标
     * @param theta 三角斜边一直线夹角
     * @param headlen 三角斜边长度
     * @param width 箭头线宽度
     * @param color 箭头颜色
     */
    this._drawArrow = (ctx: CanvasRenderingContext2D,
        fromX: number, fromY: number,
        toX: number, toY: number,
        theta: number,
        headlen: number,
        width: number,
        color: string) => {
        var theta = theta || 30,
            headlen = headlen || 10,
            width = width || 1,
            color = color || '#000',
            angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
            angle1 = (angle + theta) * Math.PI / 180,
            angle2 = (angle - theta) * Math.PI / 180,
            topX = headlen * Math.cos(angle1),
            topY = headlen * Math.sin(angle1),
            botX = headlen * Math.cos(angle2),
            botY = headlen * Math.sin(angle2);
        ctx.save();
        ctx.beginPath();
        var arrowX, arrowY;
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        arrowX = toX + topX;
        arrowY = toY + topY;
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(toX, toY);
        arrowX = toX + botX;
        arrowY = toY + botY;
        ctx.lineTo(arrowX, arrowY);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    /**
     * 移除方法
     */
    this.remove = function () {
        this._canvas.remove()
        this._canvas = null
        this._ctx = null
        this._map = null
    }
    /**
     * 初始化方法
     */
    this.initialize = function (map: BMapGL.Map) {
        this._map = map;
        if (!this._canvas) {
            let canvas = this._canvas = document.createElement('canvas');
            canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';';
            let ctx = this._ctx = canvas.getContext('2d');
            this.adjustSize();
            this.adjustRatio(ctx);
            map.getPanes().labelPane.appendChild(canvas);
        }
        return this.canvas;
    }
}

export default CustomPolyline;